function HTML_Create_BR(){
    return document.createElement("br");
}

function HTML_Create_Output(value, onclick_elem = undefined, id = undefined, class_elem = undefined){
    var ret_elem = document.createElement("output");
        ret_elem.classList.add = 'class_output_field';
        ret_elem.value = value;

    if (onclick_elem != undefined){
        if ((typeof onclick_elem) == "function"){
            ret_elem.onclick = onclick_elem;
        }else{
            ret_elem.setAttribute('onclick', onclick_elem);
        }
    }
    //else NOTHING TO DO

    if (id != undefined){
        ret_elem.setAttribute('id', id);
    }
    //else NOTHING TO DO

    if (class_elem != undefined){
        ret_elem.setAttribute('class', class_elem);
    }
    //else NOTHING TO DO

    return ret_elem;
}

function HTML_Create_Label(display_text, for_elem = undefined, id = undefined, class_elem = undefined){
    var ret_elem = document.createElement("label");
    ret_elem.innerHTML = display_text;

    if (for_elem != undefined){
        ret_elem.setAttribute('for', for_elem);
    }
    //else NOTHING TO DO

    if (id != undefined){
        ret_elem.setAttribute('id', id);
    }
    //else NOTHING TO DO

    if (class_elem != undefined){
        ret_elem.setAttribute('class', class_elem);
    }
    //else NOTHING TO DO

    return ret_elem;
}

function HTML_Create_Button(
    display_text,
    onclick_elem = undefined,
    id = undefined,
    class_elem = undefined,
    name = undefined)
    {
    var ret_elem = document.createElement("input");
    ret_elem.type = "button";
    ret_elem.value = display_text;

    if (onclick_elem != undefined){
        if ((typeof onclick_elem) == "function"){
            ret_elem.onclick = onclick_elem;
        }else{
            ret_elem.setAttribute('onclick', onclick_elem);
        }
    }
    //else NOTHING TO DO

    if (id != undefined){
        ret_elem.setAttribute('id', id);
    }
    //else NOTHING TO DO

    if (class_elem != undefined){
        ret_elem.setAttribute('class', class_elem);
    }
    //else NOTHING TO DO

    if (name != undefined){
        ret_elem.name = name;
    }
    //else NOTHING TO DO

    return ret_elem;
}

function HTML_Create_Input_Text(value = "", onchange_elem = undefined, id = undefined, class_elem = undefined){
    var ret_elem = document.createElement("input");
    ret_elem.type = 'text';
    ret_elem.value = value;

    if (onchange_elem != undefined){
        if ((typeof onchange_elem) == "function"){
            ret_elem.onchange = onchange_elem;
        }else{
            ret_elem.setAttribute('onchange', onchange_elem);
        }
    }
    //else NOTHING TO DO

    if (id != undefined){
        ret_elem.setAttribute('id', id);
    }
    //else NOTHING TO DO

    if (class_elem != undefined){
        ret_elem.setAttribute('class', class_elem);
    }
    //else NOTHING TO DO

    return ret_elem;
}

function HTML_Create_Input_Number(value = 0, min = 0, max = 100, onchange_elem = undefined, id = undefined, class_elem = undefined){
    var ret_elem = document.createElement("input");
    ret_elem.type = 'number';
    ret_elem.min = min;
    ret_elem.max = max;
    ret_elem.value = value;

    if (onchange_elem != undefined){
        if ((typeof onchange_elem) == "function"){
            ret_elem.onchange = onchange_elem;
        }else{
            ret_elem.setAttribute('onchange', onchange_elem);
        }
    }
    //else NOTHING TO DO

    if (id != undefined){
        ret_elem.setAttribute('id', id);
    }
    //else NOTHING TO DO

    if (class_elem != undefined){
        ret_elem.setAttribute('class', class_elem);
    }
    //else NOTHING TO DO

    return ret_elem;
}

function HTML_Create_Input_Checkbox(value = false, onchange_elem = undefined, id = undefined, class_elem = undefined){
    var ret_elem = document.createElement("input");
    ret_elem.type = 'checkbox';
    ret_elem.checked = value;

    if (onchange_elem != undefined){
        if ((typeof onchange_elem) == "function"){
            ret_elem.onchange = onchange_elem;
        }else{
            ret_elem.setAttribute('onchange', onchange_elem);
        }
    }
    //else NOTHING TO DO

    if (id != undefined){
        ret_elem.setAttribute('id', id);
    }
    //else NOTHING TO DO

    if (class_elem != undefined){
        ret_elem.setAttribute('class', class_elem);
    }
    //else NOTHING TO DO

    return ret_elem;
}

function HTML_Selector_Add_Option_List(selector, options){
    for (let i = 0; i < options.length; i++){
        var opt = document.createElement('option');
        opt.value = options[i];
        opt.innerHTML = options[i];
        selector.appendChild(opt);
    }
}

function HTML_Selector_Add_Option(selector, option_name){
    var opt = document.createElement('option');
    opt.value = option_name;
    opt.innerHTML = option_name;
    selector.appendChild(opt);
}

function HTML_Selector_Clear_Options(selector){
    while (selector.options.length > 0){
        selector.remove(0);
    }
}

function HTML_Create_Selector(null_option = false, list = undefined, onchange_elem = undefined, id = undefined, class_elem = undefined){
    var ret_elem = document.createElement("select");

    if (null_option){
        HTML_Selector_Add_Option(ret_elem, "---");
    }
    //else NOTHING TO DO

    if (list != undefined){
        HTML_Selector_Add_Option_List(ret_elem, list);
    }
    //else NOTHING TO DO

    if (onchange_elem != undefined){
        if ((typeof onchange_elem) == "function"){
            ret_elem.onchange = onchange_elem;
        }else{
            ret_elem.setAttribute('onchange', onchange_elem);
        }
    }
    //else NOTHING TO DO

    if (id != undefined){
        ret_elem.setAttribute('id', id);
    }
    //else NOTHING TO DO

    if (class_elem != undefined){
        ret_elem.setAttribute('class', class_elem);
    }
    //else NOTHING TO DO

    return ret_elem;
}

function HTML_Create_Table(
    rows,
    clmns,
    is_first_row_header = false,
    table_width = null,
    cell_width = null
){
    var table = document.createElement('table');
    if (table_width != null){
        table.width = table_width;
    }
    if (rows < 1){
        return table;
    }
    
    var header_row = table.insertRow(0);
    for (let clmn = 0; clmn < clmns; clmn++){
        var header_cell;
        if (is_first_row_header){
            header_cell = document.createElement('th');
            header_row.appendChild(header_cell);
        }else{
            header_cell = header_row.insertCell(clmn);
        }
        
        if ((cell_width != null) && (cell_width[clmn] != undefined)){
            header_cell.width = cell_width[clmn];
        }
    }
    
    for (row = 1; row < rows; row++){
        var cur_row = table.insertRow(row);
        for (let clmn = 0; clmn < clmns; clmn++){
            cur_row.insertCell(clmn);
        }
    }
    
    return table;
}

function HTML_Table_Span(table, row, cell, span_value){
    //TODO
}