//TODO: rename methods
//TODO: rework additional as separate table?
function Block_Ability_List_t(
    gui_table,
    database,
    has_add_button = false,
    database_show_lvl = true,
    database_show_req = false
){
//constants
    const GUI_TABLE = gui_table;
    const BLOCK_DATABASE = database;
    const HAS_ADD_BUTTON = has_add_button;
    const DO_DATABASE_SHOW_LVL = database_show_lvl;
    const DO_DATABASE_SHOW_REQ = database_show_req;
    
    const CLMN_DESCR = 1 + (database_show_lvl ? 1 : 0) + (database_show_req ? 1 : 0);
    const CLMN_SOURCE = 2 + (database_show_lvl ? 1 : 0) + (database_show_req ? 1 : 0);
    
//private methods
    var Proc_Show_Detail_Event = function(row){
        if (m_owner != null){
            m_owner.Show_Details(row);
        }
    }
    
    var Proc_Open_Database_Event = function(row){
        let max_lvl = null;
        if (m_lvl_list != null){
            max_lvl = m_lvl_list[row];
        }

        var table_data = new Array(0);
        var filters = new Array(0);
        let headers = ["Название"];
        if (DO_DATABASE_SHOW_LVL){
            headers.push("Ур.");
        }
        if (DO_DATABASE_SHOW_REQ){
            headers.push("Треб.");
        }
        headers.push("Описание");
        headers.push("Ист.");

        var add_func;
        
        if (row == null){
            add_func = Proc_Add_Event;
        }else{
            add_func = Proc_Set_Event.bind(null, row);
        }
        
        for (let i = 0; i < BLOCK_DATABASE.length; i++){
            let cur_ability = BLOCK_DATABASE[i];

            if ((max_lvl != null) && (cur_ability.lvl != null) && cur_ability.lvl > max_lvl){
                continue;
            }
            
            let arr = [cur_ability.name];
            if (DO_DATABASE_SHOW_LVL){
                arr.push(cur_ability.lvl);
            }
            if (DO_DATABASE_SHOW_REQ){
                arr.push(cur_ability.requirement);
            }
            arr.push(cur_ability.descr);
            arr.push(cur_ability.source);
            table_data.push(arr);
        }

        filters.push(new Database_Filter_Input_t(
            POPUP_FILTER_TYPES.FIND,
            0,
            "Название"
        ));
        filters.push(new Database_Filter_Input_t(
            POPUP_FILTER_TYPES.RANGE,
            CLMN_DESCR,
            "Ур."
        ));
        filters.push(new Database_Filter_Input_t(
            POPUP_FILTER_TYPES.SELECT,
            CLMN_SOURCE,
            "Источник"
        ));

        Popup_Database.Open(
            table_data,
            add_func,
            filters,
            headers,
            Show_Info_Database);
    }
    
    var Proc_Set_Event = function(row, entry_num){
        if ((m_owner != null) && (entry_num != null)){
            m_owner.Set(row, BLOCK_DATABASE[entry_num]);
        }
        Popup_Database.Close();
    }
    
    var Proc_Add_Event = function(entry_num){
        if (m_owner == null){
            return;
        }
        
        m_owner.Add(BLOCK_DATABASE[entry_num]);
        
        Popup_Database.Close();
    }
    
    var Proc_Remove_Event = function(row){
        if (m_owner != null){
            m_owner.Remove(row);
        }
    }
    
    var Proc_Remove_Additional = function(row_name){
        if (m_owner != null){
            m_owner.Remove_Additional(row_name);
        }
    }
    
    var Proc_Show_Detail_Additional_Event = function(id){
        if (m_owner == null){
            return;
        }
        
        let start_row = 1;
        if (m_lvl_list != null){
            start_row += m_lvl_list.length;
        }
        for (let i = start_row; i < GUI_TABLE.rows.length; i++){
            if (GUI_TABLE.rows[i].name == id){
                m_owner.Show_Details(i-1);
                return;
            }
        }
    }
    
    var Show_Info_Database = function(entry_num){
        let ability = BLOCK_DATABASE[entry_num];

        Popup_Descr.Call(ability.name, ability.descr);
    }
    
    var Get_Cell_Add_Button = function(){
        let table_row = GUI_TABLE.rows[0];
        return table_row.cells[2];
    }
    
    var Get_Cell_Header = function(){
        let table_row = GUI_TABLE.rows[0];
        return table_row.cells[1];
    }
    
    var Get_Cell_Name = function(row){
        let table_row = GUI_TABLE.rows[row + 1]; // +1 with header
        return table_row.cells[1];
    }
    
    var Get_Add_Remove_Cell = function(row){
        let table_row = GUI_TABLE.rows[row + 1]; // +1 with header
        return table_row.cells[2];
    }
    
//public methods
    this.Reset = function(owner, name, lvl_list = null, is_const_default = false){
        m_owner = owner;
        m_lvl_list = lvl_list;
        if (m_lvl_list == null){
            m_is_const_list = null;
        }else{
            m_is_const_list = new Array(m_lvl_list.length).fill(is_const_default);
        }
        
        self.Clear();
        self.Set_Name(name);
        
        let cell_add = Get_Cell_Add_Button();
        if (HAS_ADD_BUTTON){
            var add_func = Proc_Open_Database_Event.bind(null, null);
            var add_button = HTML_Create_Button("+", add_func);
            cell_add.appendChild(add_button);
        }else{
            cell_add.innerHTML = "";
        }
    }

    this.Set = function(row, abi_name){
        let cell_name = Get_Cell_Name(row);
        
        var remove_func = Proc_Remove_Event.bind(null, row);
        var show_details_func = Proc_Show_Detail_Event.bind(null, row);

        cell_name.innerHTML = abi_name;
        cell_name.onclick = show_details_func;

        let cell_add_remove_button = Get_Add_Remove_Cell(row);
        cell_add_remove_button.innerHTML = "";
        
        if (!m_is_const_list[row]){
            var add_remove_button = HTML_Create_Button("X", remove_func);
            cell_add_remove_button.appendChild(add_remove_button);
        }

        Popup_Database.Close();
    }
    
    this.Clear = function(){
        //m_additional_rows = new Array(0);
        
        while (GUI_TABLE.rows.length > 0){
            GUI_TABLE.deleteRow(0);
        }
        var row = GUI_TABLE.insertRow(GUI_TABLE.rows.length);
        var cell_lvl = row.insertCell(row.cells.length);
        var cell_ability = row.insertCell(row.cells.length);
        var cell_add_remove_button = row.insertCell(row.cells.length);
        
        if (m_lvl_list == null){
            return;
        }

        for (let i = 0; i < m_lvl_list.length; i++){
            var row = GUI_TABLE.insertRow(GUI_TABLE.rows.length);
            
            cell_lvl = row.insertCell(row.cells.length);
            cell_ability = row.insertCell(row.cells.length);
            cell_add_remove_button = row.insertCell(row.cells.length);
            
            if (m_lvl_list[i] != null){
                let cur_lvl = m_lvl_list[i];
                cell_lvl.innerHTML = cur_lvl;
            }
            
            cell_ability.innerHTML = "---";
            
            if (!m_is_const_list[i]){
                var add_func = Proc_Open_Database_Event.bind(null, i);
                var add_remove_button = HTML_Create_Button("+", add_func);
                cell_add_remove_button.appendChild(add_remove_button);
            }
        }
    }
    
    this.Set_Name = function(name){
        let cell_header = Get_Cell_Header();
        cell_header.innerHTML = name;
    }
    
    this.Set_Row_Const_State = function(row, is_const){
        //TODO: add safety checked
        if (m_is_const_list[row] == is_const){
            return;
        }
        
        let cell_add_remove_button = Get_Add_Remove_Cell(row);
        
        if(m_is_const_list[row] == false){
            cell_add_remove_button.innerHTML = "";
        }else{
            let cell_name = Get_Cell_Name(row);

            var add_remove_button
            if (cell_name.innerHTML == "---"){
                add_remove_button = HTML_Create_Button("+", Proc_Open_Database_Event.bind(null, row));
            }else{
                add_remove_button = HTML_Create_Button("X", Proc_Remove_Event.bind(null, row));
            }
            cell_add_remove_button.appendChild(add_remove_button);
        }
        
        m_is_const_list[row] = is_const;
    }
    
    this.Add_Row = function(id, name = null, lvl = null, can_be_removed = true){
        var table_row = GUI_TABLE.insertRow(GUI_TABLE.rows.length);
        table_row.name = id;
            
        var cell_lvl = table_row.insertCell(table_row.cells.length);
        
        if (lvl != null){
            cell_lvl.innerHTML = lvl;
        }
        
        var cell_ability = table_row.insertCell(table_row.cells.length);
        cell_ability.innerHTML = name;
        cell_ability.onclick = Proc_Show_Detail_Additional_Event.bind(null, id);
        
        var cell_add_remove_button = table_row.insertCell(table_row.cells.length);
        if (can_be_removed){
            var remove_func = Proc_Remove_Additional.bind(null, id);
            var add_remove_button = HTML_Create_Button("X", remove_func);
            cell_add_remove_button.appendChild(add_remove_button);
        }
    }

    this.Remove = function(row){
        let cell_name = Get_Cell_Name(row);
        
        var add_func = Proc_Open_Database_Event.bind(null, row);

        cell_name.innerHTML = "---";
        cell_name.removeAttribute("onclick");

        let cell_add_remove_button = Get_Add_Remove_Cell(row);
        cell_add_remove_button.innerHTML = "";
        if (!m_is_const_list[row]){
            var add_remove_button = HTML_Create_Button("+", add_func);
            cell_add_remove_button.appendChild(add_remove_button);
        }
    }
    
    this.Remove_Additional_Row = function(id){
        let start_row = 1;
        if (m_lvl_list != null){
            start_row += m_lvl_list.length;
        }
        for (let i = start_row; i < GUI_TABLE.rows.length; i++){
            if (GUI_TABLE.rows[i].name == id){
                GUI_TABLE.deleteRow(i);
                return;
            }
        }
        
        //TODO: warn
    }

//private properties
    var self = this;
    var m_owner = null;
    var m_lvl_list = null;
    var m_is_const_list = null;

//public properties

//additional initialization
}

function Block_Subclass_Selector_t (gui_block){
//constants
    const GUI_BLOCK = gui_block;
    
//private methods
    var Proc_Open_Database_Event = function(){
        
    }

    var Proc_Change_Event = function(){
        
    }
    
    var Proc_Clear_Event = function(){
        
    }
    
    var Proc_Subclass_Descr = function(){
        
    }
    
    var Proc_Ability_Descr = function(){
        
    }

//public methods
    this.Reset = function(owner, name, lvl_list, db){
        m_owner = owner;
        m_db = db;
        
        m_outfield_subclass_name = HTML_Create_Output(
            "---",
            Proc_Subclass_Descr,
            undefined,
            "class_output_field"
        );
        
        var change_button = HTML_Create_Button(
            "+",
            Proc_Change_Event,
            undefined,
            undefined //TODO: class?
        );
        
        m_table = HTML_Create_Table(lvl_list.length, 2, false, "100%", ["20%", "80%"]);
        m_table.class = "class_table_class_abilities"; //TODO: move to HTML tools
        for (let i = 0; i < lvl_list.length; i++){
            let curr_row = m_table.rows[i]
            curr_row.cells[0].innerHTML = lvl_list[i];
            curr_row.cells[1].innerHTML = "---";
        }
        
        GUI_BLOCK.innerHTML = name;
        GUI_BLOCK.appendChild(HTML_Create_BR());
        GUI_BLOCK.appendChild(m_outfield_subclass_name);
        GUI_BLOCK.appendChild(change_button);
        GUI_BLOCK.appendChild(m_table);
    }

    this.Set_Subclass = function(subclass_name, abi_list){
        
    }
    
    this.Remove_Subclass = function(subclass_name){
        
    }

//private properties
    var self = this;
    var m_owner = null;
    var m_table = null;
    var m_outfield_subclass_name = null;
    var m_db = null;

//public properties

//additional initialization
}

function Block_Spell_List_t(
    gui_table,
    database,
    has_add_button = false,
    has_custom_dc_and_daily = false
){
//constants
    const GUI_TABLE = gui_table;
    const BLOCK_DATABASE = database;
    const HAS_ADD_BUTTON = has_add_button;
    const HAS_CUSTOM_DC_AND_DAILY = has_custom_dc_and_daily;
    
//private methods
    var Find_Row_Num_By_ID = function(id){
        let start_row = 1;
        if (m_lvl_list != null){
            start_row += m_lvl_list.length;
        }
        
        for (let i = start_row; i < GUI_TABLE.rows.length; i++){
            if (GUI_TABLE.rows[i].name == id){
                return i;
            }
        }
        return null;
    }

    var Proc_Show_Detail_Event = function(row){
        if (m_owner != null){
            m_owner.Show_Detail_Popup(row);
        }
    }
    
    var Proc_Open_Database_Event = function(row){
        //TODO: let min_lvl = m_lvl_list[row];
        //TODO: let max_lvl = m_lvl_list[row];
        var table_data = new Array(0);
        var filters = new Array(0);
        let headers = [
            "Название",
            "Ур.",
            "Школа",
            "Дист.",
            "Область",
            "Эффект",
            "Цель",
            "Длит.",
            "Испытание",
            "УкМ",
            "Описание",
            "Ист."
        ];
        var add_func;
        
        if (row == null){
            add_func = Proc_Add_Event;
        }else{
            add_func = Proc_Set_Event.bind(null, row);
        }
        
        for (let i = 0; i < BLOCK_DATABASE.length; i++){
            let cur_spell = BLOCK_DATABASE[i];

            table_data.push([
                cur_spell.name,
                cur_spell.lvl,
                cur_spell.school,
                cur_spell.dist,
                cur_spell.area,
                cur_spell.effect,
                cur_spell.target,
                cur_spell.duration,
                cur_spell.save,
                cur_spell.magic_resistance,
                cur_spell.descr,
                cur_spell.source,
            ]);
        }

        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.FIND,    0, "Название" ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.FIND,    1, "Ур."      ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.FIND,    2, "Школа"   ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.SELECT,  11, "Источник" ));

        Popup_Database.Open(
            table_data,
            add_func,
            filters,
            headers,
            Show_Info_Database);
    }
    
    var Proc_Set_Event = function(row, entry_num){
        if ((m_owner != null) && (entry_num != null)){
            m_owner.Set(row, BLOCK_DATABASE[entry_num]);
        }
        Popup_Database.Close();
    }
    
    var Proc_Add_Event = function(entry_num){
        if (m_owner == null){
            return;
        }
        
        m_owner.Add("TBD_" + m_id, BLOCK_DATABASE[entry_num], true);
        m_id++;

        Popup_Database.Close();
    }
    
    var Proc_Remove_Event = function(row){
        if (m_owner != null){
            m_owner.Remove(row);
        }
    }
    
    var Proc_Remove_Additional = function(id){
        if (m_owner == null){
            return;
        }
        
        let start_row = 1;
        if (m_lvl_list != null){
            start_row += m_lvl_list.length;
        }
        for (let i = start_row; i < GUI_TABLE.rows.length; i++){
            if (GUI_TABLE.rows[i].name == id){
                m_owner.Remove(i-1);
                return;
            }
        }
    }
    
    var Proc_Show_Detail_Additional_Event = function(id){
        if (m_owner == null){
            return;
        }
        
        let start_row = 1;
        if (m_lvl_list != null){
            start_row += m_lvl_list.length;
        }
        for (let i = start_row; i < GUI_TABLE.rows.length; i++){
            if (GUI_TABLE.rows[i].name == id){
                m_owner.Show_Detail_Popup(i-1);
                return;
            }
        }
    }
    
    // var Proc_Change_Lvl_Event = function(id, event){
    //    TODO
    // }
    
    var Proc_Change_DC_Event = function(id, event){
        let table_row_num = Find_Row_Num_By_ID(id);
        
        if ((m_owner == null) || (table_row_num == null)){
            return;
        }

        let new_value = event.target.value;
        if (isNaN(new_value)){
            let dc_to_set = m_owner.Get_DC(table_row_num-1);
            if (dc_to_set == null){
                event.target.value = "";
            }else{
                event.target.value = dc_to_set;
            }
            return;
        }
        m_owner.Set_DC((table_row_num-1), parseInt(new_value));
    }
    
    var Proc_Change_Daily_Event = function(id, event){
        let table_row_num = Find_Row_Num_By_ID(id);
        
        if ((m_owner == null) || (table_row_num == null)){
            return;
        }

        let new_value = event.target.value;
        if (isNaN(new_value)){
            let dc_to_set = m_owner.Get_Daily(table_row_num-1);
            if (dc_to_set == null){
                event.target.value = "";
            }else{
                event.target.value = dc_to_set;
            }
            return;
        }
        m_owner.Set_Daily((table_row_num-1), parseInt(new_value));
    }
    
    var Show_Info_Database = function(entry_num){
        let spell = BLOCK_DATABASE[entry_num];

        Popup_Descr.Call(spell.name, Get_Spell_Descr(spell));
    }
    
    var Get_Cell_Add_Button = function(){
        let table_row = GUI_TABLE.rows[0];
        if (HAS_CUSTOM_DC_AND_DAILY){
            return table_row.cells[4];
        }
            
        return table_row.cells[2];
    }
    
    var Get_Cell_Header = function(){
        let table_row = GUI_TABLE.rows[0];
        return table_row.cells[1];
    }
    
    var Get_Cell_Name = function(row){
        let table_row = GUI_TABLE.rows[row + 1]; // +1 with header
        return table_row.cells[1];
    }
    
    var Get_Add_Remove_Cell = function(row){
        let table_row = GUI_TABLE.rows[row + 1]; // +1 with header
        if (HAS_CUSTOM_DC_AND_DAILY){
            return table_row.cells[4];
        }
        
        return table_row.cells[2];
    }
    
    var Get_DC_Infield = function(row){
        let table_row = GUI_TABLE.rows[row + 1]; // +1 with header
        let table_cell = table_row.cells[2];
        return table_cell.childNodes[0];
    }
    
    var Get_Daily_Infield = function(row){
        let table_row = GUI_TABLE.rows[row + 1]; // +1 with header
        let table_cell = table_row.cells[3];
        return table_cell.childNodes[0];
    }
    
//public methods
    this.Reset = function(owner, name, lvl_list = null, is_const_default = false){
        m_owner = owner;
        m_lvl_list = lvl_list;
        if (m_lvl_list == null){
            m_is_const_list = null;
        }else{
            m_is_const_list = new Array(m_lvl_list.length).fill(is_const_default);
        }
        
        self.Clear();
        self.Set_Name(name);
        
        let cell_add = Get_Cell_Add_Button();
        if (HAS_ADD_BUTTON){
            var add_func = Proc_Open_Database_Event.bind(null, null);
            var add_button = HTML_Create_Button("+", add_func);
            cell_add.appendChild(add_button);
        }else{
            cell_add.innerHTML = "";
        }
    }

    this.Set = function(row, abi_name){
        let cell_name = Get_Cell_Name(row);
        
        var remove_func = Proc_Remove_Event.bind(null, row);
        var show_details_func = Proc_Show_Detail_Event.bind(null, row);

        cell_name.innerHTML = abi_name;
        cell_name.onclick = show_details_func;

        let cell_add_remove_button = Get_Add_Remove_Cell(row);
        cell_add_remove_button.innerHTML = "";
        
        if (!m_is_const_list[row]){
            var add_remove_button = HTML_Create_Button("X", remove_func);
            cell_add_remove_button.appendChild(add_remove_button);
        }

        Popup_Database.Close();
    }
    
    this.Clear = function(){
        //m_additional_rows = new Array(0);
        
        while (GUI_TABLE.rows.length > 0){
            GUI_TABLE.deleteRow(0);
        }
        var row = GUI_TABLE.insertRow(GUI_TABLE.rows.length);
        var cell_lvl = row.insertCell(row.cells.length);
        var cell_ability = row.insertCell(row.cells.length);
        
        if (HAS_CUSTOM_DC_AND_DAILY){
            var cell_dc = row.insertCell(row.cells.length);
            var cell_daily = row.insertCell(row.cells.length);
            cell_dc.innerHTML = "СЛ";
            cell_daily.innerHTML = "В день";
        }
        
        var cell_add_remove_button = row.insertCell(row.cells.length);
        
        if (m_lvl_list == null){
            return;
        }

        for (let i = 0; i < m_lvl_list.length; i++){
            var row = GUI_TABLE.insertRow(GUI_TABLE.rows.length);
            
            cell_lvl = row.insertCell(row.cells.length);
            cell_ability = row.insertCell(row.cells.length);
            cell_add_remove_button = row.insertCell(row.cells.length);
            
            if (m_lvl_list[i] != null){
                let cur_lvl = m_lvl_list[i];
                cell_lvl.innerHTML = cur_lvl;
            }
            
            cell_ability.innerHTML = "---";
            
            if (!m_is_const_list[i]){
                var add_func = Proc_Open_Database_Event.bind(null, i);
                var add_remove_button = HTML_Create_Button("+", add_func);
                cell_add_remove_button.appendChild(add_remove_button);
            }
        }
    }
    
    this.Set_Name = function(name){
        let cell_header = Get_Cell_Header();
        cell_header.innerHTML = name;
    }
    
    this.Set_Row_Const_State = function(row, is_const){
        //TODO: add safety checked
        if (m_is_const_list[row] == is_const){
            return;
        }
        
        let cell_add_remove_button = Get_Add_Remove_Cell(row);
        
        if(m_is_const_list[row] == false){
            cell_add_remove_button.innerHTML = "";
        }else{
            let cell_name = Get_Cell_Name(row);

            var add_remove_button
            if (cell_name.innerHTML == "---"){
                add_remove_button = HTML_Create_Button("+", Proc_Open_Database_Event.bind(null, row));
            }else{
                add_remove_button = HTML_Create_Button("X", Proc_Remove_Event.bind(null, row));
            }
            cell_add_remove_button.appendChild(add_remove_button);
        }
        
        m_is_const_list[row] = is_const;
    }
    
    this.Add_Row = function(
        id,
        name = null,
        lvl = null,
        daily = null,
        dc = null,
        can_be_removed = true)
    {
        var table_row = GUI_TABLE.insertRow(GUI_TABLE.rows.length);
        table_row.name = id;
            
        var cell_lvl = table_row.insertCell(table_row.cells.length);
        
        if (lvl != null){
            cell_lvl.innerHTML = lvl;
        }
        
        var cell_ability = table_row.insertCell(table_row.cells.length);
        cell_ability.innerHTML = name;
        cell_ability.onclick = Proc_Show_Detail_Additional_Event.bind(null, id);
        
        if (HAS_CUSTOM_DC_AND_DAILY){
            var cell_dc = table_row.insertCell(table_row.cells.length);
            var cell_daily = table_row.insertCell(table_row.cells.length);
            let print_dc = dc;
            let print_daily = daily;
            
            if (print_dc == null){
                print_dc = 0;
            }
            
            if (print_daily == null){
                print_daily = 1;
            }
            
            var dc_input = HTML_Create_Input_Number(
                print_dc,
                0,
                100,
                Proc_Change_DC_Event.bind(null, id)
            );
            var daily_input = HTML_Create_Input_Number(
                print_daily,
                1,
                100,
                Proc_Change_Daily_Event.bind(null, id)
            );
            
            cell_dc.appendChild(dc_input);
            cell_daily.appendChild(daily_input);
        }
        
        var cell_add_remove_button = table_row.insertCell(table_row.cells.length);
        if (can_be_removed){
            var remove_func = Proc_Remove_Additional.bind(null, id);
            var add_remove_button = HTML_Create_Button("X", remove_func);
            cell_add_remove_button.appendChild(add_remove_button);
        }
    }

    this.Remove = function(row){
        let cell_name = Get_Cell_Name(row);
        
        var add_func = Proc_Open_Database_Event.bind(null, row);

        cell_name.innerHTML = "---";
        cell_name.removeAttribute("onclick");

        let cell_add_remove_button = Get_Add_Remove_Cell(row);
        cell_add_remove_button.innerHTML = "";
        if (!m_is_const_list[row]){
            var add_remove_button = HTML_Create_Button("+", add_func);
            cell_add_remove_button.appendChild(add_remove_button);
        }
    }
    
    this.Set_DC = function(row, value){
        if (!HAS_CUSTOM_DC_AND_DAILY){
            return;
        }
        
        let dc_infield = Get_DC_Infield(row);
        dc_infield.value = value;
    }
    
    this.Set_Daily = function(row, value){
        if (!HAS_CUSTOM_DC_AND_DAILY){
            return;
        }
        
        let infield = Get_Daily_Infield(row);
        infield.value = value;
    }
    
    this.Remove_Additional_Row = function(id){
        let start_row = 1;
        if (m_lvl_list != null){
            start_row += m_lvl_list.length;
        }
        for (let i = start_row; i < GUI_TABLE.rows.length; i++){
            if (GUI_TABLE.rows[i].name == id){
                GUI_TABLE.deleteRow(i);
                return;
            }
        }
        
        //TODO: warn
    }

//private properties
    var self = this;
    var m_owner = null;
    var m_lvl_list = null;
    var m_is_const_list = null;
    var m_id = 0; //TODO: remove, set id in owner

//public properties

//additional initialization
}

//TODO: create tables in Reset
function Block_Spell_Book_t(spell_list_table_id, database){
//constants

const SPELL_LIST_TABLE_ID = spell_list_table_id;
const SPELL_DATABASE = database;

//private methods
    var Proc_Set_Spell_Event = function(spell_lvl, row, entry_num){
        if (m_owner == null){
            return;
        }
        
        let entry = m_curr_database[entry_num];
        m_owner.Set(spell_lvl, row, entry);
        m_curr_database = null;
        Popup_Database.Close();
    }
    
    var Proc_Remove_Spell_Event = function(spell_lvl, row){
        if (m_owner == null){
            return;
        }
        
        m_owner.Remove(spell_lvl, row);
    }
    
    var Proc_Open_Database_Event = function(spell_lvl, row){
        m_curr_database = Spell_Database_GetList(SPELL_DATABASE, undefined, spell_lvl, spell_lvl);
        var table_data = new Array(0);
        var filters = new Array(0);
        var add_func = Proc_Set_Spell_Event.bind(null, spell_lvl, row);

        let headers = [
            "Название",
            "Ур.",
            "Школа",
            "Дист.",
            "Область",
            "Эффект",
            "Цель",
            "Длит.",
            "Испытание",
            "УкМ",
            "Описание",
            "Ист."
        ];

        for (let i = 0; i < m_curr_database.length; i++){
            let cur_spell = m_curr_database[i];

            table_data.push([
                cur_spell.name,
                cur_spell.lvl,
                cur_spell.school,
                cur_spell.dist,
                cur_spell.area,
                cur_spell.effect,
                cur_spell.target,
                cur_spell.duration,
                cur_spell.save,
                cur_spell.magic_resistance,
                cur_spell.descr,
                cur_spell.source,
            ]);
        }

        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.FIND,    0, "Название" ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.FIND,    1, "Ур."      ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.FIND,    2, "Школа"   ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.SELECT,  11, "Источник" ));

        Popup_Database.Open(table_data, add_func, filters, headers, Proc_Show_Database_Info_Event);
    }
    
    var Proc_Show_Spell_Info_Event = function(spell_lvl, row){
        if (m_owner == null){
            return;
        }
        
        m_owner.Show_Details(spell_lvl, row);
    }
    
    var Proc_Show_Database_Info_Event = function(entry_num){
        let spell = m_curr_database[entry_num];

        Popup_Descr.Call(spell.name, Get_Spell_Descr(spell));
    }

//public methods
    this.Reset = function(owner, spells_known){
        m_owner = owner;
        m_tables = new Array(0);
        
        for (let spell_lvl = 0; spell_lvl < spells_known.length; spell_lvl++){
            var cur_table = document.getElementById(SPELL_LIST_TABLE_ID + spell_lvl);
            
            while (cur_table.rows.length > 1){
                cur_table.deleteRow(1);
            }
            
            for (let j = 0; j < spells_known[spell_lvl].length; j++){
                var row = cur_table.insertRow(cur_table.rows.length);
                var cell_lvl = row.insertCell(0);
                var cell_spell = row.insertCell(1);
                var cell_add_remove_button = row.insertCell(2);
                
                cell_lvl.innerHTML = spells_known[spell_lvl][j];
                cell_spell.innerHTML = "---";
                
                var add_func = Proc_Open_Database_Event.bind(null, spell_lvl, j);
                var add_remove_button = HTML_Create_Button("+", add_func);
                cell_add_remove_button.appendChild(add_remove_button);
            }
            m_tables.push(cur_table);
        }
        self.Set_Daily_And_DC(
            new Array(spells_known.length).fill(0),
            );
    }

    this.Set = function(spell_lvl, row, spell_name){
        let table_row = m_tables[spell_lvl].rows[row + 1]; // +1 with header
        let cell_name = table_row.cells[1];
        let cell_add_remove_button = table_row.cells[2];
        var remove_func = Proc_Remove_Spell_Event.bind(null, spell_lvl, row);
        var show_details_func = Proc_Show_Spell_Info_Event.bind(null, spell_lvl, row);

        cell_name.innerHTML = spell_name;
        cell_name.onclick = show_details_func;

        cell_add_remove_button.innerHTML = "";
        var add_remove_button = HTML_Create_Button("X", remove_func);
        cell_add_remove_button.appendChild(add_remove_button);
    }

    this.Remove = function(spell_lvl, row){
        let table_row = m_tables[spell_lvl].rows[row + 1]; // +1 with header
        let cell_name = table_row.cells[1];
        let cell_add_remove_button = table_row.cells[2];
        var add_func = Proc_Open_Database_Event.bind(null, spell_lvl, row);

        cell_name.innerHTML = "---";
        cell_name.removeAttribute("onclick");

        cell_add_remove_button.innerHTML = "";

        var add_remove_button = HTML_Create_Button("+", add_func);
        cell_add_remove_button.appendChild(add_remove_button);
    }
    
    this.Set_Daily_And_DC = function(daily_arr, base_dc){
        if (daily_arr.length == m_tables.length){
            for (let i = 0; i < m_tables.length; i++){
                if (daily_arr[i] === 0){
                    m_tables[i].rows[0].cells[1].innerHTML = 
                        "Круг " + i + 
                        "<br/>В день: -<br/>СЛ: -";
                }else{
                    let dc = base_dc + i;
                    m_tables[i].rows[0].cells[1].innerHTML = 
                        "Круг " + i + 
                        "<br/>В день: " + daily_arr[i] + 
                        "<br/>СЛ: " + dc;
                }
            }
        }else{
            console.error("Incorrect array given to set technomancer daily spells count.");
        }
    }

//private properties
    var self = this;
    var m_owner = null;
    var m_tables = new Array(0);
    var m_curr_database = null;

//public properties

//additional initialization
}

function Layer_Classes_t(){
//private methods
    // var Reset = function(){

    // }
    
    var Get_Class_Obj = function(class_name){
        if (!m_map.has(class_name)){
            return null;
        }
        
        return m_map.get(class_name);
    }

//public methods
    this.Show_Block = function(class_name){
        var class_obj = Get_Class_Obj(class_name);
        if (class_obj == null){
            console.error("Attempting to open unknown class block: '" + class_name + "'");
            return;
        }
        //else NOTHING TO DO

        class_obj.Show_Block();
    }

    this.Hide_Block = function(class_name){
        var class_obj = Get_Class_Obj(class_name);
        if (class_obj == null){
            console.error("Attempting to close unknown class block: '" + class_name + "'");
            return;
        }
        //else NOTHING TO DO

        class_obj.Hide_Block();
    }

    this.Get_Block = function(class_name){
        var class_obj = Get_Class_Obj(class_name);
        if (class_obj == null){
            console.error("Attempting to get access to unknown class block: '" + class_name + "'");
            return;
        }
        //else NOTHING TO DO

        return class_obj;
    }

    this.Load_From_Obj = function(class_name, obj){
        var class_obj = Get_Class_Obj(class_name);
        if (class_obj == null){
            console.error("Attempting to load data for unknown class block: '" + class_name + "'");
            return;
        }
        //else NOTHING TO DO
        
        class_obj.Load_From_Obj(obj);
    }

//private properties
    var self = this;
    var m_map = new Map();

//public properties
    m_map.set(CLASSES.MECHANIC, new Block_Class_Mechanic_t());
    m_map.set(CLASSES.MYSTIC, new Block_Class_Mystic_t());
    m_map.set(CLASSES.OPERATIVE, new Block_Class_Operative_t());
    m_map.set(CLASSES.ENVOY, new Block_Class_Envoy_t());
    m_map.set(CLASSES.SOLDIER, new Block_Class_Soldier_t());
    m_map.set(CLASSES.SOLARION, new Block_Class_Solarion_t());
    m_map.set(CLASSES.TECHNOMANCER, new Block_Class_Technomancer_t());

    // Reset();
}