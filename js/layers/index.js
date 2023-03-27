//TODO: move saving to layers instead of chardata
function OutSaveFile(){
    this.name = chardata.name;

    this.race = null;
    if (chardata.race != null){
        this.race = chardata.race.name;
    }

    this.theme = null;
    if (chardata.theme != null){
        this.theme = chardata.theme.name;
    }

    this.abiscores = {
        points: chardata.stats.abiscores.values.GetPointArray(),
        upgr: chardata.stats.abiscores.values.GetUpgrArray()
    };

    this.skills = chardata.skills.Get_Point_Obj();
    this.classes = chardata.classes.Get_SaveData_Obj();
    this.inventory = chardata.inventory.Get_SaveData_Obj();
    this.abilities = chardata.abilities.Get_SaveData_Obj();
    this.custom = chardata.stats.custom_mods.Get_SaveData_Obj();
}

function InSaveFile(data){
    layers.maininfo.Set_Name(data.name, true);
    if (data.race != null){
        layers.maininfo.Set_Race(data.race, true);
    }
    //else NOTHING TO DO

    if (data.theme != null){
        layers.maininfo.Set_Theme(data.theme, true);
    }
    //else NOTHING TO DO

    layers.abiscores.Load_From_Obj(data.abiscores);
    layers.skills.Load_From_Obj(data.skills);
    layers.maininfo.Load_Classes_From_Obj(data.classes);
    layers.inventory.Load_From_Obj(data.inventory);
    layers.abilities.Load_From_Obj(data.abilities);
    layers.custom.Load_From_Obj(data.custom);
}

function Save_Character_To_File() {
    const filename = "sf_character.json";
    let obj = new OutSaveFile();
    let text = JSON.stringify(obj);

    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function Load_Character_From_File(event) {
    var files = document.getElementById('file_character_upload').files;
    if (files.length <= 0) {
        return false;
    }

    var fr = new FileReader();

    fr.onload = function(e) {
        let text = e.target.result;
        let data = JSON.parse(text);

        chardata.Reset();
        Reset();
        InSaveFile(data);
    }

    fr.readAsText(files.item(0));
}

function Set_Page(evt, layer_name){
    var tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("class_layer_main");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tab_button");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(layer_name).style.display = "grid";
    evt.currentTarget.className += " active";
}

function Layers_t (){
//private methods

//public methods
    this.Reset = function(){
        self.maininfo = new Layer_MainInfo_t();
        self.abiscores = new Layer_Abiscores_t();
        self.skills = new Layer_Skills_t();
        self.inventory = new Layer_Inventory_t();
        self.classes = new Layer_Classes_t();
        self.abilities = new Layer_Abilities_t();
        self.face = null;
        self.custom = new Layer_Custom_t();
    }

//private properties
    var self = this;

//public properties
    this.maininfo;
    this.abiscores;
    this.skills;
    this.inventory;
    this.classes;
    this.abilities;
    this.face;
    this.custom;
}

var layers = new Layers_t();


