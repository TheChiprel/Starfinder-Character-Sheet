function Append_Label_Element_Pair(
    gui_block,
    label_name,
    html_element,
    is_separate_line = false
){
    var label = HTML_Create_Label(
        label_name
    );
    
    if (is_separate_line){
        label.appendChild(HTML_Create_BR());
    }
    label.appendChild(html_element);
    gui_block.appendChild(label);
}

//TODO: move GUI elements to separate file?

//TODO: check numerical values, cancel invalids
function GUI_Element_InField_t(is_numerical = false){
//constants

//private methods
    var Event_OnChange = function(event){
        if ((m_owner == null) || (m_owner.Set == undefined)){
            return;
        }
        
        m_owner.Set(event.target.value);
    }

//public methods
    this.Reset = function(owner){
        m_owner = owner;
    }

    this.Set_Value = function(value){
        self.html_element.value = value;
    }

//private properties
    var self = this;
    var m_owner = null;

//public properties
    this.html_element = HTML_Create_Input_Text(
        "",
        Event_OnChange
    );

//additional initialization
}

function GUI_Element_OutField_t(){
//constants

//private methods
    var Event_OnClick = function(){
        if (m_onclick_func == null){
            return;
        }
        
        m_onclick_func();
    }

//public methods
    this.Reset = function(owner, onclick_func){
        m_owner = owner;
        m_onclick_func = onclick_func;
    }

    this.Set_Value = function(value){
        self.html_element.value = value;
    }

//private properties
    var self = this;
    var m_owner = null;
    var m_onclick_func = null;

//public properties
    this.html_element = HTML_Create_Output(
        "",
        Event_OnClick,
        undefined,
        "class_output_field"
    );

//additional initialization
}

function GUI_Element_Selector_t(option_list){
//constants

//private methods
    var Event_OnChange = function(){
        if ((m_owner == null) || (m_owner.Set == undefined)){
            return;
        }
        
        m_owner.Set(event.target.value);
    }

//public methods
    this.Reset = function(owner){
        m_owner = owner;
    }

    this.Set_Value = function(value){
        self.html_element.value = value;
    }

//private properties
    var self = this;
    var m_owner = null;

//public properties
    this.html_element = HTML_Create_Selector(
        false,
        option_list,
        Event_OnChange
    );

//additional initialization
}

function Block_MainInfo_Main_t(){
//constants
    const GUI_BLOCK = document.getElementById("block_maininfo_main");

//private methods
    var Get_Race_List = function(){
        var list = new Array(0);
        
        list.push("---");
        RACE_DATABASE.forEach(entry => {
            list.push(entry.name);
        });
        return list;
    }
    
    var Get_Theme_List = function(){
        var list = new Array(0);
        
        list.push("---");
        THEME_DATABASE.forEach(entry => {
            list.push(entry.name);
        });
        return list;
    }

    var Init = function(){
        GUI_BLOCK.innerHTML = "";
        
        Append_Label_Element_Pair(GUI_BLOCK, "Имя:", self.infield_name.html_element, true);
        GUI_BLOCK.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(GUI_BLOCK, "Раса:", self.selector_race.html_element, true);
        GUI_BLOCK.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(GUI_BLOCK, "Тема:", self.selector_theme.html_element, true);
        GUI_BLOCK.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(GUI_BLOCK, "Размер:", self.outfield_size.html_element, true);
        GUI_BLOCK.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(GUI_BLOCK, "Тип:", self.outfield_category.html_element, true);
    }
    
//public methods


//private properties
    var self = this;

//public properties
    this.infield_name = new GUI_Element_InField_t();
    this.selector_race = new GUI_Element_Selector_t(Get_Race_List());
    this.selector_theme = new GUI_Element_Selector_t(Get_Theme_List());
    this.outfield_size = new GUI_Element_OutField_t();
    this.outfield_category = new GUI_Element_OutField_t();

//additional initialization
    Init();
}

function Block_MainInfo_Numbers_t(){
//constants
    const GUI_BLOCK = document.getElementById("block_maininfo_numbers");

//private methods

    var Init = function(){
        GUI_BLOCK.innerHTML = "";
        
        Append_Label_Element_Pair(GUI_BLOCK, "Уровень:", self.outfield_lvl.html_element, false);
        GUI_BLOCK.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(GUI_BLOCK, "Инициатива:", self.outfield_initiative.html_element, false);
        GUI_BLOCK.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(GUI_BLOCK, "Макс. Пункты Живучести (ПЖ):", self.outfield_sp.html_element, true);
        GUI_BLOCK.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(GUI_BLOCK, "Макс. Пункты Здоровья (ПЗ):", self.outfield_hp.html_element, true);
        GUI_BLOCK.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(GUI_BLOCK, "Макс. Пункты Решимости (ПР):", self.outfield_rp.html_element, true);
    }
    
//public methods


//private properties
    var self = this;

//public properties
    this.outfield_lvl = new GUI_Element_OutField_t();
    this.outfield_initiative = new GUI_Element_OutField_t();
    this.outfield_sp = new GUI_Element_OutField_t();
    this.outfield_hp = new GUI_Element_OutField_t();
    this.outfield_rp = new GUI_Element_OutField_t();

//additional initialization
    Init();
}

function Block_MainInfo_Classes_t(){
//constants

//private methods

//public methods

//private properties
    var self = this;

//public properties

//additional initialization
}

function Block_MainInfo_Proficiency_t(){
//constants

//private methods

//public methods

//private properties
    var self = this;

//public properties

//additional initialization
}

function Block_MainInfo_Attack_t(){
//constants

//private methods

//public methods

//private properties
    var self = this;

//public properties

//additional initialization
}

function Block_MainInfo_Defense_t(){
//constants

//private methods

//public methods

//private properties
    var self = this;

//public properties

//additional initialization
}

function Block_MainInfo_Speed_t(){
//constants

//private methods

//public methods

//private properties
    var self = this;

//public properties

//additional initialization
}

function Block_MainInfo_Saves_t(){
//constants

//private methods

//public methods

//private properties
    var self = this;

//public properties

//additional initialization
}

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
    this.main = new Block_MainInfo_Main_t();
    this.numbers = new Block_MainInfo_Numbers_t();
    this.classes = new Block_MainInfo_Classes_t();
    this.proficiency = new Block_MainInfo_Proficiency_t();
    this.attack = new Block_MainInfo_Attack_t();
    this.defense = new Block_MainInfo_Defense_t();
    this.speed = new Block_MainInfo_Speed_t();
    this.saves = new Block_MainInfo_Saves_t();

//additional initialization
}