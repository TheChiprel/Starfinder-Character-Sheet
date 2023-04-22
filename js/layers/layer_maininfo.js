function Layer_MainInfo_t(){
//private methods
    var Init_Race_Selector = function(){
        var select_race = document.getElementById('selector_race');
        HTML_Selector_Clear_Options(select_race);

        HTML_Selector_Add_Option(select_race, "---");

        for (let i = 0; i < RACE_DATABASE.length; i++){
            HTML_Selector_Add_Option(select_race, RACE_DATABASE[i].name);
        }
    }

    var Init_Theme_Selector = function(){
        var select_theme = document.getElementById('selector_theme');
        HTML_Selector_Clear_Options(select_theme);

        HTML_Selector_Add_Option(select_theme, "---");

        for (let i = 0; i < THEME_DATABASE.length; i++){
            HTML_Selector_Add_Option(select_theme, THEME_DATABASE[i].name);
        }
    }

    var Init_Class_Selector = function(){
        m_class_add_button_map = new Map();
        let class_ddlist = document.getElementById('class_ddlist_classes_content');
        class_ddlist.innerHTML = "";
        for (let i = 0; i < CLASS_DATABASE.length; i++){
            var class_name = CLASS_DATABASE[i].name;
            var add_func = self.Add_New_Class.bind(null, class_name, 1);
            var new_button = HTML_Create_Button(
                class_name,
                add_func,
                undefined,
                "class_button_add_class");
            class_ddlist.appendChild(new_button);

            var br = document.createElement("br");
            class_ddlist.appendChild(br);

            m_class_add_button_map.set(class_name, new_button);
        }

        let table = document.getElementById("table_classes_lvl");
        while (table.rows.length > 1){
            table.deleteRow(1);
        }
        table.style.display = "none";
    }

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

    var Reset = function (){
        Init_Race_Selector();
        Init_Theme_Selector();
        Init_Class_Selector();
        Init_Proficiency_HTML();
        document.getElementById('infield_charname').value = "";
    }

//public methods
    this.Set_Name = function(name, update_field = false){
        chardata.name = name;
        if (update_field){
            document.getElementById('infield_charname').value = name;
        }
    }

    this.Set_Race = function(race_name, update_field = false){
        var entry = null;
        if ((race_name != "---") && (race_name != null)){
            for (let i = 0; i < RACE_DATABASE.length; i++){
                if (RACE_DATABASE[i].name == race_name){
                    entry = RACE_DATABASE[i];
                    break;
                }
                //else NOTHING TO DO
            }
        }
        //else NOTHING TO DO
        chardata.race.Set(entry);
    }

    this.Set_Theme = function(theme_name, update_field = false){
        let outfield_theme = document.getElementById("selector_theme");
        let new_theme_value = theme_name;
        let theme_abiscore = null;

        if ((new_theme_value == "---") || (new_theme_value == null)){
            chardata.theme = null;
            
            if (update_field){
                outfield_theme.value = "---";
            }
            //else NOTHING TO DO
        }else{
            for (let i = 0; i < THEME_DATABASE.length; i++){
                let cur_theme_entry = THEME_DATABASE[i];
                if (cur_theme_entry.name == new_theme_value){
                    chardata.theme = cur_theme_entry;
                    theme_abiscore = cur_theme_entry.abiscore;
                    chardata.abilities.theme.Set_Abilities(cur_theme_entry.name, cur_theme_entry.abilities);
                    if (update_field){
                        outfield_theme.value = new_theme_value;
                    }
                    //else NOTHING TO DO
                    break;
                }
                //else NOTHING TO DO
            }
        }

        chardata.stats.abiscores.values.SetThemeValue(theme_abiscore);
    }

    this.Add_New_Class = function(class_name, lvl = 1){
        if (m_class_add_button_map.has(class_name)){
            m_class_add_button_map.get(class_name).disabled = true;
        }else{
            console.error("Attempt to add unknown class '" + class_name + "'");
            return;
        }

        let table = document.getElementById("table_classes_lvl");
        var row = table.insertRow(table.rows.length);
        row.class = 'class_row_class_lvl';
        row.name =  class_name;

        var cell_label = row.insertCell(0);
        var cell_lvl = row.insertCell(1);
        var cell_button = row.insertCell(2);

        var class_label = HTML_Create_Label(class_name);
        var class_lvl = HTML_Create_Input_Number(lvl, 1, 20, "layers.maininfo.Set_Class_Lvl(Number(event.target.value), '" + class_name + "')"); //TODO: magic
        var remove_func = self.Remove_Class.bind(null, class_name);
        var class_button_remove = HTML_Create_Button("X", remove_func);

        cell_label.appendChild(class_label);
        cell_lvl.appendChild(class_lvl);
        cell_button.appendChild(class_button_remove);
        table.style.display = "block";

        chardata.classes.SetLvl(class_name, lvl);
        layers.classes.Show_Block(class_name);
    }
    
    this.Add_New_Class_By_Context = function(class_name, context){
        self.Add_New_Class(class_name, context.lvl);
        layers.classes.Load_From_Obj(class_name, context);
    }

    this.Remove_Class = function(class_name){
        //getting class table
        var table = document.getElementById("table_classes_lvl");

        //removing table row
        for (let i = 1; i < table.rows.length; i++){
            var row = table.rows[i];

            if(row.name == class_name){
                table.deleteRow(i);
                if (table.rows.length <= 1){
                    table.style.display = "none";
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

        chardata.classes.SetLvl(class_name, 0);
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
    var m_class_add_button_map;

//public properties

//additional initialization
    Reset();
}