function Chardata_t(){
//private methods

//public methods
    this.Reset = function(){
        self.name = "";
        self.race = null;
        self.theme = null;
        self.abilities = new Chardata_Abilities_t();
        self.classes = new Class_Collection_t();
        self.lvl = new Level_t();
        self.stats = new Stats_t();
        self.skills = new Skills_t();
        self.inventory = new Inventory_t();
        self.current_state = new Current_State_t();
    }
    
    this.Get_SaveData_Obj = function(){
        var ret = {
            name: self.name,
            race: ((self.race == null) ? null : self.race.name), //TODO: Get_SaveData_Obj
            theme: ((self.theme == null) ? null : self.theme.name), //TODO: Get_SaveData_Obj
            abiscores: self.stats.abiscores.Get_SaveData_Obj(),
            skills: self.skills.Get_Point_Obj(),
            classes: self.classes.Get_SaveData_Obj(),
            inventory: self.inventory.Get_SaveData_Obj(),
            abilities: self.abilities.Get_SaveData_Obj(),
            custom: self.stats.custom_mods.Get_SaveData_Obj(),
            current_state: self.current_state.Get_SaveData_Obj()
        };
        return ret;
    }
    
    this.Load_From_Obj = function(obj){
        //WIP
    }

//private properties
    var self = this;
    var m_all_ability;

//public properties
    this.name;
    this.race;
    this.theme;
    this.lvl;
    this.classes;
    this.stats;
    this.skills;
    this.inventory;
    this.abilities;
    this.current_state;
}

var chardata = new Chardata_t();