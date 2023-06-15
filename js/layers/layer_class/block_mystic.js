function Block_Class_Mystic_t(){

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
    var m_block = document.getElementById("block_class_details_mystic");

//public properties
    this.class_abilities = new Block_Ability_List_t(
        document.getElementById('table_class_abilities_mystic'),
        null
    );
    
    this.connection = new Block_Subclass_Selector_t(
        document.getElementById("block_mystic_connection")
    );
    
    this.spells = new Block_Spell_Book_t(
        "table_spell_list_mystic",
        Spell_Database_GetList(SPELLS_DATABASE, "Мистик")
    );

//additional initialization
    Init();
}