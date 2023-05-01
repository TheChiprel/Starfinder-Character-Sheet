function Block_Class_Envoy_Expertise_Skills_t(){
//constants
const SELECTOR_CLASS = "selector_envoy_expertise_skill";

//private methods
    var Proc_Set_Event = function(row, event){
        if (m_owner == null){
            return;
        }
        
        let skill_name = event.target.value;
        if (skill_name == "---"){
            m_owner.Set(row, null);
        }else{
            m_owner.Set(row, skill_name);
        }
    }

//public methods
    this.Reset = function(owner, expert_lvls, skill_list){
        m_owner = owner;
        while (m_expertise_table.rows.length > 1){
            m_expertise_table.deleteRow(1);
        }

        for (let i = 0; i < expert_lvls.length; i++){
            let cur_lvl = expert_lvls[i];
            var row = m_expertise_table.insertRow(m_expertise_table.rows.length);

            var cell_lvl = row.insertCell(0);
            var cell_skill = row.insertCell(1);

            cell_lvl.innerHTML = cur_lvl;

            if (i == 0){
                cell_skill.innerHTML = SKILLS.SENSE_MOTIVE;
            }else{
                var selector = HTML_Create_Selector(
                    true,
                    skill_list
                );
                selector.onchange = Proc_Set_Event.bind(null, (i-1));
                selector.setAttribute('class', SELECTOR_CLASS);
                cell_skill.appendChild(selector);
            }
        }
    }
    
    this.Set = function(row, name){
        let selectors = document.getElementsByClassName(SELECTOR_CLASS);
        if (name == null){
            selectors[row].value = "---";
        }else{
            selectors[row].value = name;
        }
    }

//private properties
    var self = this;
    var m_expertise_table = document.getElementById('table_class_expertise_skills');
    var m_owner = null;

//public properties

//additional initialization
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
    this.class_abilities = new Block_Ability_List_t(
        document.getElementById('table_class_abilities_envoy'),
        null
    );

    this.expertise_skills = new Block_Class_Envoy_Expertise_Skills_t();
    
    this.improvs = new Block_Ability_List_t(
        document.getElementById('table_class_improvisations'),
        Ability_Database_GetList(ABILITIES_DATABASE, "Класс", ["Посланник", "Импровизация посланника"], undefined, 20, true)
    );

    this.talents = new Block_Ability_List_t(
        document.getElementById('table_class_talents'),
        Ability_Database_GetList(ABILITIES_DATABASE, "Класс", ["Посланник", "Мастерский талант"], undefined, 20, true)
    );

//additional initialization
    Init();
}