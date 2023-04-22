function Current_State_t(){
//private methods

//public methods
    this.Get_SaveData_Obj = function(){
        var ret = {
            hp: self.hp,
            sp: self.sp,
            rp: self.rp,
            temp_hp: self.temp_hp
        };
        return ret;
    }

//private properties
    var self = this;

//public properties
    this.hp = 0;
    this.sp = 0;
    this.rp = 0;
    this.temp_hp = 0;

//additional initialization

}