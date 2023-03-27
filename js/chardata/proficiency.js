function Prof_Spec_t(){
//private methods

//public methods
    this.Recalc = function(){
        self.checkbox.checked = self.mod_map.Get_Value();
        self.arr_recalc_functions.Call();
    }

//private properties
    var self = this;

//public properties
    this.checkbox; //set on initialization
    this.mod_map = new Boolean_Modifier_t(false, this.Recalc);
    this.arr_recalc_functions = new Recalc_Function_Collection_t();

//additional initialization
}

function Prof_Spec_Collection_t (w_type_arr) {
//private functions
    var Find_Weapon_Spec_By_Name = function(name){
        if (!self.prof_map.has(name)){
            return null;
        }
        //else NOTHING TO DO

        return self.prof_map.get(name);
    }

//public functions
    this.Is_Set = function(in_prof_name){
        let prof = Find_Weapon_Spec_By_Name(in_prof_name);
        if (prof == null){
            console.error("Checking proficiency/specialization of unknown attack type '" + in_prof_name + "'");
            return false;
        }
        //else NOTHING TO DO

        return prof.mod_map.Get_Value();
    }

    this.Add_Recalc_Func = function(in_prof_name, recalc){
        let prof = Find_Weapon_Spec_By_Name(in_prof_name);
        if (prof == null){
            console.error("Failed to add recalculation function to unknown proficiency/specialization '" + in_prof_name + "'");
            return;
        }
        //else NOTHING TO DO

        prof.arr_recalc_functions.Add(recalc);
    }

    this.Remove_Recalc_Func = function(in_prof_name, id){
        let prof = Find_Weapon_Spec_By_Name(in_prof_name);
        if (prof == null){
            console.error("Failed to remove recalculation function from unknown proficiency/specialization '" + in_prof_name + "'");
            return;
        }
        //else NOTHING TO DO

        prof.arr_recalc_functions.Remove(id);
    }

    this.Set = function(w_type, id){
        let prof = Find_Weapon_Spec_By_Name(w_type);
        if (prof == null){
            console.error("Attempting to set proficiency/specialization of unknown attack type '" + w_type + "'");
            return false;
        }
        //else NOTHING TO DO

        prof.mod_map.Add(id);
        prof.Recalc();
    }

    this.Remove = function(w_type, id){
        let prof = Find_Weapon_Spec_By_Name(w_type);
        if (prof == null){
            console.error("Attempting to remove proficiency/specialization of unknown attack type '" + w_type + "'");
            return false;
        }
        //else NOTHING TO DO

        prof.mod_map.Remove(id);
        prof.Recalc();
    }

    this.Get_Bool_Map = function(w_type){
        let prof = Find_Weapon_Spec_By_Name(w_type);
        if (prof == null){
            console.error("Attempting to get proficiency/specialization mod map of unknown attack type '" + w_type + "'");
            return null;
        }

        return prof.mod_map;
    }

//private properties
    var self = this;

//public properties
    this.prof_map = new Map();

//additional initialization
    w_type_arr.forEach(w_type => {
        this.prof_map.set(w_type, new Prof_Spec_t());
    });
}

//===============initial callback assignment===============//

function Init_Callbacks_Proficiency(){
    //Grenade proficiency -> Grenade attack modifier
    chardata.stats.weapon_proficiency.Add_Recalc_Func(
        WEAPON_TYPES.GRENADE,
        new Recalc_Function_t ('grenade_mod', chardata.inventory.grenades.Recalc_Throw_Mod));
}