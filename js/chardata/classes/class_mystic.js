function Connection_Spell_t (
    entry_main,
    entry_replace
){
//constants
    this.entry_main = entry_main;
    this.entry_replace = entry_replace;
}

function Mystic_Connection_t (
    spells_obj,
    gui_block,
    gui_spells
){
//constants
    const SPELLS_OBJ = spells_obj;
    const GUI_BLOCK = gui_block;
    const GUI_SPELLS = gui_spells;
    const LVL_LIST = [1, 3, 6, 9, 12, 15, 18];
    const CONNECTION_SPELL_LVLS = [1, 4, 7, 10, 13, 16];
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
    
    //TODO: errors and warnings
    //TODO: remake/remove later, when ability system is updated
    var Set_Connection_Spells = function(descr){
        let curr_lvl = 1;
        Clear_Connection_Spells();
        
        while (curr_lvl <= 6){
            let reg = RegExp("(?:" + curr_lvl + "-)([0-9])(?: – )(.+)(?:;)", 'g');
            let pre_res = reg.exec(descr);
            if (pre_res != null){
                let next_lvl = pre_res[1];
                let main_spell_entry = Get_Spell_Entry_By_Name(SPELLS_DATABASE, pre_res[2]);
                if (main_spell_entry == null){
                    console.error("Failed to find connection spell: " + pre_res[2]);
                    curr_lvl = next_lvl + 1;
                }
                
                for (; curr_lvl < next_lvl; curr_lvl++){
                    if (curr_lvl < (next_lvl - 1)){
                        reg = RegExp("(?:" + curr_lvl + " – )(.+)(?:, " + (curr_lvl + 1) + ")", 'g');
                    }else{
                        reg = RegExp("(?:" + curr_lvl + " – )(.+)(?:\.)", 'g');
                    }
                    let range_res = reg.exec(descr);
                    if (range_res != null){
                        let entry = Get_Spell_Entry_By_Name(SPELLS_DATABASE, range_res[1]);
                        m_connection_spells[curr_lvl-1] = new Connection_Spell_t(main_spell_entry, entry);
                        if ((m_curr_lvl < CONNECTION_SPELL_LVLS[curr_lvl]) || (entry == null)){
                            SPELLS_OBJ.Set(curr_lvl, 0, main_spell_entry);
                        }else{
                            SPELLS_OBJ.Set(curr_lvl, 0, entry);
                        }
                    }
                }
                
                m_connection_spells[curr_lvl-1] = Connection_Spell_t(main_spell_entry, null);
                SPELLS_OBJ.Set(curr_lvl, 0, main_spell_entry);
                curr_lvl++;
                continue;
            }
            
            if (curr_lvl < 6){
                reg = RegExp("(?:" + curr_lvl + " – )(.+)(?:, " + (curr_lvl + 1) + ")", 'g');
            }else{
                reg = RegExp("(?:" + curr_lvl + " – )(.+)(?:\.)", 'g');
            }
            let res = reg.exec(descr);
            if (res != null){
                let entry = Get_Spell_Entry_By_Name(SPELLS_DATABASE, res[1]);
                if (entry != null){
                    m_connection_spells[curr_lvl-1] = new Connection_Spell_t(entry, null);
                }
                SPELLS_OBJ.Set(curr_lvl, 0, entry);
            }
            
            curr_lvl++;
        }
    }
    
    var Update_Connection_Spells = function(previous_lvl){
        if (self.current_spec == null){
            return;
        }
        
        for (let curr_lvl = 1; curr_lvl <= 5; curr_lvl++){
            if (m_connection_spells[curr_lvl-1].entry_replace == null){
                continue;
            }
            
            if (
                !(
                    (previous_lvl < CONNECTION_SPELL_LVLS[curr_lvl]) ^
                    (m_curr_lvl < CONNECTION_SPELL_LVLS[curr_lvl])
                )
            ){
                continue;
            }
            
            if (m_curr_lvl < previous_lvl){
                SPELLS_OBJ.Set(curr_lvl, 0, m_connection_spells[curr_lvl-1].entry_main);
            }else{
                SPELLS_OBJ.Set(curr_lvl, 0, m_connection_spells[curr_lvl-1].entry_replace);
            }
        }
    }
    
    var Clear_Connection_Spells = function(){
        for (let curr_lvl = 1; curr_lvl <= 6; curr_lvl++){
            spells_obj.Remove(curr_lvl, 0);
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
        
        Set_Connection_Spells(connection_entry.descr);
        
        GUI_BLOCK.Set_Subclass(connection_entry.name);
    }
    
    this.Clear = function(){
        self.current_spec = null;
        m_abi_list.Clear();
        m_abi_list.Rename_List(NAME);
        Clear_Connection_Spells();
        GUI_BLOCK.Remove_Subclass();
    }
    
    this.Update_Lvl = function(lvl){
        let prev_lvl = m_curr_lvl;
        m_curr_lvl = lvl;
        m_abi_list.Update_Lvl(m_curr_lvl);
        Update_Connection_Spells(prev_lvl);
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
    var m_curr_lvl = 0;
    var m_connection_spells = new Array(6).fill(null); //TODO: magic

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
        [ 1,  1,  1,  1,  2,  3],     //0 lvl
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
        self.spells,
        layers.classes.Get_Block(CLASSES.MYSTIC).connection,
        layers.classes.Get_Block(CLASSES.MYSTIC).spells
    );

//additional initialization
    Init();
}