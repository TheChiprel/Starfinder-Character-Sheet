function Leveled_Abilities_Block_t(gui_table, database){
//constants
    const GUI_TABLE = gui_table;
    const BLOCK_DATABASE = database;
    
//private methods
    var Proc_Show_Detail_Event = function(row){
        if (m_owner != null){
            m_owner.Show_Details(row);
        }
    }
    
    var Proc_Open_Database_Event = function(row){
        let max_lvl = m_lvl_list[row];

        var table_data = new Array(0);
        var filters = new Array(0);
        var add_func = Proc_Set_Event.bind(null, row);

        let headers = [
            "Название",
            "Ур.",
            "Описание",
            "Ист."
        ];

        for (let i = 0; i < BLOCK_DATABASE.length; i++){
            let cur_ability = BLOCK_DATABASE[i];

            table_data.push([
                cur_ability.name,
                cur_ability.lvl,
                cur_ability.descr,
                cur_ability.source]);
        }

        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.FIND,    0, "Название"  ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.RANGE,   1, "Ур."  ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.SELECT,  3, "Источник"  ));

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
        Popup_Descr.Close();
    }
    
    var Proc_Remove_Event = function(row){
        if (m_owner != null){
            m_owner.Remove(row);
        }
    }
    
    var Show_Info_Database = function(entry_num){
        let ability = BLOCK_DATABASE[entry_num];

        Popup_Descr.Call(ability.name, ability.descr);
    }
    
//public methods
    this.Set_Owner = function(owner){
        m_owner = owner;
    }

    this.Reset = function(owner, lvl_list){
        m_owner = owner;
        m_lvl_list = lvl_list;
        while (GUI_TABLE.rows.length > 1){
            GUI_TABLE.deleteRow(1);
        }

        for (let i = 0; i < m_lvl_list.length; i++){
            let cur_lvl = m_lvl_list[i];

            var row = GUI_TABLE.insertRow(GUI_TABLE.rows.length);
            var cell_lvl = row.insertCell(0);
            var cell_ability = row.insertCell(1);
            
            cell_lvl.innerHTML = cur_lvl;
            cell_ability.innerHTML = "---";
            
            var cell_add_remove_button = row.insertCell(2);
            
            var add_func = Proc_Open_Database_Event.bind(null, i);
            var add_remove_button = HTML_Create_Button("+", add_func);
            cell_add_remove_button.appendChild(add_remove_button);
        }
    }

    this.Set = function(row, abi_name, is_const){
        let table_row = GUI_TABLE.rows[row + 1]; // +1 with header
        let cell_name = table_row.cells[1];
        var remove_func = Proc_Remove_Event.bind(null, row);
        var show_details_func = Proc_Show_Detail_Event.bind(null, row);

        cell_name.innerHTML = abi_name;
        cell_name.onclick = show_details_func;

        let cell_add_remove_button = table_row.cells[2];
        cell_add_remove_button.innerHTML = "";
        
        if (!is_const){
            var add_remove_button = HTML_Create_Button("X", remove_func);
            cell_add_remove_button.appendChild(add_remove_button);
        }

        Popup_Database.Close();
    }

    this.Remove = function(row){
        let table_row = GUI_TABLE.rows[row + 1]; // +1 with header
        let cell_name = table_row.cells[1];
        
        var add_func = Proc_Open_Database_Event.bind(null, row);

        cell_name.innerHTML = "---";
        cell_name.removeAttribute("onclick");

        let cell_add_remove_button = table_row.cells[2];
        cell_add_remove_button.innerHTML = "";
        var add_remove_button = HTML_Create_Button("+", add_func);
        cell_add_remove_button.appendChild(add_remove_button);
    }

//private properties
    var self = this;
    var m_owner = null;
    var m_lvl_list = null;

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
    //m_map.set(CLASSES.MECHANIC, new Block_Class_Mechanic_t());
    //m_map.set(CLASSES.MYSTIC, new Block_Class_Mystic_t());
    //m_map.set(CLASSES.OPERATIVE, new Block_Class_Operative_t());
    m_map.set(CLASSES.ENVOY, new Block_Class_Envoy_t());
    //m_map.set(CLASSES.SOLDIER, new Block_Class_Soldier_t());
    m_map.set(CLASSES.SOLARION, new Block_Class_Solarion_t());
    //m_map.set(CLASSES.TECHNOMANCER, new Block_Class_Technomancer_t());

    // Reset();
}