function Mod_Table_Item_t (id, name, mod_map, category, type, value){
//private methods

//public methods
    this.Change_Value = function (value){
        self.value = value;
        self.mod_map.Change_Value(self.id, self.value, true);
        //TODO: change value in selector
    }

    this.Remove = function(){
        self.mod_map.Remove(self.id, true);
    }

    this.Get_SaveData_Obj = function(){
        var ret = {
            name: self.name,
            category: self.category,
            type: self.type,
            value: self.value
        }
        return ret;
    }

//private properties
    var self = this;

//public properties
    this.id = id;
    this.name = name;
    this.mod_map = mod_map;
    this.category = category;
    this.type = type;
    this.value = value;

//additional initialization
}

function Bool_Table_Item_t (id, name, bool_map, category, type){
//private methods

//public methods
    this.Remove = function(){
        self.bool_map.Remove(self.id, true);
    }

    this.Get_SaveData_Obj = function(){
        var ret = {
            name: self.name,
            category: self.category,
            type: self.type
        }
        return ret;
    }

//private properties
    var self = this;
    var m_infield_value;

//TODO: privatize?
//public properties
    this.id = id;
    this.name = name;
    this.category = category;
    this.type = type;
    this.bool_map = bool_map;

//additional initialization
}

function Mod_Table_t (){
//private methods
    var Init = function(){
        layers.custom.sublayer_stats.Set_Callback(self.Add);
    }
    
    var Get_Free_ID = function(){
        //searching free id
        let id = null;
        for (let id_enum = 0; id_enum < 1000; id_enum++){
            let found = false;
            let cur_name = "custom_stats_" + id_enum;
            if (!m_map.has(cur_name)){
                return cur_name;
            }
        }
        return null;
    }
    
    var OnChange_Event = function(id, event){
        let new_value = event.target.value;
        if (isNaN(new_value)){
            event.target.value = self.Get_Value(id);
            return;
        }
        self.Change_Value(id, parseInt(new_value));
    }
    
    var Find_Mod_By_ID = function(id){
        if (m_map.has(id)){
            return m_map.get(id);
        }
        
        return null;
    }

//public methods
    this.Add = function(category, type, name, value){
        let id = Get_Free_ID();
        if (id == null){
            console.warn("Custom modifier limit of 1000 exceeded. Can't add modifier.");
            return false;
        }

        var owner = layers.custom.Stats_List_Get_Owner(category);
        if (owner == null){
            return false;
        }

        var mod_map = owner.Get_Mod_Map(type);
        if (mod_map == null){
            return false;
        }

        if (!mod_map.Add(id, new Modifier_t(value, name), true)){
            return false;
        }

        m_map.set(
            id,
            new Mod_Table_Item_t (id, name, mod_map, category, type, value)
        );
        
        layers.custom.Add(
            id,
            name,
            category,
            type,
            value,
            OnChange_Event.bind(null, id),
            self.Remove.bind(null, id)
        );
        return true;
    }

    this.Change_Value = function(id, new_value){
        let mod = Find_Mod_By_ID(id);
        if (mod == null){
            console.warn("Attempt to change value of unknown custom modifier: " + id);
            return;
        }
        
        mod.Change_Value(new_value);
        layers.custom.Change_Value(id, new_value);
    }
    
    this.Get_Value = function(id){
        let mod = Find_Mod_By_ID(id);
        if (mod == null){
            console.warn("Attempt to get value of unknown custom modifier: " + id);
            return null;
        }
        
        return mod.value;
    }

    this.Remove = function(id){
        let mod = Find_Mod_By_ID(id);
        if (mod == null){
            console.warn("Attempt to remove unknown custom modifier: " + id);
            return;
        }
        
        mod.Remove();
        m_map.delete(id);
        layers.custom.Remove(id);
    }

    this.Get_SaveData_Obj = function(){
        var ret = new Array(0);
        m_arr.forEach(mod => {
            ret.push(mod.Get_SaveData_Obj());
        });
        return ret;
    }
    
    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        obj.forEach(mod => {
            self.Add(mod.category, mod.type, mod.name, mod.value);
        });
    }

//private properties
    var self = this;
    var m_map = new Map();

//public properties

//additional initialization
    Init();
}

function Bool_Table_t (){
//private methods
    var Init = function(){
        layers.custom.sublayer_bools.Set_Callback(self.Add);
    }

    var Get_Free_ID = function(){
        //searching free id
        let id = null;
        for (let id_enum = 0; id_enum < 1000; id_enum++){
            let found = false;
            let cur_name = "custom_bool_" + id_enum;
            if (!m_map.has(cur_name)){
                return cur_name;
            }
        }
        return null;
    }
    
    var Find_Mod_By_ID = function(id){
        if (m_map.has(id)){
            return m_map.get(id);
        }
        
        return null;
    }

//public methods
    this.Add = function(category, type, name){
        let id = Get_Free_ID();

        var owner = layers.custom.Prof_List_Get_Owner(category);
        if (owner == null){
            return false;
        }

        var bool_map = owner.Get_Bool_Map(type);
        if (bool_map == null){
            return false;
        }

        if (!bool_map.Add(id, new Boolean_Modifier_t(name), true)){
            return false;
        }

        m_map.set(
            id,
            new Bool_Table_Item_t (id, name, bool_map, category, type)
        );
        
        layers.custom.Add(
            id,
            name,
            category,
            type,
            "+",
            null,
            self.Remove.bind(null, id)
        );
        
        return true;
    }

    this.Remove = function(id){
        let mod = Find_Mod_By_ID(id);
        if (mod == null){
            console.warn("Attempt to remove unknown custom modifier: " + id);
            return;
        }
        
        mod.Remove();
        m_map.delete(id);
        layers.custom.Remove(id);
    }

    this.Get_SaveData_Obj = function(){
        var ret = new Array(0);
        m_arr.forEach(mod => {
            ret.push(mod.Get_SaveData_Obj());
        });
        return ret;
    }
    
    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        obj.forEach(mod => {
            self.Add(mod.category, mod.type, mod.name);
        });
    }

//private properties
    var self = this;
    var m_map = new Map();

//public properties

//additional initialization
    Init();
}

function Custom_Data_t (){
//private methods
    var Init = function(){
        layers.custom.Clear_Table();
    }

//public methods
    this.Get_SaveData_Obj = function(){
        var ret = {
            stats: self.stats.Get_SaveData_Obj(),
            bools: self.bools.Get_SaveData_Obj(),
        };
        return ret;
    }
    
    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        self.stats.Load_From_Obj(obj.stats);
        self.bools.Load_From_Obj(obj.bools);
    }

//private properties
    var self = this;

//public properties
    this.stats = new Mod_Table_t();
    this.bools = new Bool_Table_t();

//additional initialization
    Init();
}