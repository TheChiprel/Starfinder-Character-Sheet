function Class_t (entry){
//private methods
    var Get_Class_Context = function(class_name){
        switch(class_name){
        case CLASSES.MECHANIC:
            return new Class_Mechanic_t();
            
        case CLASSES.MYSTIC:
            return new Class_Mechanic_t();
            
        case CLASSES.OPERATIVE:
            return new Class_Operative_t();
            
        case CLASSES.ENVOY:
            return new Class_Envoy_t();
            
        case CLASSES.SOLDIER:
            return new Class_Soldier_t();
            
        case CLASSES.SOLARION:
            return new Class_Solarion_t();
            
        case CLASSES.TECHNOMANCER:
            return new Class_Technomancer_t();
            
        default:
            console.error("Unknown class to be initialized: '" + class_name + "'");
            break;
        }
        return null;
    }

//public methods
    this.Get_SaveData_Obj = function(){
        let ret = new Map();
        ret.set('name', self.entry.name);
        
        if (self.context != null){
            ret.set('context', self.context.Get_SaveData_Obj());
        }
        return Object.fromEntries(ret);
    }

//private properties
    var self = this;
    
//public properties
    this.is_active = false;
    this.entry = entry;
    this.context = Get_Class_Context(entry.name);

//additional initialization
}

function Class_Collection_t (){
//private methods
    var Find_Class_By_Name = function (class_name){
        if (!self.class_map.has(class_name)){
            return null;
        }
        //else NOTHING TO DO

        return self.class_map.get(class_name);
    }
    
    var Activate_Class = function(class_obj){
        let entry = class_obj.entry;
        
        class_obj.is_active = true;
        
        // adding key score
        chardata.stats.abiscores.key.Add(entry.name, entry.key_abiscore);

        // adding class skills
        let skill_list = entry.class_skills.split(", ");
        skill_list.forEach(cur_skill => {
            chardata.skills.Set_Class_Skill(cur_skill, entry.name);
        });

        // adding weapon proficiency
        let prof_list = entry.weapon_prof.split(", ");
        prof_list.forEach(cur_prof => {
            chardata.stats.weapon_proficiency.Set(cur_prof, entry.name);
        });
        
        // adding armor proficiency
        prof_list = entry.armor_prof.split(", ");
        prof_list.forEach(cur_prof => {
            chardata.stats.armor_proficiency.Set(cur_prof, entry.name);
        });
    }
    
    var Deactivate_Class = function(class_obj){
        let entry = class_obj.entry;
        
        class_obj.is_active = false;
        
        // removing key score
        chardata.stats.abiscores.key.Remove(entry.name);

        // adding class skills
        let skill_list = entry.class_skills.split(", ");
        skill_list.forEach(cur_skill => {
            chardata.skills.Remove_Class_Skill(cur_skill, entry.name);
        });

        // removing weapon proficiency
        let prof_list = entry.weapon_prof.split(", ");
        prof_list.forEach(cur_prof => {
            chardata.stats.weapon_proficiency.Remove(cur_prof, entry.name);
        });
        
        // removing armor proficiency
        prof_list = entry.armor_prof.split(", ");
        prof_list.forEach(cur_prof => {
            chardata.stats.armor_proficiency.Remove(cur_prof, entry.name);
        });
    }
    
    var Set_Class_Specialization = function(class_obj){
        let entry = class_obj.entry;
        
        let prof_list = entry.weapon_prof.split(", ");
        prof_list.forEach(cur_prof => {
            if (cur_prof != WEAPON_TYPES.GRENADE){
                chardata.stats.weapon_specialization.Set(cur_prof, entry.name);
            }
            //else NOTHING TO DO
        });
    }
    
    var Clear_Class_Specialization = function(class_obj){
        let entry = class_obj.entry;
        
        let prof_list = class_obj.entry.weapon_prof.split(", ");
        prof_list.forEach(cur_prof => {
            if (cur_prof != WEAPON_TYPES.GRENADE){
                chardata.stats.weapon_specialization.Remove(cur_prof, entry.name);
            }
            //else NOTHING TO DO
        });
    }

//public methods
    this.SetLvl = function(class_name, lvl_to_set){
        var class_obj = Find_Class_By_Name(class_name);
        if (class_obj == null){
            console.error("Attempt to set level for unknown class: '" + class_name + "'");
            return;
        }
        
        if (class_obj.context.lvl == lvl_to_set){
            return;
        }
        
        if (class_obj.context.lvl == 0){
            Activate_Class(class_obj);
        }else if (lvl_to_set == 0){
            Deactivate_Class(class_obj);
        }

        if ((class_obj.context.lvl < 3) && (lvl_to_set >= 3)){
            Set_Class_Specialization(class_obj);
        }else if ((class_obj.context.lvl >= 3) && (lvl_to_set < 3)){
            Clear_Class_Specialization(class_obj);
        }

        class_obj.context.Set_Lvl(lvl_to_set);

        self.arr_recalc_functions.Call();
    }
    
    this.Get_Lvl = function(class_name){
        var class_obj = Find_Class_By_Name(class_name);
        if (class_obj == null){
            console.error("Attempt to get level of unknown class: '" + class_name + "'");
            return;
        }
        
        return class_obj.context.lvl;
    }

    this.Get_SaveData_Obj = function(){
        var ret = new Array(0);
        self.class_map.forEach((cl, ) => {
            if (cl.is_active){
                ret.push(cl.Get_SaveData_Obj());
            }
            //else NOTHING TO DO
        });
        return ret;
    }

//private properties
    var self = this;

//public properties
    this.class_map = new Map();
    this.arr_recalc_functions = new Recalc_Function_Collection_t();

//additional initialization
    CLASS_DATABASE.forEach(entry => {
        this.class_map.set (entry.name, new Class_t (entry));
    });
}

//===============initial callback assignment===============//

function Init_Callbacks_Classes(){
    //total level
    chardata.classes.arr_recalc_functions.Add(
        new Recalc_Function_t ('lvl', chardata.lvl.Recalc));

    //health
    chardata.classes.arr_recalc_functions.Add(
        new Recalc_Function_t ('hp', chardata.stats.hp.Recalc));

    //stamina
    chardata.classes.arr_recalc_functions.Add(
        new Recalc_Function_t ('sp', chardata.stats.sp.Recalc));

    //BAB
    chardata.classes.arr_recalc_functions.Add(
        new Recalc_Function_t ('bab', chardata.stats.attacks.bab.Recalc));

    //saves
    chardata.classes.arr_recalc_functions.Add(
        new Recalc_Function_t ('save_fortitude', chardata.stats.saves.fortitude.Recalc));
    chardata.classes.arr_recalc_functions.Add(
        new Recalc_Function_t ('save_reflex', chardata.stats.saves.reflex.Recalc));
    chardata.classes.arr_recalc_functions.Add(
        new Recalc_Function_t ('save_will', chardata.stats.saves.will.Recalc));

    //total number of skill points
    chardata.classes.arr_recalc_functions.Add(
        new Recalc_Function_t ('skill_points_total', chardata.skills.skill_points.Recalc_Total));
}