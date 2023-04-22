//TODO: In all functions change to classes instead of IDs?
function Name_t(){
//constants
    const INFIELD = document.getElementById("infield_charname");
    
//private methods
    var Init = function(){
        INFIELD.value = self.value;
        INFIELD.onchange = Proc_OnChange_Event;
    }
    
    var Proc_OnChange_Event = function(event){
        self.Set(event.target.value);
    }

//public methods
    this.Set = function(new_name){
        self.value = new_name;
        INFIELD.value = new_name;
    }
    
    this.Get_SaveData_Obj = function(){
        return self.value;
    }
    
    this.Load_From_Obj = function(obj){
        if (obj != undefined){
            self.Set(obj);
        }
    }

//private properties
    var self = this;

//public properties
    this.value = "";

//additional initialization
    Init();
}

function Race_t(){
//constants
    const SELECTOR_RACE = document.getElementById("selector_race");
    const OUTFIELD_SIZE = document.getElementById("outfield_size");
    const OUTFIELD_TYPE = document.getElementById("outfield_race_type");
    
//private methods
    var Init = function(){
        HTML_Selector_Clear_Options(SELECTOR_RACE);

        HTML_Selector_Add_Option(SELECTOR_RACE, "---");

        RACE_DATABASE.forEach(race_entry => {
            HTML_Selector_Add_Option(SELECTOR_RACE, race_entry.name);
        });
        SELECTOR_RACE.onchange = Proc_OnChange_Event;
        
        SELECTOR_RACE.value = "---";
        OUTFIELD_SIZE.value = "---";
        OUTFIELD_TYPE.value = "---";
    }
    
    var Proc_OnChange_Event = function(event){
        self.Set(event.target.value);
    }
    
    var Get_Entry_By_Name = function(name){
    for (let i = 0; i < RACE_DATABASE.length; i++){
        if (RACE_DATABASE[i].name == name){
            return RACE_DATABASE[i];
        }
    }
    
    console.warn("Attempt to set unknown race: " + name);
    return null;
}

//public methods
    this.Set = function(race_name){
        if ((race_name == "---") || (race_name == null)){
            m_entry = null;
        }else{
            m_entry = Get_Entry_By_Name(race_name);
        }
        
        if (m_entry != null){
            SELECTOR_RACE.value = m_entry.name;
            OUTFIELD_SIZE.value = m_entry.size;
            OUTFIELD_TYPE.value = m_entry.type;
            
            chardata.stats.abiscores.values.SetRaceValues(m_entry.abiscores, m_entry.plus2);
            chardata.stats.speeds.land.Set_Base_Value(m_entry.speed, m_entry.name);
            chardata.stats.hp.Set_Race_Mod(m_entry.name, m_entry.hp);
            chardata.abilities.race.Set_Abilities(m_entry.name, m_entry.abilities);
        }else{
            SELECTOR_RACE.value = "---";
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
    
    this.Load_From_Obj = function(obj){
        if (obj != undefined){
            self.Set(obj);
        }
    }

//private properties
    var self = this;
    var m_entry = null;

//public properties

//additional initialization
    Init();
}


function Theme_t(){
//constants
    const SELECTOR_THEME = document.getElementById("selector_theme");
    
//private methods
    var Init = function(){
        HTML_Selector_Clear_Options(SELECTOR_THEME);

        HTML_Selector_Add_Option(SELECTOR_THEME, "---");

        for (let i = 0; i < THEME_DATABASE.length; i++){
            HTML_Selector_Add_Option(SELECTOR_THEME, THEME_DATABASE[i].name);
        }
        SELECTOR_THEME.onchange = Proc_OnChange_Event;
        
        SELECTOR_THEME.value = "---";
    }
    
    var Proc_OnChange_Event = function(event){
        self.Set(event.target.value);
    }
    
    var Get_Entry_By_Name = function(name){
    for (let i = 0; i < THEME_DATABASE.length; i++){
        if (THEME_DATABASE[i].name == name){
            return THEME_DATABASE[i];
        }
    }
    
    console.warn("Attempt to set unknown theme: " + name);
    return null;
}

//public methods
    this.Set = function(theme_name){
        if ((theme_name == "---") || (theme_name == null)){
            m_entry = null;
        }else{
            m_entry = Get_Entry_By_Name(theme_name);
        }
        
        if (m_entry != null){
            SELECTOR_THEME.value = m_entry.name;
            
            chardata.abilities.theme.Set_Abilities(m_entry.name, m_entry.abilities);
            chardata.stats.abiscores.values.SetThemeValue(m_entry.abiscore);
        }else{
            SELECTOR_THEME.value = "---";
            
            chardata.abilities.theme.Set_Abilities(null, null);
            chardata.stats.abiscores.values.SetThemeValue(null);
        }
    }
    
    this.Get_SaveData_Obj = function(){
        if (m_entry == null){
            return null;
        }
        return m_entry.name;
    }
    
    this.Load_From_Obj = function(obj){
        if (obj != undefined){
            self.Set(obj);
        }
    }

//private properties
    var self = this;
    var m_entry = null;

//public properties

//additional initialization
    Init();
}