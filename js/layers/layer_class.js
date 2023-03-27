function Layer_Classes_t(){
//private methods
    // var Reset = function(){

    // }
    
    var Get_Class_Obj = function(class_name){
        if (!m_map.has(class_name)){
            return null;
        }
        
        return m_map.get(class_name);
    }

//public methods
    this.Show_Block = function(class_name){
        var class_obj = Get_Class_Obj(class_name);
        if (class_obj == null){
            console.error("Attempting to open unknown class block: '" + class_name + "'");
            return;
        }
        //else NOTHING TO DO

        class_obj.Show_Block();
    }

    this.Hide_Block = function(class_name){
        var class_obj = Get_Class_Obj(class_name);
        if (class_obj == null){
            console.error("Attempting to close unknown class block: '" + class_name + "'");
            return;
        }
        //else NOTHING TO DO

        class_obj.Hide_Block();
    }

    this.Get_Block = function(class_name){
        var class_obj = Get_Class_Obj(class_name);
        if (class_obj == null){
            console.error("Attempting to get access to unknown class block: '" + class_name + "'");
            return;
        }
        //else NOTHING TO DO

        return class_obj;
    }

    this.Load_From_Obj = function(class_name, obj){
        var class_obj = Get_Class_Obj(class_name);
        if (class_obj == null){
            console.error("Attempting to load data for unknown class block: '" + class_name + "'");
            return;
        }
        //else NOTHING TO DO
        
        class_obj.Load_From_Obj(obj);
    }

//private properties
    var self = this;
    var m_map = new Map();

//public properties
    m_map.set(CLASSES.MECHANIC, new Block_Class_Mechanic_t());
    m_map.set(CLASSES.MYSTIC, new Block_Class_Mystic_t());
    m_map.set(CLASSES.OPERATIVE, new Block_Class_Operative_t());
    m_map.set(CLASSES.ENVOY, new Block_Class_Envoy_t());
    m_map.set(CLASSES.SOLDIER, new Block_Class_Soldier_t());
    m_map.set(CLASSES.SOLARION, new Block_Class_Solarion_t());
    m_map.set(CLASSES.TECHNOMANCER, new Block_Class_Technomancer_t());

    // Reset();
}