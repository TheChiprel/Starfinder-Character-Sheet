function Block_Class_Soldier_t(){

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
    var m_block = document.getElementById("block_class_details_soldier");

//public properties
    this.class_abilities = new Block_Ability_List_t(
        document.getElementById('table_class_abilities_soldier'),
        null
    );
    this.combat_feats = new Block_Ability_List_t(
        document.getElementById('table_class_combat_feats'),
        Ability_Database_GetList(ABILITIES_DATABASE, "Черта", ["Боевая"], undefined, undefined, true)
    );
    this.gear_boosts = new Block_Ability_List_t(
        document.getElementById('table_class_gear_boosts'),
        Ability_Database_GetList(ABILITIES_DATABASE, "Класс", ["Солдат", "Военная хитрость"], undefined, 20, true)
    );
    
    //TODO

//additional initialization
    Init();
}