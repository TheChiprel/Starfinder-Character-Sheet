function Block_Face_Abiscores_t(){
//private methods
    var Init = function(){
        let abiscores_arr = Object.values(ABISCORES);
        m_outputs_value = new Array(0);
        m_outputs_mods = new Array(0);
        
        while (m_table.rows.length > 1){
            m_table.deleteRow(1);
        }
        
        for (let i = 0; i < abiscores_arr.length; i++){
            var row = m_table.insertRow(m_table.rows.length);
            
            var cell_name = document.createElement('th');
            cell_name.innerHTML = abiscores_arr[i];
            row.appendChild(cell_name);
            let cell_value = row.insertCell(1);
            let cell_value_function = chardata.stats.abiscores.values.Show_Detail_Popup.bind(null, abiscores_arr[i]);
            var cell_value_output = HTML_Create_Output(10, cell_value_function, undefined, "class_output_field");
            let cell_mod = row.insertCell(2);
            let cell_mod_function = chardata.stats.abiscores.modifiers.Show_Detail_Popup.bind(null, abiscores_arr[i]);
            var cell_mod_output = HTML_Create_Output(0, cell_mod_function, undefined, "class_output_field");
            
            cell_value.appendChild(cell_value_output);
            m_outputs_value.push(cell_value_output);
            
            cell_mod.appendChild(cell_mod_output);
            m_outputs_mods.push(cell_mod_output);
        }
    }

//public methods
    this.Update_Value = function(abiscore){
        let abiscores_arr = Object.values(ABISCORES);
        
        for (let i = 0; i < abiscores_arr.length; i++){
            if (abiscore == abiscores_arr[i]){
                m_outputs_value[i].value = chardata.stats.abiscores.values.Get_Sum(abiscore);
                return;
            }
        }
    }
    
    this.Update_Modifier = function(abiscore){
        let abiscores_arr = Object.values(ABISCORES);
        
        for (let i = 0; i < abiscores_arr.length; i++){
            if (abiscore == abiscores_arr[i]){
                m_outputs_mods[i].value = GetModifierStr(chardata.stats.abiscores.modifiers.Get_Sum(abiscore));
                return;
            }
        }
    }

//private properties
    var self = this;
    var m_table = document.getElementById("table_face_abiscores");
    var m_outputs_value;
    var m_outputs_mods;

//public properties

//additional initialization
    Init();
}

function Block_Face_Skills_t(){
//private methods
    var Init = function(){
        let skills_arr = Object.values(SKILLS);
        m_outputs = new Array(0);
        
        while (m_table.rows.length > 0){
            m_table.deleteRow(0);
        }
        
        for (let i = 0; i < skills_arr.length; i++){
            var row = m_table.insertRow(m_table.rows.length);
            
            var cell_name = document.createElement('th');
            cell_name.innerHTML = skills_arr[i];
            row.appendChild(cell_name);

            let cell_mod = row.insertCell(1);
            let cell_mod_function = chardata.skills.Show_Detail_Popup.bind(null, skills_arr[i]);
            var cell_mod_output = HTML_Create_Output(0, cell_mod_function, undefined, "class_output_field");
            
            cell_mod.appendChild(cell_mod_output);
            m_outputs.push(cell_mod_output);
        }
    }

//public methods
    this.Update = function(skill){
        let skills_arr = Object.values(SKILLS);
        
        for (let i = 0; i < skills_arr.length; i++){
            if (skill == skills_arr[i]){
                m_outputs[i].value = GetModifierStr(chardata.skills.Get_Sum(skill));
                return;
            }
        }
    }

//private properties
    var self = this;
    var m_table = document.getElementById("table_face_skills");
    var m_outputs;

//public properties

//additional initialization
    Init();
}

function Block_Face_Stats_t(){
//private methods

//public methods

//private properties
    var self = this;
    

//public properties
    this.abiscores = new Block_Face_Abiscores_t();
    this.skills = new Block_Face_Skills_t();

//additional initialization
}

function Block_Face_Inventory_t(){
//private methods

//public methods

//private properties
    var self = this;

//public properties

//additional initialization
}

function Block_Face_Abilities_t(){
//private methods
    var Clear_Table = function(){
        while (m_table.rows.length > 0){
            m_table.deleteRow(0);
        }
    }
    
    var Init = function(){
        Clear_Table();
        m_table.insertRow(m_table.rows.length).insertCell(0).innerHTML = "У вашего персонажа нет способностей";
        combined_collections.abilities.Set_Update_Function(self.Update);
    }

//public methods
    this.Update = function(){
        let abi_map = combined_collections.abilities.Get_Map();
        Clear_Table();
        abi_map.forEach((collection, key) => {
            //TODO: check active count before
            let abilities = collection.Get_Ability_List();
            if (abilities != null){
                for (let i = 0; i < abilities.length; i++){
                    let row = m_table.insertRow(m_table.rows.length);
                    var cell;
                    if (i == 0){
                        cell = document.createElement('th');
                        row.appendChild(cell);
                    }else{
                        cell = row.insertCell(0);
                    }
                    cell.innerHTML = abilities[i].name;
                    if (abilities[i].descr_func != null){
                        cell.onclick = abilities[i].descr_func;
                    }
                }
                m_table.insertRow(m_table.rows.length).insertCell(0).innerHTML = "&nbsp;";
            }
        });
        if (m_table.rows.length == 0){
            m_table.insertRow(m_table.rows.length).insertCell(0).innerHTML = "У вашего персонажа нет способностей";
        }
    }

//private properties
    var self = this;
    var m_map = new Map();
    var m_table = document.getElementById("table_face_abilities");

//public properties

//additional initialization
    Init();
}

function Block_Face_Spells_t(){
//private methods
    var Clear_Table = function(){
        while (m_table.rows.length > 0){
            m_table.deleteRow(0);
        }
    }
    
    var Init = function(){
        Clear_Table();
        m_table.insertRow(m_table.rows.length).insertCell(0).innerHTML = "У вашего персонажа нет заклинаний";
        combined_collections.spells.Set_Update_Function(self.Update);
    }
    
    var Gather_Spell_String = function(spell_name, daily, dc){
        let str = spell_name;
        if ((daily != null) || (dc != null)){
            let substr = "";
            str += " (";
            if (daily != null){
                substr += "В день: " + daily;
            }
            
            if (dc != null){
                if (substr != ""){
                    substr += "; ";
                }
                substr += "СЛ: " + dc;
            }
            str += substr + ")";
        }
        return str;
    }

//public methods
    this.Update = function(){
        let abi_map = combined_collections.spells.Get_Map();
        Clear_Table();
        abi_map.forEach((collection, key) => {
            //TODO: check active count before
            let spells = collection.Get_Spell_List();
            if (spells != null){
                for (let i = 0; i < spells.length; i++){
                    let row = m_table.insertRow(m_table.rows.length);
                    var cell;
                    if (i == 0){
                        cell = document.createElement('th');
                        row.appendChild(cell);
                        cell.innerHTML = spells[i].name;
                    }else{
                        cell = row.insertCell(0);
                        cell.innerHTML = Gather_Spell_String(spells[i].name, spells[i].daily, spells[i].dc);
                    }
                    
                    if (spells[i].descr_func != null){
                        cell.onclick = spells[i].descr_func;
                    }
                }
                m_table.insertRow(m_table.rows.length).insertCell(0).innerHTML = "&nbsp;";
            }
        });
        if (m_table.rows.length == 0){
            m_table.insertRow(m_table.rows.length).insertCell(0).innerHTML = "У вашего персонажа нет заклинаний";
        }
    }

//private properties
    var self = this;
    var m_map = new Map();
    var m_table = document.getElementById("table_face_spells");

//public properties

//additional initialization
    Init();
}

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
    this.block_stats = new Block_Face_Stats_t();
    this.block_inventory = null;
    this.block_abilities = new Block_Face_Abilities_t();
    this.block_spells = new Block_Face_Spells_t();
}