function Name_t(gui_block){
//constants
    const GUI_BLOCK = gui_block;
    
//private methods
    var Init = function(){
        GUI_BLOCK.Reset(self);
        GUI_BLOCK.Set_Value(self.value);
    }

//public methods
    this.Set = function(new_name){
        self.value = new_name;
        GUI_BLOCK.Set_Value(self.value);
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

function Race_t(
    gui_block_race,
    gui_block_size,
    gui_block_type
){
//constants
    const GUI_BLOCK_RACE = gui_block_race;
    const GUI_BLOCK_SIZE = gui_block_size;
    const GUI_BLOCK_TYPE = gui_block_type;
    
//private methods
    var Init = function(){
        GUI_BLOCK_RACE.Reset(self);
        GUI_BLOCK_SIZE.Reset(self);
        GUI_BLOCK_TYPE.Reset(self);
        GUI_BLOCK_RACE.Set_Value("---");
        GUI_BLOCK_SIZE.Set_Value("---");
        GUI_BLOCK_TYPE.Set_Value("---");
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
    
    var Set_Abilities = function(abilities){
        for (let i = 0; i < abilities.length; i++){
            let [abi_name, abi_suffix] = Split_Ability_Name_Suffix(abilities[i]);
            let abi_entry = Get_Ability_Entry_By_Name(ABILITIES_DATABASE, abi_name);
            chardata.abilities.race.Add(abi_entry, abi_suffix);
        }
    }

//public methods
    this.Set = function(race_name){
        if ((race_name == "---") || (race_name == null)){
            m_entry = null;
        }else{
            m_entry = Get_Entry_By_Name(race_name);
        }
        
        chardata.abilities.race.Clear();
        if (m_entry != null){
            GUI_BLOCK_RACE.Set_Value(m_entry.name);
            GUI_BLOCK_SIZE.Set_Value(m_entry.size);
            GUI_BLOCK_TYPE.Set_Value(m_entry.type);
            
            chardata.stats.abiscores.values.SetRaceValues(m_entry.abiscores, m_entry.plus2);
            chardata.stats.speeds.land.Set_Base_Value(m_entry.speed, m_entry.name);
            chardata.stats.hp.Set_Race_Mod(m_entry.name, m_entry.hp);
            chardata.abilities.race.Rename_List("Способности расы (" + m_entry.name + ")");
            Set_Abilities(m_entry.abilities);
        }else{
            GUI_BLOCK_RACE.Set_Value("---");
            GUI_BLOCK_SIZE.Set_Value("---");
            GUI_BLOCK_TYPE.Set_Value("---");
            
            chardata.stats.abiscores.values.SetRaceValues([0, 0, 0, 0, 0, 0], false);
            chardata.stats.speeds.land.Set_Base_Value(0, null);
            chardata.stats.hp.Set_Race_Mod(null, 0);
            chardata.abilities.race.Rename_List("Способности расы");
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

function Theme_t(gui_block){
//constants
    const GUI_BLOCK = gui_block;
    
//private methods
    var Init = function(){
        GUI_BLOCK.Reset(self, "---");
        GUI_BLOCK.Set_Value("---");
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
    
    var Set_Abilities = function(abilities){
        for (let i = 0; i < abilities.length; i++){
            let [abi_name, abi_suffix] = Split_Ability_Name_Suffix(abilities[i]);
            let abi_entry = Get_Ability_Entry_By_Name(ABILITIES_DATABASE, abi_name);
            chardata.abilities.theme.Set(i, abi_entry, abi_suffix);
        }
    }

//public methods
    //TODO: change ability collection name
    this.Set = function(theme_name){
        if ((theme_name == "---") || (theme_name == null)){
            m_entry = null;
        }else{
            m_entry = Get_Entry_By_Name(theme_name);
        }
        
        chardata.abilities.theme.Clear();
        if (m_entry != null){
            GUI_BLOCK.Set_Value(m_entry.name);
            chardata.abilities.theme.Rename_List("Способности темы (" + m_entry.name + ")");
            Set_Abilities(m_entry.abilities);
            chardata.stats.abiscores.values.SetThemeValue(m_entry.abiscore);
        }else{
            GUI_BLOCK.Set_Value("---");
            chardata.abilities.theme.Rename_List("Способности темы");
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