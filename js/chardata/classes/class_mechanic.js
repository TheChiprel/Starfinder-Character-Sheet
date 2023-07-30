const DRONE_ABISCORES = Object.freeze(
    [
        ABISCORES.STR,
        ABISCORES.AGI,
        ABISCORES.INT,
        ABISCORES.WIS,
        ABISCORES.CHA
    ]
);

function Drone_Abiscore_Value_t(name, set_value_func){
//constants
    const BASIC_VALUE_MOD_ID_T = Object.freeze(
        {
            "BASE_VALUE": 'BASE_VALUE',
            "BOOSTS": 'BOOSTS'
        }
    );
    const SET_VALUE_FUNC = set_value_func;

//private methods
    var Init = function(){
        self.mod_map.Add(
            BASIC_VALUE_MOD_ID_T.BASE_VALUE,
            new Modifier_t(10, "Базовое значение"));
        self.mod_map.Add(
            BASIC_VALUE_MOD_ID_T.BOOSTS,
            new Modifier_t(0, "Увеличение от уровней"));
            
        Set_Field_Value();
    }
    
    var Set_Field_Value = function(){
        SET_VALUE_FUNC(self.sum);
    }

//public methods
    this.Set_Base_Value = function(new_value){
        self.mod_map.Change_Value(BASIC_VALUE_MOD_ID_T.BASE_VALUE, new_value);
        self.Recalc();
    }
    
    this.Set_Upgr_Value = function(new_value){
        self.mod_map.Change_Value(BASIC_VALUE_MOD_ID_T.BOOSTS, new_value);
        self.Recalc();
    }
    
    this.Recalc = function(){
        let new_sum = self.mod_map.Get_Sum();
        if (new_sum != self.sum){
            self.sum = new_sum;
            Set_Field_Value();
            self.arr_recalc_functions.Call();
        }
    }
    
    this.Show_Detail_Popup = function(){
        Popup_Stat_Details.Call(
            "Значение " + m_name,
            self.sum,
            self.mod_map.Get_Mod_Map(),
            false
        );
    }

//private properties
    var self = this;
    var m_name = name;

//public properties
    this.sum = 10;
    this.mod_map = new Modifier_Map_t(this.Recalc);
    this.arr_recalc_functions = new Recalc_Function_Collection_t();

//additional initialization
    Init();
}

function Drone_Abiscore_Mod_t(
    name,
    set_value_func,
    get_abiscore_value_func){
//constants
    const BASIC_VALUE_MOD_ID_T = Object.freeze(
        {
            "ABISCORE_VALUE": 'ABISCORE_VALUE'
        }
    );
    const SET_VALUE_FUNC = set_value_func;
    const GET_ABISCORE_VALUE_FUNC = get_abiscore_value_func;

//private methods
    var Init = function(){
        self.mod_map.Add(
            BASIC_VALUE_MOD_ID_T.ABISCORE_VALUE,
            new Modifier_t(
                0,
                "Значение " + m_name
            )
        );
            
        Set_Field_Value();
    }
    
    var Set_Field_Value = function(){
        SET_VALUE_FUNC(GetModifierStr(self.sum));
    }
    
    var Update_Mod_Map = function(){
        let abiscore_value = GET_ABISCORE_VALUE_FUNC();
        let abiscore_mod = Math.floor((abiscore_value - 10) / 2);
        self.mod_map.Change_Value(BASIC_VALUE_MOD_ID_T.ABISCORE_VALUE, abiscore_mod);
    }

//public methods
    this.Recalc = function(){
        Update_Mod_Map();
        
        let new_sum = self.mod_map.Get_Sum();
        if (new_sum != self.sum){
            self.sum = new_sum;
            Set_Field_Value();
            self.arr_recalc_functions.Call();
        }
    }
    
    this.Show_Detail_Popup = function(){
        Popup_Stat_Details.Call(
            "Модификатор " + m_name,
            self.sum,
            self.mod_map.Get_Mod_Map(),
            true
        );
    }

//private properties
    var self = this;
    var m_name = name;

//public properties
    this.sum = 0;
    this.mod_map = new Modifier_Map_t(this.Recalc);
    this.arr_recalc_functions = new Recalc_Function_Collection_t();

//additional initialization
    Init();
}

function Drone_Abiscore_Value_Collection_t(gui_block){
//constants
    const GUI_BLOCK = gui_block;

//private methods    
    var FindAbiscoreByName = function(abiscore){
        if (!m_map.has(abiscore)){
            return null;
        }

        return m_map.get(abiscore);
    }

//public methods
    this.Add_Abiscore = function(name){
        m_map.set (
            name,
            new Drone_Abiscore_Value_t (
                name,
                GUI_BLOCK.Set_Value.bind(null, name)
            )
        );
    }

    this.Set_Base_Value_By_Array = function(arr){
        if (arr.length != m_map.size){
            console.error("Attempt to set ability values with array of incorrect size.");
            return;
        }
        
        const mapIter = m_map.values();
        arr.forEach(curr_value => {
            mapIter.next().value.Set_Base_Value(curr_value);
        });
    }
    
    this.Set_Upgr_Value_By_Array = function(arr){
        if (arr.length != m_map.size){
            console.error("Attempt to set ability values with array of incorrect size.");
            return;
        }
        
        const mapIter = m_map.values();
        arr.forEach(curr_value => {
            mapIter.next().value.Set_Upgr_Value(curr_value);
        });
    }
    
    this.Get_Sum = function(abiscore){
        let item = FindAbiscoreByName(abiscore);
        if (item == null){
            console.error("Failed to get value of unknown drone ability score:" + abiscore);
            return null;
        }
        
        return item.sum;
    }
    
    this.Show_Detail_Popup = function(abiscore){
        let obj = FindAbiscoreByName(abiscore);
        if (obj == null){
            console.error("Attempting to show popup for unknown ability score value: " + abiscore);
        }
        obj.Show_Detail_Popup();
    }
    
    this.AddRecalcFunc = function(abiscore, func){
        let abiscore_obj = FindAbiscoreByName(abiscore);
        if (abiscore_obj != null){
            abiscore_obj.arr_recalc_functions.Add(func);
        }else{
            console.warn("Attempting to read unknown ability score modifier: " + abiscore);
        }
    }

    this.RemoveRecalcFunc = function(abiscore, id){
        let abiscore_obj = FindAbiscoreByName(abiscore);
        if (abiscore_obj != null){
            abiscore_obj.arr_recalc_functions.Remove(id);
        }else{
            console.warn("Attempting to read unknown ability score modifier: " + abiscore);
        }
    }
    
    this.Recalc_All = function(){
        m_map.forEach((abiscore_obj, ) => {
            abiscore_obj.Recalc();
        });
    }

//private properties
    var self = this;
    var m_map = new Map();

//public properties
    

//additional initialization
}

function Drone_Abiscore_Mod_Collection_t(gui_block){
//constants
    const GUI_BLOCK = gui_block;

//private methods    
    var FindAbiscoreByName = function(abiscore){
        if (!m_map.has(abiscore)){
            return null;
        }

        return m_map.get(abiscore);
    }

//public methods
    this.Add_Abiscore = function(
        name,
        get_value_func
    ){
        m_map.set (
            name,
            new Drone_Abiscore_Mod_t (
                name,
                GUI_BLOCK.Set_Mod.bind(null, name),
                get_value_func
            )
        );
    }
    
    this.Get_Sum = function(abiscore){
        let item = FindAbiscoreByName(abiscore);
        if (item == null){
            console.error("Failed to get value of unknown drone ability score:" + abiscore);
            return null;
        }
        
        return item.sum;
    }
    
    this.Show_Detail_Popup = function(abiscore){
        let obj = FindAbiscoreByName(abiscore);
        if (obj == null){
            console.error("Attempting to show popup for unknown ability score value: " + abiscore);
        }
        obj.Show_Detail_Popup();
    }
    
    this.AddRecalcFunc = function(abiscore, func){
        let abiscore_obj = FindAbiscoreByName(abiscore);
        if (abiscore_obj != null){
            abiscore_obj.arr_recalc_functions.Add(func);
        }else{
            console.warn("Attempting to read unknown ability score modifier: " + abiscore);
        }
    }

    this.RemoveRecalcFunc = function(abiscore, id){
        let abiscore_obj = FindAbiscoreByName(abiscore);
        if (abiscore_obj != null){
            abiscore_obj.arr_recalc_functions.Remove(id);
        }else{
            console.warn("Attempting to read unknown ability score modifier: " + abiscore);
        }
    }
    
    this.Get_Recalc_Func = function(abiscore){
        let obj = FindAbiscoreByName(abiscore);
        if (obj == null){
            console.error("Attempting to recalculation function for unknown ability score value: " + abiscore);
            return null;
        }
        return obj.Recalc;
    }
    
    this.Recalc_All = function(){
        m_map.forEach((abiscore_obj, ) => {
            abiscore_obj.Recalc();
        });
    }

//private properties
    var self = this;
    var m_map = new Map();

//public properties
    

//additional initialization
}

function Drone_Abiscores_t(gui_block){
//constants
    const GUI_BLOCK = gui_block;

//private methods
    var Init = function(){
        const abiscore_arr = Object.values(ABISCORES);
        
        GUI_BLOCK.Reset(self);
        abiscore_arr.forEach(abiscore => {
            GUI_BLOCK.Add_Abiscore(abiscore);
            
            if (DRONE_ABISCORES.includes(abiscore)){
                self.values.Add_Abiscore(abiscore);
                self.modifiers.Add_Abiscore(
                    abiscore,
                    self.values.Get_Sum.bind(null, abiscore)
                );
                self.values.AddRecalcFunc(
                    abiscore,
                    self.modifiers.Get_Recalc_Func(abiscore)
                );
            }
        });
    }

//public methods
    this.Show_Detail_Popup_Value = function(abiscore){
        if (abiscore != ABISCORES.CON){
            self.values.Show_Detail_Popup(abiscore);
        }else{
            //TODO
        }
    }
    
    this.Show_Detail_Popup_Mod = function(abiscore){
        if (abiscore != ABISCORES.CON){
            self.modifiers.Show_Detail_Popup(abiscore);
        }else{
            //TODO
        }
    }

//private properties
    var self = this;

//public properties
    this.values = new Drone_Abiscore_Value_Collection_t(GUI_BLOCK);
    this.modifiers = new Drone_Abiscore_Mod_Collection_t(GUI_BLOCK);

//additional initialization
    Init();
}

function Drone_Chassis_t(
    drone_obj,
    gui_block
){
//constants
    const DRONE_OBJ = drone_obj;
    const GUI_BLOCK = gui_block;
    const DEFAULT_ABISCORE_VALUES = new Array(DRONE_ABISCORES.length).fill(10);

//private methods
    var Init = function(){
        GUI_BLOCK.Reset(self);
    }

//public methods
    this.Set = function(entry){
        self.entry = entry;
        
        DRONE_OBJ.abiscores.values.Set_Base_Value_By_Array(entry.abiscores);
        
        //TODO: set speed
        //TODO: set ac
        //TODO: set saves
        //TODO: set modules
        //TODO: set mods
        
        GUI_BLOCK.Set(entry.name); //TODO: add size
        
    }
    
    this.Clear = function(){
        self.entry = null;
        
        DRONE_OBJ.abiscores.values.Set_Base_Value_By_Array(DEFAULT_ABISCORE_VALUES);
        
        //TODO: set speed
        //TODO: set ac
        //TODO: set saves
        //TODO: set modules
        //TODO: set mods
        
        GUI_BLOCK.Clear();
    }

//private properties
    var self = this;

//public properties
    this.entry = null;
    this.initial_mods = new Leveled_Ability_List_t(
        "mods_drone_initial",
        "Встроенные модификации",
        null,
        "mods_drone_initial_",
        GUI_BLOCK.initial_mods
    );

//additional initialization
    Init();
}

function Drone_t(gui_block, set_gui_lvl_func){
//constants
    const GUI_BLOCK = gui_block;
    const SET_GUI_LVL_FUNC = set_gui_lvl_func;
    const ABILITY_LIST = [
        ["Базовые модификации"],
        ["Модуль навыка"],
        ["Ограниченный ИИ"],
        ["Прямое управление"],
        ["Экспертный ИИ"],
        ["Улучшенный реактор"],
        ["Улучшенные модификации"],
        ["Истинный ИИ"]
    ];
    const ABILITY_LVLS = [1, 1, 1, 1, 7, 10, 11, 20];
    const FEATS_LVLS = [1, 3, 6, 9, 11, 14, 17, 19];
    const MODS_LVLS = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

//private methods
    var Init = function(){
        GUI_BLOCK.Reset(self);
        
        let db = Ability_Database_GetList(ABILITIES_DATABASE, "Класс", ["Механик", "Способность дрона"]);
        for (let i = 0; i < ABILITY_LIST.length; i++){
            if (ABILITY_LIST[i].length == 1){
                let abi_name_full = ABILITY_LIST[i][0];
                let [abi_name, abi_suffix] = Split_Ability_Name_Suffix(abi_name_full);
                let abi_entry = Get_Ability_Entry_By_Name(db, abi_name);
                self.abilities.Set(i, abi_entry, abi_suffix);
            }else{
                //TODO?
            }
        }
    }

//public methods
    this.Update_Lvl = function(lvl){
        if (self.lvl == lvl){
            return;
        }
        
        self.lvl = lvl;
        if (self.lvl > 0){
            GUI_BLOCK.Show();
        }else{
            GUI_BLOCK.Hide();
        }
        
        SET_GUI_LVL_FUNC(lvl);
    }
    
    this.Get_SaveData_Obj = function(){
        var ret = {
            lvl: self.lvl,
            mods: self.mods.Get_SaveData_Obj(),
            feats: self.feats.Get_SaveData_Obj()
        };
        
        return ret;
    }
    
    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        self.Update_Lvl(obj.lvl);
        self.mods.Load_From_Obj(obj.mods);
        self.feats.Load_From_Obj(obj.feats);
    }
    
//private properties
    var self = this;

//public properties
    this.lvl = 0;
    this.abilities = new Leveled_Ability_List_t(
        "abi_drone",
        "Способности дрона",
        ABILITY_LVLS,
        "drone_",
        layers.classes.Get_Block(CLASSES.MECHANIC).speciality.drone.abilities,
        true
    );
    
    this.mods = new Leveled_Ability_List_t(
        "mods_drone",
        "Модификации дрона",
        MODS_LVLS,
        "mods_drone_",
        layers.classes.Get_Block(CLASSES.MECHANIC).speciality.drone.mods
    );
    
    this.feats = new Leveled_Ability_List_t(
        "feats_drone",
        "Черты дрона",
        FEATS_LVLS,
        "feats_drone_",
        layers.classes.Get_Block(CLASSES.MECHANIC).speciality.drone.feats
    );
    
    this.abiscores = new Drone_Abiscores_t(
        layers.classes.Get_Block(CLASSES.MECHANIC).speciality.drone.abiscores
    );
    
    this.chassis = new Drone_Chassis_t(
        self,
        layers.classes.Get_Block(CLASSES.MECHANIC).speciality.drone.chassis
    );

//additional initialization
    Init();
}

function Exocortex_t(gui_block, set_gui_lvl_func){
//constants
    const GUI_BLOCK = gui_block;
    const SET_GUI_LVL_FUNC = set_gui_lvl_func;
    const ABILITY_LIST = [
        ["Модуль памяти"],
        ["Система отслеживания целей"],
        ["Беспроводной взлом"],
        ["Модификация экзокортекса"],
        ["Двухпотоковое отслеживание"],
        ["Многозадачность"],
        ["Четырёхпотоковое отслеживание"]
    ];
    const ABILITY_LVLS = [1, 1, 5, 7, 10, 15, 20];
    const MODS_LVLS = [7, 11, 14, 17];

//private methods
    var Init = function(){
        GUI_BLOCK.Reset(self);
        
        let db = Ability_Database_GetList(ABILITIES_DATABASE, "Класс", ["Механик", "Способность экзокортекса"]);
        for (let i = 0; i < ABILITY_LIST.length; i++){
            if (ABILITY_LIST[i].length == 1){
                let abi_name_full = ABILITY_LIST[i][0];
                let [abi_name, abi_suffix] = Split_Ability_Name_Suffix(abi_name_full);
                let abi_entry = Get_Ability_Entry_By_Name(db, abi_name);
                self.abilities.Set(i, abi_entry, abi_suffix);
            }else{
                //TODO?
            }
        }
    }

//public methods
    this.Update_Lvl = function(lvl){
        if (self.lvl == lvl){
            return;
        }
        
        self.lvl = lvl;
        if (self.lvl > 0){
            GUI_BLOCK.Show();
        }else{
            GUI_BLOCK.Hide();
        }
        
        self.abilities.Update_Lvl(self.lvl);
        SET_GUI_LVL_FUNC(lvl);
    }
    
    this.Get_SaveData_Obj = function(){
        var ret = {
            lvl: self.lvl,
            mods: self.mods.Get_SaveData_Obj()
        };
        
        return ret;
    }
    
    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        self.Update_Lvl(obj.lvl);
        self.mods.Load_From_Obj(obj.mods);
    }

//private properties
    var self = this;

//public properties
    this.lvl = 0;
    this.abilities = new Leveled_Ability_List_t(
        "abi_exocortex",
        "Способности экзокортекса",
        ABILITY_LVLS,
        "exocortex_",
        layers.classes.Get_Block(CLASSES.MECHANIC).speciality.exocortex.abilities,
        true
    );
    
    this.mods = new Leveled_Ability_List_t(
        "mods_exocortex",
        "Модификации экзокортекса",
        MODS_LVLS,
        "mods_exocortex_",
        layers.classes.Get_Block(CLASSES.MECHANIC).speciality.exocortex.mods
    );

//additional initialization
    Init();
}

function Mechanic_Speciality_t (
    main_gui_block
){
//constants
    const MAIN_GUI_BLOCK = main_gui_block;
    const LVL_LIST = [];
    const NAME = "Искусственный интеллект";
    const CONTROL_NET_LVL = 17;
    
//private methods
    var Init = function(){
        var db = Ability_Database_GetList(ABILITIES_DATABASE, "Класс", [CLASSES.MECHANIC, NAME]);
        MAIN_GUI_BLOCK.main_ai_selector.Reset(self, NAME, LVL_LIST, db);
        MAIN_GUI_BLOCK.Reset();
        MAIN_GUI_BLOCK.ai_lvl_selector.Reset(self);
    }
    
    var Get_AI_Objs = function(){
        switch (self.current_main_spec.name){
        case "Экзокортекс":
            return [self.exocortex, self.drone];
        case "Дрон":
            return [self.drone, self.exocortex];
        
        case null:
        default:
            break;
        }
        return null;
    }

//public methods
    this.Set = function(spec_entry){
        switch(spec_entry.name){
        case "Экзокортекс":
            self.exocortex.Update_Lvl(m_lvl);
            
            break;
            
        case "Дрон":
            self.drone.Update_Lvl(m_lvl);
            break;
            
        default:
            console.error("Failed to set unknown mechanic speciality: " + spec_entry.name)
            return;
        
        }
        self.current_main_spec = spec_entry;
        MAIN_GUI_BLOCK.main_ai_selector.Set_Subclass(spec_entry.name);
        if (m_lvl >= CONTROL_NET_LVL){
            MAIN_GUI_BLOCK.ai_lvl_selector.Show();
        }
    }
    
    this.Clear = function(){
        self.exocortex.Update_Lvl(0);
        self.drone.Update_Lvl(0);
        MAIN_GUI_BLOCK.main_ai_selector.Remove_Subclass();
        if (m_lvl >= CONTROL_NET_LVL){
            MAIN_GUI_BLOCK.ai_lvl_selector.Hide();
        }
    }
    
    this.Update_Lvl = function(lvl){
        //TODO: check priority order?
        if (m_lvl == lvl){
            return;
        }
        
        let prev_lvl = m_lvl;
        m_lvl = lvl;
        
        if (m_lvl == 0){
            self.drone.Update_Lvl(m_lvl);
            self.exocortex.Update_Lvl(m_lvl);
            return;
        }
        
        if (self.current_main_spec == null){
            return;
        }
        
        let spec_obj = Get_AI_Objs();
        if (spec_obj == null){
            console.error("Unknown mechanic spec set!");
            return;
        }
        
        if (m_lvl < CONTROL_NET_LVL){
            if (prev_lvl >= CONTROL_NET_LVL){
                MAIN_GUI_BLOCK.ai_lvl_selector.Hide();
                spec_obj[1].Update_Lvl(0);
            }
            
            spec_obj[0].Update_Lvl(m_lvl);
            return;
        }
        
        if (prev_lvl < CONTROL_NET_LVL){
            MAIN_GUI_BLOCK.ai_lvl_selector.Show();
            spec_obj[0].Update_Lvl(m_lvl);
            return;
        }
        
        if ((m_lvl > prev_lvl) || (spec_obj[1].lvl == 0)){
            spec_obj[0].Update_Lvl(spec_obj[0].lvl + m_lvl - prev_lvl);
            return;
        }
        
        let lvl_diff = prev_lvl - m_lvl;
        if (spec_obj[1].lvl >= lvl_diff){
            spec_obj[1].Update_Lvl(spec_obj[1].lvl - lvl_diff);
            return;
        }
        
        spec_obj[1].Update_Lvl(0);
        spec_obj[0].Update_Lvl(m_lvl);
    }
    
    this.Increase_Drone_Lvl = function(){
        if (self.exocortex.lvl > 0){
            self.exocortex.Update_Lvl(self.exocortex.lvl - 1);
            self.drone.Update_Lvl(self.drone.lvl + 1);
        }
    }
    
    this.Increase_Exocortex_Lvl= function(){
        if (self.drone.lvl > 0){
            self.drone.Update_Lvl(self.drone.lvl - 1);
            self.exocortex.Update_Lvl(self.exocortex.lvl + 1);
        }
    }
    
    this.Show_Descr = function(){
        if (self.current_main_spec != null){
            Popup_Descr.Call(self.current_main_spec.name, self.current_main_spec.descr);
        }
    }
    
    this.Get_SaveData_Obj = function(){
        var ret = {
            main: null,
            drone: self.drone.Get_SaveData_Obj(),
            exocortex: self.exocortex.Get_SaveData_Obj()
        }
        if (self.current_main_spec != null){
            ret.main = self.current_main_spec.name;
        }
        return ret; 
    }
    
    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        if (obj.main != null){
            let spec_entry = Get_Ability_Entry_By_Name(
                Ability_Database_GetList(ABILITIES_DATABASE, "Класс", ["Механик", NAME]),
                obj.main
            );
            if (spec_entry == null){
                console.error("Failed to set unknown mechanic speciality: " + obj.main);
            }
            self.Set(spec_entry);
        }
        
        self.drone.Load_From_Obj(obj.drone);
        self.exocortex.Load_From_Obj(obj.exocortex);
        
        //TODO: stub! need a solution!
        m_lvl = obj.drone.lvl + obj.exocortex.lvl;
        if (m_lvl >= CONTROL_NET_LVL){
            MAIN_GUI_BLOCK.ai_lvl_selector.Show();
        }
    }

//private properties
    var self = this;
    var m_lvl = 0;

//public properties
    this.current_main_spec = null;
    this.drone = new Drone_t(
        MAIN_GUI_BLOCK.drone,
        MAIN_GUI_BLOCK.ai_lvl_selector.Set_Drone_Lvl
    );
    this.exocortex = new Exocortex_t(
        MAIN_GUI_BLOCK.exocortex,
        MAIN_GUI_BLOCK.ai_lvl_selector.Set_Exocortex_Lvl
    );

//additional initialization
    Init();
}

function Class_Mechanic_t (){
const ABILITY_LIST = [
    ["Искусственный интеллект"],
    ["Обход"],
    ["Специнструмент"],
    ["Трюк механика"],
    ["Перегрузка"],
    ["Привычное оружие [Механик]"],
    ["Удалённый взлом"],
    ["Золотые руки"],
    ["Профессиональный инструмент"],
    ["Перехват управления"],
    ["Слаженная атака"],
    ["Улучшенный инструмент"],
    ["Распределённое управление"],
    ["Превосходный инструмент"],
    ["Призрак в машине"],
    ["Мастер технологий"]
];
const CLASS_ABILITY_LVLS = [1, 1, 1, 2, 3, 3, 5, 7, 7, 9, 11, 13, 17, 19, 19, 20];
const TRICKS_LVLS = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

//private methods
    var Init = function(){
        let db = Ability_Database_GetList(ABILITIES_DATABASE, "Класс", ["Механик", "Способность класса"]);
        for (let i = 0; i < ABILITY_LIST.length; i++){
            if (ABILITY_LIST[i].length == 1){
                let abi_name_full = ABILITY_LIST[i][0];
                let [abi_name, abi_suffix] = Split_Ability_Name_Suffix(abi_name_full);
                let abi_entry = Get_Ability_Entry_By_Name(db, abi_name);
                if (abi_entry == null){
                    console.error("Failed to find mechanic ability: " + abi_name);
                    continue;
                }
                self.class_abilities.Set(i, abi_entry, abi_suffix);
            }else{
                //TODO?
            }
        }
    }

//public methods
    this.Set_Lvl = function(lvl){
        self.lvl = lvl;
        self.class_abilities.Update_Lvl(self.lvl);
        self.tricks.Update_Lvl(self.lvl);
        self.speciality.Update_Lvl(self.lvl);
    }

    this.Get_SaveData_Obj = function(){
        var ret = {
            lvl: self.lvl,
            tricks: self.tricks.Get_SaveData_Obj(),
            speciality: self.speciality.Get_SaveData_Obj()
        }
        return ret;
    }
    
    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        self.tricks.Load_From_Obj(obj.tricks);
        self.speciality.Load_From_Obj(obj.speciality);
    }

//private properties
    var self = this;

//public properties
    this.lvl = 0;
    this.class_abilities = new Leveled_Ability_List_t(
        "abi_class_mechanic",
        "Классовые способности (Механик)",
        CLASS_ABILITY_LVLS,
        "mechanic_class_",
        layers.classes.Get_Block(CLASSES.MECHANIC).class_abilities,
        true
    );
    this.tricks = new Leveled_Ability_List_t(
        "abi_class_mechanic_tricks",
        "Трюки механика",
        TRICKS_LVLS,
        "mechanic_tricks_",
        layers.classes.Get_Block(CLASSES.MECHANIC).tricks
    );
    this.speciality = new Mechanic_Speciality_t(
        layers.classes.Get_Block(CLASSES.MECHANIC).speciality
    );

//additional initialization
    Init();
}