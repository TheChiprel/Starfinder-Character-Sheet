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
    //TODO: у хитростей надо по уровню показывать
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
    this.key_abiscore = null;

//additional initialization
    Init();
}