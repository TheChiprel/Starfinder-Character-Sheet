function Layer_Face_t(){
//public methods
    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        //TODO
    }
    
    this.Set_Active_Block = function(evt, block_name){
        let tabcontent, tablinks;

        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("class_sublayer_face");
        for (let i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("face_tab_button");
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(block_name).style.display = "grid";
        if (evt != null){
            evt.currentTarget.className += " active";
        }
    }

//private properties
    var self = this;

//public properties
    this.block_Stats = null;
    this.block_Inventory = null;
    this.block_Abilities = null;
    this.block_Spells = null;
}