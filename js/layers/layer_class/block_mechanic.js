function Block_Mechanic_Speciality_t(){
//constants
    const BLOCK_DRONE = document.getElementById("block_mechanic_drone");
    const BLOCK_EXOCORTEX = document.getElementById("block_mechanic_exocortex");

//private methods

//public methods

//private properties
    var self = this;

//public properties
    this.Reset = function(){
        self.Clear();
    }

    this.Set = function(spec){
        self.Clear();
        switch (spec){
        case "Дрон":
            BLOCK_DRONE.style.display = "block";
            break;
        
        case "Экзокортекс":
            BLOCK_EXOCORTEX.style.display = "block";
            break;
            
        default:
            console.error("Attempt to set unknown mechanic speciality: " + spec);
            break;
        }
    }
    
    this.Clear = function(){
        BLOCK_DRONE.style.display = "none";
        BLOCK_EXOCORTEX.style.display = "none";
    }

//additional initialization
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