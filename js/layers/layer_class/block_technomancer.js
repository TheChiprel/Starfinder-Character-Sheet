function Block_Class_Technomancer_t(){

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
        
        m_hacks.Load_From_Obj(obj.hacks);
        self.spells.Load_From_Obj(obj.spells);
    }

//private properties
    var self = this;
    var m_block = document.getElementById("block_class_details_technomancer");

//public properties
    this.class_abilities = new Leveled_Abilities_Block_t(
        document.getElementById('table_class_abilities_technomancer'),
        null
    );
    
    this.hacks = new Leveled_Abilities_Block_t(
        document.getElementById('table_technomancer_hacks'),
        Ability_Database_GetList(ABILITIES_DATABASE, "Класс", ["Техномант", "Магический хак"], undefined, 20, true)
    );
    
    this.spells = new Block_Spell_List_t(
        "table_spell_list_technomancer",
        Spell_Database_GetList(SPELLS_DATABASE, "Техномант")
    );

//additional initialization
    Init();
}