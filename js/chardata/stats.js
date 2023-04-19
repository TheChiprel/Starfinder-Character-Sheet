function Initative_t () {
//constants
    const BASIC_MOD_ID_T = Object.freeze(
        {
            "AGI": 'AGI',
        }
    );
    const OUTFIELD_CLASS_NAME = "class_output_initiative";

//private methods
    var Init = function(){
        let elems = document.getElementsByClassName(OUTFIELD_CLASS_NAME);
        for (let i = 0; i < elems.length; i++){
            elems[i].onclick = self.Show_Detail_Popup;
        }
        
        Set_Field_Values();
        self.modifier_map.Add(
            BASIC_MOD_ID_T.AGI,
            new Modifier_t(0, ABISCORES.AGI));
    }

    var Set_Field_Values = function(){
        let str = GetModifierStr(self.sum);
        let elems = document.getElementsByClassName(OUTFIELD_CLASS_NAME);
        for (let i = 0; i < elems.length; i++){
            elems[i].value = str;
        }
    }

    var Update_Mod_Map = function(){
        self.modifier_map.Change_Value(
            BASIC_MOD_ID_T.AGI,
            chardata.stats.abiscores.modifiers.Get_Sum(ABISCORES.AGI));
    }

//public methods
    this.Recalc = function (){
        Update_Mod_Map();

        let new_sum = self.modifier_map.Get_Sum();
        if (new_sum != self.sum){
            self.sum = new_sum;
            Set_Field_Values();
        }
    }

    this.Get_Mod_Map = function(unused){
        return self.modifier_map;
    }

    this.Show_Detail_Popup = function(){
        Popup_Stat_Details.Call("Инициатива", self.sum, self.modifier_map.Get_Mod_Map());
    }

//private properties
    var self = this;

//public properties
    this.sum = 0;
    this.modifier_map = new Modifier_Map_t(this.Recalc);

//additional initialization
    Init();
}

function Health_t () {
//constants
    const CLASS_ID_PREFIX = "CLASS_";
    const CLASS_MAIN_STR = "Класс";
    const BASIC_MOD_ID_T = Object.freeze(
        {
            "RACE": 'RACE',
        }
    );
    const OUTFIELD_CLASS_NAME = "class_output_max_hp";

//private methods
    var Init = function(){
        let elems = document.getElementsByClassName(OUTFIELD_CLASS_NAME);
        for (let i = 0; i < elems.length; i++){
            elems[i].onclick = self.Show_Detail_Popup;
        }
        
        Set_Field_Values();
        self.modifier_map.Add(
            BASIC_MOD_ID_T.RACE,
            new Modifier_t(0, "Раса", "Нет"));

        CLASS_DATABASE.forEach(class_item => {
            self.modifier_map.Add(
                CLASS_ID_PREFIX + class_item.name,
                new Modifier_t(0, CLASS_MAIN_STR, class_item.name));
        });
    }

    var Set_Field_Values = function(){
        let elems = document.getElementsByClassName(OUTFIELD_CLASS_NAME);
        for (let i = 0; i < elems.length; i++){
            elems[i].value = self.sum;
        }
    }

    var Update_Mod_Map = function(){
        //updating race modifier
        if (chardata.race != null){
            self.modifier_map.Change_Value(
                BASIC_MOD_ID_T.RACE,
                chardata.race.hp);
            self.modifier_map.Change_Substring(BASIC_MOD_ID_T.RACE, chardata.race.name);
        }else{
            self.modifier_map.Change_Value(
                BASIC_MOD_ID_T.RACE,
                chardata.stats.abiscores.modifiers.Get_Sum(ABISCORES.AGI));
            self.modifier_map.Change_Substring(BASIC_MOD_ID_T.RACE, "Нет");
        }

        //updating class modifier
        chardata.classes.class_map.forEach((class_obj, class_name) => {
            let class_id = CLASS_ID_PREFIX + class_name;
            self.modifier_map.Change_Value(class_id, (class_obj.context.lvl * class_obj.entry.hp_per_lvl));
        });
    }

//public methods
    this.Recalc = function (){
        Update_Mod_Map();

        let new_sum = self.modifier_map.Get_Sum();
        if (new_sum != self.sum){
            self.sum = new_sum;
            Set_Field_Values();
        }
    }

    this.Get_Mod_Map = function(unused){
        return self.modifier_map;
    }

    this.Show_Detail_Popup = function(){
        Popup_Stat_Details.Call("Пункты Здоровья (ПЗ)", self.sum, self.modifier_map.Get_Mod_Map(), false);
    }

//private properties
    var self = this;

//public properties
    this.sum = 0;
    this.modifier_map = new Modifier_Map_t(this.Recalc);

//additional initialization
    Init();
}

function Stamina_t () {
//constants
    const CLASS_ID_PREFIX = "CLASS_";
    const CLASS_MAIN_STR = "Класс";
    const BASIC_MOD_ID_T = Object.freeze(
    {
        "CON": 'CON',
    }
);
    const OUTFIELD_CLASS_NAME = "class_output_max_sp";

//private methods
    var Init = function(){
        let elems = document.getElementsByClassName(OUTFIELD_CLASS_NAME);
        for (let i = 0; i < elems.length; i++){
            elems[i].onclick = self.Show_Detail_Popup;
        }
        
        Set_Field_Values();
        self.modifier_map.Add(
            BASIC_MOD_ID_T.CON,
            new Modifier_t(0, ABISCORES.CON));

        CLASS_DATABASE.forEach(class_item => {
            self.modifier_map.Add(
                CLASS_ID_PREFIX + class_item.name,
                new Modifier_t(0, CLASS_MAIN_STR, class_item.name));
        });
    }

    var Set_Field_Values = function(){
        let elems = document.getElementsByClassName(OUTFIELD_CLASS_NAME);
        for (let i = 0; i < elems.length; i++){
            elems[i].value = self.sum;
        }
    }

//private methods
    var Update_Mod_Map = function(){
        //updating con modifier
        self.modifier_map.Change_Value(
            BASIC_MOD_ID_T.CON,
            chardata.lvl.sum * chardata.stats.abiscores.modifiers.Get_Sum(ABISCORES.CON));

        chardata.classes.class_map.forEach((class_obj, class_name) => {
            let class_id = CLASS_ID_PREFIX + class_name;
            self.modifier_map.Change_Value(class_id, (class_obj.context.lvl * class_obj.entry.sp_per_lvl));
        });
    }

//public methods
    this.Recalc = function (){
        Update_Mod_Map();

        let new_sum = self.modifier_map.Get_Sum();
        if (new_sum != self.sum){
            self.sum = new_sum;
            Set_Field_Values();
        }
    }

    this.Get_Mod_Map = function(unused){
        return self.modifier_map;
    }

    this.Show_Detail_Popup = function(){
        Popup_Stat_Details.Call("Пункты Живучести (ПЖ)", self.sum, self.modifier_map.Get_Mod_Map(), false);
    }

//private properties
    var self = this;

//public properties
    this.sum = 0;
    this.modifier_map = new Modifier_Map_t(this.Recalc);

//additional initialization
    Init();
}

function Resolve_t () {
//constants
    const STRING_NEED_CLASS = "Нельзя посчитать ПР, пока не добавлен хотя бы один класс.";
    const BASIC_MOD_ID_T = Object.freeze(
        {
            "KEY_ABISCORE": 'KEY_ABISCORE',
            "LVL": 'LVL',
            "MIN_VALUE": 'MIN_VALUE'
        }
    );
    const OUTFIELD_CLASS_NAME = "class_output_max_rp";

//private methods
    var Init = function(){
        let elems = document.getElementsByClassName(OUTFIELD_CLASS_NAME);
        for (let i = 0; i < elems.length; i++){
            elems[i].onclick = self.Show_Detail_Popup;
        }
        Set_Field_Values();
        self.modifier_map.Add(
            BASIC_MOD_ID_T.KEY_ABISCORE,
            new Modifier_t(0, "Ключевая хар-ка", "Нет"));
        self.modifier_map.Add(
            BASIC_MOD_ID_T.LVL,
            new Modifier_t(0, "Уровень", "/2"));
        self.modifier_map.Add(
            BASIC_MOD_ID_T.MIN_VALUE,
            new Modifier_t(1, "Минимальное значение", null, MODIFIER_TYPES_T.MIN_VALUE));
    }
    
    var Set_Field_Values = function(){
        let elems = document.getElementsByClassName(OUTFIELD_CLASS_NAME);
        for (let i = 0; i < elems.length; i++){
            elems[i].value = self.sum;
        }
    }

    var Update_Mod_Map = function(){
        //updating key ability score modifier
        let [key_abiscore_name, key_abiscore_mod] = chardata.stats.abiscores.key.GetModifier();
        if (key_abiscore_mod == undefined){
            self.modifier_map.Change_Value(
                BASIC_MOD_ID_T.KEY_ABISCORE,
                0);
            self.modifier_map.Change_Substring(
                BASIC_MOD_ID_T.KEY_ABISCORE,
                key_abiscore_mod);
            is_Calculated = false;
        }else{
            self.modifier_map.Change_Value(
                BASIC_MOD_ID_T.KEY_ABISCORE,
                key_abiscore_mod);
            self.modifier_map.Change_Substring(
                BASIC_MOD_ID_T.KEY_ABISCORE,
                key_abiscore_name);
            is_Calculated = true;
        }
        self.modifier_map.Change_Value(
            BASIC_MOD_ID_T.LVL,
            Math.floor(chardata.lvl.sum / 2));


    }

//public methods
    this.Recalc = function (){
        Update_Mod_Map();

        let new_sum;

        if (is_Calculated){
            new_sum = self.modifier_map.Get_Sum();
        }else{
            new_sum = 0;
        }

        if (new_sum != self.sum){
            self.sum = new_sum;
            Set_Field_Values();
        }
    }

    this.Get_Mod_Map = function(unused){
        return self.modifier_map;
    }

    this.Show_Detail_Popup = function(){
        if (is_Calculated){
            Popup_Stat_Details.Call("Пункты Решимости (ПР)", self.sum, self.modifier_map.Get_Mod_Map(), false);
        }else{
            Popup_Stat_Details.Call("Пункты Решимости (ПР)", "Нет", undefined, false, STRING_NEED_CLASS);
        }
    }

//private properties
    var is_Calculated = false;
    var self = this;

//public properties
    this.sum = 0;
    this.modifier_map = new Modifier_Map_t(this.Recalc);

//additional initialization
    Init();
}

function Level_t (){
//constants
    const CLASS_ID_PREFIX = "CLASS_";
    const CLASS_MAIN_STR = "Класс";

//private methods
    var Set_Field_Values = function(){
        m_out_field.value = self.sum;
    }

    var Update_Mod_Map = function(){
        chardata.classes.class_map.forEach((class_obj, class_name) => {
            let class_id = CLASS_ID_PREFIX + class_name;
            self.modifier_map.Change_Value(class_id, class_obj.context.lvl);
        });
        
    }

//public methods
    this.Recalc = function (){
        Update_Mod_Map();

        let new_sum = self.modifier_map.Get_Sum();
        if (new_sum != self.sum){
            self.sum = new_sum;
            Set_Field_Values();
            self.arr_recalc_functions.Call();
        }
    }

    this.Show_Detail_Popup = function(){
        Popup_Stat_Details.Call("Уровень", self.sum, self.modifier_map.Get_Mod_Map(), false);
    }

//private properties
    var m_out_field = document.getElementById('outfield_level');
    var self = this;

//public properties
    this.sum = 0;
    this.arr_recalc_functions = new Recalc_Function_Collection_t();
    this.modifier_map = new Modifier_Map_t(this.Recalc);

//additional initialization
    Set_Field_Values();
    CLASS_DATABASE.forEach(class_item => {
        this.modifier_map.Add(
            CLASS_ID_PREFIX + class_item.name,
            new Modifier_t(0, CLASS_MAIN_STR, class_item.name));
    });
}

function BAB_t (out_field){
//constants
    const CLASS_ID_PREFIX = "CLASS_";
    const CLASS_MAIN_STR = "Класс";

//private methods
    var Set_Field_Values = function(){
        m_out_field.value = GetModifierStr(self.sum);
    }

    var Update_Mod_Map = function(){
        chardata.classes.class_map.forEach((class_obj, class_name) => {
            let class_id = CLASS_ID_PREFIX + class_name;
            self.modifier_map.Change_Value(class_id, Math.floor(class_obj.entry.BAB_per_lvl * class_obj.context.lvl));
        });
        
    }

//public methods
    this.Recalc = function (){
        Update_Mod_Map();

        let new_sum = self.modifier_map.Get_Sum();
        if (new_sum != self.sum){
            self.sum = new_sum;
            Set_Field_Values();
            self.arr_recalc_functions.Call();
        }
    }

    this.Get_Mod_Map = function(unused){
        return self.modifier_map;
    }

    this.Show_Detail_Popup = function(){
        Popup_Stat_Details.Call("БМА", self.sum, self.modifier_map.Get_Mod_Map());
    }
//private properties
    var self = this;
    var m_out_field = out_field;

//public properties
    this.sum = 0;
    this.modifier_map = new Modifier_Map_t(this.Recalc);
    this.arr_recalc_functions = new Recalc_Function_Collection_t();

//additional initialization
    Set_Field_Values();

    CLASS_DATABASE.forEach(class_item => {
        this.modifier_map.Add(
            CLASS_ID_PREFIX + class_item.name,
            new Modifier_t(0, CLASS_MAIN_STR, class_item.name));
    });
}

function Attack_Type_t (name, abiscore, out_field_class){
//constants
    const BASIC_MOD_ID_T = Object.freeze(
        {
            "BAB": 'BAB',
            "ABISCORE": 'ABISCORE'
        }
    );
    const OUTFIELD_CLASS_NAME = out_field_class;

//private methods
    var Init = function(){
        let elems = document.getElementsByClassName(OUTFIELD_CLASS_NAME);
        for (let i = 0; i < elems.length; i++){
            elems[i].onclick = self.Show_Detail_Popup;
        }
        
        Set_Field_Values();

        self.modifier_map.Add(
            BASIC_MOD_ID_T.ABISCORE,
            new Modifier_t(0, m_abiscore));
        self.modifier_map.Add(
            BASIC_MOD_ID_T.BAB,
            new Modifier_t(0, "БМА"));
    }
    
    var Set_Field_Values = function(){
        let str = GetModifierStr(self.sum);
        let elems = document.getElementsByClassName(OUTFIELD_CLASS_NAME);
        for (let i = 0; i < elems.length; i++){
            elems[i].value = str;
        }
    }

    var Update_Mod_Map = function(){
        //updating BAB
        self.modifier_map.Change_Value(
            BASIC_MOD_ID_T.BAB,
            chardata.stats.attacks.bab.sum);
        //updating ability score
        self.modifier_map.Change_Value(
            BASIC_MOD_ID_T.ABISCORE,
            chardata.stats.abiscores.modifiers.Get_Sum(m_abiscore));
    }

//public methods
    this.Recalc = function (){
        Update_Mod_Map();

        let new_sum = self.modifier_map.Get_Sum();
        if (new_sum != self.sum){
            self.sum = new_sum;
            Set_Field_Values();
            self.arr_recalc_functions.Call();
        }
    }

    this.Show_Detail_Popup = function(){
        Popup_Stat_Details.Call(m_name, self.sum, self.modifier_map.Get_Mod_Map());
    }

//private properties
    var self = this;
    var m_abiscore = abiscore;
    var m_name = name;

//public properties
    this.sum = 0;
    this.modifier_map = new Modifier_Map_t(this.Recalc);
    this.arr_recalc_functions = new Recalc_Function_Collection_t();

//additional initialization
    Init();
}

function Attacks_t (){
//private functions
    var Get_Attack_Type_By_Name = function(name){
        switch (name){
            case WEAPON_MODIFIER.MELEE:
                return self.melee;

            case WEAPON_MODIFIER.OPERATIVE:
                return self.operative;

            case WEAPON_MODIFIER.RANGED:
                return self.ranged;

            case WEAPON_MODIFIER.THROWN:
                return self.thrown;

            default:
                return null;
        }
    }

//public functions
    this.Get_Mod_Map = function(in_attack_type){
        var attack_type = Get_Attack_Type_By_Name(in_attack_type);
        if (attack_type != null){
            return attack_type.modifier_map;
        }else{
            console.warn('Attempting to set modifier to unknown attack type: ' + in_attack_type);
        }
    };

    this.Add_Recalc_Func = function(in_attack_type, recalc){
        var attack_type = Get_Attack_Type_By_Name(in_attack_type);
        if (attack_type != null){
            attack_type.arr_recalc_functions.Add(recalc);
        }else{
            console.warn('Attempting to set recalculation function to unknown attack type: ' + in_attack_type);
        }
    }

    this.Remove_Recalc_Func = function(in_attack_type, id){
        var attack_type = Get_Attack_Type_By_Name(in_attack_type);
        if (attack_type != null){
            attack_type.arr_recalc_functions.Remove(id);
        }else{
            console.warn('Attempting to remove recalculation function from unknown attack type: ' + in_attack_type);
        }
    }

//private properties
    var self = this;

//public properties
    this.bab = new BAB_t(document.getElementById('outfield_attack_bab'));
    this.melee = new Attack_Type_t (WEAPON_MODIFIER.MELEE, ABISCORES.STR, "class_output_attack_melee");
    this.operative = new Attack_Type_t (WEAPON_MODIFIER.OPERATIVE, ABISCORES.AGI, "class_output_attack_operative");
    this.ranged = new Attack_Type_t (WEAPON_MODIFIER.RANGED, ABISCORES.AGI, "class_output_attack_ranged");
    this.thrown = new Attack_Type_t (WEAPON_MODIFIER.THROWN, ABISCORES.STR, "class_output_attack_thrown");
}

function AC_t (name, out_field_class){
//constants
    const BASIC_MOD_ID_T = Object.freeze(
        {
            "BASE_VALUE": 'BASE_VALUE',
            "AGI": 'AGI',
            "ARMOR": 'ARMOR',
            "ARMOR_PROF": 'ARMOR_PROF'
        }
    );
    const OUTFIELD_CLASS_NAME = out_field_class;

//private methods
    var Init = function(){
        let elems = document.getElementsByClassName(OUTFIELD_CLASS_NAME);
        for (let i = 0; i < elems.length; i++){
            elems[i].onclick = self.Show_Detail_Popup;
        }
        
        Set_Field_Values();

        self.modifier_map.Add(
            BASIC_MOD_ID_T.BASE_VALUE,
            new Modifier_t(10, "Начальное значение"));
        self.modifier_map.Add(
            BASIC_MOD_ID_T.AGI,
            new Modifier_t(0, ABISCORES.AGI));
        self.modifier_map.Add(
            BASIC_MOD_ID_T.ARMOR,
            new Modifier_t(0, "Броня", "Нет"));
        self.modifier_map.Add(
            BASIC_MOD_ID_T.ARMOR_PROF,
            new Modifier_t(0, "Отсутствие ношения брони", ARMOR_TYPES.NONE));
    }
    
    var Set_Field_Values = function(){
        let elems = document.getElementsByClassName(OUTFIELD_CLASS_NAME);
        for (let i = 0; i < elems.length; i++){
            elems[i].value = self.sum;
        }
    }

    var Update_Mod_Map = function(){
        //updating AGI modifier
        let agi_mod = chardata.stats.abiscores.modifiers.Get_Sum(ABISCORES.AGI);
        let armor_max_agi = chardata.stats.defense.armor_limit_agi.sum;
        if (agi_mod > armor_max_agi){
            agi_mod = armor_max_agi;
            self.modifier_map.Change_Substring(
                BASIC_MOD_ID_T.AGI,
                "Уменьшено ограничением брони");
        }else{
            self.modifier_map.Change_Substring(
                BASIC_MOD_ID_T.AGI,
                null);
        }
        // else NOTHING TO DO

        self.modifier_map.Change_Value(
            BASIC_MOD_ID_T.AGI,
            agi_mod);

        var prof_mod = 0;
        var armor_type = chardata.inventory.armor.Get_Armor_Type();
        if (armor_type == ARMOR_TYPES.UNKNOWN){
            prof_mod = -4;
        }else if (armor_type != ARMOR_TYPES.NONE){
            if (!chardata.stats.armor_proficiency.Is_Set(armor_type)){
                prof_mod = -4;
            }
            //else NOTHING TO DO
        }
        self.modifier_map.Change_Value(
            BASIC_MOD_ID_T.ARMOR_PROF,
            prof_mod);
        self.modifier_map.Change_Substring(
            BASIC_MOD_ID_T.ARMOR_PROF,
            armor_type);
    }

//public methods
    //TODO: make it custom modifier added and removed from armor object?
    this.Set_Armor_Value = function(armor_name, new_value){
        self.modifier_map.Change_Value(
            BASIC_MOD_ID_T.ARMOR,
            new_value);
        self.modifier_map.Change_Substring(
            BASIC_MOD_ID_T.ARMOR,
            armor_name);
        self.Recalc();
    }

    this.Recalc = function (){
        Update_Mod_Map();

        let new_sum = self.modifier_map.Get_Sum();
        if (new_sum != self.sum){
            self.sum = new_sum;
            Set_Field_Values();
            self.arr_recalc_functions.Call();
        }
    }

    this.Show_Detail_Popup = function(){
        Popup_Stat_Details.Call(m_name, self.sum, self.modifier_map.Get_Mod_Map(), false);
    }

//private properties
    var self = this;
    var m_name = name;

//public properties
    this.sum = 10;
    this.arr_recalc_functions = new Recalc_Function_Collection_t();
    this.modifier_map = new Modifier_Map_t(this.Recalc);

//additional initialization
    Init();
}

function Against_Maneuver_t (){
//constants
    const BASIC_MOD_ID_T = Object.freeze(
        {
            "AGAINST_MANEUVER": 'AGAINST_MANEUVER',
            "KAC": 'KAC'
        }
    );
    const OUTFIELD_CLASS_NAME = "class_output_defense_maneuver";

//private methods
    var Init = function(){
        let elems = document.getElementsByClassName(OUTFIELD_CLASS_NAME);
        for (let i = 0; i < elems.length; i++){
            elems[i].onclick = self.Show_Detail_Popup;
        }
        
        Set_Field_Values();

        self.modifier_map.Add(
            BASIC_MOD_ID_T.KAC,
            new Modifier_t(10, "ККБ"));
        self.modifier_map.Add(
            BASIC_MOD_ID_T.AGAINST_MANEUVER,
            new Modifier_t(8, "Бонус против манёвров"));
    }
    
    var Set_Field_Values = function(){
        let elems = document.getElementsByClassName(OUTFIELD_CLASS_NAME);
        for (let i = 0; i < elems.length; i++){
            elems[i].value = self.sum;
        }
    }

    var Update_Mod_Map = function(){
        //updating AGI modifier
        self.modifier_map.Change_Value(
            BASIC_MOD_ID_T.KAC,
            chardata.stats.defense.kac.sum);
    }

//public methods
    this.Recalc = function (){
        Update_Mod_Map();

        let new_sum = self.modifier_map.Get_Sum();
        if (new_sum != self.sum){
            self.sum = new_sum;
            Set_Field_Values();
            self.arr_recalc_functions.Call();
        }
    }

    this.Show_Detail_Popup = function(){
        Popup_Stat_Details.Call("КБ против манёвров", self.sum, self.modifier_map.Get_Mod_Map(), false);
    }

//private properties
    /* var m_mod_map = new Map(); */
    var self = this;

//public properties
    this.sum = 18;
    /* this.other_mod = new Other_Mod_Collection_t(this.Recalc); */
    this.arr_recalc_functions = new Recalc_Function_Collection_t();
    this.modifier_map = new Modifier_Map_t(this.Recalc);

//additional initialization
    Init();
}

function Armor_Limit_Agi(){
//constants
const BASIC_MOD_ID_T = Object.freeze(
    {
        "ARMOR": 'ARMOR'
    }
);

//private methods
    this.Recalc = function (){
        //Update_Mod_Map();

        let new_sum = self.modifier_map.Get_Sum();
        if (new_sum != self.sum){
            self.sum = new_sum;
            self.arr_recalc_functions.Call();
        }
    }

    this.Set_Armor_Value = function(value){
        self.modifier_map.Change_Value(
            BASIC_MOD_ID_T.ARMOR,
            value);
        /* self.modifier_map.Change_Substring(
            BASIC_MOD_ID_T.ARMOR,
            armor_name); */
        self.Recalc();
    }

//private properties
    var self = this;

//public properties
    this.sum = Infinity;
    this.armor_value = Infinity;
    this.modifier_map = new Modifier_Map_t(this.Recalc);
    this.arr_recalc_functions = new Recalc_Function_Collection_t();

//additional initialization
    this.modifier_map.Add(
        BASIC_MOD_ID_T.ARMOR,
        new Modifier_t(Infinity, "Броня"));
}

function Resistance_Collection_t(){
//constants
    const OUTFIELD_CLASS_NAME = "class_output_defense_resistance";

//private methods
    var Get_Mod_Map = function(type, do_generate){
        if (!m_map.has(type)){
            if(!do_generate){
                return null;
            }
            
            var new_mod_map = new Modifier_Map_t(Update_Outfield);
            m_map.set(type, new_mod_map);
        }
        
        return m_map.get(type);
    }

    var Update_Outfield = function(){
        let out_string = null;
        
        m_map.forEach((mod_map, key) => {
            let resistance_value = mod_map.Get_Sum();
            if (resistance_value != 0){
                if (out_string == null){
                    out_string = key + ": " + resistance_value;
                }else{
                    out_string += "/n" + key + ": " + resistance_value;
                }
            }
        });
        
        if (out_string == null){
            out_string = "Нет"
        }
        
        let elems = document.getElementsByClassName(OUTFIELD_CLASS_NAME);
        for (let i = 0; i < elems.length; i++){
            elems[i].value = out_string;
        }
    }

//public methods
    this.Add = function(type, id, modifier, do_recalc){
        var mod_map = Get_Mod_Map(type, true);
        if (mod_map == null){
            console.error("Failed to find modifier map for resistance type '" + type + "'");
            return false;
        }
        return mod_map.Add(id, modifier, do_recalc);
    }
    
    this.Remove = function(type, id, do_recalc){
        var mod_map = Get_Mod_Map(type, false);
        if (mod_map == null){
            console.error("Failed to find modifier map for resistance type '" + type + "'");
            return false;
        }
        return mod_map.Remove(id, do_recalc);
    }
    
    this.Change_Value = function(type, id, value, do_recalc){
        var mod_map = Get_Mod_Map(type, false);
        if (mod_map == null){
            console.error("Failed to find modifier map for resistance type '" + type + "'");
            return false;
        }
        return mod_map.Change_Value(id, value, do_recalc);
    }

//private properties
    var self = this;
    var m_map = new Map();
    var m_outfield = document.getElementById('outfield_resistance');

//public properties

//additional initialization
    Update_Outfield();
}

function Defense_t(){
    this.Get_Mod_Map = function(defense_type){
        switch (defense_type){
            case "ЭКБ":
                return self.eac.modifier_map;

            case "ККБ":
                return self.kac.modifier_map;

            case "Против манёвров":
                return self.against_maneuver.modifier_map;

            default:
                console.warn('Attempting to set modifier to unknown defense type: ' + defense_type);
                return null;
        }
    };

    this.eac = new AC_t("ЭКБ", "class_output_defense_eac");
    this.kac = new AC_t("ККБ", "class_output_defense_kac");
    this.against_maneuver = new Against_Maneuver_t ();
    this.armor_limit_agi = new Armor_Limit_Agi();
    this.resistance = new Resistance_Collection_t();
    this.dr = 0;//TODO

    var self = this;
}

function Speed_Type_t (name, out_field){
//constants
const BASIC_MOD_ID_T = Object.freeze(
    {
        "BASE_VALUE": 'BASE_VALUE',
        "ARMOR_PENALTY": 'ARMOR_PENALTY'
    }
);

//private methods
    var Set_Field_Values = function(){
        if (self.sum <= 0){
            m_out_field.value = "Нет";
        }else{
            m_out_field.value = self.sum;
        }
    }

//public methods
    this.Recalc = function (){
        let new_sum = self.modifier_map.Get_Sum();
        if (new_sum != self.sum){
            self.sum = new_sum;
            Set_Field_Values();
            self.arr_recalc_functions.Call();
        }
    }

    this.Set_Base_Value = function(value, source){
        self.modifier_map.Change_Value(
            BASIC_MOD_ID_T.BASE_VALUE,
            value);
        self.modifier_map.Change_Substring(
            BASIC_MOD_ID_T.BASE_VALUE,
            source);
        self.Recalc();
    }

    this.Set_Armor_Penalty = function(source, value){
        self.modifier_map.Change_Value(
            BASIC_MOD_ID_T.ARMOR_PENALTY,
            value);
        self.modifier_map.Change_Substring(
            BASIC_MOD_ID_T.ARMOR_PENALTY,
            source);
        self.Recalc();
    }

    this.Show_Detail_Popup = function(){
        if (self.sum <= 0){
            Popup_Stat_Details.Call("Скорость (" + m_name + ")", "Нет", self.modifier_map.Get_Mod_Map(), false);
        }else{
            Popup_Stat_Details.Call("Скорость (" + m_name + ")", self.sum, self.modifier_map.Get_Mod_Map(), false);
        }
    }

//private properties
    var self = this;
    var m_name = name;
    var m_out_field = out_field;
    /* var m_mod_map = new Map(); */

//public properties
    this.sum = 0;
    this.base_value = 0;
    /* this.other_mod = new Other_Mod_Collection_t(this.Recalc); */
    this.modifier_map = new Modifier_Map_t(this.Recalc);
    this.arr_recalc_functions = new Recalc_Function_Collection_t();

//additional initialization
    Set_Field_Values();

    this.modifier_map.Add(
        BASIC_MOD_ID_T.BASE_VALUE,
        new Modifier_t(this.base_value, "Начальное значение"));
    this.modifier_map.Add(
        BASIC_MOD_ID_T.ARMOR_PENALTY,
        new Modifier_t(0, "Штраф брони", "Без брони"));
}

function Speeds_t (){
//private methods

//public methods
    this.Set_Armor_Penalty = function(new_value, source = null){
        self.land.Set_Armor_Penalty(new_value, source);
        self.flight.Set_Armor_Penalty(new_value, source);
        self.burrow.Set_Armor_Penalty(new_value, source);
        self.swim.Set_Armor_Penalty(new_value, source);
        self.climb.Set_Armor_Penalty(new_value, source);
    }

    this.Get_Mod_Map = function(speed_type){
        switch (speed_type){
            case "Наземная":
                return self.land.modifier_map;

            case "Полёт":
                return self.flight.modifier_map;

            case "Рытьё":
                return self.burrow.modifier_map;

            case "Плавание":
                return self.swim.modifier_map;

            case "Лазание":
                return self.climb.modifier_map;

            default:
                console.warn('Attempting to set modifier to unknown speed type: ' + speed_type);
                return null;
        }
    }

//private properties
    var self = this;

//public properties
    this.land = new Speed_Type_t("Наземная", document.getElementById('outfield_mspeed_land'));
    this.flight = new Speed_Type_t("Полёт", document.getElementById('outfield_mspeed_flight'));
    this.burrow = new Speed_Type_t("Рытьё", document.getElementById('outfield_mspeed_burrow'));
    this.swim = new Speed_Type_t("Плавание", document.getElementById('outfield_mspeed_swim'));
    this.climb = new Speed_Type_t("Лазание", document.getElementById('outfield_mspeed_climb'));
}

function Save_Type_t (name, prefix, abiscore, out_field_class){
//constants
    const CLASS_ID_PREFIX = "CLASS_";
    const CLASS_MAIN_STR = "Класс";
    const BASIC_MOD_ID_T = Object.freeze(
        {
            "ABISCORE": 'ABISCORE'
        }
    );
    const OUTFIELD_CLASS_NAME = out_field_class;

//private methods
    var Init = function(){
        let elems = document.getElementsByClassName(OUTFIELD_CLASS_NAME);
        for (let i = 0; i < elems.length; i++){
            elems[i].onclick = self.Show_Detail_Popup;
        }
        
            Set_Field_Values();

        self.modifier_map.Add(
            BASIC_MOD_ID_T.ABISCORE,
            new Modifier_t(0, m_abiscore));
        CLASS_DATABASE.forEach(class_item => {
            self.modifier_map.Add(
                CLASS_ID_PREFIX + class_item.name,
                new Modifier_t(0, CLASS_MAIN_STR, class_item.name));
        });
    }
    
    var Set_Field_Values = function(){
        let str = GetModifierStr(self.sum);
        let elems = document.getElementsByClassName(OUTFIELD_CLASS_NAME);
        for (let i = 0; i < elems.length; i++){
            elems[i].value = str;
        }
    }

    var Update_Mod_Map = function(){
        //updating abiscore modifier
        self.modifier_map.Change_Value(
            BASIC_MOD_ID_T.ABISCORE,
            chardata.stats.abiscores.modifiers.Get_Sum(m_abiscore));

        chardata.classes.class_map.forEach((class_obj, class_name) => {
            let class_id = CLASS_ID_PREFIX + class_name;
            if (class_obj.context.lvl > 0){
                self.modifier_map.Change_Value(
                    class_id,
                    Math.floor(class_obj.entry[m_prefix + '_base'] + class_obj.context.lvl / class_obj.entry[m_prefix + '_per_lvl']));
            }else{
                self.modifier_map.Change_Value(class_id, 0);
            }
        });
    }

//public methods
    this.Recalc = function (){
        Update_Mod_Map();

        let new_sum = self.modifier_map.Get_Sum();
        if (new_sum != self.sum){
            self.sum = new_sum;
            Set_Field_Values();
            self.arr_recalc_functions.Call();
        }
    }

    this.Show_Detail_Popup = function(){
        Popup_Stat_Details.Call(m_name, self.sum, self.modifier_map.Get_Mod_Map());
    }

//private properties
    var m_abiscore = abiscore;
    var m_prefix = prefix;
    var m_name = name;
    var self = this;

//public properties
    this.sum = 0;
    this.arr_recalc_functions = new Recalc_Function_Collection_t();
    this.modifier_map = new Modifier_Map_t(this.Recalc);

//additional initialization
    Init();
}

function Saves_t (){
//private methods

//public methods
    this.Get_Mod_Map = function(save_type){
        switch (save_type){
            case "Стойкость":
                return self.fortitude.modifier_map;

            case "Реакция":
                return self.reflex.modifier_map;

            case "Воля":
                return self.will.modifier_map;

            default:
                console.warn('Attempting to set modifier to unknown speed type: ' + save_type);
                return null;
        }
    }

//private properties
    var self = this;

//public properties
    this.fortitude = new Save_Type_t("Стойкость", 'fort', ABISCORES.CON, "class_output_save_fort");
    this.reflex = new Save_Type_t("Реакция", 'refl', ABISCORES.AGI, "class_output_save_refl");
    this.will = new Save_Type_t("Воля", 'will', ABISCORES.WIS, "class_output_save_will");
}


//===============initial callback assignment===============//

function Init_Callbacks_Level(){
    chardata.lvl.arr_recalc_functions.Add(
        new Recalc_Function_t ("abiscores", chardata.stats.abiscores.values.Recalc_All));

    chardata.lvl.arr_recalc_functions.Add(
        new Recalc_Function_t ('Resolve', chardata.stats.rp.Recalc));
        
    chardata.lvl.arr_recalc_functions.Add(
        new Recalc_Function_t ('Theme Abilities', chardata.abilities.theme.Update_Lvl));
}

function Init_Callbacks_Attacks(){
    //BAB -> attacks
    chardata.stats.attacks.bab.arr_recalc_functions.Add(
        new Recalc_Function_t ('attack_melee', chardata.stats.attacks.melee.Recalc));
    chardata.stats.attacks.bab.arr_recalc_functions.Add(
        new Recalc_Function_t ('attack_thrown', chardata.stats.attacks.thrown.Recalc));
    chardata.stats.attacks.bab.arr_recalc_functions.Add(
        new Recalc_Function_t ('attack_oper', chardata.stats.attacks.operative.Recalc));
    chardata.stats.attacks.bab.arr_recalc_functions.Add(
        new Recalc_Function_t ('attack_ranged', chardata.stats.attacks.ranged.Recalc));

    //Thrown attack -> Grenade attack
    chardata.stats.attacks.thrown.arr_recalc_functions.Add(
        new Recalc_Function_t ('grenade_mod', chardata.inventory.grenades.Recalc_Throw_Mod));
}

function Init_Callbacks_Defense(){
    chardata.stats.defense.armor_limit_agi.arr_recalc_functions.Add(
        new Recalc_Function_t ('eac', chardata.stats.defense.eac.Recalc));

    chardata.stats.defense.armor_limit_agi.arr_recalc_functions.Add(
        new Recalc_Function_t ('kac', chardata.stats.defense.kac.Recalc));

    chardata.stats.defense.kac.arr_recalc_functions.Add(
        new Recalc_Function_t ('against_maneuver', chardata.stats.defense.against_maneuver.Recalc));
}

function Init_Callbacks_Stats(){
    Init_Callbacks_Level();
    Init_Callbacks_Abiscores();
    Init_Callbacks_Attacks();
    Init_Callbacks_Defense();
}