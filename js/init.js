function Init_Callbacks(){
    Init_Callbacks_Stats();
    Init_Callbacks_Classes();
    Init_Callbacks_Proficiency();
}

function Reset(){
    chardata.Reset();
    layers.Reset();
    Init_Callbacks();
}