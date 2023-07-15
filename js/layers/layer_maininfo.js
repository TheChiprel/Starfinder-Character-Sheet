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

function Block_DropDownList_t(
    option_list
){
//constants

//private methods
    var Init = function(option_list){
        self.html_element = HTML_Create_Div("class_ddlist_classes");
        var pseudo_button = HTML_Create_Button("+");
        self.html_element.appendChild(pseudo_button);
        var dd_list = HTML_Create_Div("class_ddlist_classes_content");
        
        option_list.forEach(option => {
            var button = HTML_Create_Button(
                option,
                Event_DD_Button_OnClick.bind(null, option)
            );
            dd_list.appendChild(button);
            m_dd_button_map.set(option, button);
        });
        self.html_element.appendChild(dd_list);
    }
    
    var Event_DD_Button_OnClick = function(button_name){
        if (m_callback_button_press == null){
            return;
        }
        
        m_callback_button_press(button_name);
    }

//public methods
    this.Reset = function(callback_button_press){
        m_callback_button_press = callback_button_press;
        m_dd_button_map.forEach((button, key) => {
            button.disabled = false;
        });
    }

    this.Set_DD_Button_State = function(button_name, is_enabled){
        if (!m_dd_button_map.has(button_name)){
            console.error("Button '" + button_name + "' not found in dropdown list!");
            return;
        }
        
        let button = m_dd_button_map.get(button_name);
        button.disabled = !is_enabled;
    }

//private properties
    var self = this;
    var m_owner = null;
    var m_dd_button_map = new Map();
    var m_callback_button_press = null;

//public properties
    this.html_element; //set on init

//additional initialization
    Init(option_list);
}

function Block_MainInfo_Classes_t(){
//constants
    const GUI_BLOCK = document.getElementById("block_maininfo_classes");

//private methods

    var Init = function(){
        GUI_BLOCK.innerHTML = "Классы:";
        GUI_BLOCK.appendChild(m_dropdown_add_class.html_element);
        m_class_table.rows[0].cells[0].innerHTML = "Класс";
        m_class_table.rows[0].cells[1].innerHTML = "Ур.";
        GUI_BLOCK.appendChild(m_class_table);
    }
    
    var Event_Add_Class = function(class_name){
        if (m_owner == null){
            return;
        }
        
        m_owner.Add_Class_From_GUI(class_name);
    }
    
    var Event_Remove_Class = function(class_name){
        if (m_owner == null){
            return;
        }
        
        m_owner.SetLvl(class_name, 0);
    }
    
    var Event_Class_Change_Lvl = function(class_name, event){
        if (m_owner == null){
            return;
        }
        
        let value = event.target.value;
        if(isNaN(value)){
            event.target.value = m_owner.Get_Lvl(class_name);
            return;
        }
        m_owner.SetLvl(class_name, parseInt(value));
    }
    
//public methods
    this.Reset = function(owner){
        m_owner = owner;
        
        while (m_class_table.rows.length > 1){
            m_class_table.deleteRow(1);
        }
        m_outfield_class_level_map.clear();
        m_dropdown_add_class.Reset(Event_Add_Class);
    }

    this.Add_Class = function(class_name, lvl = 1){
        m_dropdown_add_class.Set_DD_Button_State(class_name, false);

        var row = m_class_table.insertRow(m_class_table.rows.length);
        //row.class = 'class_row_class_lvl';
        row.name =  class_name;

        var cell_name = row.insertCell(0);
        var cell_lvl = row.insertCell(1);
        var cell_button = row.insertCell(2);

        cell_name.innerHTML = class_name;
        var class_lvl = HTML_Create_Input_Number(
            lvl,
            1,
            20, 
            Event_Class_Change_Lvl.bind(null, class_name)
        );//TODO: magic
        var class_button_remove = HTML_Create_Button("X", Event_Remove_Class.bind(null, class_name));

        cell_lvl.appendChild(class_lvl);
        cell_button.appendChild(class_button_remove);
        m_class_table.style.display = "block";

        m_outfield_class_level_map.set(class_name, class_lvl);
        layers.classes.Show_Block(class_name); //TODO: move to chardata?
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
        m_dropdown_add_class.Set_DD_Button_State(class_name, true);
        m_outfield_class_level_map.delete(class_name);

        layers.classes.Hide_Block(class_name); //TODO: move to chardata?
    }
    
    this.Set_Class_Lvl = function(class_name, lvl){
        let outfield = m_outfield_class_level_map.get(class_name);
    }

//private properties
    var self = this;
    var m_owner = null;
    var m_outfield_class_level_map = new Map();
    var m_class_table = HTML_Create_Table(
        1,
        3,
        true,
        "100%",
        ["50%", "25%", "25%"]
    );
    var m_dropdown_add_class = new Block_DropDownList_t(Object.values(CLASSES));

//public properties

//additional initialization
    Init();
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
    const GUI_BLOCK = document.getElementById("block_maininfo_attack");

//private methods

    var Init = function(){
        GUI_BLOCK.innerHTML = "Атака:";
        GUI_BLOCK.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(GUI_BLOCK, "БМА:", self.outfield_bab.html_element, false);
        GUI_BLOCK.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(GUI_BLOCK, "Ближняя:", self.outfield_melee.html_element, false);
        GUI_BLOCK.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(GUI_BLOCK, "Оперативная:", self.outfield_operative.html_element, false);
        GUI_BLOCK.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(GUI_BLOCK, "Дистанционная:", self.outfield_ranged.html_element, false);
        GUI_BLOCK.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(GUI_BLOCK, "Метательная:", self.outfield_thrown.html_element, false);
    }
    
//public methods


//private properties
    var self = this;

//public properties
    this.outfield_bab = new GUI_Element_OutField_t();
    this.outfield_melee = new GUI_Element_OutField_t();
    this.outfield_operative = new GUI_Element_OutField_t();
    this.outfield_ranged = new GUI_Element_OutField_t();
    this.outfield_thrown = new GUI_Element_OutField_t();

//additional initialization
    Init();
}

function Block_MainInfo_Defense_t(){
//constants
    const GUI_BLOCK = document.getElementById("block_maininfo_defense");

//private methods

    var Init = function(){
        GUI_BLOCK.innerHTML = "Защита:";
        GUI_BLOCK.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            GUI_BLOCK,
            "ЭКБ:",
            self.outfield_eac.html_element,
            false
        );
        GUI_BLOCK.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            GUI_BLOCK,
            "ККБ:",
            self.outfield_kac.html_element,
            false
        );
        GUI_BLOCK.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            GUI_BLOCK,
            "Против манёвров:",
            self.outfield_maneuver.html_element,
            false
        );
        GUI_BLOCK.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            GUI_BLOCK,
            "Устойчивости:",
            self.outfield_resistance.html_element,
            false
        );
        GUI_BLOCK.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            GUI_BLOCK,
            "СУ:",
            self.outfield_dr.html_element,
            false
        );
        
        //TODO: remove, once implemented!
        self.outfield_dr.Set_Value(0);
    }
    
//public methods


//private properties
    var self = this;

//public properties
    this.outfield_eac = new GUI_Element_OutField_t();
    this.outfield_kac = new GUI_Element_OutField_t();
    this.outfield_maneuver = new GUI_Element_OutField_t();
    this.outfield_resistance = new GUI_Element_OutField_t();
    this.outfield_dr = new GUI_Element_OutField_t();

//additional initialization
    Init();
}

function Block_MainInfo_Speed_t(){
//constants
    const GUI_BLOCK = document.getElementById("block_maininfo_speed");

//private methods

    var Init = function(){
        GUI_BLOCK.innerHTML = "Скорости:";
        GUI_BLOCK.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            GUI_BLOCK,
            "Наземная:",
            self.outfield_land.html_element,
            false
        );
        GUI_BLOCK.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            GUI_BLOCK,
            "Полёт:",
            self.outfield_flight.html_element,
            false
        );
        GUI_BLOCK.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            GUI_BLOCK,
            "Рытьё:",
            self.outfield_burrow.html_element,
            false
        );
        GUI_BLOCK.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            GUI_BLOCK,
            "Плавание:",
            self.outfield_swim.html_element,
            false
        );
        GUI_BLOCK.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            GUI_BLOCK,
            "Лазание:",
            self.outfield_climb.html_element,
            false
        );
    }
    
//public methods


//private properties
    var self = this;

//public properties
    this.outfield_land = new GUI_Element_OutField_t();
    this.outfield_flight = new GUI_Element_OutField_t();
    this.outfield_burrow = new GUI_Element_OutField_t();
    this.outfield_swim = new GUI_Element_OutField_t();
    this.outfield_climb = new GUI_Element_OutField_t();

//additional initialization
    Init();
}

function Block_MainInfo_Saves_t(){
//constants
    const GUI_BLOCK = document.getElementById("block_maininfo_saves");

//private methods

    var Init = function(){
        GUI_BLOCK.innerHTML = "Испытания:";
        GUI_BLOCK.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            GUI_BLOCK,
            "Стойкость:",
            self.outfield_fort.html_element,
            false
        );
        GUI_BLOCK.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            GUI_BLOCK,
            "Реакция:",
            self.outfield_refl.html_element,
            false
        );
        GUI_BLOCK.appendChild(HTML_Create_BR());
        
        
        Append_Label_Element_Pair(
            GUI_BLOCK,
            "Воля:",
            self.outfield_will.html_element,
            false
        );
    }
    
//public methods


//private properties
    var self = this;

//public properties
    this.outfield_fort = new GUI_Element_OutField_t();
    this.outfield_refl = new GUI_Element_OutField_t();
    this.outfield_will = new GUI_Element_OutField_t();

//additional initialization
    Init();
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
    
//public methods
    //TODO: rework, remove
    this.Reset = function (){
        Init_Proficiency_HTML();
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