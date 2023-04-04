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

function Spell_t(id, entry, lvl = undefined, daily = undefined, dc = undefined){
//private methods
    var Set_Default_Values = function(lvl, daily, dc){
        if (lvl != undefined){
            self.lvl = lvl;
        }else{
            let temp_lvl = parseInt(self.entry.lvl);
            if (temp_lvl == NaN){
                self.lvl = parseInt(self.entry[0]);
            } //else NOTHING TO DO
            self.lvl = temp_lvl;
        }
        
        if (daily != undefined){
            self.daily = daily;
        }else{
            self.daily = 1;
        }
        
        if (dc != undefined){
            self.dc = dc;
        }else{
            self.dc = 10 + self.lvl + chardata.stats.abiscores.modifiers.Get_Sum(ABISCORES.CHA);
        }
    }

//public methods
    this.Set_DC = function(new_value){
        this.dc = new_value
    }

    this.Show_Descr = function(){
        Popup_Descr.Call(self.entry.name, Get_Spell_Descr(self.entry));
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
    this.lvl;
    this.daily;
    this.dc;

//additional initialization
    Set_Default_Values(lvl, daily, dc);
}

function Spell_Collection_t(default_size = undefined){
//private methods

//public methods
    this.Add = function(id, entry, lvl = undefined, daily = undefined, dc = undefined){
        m_arr.push(new Spell_t(id, entry, lvl, daily, dc));
    }

    this.Replace = function(row, id, entry, lvl = undefined, daily = undefined, dc = undefined){
        if (row >= m_arr.length){
            console.error("Attempting to replace spell out of bounds");
            return;
        }
        //else NOTHING TO DO

        m_arr[row] = new Spell_t(id, entry, lvl, daily, dc);
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
    var m_default_size = default_size;

//public properties

//additional initialization
    if (m_default_size != undefined){
        m_arr = new Array(m_default_size).fill(null);
    }else{
        m_arr = new Array(0);
    }
}
