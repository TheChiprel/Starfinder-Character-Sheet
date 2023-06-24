function Block_Drone_t(){
//constants
    const GUI_BLOCK = document.getElementById("block_mechanic_drone");

//private methods

//public methods
    this.Reset = function(){
        self.Clear();
    }

    this.Set = function(spec){
        GUI_BLOCK.style.display = "block";
    }
    
    this.Clear = function(){
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

    this.Set = function(){
        GUI_BLOCK.style.display = "block";
    }
    
    this.Clear = function(){
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

function Block_Mechanic_Speciality_t(){
//constants

//private methods

//public methods
    this.Reset = function(){
        m_map.forEach((obj, key) => {
            obj.Reset();
        });
    }
    
    this.Get_Block = function(spec){
        let spec_obj = m_map.get(spec);
        if (spec_obj == null){
            console.error("Attempt to get block of unknown mechanic speciality:" + spec);
            return null;
        }
        
        return spec_obj;
    }

    this.Set = function(spec){
        let spec_obj = m_map.get(spec);
        if (spec_obj == null){
            console.error("Attempt to set unknown mechanic speciality:" + spec);
            return;
        }
        
        spec_obj.Set();
    }
    
    this.Clear = function(){
        m_map.forEach((obj, key) => {
            obj.Clear();
        });
    }

//private properties
    var self = this;
    var m_map = new Map();

//public properties


//additional initialization
    m_map.set("Дрон", new Block_Drone_t());
    m_map.set("Экзокортекс", new Block_Exocortex_t());
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
    
    this.speciality_selector = new Block_Subclass_Selector_t(
        document.getElementById("block_mechanic_speciality")
    );
    
    this.speciality = new Block_Mechanic_Speciality_t();

//additional initialization
    Init();
}