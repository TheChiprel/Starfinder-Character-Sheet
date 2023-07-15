//TODO: refactor to load from chardata instead of layers
function InSaveFile(data){

}

function Save_Character_To_File() {
    const filename = "sf_character.json";
    let obj = chardata.Get_SaveData_Obj();
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

        Reset();
        chardata.Load_From_Obj(data);
    }

    fr.readAsText(files.item(0));
}

function Save_Session_Storage(){
    let obj = chardata.Get_SaveData_Obj();
    let text = JSON.stringify(obj);
    localStorage.setItem("temp_save", text);
}

function Load_Session_Storage(){
    let temp_save = localStorage.getItem("temp_save");
    if (temp_save){
        chardata.Load_From_Obj(JSON.parse(temp_save));
    }
}

function Layers_t (){
//private methods

//public methods
    this.Reset = function(){ 
        self.custom.Reset(); //TODO: rework, remove
    }
    

    this.Set_Active_Page = function(evt, layer_name){
        let tabcontent, tablinks;

        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("class_layer_main");
        for (let i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("main_layer_button");
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(layer_name).style.display = "grid";
        if (evt != null){
            evt.currentTarget.className += " active";
        }
    }

//private properties
    var self = this;

//public properties
    this.maininfo = new Layer_MainInfo_t();
    this.abiscores = new Layer_Abiscores_t();
    this.skills = new Layer_Skills_t();
    this.inventory = new Layer_Inventory_t();
    this.classes = new Layer_Classes_t();
    this.abilities = new Layer_Abilities_t();
    this.face = new Layer_Face_t();
    this.custom = new Layer_Custom_t();
}

var layers = new Layers_t();


