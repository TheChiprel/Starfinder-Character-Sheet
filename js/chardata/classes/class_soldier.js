function Fighting_Style_t (lvl_list, gui_block){
//constants
    const GUI_BLOCK = gui_block;
    const LVL_LIST = lvl_list;
    
//private methods
    var Init = function(){
        var db = Ability_Database_GetList(ABILITIES_DATABASE, "Класс", ["Солдат", "Боевой стиль"]);
        GUI_BLOCK.Reset(self, "Основной боевой стиль", LVL_LIST, db);
        
        m_abi_list = new Leveled_Ability_List_t (
            "test" + LVL_LIST[0],//TODO!!
            null,
            lvl_list,
            "test_test",
            GUI_BLOCK.abi_list_block,
            true
        );
    }

//public methods
    this.Set = function(style_name){
        let db = Ability_Database_GetList(ABILITIES_DATABASE, "Класс", ["Солдат", "Способность боевого стиля", style_name]);
        if (db.length < LVL_LIST.length){
            console.error("Not all abilities of combat style not found: " + style_name);
            return;
        }
        
        self.current_style = style_name;
        db.forEach(entry => {
            let index = LVL_LIST.indexOf(entry.lvl + LVL_LIST[0] - 1);
            if (index >= 0){
                m_abi_list.Set(index, entry);
            }
        });
        
        GUI_BLOCK.Set_Subclass(style_name);
    }
    
    this.Clear = function(){
        self.current_style = null;
        m_abi_list.Clear();
        GUI_BLOCK.Remove_Subclass();
    }
    
    //TODO: save, load, show descrs

//private properties
    var self = this;
    var m_abi_list;

//public properties
    this.current_style = null;

//additional initialization
    Init();
}

function Class_Soldier_t (){
const ABILITY_LIST = [
    ["Основной боевой стиль"],
    ["Техника основного стиля"],
    ["Боевая черта"],
    ["Военная хитрость"],
    ["Привычное оружие [Солдат]"],
    ["Вспомогательный боевой стиль"],
    ["Техника вспомогательного стиля"],
    ["Солдатский натиск"],
    ["Смертельная атака"]
];
const CLASS_ABILITY_LVLS = [1, 1, 2, 3, 3, 9, 9, 11, 20];
const GEAR_BOOST_LVLS = [3, 7, 11, 15, 19];
const COMBAT_FEAT_LVLS = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const PRIMARY_FIGHTING_STYLE_LVLS = [1, 5, 9, 13, 17];
const SECONDARY_FIGHTING_STYLE_LVLS = [9, 13, 17];

//private methods
    var Init = function(){
        let db = Ability_Database_GetList(ABILITIES_DATABASE, "Класс", ["Солдат", "Способность класса"]);
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
        //TODO
    }

    this.Get_SaveData_Obj = function(){
        var ret = {
            lvl: self.lvl,
            key_abiscore: self.key_abiscore,
            combat_feats: self.combat_feats.Get_SaveData_Obj(),
            gear_boosts: self.gear_boosts.Get_SaveData_Obj()
        }
        return ret;
    }
    
    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        self.key_abiscore = (obj.key_abiscore);
        self.combat_feats.Load_From_Obj(obj.combat_feats);
        self.gear_boosts.Load_From_Obj(obj.gear_boosts);
    }

//private properties
    var self = this;

//public properties
    this.lvl = 0;
    this.class_abilities = new Leveled_Ability_List_t(
        "abi_class_soldier",
        "Классовые способности (Солдат)",
        CLASS_ABILITY_LVLS,
        "soldier_class_",
        layers.classes.Get_Block(CLASSES.SOLDIER).class_abilities,
        true);
    this.combat_feats = new Leveled_Ability_List_t(
        "abi_class_soldier_combat_feat",
        "Боевые черты",
        COMBAT_FEAT_LVLS,
        "soldier_combat_feat_",
        layers.classes.Get_Block(CLASSES.SOLDIER).combat_feats);
    this.gear_boosts = new Leveled_Ability_List_t(
        "abi_class_soldier_gear_boost",
        "Военные хитрости",
        GEAR_BOOST_LVLS,
        "soldier_gear_boost_",
        layers.classes.Get_Block(CLASSES.SOLDIER).gear_boosts);
    this.primary_fighting_style = new Fighting_Style_t(
        PRIMARY_FIGHTING_STYLE_LVLS,
        layers.classes.Get_Block(CLASSES.SOLDIER).primary_fighting_style
    );
    this.secondary_fighting_style = new Fighting_Style_t(
        SECONDARY_FIGHTING_STYLE_LVLS,
        layers.classes.Get_Block(CLASSES.SOLDIER).secondary_fighting_style
    );
    this.key_abiscore = null;

//additional initialization
    Init();
}