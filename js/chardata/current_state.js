function Numeric_State_t(class_field, max_value_func){
//constants
    const CLASS_FIELD = class_field;
    
//private methods
    var Init = function(){
        let elems = document.getElementsByClassName(CLASS_FIELD);
        for (let i = 0; i < elems.length; i++){
            elems[i].onchange = Proc_OnChange_Event;
            elems[i].value = 0;
        }
    }
    
    var Proc_OnChange_Event = function(event){
        let value = event.target.value;
        if(isNaN(value)){
            event.target.value = self.value;
            return;
        }
        self.Set_Value(parseInt(value));
    }

    var Set_Field_Values = function(){
        let elems = document.getElementsByClassName(CLASS_FIELD);
        for (let i = 0; i < elems.length; i++){
            elems[i].value = self.value;
        }
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
        
        let elems = document.getElementsByClassName(CLASS_FIELD);
        for (let i = 0; i < elems.length; i++){
            elems[i].max = self.max_value;
            elems[i].value = self.value;
        }
    }
    
    this.Get_SaveData_Obj = function(){
        return self.value;
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
    const CLASS_TEMP_HP = "class_infield_temp_hp";
    const CLASS_HP = "class_infield_hp";
    const CLASS_SP = "class_infield_sp";
    const CLASS_RP = "class_infield_rp";
    
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

//private properties
    var self = this;

//public properties
    this.hp = new Numeric_State_t(CLASS_HP);
    this.sp = new Numeric_State_t(CLASS_SP);
    this.rp = new Numeric_State_t(CLASS_RP);
    this.temp_hp = new Numeric_State_t(CLASS_TEMP_HP);

//additional initialization

}