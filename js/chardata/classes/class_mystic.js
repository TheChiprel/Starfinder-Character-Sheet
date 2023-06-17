function Mystic_Connection_t (
    gui_block,
    gui_spells
){
//constants
    const GUI_BLOCK = gui_block;
    const GUI_SPELLS = gui_spells;
    const LVL_LIST = [1, 3, 6, 9, 12, 15, 18];
    const NAME = "Дарование";
    
//private methods
    var Init = function(){
        var db = Ability_Database_GetList(ABILITIES_DATABASE, "Класс", ["Мистик", NAME]);
        GUI_BLOCK.Reset(self, NAME, LVL_LIST, db);
        
        m_abi_list = new Leveled_Ability_List_t (
            "connection",
            NAME,
            LVL_LIST,
            "connection_",
            GUI_BLOCK.abi_list_block,
            true
        );
        
        for (let spell_lvl = 1; spell_lvl <= 6; spell_lvl++){ //TODO: magic
            GUI_SPELLS.Set_Row_Const_State(spell_lvl, 0, true);
        }
    }

//public methods
    this.Set = function(connection_entry){
        let db = Ability_Database_GetList(ABILITIES_DATABASE, "Класс", ["Способность дарования", "Мистик", connection_entry.name]);
        if (db.length < LVL_LIST.length){
            console.error("Not all abilities of mystic connection not found: " + connection_entry.name);
            return;
        }
        
        self.current_spec = connection_entry;
        
        m_abi_list.Rename_List(NAME + " (" + connection_entry.name + ")");
        
        db.forEach(entry => {
            let index = LVL_LIST.indexOf(entry.lvl);
            if (index >= 0){
                m_abi_list.Set(index, entry);
            }
        });
        
        GUI_BLOCK.Set_Subclass(connection_entry.name);
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
            Ability_Database_GetList(ABILITIES_DATABASE, "Класс", ["Мистик", NAME]),
            obj
        );
        if (spec_entry == null){
            console.error("Failed to set unknown mystic connection: " + obj);
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

function Class_Mystic_t (){
    const ABILITY_LIST = [
        ["Дарование"],
        ["Дарованная сила"],
        ["Дарованное заклинание"],
        ["Исцеляющее прикосновение"],
        ["Отголоски навыка"],
        ["Связь разумов"],
        ["Привычное оружие [Мистик]"],
        ["Телепатическая связь"],
        ["Возвышение"],
        ["Просветление"]
    ];
    const CLASS_ABILITY_LVLS = [1, 1, 1, 1, 2, 2, 3, 11, 19, 20];
    
    //connection slots is included
    const SPELLS_KNOWN = [
        [ 1,  1,  1,  1,  2,  3], //0 lvl
        [ 1,  1,  1,  2,  3,  7, 11], //1 lvl
        [ 4,  4,  4,  5,  6, 10, 14], //2 lvl
        [ 7,  7,  7,  8,  9, 13, 17], //3 lvl
        [10, 10, 10, 11, 12, 16, 20], //4 lvl
        [13, 13, 13, 14, 15, 19    ], //5 lvl
        [16, 16, 16, 17, 18, 20    ]  //6 lvl
    ];

    const RECALC_FUNC_ID = "MYSTIC_SPELL_DAILY";

    const SPELLS_DAILY = [
        "∞",                                                          //0 lvl
        [2, 2, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], //1 lvl
        [0, 0, 0, 2, 2, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5], //2 lvl
        [0, 0, 0, 0, 0, 0, 2, 2, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5], //3 lvl
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 3, 4, 4, 4, 4, 5, 5, 5], //4 lvl
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 3, 4, 4, 5, 5], //5 lvl
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 4, 5]  //6 lvl
    ];

    //TODO: same for all spellcasters?
    const SPELLS_DAILY_BY_WIS = [
        null,
        [0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3], //1 lvl
        [0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3], //2 lvl
        [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2], //3 lvl
        [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2], //4 lvl
        [0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2], //5 lvl
        [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2]  //6 lvl
    ];
    const TECHNOMANCER_SPELL_ID_PREFIX = "MYSTIC_SPELL_"; //TODO: is used?
    const SPELLBOOK_COLLECTION_PREFIX = "spells_mystic";
    const SPELLBOOK_LVL_STRING_PREFIX = "Заклинания Мистика";

//private methods
    var Init = function(){
        let db = Ability_Database_GetList(ABILITIES_DATABASE, "Класс", [CLASSES.MYSTIC, "Способность класса"]);
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
        self.connection.Update_Lvl(self.lvl);
        self.spells.Update_Lvl(self.lvl);
    }

    this.Get_SaveData_Obj = function(){
        var ret = {
            lvl: self.lvl,
            connection: self.connection.Get_SaveData_Obj(),
            spells: self.spells.Get_SaveData_Obj()
        }
        return ret;
    }
    
    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        self.connection.Load_From_Obj(obj.connection);
        self.spells.Load_From_Obj(obj.spells);
    }

//private properties
    var self = this;

//public properties
    this.lvl = 0;
    this.class_abilities = new Leveled_Ability_List_t(
        "abi_class_mystic",
        "Классовые способности (Мистик)",
        CLASS_ABILITY_LVLS,
        "mystic_class_",
        layers.classes.Get_Block(CLASSES.MYSTIC).class_abilities,
        true);
    this.spells = new Spell_Book_t(
        SPELLS_KNOWN,
        SPELLS_DAILY,
        ABISCORES.WIS,
        SPELLS_DAILY_BY_WIS,
        SPELLBOOK_COLLECTION_PREFIX,
        SPELLBOOK_LVL_STRING_PREFIX,
        layers.classes.Get_Block(CLASSES.MYSTIC).spells
    );
    //TODO: add spells by connection
    this.connection = new Mystic_Connection_t(
        layers.classes.Get_Block(CLASSES.MYSTIC).connection,
        layers.classes.Get_Block(CLASSES.MYSTIC).spells
    );

//additional initialization
    Init();
}