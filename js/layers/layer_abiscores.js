//TODO: move here functions, creating and removing HTML objects stored here, not in chardata/abiscores.
function Layer_Abiscores_t (){
//private methods
    var Reset = function(){
        let abiscores_arr = Object.values(ABISCORES);
        
        //clearing table
        while (m_table.rows.length > 1){
            m_table.deleteRow(1);
        }
        
        for (let i = 0; i < abiscores_arr.length; i++){
            var abiscore_name = abiscores_arr[i];

            var row = m_table.insertRow(m_table.rows.length);

            var cell_name = document.createElement('th');
            cell_name.innerHTML = abiscore_name;
            row.appendChild(cell_name);
            
            let cell_value = row.insertCell(1);
            let cell_value_function = chardata.stats.abiscores.values.Show_Detail_Popup.bind(null, abiscores_arr[i]);
            var cell_value_output = HTML_Create_Output(10, cell_value_function, undefined, "class_output_field class_output_abiscore_value_" + abiscore_name);
            var cell_value_button_minus = HTML_Create_Button(
                "-",
                chardata.stats.abiscores.values.ChangeBaseValue.bind(null, abiscore_name, -1));
            var cell_value_button_plus = HTML_Create_Button(
                "+",
                chardata.stats.abiscores.values.ChangeBaseValue.bind(null, abiscore_name, 1));
            
            let cell_mod = row.insertCell(2);
            let cell_mod_function = chardata.stats.abiscores.modifiers.Show_Detail_Popup.bind(null, abiscores_arr[i]);
            var cell_mod_output = HTML_Create_Output(0, cell_mod_function, undefined, "class_output_field class_output_abiscore_mod_" + abiscore_name);
            
            cell_value.appendChild(cell_value_button_minus);
            cell_value.appendChild(cell_value_output);
            cell_value.appendChild(cell_value_button_plus);
            
            cell_mod.appendChild(cell_mod_output);
        }
    }

//private properties
    var self = this;
    var m_table = document.getElementById('table_abiscores');

//public properties

//additional initialization
    Reset();
}