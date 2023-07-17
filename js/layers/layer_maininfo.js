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
    const GUI_BLOCK = document.getElementById("block_maininfo_classes");

//private methods

    var Init = function(){
        GUI_BLOCK.innerHTML = "Классы:";
        GUI_BLOCK.appendChild(m_dropdown_add_class.html_element);
        m_class_table.rows[0].cells[0].innerHTML = "Класс";
        m_class_table.rows[0].cells[1].innerHTML = "Ур.";
        m_class_table.style.display = "none";
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
    const GUI_BLOCK = document.getElementById("block_maininfo_proficiency");
    //TODO: currently created separately from charadata's proficiencies. 
    //Find a way to create by chardata
    //TODO: when addition of special will be added, need a proper reset
    const WEAPON_PROFICIENCY_LIST = [
        WEAPON_TYPES.MELEE_SIMPLE,
        WEAPON_TYPES.MELEE_ADVANCED,
        WEAPON_TYPES.RANGED_SMALL,
        WEAPON_TYPES.RANGED_LONG,
        WEAPON_TYPES.RANGED_SNIPER,
        WEAPON_TYPES.RANGED_HEAVY,
        WEAPON_TYPES.GRENADE
    ];
    const WEAPON_SPECIALIZATION_LIST = [
        WEAPON_TYPES.MELEE_SIMPLE,
        WEAPON_TYPES.MELEE_ADVANCED,
        WEAPON_TYPES.RANGED_SMALL,
        WEAPON_TYPES.RANGED_LONG,
        WEAPON_TYPES.RANGED_SNIPER,
        WEAPON_TYPES.RANGED_HEAVY
    ];
    const ARMOR_PROFICIENCY_LIST = [
        ARMOR_TYPES.LIGHT,
        ARMOR_TYPES.HEAVY,
        ARMOR_TYPES.POWER
    ];

//private methods
    var Init = function(){
        GUI_BLOCK.innerHTML = "";
        
        m_table_prof_weapon = HTML_Create_Table(
            1,
            3,
            true,
            "100%",
            ["50%", "25%", "25%"]
        );
        m_table_prof_weapon.rows[0].cells[0].innerHTML = "Тип оружия";
        m_table_prof_weapon.rows[0].cells[1].innerHTML = "Владение";
        m_table_prof_weapon.rows[0].cells[2].innerHTML = "Привычное";
        
        m_table_prof_armor = HTML_Create_Table(
            1,
            3,
            true,
            "100%",
            ["50%", "25%", "25%"]
        );
        m_table_prof_armor.rows[0].cells[0].innerHTML = "Тип брони";
        m_table_prof_armor.rows[0].cells[1].innerHTML = "Ношение";
        
        WEAPON_PROFICIENCY_LIST.forEach(weapon_type => {
            var curr_row = m_table_prof_weapon.insertRow(m_table_prof_weapon.rows.length);
            var name_cell = curr_row.insertCell(curr_row.cells.length);
            var prof_cell = curr_row.insertCell(curr_row.cells.length);
            
            name_cell.innerHTML = weapon_type;
            
            var prof_checkbox = document.createElement("input");
            prof_checkbox.type = 'checkbox';
            prof_checkbox.disabled = true;
            prof_checkbox.checked = false;
            prof_cell.appendChild(prof_checkbox);
            m_map_prof_weapon.set(weapon_type, prof_checkbox);
            
            if (WEAPON_SPECIALIZATION_LIST.includes(weapon_type)){
                var spec_cell = curr_row.insertCell(curr_row.cells.length);
                var spec_checkbox = document.createElement("input");
                spec_checkbox.type = 'checkbox';
                spec_checkbox.disabled = true;
                spec_checkbox.checked = false;
                spec_cell.appendChild(spec_checkbox);
                m_map_spec_weapon.set(weapon_type, spec_checkbox);
            }
        });
        
        ARMOR_PROFICIENCY_LIST.forEach(armor_type => {
            var curr_row = m_table_prof_armor.insertRow(m_table_prof_armor.rows.length);
            var name_cell = curr_row.insertCell(curr_row.cells.length);
            var prof_cell = curr_row.insertCell(curr_row.cells.length);
            
            name_cell.innerHTML = armor_type;
            
            var prof_checkbox = document.createElement("input");
            prof_checkbox.type = 'checkbox';
            prof_checkbox.disabled = true;
            prof_checkbox.checked = false;
            prof_cell.appendChild(prof_checkbox);
            m_map_prof_armor.set(armor_type, prof_checkbox);
            
        });
        
        GUI_BLOCK.appendChild(m_table_prof_weapon);
        GUI_BLOCK.appendChild(m_table_prof_armor);
    }
    
    this.Set_Weapon_Proficiency = function(weapon_type, value){
        if (!m_map_prof_weapon.has(weapon_type)){
            console.error("Failed to set proficiency checkbox to weapon type: " + weapon_type);
            return;
        }
        m_map_prof_weapon.get(weapon_type).checked = value;
    }
    
    this.Set_Weapon_Speciality = function(weapon_type, value){
        if (!m_map_spec_weapon.has(weapon_type)){
            console.error("Failed to set specialization checkbox to weapon type: " + weapon_type);
            return;
        }
        m_map_spec_weapon.get(weapon_type).checked = value;
    }
    
    this.Set_Armor_Proficiency = function(armor_type, value){
        if (!m_map_prof_armor.has(armor_type)){
            console.error("Failed to set proficiency checkbox to armor type: " + armor_type);
            return;
        }
        m_map_prof_armor.get(armor_type).checked = value;
    }

//private properties
    var self = this;
    var m_table_prof_weapon; //set on init
    var m_table_prof_armor; //set on init
    var m_map_prof_weapon = new Map();
    var m_map_spec_weapon = new Map();
    var m_map_prof_armor = new Map();

//public properties

//additional initialization
    Init();
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
    
//public methods

//private properties
    var self = this;

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