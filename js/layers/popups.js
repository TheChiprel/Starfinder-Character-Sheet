function Database_Filter_Input_t (type, clmn, name){
    this.clmn = clmn;
    this.name = name;
    this.type = type;
}

function Database_Filter_Find_t(label_name, func_iter, clmn, cell, data_table, has_header){
//private methods
    var Init = function(label_name, func_iter, cell){
        var label = HTML_Create_Label(label_name);
        var input_field = HTML_Create_Input_Text("");
        input_field.setAttribute('oninput', "Popup_Database.Filter_Find_Change(event, " + func_iter + ")");

        cell.appendChild(label);
        cell.appendChild(HTML_Create_BR());
        cell.appendChild(input_field);
    }

//public methods
    this.Set_Value = function(value){
        let i = 0;
        if (m_has_header){
            i = 1;
        }
        if (value == ""){
            for (; i < self.Is_Filtered.length; i++){
                self.Is_Filtered[i] = false;
            }
        }else{
            var regex = new RegExp(value, "i");
            for (; i < self.Is_Filtered.length; i++){
                var cell_value = m_data_table.rows[i].cells[clmn].innerHTML;

                self.Is_Filtered[i] = !(regex.test(cell_value));
            }
        }
    }

//private properties
    var self = this;
    var m_clmn = clmn;
    var m_data_table = data_table;
    var m_has_header = has_header;

//public properties
    this.Is_Filtered = new Array(m_data_table.rows.length).fill(false);

//additional initialization
    Init(label_name, func_iter, cell);
}

function Database_Filter_Selector_t(label_name, func_iter, clmn, cell, options, data_table, has_header){
//private methods
    var Init = function(label_name, func_iter, cell, options){
        var label = HTML_Create_Label(label_name);
        var selector = HTML_Create_Selector(true, options, "Popup_Database.Filter_Selector_Change(event, " + func_iter + ")");

        cell.appendChild(label);
        cell.appendChild(HTML_Create_BR());
        cell.appendChild(selector);
    }

//public methods
    this.Set_Value = function(value){
        let i = 0;
        if (m_has_header){
            i = 1;
        }
        if (value == "---"){
            for (; i < self.Is_Filtered.length; i++){
                self.Is_Filtered[i] = false;
            }
        }else{
            for (; i < self.Is_Filtered.length; i++){
                var cell_value = m_data_table.rows[i].cells[clmn].innerHTML;

                self.Is_Filtered[i] = !(cell_value == value);
            }
        }
    }

//private properties
    var self = this;
    var m_clmn = clmn;
    var m_data_table = data_table;
    var m_has_header = has_header;

//public properties
    this.Is_Filtered = new Array(m_data_table.rows.length).fill(false);

//additional initialization
    Init(label_name, func_iter, cell, options);
}

function Database_Filter_Range_t(label_name, func_iter, clmn, cell, data_table, has_header){
//private methods
    var Init = function(label_name, func_iter, cell){
        var label = HTML_Create_Label(label_name);
        var min_field = HTML_Create_Input_Text("");
        min_field.setAttribute('oninput', "Popup_Database.Filter_Range_Min_Change(event, " + func_iter + ")");
        min_field.setAttribute('placeholder', "Мин.");
        min_field.setAttribute('class', "class_popup_input_number");
        var max_field = HTML_Create_Input_Text("");
        max_field.setAttribute('oninput', "Popup_Database.Filter_Range_Max_Change(event, " + func_iter + ")");
        max_field.setAttribute('placeholder', "Макс.");
        max_field.setAttribute('class', "class_popup_input_number");

        cell.appendChild(label);
        cell.appendChild(HTML_Create_BR());
        cell.appendChild(min_field);
        cell.innerHTML += "~";
        cell.appendChild(max_field);
    }

    var Refresh = function(){
        let i = 0;
        if (m_has_header){
            i = 1;
        }
        if ((min_value == null) && (max_value == null)){
            for (; i < self.Is_Filtered.length; i++){
                self.Is_Filtered[i] = false;
            }
        }else{
            for (; i < self.Is_Filtered.length; i++){
                var cell_value = Number(m_data_table.rows[i].cells[clmn].innerHTML);
                if (cell_value == NaN){
                    continue;
                }

                if (min_value != null){
                    if (cell_value < min_value){
                        self.Is_Filtered[i] = true;
                        continue;
                    }
                }

                if (max_value != null){
                    if (cell_value > max_value){
                        self.Is_Filtered[i] = true;
                        continue;
                    }
                }

                self.Is_Filtered[i] = false;
            }
        }
    }

//public methods
    this.Set_Min_Value = function(value){
        if (value == ""){
            min_value = null;
        }
        else{
            var n_value = Number(value);

            if (n_value == NaN){
                min_value = null;
            }else{
                min_value = n_value;
            }
        }

        Refresh();
    }

    this.Set_Max_Value = function(value){
        if (value == ""){
            max_value = null;
        }
        else{
            var n_value = Number(value);

            if (n_value == NaN){
                max_value = null;
            }else{
                max_value = n_value;
            }
        }

        Refresh();
    }

//private properties
    var m_clmn = clmn;
    var m_data_table = data_table;
    var min_value = null;
    var max_value = null;
    var m_has_header = has_header;
    var self = this;

//public properties
    this.Is_Filtered = new Array(m_data_table.rows.length).fill(false);

//additional initialization
    Init(label_name, func_iter, cell);
}

function Database_Filter_t(input, table, has_header){
//private methods
    var Update = function(){
        for (let row = 0; row < table.rows.length; row++){
            var cur_row = table.rows[row]
            var Is_Row_Filtered = false;

            for (let cur_filter = 0; cur_filter < filters.length; cur_filter++){
                if (filters[cur_filter].Is_Filtered[row]){
                    Is_Row_Filtered = true;
                    break;
                }
            }

            if (Is_Row_Filtered){
                cur_row.style.display = 'none';
            }else{
                cur_row.style.display = '';
            }
        }
    }

//public methods
    this.Find_Change = function (value, iter){
        filters[iter].Set_Value(value);
        Update();
    }

    this.Selector_Change = function (value, iter){
        filters[iter].Set_Value(value);
        Update();
    }

    this.Range_Min_Change = function (value, iter){
        filters[iter].Set_Min_Value(value);
        Update();
    }

    this.Range_Max_Change = function (value, iter){
        filters[iter].Set_Max_Value(value);
        Update();
    }

//private properties
    var filter_row = document.getElementById('layer_popup_filters').rows[0];
    var filters = new Array(0);
    var data_table = table;
    var m_has_header = has_header;
    var self = this;

//public properties


//additional initialization
    //clearing row
    while (filter_row.cells.length > 0){
        filter_row.deleteCell(0);
    }

    //creating HTML blocks for each filter
    for (i = 0; i < input.length; i++){
        var cell = filter_row.insertCell(i);
        var cur_filter = input[i];
        var clmn = cur_filter.clmn + 1; //there is an additional column with add button

        switch (cur_filter.type){
            case POPUP_FILTER_TYPES.FIND:
                filters.push(new Database_Filter_Find_t(cur_filter.name, i, clmn, cell, data_table, m_has_header));
                break;

            case POPUP_FILTER_TYPES.SELECT:
                var options = new Array(0);
                let j = 0;
                if (m_has_header){
                    j = 1;
                }
                //else NOTHING TO DO
                for(; j < data_table.rows.length; j++){
                    var cur_entry = data_table.rows[j].cells[clmn].innerHTML;
                    if(options.includes(cur_entry)){
                        continue;
                    }

                    options.push(cur_entry);
                }
                options.sort();

                filters.push(new Database_Filter_Selector_t(cur_filter.name, i, clmn, cell, options, data_table, m_has_header));
                break;

            case POPUP_FILTER_TYPES.RANGE:
                filters.push(new Database_Filter_Range_t(cur_filter.name, i, clmn, cell, data_table, m_has_header));
                break;

            default:
                console.warn("unknown filter type: " + cur_filter.type);
                break;
        }
    }
}

function Popup_Database_t(){
//private methods

//public methods
    this.Open = function(data, add_function, filters, headers = undefined, showinfo_function = undefined){
        var filter_selectors = new Array(data.length - 1);

        m_add_func = add_function;
        if (showinfo_function == undefined){
            m_showinfo_func = null;
        }else{
            m_showinfo_func = showinfo_function;
        }

        if (headers != undefined){
            let row = m_table.insertRow(m_table.rows.length);

            row.appendChild(document.createElement("th"));

            for (let i = 0; i < headers.length; i++){
                let cur_header = headers[i];
                let th = document.createElement("th");
                if (cur_header != null){
                    th.innerHTML = cur_header;
                }else{
                    th.innerHTML = "";
                }
                row.appendChild(th);
            }
        }

        for (let i = 0; i < data.length; i++){
            var row = m_table.insertRow(m_table.rows.length);

            var cell = row.insertCell(0);
            var button_add = document.createElement("input");
            var call_add_func = self.Call_Add_Func.bind(null, i);
            
            button_add.type = "button";
            button_add.value = "+";
            button_add.onclick = call_add_func;
            cell.appendChild(button_add);

            for (let j = 0; j < data[i].length; j++){
                var cell_div = document.createElement("div");
                cell_div.setAttribute('class', "class_popup_database_cell");
                cell_div.innerHTML = data[i][j];
                cell = row.insertCell(j + 1);
                cell.appendChild(cell_div);
                if(m_showinfo_func != null){
                    var showinfo_func = self.Call_Showinfo_Func.bind(null, i);
                    cell.onclick = showinfo_func;
                }
                //else NOTHING TO DO
            }
        }

        filter = new Database_Filter_t(filters, m_table, headers != undefined);

        block.style.display='block';
    }

    this.Close = function(){
        while (m_table.rows.length > 0){
            m_table.deleteRow(0);
        }
        block.style.display='none';
        m_add_func = null;
        m_showinfo_func = null;
    }

    this.Call_Add_Func = function(num){
        if (m_add_func != null){
            m_add_func(num);
        }else{
            console.error("Calling 'Add' callback in database, with add function undefined");
        }
    }

    this.Call_Showinfo_Func = function(num){
        if (m_showinfo_func != null){
            m_showinfo_func(num);
        }else{
            console.error("Calling 'Show Info' callback in database, with Show Info function undefined");
        }
    }

    this.Filter_Find_Change = function (event, iter){
        var value = event.target.value;
        filter.Find_Change (value, iter);
    }

    this.Filter_Selector_Change = function (event, iter){
        var value = event.target.value;
        filter.Selector_Change (value, iter);
    }

    this.Filter_Range_Min_Change = function (event, iter){
        var value = event.target.value;
        filter.Range_Min_Change (value, iter);
    }

    this.Filter_Range_Max_Change = function (event, iter){
        var value = event.target.value;
        filter.Range_Max_Change (value, iter);
    }

//private properties
    var self = this;
    var block = document.getElementById('layer_popup_database');
    var m_table = document.getElementById('table_popup_database');
    var filter = null;
    var m_add_func = null;
    var m_showinfo_func = null;


//public properties

}

function Popup_Selector_t(){
    this.callback = null;
    this.block = document.getElementById('layer_popup_select');
    this.selector = document.getElementById('layer_popup_select_selector');
    this.header = document.getElementById('outfield_popup_select_name');

    var self = this;

    this.Clear_Selector = function(){
        for (let i = (self.selector.options.length - 1); i >= 0; i--){
            self.selector.options.remove(i);
        }

    }

    this.Call = function(header_name, options, callback){
        self.Clear_Selector();
        self.header.value = header_name;
        self.callback = callback;
        for (let i = 0; i < options.length; i++){
            HTML_Selector_Add_Option(self.selector, options[i]);
        }
        self.block.style.display='block';
    }

    this.Confirm = function(){
        self.block.style.display='none';
        self.callback(self.selector.value);
    }

    //TODO: Add cancel button?
    //this.Popup_Cancel(){
    //
    //}
}

function Popup_Descr_t(){
//private methods

//public methods
    this.Call = function (name, descr){
        name_outfield.value = name;
        descr_outfield.value = descr;
        block.style.display='block';
    }

    this.Close = function (){
        block.style.display='none';
    }

//private properties
    var name_outfield = document.getElementById('outfield_popup_descr_name');
    var descr_outfield = document.getElementById('outfield_popup_descr_data');
    var block = document.getElementById('layer_popup_descr');
    var self = this;

//public properties

}

function Popup_Stats_Details_t(){
//private methods

//public methods
//TODO: rework
    this.Call = function (name, sum, mod_map, isMod = true, comment = undefined){
        var data = "";
        name_outfield.value = name + " (" + (isMod ? GetModifierStr(sum) : sum) + ")";
        if (mod_map != undefined){
            mod_map.forEach((value, key) => {
                if (value != 0){
                    if (data != ""){
                        data += "\n";
                    }

                    data += key + ": " + (isMod ? GetModifierStr(value) : value);
                }
                // else NOTHING TO DO
            });
        }
        if (comment != undefined){
            if (data != ""){
                data += "\n";
            }
            data += comment;
        }

        descr_outfield.value = data;
        block.style.display='block';
    }

    this.Close = function (){
        block.style.display='none';
    }

//private properties
    var name_outfield = document.getElementById('outfield_popup_stats_details_name');
    var descr_outfield = document.getElementById('outfield_popup_stats_details_data');
    var block = document.getElementById('layer_popup_stats_details');
    var self = this;

//public properties

}

var Popup_Selector = new Popup_Selector_t();
var Popup_Database = new Popup_Database_t();
var Popup_Descr = new Popup_Descr_t();
var Popup_Stat_Details = new Popup_Stats_Details_t();