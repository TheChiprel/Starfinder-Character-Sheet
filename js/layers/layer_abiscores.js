//TODO: move here cb table creation.
function Layer_Abiscores_t (){
//private methods
    
//public methods
    this.Clear_Tables = function(){
        //clearing table
        while (m_number_table.rows.length > 1){
            m_number_table.deleteRow(1);
        }
    }
    
    this.Add_Abiscore = function(abiscore_name, change_value_func, class_outfield_value, class_outfield_mod){
        var row = m_number_table.insertRow(m_number_table.rows.length);

        var cell_name = document.createElement('th');
        cell_name.innerHTML = abiscore_name;
        row.appendChild(cell_name);
        
        let cell_value = row.insertCell(1);
        var cell_value_output = HTML_Create_Output(
            10,
            undefined,
            undefined,
            "class_output_field " + class_outfield_value);
        var cell_value_button_minus = HTML_Create_Button(
            "-",
            change_value_func.bind(null, abiscore_name, -1));
        var cell_value_button_plus = HTML_Create_Button(
            "+",
            change_value_func.bind(null, abiscore_name, 1));
        cell_value.appendChild(cell_value_button_minus);
        cell_value.appendChild(cell_value_output);
        cell_value.appendChild(cell_value_button_plus);
        
        let cell_mod = row.insertCell(2);
        var cell_mod_output = HTML_Create_Output(
            0,
            undefined,
            undefined,
            "class_output_field " + class_outfield_mod);
        cell_mod.appendChild(cell_mod_output);
    }

//private properties
    var self = this;
    var m_number_table = document.getElementById('table_abiscores');

//public properties

//additional initialization
}