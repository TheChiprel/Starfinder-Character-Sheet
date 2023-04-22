function Race_t(){
//constants
//TODO: change to classes instead of IDs
    const OUTFIELD_RACE = document.getElementById("selector_race");
    const OUTFIELD_SIZE = document.getElementById("outfield_size");
    const OUTFIELD_TYPE = document.getElementById("outfield_race_type");
    
//private methods

//public methods
    this.Set = function(entry){
        m_entry = entry;
        if (entry != null){
            OUTFIELD_RACE.value = entry.name;
            OUTFIELD_SIZE.value = entry.size;
            OUTFIELD_TYPE.value = entry.type;
            
            chardata.stats.abiscores.values.SetRaceValues(entry.abiscores, entry.plus2);
            chardata.stats.speeds.land.Set_Base_Value(entry.speed, entry.name);
            chardata.stats.hp.Set_Race_Mod(entry.name, entry.hp);
            chardata.abilities.race.Set_Abilities(entry.name, entry.abilities);
        }else{
            OUTFIELD_RACE.value = "---";
            OUTFIELD_SIZE.value = "---";
            OUTFIELD_TYPE.value = "---";
            
            chardata.stats.abiscores.values.SetRaceValues([0, 0, 0, 0, 0, 0], false);
            chardata.stats.speeds.land.Set_Base_Value(0, null);
            chardata.stats.hp.Set_Race_Mod(null, 0);
            chardata.abilities.race.Set_Abilities(null, null);
        }
    }
    
    this.Get_SaveData_Obj = function(){
        if (m_entry == null){
            return null;
        }
        return m_entry.name;
    }

//private properties
    var self = this;
    var m_entry = null;

//public properties

//additional initialization
}

function Chardata_t(){
//private methods

//public methods
    this.Reset = function(){
        self.name = "";
        self.race = new Race_t();
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
            race: self.race.Get_SaveData_Obj(),
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