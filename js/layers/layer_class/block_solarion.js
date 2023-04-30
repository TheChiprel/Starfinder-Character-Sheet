function Block_Class_Solarion_Adept_Skills_t(class_data){
//constants
const SELECTOR_CLASS = "class_selector_solarion_adept_skill";

//private methods
    var Proc_Selector_OnChange = function(row, event){
        let skill_name = event.target.value;

        if (skill_name == "---"){
            m_owner.Set(row, null);
        }else{
            m_owner.Set(row, skill_name);
        }
    }

//public methods
    this.Reset = function(owner, selector_count, skill_list){
        m_owner = owner;
        while (m_table.rows.length > 1){
            m_table.deleteRow(1);
        }

        for (let i = 0; i < selector_count; i++){
            var row = m_table.insertRow(m_table.rows.length);

            var cell_skill = row.insertCell(0);

            var selector = HTML_Create_Selector(
                true,
                skill_list
            );
            selector.onchange = Proc_Selector_OnChange.bind(null, i);
            selector.setAttribute('class', SELECTOR_CLASS);
            cell_skill.appendChild(selector);
        }
    }

    this.Set = function(row, skill_name){
        let selectors = document.getElementsByClassName(SELECTOR_CLASS);
        if (skill_name == null){
            selectors[row].value = "---";
        }else{
            selectors[row].value = skill_name;
        }
    }

//private properties
    var self = this;
    var m_owner = null;
    var m_table = document.getElementById('table_solarion_adept_skills');

//public properties

//additional initialization
}

//TODO: rework selector as database
function Block_Manifistation_t(){
//constants
    const BLOCK_DATABASE = Ability_Database_GetList(ABILITIES_DATABASE, "Класс", ["Солярион", "Звёздное воплощение"], undefined, undefined, true);

//private methods
    var Proc_Open_Database_Event = function(){
        var table_data = new Array(0);
        var filters = new Array(0);

        let headers = [
            "Название",
            "Описание",
            "Ист."
        ];

        for (let i = 0; i < BLOCK_DATABASE.length; i++){
            let cur_ability = BLOCK_DATABASE[i];

            table_data.push([
                cur_ability.name,
                cur_ability.descr,
                cur_ability.source]);
        }

        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.FIND,    0, "Название"  ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.SELECT,  2, "Источник"  ));

        Popup_Database.Open(
            table_data,
            Proc_Manif_Change_Event,
            filters,
            headers,
            Proc_Show_Database_Info_Event);
    }

    var Proc_Manif_Change_Event = function(entry_num){
        if (m_owner == null){
            return;
        }
        
        let entry = BLOCK_DATABASE[entry_num];
        m_owner.Set(entry)
        Popup_Database.Close();
    }
    
    var Proc_Remove_Event = function(){
        if (m_owner == null){
            return;
        }
        
        m_owner.Clear();
    }
    
    var Proc_Show_Details_Event = function(){
        if (m_owner == null){
            return;
        }
        
        m_owner.Show_Details();
    }
    
    var Proc_Show_Database_Info_Event = function(entry_num){
        let ability = BLOCK_DATABASE[entry_num];

        Popup_Descr.Call(ability.name, ability.descr);
    }
    
    var Proc_Activate_Event = function(){
        if (m_owner == null){
            return;
        }
        
        m_owner.Activate();
    }
    
    var Proc_Deactivate_Event = function(){
        if (m_owner == null){
            return;
        }
        
        m_owner.Deactivate();
    }
    
    var Proc_Selector_OnChange_Event = function(){
        let value = m_selector.value;
        if (value == "---"){
            m_owner.Selector_Changed(null);
        }else{
            m_owner.Selector_Changed(value);
        }
    }

//public methods
    this.Reset = function(owner){
        m_owner = owner;
        self.Clear();
    }
    
    this.Clear = function(){
        m_outfield_name.value = "Не выбрано";
        m_outfield_data.value = "";
        m_button_select.innerHTML = "+";
        m_button_select.onclick = Proc_Open_Database_Event;
        m_button_activate.onclick = Proc_Activate_Event;
        m_selector.onchange = Proc_Selector_OnChange_Event;
        m_label_selector.innerHTML = "";
        HTML_Selector_Clear_Options(m_selector);
        
        m_outfield_data.style.display = "none";
        m_label_selector.style.display = "none";
        m_selector.style.display = "none";
        m_button_activate.style.display = "none";
    }
    
    this.Set = function(manif_name, isAlwaysActive, selector_label, selector_options){
        m_outfield_name.value = manif_name;
        m_outfield_name.onclick = Proc_Show_Details_Event;

        m_button_select.innerHTML = "X";
        m_button_select.onclick = Proc_Remove_Event;
        
        m_outfield_data.style.display = "inline";
        
        if (!isAlwaysActive){
            m_button_activate.disabled = false;
            m_button_activate.style.display = "inline";
        }
        
        HTML_Selector_Clear_Options(m_selector);
        if (selector_options != null){
            m_label_selector.innerHTML = selector_label;
            HTML_Selector_Add_Option(m_selector, "---");
            HTML_Selector_Add_Option_List(m_selector, selector_options);
            m_label_selector.style.display = "inline";
            m_selector.style.display = "inline";
        }

        Popup_Database.Close();
    }
    
    this.Set_Selector_Value = function(value){
        m_selector.value = value;
    }
    
    this.Set_Active_State = function(is_Active){
        if (is_Active){
            m_button_activate.innerHTML = "Деактивировать";
            m_button_activate.onclick = Proc_Deactivate_Event;
        }else{
            m_button_activate.innerHTML = "Активировать";
            m_button_activate.onclick = Proc_Activate_Event;
        }
    }

//private properties
    var self = this;
    var m_owner = null;
    var m_outfield_name = document.getElementById('outfield_manifistation_name');
    var m_outfield_data = document.getElementById('outfield_manifistation_data');
    var m_button_select = document.getElementById('button_manifistation_select');
    var m_button_activate = document.getElementById('button_manifistation_active');
    var m_label_selector = document.getElementById('label_manifistation_selector');
    var m_selector = document.getElementById('selector_manifistation');

//public properties

//additional initialization
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
    this.class_abilities = new Block_Ability_List_t(
        document.getElementById('table_class_abilities_solarion'),
        null,
        true);

    this.adept_skills = new Block_Class_Solarion_Adept_Skills_t();
    
    this.stellar_modes = new Block_Ability_List_t(
        document.getElementById('table_solarion_stellar_modes'),
        null,
        true);
        
    this.revelations = new Block_Ability_List_t(
        document.getElementById('table_solarion_revelations'),
        Ability_Database_GetList(ABILITIES_DATABASE, "Класс", ["Солярион", "Звёздное откровение"], undefined, undefined, true),
        false);
        
    this.zeniths_graviton = new Block_Ability_List_t(
        document.getElementById('table_solarion_zeniths_graviton'),
        Ability_Database_GetList(ABILITIES_DATABASE, "Класс", ["Солярион", "Наивысшее звёздное откровение", "Гравитонное"], 2, undefined, true),
        false);
        
    this.zeniths_photon = new Block_Ability_List_t(
        document.getElementById('table_solarion_zeniths_photon'),
        Ability_Database_GetList(ABILITIES_DATABASE, "Класс", ["Солярион", "Наивысшее звёздное откровение", "Фотонное"], 2, undefined, true),
        false);
        
    this.manifistation = new Block_Manifistation_t();

//additional initialization
    Init();
}