//TODO: move into appropriate file
function Get_Class_Abiscore_Value(abiscore_name){
    return "class_output_abiscore_value_" + abiscore_name;
}

function Get_Class_Abiscore_Mod(abiscore_name){
    return "class_output_abiscore_mod_" + abiscore_name;
}


//TODO: move here cb table creation.
function Layer_Abiscores_t (){
//private methods
    var Init = function(){
        const ABISCORE_ARR = Object.values(ABISCORES);
        Clear_Tables();
        
        ABISCORE_ARR.forEach(abiscore => {
            Add_Abiscore(abiscore);
        });
    }
    
    var Proc_Change_Value_Event = function(abiscore, diff){
        if (m_func_change_value == null){
            return;
        }
        
        m_func_change_value(abiscore, diff);
    }
    
    var Proc_Checkbox_Onchange_Event = function(abiscore, lvlup_num, event){
        if (m_func_checkbox_onchange == null){
            return;
        }
        
        m_func_checkbox_onchange(abiscore, lvlup_num, event.target.checked);
    }
    
    var Clear_Tables = function(){
        //clearing table
        while (m_number_table.rows.length > 1){
            m_number_table.deleteRow(1);
        }
        
        while(m_checkbox_table.rows.length > 1){
            m_checkbox_table.deleteRow(1);
        }
    }
    
    var Add_Abiscore = function(abiscore){
        Add_To_Number_Table(abiscore);
        Add_To_Checkbox_Table(abiscore);
    }
    
    var Add_To_Checkbox_Table = function(abiscore){
        var row = m_checkbox_table.insertRow(m_checkbox_table.rows.length);
        row.name = abiscore;
        
        var cell_name = document.createElement('th');
        cell_name.innerHTML = abiscore;
        row.appendChild(cell_name);
        
        for (let i = 0; i < 4; i++){ //TODO: magic
            let cb_cell = row.insertCell(row.cells.length);
            var cb = HTML_Create_Input_Checkbox(
                    false,
                    Proc_Checkbox_Onchange_Event.bind(null, abiscore, i)
            );
            cb_cell.appendChild(cb);
        }
    }
    
    var Add_To_Number_Table = function(abiscore){
        var row = m_number_table.insertRow(m_number_table.rows.length);

        var cell_name = document.createElement('th');
        cell_name.innerHTML = abiscore;
        row.appendChild(cell_name);
        
        let cell_value = row.insertCell(1);
        var cell_value_output = HTML_Create_Output(
            10,
            undefined,
            undefined,
            "class_output_field " + Get_Class_Abiscore_Value(abiscore));
        var cell_value_button_minus = HTML_Create_Button(
            "-",
            Proc_Change_Value_Event.bind(null, abiscore, -1));
        var cell_value_button_plus = HTML_Create_Button(
            "+",
            Proc_Change_Value_Event.bind(null, abiscore, 1));
        cell_value.appendChild(cell_value_button_minus);
        cell_value.appendChild(cell_value_output);
        cell_value.appendChild(cell_value_button_plus);
        
        let cell_mod = row.insertCell(2);
        var cell_mod_output = HTML_Create_Output(
            0,
            undefined,
            undefined,
            "class_output_field " + Get_Class_Abiscore_Mod(abiscore));
        cell_mod.appendChild(cell_mod_output);
    }
    
//public methods
    this.Set_Func_Change_Value = function(func){
        m_func_change_value = func;
    }
    
    this.Set_Func_Checkbox_Onchange = function(func){
        m_func_checkbox_onchange = func;
    }
    
    this.SetUpgradeValue = function(abiscore, lvlup_num, value){
        for (let i = 1; i < m_checkbox_table.rows.length; i++){
            let curr_row = m_checkbox_table.rows[i];
            if (curr_row.name == abiscore){
                let upgr_cell = curr_row.cells[lvlup_num + 1];
                let cb = upgr_cell.childNodes[0];
                cb.checked = value;
                return;
            }
        }
    }

//private properties
    var self = this;
    var m_number_table = document.getElementById('table_abiscores');
    var m_checkbox_table = document.getElementById('table_abiscores_upgrades');
    var m_func_change_value = null;
    var m_func_checkbox_onchange = null;

//public properties

//additional initialization
    Init();
}