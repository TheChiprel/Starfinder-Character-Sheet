function Class_Technomancer_t (){
//constants
const CLASS_ABILITY_LVLS = [1, 3, 3, 3, 6, 19, 20];
const HACKS_LVLS = [2, 5, 8, 11, 14, 17, 20];

//private methods

//public methods
    this.Set_Lvl = function(lvl){
        self.lvl = lvl;
        self.class_abilities.Update_Lvl(self.lvl);
        self.hacks.Update_Lvl(self.lvl);
    }

    this.Get_SaveData_Obj = function(){
        var ret = {
            'lvl': self.lvl,
            'hacks': self.adept_skills.Get_SaveData_Obj()
        }
        return ret;
    }

//private properties
    var self = this;

//public properties
    this.lvl = 0;
    this.class_abilities = new Class_Ability_List_t(CLASS_ABILITY_LVLS, "technomancer_class_");
    this.hacks = new Class_Ability_List_t(HACKS_LVLS, "technomancer_hacks");

//additional initialization
}