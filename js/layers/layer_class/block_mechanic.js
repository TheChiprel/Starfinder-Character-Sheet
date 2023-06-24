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

//additional initialization
    Init();
}