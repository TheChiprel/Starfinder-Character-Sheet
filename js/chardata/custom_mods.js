function Mod_Table_Item_t (id, name, mod_map, category, type, value){
//private methods

//public methods
    this.Change_Value = function (value){
        self.value = value;
        self.mod_map.Change_Value(self.id, self.value, true);
        //TODO: change value in selector
    }

    this.Remove = function(){
        self.mod_map.Remove(self.id, true);
        layers.custom.Remove(self.id);
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
    this.id = id;
    this.name = name;
    this.mod_map = mod_map;
    this.category = category;
    this.type = type;
    this.value = value;

//additional initialization
}

function Bool_Table_Item_t (id, name, bool_map, category, type){
//private methods
    var Init = function(){
        m_infield_value = layers.custom.Add_Bool(
            self.id,
            self.name,
            self.category,
            self.type
        );
    }

//public methods
    this.Remove = function(){
        self.bool_map.Remove(self.id, true);
        layers.custom.Remove(self.id);
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
    var m_infield_value;

//TODO: privatize?
//public properties
    this.id = id;
    this.name = name;
    this.category = category;
    this.type = type;
    this.bool_map = bool_map;

//additional initialization
    Init();
}

function Mod_Table_t (){
//private methods
    var Init = function(){
        layers.custom.sublayer_stats.Set_Callback(self.Add);
    }
    
    var Get_Free_ID = function(){
        //searching free id
        let id = null;
        for (let id_enum = 0; id_enum < 1000; id_enum++){
            let found = false;
            let cur_name = "custom_stats_" + id_enum;
            for (let i = 0; i < m_arr.length; i++){
                if (m_arr[i].id == cur_name){
                    found = true;
                    break;
                }
                //else NOTHING TO DO
            }

            if (!found){
                id = cur_name;
                break;
            }
            //else NOTHING TO DO
        }
        return id;
    }

//public methods
    this.Add = function(category, type, name, value){
        let id = Get_Free_ID();
        if (id == null){
            console.warn("Custom modifier limit of 1000 exceeded. Can't add modifier.");
            return false;
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
        
        layers.custom.Add_Modifier(id, name, category, type, value);
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
    
    this.Get_Value = function(id){
        for (let i = 0; i < m_arr.length; i++){
            if (m_arr[i].id == id){
                return m_arr[i].value;
            }
        }
        
        return null;
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
    Init();
}

function Bool_Table_t (){
//private methods
    var Init = function(){
        layers.custom.sublayer_bools.Set_Callback(self.Add);
    }

    var Get_Free_ID = function(){
        //searching free id
        let id = null;
        for (let id_enum = 0; id_enum < 1000; id_enum++){
            let found = false;
            let cur_name = "custom_bool_" + id_enum;
            for (let i = 0; i < m_arr.length; i++){
                if (m_arr[i].id == cur_name){
                    found = true;
                    break;
                }
                //else NOTHING TO DO
            }

            if (!found){
                id = cur_name;
                break;
            }
            //else NOTHING TO DO
        }
        return id;
    }

//public methods
    this.Add = function(category, type, name){
        let id = Get_Free_ID();

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
    
    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        obj.forEach(mod => {
            self.Add(mod.category, mod.type, mod.id, mod.name);
        });
    }

//private properties
    var self = this;
    var m_arr = new Array(0);

//public properties

//additional initialization
    Init();
}

function Custom_Data_t (){
//private methods
    var Init = function(){
        layers.custom.Clear_Table();
    }

//public methods
    this.Get_SaveData_Obj = function(){
        var ret = {
            stats: self.stats.Get_SaveData_Obj(),
            bools: self.bools.Get_SaveData_Obj(),
        };
        return ret;
    }
    
    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        obj.stats.Load_From_Obj(obj.stats);
        obj.bools.Load_From_Obj(obj.bools);
        
        /*
        obj.stats.forEach(mod => {
           self.Add_Custom_Stats(mod.name, mod.category, mod.type, mod.value);
        });
        obj.bools.forEach(mod => {
           self.Add_Custom_Bool(mod.name, mod.category, mod.type);
        });
        */
    }

//private properties
    var self = this;

//public properties
    this.stats = new Mod_Table_t();
    this.bools = new Bool_Table_t();

//additional initialization
    Init();
}