function Block_Drone_t(){
//constants
    const GUI_BLOCK = document.getElementById("block_mechanic_drone");

//private methods

//public methods
    this.Reset = function(){
        self.Clear();
    }

    this.Show = function(spec){
        GUI_BLOCK.style.display = "block";
    }
    
    this.Hide = function(){
        GUI_BLOCK.style.display = "none";
    }

//private properties
    var self = this;

//public properties
    

//additional initialization
}

function Block_Exocortex_t(){
//constants
    const GUI_BLOCK = document.getElementById("block_mechanic_exocortex");

//private methods

//public methods
    this.Reset = function(){
        self.Clear();
    }

    this.Show = function(){
        GUI_BLOCK.style.display = "block";
    }
    
    this.Hide = function(){
        GUI_BLOCK.style.display = "none";
    }

//private properties
    var self = this;

//public properties
    this.abilities = new Block_Ability_List_t(
        document.getElementById('table_abilities_exocortex'),
        null
    );

//additional initialization
}

function Block_AI_Level_t(div_block){
//constants
    const DIV_BLOCK = div_block;

//private methods
    var Init = function(){
        DIV_BLOCK.innerHTML = "Распределённое управление:";
        var table = HTML_Create_Table(
            2,
            3,
            true,
            "100%",
            ["40%", "20%", "40%"]
        );
        DIV_BLOCK.appendChild(table);
        var button_incr_exocortex = HTML_Create_Button(
            ">",
            Proc_Incr_Exocortex_Event
        );
        var button_incr_drone = HTML_Create_Button(
            "<",
            Proc_Incr_Drone_Event
        );
        m_outfield_exocortex = HTML_Create_Output(0);
        m_outfield_drone = HTML_Create_Output(0);
        
        table.rows[0].cells[0].innerHTML = "Дрон";
        table.rows[0].cells[1].appendChild(button_incr_exocortex);
        table.rows[0].cells[2].innerHTML = "Экзокортекс";
        table.rows[1].cells[0].appendChild(m_outfield_drone);
        table.rows[1].cells[1].appendChild(button_incr_drone);
        table.rows[1].cells[2].appendChild(m_outfield_exocortex);
    }
    
    var Proc_Incr_Exocortex_Event = function(){
        if (owner == null){
            return;
        }
    }
    
    var Proc_Incr_Drone_Event = function(){
        if (owner == null){
            return;
        }
    }

//public methods
    this.Reset = function(owner){
        
    }
    
    this.Show = function(){
        DIV_BLOCK.style.display = "block";
    }
    
    this.Hide = function(){
        DIV_BLOCK.style.display = "none";
    }
    

//private properties
    var self = this;
    var m_owner = null;
    var m_outfield_drone;
    var m_outfield_exocortex;

//public properties

//additional initialization
    Init();
}

function Block_Mechanic_Speciality_t(){
//constants
    const HTML_BLOCK = document.getElementById("block_mechanic_speciality");

//private methods
    var Init = function(){        
        HTML_BLOCK.innerHTML = "Основная специализация или ИИ";
        var selector_div = HTML_Create_Div();
        HTML_BLOCK.appendChild(selector_div);
        self.main_ai_selector = new Block_Subclass_Selector_t(
            selector_div);
            
        var lvl_div = HTML_Create_Div();
        HTML_BLOCK.appendChild(lvl_div);
        self.ai_lvl_selector = new Block_AI_Level_t(
            lvl_div);
    }

//public methods
    this.Reset = function(){
        self.Hide_All();
    }

    this.Hide_All = function(){
        self.exocortex.Hide();
        self.drone.Hide();
    }

//private properties
    var self = this;
    var m_map = new Map();

//public properties
    this.main_ai_selector; //set in init function
    this.ai_lvl_selector; //set in init function
    this.exocortex = new Block_Exocortex_t();
    this.drone = new Block_Drone_t();

//additional initialization
    Init();
}

function Block_Class_Mechanic_t(){
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
    var m_block = document.getElementById("block_class_details_mechanic");

//public properties
//TODO: get levels properly
    this.class_abilities = new Block_Ability_List_t(
        document.getElementById('table_class_abilities_mechanic'),
        null
    );
    
    this.tricks = new Block_Ability_List_t(
        document.getElementById('table_class_mechanic_tricks'),
        Ability_Database_GetList(ABILITIES_DATABASE, "Класс", ["Механик", "Трюк механика"], undefined, 20, true)
    );

    this.speciality = new Block_Mechanic_Speciality_t();

//additional initialization
    Init();
}