function Layer_MainInfo_t(){
//private methods
    var Init_Proficiency_HTML = function(){
        let table_prof_weapon = document.getElementById('table_prof_weapon');
        let table_prof_armor = document.getElementById('table_prof_armor');

        while (table_prof_weapon.rows.length > 1){
            table_prof_weapon.deleteRow(1);
        }
        
        while (table_prof_armor.rows.length > 1){
            table_prof_armor.deleteRow(1);
        }

        chardata.stats.weapon_proficiency.prof_map.forEach((value, key) => {
            var row = table_prof_weapon.insertRow(table_prof_weapon.rows.length);

            row.class = 'class_row_prof';
            row.name = key;

            var cell_label = row.insertCell(0);
            var cell_prof_checkbox = row.insertCell(1);
            var cell_spec_checkbox = row.insertCell(2);

            var prof_label = document.createElement("label");
            prof_label.innerHTML = key;
            cell_label.appendChild(prof_label);
            //cell_label.setAttribute('class', "class_table_clmn_header");

            var prof_checkbox = document.createElement("input");
            prof_checkbox.type = 'checkbox';
            prof_checkbox.name = key + '_prof';
            prof_checkbox.disabled = true;
            value.checkbox = cell_prof_checkbox.appendChild(prof_checkbox);

            if (chardata.stats.weapon_specialization.prof_map.has(key)){
                let specialization = chardata.stats.weapon_specialization.prof_map.get(key);
                var spec_checkbox = document.createElement("input");
                spec_checkbox.type = 'checkbox';
                spec_checkbox.name = key + '_spec';
                spec_checkbox.disabled = true;
                specialization.checkbox = cell_spec_checkbox.appendChild(spec_checkbox);
            }
            //else NOTHING TO DO
        });

        chardata.stats.armor_proficiency.prof_map.forEach((value, key) => {
            var row = table_prof_armor.insertRow(table_prof_armor.rows.length);

            row.class = 'class_row_prof';
            row.name = key;

            var cell_label = row.insertCell(0);
            var cell_prof_checkbox = row.insertCell(1);

            var prof_label = document.createElement("label");
            prof_label.innerHTML = key;
            cell_label.appendChild(prof_label);
            //cell_label.setAttribute('class', "class_table_clmn_header");

            var prof_checkbox = document.createElement("input");
            prof_checkbox.type = 'checkbox';
            prof_checkbox.name = key + '_prof';
            prof_checkbox.disabled = true;
            value.checkbox = cell_prof_checkbox.appendChild(prof_checkbox);
        });
    }

    var Proc_Set_Class_Lvl_Event = function(class_name, event){
        let new_value = event.target.value;
        if (isNaN(new_value)){
            event.target.value = chardata.classes.Get_Lvl(class_name);
            return;
        }
        chardata.classes.SetLvl(class_name, parseInt(new_value));
    }
    
    var Proc_Remove_Class_Event = function(class_name){
        chardata.classes.SetLvl(class_name, 0);
    }
    
//public methods
    //TODO: rework, remove
    this.Reset = function (){
        Init_Proficiency_HTML();
    }

    this.Clear_Class_Add_Buttons = function(){
        m_class_add_list.innerHTML = "";
    }

    this.Clear_Class_Table = function(){
        while (m_class_table.rows.length > 1){
            m_class_table.deleteRow(1);
        }
        m_class_table.style.display = "none";
    }
    
    this.Add_Class_Add_Button = function(class_name, call_back_func){
        var new_button = HTML_Create_Button(
            class_name,
            call_back_func,
            undefined,
            "class_button_add_class");
        m_class_add_list.appendChild(new_button);

        var br = document.createElement("br");
        m_class_add_list.appendChild(br);

        m_class_add_button_map.set(class_name, new_button);
    }

    this.Add_New_Class = function(class_name, lvl = 1){
        if (m_class_add_button_map.has(class_name)){
            m_class_add_button_map.get(class_name).disabled = true;
        }else{
            console.error("Attempt to add unknown class '" + class_name + "'");
            return;
        }

        var row = m_class_table.insertRow(m_class_table.rows.length);
        row.class = 'class_row_class_lvl';
        row.name =  class_name;

        var cell_label = row.insertCell(0);
        var cell_lvl = row.insertCell(1);
        var cell_button = row.insertCell(2);

        var class_label = HTML_Create_Label(class_name);
        var class_lvl = HTML_Create_Input_Number(
            lvl,
            1,
            20, 
            Proc_Set_Class_Lvl_Event.bind(null, class_name)
        );//TODO: magic
        var class_button_remove = HTML_Create_Button("X", Proc_Remove_Class_Event.bind(null, class_name));

        cell_label.appendChild(class_label);
        cell_lvl.appendChild(class_lvl);
        cell_button.appendChild(class_button_remove);
        m_class_table.style.display = "block";

        //chardata.classes.SetLvl(class_name, lvl);
        layers.classes.Show_Block(class_name);
    }
    
    this.Add_New_Class_By_Context = function(class_name, context){
        self.Add_New_Class(class_name, context.lvl);
        layers.classes.Load_From_Obj(class_name, context);
    }

    this.Remove_Class = function(class_name){
        //removing table row
        for (let i = 1; i < m_class_table.rows.length; i++){
            var row = m_class_table.rows[i];

            if(row.name == class_name){
                m_class_table.deleteRow(i);
                if (m_class_table.rows.length <= 1){
                    m_class_table.style.display = "none";
                }
                break;
            }
        }

        //enable class add button
        if (m_class_add_button_map.has(class_name)){
            m_class_add_button_map.get(class_name).disabled = false;
        }else{
            console.error("Attempt to remove unknown class '" + class_name + "'");
            return;
        }

        //chardata.classes.SetLvl(class_name, 0);
        layers.classes.Hide_Block(class_name);
    }

    this.Set_Class_Lvl = function(value, class_name){
        chardata.classes.SetLvl(class_name, value);
    }

    this.Load_Classes_From_Obj = function(arr){
        arr.forEach(cur_class => {
            self.Add_New_Class_By_Context(cur_class.name, cur_class.context);
        });
    }

//private properties
    var self = this;
    var m_class_add_list = document.getElementById('class_ddlist_classes_content');
    var m_class_add_button_map = new Map();
    var m_class_table = document.getElementById("table_classes_lvl");

//public properties

//additional initialization
}