function Get_Spell_Entry_By_Name(in_database, name){
    for (let i = 0; i < in_database.length; i++){
        if (in_database[i].name == name){
            return in_database[i];
        }
    }
    
    return null;
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

//TODO: remove null checks
//TODO: assign id here, don't take as argument from outside
function Spell_Collection_t(
    id,
    collection_name = "???",
    gui_block = null,
    default_size = undefined,
    default_active = true
){
//constants
    const GUI_BLOCK = gui_block;
    
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
        
        if (GUI_BLOCK != null){
            GUI_BLOCK.Reset(self, collection_name, null);
        }
    }

//public methods
    this.Add = function(id, entry, is_active = undefined, lvl = null, daily = null, dc = null){
        if (is_active != undefined){
            m_arr.push(new Spell_t(id, entry, is_active, lvl, daily, dc));
        }else{
            m_arr.push(new Spell_t(id, entry, default_active, lvl, daily, dc));
        }
        if (GUI_BLOCK != null){
            GUI_BLOCK.Add_Row(id, entry.name, lvl, daily, dc);
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

        if (GUI_BLOCK != null){
            GUI_BLOCK.Set(row, entry.name);
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
            if (GUI_BLOCK != null){
                GUI_BLOCK.Remove(row, entry.name);
            }
        }else{
            let id = m_arr[row].id;
            m_arr.splice(row, 1);
            if (GUI_BLOCK != null){
                GUI_BLOCK.Remove_Additional_Row(id);
            }
        }
        
        Update();
    }
    
    this.Rename_Collection = function(new_name){
        m_collection_name = new_name;
        if (GUI_BLOCK != null){
            GUI_BLOCK.Set_Name(new_name);
        }
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
        if (GUI_BLOCK != null){
            GUI_BLOCK.Set_Daily(row, value);
        }
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
        if (GUI_BLOCK != null){
            GUI_BLOCK.Set_DC(row, value);
        }
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
    
    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        for (let i = 0; i < obj.length; i++){
            let cur_entry = null;
            if (obj[i].name != null){
                cur_entry = Get_Spell_Entry_By_Name(SPELLS_DATABASE, obj[i].name);
            }
            if ((m_default_size != undefined) && (i < m_default_size)){
                self.Replace(
                    i,
                    "load_id_" + i,
                    cur_entry,
                    is_active = undefined,
                    obj[i].lvl,
                    obj[i].daily,
                    obj[i].dc
                );
            }else if (cur_entry != null){
                self.Add(
                    "load_id_" + i,
                    cur_entry,
                    true,
                    obj[i].lvl,
                    obj[i].daily,
                    obj[i].dc
                );
            }//else TODO: warn
        }
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

function Spell_Book_t(
    spells_known,
    spells_daily,
    abiscore,
    abiscore_daily,
    collection_prefix,
    spellbook_lvl_string_prefix,
    gui_block
){
//constants
const SPELLS_KNOWN = spells_known;
const SPELLS_DAILY = spells_daily;
const ABISCORE = abiscore;
const ABISCORE_DAILY = abiscore_daily;
const COLLECTION_PREFIX = collection_prefix;
const SPELLBOOK_LVL_STRING_PREFIX = spellbook_lvl_string_prefix;
const GUI_BLOCK = gui_block;

//private methods
    var Init = function(){
        //initiating spell lists
        for (let i = 0; i < m_arr.length; i++){
            m_arr[i] = new Spell_Collection_t(
            COLLECTION_PREFIX + "_" + i,
            Get_Spell_Level_String(i),
            null,//TODO: replace later
            SPELLS_KNOWN[i].length,
            false);
        }
        
        GUI_BLOCK.Reset(self, SPELLS_KNOWN);
    }
    
    var Get_Spell_Level_String = function(spell_lvl, daily = null, dc = null){
        let str = SPELLBOOK_LVL_STRING_PREFIX + " " + spell_lvl + " круга";
        if ((daily != null) && (dc != null)){
            str += " (В день: " + daily + " , СЛ: " + dc + ")";
        }
        return str;
    }
    
    var Update_Spell_Active_State = function(){
        for (let spell_lvl = 0; spell_lvl < SPELLS_KNOWN.length; spell_lvl++){
            for (let i = 0; i < SPELLS_KNOWN[i].length; i++){
                m_arr[spell_lvl].Set_Active_State(i, (m_class_lvl >= SPELLS_KNOWN[spell_lvl][i]));
            }
        }
    }
    
    var Update_Daily_And_DC = function(){
        let daily_arr = new Array(m_arr.length).fill(0);
        let base_dc = 10;
        if (m_class_lvl > 0){
            let abiscore_mod = (chardata.stats.abiscores.modifiers.Get_Sum(ABISCORE));
            daily_arr[0] = SPELLS_DAILY[0];
            for (let i = 1; i < m_arr.length; i++){
                if (abiscore_mod < ABISCORE_DAILY.length){
                    daily_arr[i] = SPELLS_DAILY[i][m_class_lvl - 1] + ABISCORE_DAILY[i][abiscore_mod];
                }else{
                    daily_arr[i] = SPELLS_DAILY[i][m_class_lvl - 1] + ABISCORE_DAILY[i][ABISCORE_DAILY.length - 1];
                }
            }
            base_dc += abiscore_mod;
        }//else NOTHING TO DO
        
        for (let i = 0; i < m_arr.length; i++){
            m_arr[i].Rename_Collection(Get_Spell_Level_String(i, daily_arr[i], base_dc + i));
        }
        
        GUI_BLOCK.Set_Daily_And_DC(daily_arr, base_dc);
    }

//public methods
    this.Set = function(spell_lvl, row, entry){
        m_arr[spell_lvl].Replace(
            row,
            (COLLECTION_PREFIX + "_" + spell_lvl + "_" + row),
            entry,
            (m_class_lvl >= SPELLS_KNOWN[spell_lvl][row])
        );
        
        GUI_BLOCK.Set(spell_lvl, row, entry.name);
    }

    this.Remove = function(spell_lvl, row){
        m_arr[spell_lvl].Remove(row);
        GUI_BLOCK.Remove(spell_lvl, row);
    }

    this.Show_Details = function(spell_lvl, row){
        m_arr[spell_lvl].Show_Detail_Popup(row);
    }
    
    this.Update_Lvl = function(lvl){
        if (m_class_lvl == lvl){
            return;
        }
        
        if (m_class_lvl == 0){
            //abiscore -> daily
            chardata.stats.abiscores.modifiers.AddRecalcFunc(
                ABISCORE,
                new Recalc_Function_t (COLLECTION_PREFIX, self.Update_Abiscore));
        }else if (lvl == 0){
            chardata.stats.abiscores.modifiers.RemoveRecalcFunc(
                ABISCORE,
                COLLECTION_PREFIX);
        }//else NOTHING TO DO
            
        m_class_lvl = lvl;
        Update_Daily_And_DC();
        Update_Spell_Active_State();
    }
    
    this.Update_Abiscore = function(){
        Update_Daily_And_DC();
    }
    
    this.Get_SaveData_Obj = function(){
        var ret = new Array(m_arr.length);
        for (let i = 0; i < m_arr.length; i++){
            let spells = m_arr[i].Get_SaveData_Obj();
            
            ret[i] = new Array(0);
            spells.forEach(cur_spell => {
                if (cur_spell == null){
                    ret[i].push(null);
                }else{
                    ret[i].push(cur_spell.name);
                }
            });
        }
        return ret;
    }
    
    this.Get_SaveData_Obj = function(){
        var ret = new Array(m_arr.length);
        for (let i = 0; i < m_arr.length; i++){
            let spells = m_arr[i].Get_SaveData_Obj();
            
            ret[i] = new Array(0);
            spells.forEach(cur_spell => {
                if (cur_spell == null){
                    ret[i].push(null);
                }else{
                    ret[i].push(cur_spell.name);
                }
            });
        }
        return ret;
    }
    
    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        for (let spell_lvl = 0; spell_lvl < obj.length; spell_lvl++){
            for (let row = 0; row < obj[spell_lvl].length; row++){
                let spell_name = obj[spell_lvl][row];
                if (spell_name == null){
                    continue;
                }
                
                let entry = Get_Spell_Entry_By_Name(SPELLS_DATABASE, spell_name);
                if (entry == null){
                    console.error("Failed to find spell: " + spell_name);
                    continue;
                }
                
                self.Set(spell_lvl, row, entry);
            }
        }
    }

//private properties
    var self = this;
    var m_class_lvl = 0;
    var m_arr = new Array(SPELLS_KNOWN.length);

//public properties

//additional initialization
    Init();
}
