function Drone_t(){
//constants


//private methods

//public methods

//private properties
    var self = this;

//public properties

//additional initialization
}

function Exocortex_t(){
//constants
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
    this.Set_Lvl = function(lvl){
        self.lvl = lvl;
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
        layers.classes.Get_Block(CLASSES.MECHANIC).speciality.Get_Block("Экзокортекс").abilities,
        true
    );
    // this.mods = new Leveled_Ability_List_t(
        // "mods_exocortex",
        // "Модификации экзокортекса",
        // TRICKS_LVLS,
        // "mechanic_tricks_",
        // layers.classes.Get_Block(CLASSES.MECHANIC).speciality.Get_Block("Экзокортекс").mods
    // );

//additional initialization
    Init();
}

function Mechanic_Speciality_t (
    selector_gui_block,
    main_gui_block
){
//constants
    const SELECTOR_GUI_BLOCK = selector_gui_block;
    const MAIN_GUI_BLOCK = main_gui_block;
    const LVL_LIST = [];
    const NAME = "Искусственный интеллект";
    
//private methods
    var Init = function(){
        var db = Ability_Database_GetList(ABILITIES_DATABASE, "Класс", [CLASSES.MECHANIC, NAME]);
        SELECTOR_GUI_BLOCK.Reset(self, NAME, LVL_LIST, db);
        MAIN_GUI_BLOCK.Reset();
    }

//public methods
    this.Set = function(spec_entry){
        self.current_spec = spec_entry;
        SELECTOR_GUI_BLOCK.Set_Subclass(spec_entry.name);
        MAIN_GUI_BLOCK.Set(spec_entry.name);
    }
    
    this.Clear = function(){
        self.current_spec = null;
        SELECTOR_GUI_BLOCK.Remove_Subclass();
        MAIN_GUI_BLOCK.Clear();
    }
    
    this.Update_Lvl = function(lvl){

    }
    
    this.Show_Descr = function(){
        if (self.current_spec != null){
            Popup_Descr.Call(self.current_spec.name, self.current_spec.descr);
        }
    }
    
    this.Get_SaveData_Obj = function(){

    }
    
    this.Load_From_Obj = function(obj){

    }

//private properties
    var self = this;
    var m_abi_list;

//public properties
    this.current_spec = null;
    this.drone = new Drone_t();
    this.exocortex = new Exocortex_t();

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
    }

    this.Get_SaveData_Obj = function(){
        var ret = {
            lvl: self.lvl,
            tricks: self.tricks.Get_SaveData_Obj()
        }
        return ret;
    }
    
    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        self.tricks.Load_From_Obj(obj.tricks);
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
        layers.classes.Get_Block(CLASSES.MECHANIC).speciality_selector,
        layers.classes.Get_Block(CLASSES.MECHANIC).speciality
    );

//additional initialization
    Init();
}