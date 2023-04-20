function Abiscore_Upgrades_Checkboxes(){
//private methods
    var Create_Checkboxes = function(abiscore){
        var ret_arr = new Array(0);
        var row = m_table.insertRow(m_table.rows.length);

        for (let i = 0; i < 5; i++){
            let cell = row.insertCell(i);

            if (i == 0){
                cell.innerHTML = abiscore;
            }else{
                var cb = HTML_Create_Input_Checkbox(
                    false,
                    "layers.abiscores.Set_Abiscore_Upgr('" + abiscore + "', " + (i - 1) + ", event.target.checked)");
                cell.appendChild(cb);
                ret_arr.push(cb);
            }
        }
        return ret_arr;
    }

    var Reset = function(){
        while(m_table.rows.length > 1){
            m_table.deleteRow(1);
        }

        m_map = new Map();
        for (const [, abiscore] of Object.entries(ABISCORES)){
            m_map.set(abiscore, Create_Checkboxes(abiscore));
        };
    }

//public methods
    this.Set_Upgr_Value = function(abiscore, upgr_cnt, value, update_cb = false){
        chardata.stats.abiscores.values.SetLvlupUpgrade(abiscore, upgr_cnt, value);
        if (update_cb){
            if (m_map.has(abiscore)){
                let arr = m_map.get(abiscore)
                arr[upgr_cnt].checked = value;
            }else{
                console.error("Attempt to set level upgrade for unknown abiscore '" + abiscore + "'");
            }
        }
        //else NOTHING TO DO
    }


//private properties
    var self = this;
    var m_table = document.getElementById('table_abiscores_upgrades');
    var m_map;

//public properties

//additional initialization
    Reset();
}

function Layer_Abiscores_t (){
//private methods
    var Reset = function(){
        let abiscores_arr = Object.values(ABISCORES);
        m_abiscore_upgr_cb = new Abiscore_Upgrades_Checkboxes();
        
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

    var Load_Abiscore_Points = function(arr){
        let abiscore_list = Object.entries(ABISCORES);
        if (arr.length != abiscore_list.length){
            console.error("Error processing ability score upgrades from loaded file");
            return;
        }
        //else NOTHING TO DO

        for (let i = 0; i < abiscore_list.length; i++){
            let [, cur_abiscore] = abiscore_list[i];
            let upgrades = arr[i];
        }
    }

//public methods
    this.Set_Abiscore_Upgr = function(abiscore, upgr_cnt, value){
        m_abiscore_upgr_cb.Set_Upgr_Value(abiscore, upgr_cnt, value);
    }

    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        let abiscore_list = Object.entries(ABISCORES);
        let points_arr = obj.points;
        let upgr_arr = obj.upgr;

        if ((upgr_arr.length != abiscore_list.length) || (points_arr.length != abiscore_list.length)){
            console.error("Error processing ability score data from loaded file");
            return;
        }
        //else NOTHING TO DO

        for (let i = 0; i < abiscore_list.length; i++){
            let [, cur_abiscore] = abiscore_list[i];
            let points = points_arr[i];
            let upgrades = upgr_arr[i];

            chardata.stats.abiscores.values.SetPoints(cur_abiscore, points);

            for (let j = 0; j < upgrades.length; j++){
                m_abiscore_upgr_cb.Set_Upgr_Value(cur_abiscore, j, upgrades[j], true);
            }
        }
    }

//private properties
    var self = this;
    var m_abiscore_upgr_cb;
    var m_table = document.getElementById('table_abiscores');

//public properties

//additional initialization
    Reset();
}