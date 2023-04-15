function Split_Ability_Name_Suffix(name){
    const regex = / \(.+\)/;
    let clear_name = name;
    let suffix = regex.exec(name);
    
    if (suffix != null){
        suffix = suffix[0];
        clear_name = name.replace(suffix, "");
        suffix = suffix.replace(" (", "");
        suffix = suffix.replace(")", "");
    }
    
    return [clear_name, suffix];
}

function Get_Ability_Entry_By_Name(in_database, name){
    //const regex = / \(.+\)/;
    //let name_to_search = name.replace(regex, "");
     
    for (let i = 0; i < in_database.length; i++){
        //if (in_database[i].name == name_to_search){
        //    return in_database[i];
        //}
        if (in_database[i].name == name){
            return in_database[i];
        }
    }
    
    return null;
}

function Ability_Database_GetList(in_database, in_type = undefined, in_subtype = undefined, min_lvl = undefined, max_lvl = undefined, sort_lvl = false){
    var ret = new Array(0);
    if ((in_type == undefined) && (in_subtype == undefined) && (in_category == undefined)){
        console.error("Extracting from database with no criteria set");
        return in_database;
    }

    for (let i = 0; i < in_database.length; i++){
        let entry = in_database[i]; //VAR?
        if ((in_type != undefined) && (in_type != entry.type)){
            continue;
        }

        if ((in_subtype != undefined) && (in_subtype.length > 0)){
            if (entry.subtype == null){
                continue;
            }

            let entry_subtypes = entry.subtype.split(', ');
            let valid = true;
            for (let j = 0; (j < in_subtype.length) && (valid); j++){
                valid = (entry_subtypes.includes(in_subtype[j]));
            }

            if (!valid){
                continue;
            }
        }

        if (min_lvl != undefined){
            if ((entry.lvl == null) || (entry.lvl < min_lvl)){
                continue
            }
        }

        if (max_lvl != undefined){
            if ((entry.lvl == null) || (entry.lvl > max_lvl)){
                continue
            }
        }

        ret.push(entry);
    }

    if (sort_lvl){
        ret.sort((a, b) => {
            if (a.lvl == null){
                if (b.lvl == null){
                    return 0;
                }

                return -1;
            }

            if (b.lvl == null){
                return 1;
            }

            return (a.lvl - b.lvl);
        });
    }

    return ret;
}

function Ability_t(id, entry, name_suffix = null, is_active){
//private methods

//public methods
    this.Show_Descr = function(){
        Popup_Descr.Call(self.entry.name, self.entry.descr);
    }
    
    this.Set_Active_State = function(state){
        //TODO
        this.is_active = state;
    }

    this.Change_Name_Suffix = function(name_suffix){
        this.name_suffix = name_suffix;
    }
//private properties
    var self = this;

//public properties
    this.id = id;
    this.entry = entry;
    this.name_suffix = name_suffix;
    this.is_active = is_active;

//additional initialization
}

function Ability_Collection_t(
    id,
    collection_name = "???",
    default_size = undefined,
    default_active = true){
//private methods
//TODO on change only
//TODO add do_update option to functions
    var Update = function(){
        if (m_update_func != null){
            m_update_func();
        }
    }

    var Init = function(){
        if (m_default_size != undefined){
            m_arr = new Array(m_default_size).fill(null);
        }else{
            m_arr = new Array(0);
        }
        m_update_func = combined_collections.abilities.Add(m_id, self);
    }

//public methods
    this.Add = function(id, entry, name_suffix = null, is_active = undefined){
        if (is_active != undefined){
            m_arr.push(new Ability_t(id, entry, name_suffix, is_active));
        }else{
            m_arr.push(new Ability_t(id, entry, name_suffix, default_active));
        }
        Update();
    }

    this.Replace = function(row, id, entry, name_suffix = null, is_active = undefined){
        if (row >= m_arr.length){
            console.error("Attempting to replace ability out of bounds");
            return;
        }
        //else NOTHING TO DO

        if (is_active != undefined){
            m_arr[row] = new Ability_t(id, entry, name_suffix, is_active);
        }else{
            m_arr[row] = new Ability_t(id, entry, name_suffix, default_active);
        }
        Update();
    }

    this.Remove = function(row){
        if (row >= m_arr.length){
            console.error("Attempting to remove ability out of bounds");
            return;
        }
        //else NOTHING TO DO

        if ((m_default_size != undefined) && (row < m_default_size)){
            m_arr[row] = null;
        }else{
            m_arr.splice(row, 1);
        }
        Update();
    }
    
    this.Clear = function(){
        for (let row = (m_arr.length - 1); row >= 0; row--){
            if ((m_default_size != undefined) && (row < m_default_size)){
                m_arr[row] = null;
            }else{
                m_arr.splice(row, 1);
            }
        }
        Update();
    }
    
    this.Rename_Collection = function(new_name){
        m_collection_name = new_name;
        Update();
    }
    
    this.Get_Ability_List = function(){
        let abi_list = new Array(0);
        
        m_arr.forEach(ability => {
            if ((ability != null) && (ability.is_active)){
                let str = ability.entry.name;
                if (ability.name_suffix != null){
                    str += " (" + ability.name_suffix + ")"
                }
                abi_list.push({
                    name: str,
                    descr_func: ability.Show_Descr
                });
            }
        });
        
        if (abi_list.length == 0){
            return null;
        }
        
        abi_list.unshift({
                    name: m_collection_name,
                    descr_func: null
                });
        return abi_list;
    }
    
    this.Get_Lvl = function(row){
        if (row >= m_arr.length){
            console.error("Attempting to get level of ability out of bounds");
            return;
        }
        //else NOTHING TO DO
        
        return m_arr[row].entry.lvl;
    }
    
    this.Set_Active_State = function(row, state){
        if (row >= m_arr.length){
            console.error("Attempting to activate ability out of bounds");
            return;
        }
        //else NOTHING TO DO
        
        if (m_arr[row] == null){
            return;
        }
        
        m_arr[row].Set_Active_State(state);
        Update();
    }

    this.Show_Detail_Popup = function(row){
        if (row >= m_arr.length){
            console.error("Attempting to show description of ability out of bounds");
            return;
        }
        //else NOTHING TO DO

        if (m_arr[row] != null){
            m_arr[row].Show_Descr();
        }
    }

    this.Get_SaveData_Obj = function(){
        var ret = new Array(0);
        m_arr.forEach(ability => {
            if (ability == null){
                ret.push(null);
            }else{
                ret.push(ability.entry.name);
            }
        });
        return ret;
    }

//private properties
    var self = this;
    var m_arr;
    var m_id = id;
    var m_update_func = null;
    var m_default_size = default_size;
    var m_default_active = default_active;
    var m_collection_name = collection_name;

//public properties

//additional initialization
    Init();
}

function Leveled_Ability_List_t (id, list_name, lvl_list, id_prefix){
//constants

//private methods

//public methods
    this.Set = function(row, entry, name_suffix = null){
        //TODO: add safety check
        let is_active = (cur_lvl >= m_lvl_list[row]);
        m_abilities.Replace(row, m_id_prefix + row, entry, name_suffix, is_active);
    }
    
    this.Remove = function(row){
        //TODO: add safety check
        m_abilities.Remove(row, m_id_prefix + row);
    }
    
    this.Clear = function(){
        m_abilities.Clear();
    }
    
    this.Show_Details = function(row){
        //TODO: add safety check
        m_abilities.Show_Detail_Popup(row);
    }
    
    this.Rename_List = function(new_name){
        m_abilities.Rename_Collection(new_name);
    }
    
    this.Update_Lvl = function(lvl){
        for (let i = 0; i < m_lvl_list.length; i++){
            if (m_abilities == null){
                continue;
            }
            
            m_abilities.Set_Active_State(i, m_lvl_list[i] <= lvl);
        }
        cur_lvl = lvl;
    }
    
    this.Get_Lvl_List = function(){
        return m_lvl_list;
    }
    
    this.Get_SaveData_Obj = function(){
        return m_abilities.Get_SaveData_Obj();
    }

//private properties
    var self = this;
    var cur_lvl = 0;
    var m_id_prefix = id_prefix;
    var m_lvl_list = lvl_list;
    //TODO: remove id, use id_prefix?
    var m_abilities = new Ability_Collection_t(
        id,
        list_name,
        m_lvl_list.length,
        false
    );

//public properties

//additional initialization
}

function Ability_Racial_Collection_t(){
//constants
    const NAME_PREFIX = "Расовые способности";
    
//private methods

//public methods
    this.Set_Abilities = function(race_name, abi_arr){
        m_collection.Clear();
        layers.abilities.race.Clear_Abilities();
        
        if (race_name == null){
            m_collection.Rename_Collection(NAME_PREFIX);
            return;
        }
        
        m_collection.Rename_Collection(
            NAME_PREFIX + " (" + race_name + ")");
        for (let row = 0; row < abi_arr.length; row++){
            let [abi_name, abi_suffix] = Split_Ability_Name_Suffix(abi_arr[row]);
            let entry = Get_Ability_Entry_By_Name(ABILITIES_DATABASE, abi_name);
            m_collection.Add("abi_racial" + row, entry, abi_suffix);
            layers.abilities.race.Add_Ability(abi_arr[row]);
        }
    }
    
    this.Show_Detail_Popup = function(row){
        m_collection.Show_Detail_Popup(row);
    }

//private properties
    var self = this;
    var m_collection = new Ability_Collection_t("abi_race", NAME_PREFIX);

//public properties

//additional initialization
}

function Ability_Theme_Collection_t(){
//constants
    const NAME_PREFIX = "Cпособности темы";
    const THEME_ABILITIES_LVLS = [1, 6, 12, 18];
    
//private methods

//public methods
    this.Set_Abilities = function(theme_name, abi_arr){
        m_collection.Clear();
        layers.abilities.theme.Clear_Abilities();
        
        if (theme_name == null){
            m_collection.Rename_List(NAME_PREFIX);
            return;
        }
        
        m_collection.Rename_List(
            NAME_PREFIX + " (" + theme_name + ")");
        for (let row = 0; row < abi_arr.length; row++){
            let [abi_name, abi_suffix] = Split_Ability_Name_Suffix(abi_arr[row]);
            let entry = Get_Ability_Entry_By_Name(ABILITIES_DATABASE, abi_name);
            m_collection.Set(row, entry, abi_suffix);
            layers.abilities.theme.Add_Ability(row, THEME_ABILITIES_LVLS[row], abi_arr[row]);
        }
    }
    
    this.Show_Detail_Popup = function(row){
        m_collection.Show_Details(row);
    }
    
    this.Update_Lvl = function(){
        m_collection.Update_Lvl(chardata.lvl.sum);
    }

//private properties
    var self = this;
    var m_collection = new Leveled_Ability_List_t("abi_theme", NAME_PREFIX, THEME_ABILITIES_LVLS, "theme_");

//public properties

//additional initialization
}

function Ability_Custom_t(id, name, descr){
//public methods
    this.Get_SaveData_Obj = function(){
        var ret = {
            name: self.name,
            descr: self.descr
        }
        return ret;
    }

//private properties
    var self = this;

//public properties
    this.id = id;
    this.name = name;
    this.descr = descr;
}

function Ability_Custom_Collection_t(){
//public methods
    this.Add = function(id, name = "", descr = ""){
        m_arr.push(new Ability_Custom_t(id, name, descr));
    }

    this.Remove = function(num){
        m_arr.splice(num, 1);
    }

    this.Change_Name = function(num, value){
        m_arr[num].name = value;
    }

    this.Change_Descr = function(num, value){
        m_arr[num].descr = value;
    }

    this.Get_SaveData_Obj = function(){
        var ret = new Array(0);
        m_arr.forEach(item => {
            ret.push(item.Get_SaveData_Obj());
        });
        return ret;
    }

//private properties
    var self = this;
    var m_arr = new Array(0);
}

function Chardata_Abilities_t(){
//private methods

//public methods
this.Get_SaveData_Obj = function(){
        var ret = {
            feats: self.feats.Get_SaveData_Obj(),
            other: self.other.Get_SaveData_Obj(),
            spell_like: self.spell_like.Get_SaveData_Obj(),
            custom: self.custom.Get_SaveData_Obj()
        };
        return ret;
    }

//private properties
    var self = this;

//public properties
    this.race = new Ability_Racial_Collection_t();
    this.theme = new Ability_Theme_Collection_t();
    this.feats = new Ability_Collection_t("abi_feats", "Черты", 10);
    this.other = new Ability_Collection_t("abi_other", "Прочие способности");
    this.spell_like = new Spell_Collection_t();
    this.custom = new Ability_Custom_Collection_t();
}