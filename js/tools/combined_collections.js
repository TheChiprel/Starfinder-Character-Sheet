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
    
    this.Get_Map = function(){
        return m_map;
    }
    
    this.Update = function(){
        //TODO: replace with recalc function collection
        //layers.face.block_abilities.Update();
    }

//private properties
    var self = this;
    var m_map = new Map();

//public properties

//additional initialization
}

function CS_Combined_Collections(){
//private methods

//public methods
    this.Reset = function(){
        self.abilities = new Combined_Collection_t();
        self.spells = new Combined_Collection_t();
    }

//private properties
    var self = this;

//public properties
    this.abilities;
    this.spells;

//additional initialization
}

var combined_collections = new CS_Combined_Collections();