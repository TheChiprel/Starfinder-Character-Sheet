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
        true);
    this.tricks = new Leveled_Ability_List_t(
        "abi_class_mechanic_tricks",
        "Трюки механика",
        TRICKS_LVLS,
        "mechanic_tricks_",
        layers.classes.Get_Block(CLASSES.MECHANIC).tricks);

//additional initialization
    Init();
}