function Class_Technomancer_t (){
//constants
const CLASS_ABILITY_LVLS = [1, 3, 3, 3, 6, 19, 20];
const HACKS_LVLS = [2, 5, 8, 11, 14, 17, 20];
const ABILITY_LIST = [
    ["Хранилище чар"],
    ["Заклинатель-эксперт"],
    ["Привычное оружие [Техномант]"],
    ["Техноразум"],
    ["Накопитель чар"],
    ["Подзарядка решимости"],
    ["Объединение заклинаний"]
];

const SPELLS_KNOWN = [
    [ 1,  1,  1,  1,  2,  3], //0 lvl
    [ 1,  1,  2,  3,  7, 11], //1 lvl
    [ 4,  4,  5,  6, 10, 14], //2 lvl
    [ 7,  7,  8,  9, 13, 17], //3 lvl
    [10, 10, 11, 12, 16, 20], //4 lvl
    [13, 13, 14, 15, 19    ], //5 lvl
    [16, 16, 17, 18, 20    ]  //6 lvl
];

const RECALC_FUNC_ID = "TECHNOMANCER_SPELL_DAILY";

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
const SPELLS_DAILY_BY_INT = [
    null,
    [0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3], //1 lvl
    [0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3], //2 lvl
    [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2], //3 lvl
    [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2], //4 lvl
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2], //5 lvl
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2]  //6 lvl
];
const TECHNOMANCER_SPELL_ID_PREFIX = "TECHNOMANCER_SPELL_"; //TODO: is used?
const SPELLBOOK_COLLECTION_PREFIX = "spells_technomancer";
const SPELLBOOK_LVL_STRING_PREFIX = "Заклинания Техноманта";

//private methods
    var Init = function(){
        
        for (let i = 0; i < ABILITY_LIST.length; i++){
            if (ABILITY_LIST[i].length == 1){
                let abi_name_full = ABILITY_LIST[i][0];
                let [abi_name, abi_suffix] = Split_Ability_Name_Suffix(abi_name_full);
                let abi_entry = Get_Ability_Entry_By_Name(ABILITIES_DATABASE, abi_name);
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
        self.hacks.Update_Lvl(self.lvl);
        self.spells.Update_Lvl(self.lvl);
    }

    this.Get_SaveData_Obj = function(){
        var ret = {
            'lvl': self.lvl,
            'hacks': self.hacks.Get_SaveData_Obj(),
            'spells': self.spells.Get_SaveData_Obj()
        }
        return ret;
    }
    
    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        self.hacks.Load_From_Obj(obj.hacks);
        self.spells.Load_From_Obj(obj.spells);
    }

//private properties
    var self = this;

//public properties
    this.lvl = 0;
    this.class_abilities = new Leveled_Ability_List_t(
        "abi_class_technomancer",
        "Классовые способности (Техномант)",
        CLASS_ABILITY_LVLS,
        "technomancer_class_",
        layers.classes.Get_Block(CLASSES.TECHNOMANCER).class_abilities,
        true);
    this.hacks = new Leveled_Ability_List_t(
        "abi_class_technomancer_hacks",
        "Магические хаки",
        HACKS_LVLS,
        "technomancer_hacks",
        layers.classes.Get_Block(CLASSES.TECHNOMANCER).hacks);
    this.spells = new Spell_Book_t(
        SPELLS_KNOWN,
        SPELLS_DAILY,
        ABISCORES.INT,
        SPELLS_DAILY_BY_INT,
        SPELLBOOK_COLLECTION_PREFIX,
        SPELLBOOK_LVL_STRING_PREFIX,
        layers.classes.Get_Block(CLASSES.TECHNOMANCER).spells
    );

//additional initialization
    Init();
}