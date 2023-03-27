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
    if ((in_type == undefined) && (in_subtype == undefined) && (in_category == undefined)){
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
/*
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
    this.custom = new Ability_Custom_Collection_t();
}
*/