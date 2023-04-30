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

//TODO: combine two classes below?
function Ability_Collection_t(
    id,
    collection_name = "???",
    default_size = undefined,
    default_active = true
){
//private methods
//TODO on change only
//TODO add do_update option to functions
    var Update = function(){
        if (m_update_func != null){
            m_update_func();
        }
    }

    var Init = function(id){
        if (m_default_size != undefined){
            m_arr = new Array(m_default_size).fill(null);
        }else{
            m_arr = new Array(0);
        }
        m_update_func = combined_collections.abilities.Add(id, self);
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
    
    this.Set_Ability_Name = function(row, value){
        m_arr[row].entry.name = value;
        Update();
    }
    
    this.Set_Ability_Descr = function(row, value){
        m_arr[row].entry.descr = value;
        Update();
    }
    
    this.Get_Ability_List = function(){
        let abi_list = new Array(0);
        
        m_arr.forEach(ability => {
            if ((ability != null) && (ability.is_active) && (ability.entry.name != "")){
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
    
    this.Get_SaveData_Obj_Custom = function(){
        var ret = new Array(0);
        m_arr.forEach(ability => {
            if (ability == null){
                ret.push(null);
            }else{
                ret.push({
                    name: ability.entry.name,
                    descr: ability.entry.descr
                });
            }
        });
        return ret;
    }

//private properties
    var self = this;
    var m_arr;
    var m_update_func = null;
    var m_default_size = default_size;
    var m_default_active = default_active;
    var m_collection_name = collection_name;

//public properties

//additional initialization
    Init(id);
}

function Leveled_Ability_List_t (
    id,
    list_name,
    lvl_list,
    id_prefix,
    gui_block,
    is_const_default = false){
//constants
    const GUI_BLOCK = gui_block;

//private methods
    var Init = function(is_const_default){
        if (GUI_BLOCK != undefined){
            GUI_BLOCK.Reset(self, m_lvl_list, is_const_default);
        }
    }

//public methods
    this.Set = function(row, entry, name_suffix = null){
        //TODO: add safety check
        let is_active = (m_lvl_list[row] == null) || (m_lvl_list[row] <= m_cur_lvl);
        m_abilities.Replace(row, m_id_prefix + row, entry, name_suffix, is_active);
        
        if (GUI_BLOCK != undefined){
            GUI_BLOCK.Set(row, entry.name);
        }
    }
    
    this.Remove = function(row){
        //TODO: add safety check
        m_abilities.Remove(row, m_id_prefix + row);
        if (GUI_BLOCK != undefined){
            GUI_BLOCK.Remove(row);
        }
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
            
            let is_Active = (m_lvl_list[i] == null) || (m_lvl_list[i] <= lvl);
            m_abilities.Set_Active_State(i, is_Active);
        }
        m_cur_lvl = lvl;
    }
    
    this.Get_SaveData_Obj = function(){
        return m_abilities.Get_SaveData_Obj();
    }
    
    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        for (let i = 0; i < m_lvl_list.length; i++){
            if (obj[i] != null){
                //TODO: add db, pass it to layers?
                self.Set(i, Get_Ability_Entry_By_Name(ABILITIES_DATABASE, obj[i]));
            }
        }
    }

//private properties
    var self = this;
    var m_cur_lvl = 0;
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
    Init(is_const_default);
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
    var m_collection = new Leveled_Ability_List_t("abi_theme", NAME_PREFIX, THEME_ABILITIES_LVLS, "theme_");//TODO: add layers block here

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
        var pseudo_entry = {
            name: name,
            descr: descr,
            lvl: null,
            type: "Пользовательская",
            subtype: null,
            category: null,
            requirement: null,
            source: null
        }
        m_collection.Add(id, pseudo_entry);
    }

    this.Remove = function(num){
        m_collection.Remove(num);
    }

    this.Change_Name = function(num, value){
        m_collection.Set_Ability_Name(num, value);
    }

    this.Change_Descr = function(num, value){
        m_collection.Set_Ability_Descr(num, value);
    }

    this.Get_SaveData_Obj = function(){
        return m_collection.Get_SaveData_Obj_Custom();
    }

//private properties
    var self = this;
    var m_collection = new Ability_Collection_t(
        "abi_custom",
        collection_name = "Пользовательские способности");
}

function Chardata_Abilities_t(){
//private methods

//public methods
    this.Update_Lvl = function(){
        let lvl = chardata.lvl.sum;
        self.feats.Update_Lvl(lvl);
    }

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
    /*
    this.feats = new Ability_Collection_t("abi_feats", "Черты", 10);
    */
    this.feats = new Leveled_Ability_List_t(
        "abi_feats",
        "Черты",
        [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
        "abi_feat_",
        layers.abilities.feats
    );
    this.other = new Ability_Collection_t("abi_other", "Прочие способности");
    this.spell_like = new Spell_Collection_t("spells_spelllike", "Псевдозаклинания");
    this.custom = new Ability_Custom_Collection_t();
}