function Operative_Speciality_t (gui_block){
//constants
    const GUI_BLOCK = gui_block;
    const LVL_LIST = [5, 11];
    const NAME = "Специализация оперативника";
    
//private methods
    var Init = function(){
        var db = Ability_Database_GetList(ABILITIES_DATABASE, "Класс", ["Оперативник", NAME]);
        GUI_BLOCK.Reset(self, NAME, LVL_LIST, db);
        
        m_abi_list = new Leveled_Ability_List_t (
            "speciality",
            NAME,
            LVL_LIST,
            "speciality_",
            GUI_BLOCK.abi_list_block,
            true
        );
    }

//public methods
    this.Set = function(spec_entry){
        let db = Ability_Database_GetList(ABILITIES_DATABASE, "Класс", ["Оперативник", spec_entry.name]);
        if (db.length < LVL_LIST.length){
            console.error("Not all abilities of operative speciality not found: " + spec_entry.name);
            return;
        }
        
        self.current_spec = spec_entry;
        m_abi_list.Rename_List(NAME + " (" + spec_entry.name + ")");
        db.forEach(entry => {
            if (entry.subtype.includes("Оперативная уловка")){
                m_abi_list.Set(0, entry);
            }else if (entry.subtype.includes("Спецспособность специализации")){
                m_abi_list.Set(1, entry);
            }else{
                console.warn("Detected unknown speciality ability: " + entry.name);
            }
        });
        
        GUI_BLOCK.Set_Subclass(spec_entry.name);
    }
    
    this.Clear = function(){
        self.current_spec = null;
        m_abi_list.Clear();
        m_abi_list.Rename_List(NAME);
        GUI_BLOCK.Remove_Subclass();
    }
    
    this.Update_Lvl = function(lvl){
        m_abi_list.Update_Lvl(lvl);
    }
    
    this.Show_Descr = function(){
        if (self.current_spec != null){
            Popup_Descr.Call(self.current_spec.name, self.current_spec.descr);
        }
    }
    
    this.Get_SaveData_Obj = function(){
        if (self.current_spec == null){
            return null;
        }
        return self.current_spec.name;
    }
    
    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        let spec_entry = Get_Ability_Entry_By_Name(
            Ability_Database_GetList(ABILITIES_DATABASE, "Класс", ["Оперативник", NAME]),
            obj
        );
        if (spec_entry == null){
            console.error("Failed to set unknown operative speciality: " + obj);
            return;
        }
        
        self.Set(spec_entry);
    }

//private properties
    var self = this;
    var m_abi_list;

//public properties
    this.current_spec = null;

//additional initialization
    Init();
}

function Class_Operative_t (){
const ABILITY_LIST = [
    ["Обманная атака"],
    ["Оперативный опыт"],
    ["Специализация"],
    ["Оперативная уловка"],
    ["Уклонение"],
    ["Быстрое перемещение"],
    ["Привычное оружие [Оперативник]"],
    ["Калечащий приём"],
    ["Спецуловка"],
    ["Невероятное проворство"],
    ["Троекратная атака"],
    ["Спецспособность"],
    ["Четырёхкратная атака"],
    ["Двойной калечащий приём"],
    ["Превосходный оперативник"]
];
const CLASS_ABILITY_LVLS = [1, 1, 1, 2, 2, 3, 3, 4, 5, 7, 8, 11, 13, 17, 20];
const EXPLOITS_LVLS = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

//private methods
    var Init = function(){
        let db = Ability_Database_GetList(ABILITIES_DATABASE, "Класс", ["Оперативник", "Способность класса"]);
        for (let i = 0; i < ABILITY_LIST.length; i++){
            if (ABILITY_LIST[i].length == 1){
                let abi_name = ABILITY_LIST[i][0];
                let abi_entry = Get_Ability_Entry_By_Name(db, abi_name);
                self.class_abilities.Set(i, abi_entry, undefined);
            }else{
                //TODO?
            }
        }
    }

//public methods
    this.Set_Lvl = function(lvl){
        self.lvl = lvl;
        self.class_abilities.Update_Lvl(self.lvl);
        self.exploits.Update_Lvl(self.lvl);
        self.speciality.Update_Lvl(self.lvl);
    }

    this.Get_SaveData_Obj = function(){
        var ret = {
            lvl: self.lvl,
            exploits: self.exploits.Get_SaveData_Obj(),
            speciality: self.speciality.Get_SaveData_Obj()
        }
        return ret;
    }
    
    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        self.exploits.Load_From_Obj(obj.exploits);
        self.speciality.Load_From_Obj(obj.speciality);
    }

//private properties
    var self = this;

//public properties
    this.lvl = 0;
    this.class_abilities = new Leveled_Ability_List_t(
        "abi_class_operative",
        "Классовые способности (Оперативник)",
        CLASS_ABILITY_LVLS,
        "operative_class_",
        layers.classes.Get_Block(CLASSES.OPERATIVE).class_abilities,
        true);
    this.exploits = new Leveled_Ability_List_t(
        "abi_class_operative_exploit",
        "Оперативные уловки",
        EXPLOITS_LVLS,
        "operative_exploit_",
        layers.classes.Get_Block(CLASSES.OPERATIVE).exploits);
    this.speciality = new Operative_Speciality_t(layers.classes.Get_Block(CLASSES.OPERATIVE).speciality);

//additional initialization
    Init();
}