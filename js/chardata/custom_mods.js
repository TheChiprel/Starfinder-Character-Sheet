function Mod_Table_Item_t (id, name, mod_map, category, type, value){
//private methods

//public methods
    this.Change_Value = function (value){
        self.value = value;
        self.mod_map.Change_Value(self.id, self.value, true);
    }

    this.Remove = function(){
        self.mod_map.Remove(self.id, true);
    }

    this.Get_SaveData_Obj = function(){
        var ret = {
            name: self.name,
            category: self.category,
            type: self.type,
            value: self.value
        }
        return ret;
    }

//private properties
    var self = this;

//public properties

//additional initialization
//TODO: privatize?
    this.id = id;
    this.name = name;
    this.mod_map = mod_map;
    this.category = category;
    this.type = type;
    this.value = value;
}

function Bool_Table_Item_t (id, name, bool_map, category, type){
//private methods

//public methods
    this.Remove = function(){
        self.bool_map.Remove(self.id, true);
    }

    this.Get_SaveData_Obj = function(){
        var ret = {
            name: self.name,
            category: self.category,
            type: self.type
        }
        return ret;
    }

//private properties
    var self = this;

//TODO: privatize?
//public properties
    this.id = id;
    this.name = name;
    this.category = category;
    this.type = type;
    this.bool_map = bool_map;

//additional initialization
}

function Mod_Table_t (){
//private methods

//public methods
    this.Add = function(category, type, id, name, value){
        if (id == ""){
            console.warn('Attempting to add modifier with empty name');
            return false;
        }

        for (let i = 0; i < m_arr.length; i++){
            var entry = m_arr[i];

            if ((entry.name == name) && (entry.category == category) && (entry.type == type)){
                console.warn('Attempting to add modifier with same id, category and type');
                return false;
            }
        }

        var owner = layers.custom.Stats_List_Get_Owner(category);
        if (owner == null){
            return false;
        }

        var mod_map = owner.Get_Mod_Map(type);
        if (mod_map == null){
            return false;
        }

        if (!mod_map.Add(id, new Modifier_t(value, name), true)){
            return false;
        }

        m_arr.push(new Mod_Table_Item_t (id, name, mod_map, category, type, value));
        return true;
    }

    this.Change_Value = function(id, new_value){
        for (let i = 0; i < m_arr.length; i++){
            if (m_arr[i].id == id){
                m_arr[i].Change_Value(new_value);
                return;
            }
        }
    }

    this.Remove = function(id){
        for (let i = 0; i < m_arr.length; i++){
            if (m_arr[i].id == id){
                m_arr[i].Remove();
                m_arr.splice(i, 1);
                return;
            }
        }
    }

    this.Get_SaveData_Obj = function(){
        var ret = new Array(0);
        m_arr.forEach(mod => {
            ret.push(mod.Get_SaveData_Obj());
        });
        return ret;
    }

//private properties
    var self = this;
    var m_arr = new Array(0);

//public properties

//additional initialization
}

function Bool_Table_t (){
//private methods

//public methods
    this.Add = function(category, type, id, name){
        if (id == ""){
            console.warn('Attempting to add modifier with empty name');
            return false;
        }

        for (let i = 0; i < m_arr.length; i++){
            var entry = m_arr[i];

            if ((entry.name == name) && (entry.category == category) && (entry.type == type)){
                console.warn('Attempting to add boolean modifier with same id, category and type');
                return false;
            }
        }

        var owner = layers.custom.Prof_List_Get_Owner(category);
        if (owner == null){
            return false;
        }

        var bool_map = owner.Get_Bool_Map(type);
        if (bool_map == null){
            return false;
        }

        if (!bool_map.Add(id, new Boolean_Modifier_t(name), true)){
            return false;
        }

        m_arr.push(new Bool_Table_Item_t (id, name, bool_map, category, type));
        return true;
    }

    this.Remove = function(id){
        for (let i = 0; i < m_arr.length; i++){
            if (m_arr[i].id == id){
                m_arr[i].Remove();
                m_arr.splice(i, 1);
                return;
            }
        }
    }

    this.Get_SaveData_Obj = function(){
        var ret = new Array(0);
        m_arr.forEach(mod => {
            ret.push(mod.Get_SaveData_Obj());
        });
        return ret;
    }

//private properties
    var self = this;
    var m_arr = new Array(0);

//public properties

//additional initialization
}

function Custom_Data_t (){
//private methods

//public methods
    this.Get_SaveData_Obj = function(){
        var ret = {
            stats: self.stats.Get_SaveData_Obj(),
            bools: self.bools.Get_SaveData_Obj(),
            abilities: new Array(0) //TODO
        };
        return ret;
    }

//private properties
    var self = this;

//public properties
    this.stats = new Mod_Table_t();
    this.bools = new Bool_Table_t();
    this.abilities = null;  //TODO

//additional initialization

}