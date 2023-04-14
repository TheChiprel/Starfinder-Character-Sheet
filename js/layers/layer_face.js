function Face_Data_Container_t(table_elem){
//private methods

//public methods

//private properties
    var self = this;
    var m_table_elem = elem;
    var m_groups = new Map();

//public properties

//additional initialization
}

function Block_Face_Stats_t(){
//private methods

//public methods

//private properties
    var self = this;

//public properties

//additional initialization
}

function Block_Face_Inventory_t(){
//private methods

//public methods

//private properties
    var self = this;

//public properties

//additional initialization
}

function Block_Face_Abilities_t(){
//private methods
    var Clear_Table = function(){
        while (m_table.rows.length > 0){
            m_table.deleteRow(0);
        }
    }
    
    var Init = function(){
        Clear_Table();
    }

//public methods
    this.Update = function(){
        let list = new Array(0);
        let abi_map = combined_collections.abilities.Get_Map()
        abi_map.forEach((collection, key) => {
            //TODO: check active count before
            let abilities = collection.Get_Ability_List();
            if (abilities != null){
                list = list.concat(abilities);
            }
        });
        
        Clear_Table();
        list.forEach(str => {
            let row = m_table.insertRow(m_table.rows.length);
            let cell = row.insertCell(0);
            cell.innerHTML = str;
        });
    }

//private properties
    var self = this;
    var m_map = new Map();
    var m_table = document.getElementById("table_face_abilities");

//public properties

//additional initialization
    Init();
}

function Block_Face_Spells_t(){
//private methods

//public methods

//private properties
    var self = this;

//public properties

//additional initialization
}

function Layer_Face_t(){
//public methods
    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        //TODO
    }
    
    this.Set_Active_Block = function(evt, block_name){
        let tabcontent, tablinks;

        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("class_sublayer_face");
        for (let i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("face_tab_button");
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(block_name).style.display = "grid";
        if (evt != null){
            evt.currentTarget.className += " active";
        }
    }

//private properties
    var self = this;

//public properties
    this.block_stats = null;
    this.block_inventory = null;
    this.block_abilities = new Block_Face_Abilities_t();
    this.block_spells = null;
}