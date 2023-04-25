function Combined_Collection_t(){
//private methods

//public methods
    this.Add = function(id, collection){
        if (!m_map.has(id)){
            m_map.set(id, collection);
            return self.Update;
        }
        console.warn("Attempting to add duplicate collection to combined collection:" + id);
        return null;
    }
    
    this.Set_Update_Function = function(update_func){
        m_update_func = update_func;
    }
    
    this.Get_Map = function(){
        return m_map;
    }
    
    this.Update = function(){
        if (m_update_func != null){
            m_update_func();
        }
    }
    
    this.Clear = function(){
        m_map.clear()
    }

//private properties
    var self = this;
    var m_map = new Map();
    var m_update_func = null;

//public properties

//additional initialization
}

function CS_Combined_Collections(){
//private methods

//public methods
    this.Reset = function(){
        self.abilities.Clear();
        self.spells.Clear();
        self.equipment.Clear();
    }

//private properties
    var self = this;

//public properties
    this.abilities = new Combined_Collection_t();
    this.spells = new Combined_Collection_t();
    this.equipment = new Combined_Collection_t();

//additional initialization
}

var combined_collections = new CS_Combined_Collections();