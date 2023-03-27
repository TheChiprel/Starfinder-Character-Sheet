function Boolean_Modifier_t (default_value = false, recalc_func){
//private methods

//public methods
    this.Add = function(id, do_recalc = false){
        m_arr.forEach(member => {
            if(member == id){
                console.error("Attempting to add boolean modifier with ID already added: '" + id + "'.")
                return false;
            }
        });
        
        m_arr.push(id);
        if (do_recalc){
            m_recalc_func();
        }
        //else NOTHING TO DO
        
        return true;
    }
    
    this.Remove = function(id, do_recalc = false){
        for (let i = 0; i < m_arr.length; i++){
            if(m_arr[i] == id){
                m_arr.splice(i, 1);
                if (do_recalc){
                    m_recalc_func();
                }
                
                return;
            }
        }
        //else NOTHING TO DO
        
        //console.error("Attempting to remove unknown boolean modifier: '" + id + "'.");
    }
    
    this.Get_Value = function(){
        if (m_arr.length > 0){
            return (!m_default_value);
        }
        //else NOTHING TO DO
        return m_default_value;
    }
    
    this.Has = function(id){
        for (let i = 0; i < m_arr.length; i++){
            if(m_arr[i] == id){
                return true;
            }
        }
        //else NOTHING TO DO
        
        return false;
    }

//private properties
    var self = this;
    var m_default_value = default_value;
    var m_arr = new Array();
    var m_recalc_func = recalc_func;
    
//public properties

//additional initialization
}

const MODIFIER_TYPES_T = Object.freeze(
    {
        "NUMBER": 'NUMBER',
        "DICE": 'DICE',
        "MULTIPLIER": 'MULTIPLIER',
        "DIVIDER": 'DIVIDER',
        "MIN_VALUE": 'MIN_VALUE',
        "MAX_VALUE": 'MAX_VALUE'
    }
);

function Dice_Modifier_t(dice_string){
//private methods

//public methods
    this.Get_String = function(){
        return self.dice_count + "d" + self.dice_sides;
    }

//private properties
    var self = this;

//public properties
    this.dice_count = null;
    this.dice_sides = null;

//additional initialization
    regex = /(\d+)(?:d)(\d+)/;
    result = regex.exec(dice_string);
    if (result != null){
        this.dice_count = parseInt(result[1]);
        this.dice_sides = parseInt(result[2]);
    }
}

function Modifier_t (value, main_str, sub_str = null, type = MODIFIER_TYPES_T.NUMBER){
//private methods

//public methods
    this.Change_Value = function(new_value){
        if (self.type == MODIFIER_TYPES_T.DICE){
            self.value = new Dice_Modifier_t(new_value);
        }else{
            self.value = new_value;
        }
    }
    
    this.Get_Value = function(){
        if (self.type == MODIFIER_TYPES_T.DICE){
            return self.value.Get_String();
        }else{
            return self.value;
        }
    }

//private properties
    var self = this;

//public properties
    this.type = type;
    this.main_str = main_str;
    this.sub_str = sub_str;
    this.value;

//additional initialization
    if (type == MODIFIER_TYPES_T.DICE){
        this.value = new Dice_Modifier_t(value);
    }else{
        this.value = value;
    }
}

function Modifier_Map_t(recalc){
//private methods
    var Get_Dice_Mod_String = function(dice_modifiers, sum){
        let ret_str = "";
        
        while (dice_modifiers.length > 0){
            let cur_dice_sides = dice_modifiers[0].dice_sides;
            i = 0;
            let cur_dmg_side_dice_count = dice_modifiers[0].dice_count;
            dice_modifiers.splice(0, 1);
            while (i < dice_modifiers.length){
                if (dice_modifiers[i].dice_sides == cur_dice_sides){
                    cur_dmg_side_dice_count += dice_modifiers[i].dice_count;
                    dice_modifiers.splice(i, 1);
                }else{
                    i++;
                }
            }
            
            if (ret_str != ""){
                ret_str += "+";
            }
            ret_str += cur_dmg_side_dice_count + "d" + cur_dice_sides;
        }
        if (sum != 0){
            ret_str += "+" + sum;
        }

        return ret_str;
    }

//public methods
    this.Add = function(id, modifier, do_recalc = false){
        if (m_mod_map.has(id)){
            console.warn("Attempting to add modifier with used id: " + id);
            return false;
        }

        m_mod_map.set(id, modifier);
        if (do_recalc){
            self.Call_Recalc();
        }

        return true;
    }

    this.Change_Value = function(id, new_value, do_recalc = false){
        if (m_mod_map.has(id)){
            var item = m_mod_map.get(id);
            if ((item.type == MODIFIER_TYPES_T.DICE) || (item.value != new_value)){
                item.Change_Value(new_value);
                if (do_recalc){
                    self.Call_Recalc();
                }
                return true;
            }
            return false;
        }
        console.warn("Attempting to change undefined modifier for id: " + id);
        return false;
    }

    this.Change_Substring = function(id, new_value){
        if (m_mod_map.has(id)){
            var item = m_mod_map.get(id);
            item.sub_str = new_value;
            return;
        }
        console.warn("Attempting to change undefined modifier for id: " + id);
    }

    this.Remove = function(id, do_recalc = false){
        if (m_mod_map.has(id)){
            m_mod_map.delete(id);
            if (do_recalc){
                m_recalc_func();
            }//else NOTHING TO DO
            return;
        }
        console.warn("Attempting to change undefined modifier for id: " + id);
    }

    this.Get_Sum = function(){
        let sum = 0;
        let multiplier = 1;
        let divider = 1;
        let dice_modifiers = new Array(0);
        let min = null;
        let max = null;
        m_mod_map.forEach((obj, key) => {
            switch (obj.type){
            case MODIFIER_TYPES_T.NUMBER:
                sum += obj.value;
                break;

            case MODIFIER_TYPES_T.DICE:
                dice_modifiers.push(obj.value);
                break;
                
            case MODIFIER_TYPES_T.MULTIPLIER:
                if (multiplier == 1){
                    multiplier = obj.value;
                }else{
                    multiplier += (obj.value - 1);
                }
                break;

            case MODIFIER_TYPES_T.DIVIDER:
                if (divider == 1){
                    divider = obj.value;
                }else{
                    divider += (obj.value - 1);
                }
                break;

            case MODIFIER_TYPES_T.MIN_VALUE:
                if (min == null){
                    min = obj.value;
                }else if (min < obj.value){
                    min = obj.value;
                }
                //else NOTHING TO DO
                break;


            case MODIFIER_TYPES_T.MAX_VALUE:
                if (max == null){
                    max = obj.value;
                }else if (max > obj.value){
                    max = obj.value;
                }
                //else NOTHING TO DO
                break;

            default:
                console.warn("Modifier '" + "' has unknown type '" + obj.type + "'. Calculation is impossible");
                return 0;
            }
        });

        if (dice_modifiers.length == 0){
            sum = Math.floor(sum * multiplier / divider);

            if ((max != null) && (max < sum)){
                sum = max;
            }else if ((min != null) && (min > sum)){
                sum = min;
            }
        }else{
            //TODO: multiplier, divider, min, max!
            sum = Get_Dice_Mod_String(dice_modifiers, sum);
        }

        //m_is_changed = false;
        return sum;
    }

/*     this.Is_Changed = function(){
        return m_is_changed;
    } */

    this.Get_Mod_Map = function(){
        var ret_Map = new Map();
        m_mod_map.forEach((obj, key) => {
            if (obj.sub_str != null){
                ret_Map.set(obj.main_str + " (" + obj.sub_str + ")", obj.Get_Value());
            }else{
                ret_Map.set(obj.main_str, obj.Get_Value());
            }
        });
        return ret_Map;
    }

    this.Call_Recalc = function(){
        m_recalc_func();
    }

//public methods

//private properties
    var self = this;
    var m_mod_map = new Map();
    var m_recalc_func = recalc;

//public properties

//additional initialization
}

function Damage_Modifier_t (
    value,
    damage_type = null,
    main_str,
    sub_str = null,
    mod_type = MODIFIER_TYPES_T.NUMBER
){
//private methods

//public methods
    this.Change_Value = function(new_value){
        if (self.mod_type == MODIFIER_TYPES_T.DICE){
            self.value = new Dice_Modifier_t(new_value);
        }else{
            self.value = new_value;
        }
    }
    
    this.Get_Value = function(){
        let value_str;
        if (self.mod_type == MODIFIER_TYPES_T.DICE){
            value_str = self.value.Get_String();
        }else{
            value_str = self.value;
        }
        
        if (damage_type != null){
            value_str += " " + damage_type;
        }
        
        return value_str;
    }

//private properties
    var self = this;

//public properties
    this.mod_type = mod_type;
    this.damage_type = damage_type;
    this.main_str = main_str;
    this.sub_str = sub_str;
    this.value;

//additional initialization
    if (mod_type == MODIFIER_TYPES_T.DICE){
        this.value = new Dice_Modifier_t(value);
    }else{
        this.value = value;
    }
}

function Damage_Map_t(recalc){
//private methods
    var Get_Dice_Mod_String = function(dice_modifiers, sum){
        let isFirst = true;
        let ret_str = "";
        
        while (dice_modifiers.length > 0){
            //detecting all modifiers of damage type
            let cur_dmg_type_dice_str = "";
            let cur_dmg_type = dice_modifiers[0].damage_type;
            let i = 0;
            let cur_dmg_type_array = new Array(0);
            cur_dmg_type_array.push(dice_modifiers[0].value);
            dice_modifiers.splice(0, 1);
            
            //all nulls will count as type for the first damage type
            while (i < dice_modifiers.length){
                if ((dice_modifiers[i].damage_type == cur_dmg_type) || (dice_modifiers[i].damage_type == null)){
                    cur_dmg_type_array.push(dice_modifiers[i].value);
                    dice_modifiers.splice(i, 1);
                }else{
                    i++;
                }
            }
            
            while (cur_dmg_type_array.length > 0){
                let cur_dice_sides = cur_dmg_type_array[0].dice_sides;
                i = 0;
                let cur_dmg_side_dice_count = cur_dmg_type_array[0].dice_count;
                cur_dmg_type_array.splice(0, 1);
                while (i < cur_dmg_type_array.length){
                    if (cur_dmg_type_array[i].dice_sides == cur_dice_sides){
                        cur_dmg_side_dice_count += cur_dmg_type_array[i].dice_count
                        cur_dmg_type_array.splice(i, 1);
                    }else{
                        i++;
                    }
                }
                
                if (cur_dmg_type_dice_str != ""){
                    cur_dmg_type_dice_str += "+";
                }
                cur_dmg_type_dice_str += cur_dmg_side_dice_count + "d" + cur_dice_sides;
            }
            if (isFirst){
                if (sum != 0){
                    cur_dmg_type_dice_str += "+" + sum;
                }
                isFirst = false;
            }
            
            if (ret_str != ""){
                ret_str += " + ";
            }
            
            if (cur_dmg_type != null){
                ret_str += cur_dmg_type_dice_str + " " + cur_dmg_type;
            }else{
                ret_str += cur_dmg_type_dice_str;
            }
        }
        return ret_str;
    }

//public methods
    this.Add = function(id, modifier, do_recalc = false){
        if (m_mod_map.has(id)){
            console.warn("Attempting to add modifier with used id: " + id);
            return false;
        }

        m_mod_map.set(id, modifier);
        if (do_recalc){
            self.Call_Recalc();
        }

        return true;
    }

    this.Change_Value = function(id, new_value, do_recalc = false){
        if (m_mod_map.has(id)){
            var item = m_mod_map.get(id);
            if ((item.mod_type == MODIFIER_TYPES_T.DICE) || (item.value != new_value)){
                item.Change_Value(new_value);
                if (do_recalc){
                    self.Call_Recalc();
                }
                return true;
            }
            return false;
        }
        console.warn("Attempting to change undefined modifier for id: " + id);
        return false;
    }

    this.Change_Substring = function(id, new_value){
        if (m_mod_map.has(id)){
            var item = m_mod_map.get(id);
            item.sub_str = new_value;
            return;
        }
        console.warn("Attempting to change undefined modifier for id: " + id);
    }

    this.Remove = function(id, do_recalc = false){
        if (m_mod_map.has(id)){
            m_mod_map.delete(id);
            if (do_recalc){
                m_recalc_func();
            }//else NOTHING TO DO
            return;
        }
        console.warn("Attempting to change undefined modifier for id: " + id);
    }

    this.Get_Sum = function(){
//TODO: is commented required?
        let sum = 0;
        //let multiplier = 1;
        //let divider = 1;
        let dice_modifiers = new Array(0);
        //let min = null;
        //let max = null;
        m_mod_map.forEach((obj, key) => {
            switch (obj.mod_type){
            case MODIFIER_TYPES_T.NUMBER:
                sum += obj.value;
                break;

            case MODIFIER_TYPES_T.DICE:
                dice_modifiers.push(obj);
                break;
/* 
            case MODIFIER_TYPES_T.MULTIPLIER:
                if (multiplier == 1){
                    multiplier = obj.value;
                }else{
                    multiplier += (obj.value - 1);
                }
                break;

            case MODIFIER_TYPES_T.DIVIDER:
                if (divider == 1){
                    divider = obj.value;
                }else{
                    divider += (obj.value - 1);
                }
                break;

            case MODIFIER_TYPES_T.MIN_VALUE:
                if (min == null){
                    min = obj.value;
                }else if (min < obj.value){
                    min = obj.value;
                }
                //else NOTHING TO DO
                break;


            case MODIFIER_TYPES_T.MAX_VALUE:
                if (max == null){
                    max = obj.value;
                }else if (max > obj.value){
                    max = obj.value;
                }
                //else NOTHING TO DO
                break;
*/
            default:
                console.warn("Modifier '" + "' has unknown type '" + obj.mod_type + "'. Calculation is impossible");
                return 0;
            }
        });

        if (dice_modifiers.length == 0){
            /*
            sum = Math.floor(sum * multiplier / divider);

            if ((max != null) && (max < sum)){
                sum = max;
            }else if ((min != null) && (min > sum)){
                sum = min;
            }
            */
        }else{
            sum = Get_Dice_Mod_String(dice_modifiers, sum);
        }

        return sum;
    }

    this.Get_Mod_Map = function(){
        var ret_Map = new Map();
        m_mod_map.forEach((obj, key) => {
            if (obj.value != 0){
                if (obj.sub_str != null){
                    ret_Map.set(obj.main_str + " (" + obj.sub_str + ")", obj.Get_Value());
                }else{
                    ret_Map.set(obj.main_str, obj.Get_Value());
                }
            }
        });
        return ret_Map;
    }

    this.Call_Recalc = function(){
        m_recalc_func();
    }

//public methods

//private properties
    var self = this;
    var m_mod_map = new Map();
    var m_recalc_func = recalc;

//public properties

//additional initialization
}