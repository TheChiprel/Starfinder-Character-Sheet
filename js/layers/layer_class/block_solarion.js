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

//public properties
    this.class_abilities = new Leveled_Abilities_Block_t(
        document.getElementById('table_class_abilities_solarion'),
        null,
        true);

    //this.adept_skills = new Block_Class_Solarion_Adept_Skills_t(m_class_data);
    
    this.stellar_modes = new Leveled_Abilities_Block_t(
        document.getElementById('table_solarion_stellar_modes'),
        null,
        true);
        
    this.revelations = new Leveled_Abilities_Block_t(
        document.getElementById('table_solarion_revelations'),
        Ability_Database_GetList(ABILITIES_DATABASE, "Класс", ["Солярион", "Звёздное откровение"], undefined, undefined, true),
        false);
        
    this.zeniths_graviton = new Leveled_Abilities_Block_t(
        document.getElementById('table_solarion_zeniths_graviton'),
        Ability_Database_GetList(ABILITIES_DATABASE, "Класс", ["Солярион", "Наивысшее звёздное откровение", "Гравитонное"], 2, undefined, true),
        false);
        
    this.zeniths_photon = new Leveled_Abilities_Block_t(
        document.getElementById('table_solarion_zeniths_photon'),
        Ability_Database_GetList(ABILITIES_DATABASE, "Класс", ["Солярион", "Наивысшее звёздное откровение", "Фотонное"], 2, undefined, true),
        false);
        
    //this.manifistation = new Block_Manifistation_t(m_class_data);

//additional initialization
    Init();
}