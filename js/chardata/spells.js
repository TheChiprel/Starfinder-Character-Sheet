function Get_Spell_Entry_By_Name(in_database, name){
    for (let i = 0; i < in_database.length; i++){
        if (in_database[i].name == name){
            return in_database[i];
        }
    }
    
    return null;
}

function Spell_Database_GetList(
    in_database,
    in_class = undefined,
    min_lvl = undefined,
    max_lvl = undefined
){
    var ret = new Array(0);
    if ((in_class == undefined) && (min_lvl == undefined) && (max_lvl == undefined)){
        console.error("Extracting from database with no criteria set");
        return in_database;
    }

    for (let i = 0; i < in_database.length; i++){
        var entry = in_database[i];

        if (in_class != undefined){
            if (entry.classes == null){
                continue;
            }

            let entry_classes = entry.classes.split(', ');
            let valid = entry_classes.includes(in_class);

            if (entry_classes.includes(in_class)){
                continue;
            }
        }

        if (min_lvl != undefined){
            if (entry.lvl == null){
                continue;
            }
            
            let entry_max_lvl = parseInt(entry.lvl[entry.lvl.length - 1]);
            if ((entry.lvl == null) || (entry_max_lvl < min_lvl)){
                continue;
            }
        }

        if (max_lvl != undefined){
            if (entry.lvl == null){
                continue;
            }
            
            let entry_min_lvl = parseInt(entry.lvl[0]);
            if ((entry.lvl == null) || (entry_min_lvl > min_lvl)){
                continue;
            }
        }

        ret.push(entry);
    }

    return ret;
}

function Get_Spell_Descr(entry){
    var ret = "";
    
    //Круг
    ret += "Заклинание, круг " + entry.lvl;

    //Школа
    if (entry.school != null){
    ret +="\nШкола: " + entry.school;
    }


    //Время сотворения
    if (entry.cast_time != null){
    ret += "\nВремя сотворения: " + entry.cast_time;
    }

    //Дистанция
    if (entry.dist != null){
    if (entry.dist == "близкая"){
      ret += "\nДистанция: Близкая (25 футов + 5 футов за каждые 2 УЗ)";
    }else if (entry.dist == "средняя"){
      ret += "\nДистанция: Средняя (100 футов + 10 футов за каждые 1 УЗ)";
    }else if (entry.dist == "дальняя"){
      ret += "\nДистанция: Дальняя (400 футов + 40 футов за каждые 1 УЗ)";
    }else{
      ret += "\nДистанция: " + entry.dist;
    }
    }

    //Область
    if (entry.area != null){
    ret += "\nОбласть: " + entry.area;
    }    

    //Эффект
    if (entry.effect != null){
    ret += "\nЭффект: " + entry.effect;
    }

    //Цель
    if (entry.target != null){
    ret += "\nЦель: " + entry.target;
    }

    //Длительность
    if (entry.duration != null){
    ret += "\nДлит.: " + entry.duration;
    }

    //Испытание
    if (entry.save != null){
    ret += "\nИспытание: " + entry.save;
    }

    //Устойчивость к магии
    if (entry.magic_resistance = null){
    ret += "\nУстойч. к магии: " + entry.magic_resistance;
    }

    //Описание
    ret +="\n" + entry.descr;

    return ret;
}

function Spell_t(id, entry, is_active, lvl = null, daily = null, dc = null){
//private methods

//public methods
    this.Set_DC = function(new_value){
        this.dc = new_value
    }

    this.Show_Descr = function(){
        Popup_Descr.Call(self.entry.name, Get_Spell_Descr(self.entry));
    }
    
    this.Set_Active_State = function(state){
        //TODO
        this.is_active = state;
    }
    
    this.Get_SaveData_Obj = function(){
        var ret = {
            name: self.entry.name,
            lvl: self.lvl,
            daily: self.daily,
            dc: self.dc
        }
        return ret;
    }

//private properties
    var self = this;

//public properties
    this.id = id;
    this.entry = entry;
    this.lvl = lvl;
    this.daily = daily;
    this.dc = dc;
    this.is_active = is_active;

//additional initialization
}

function Spell_Collection_t(
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
        m_update_func = combined_collections.spells.Add(id, self);
    }

//public methods
    this.Add = function(id, entry, is_active = undefined, lvl = null, daily = null, dc = null){
        if (is_active != undefined){
            m_arr.push(new Spell_t(id, entry, is_active, lvl, daily, dc));
        }else{
            m_arr.push(new Spell_t(id, entry, default_active, lvl, daily, dc));
        }
        Update();
    }

    this.Replace = function(row, id, entry, is_active = undefined, lvl = null, daily = null, dc = null){
        if (row >= m_arr.length){
            console.error("Attempting to replace spell out of bounds");
            return;
        }
        //else NOTHING TO DO
        
        if (is_active != undefined){
            m_arr[row] = new Spell_t(id, entry, is_active, lvl, daily, dc);
        }else{
            m_arr[row] = new Spell_t(id, entry, default_active, lvl, daily, dc);
        }

        
        Update();
    }

    this.Remove = function(row){
        if (row >= m_arr.length){
            console.error("Attempting to remove spell out of bounds");
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
    
    this.Rename_Collection = function(new_name){
        m_collection_name = new_name;
        Update();
    }
    
    this.Get_Spell_List = function(){
        let abi_list = new Array(0);
        
        m_arr.forEach(spell => {
            if ((spell != null) && (spell.is_active) && (spell.entry.name != "")){
                let str = spell.entry.name;
                
                abi_list.push({
                    name: str,
                    descr_func: spell.Show_Descr,
                    dc: spell.dc,
                    daily: spell.daily
                });
            }
        });
        
        if (abi_list.length == 0){
            return null;
        }
        
        abi_list.unshift({
                    name: m_collection_name,
                    descr_func: null,
                    dc: null,
                    daily: null
                });
        return abi_list;
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
    
    this.Get_Lvl = function(row){
        if (row >= m_arr.length){
            console.error("Attempting to get level of spell out of bounds");
            return;
        }
        //else NOTHING TO DO
        
        return m_arr[row].lvl;
    }
    
    this.Set_Lvl = function(row, value){
        if (row >= m_arr.length){
            console.error("Attempting to set level of spell out of bounds");
            return;
        }
        //else NOTHING TO DO
        
        m_arr[row].Set_Lvl(value);
        Update();
    }
    
    this.Get_Daily = function(row){
        if (row >= m_arr.length){
            console.error("Attempting to get daily of spell out of bounds");
            return;
        }
        //else NOTHING TO DO
        
        return m_arr[row].daily;
    }
    
    this.Set_Daily = function(row, value){
        if (row >= m_arr.length){
            console.error("Attempting to set dc of spell out of bounds");
            return;
        }
        //else NOTHING TO DO
        
        m_arr[row].daily = value;
        Update();
    }
    
    this.Get_DC = function(row){
        if (row >= m_arr.length){
            console.error("Attempting to get dc of spell out of bounds");
            return;
        }
        //else NOTHING TO DO
        
        return m_arr[row].dc;
    }
    
    this.Set_DC = function(row, value){
        if (row >= m_arr.length){
            console.error("Attempting to set dc of spell out of bounds");
            return;
        }
        //else NOTHING TO DO
        
        m_arr[row].dc = value;
        Update();
    }

    this.Show_Detail_Popup = function(row){
        if (row >= m_arr.length){
            console.error("Attempting to show description of spell out of bounds");
            return;
        }
        //else NOTHING TO DO

        if (m_arr[row] != null){
            m_arr[row].Show_Descr();
        }
    }

    this.Get_SaveData_Obj = function(){
        var ret = new Array(0);
        m_arr.forEach(spell => {
            if (spell == null){
                ret.push(null);
            }else{
                ret.push(spell.Get_SaveData_Obj());
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
