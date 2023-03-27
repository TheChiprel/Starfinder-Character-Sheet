function Block_Class_Mystic_t(){
//constants
// const ENVOY_ABILITY_LIST = [
    // ["Импровизация посланника"],
    // ["Мастерство"],
    // ["Мастерство в навыке"],
    // ["Мастерский талант"],
    // ["Привычное оружие [Посланник]"],
    // ["Истинный мастер"]
// ];
    
//private methods
    var Init = function(){
        while (m_class_abi_table.rows.length > 1){
            m_class_abi_table.deleteRow(1);
        }
        
        ENVOY_ABILITY_LIST.forEach(ability => {
            if(ability.length == 1){
                var entry = Find_Ability_By_Name(ability[0]);
                if (entry != null){
                    var row = m_class_abi_table.insertRow(m_class_abi_table.rows.length);
            
                    var cell_lvl = row.insertCell(0);
                    var cell_ability = row.insertCell(1);
                    
                    if (entry.lvl != null){
                        cell_lvl.innerHTML = entry.lvl;
                    }
            
                    cell_ability.innerHTML = entry.name;
                }else{
                    console.error("Attempting to add unknown ability to ability table: '" + ability[0] + "'");
                }
            }
            //else: TODO
        });
        
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
    //var m_class_abi_table = document.getElementById('table_class_abilities_envoy');

//public properties

//additional initialization
    //Init();
}