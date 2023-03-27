function Test_Button1(){
    var mod_map = new Damage_Map_t(Test_Button2);
    mod_map.Add("id0", new Damage_Modifier_t ("1d6", "О", "id0", null, type = MODIFIER_TYPES_T.DICE));
    mod_map.Add("id1", new Damage_Modifier_t ("1d8", "О", "id1", null, type = MODIFIER_TYPES_T.DICE));
    mod_map.Add("id2", new Damage_Modifier_t ("1d10", "О", "id2", null, type = MODIFIER_TYPES_T.DICE));
    mod_map.Add("id3", new Damage_Modifier_t ("10d12", "К", "id3", null, type = MODIFIER_TYPES_T.DICE));
    mod_map.Add("id4", new Damage_Modifier_t ("10d4", "Ко", "id4", null, type = MODIFIER_TYPES_T.DICE));
    mod_map.Add("id5", new Damage_Modifier_t ("10d4", "К", "id5", null, type = MODIFIER_TYPES_T.DICE));
    mod_map.Add("id6", new Damage_Modifier_t ("3d6", "О", "id6", null, type = MODIFIER_TYPES_T.DICE));
    mod_map.Add("id7", new Damage_Modifier_t ("2d8", null, "id7", null, type = MODIFIER_TYPES_T.DICE));
    mod_map.Add("id8", new Damage_Modifier_t (1, null, "id8", null, type = MODIFIER_TYPES_T.NUMBER));
    
    console.log(mod_map.Get_Sum());
}

function Test_Button2(){

}