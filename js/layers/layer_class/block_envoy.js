/*
function Block_Class_Envoy_Class_Abilities_t(class_data){
//constants

//private methods
    var Init = function(){
        while (m_class_abi_table.rows.length > 1){
            m_class_abi_table.deleteRow(1);
        }

        for (let i = 0; i < ENVOY_ABILITY_LIST.length; i++){
            let ability = ENVOY_ABILITY_LIST[i];

            if(ability.length == 1){
                var entry = Find_Ability_By_Name(ability[0]);
                if (entry != null){
                    var row = m_class_abi_table.insertRow(m_class_abi_table.rows.length);

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
                    console.error("Attempting to add unknown ability to ability table: '" + ability[0] + "'");
                }
            }
            //else: TODO
        }
    }

//public methods

//private properties
    var self = this;
    var m_class_abi_table = document.getElementById('table_class_abilities_envoy');
    var m_class_data = class_data;

//public properties

//additional initialization
    Init();
}
*/

function Block_Class_Envoy_Expertise_Skills_t(){
//constants
const ENVOY_EXPERTISE_SKILL_LIST = [
    SKILLS.BLUFF,
    SKILLS.COMPUTERS,
    SKILLS.CULTURE,
    SKILLS.DIPLOMACY,
    SKILLS.DISGUISE,
    SKILLS.ENGINEERING,
    SKILLS.INTIMIDATE,
    SKILLS.MEDICINE
];
const ENVOY_EXPERTISE_LVLS = [1, 1, 5, 9, 13, 17];
const SELECTOR_CLASS = "selector_envoy_expertise_skill";

//private methods
    var Init = function(){
        while (m_expertise_table.rows.length > 1){
            m_expertise_table.deleteRow(1);
        }

        for (let i = 0; i < ENVOY_EXPERTISE_LVLS.length; i++){
            let cur_lvl = ENVOY_EXPERTISE_LVLS[i];
            var row = m_expertise_table.insertRow(m_expertise_table.rows.length);

            var cell_lvl = row.insertCell(0);
            var cell_skill = row.insertCell(1);

            cell_lvl.innerHTML = cur_lvl;

            if (i == 0){
                cell_skill.innerHTML = SKILLS.SENSE_MOTIVE;
            }else{
                var selector = HTML_Create_Selector(
                    true,
                    ENVOY_EXPERTISE_SKILL_LIST
                );
                selector.onchange = self.Set_From_Selector.bind(null, (i-1), selector);
                selector.setAttribute('class', SELECTOR_CLASS);
                cell_skill.appendChild(selector);
            }
        }
    }

//public methods
    this.Set_From_Selector = function(row, selector){
        let skill = selector.value;

        if (skill == "---"){
            //m_class_data.exp_skills.Set(row, null, m_class_data.lvl);
        }else{
            //m_class_data.exp_skills.Set(row, skill, m_class_data.lvl);
        }
    }
    
    this.Set_By_Name = function(row, name){
        if ((name != null) && !(ENVOY_EXPERTISE_SKILL_LIST.includes(name))){
            console.error("Inappropriate skill to be set as expertise skill: '" + name + "'");
            return;
        }
        
        let selectors = document.getElementsByClassName(SELECTOR_CLASS);
        if (name == null){
            selectors[row].value = "---";
        }else{
            selectors[row].value = name;
        }
        //m_class_data.exp_skills.Set(row, name, m_class_data.lvl);
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
    //var m_class_data = class_data;
    var m_expertise_table = document.getElementById('table_class_expertise_skills');

//public properties

//additional initialization
    Init();
}

/*
function Block_Class_Envoy_Improv_t(class_data){
//constants

//private methods
    var Init = function(){
        while (m_improv_table.rows.length > 1){
            m_improv_table.deleteRow(1);
        }

        let lvl_list = m_class_data.improvs.Get_Lvl_List();
        for (let i = 0; i < lvl_list.length; i++){
            let cur_lvl = lvl_list[i];

            var row = m_improv_table.insertRow(m_improv_table.rows.length);
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
        let lvl_list = m_class_data.improvs.Get_Lvl_List();
        let improv_max_lvl = lvl_list[row];
        m_database = Ability_Database_GetList(ABILITIES_DATABASE, "Класс", ["Посланник", "Импровизация посланника"], undefined, improv_max_lvl, true);

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
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.RANGE,   1, "Ур."  ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.SELECT,  3, "Источник"  ));

        Popup_Database.Open(
            table_data,
            add_func,
            filters,
            headers,
            self.Show_Info_Database);
    }
    
    this.Set = function(row, entry){
        let table_row = m_improv_table.rows[row + 1]; // +1 with header
        let cell_name = table_row.cells[1];
        let cell_add_remove_button = table_row.cells[2];
        var remove_func = self.Remove.bind(null, row);
        var show_details_func = self.Show_Details.bind(null, row);

        cell_name.innerHTML = entry.name;
        cell_name.onclick = show_details_func;

        cell_add_remove_button.innerHTML = "";
        var add_remove_button = HTML_Create_Button("X", remove_func);
        cell_add_remove_button.appendChild(add_remove_button);

        m_class_data.improvs.Set(row, entry);

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
        let table_row = m_improv_table.rows[row + 1]; // +1 with header
        let cell_name = table_row.cells[1];
        let cell_add_remove_button = table_row.cells[2];
        var add_func = self.Open_Database.bind(null, row);

        m_class_data.improvs.Remove(row);

        cell_name.innerHTML = "---";
        cell_name.removeAttribute("onclick");

        cell_add_remove_button.innerHTML = "";

        var add_remove_button = HTML_Create_Button("+", add_func);
        cell_add_remove_button.appendChild(add_remove_button);
    }

    this.Show_Details = function(row){
        m_class_data.improvs.Show_Details(row);
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
    var m_improv_table = document.getElementById('table_class_improvisations');
    var m_database = null;

//public properties

//additional initialization
    Init();
}
*/

function Block_Class_Envoy_Talents_t(class_data){
//constants


//private methods
    var Init = function(){
        while (m_table.rows.length > 1){
            m_table.deleteRow(1);
        }

        let lvl_list = m_class_data.talents.Get_Lvl_List();
        for (let i = 0; i < lvl_list.length; i++){
            let cur_lvl = lvl_list[i];

            var row = m_table.insertRow(m_table.rows.length);
            var cell_lvl = row.insertCell(0);
            var cell_ability = row.insertCell(1);
            var cell_add_remove_button = row.insertCell(2);

            cell_lvl.innerHTML = cur_lvl;
            cell_ability.innerHTML = "---";

            var add_func = self.Open_Database.bind(null, i);
            var add_remove_button = HTML_Create_Button("+", add_func);
            cell_add_remove_button.appendChild(add_remove_button);
        }
    }

//public methods
    this.Open_Database = function(row){
        let lvl_list = m_class_data.talents.Get_Lvl_List();
        let max_lvl = lvl_list[row];
        m_database = Ability_Database_GetList(ABILITIES_DATABASE, "Класс", ["Посланник", "Мастерский талант"], undefined, max_lvl, true);

        var table_data = new Array(0);
        var filters = new Array(0);
        var add_func = self.Set.bind(null, row);

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
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.RANGE,   1, "Ур."  ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.SELECT,  3, "Источник"  ));

        Popup_Database.Open(
            table_data,
            add_func,
            filters,
            headers,
            self.Show_Info_Database);
    }

    this.Set = function(row, abi_name){
        let table_row = m_table.rows[row + 1]; // +1 with header
        let cell_name = table_row.cells[1];
        let cell_add_remove_button = table_row.cells[2];
        var remove_func = self.Remove.bind(null, row);
        var show_details_func = self.Show_Details.bind(null, row);

        cell_name.innerHTML = abi_name;
        cell_name.onclick = show_details_func;

        cell_add_remove_button.innerHTML = "";
        var add_remove_button = HTML_Create_Button("X", remove_func);
        cell_add_remove_button.appendChild(add_remove_button);

        //m_class_data.Set_Talent(row, entry);

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

        m_class_data.Remove_Talent(row);

        cell_name.innerHTML = "---";
        cell_name.removeAttribute("onclick");

        cell_add_remove_button.innerHTML = "";

        var add_remove_button = HTML_Create_Button("+", add_func);
        cell_add_remove_button.appendChild(add_remove_button);
    }

    this.Show_Details = function(row){
        m_class_data.Show_Talent_Details(row);
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
    var m_table = document.getElementById('table_class_talents');
    var m_database = null;

//public properties

//additional initialization
    Init();
}

function Block_Class_Envoy_t(){

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

//private properties
    var self = this;
    var m_block = document.getElementById("block_class_details_envoy");

//public properties
//TODO: get levels properly
    this.class_abilities = new Leveled_Abilities_Block_t(
        document.getElementById('table_class_abilities_envoy'),
        null,
        [1, 1, 1, 3, 3, 20],
        true);
        //new Block_Class_Envoy_Class_Abilities_t(m_class_data);
    this.expertise_skills = new Block_Class_Envoy_Expertise_Skills_t();
    this.improvs = new Leveled_Abilities_Block_t(
        document.getElementById('table_class_improvisations'),
        Ability_Database_GetList(ABILITIES_DATABASE, "Класс", ["Посланник", "Импровизация посланника"], undefined, 20, true),
        [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
        false);
    //new Block_Class_Envoy_Improv_t(m_class_data);
    this.talents = new Leveled_Abilities_Block_t(
        document.getElementById('table_class_talents'),
        Ability_Database_GetList(ABILITIES_DATABASE, "Класс", ["Посланник", "Мастерский талант"], undefined, 20, true),
        [3, 7, 11, 15, 19],
        false);
        //= new Block_Class_Envoy_Talents_t(m_class_data);
    

//additional initialization
    Init();
}