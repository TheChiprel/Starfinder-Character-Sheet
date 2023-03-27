function Block_Class_Solarion_Class_Abilities_t (class_data){
//constants
const ABILITY_LIST = [
    ["Звёздное воплощение"],
    ["Звёздное откровение"],
    ["Звёздный режим"],
    ["Знаток навыков"],
    ["Сидерическое влияние"],
    ["Привычное оружие [Солярион]"],
    ["Блистательные удары"],
    ["Наивысшие откровения"],
    ["Солярионский натиск"],
    ["Звёздный идеал"]
];

//private methods
    var Init = function(){
        while (m_table.rows.length > 1){
            m_table.deleteRow(1);
        }

        for (let i = 0; i < ABILITY_LIST.length; i++){
            let ability = ABILITY_LIST[i];

            if(ability.length == 1){
                var entry = Find_Ability_By_Name(ability[0]);
                if (entry != null){
                    var row = m_table.insertRow(m_table.rows.length);

                    var cell_lvl = row.insertCell(0);
                    var cell_ability = row.insertCell(1);

                    var onclick_func = m_class_data.class_abilities.Show_Details.bind(null, i);

                    if (entry.lvl != null){
                        cell_lvl.innerHTML = entry.lvl;
                    }

                    cell_ability.innerHTML = entry.name;
                    row.onclick = onclick_func;

                    m_class_data.class_abilities.Set(i, entry);
                }else{
                    console.error("Attempting to add unknown ability to ability table: '" + ABILITY_LIST[i] + "'");
                }
            }
            //else: TODO
        }
    }

//public methods

//private properties
    var self = this;
    var m_table = document.getElementById('table_class_abilities_solarion');
    var m_class_data = class_data;

//public properties

//additional initialization
    Init();
}

function Block_Class_Solarion_Adept_Skills_t(class_data){
//constants
const ADEPT_SKILL_COUNT = 2;
const SKILL_LIST = [
    SKILLS.LIFE_SCIENCE,
    SKILLS.BLUFF,
    SKILLS.SURVIVAL,
    SKILLS.ENGINEERING,
    SKILLS.COMPUTERS,
    SKILLS.CULTURE,
    SKILLS.SLEIGHT_OF_HAND,
    SKILLS.DISGUISE,
    SKILLS.MEDICINE,
    SKILLS.PILOTING,
    SKILLS.PHYSICAL_SCIENCE
];
const SELECTOR_CLASS = "class_selector_solarion_adept_skill";

//private methods
    var Init = function(){
        while (m_table.rows.length > 1){
            m_table.deleteRow(1);
        }

        for (let i = 0; i < ADEPT_SKILL_COUNT; i++){
            var row = m_table.insertRow(m_table.rows.length);

            var cell_skill = row.insertCell(0);

            var selector = HTML_Create_Selector(
                true,
                SKILL_LIST
            );
            selector.onchange = self.Set_From_Selector.bind(null, i, selector);
            selector.setAttribute('class', SELECTOR_CLASS);
            cell_skill.appendChild(selector);
        }
    }

//public methods
    this.Set_From_Selector = function(row, selector){
        let skill = selector.value;

        if (skill == "---"){
            m_class_data.adept_skills.Set(row, null);
        }else{
            m_class_data.adept_skills.Set(row, skill);
        }
    }
    
    this.Set_By_Name = function(row, name){
        if ((name != null) && !(SKILL_LIST.includes(name))){
            console.error("Inappropriate skill to be set as adept skill: '" + name + "'");
            return;
        }
        
        let selectors = document.getElementsByClassName(SELECTOR_CLASS);
        if (name == null){
            selectors[row].value = "---";
        }else{
            selectors[row].value = name;
        }
        m_class_data.adept_skills.Set(row, name);
    }

    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }

        for (let i = 0; i < obj.length; i++){
            self.Set_By_Name(i, obj[i]);
        }
    }

//private properties
    var self = this;
    var m_class_data = class_data;
    var m_table = document.getElementById('table_solarion_adept_skills');

//public properties

//additional initialization
    Init();
}

function Block_Stellar_Modes_t (class_data){
//constants
const ABILITY_LIST = [
    ["Гравитонный режим"],
    ["Нейтральный режим"],
    ["Фотонный режим"]
];

//private methods
    var Init = function(){
        while (m_table.rows.length > 1){
            m_table.deleteRow(1);
        }

        for (let i = 0; i < ABILITY_LIST.length; i++){
            let ability = ABILITY_LIST[i];

            var entry = Find_Ability_By_Name(ability[0]);
            if (entry != null){
                var row = m_table.insertRow(m_table.rows.length);

                var cell_ability = row.insertCell(0);

                var onclick_func = m_class_data.stellar_modes.Show_Details.bind(null, i);

                cell_ability.innerHTML = entry.name;
                row.onclick = onclick_func;

                m_class_data.stellar_modes.Set(i, entry);
            }else{
                console.error("Attempting to add unknown ability to ability table: '" + ABILITY_LIST[i] + "'");
            }
        }
    }

//public methods

//private properties
    var self = this;
    var m_table = document.getElementById('table_solarion_stellar_modes');
    var m_class_data = class_data;

//public properties

//additional initialization
    Init();
}

function Block_Revelations_t(class_data){
//constants

//private methods
    var Init = function(){
        while (m_table.rows.length > 1){
            m_table.deleteRow(1);
        }

        let lvl_list = m_class_data.revelations.Get_Lvl_List();
        for (let i = 0; i < lvl_list.length; i++){
            let cur_lvl = lvl_list[i];

            var row = m_table.insertRow(m_table.rows.length);
            var cell_lvl = row.insertCell(0);
            var cell_ability = row.insertCell(1);
            var cell_add_remove_button = row.insertCell(2);

            cell_lvl.innerHTML = cur_lvl;
            cell_ability.innerHTML = "---";

            var add_func = self.Open_Database.bind(null, i);
            var add_remove_button = HTML_Create_Button("+", add_func); //TODO
            cell_add_remove_button.appendChild(add_remove_button);
        }
    }

//public methods
    this.Open_Database = function(row){
        let lvl_list = m_class_data.revelations.Get_Lvl_List();
        let improv_max_lvl = lvl_list[row];
        m_database = Ability_Database_GetList(ABILITIES_DATABASE, "Класс", ["Солярион", "Звёздное откровение"], undefined, improv_max_lvl, true);

        var table_data = new Array(0);
        var filters = new Array(0);
        var add_func = self.Set_By_Entry_Num.bind(null, row);

        let headers = [
            "Название",
            "Ур.",
            "Описание",
            "Ист."
        ];

        for (let i = 0; i < m_database.length; i++){
            let cur_ability = m_database[i];

            table_data.push([
                cur_ability.name,
                cur_ability.lvl,
                //cur_ability.type,
                cur_ability.descr,
                cur_ability.source]);
        }

        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.FIND,    0, "Название"  ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.RANGE,   1, "Ур."  ));
        //filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.SELECT,   2, "Тип"  ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.SELECT,  3, "Источник"  ));

        Popup_Database.Open(
            table_data,
            add_func,
            filters,
            headers,
            self.Show_Info_Database);
    }
    
    this.Set = function(row, entry){
        let table_row = m_table.rows[row + 1]; // +1 with header
        let cell_name = table_row.cells[1];
        let cell_add_remove_button = table_row.cells[2];
        var remove_func = self.Remove.bind(null, row);
        var show_details_func = self.Show_Details.bind(null, row);

        cell_name.innerHTML = entry.name;
        cell_name.onclick = show_details_func;

        cell_add_remove_button.innerHTML = "";
        var add_remove_button = HTML_Create_Button("X", remove_func);
        cell_add_remove_button.appendChild(add_remove_button);

        m_class_data.revelations.Set(row, entry);

        m_database = null;
        Popup_Database.Close();
    }

    this.Set_By_Entry_Num = function(row, entry_num){
        self.Set(row, m_database[entry_num]);
    }
    
    this.Set_By_Name = function(row, name){
        var entry = Get_Ability_Entry_By_Name(ABILITIES_DATABASE, name);
        if (entry == null){
            console.error("Failed to find ability: '" + name + "'");
            return;
        }
        
        self.Set(row, entry);
    }

    this.Remove = function(row){
        let table_row = m_table.rows[row + 1]; // +1 with header
        let cell_name = table_row.cells[1];
        let cell_add_remove_button = table_row.cells[2];
        var add_func = self.Open_Database.bind(null, row);

        m_class_data.revelations.Remove(row);

        cell_name.innerHTML = "---";
        cell_name.removeAttribute("onclick");

        cell_add_remove_button.innerHTML = "";

        var add_remove_button = HTML_Create_Button("+", add_func);
        cell_add_remove_button.appendChild(add_remove_button);
    }

    this.Show_Details = function(row){
        m_class_data.revelations.Show_Details(row);
    }

    this.Show_Info_Database = function(entry_num){
        let ability = m_database[entry_num];

        Popup_Descr.Call(ability.name, ability.descr);
    }

    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }

        for (let i = 0; i < obj.length; i++){
            if (obj[i] != null){
                self.Set_By_Name(i, obj[i]);
            }
        }
    }

//private properties
    var self = this;
    var m_class_data = class_data;
    var m_table = document.getElementById('table_solarion_revelations');
    var m_database = null;

//public properties

//additional initialization
    Init();
}

function Block_Zeniths_Graviton_t(class_data){
//constants
const FIRST_ZENITH = "Чёрная дыра";

//private methods
    var Init = function(){
        while (m_table.rows.length > 1){
            m_table.deleteRow(1);
        }

        let lvl_list = m_class_data.zeniths_graviton.Get_Lvl_List();
        for (let i = 0; i < lvl_list.length; i++){
            let cur_lvl = lvl_list[i];

            var row = m_table.insertRow(m_table.rows.length);
            var cell_lvl = row.insertCell(0);
            var cell_ability = row.insertCell(1);
            var cell_add_remove_button = row.insertCell(2);

            cell_lvl.innerHTML = cur_lvl;
            
            if (i == 0){
                var entry = Find_Ability_By_Name(FIRST_ZENITH);
                cell_ability.innerHTML = FIRST_ZENITH;
                var show_details_func = self.Show_Details.bind(null, i);
                cell_ability.innerHTML = entry.name;
                cell_ability.onclick = show_details_func;
                m_class_data.zeniths_graviton.Set(i, entry);
            }else{
                cell_ability.innerHTML = "---";

                var add_func = self.Open_Database.bind(null, i);
                var add_remove_button = HTML_Create_Button("+", add_func); //TODO
                cell_add_remove_button.appendChild(add_remove_button);
            }
        }
    }

//public methods
    this.Open_Database = function(row){
        let lvl_list = m_class_data.zeniths_graviton.Get_Lvl_List();
        let improv_max_lvl = lvl_list[row];
        m_database = Ability_Database_GetList(ABILITIES_DATABASE, "Класс", ["Солярион", "Наивысшее звёздное откровение", "Гравитонное"], 2, improv_max_lvl, true);

        var table_data = new Array(0);
        var filters = new Array(0);
        var add_func = self.Set_By_Entry_Num.bind(null, row);

        let headers = [
            "Название",
            "Ур.",
            "Описание",
            "Ист."
        ];

        for (let i = 0; i < m_database.length; i++){
            let cur_ability = m_database[i];

            table_data.push([
                cur_ability.name,
                cur_ability.lvl,
                cur_ability.descr,
                cur_ability.source]);
        }

        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.FIND,    0, "Название"  ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.SELECT,  3, "Источник"  ));

        Popup_Database.Open(
            table_data,
            add_func,
            filters,
            headers,
            self.Show_Info_Database);
    }
    
    this.Set = function(row, entry){
        let table_row = m_table.rows[row + 1]; // +1 with header
        let cell_name = table_row.cells[1];
        let cell_add_remove_button = table_row.cells[2];
        var remove_func = self.Remove.bind(null, row);
        var show_details_func = self.Show_Details.bind(null, row);

        cell_name.innerHTML = entry.name;
        cell_name.onclick = show_details_func;

        cell_add_remove_button.innerHTML = "";
        var add_remove_button = HTML_Create_Button("X", remove_func);
        cell_add_remove_button.appendChild(add_remove_button);

        m_class_data.zeniths_graviton.Set(row, entry);

        m_database = null;
        Popup_Database.Close();
    }

    this.Set_By_Entry_Num = function(row, entry_num){
        self.Set(row, m_database[entry_num]);
    }
    
    this.Set_By_Name = function(row, name){
        var entry = Get_Ability_Entry_By_Name(ABILITIES_DATABASE, name);
        if (entry == null){
            console.error("Failed to find ability: '" + name + "'");
            return;
        }
        
        self.Set(row, entry);
    }

    this.Remove = function(row){
        let table_row = m_table.rows[row + 1]; // +1 with header
        let cell_name = table_row.cells[1];
        let cell_add_remove_button = table_row.cells[2];
        var add_func = self.Open_Database.bind(null, row);

        m_class_data.zeniths_graviton.Remove(row);

        cell_name.innerHTML = "---";
        cell_name.removeAttribute("onclick");

        cell_add_remove_button.innerHTML = "";

        var add_remove_button = HTML_Create_Button("+", add_func);
        cell_add_remove_button.appendChild(add_remove_button);
    }

    this.Show_Details = function(row){
        m_class_data.zeniths_graviton.Show_Details(row);
    }

    this.Show_Info_Database = function(entry_num){
        let ability = m_database[entry_num];

        Popup_Descr.Call(ability.name, ability.descr);
    }

    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }

        for (let i = 1; i < obj.length; i++){//TODO: fix, when saved properly
            if (obj[i] != null){
                self.Set_By_Name(i, obj[i]);
            }
        }
    }

//private properties
    var self = this;
    var m_class_data = class_data;
    var m_table = document.getElementById('table_solarion_zeniths_graviton');
    var m_database = null;

//public properties

//additional initialization
    Init();
}

function Block_Zeniths_Photon_t(class_data){
//constants
const FIRST_ZENITH = "Сверхновая";

//private methods
    var Init = function(){
        while (m_table.rows.length > 1){
            m_table.deleteRow(1);
        }

        let lvl_list = m_class_data.zeniths_photon.Get_Lvl_List();
        for (let i = 0; i < lvl_list.length; i++){
            let cur_lvl = lvl_list[i];

            var row = m_table.insertRow(m_table.rows.length);
            var cell_lvl = row.insertCell(0);
            var cell_ability = row.insertCell(1);
            var cell_add_remove_button = row.insertCell(2);

            cell_lvl.innerHTML = cur_lvl;
            
            if (i == 0){
                var entry = Find_Ability_By_Name(FIRST_ZENITH);
                cell_ability.innerHTML = FIRST_ZENITH;
                var show_details_func = self.Show_Details.bind(null, i);
                cell_ability.innerHTML = entry.name;
                cell_ability.onclick = show_details_func;
                m_class_data.zeniths_photon.Set(i, entry);
            }else{
                cell_ability.innerHTML = "---";

                var add_func = self.Open_Database.bind(null, i);
                var add_remove_button = HTML_Create_Button("+", add_func); //TODO
                cell_add_remove_button.appendChild(add_remove_button);
            }
        }
    }

//public methods
    this.Open_Database = function(row){
        let lvl_list = m_class_data.zeniths_photon.Get_Lvl_List();
        let improv_max_lvl = lvl_list[row];
        m_database = Ability_Database_GetList(ABILITIES_DATABASE, "Класс", ["Солярион", "Наивысшее звёздное откровение", "Фотонное"], 2, improv_max_lvl, true);

        var table_data = new Array(0);
        var filters = new Array(0);
        var add_func = self.Set_By_Entry_Num.bind(null, row);

        let headers = [
            "Название",
            "Ур.",
            "Описание",
            "Ист."
        ];

        for (let i = 0; i < m_database.length; i++){
            let cur_ability = m_database[i];

            table_data.push([
                cur_ability.name,
                cur_ability.lvl,
                cur_ability.descr,
                cur_ability.source]);
        }

        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.FIND,    0, "Название"  ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.SELECT,  3, "Источник"  ));

        Popup_Database.Open(
            table_data,
            add_func,
            filters,
            headers,
            self.Show_Info_Database);
    }
    
    this.Set = function(row, entry){
        let table_row = m_table.rows[row + 1]; // +1 with header
        let cell_name = table_row.cells[1];
        let cell_add_remove_button = table_row.cells[2];
        var remove_func = self.Remove.bind(null, row);
        var show_details_func = self.Show_Details.bind(null, row);

        cell_name.innerHTML = entry.name;
        cell_name.onclick = show_details_func;

        cell_add_remove_button.innerHTML = "";
        var add_remove_button = HTML_Create_Button("X", remove_func);
        cell_add_remove_button.appendChild(add_remove_button);

        m_class_data.zeniths_photon.Set(row, entry);

        m_database = null;
        Popup_Database.Close();
    }

    this.Set_By_Entry_Num = function(row, entry_num){
        self.Set(row, m_database[entry_num]);
    }
    
    this.Set_By_Name = function(row, name){
        var entry = Get_Ability_Entry_By_Name(ABILITIES_DATABASE, name);
        if (entry == null){
            console.error("Failed to find ability: '" + name + "'");
            return;
        }
        
        self.Set(row, entry);
    }

    this.Remove = function(row){
        let table_row = m_table.rows[row + 1]; // +1 with header
        let cell_name = table_row.cells[1];
        let cell_add_remove_button = table_row.cells[2];
        var add_func = self.Open_Database.bind(null, row);

        m_class_data.zeniths_photon.Remove(row);

        cell_name.innerHTML = "---";
        cell_name.removeAttribute("onclick");

        cell_add_remove_button.innerHTML = "";

        var add_remove_button = HTML_Create_Button("+", add_func);
        cell_add_remove_button.appendChild(add_remove_button);
    }

    this.Show_Details = function(row){
        m_class_data.zeniths_photon.Show_Details(row);
    }

    this.Show_Info_Database = function(entry_num){
        let ability = m_database[entry_num];

        Popup_Descr.Call(ability.name, ability.descr);
    }

    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }

        for (let i = 1; i < obj.length; i++){//TODO: fix, when saved properly
            if (obj[i] != null){
                self.Set_By_Name(i, obj[i]);
            }
        }
    }

//private properties
    var self = this;
    var m_class_data = class_data;
    var m_table = document.getElementById('table_solarion_zeniths_photon');
    var m_database = null;

//public properties

//additional initialization
    Init();
}

function Block_Manifistation_t(class_data){
//constants

//private methods
    var Reset = function(){
        m_outfield_name.value = "Не выбрано";
        m_outfield_data.value = "";
        m_button_select.innerHTML = "+";
        m_button_select.onclick = self.Open_Database;
        m_button_activate.onclick = self.Activate;
        m_selector.onchange = self.Selector_Changed;
        m_label_selector.innerHTML = "";
        HTML_Selector_Clear_Options(m_selector);
        
        m_outfield_data.style.display = "none";
        m_label_selector.style.display = "none";
        m_selector.style.display = "none";
        m_button_activate.style.display = "none";
    }

//public methods
    this.Open_Database = function(){
        m_database = Ability_Database_GetList(ABILITIES_DATABASE, "Класс", ["Солярион", "Звёздное воплощение"], undefined, undefined, true);

        var table_data = new Array(0);
        var filters = new Array(0);

        let headers = [
            "Название",
            "Описание",
            "Ист."
        ];

        for (let i = 0; i < m_database.length; i++){
            let cur_ability = m_database[i];

            table_data.push([
                cur_ability.name,
                cur_ability.descr,
                cur_ability.source]);
        }

        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.FIND,    0, "Название"  ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.SELECT,  2, "Источник"  ));

        Popup_Database.Open(
            table_data,
            self.Set_By_Entry_Num,
            filters,
            headers,
            self.Show_Info_Database);
    }
    
    this.Set = function(entry){
        if (!m_class_data.manifistation.Set(entry)){
            return;
        }

        m_outfield_name.value = entry.name;
        m_outfield_name.onclick = self.Show_Details;

        m_button_select.innerHTML = "X";
        m_button_select.onclick = self.Remove;
        
        m_outfield_data.style.display = "inline";
        
        if (!m_class_data.manifistation.IsAlwaysActive()){
            m_button_activate.disabled = false;
            m_button_activate.style.display = "inline";
        }
        
        HTML_Selector_Clear_Options(m_selector);
        let [label_value, option_list] = m_class_data.manifistation.Get_Selector_Options()
        if (option_list != null){
            m_label_selector.innerHTML = label_value;
            HTML_Selector_Add_Option(m_selector, "---");
            HTML_Selector_Add_Option_List(m_selector, option_list);
            m_label_selector.style.display = "inline";
            m_selector.style.display = "inline";
        }

        m_database = null;
        Popup_Database.Close();
    }

    this.Set_By_Entry_Num = function(entry_num){
        self.Set(m_database[entry_num]);
    }
    
    this.Set_By_Name = function(name){
        var entry = Get_Ability_Entry_By_Name(ABILITIES_DATABASE, name);
        if (entry == null){
            console.error("Failed to find ability: '" + name + "'");
            return;
        }
        
        self.Set(entry);
    }

    this.Remove = function(){
        m_class_data.manifistation.Clear();
        Reset();
    }
    
    this.Activate = function(){
        m_class_data.manifistation.Activate();
        m_button_activate.innerHTML = "Деактивировать";
        m_button_activate.onclick = self.Deactivate;
    }
    
    this.Deactivate = function(){
        m_class_data.manifistation.Deactivate();
        m_button_activate.innerHTML = "Активировать";
        m_button_activate.onclick = self.Activate;
    }

    this.Show_Details = function(row){
        m_class_data.manifistation.Show_Details();
    }

    this.Show_Info_Database = function(entry_num){
        let ability = m_database[entry_num];

        Popup_Descr.Call(ability.name, ability.descr);
    }
    
    this.Selector_Changed = function(){
        let value = m_selector.value;
        if (value == "---"){
            m_class_data.manifistation.Selector_Changed(null);
        }else{
            m_class_data.manifistation.Selector_Changed(value);
        }
    }

    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }

        //TODO
        self.Set_By_Name(obj.name);
        if (obj.context == undefined){
            return;
        }
        
        if ((obj.context.selector != undefined) && (obj.context.selector != null)){
            m_selector.value = obj.context.selector;
            self.Selector_Changed();
        }
        
        if ((obj.context.is_active != undefined) && (obj.context.is_active)){
            self.Activate();
        }
    }

//private properties
    var self = this;
    var m_class_data = class_data;
    var m_outfield_name = document.getElementById('outfield_manifistation_name');
    var m_outfield_data = document.getElementById('outfield_manifistation_data');
    var m_button_select = document.getElementById('button_manifistation_select');
    var m_button_activate = document.getElementById('button_manifistation_active');
    var m_label_selector = document.getElementById('label_manifistation_selector');
    var m_selector = document.getElementById('selector_manifistation');
    var m_database = null;

//public properties

//additional initialization
    Reset();
}

function Block_Class_Solarion_t(){

//private methods
    var Init = function(){
        self.Hide_Block();
    }

//public methods
    this.Show_Block = function(){
        m_block.style.display = "block";
    }

    this.Hide_Block = function(){
        m_block.style.display = "none";
    }

    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        m_adept_skills.Load_From_Obj(obj.adept_skills);
        m_revelations.Load_From_Obj(obj.revelations);
        m_zeniths_graviton.Load_From_Obj(obj.zeniths_graviton);
        m_zeniths_photon.Load_From_Obj(obj.zeniths_photon);
        m_manifistation.Load_From_Obj(obj.manifistation);
    }

//private properties
    var self = this;
    var m_block = document.getElementById("block_class_details_solarion");
    var m_class_data = chardata.classes.class_map.get(CLASSES.SOLARION).context;
    var m_class_abilities = new Block_Class_Solarion_Class_Abilities_t(m_class_data);
    var m_adept_skills = new Block_Class_Solarion_Adept_Skills_t(m_class_data);
    var m_stellar_mods = new Block_Stellar_Modes_t(m_class_data);
    var m_revelations = new Block_Revelations_t(m_class_data);
    var m_zeniths_graviton = new Block_Zeniths_Graviton_t(m_class_data);
    var m_zeniths_photon = new Block_Zeniths_Photon_t(m_class_data);
    var m_manifistation = new Block_Manifistation_t(m_class_data);

//public properties

//additional initialization
    Init();
}