//TODO: move to chardata
function Init_Callbacks(){
    Init_Callbacks_Stats();
    Init_Callbacks_Classes();
    Init_Callbacks_Proficiency();
}

function CS_Init(){
    Reset();
    let tabs = document.getElementsByClassName("default_tab");
    for(let i = 0; i < tabs.length;i++){
        tabs[i].dispatchEvent(
            new MouseEvent("click", {
                view: window,
                bubbles: true,
                cancelable: true,
            })
        );
    }
}

function Reset(){
    combined_collections.Reset();
    chardata.Reset();
    layers.Reset();
    Init_Callbacks();
}