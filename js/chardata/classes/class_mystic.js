function Class_Mystic_t (){
//constants
// const CLASS_ABILITY_COUNT = 6;

//private methods


//public methods
    this.Set_Lvl = function(lvl){
        self.lvl = lvl;
    }

    this.Get_SaveData_Obj = function(){
        var ret = {
            lvl: self.lvl
        }
        return ret;
    }

//private properties
    var self = this;
    //var m_class_abilities = new Ability_Collection_t("Классовые способности (Мистик)", CLASS_ABILITY_COUNT);

//public properties
    this.lvl = 0;

//additional initialization
}