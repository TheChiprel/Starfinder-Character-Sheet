function Get_Ability_Entry_By_Name(in_database, name){
    for (let i = 0; i < in_database.length; i++){
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

function Ability_t(id, entry, is_active){
//private methods

//public methods
    this.Show_Descr = function(){
        Popup_Descr.Call(self.entry.name, self.entry.descr);
    }
    
    this.Set_Active_State = function(state){
        //TODO
        this.is_active = state;
    }

//private properties
    var self = this;

//public properties
    this.id = id;
    this.entry = entry;
    this.is_active = is_active;

//additional initialization
}

function Ability_Collection_t(default_size = undefined, default_active = true){
//private methods

//public methods
    this.Add = function(id, entry, is_active = undefined){
        if (is_active != undefined){
            m_arr.push(new Ability_t(id, entry, is_active));
        }else{
            m_arr.push(new Ability_t(id, entry, default_active));
        }
    }

    this.Replace = function(row, id, entry, is_active = undefined){
        if (row >= m_arr.length){
            console.error("Attempting to replace ability out of bounds");
            return;
        }
        //else NOTHING TO DO

        if (is_active != undefined){
            m_arr[row] = new Ability_t(id, entry, is_active);
        }else{
            m_arr[row] = new Ability_t(id, entry, default_active);
        }
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
    var m_default_size = default_size;
    var m_default_active = default_active;

//public properties

//additional initialization
    if (m_default_size != undefined){
        m_arr = new Array(m_default_size).fill(null);
    }else{
        m_arr = new Array(0);
    }
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
            custom: self.custom.Get_SaveData_Obj()
        };
        return ret;
    }

//private properties
    var self = this;

//public properties
    this.feats = new Ability_Collection_t(10);
    this.other = new Ability_Collection_t();
    this.spelllike = new Spell_Collection_t();
    this.custom = new Ability_Custom_Collection_t();
}