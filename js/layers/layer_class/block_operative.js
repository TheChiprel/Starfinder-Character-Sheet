function Block_Class_Operative_t(){

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
    var m_block = document.getElementById("block_class_details_operative");

//public properties
    this.class_abilities = new Block_Ability_List_t(
        document.getElementById('table_class_abilities_operative'),
        null
    );
    
    this.speciality = new Block_Subclass_Selector_t(
        document.getElementById("block_operative_speciality")
    );
    
    this.exploits = new Block_Ability_List_t(
        document.getElementById('table_class_operative_exploits'),
        Ability_Database_GetList(ABILITIES_DATABASE, "Класс", ["Оперативник", "Оперативная уловка"], undefined, 20, true)
    );

//additional initialization
    Init();
}