function Numeric_State_t(
    gui_block
){
//constants
    const GUI_BLOCK = gui_block;
    
//private methods
    var Init = function(){
        GUI_BLOCK.Reset(self.Set_Value, self.Get_Value);
        GUI_BLOCK.Set_Min_Value(self.min_value);
        GUI_BLOCK.Set_Max_Value(self.max_value);
        Set_Field_Values();
    }
    
    var Set_Field_Values = function(){
        GUI_BLOCK.Set_Value(self.value);
    }

//public methods
    this.Set_Value = function(new_value){
        if (self.value != new_value){
            if (new_value > self.max_value){
                self.value = self.max_value;
            }else if (new_value < self.min_value){
                self.value = self.min_value;
            }else{
                self.value = new_value;
            }
            Set_Field_Values();
        }
    }
    
    this.Get_Value = function(){
        return self.value;
    }
    
    
    this.Change_Value = function(diff){
        //TODO
    }
    
    this.Set_Max_Value_Obj = function(obj){
        m_max_value_obj = obj;
        self.Update_Max_Value();
    }
    
    this.Update_Max_Value = function(){
        let prev_value = self.max_value;
        if (m_max_value_obj == null){
            return;
        }
        
        self.max_value = m_max_value_obj.sum;
        if (self.max_value == prev_value){
            return;
        }
        
        if (self.value > self.max_value){
            self.value = self.max_value;
        }else if (self.max_value > prev_value){
            self.value += (self.max_value - prev_value);
        }
        
        GUI_BLOCK.Set_Max_Value(self.max_value);
        GUI_BLOCK.Set_Value(self.value);
    }
    
    this.Get_SaveData_Obj = function(){
        return self.value;
    }
    
    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        self.Set_Value(obj);
    }

//private properties
    var self = this;
    var m_max_value_obj = null;

//public properties
    this.value = 0;
    this.min_value = 0;
    this.max_value = 9999;

//additional initialization
    Init();
}

function Current_State_t(){
//constants
    
//private methods

//public methods
    this.Get_SaveData_Obj = function(){
        //TODO: call to 
        var ret = {
            hp: self.hp.Get_SaveData_Obj(),
            sp: self.sp.Get_SaveData_Obj(),
            rp: self.rp.Get_SaveData_Obj(),
            temp_hp: self.temp_hp.Get_SaveData_Obj()
        };
        return ret;
    }
    
    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        self.hp.Load_From_Obj(obj.hp);
        self.sp.Load_From_Obj(obj.sp);
        self.rp.Load_From_Obj(obj.rp);
        self.temp_hp.Load_From_Obj(obj.temp_hp);
    }

//private properties
    var self = this;

//public properties
    this.hp = new Numeric_State_t(layers.face.block_stats.hp_curr);
    this.sp = new Numeric_State_t(layers.face.block_stats.sp_curr);
    this.rp = new Numeric_State_t(layers.face.block_stats.rp_curr);
    this.temp_hp = new Numeric_State_t(layers.face.block_stats.temp_hp);

//additional initialization

}