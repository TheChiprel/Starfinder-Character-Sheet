function Chardata_t(){
//private methods

//public methods
    this.Reset = function(){
        self.name = new Name_t();
        self.race = new Race_t();
        self.theme = new Theme_t();
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
            name: self.name.Get_SaveData_Obj(),
            race: self.race.Get_SaveData_Obj(),
            theme: self.theme.Get_SaveData_Obj(),
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
        if (obj == undefined){
            return;
        }
        
        self.name.Load_From_Obj(obj.name);
        self.race.Load_From_Obj(obj.race);
        self.theme.Load_From_Obj(obj.theme);
        self.stats.abiscores.Load_From_Obj(obj.abiscores);
        self.skills.Load_From_Obj(obj.skills);
        self.classes.Load_From_Obj(obj.classes);
        self.inventory.Load_From_Obj(obj.inventory);
        self.abilities.Load_From_Obj(obj.abilities);
        self.stats.custom_mods.Load_From_Obj(obj.custom);
        self.current_state.Load_From_Obj(obj.current_state);
    }

//private properties
    var self = this;

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