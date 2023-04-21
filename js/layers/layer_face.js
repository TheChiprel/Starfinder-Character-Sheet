function Block_Face_Abiscores_t(){
//private methods
    var Init = function(){
        let abiscores_arr = Object.values(ABISCORES);
        
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
            var cell_value_output = HTML_Create_Output(10, cell_value_function, undefined, "class_output_field class_output_abiscore_value_" + abiscores_arr[i]);
            let cell_mod = row.insertCell(2);
            let cell_mod_function = chardata.stats.abiscores.modifiers.Show_Detail_Popup.bind(null, abiscores_arr[i]);
            var cell_mod_output = HTML_Create_Output(0, cell_mod_function, undefined, "class_output_field class_output_abiscore_mod_" + abiscores_arr[i]);
            
            cell_value.appendChild(cell_value_output);
            cell_mod.appendChild(cell_mod_output);
        }
    }

//public methods

//private properties
    var self = this;
    var m_table = document.getElementById("table_face_abiscores");

//public properties

//additional initialization
    Init();
}

function Block_Face_Skills_t(){
//private methods
    var Init = function(){
        let skills_arr = Object.values(SKILLS);
        
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
            var cell_mod_output = HTML_Create_Output(0, cell_mod_function, undefined, "class_output_field class_output_skill_" + skills_arr[i]);
            
            cell_mod.appendChild(cell_mod_output);
        }
    }

//public methods

//private properties
    var self = this;
    var m_table = document.getElementById("table_face_skills");

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

function Block_Face_Weapons(){
//constants
    const COLSPAN_VALUE = 5;
    const ROWS_PER_ENTRY = 7;
    const CLASS_WEAPON_OUTFIELD_PREFIX_HIT_MOD = "class_outfield_weapon_mod_";
    const CLASS_WEAPON_OUTFIELD_PREFIX_DMG = "class_outfield_weapon_dmg_";
    
//private methods
    var Init = function(){
        while (m_table.rows.length > 0){
            m_table.deleteRow(0);
        }
    }

//public methods
    this.Add = function(weapon_obj){
        m_arr.push(weapon_obj);
        
        let row_name = m_table.insertRow(m_table.rows.length);
        if (m_table.rows.length != 1){
            row_name.style.borderTop = "2px solid #ccc";
        }
        var cell_name = document.createElement('th');
        cell_name.innerHTML = weapon_obj.entry.name;
        cell_name.colSpan = COLSPAN_VALUE;
        row_name.appendChild(cell_name);
            
        let row_headers =  m_table.insertRow(m_table.rows.length);
        row_headers.style.textAlign = "center";
        let cell_mod_header = row_headers.insertCell(row_headers.cells.length);
        cell_mod_header.innerHTML = "Мод.";
        let cell_dmg_header = row_headers.insertCell(row_headers.cells.length);
        cell_dmg_header.innerHTML = "Урон";
        let cell_dist_header = row_headers.insertCell(row_headers.cells.length);
        cell_dist_header.innerHTML = "Дист.";
        let cell_usage_header = row_headers.insertCell(row_headers.cells.length);
        cell_usage_header.innerHTML = "Расход";
        let cell_capacity_header = row_headers.insertCell(row_headers.cells.length);
        cell_capacity_header.innerHTML = "Ёмкость";
        
        let row_stats = m_table.insertRow(m_table.rows.length);
        row_stats.style.textAlign = "center";
        let cell_mod = row_stats.insertCell(row_stats.cells.length);
        var mod_outfield = HTML_Create_Output(
            GetModifierStr(weapon_obj.hit_mod),
            weapon_obj.Show_Hit_Detail_Popup,
            undefined,
            "class_output_field " + CLASS_WEAPON_OUTFIELD_PREFIX_HIT_MOD +weapon_obj.id
        );
        cell_mod.appendChild(mod_outfield);
        
        let cell_dmg = row_stats.insertCell(row_stats.cells.length);
        var dmg_outfield = HTML_Create_Output(
            GetModifierStr(weapon_obj.damage),
            weapon_obj.Show_Damage_Detail_Popup,
            undefined,
            "class_output_field " + CLASS_WEAPON_OUTFIELD_PREFIX_DMG +weapon_obj.id
        );
        cell_dmg.appendChild(dmg_outfield);
        
        let cell_dist = row_stats.insertCell(row_stats.cells.length);
        if (weapon_obj.entry.dist == null){
            cell_dist.innerHTML = "---";
        }else{
            cell_dist.innerHTML = weapon_obj.entry.dist;
        }
        let cell_usage = row_stats.insertCell(row_stats.cells.length);
        if (weapon_obj.entry.usage == null){
            cell_usage.innerHTML = "---";
        }else{
            cell_usage.innerHTML = weapon_obj.entry.usage;
        }
        
        let cell_capacity = row_stats.insertCell(row_stats.cells.length);
        if (weapon_obj.entry.capacity == null){
            cell_capacity.innerHTML = "---";
        }else{
            cell_capacity.innerHTML = weapon_obj.entry.capacity;
        }
        
        let row_fusions = m_table.insertRow(m_table.rows.length);
        let cell_fusions = row_fusions.insertCell(row_fusions.cells.length);
        cell_fusions.colSpan = COLSPAN_VALUE;
        if (true){ //TODO: fusions
            cell_fusions.innerHTML = "&nbsp;"
            row_fusions.style.display = "none";
        }else{
            //TODO
        }
        
        let row_crits = m_table.insertRow(m_table.rows.length);
        let cell_crits = row_crits.insertCell(row_crits.cells.length);
        cell_crits.colSpan = COLSPAN_VALUE;
        if (weapon_obj.entry.crit_effect == null){
            cell_crits.innerHTML = "&nbsp;"
            row_crits.style.display = "none";
        }else{
            cell_crits.innerHTML = "<b>Крит. эффект:</b> " + weapon_obj.entry.crit_effect;
        }
        
        let row_special = m_table.insertRow(m_table.rows.length);
        let cell_special = row_special.insertCell(row_special.cells.length);
        cell_special.colSpan = COLSPAN_VALUE;
        if (weapon_obj.entry.special == null){
            cell_special.innerHTML = "&nbsp;"
            row_special.style.display = "none";
        }else{
            cell_special.innerHTML = "<b>Особые свойства:</b> " + weapon_obj.entry.special;
        }
        
        let row_additional = m_table.insertRow(m_table.rows.length);
        let cell_additional = row_additional.insertCell(row_additional.cells.length);
        cell_additional.colSpan = COLSPAN_VALUE;
        if (weapon_obj.entry.additional_info == null){
            cell_additional.innerHTML = "&nbsp;"
            row_additional.style.display = "none";
        }else{
            cell_additional.innerHTML = "<b>Дополнительно:</b> " + weapon_obj.entry.additional_info;
        }
    }
    
    this.Remove = function(row){
        let start_table_row = ROWS_PER_ENTRY * row
        for (let i = 0; i < ROWS_PER_ENTRY; i++){
            m_table.deleteRow(start_table_row);
        }
    }
    
    this.Update = function(row){
        //TODO: update by class
    }

//private properties
    var self = this;
    var m_table = document.getElementById("table_face_weapons");
    var m_arr = new Array(0);

//public properties

//additional initialization
    Init();
}

function Block_Face_Equipment(){
    //private methods
    var Clear_Table = function(){
        while (m_table.rows.length > 0){
            m_table.deleteRow(0);
        }
    }
    
    var Init = function(){
        Clear_Table();
        m_table.insertRow(m_table.rows.length).insertCell(0).innerHTML = "У вашего персонажа нет снаряжения";
        combined_collections.equipment.Set_Update_Function(self.Update);
    }

//public methods
    this.Update = function(){
        let equip_map = combined_collections.equipment.Get_Map();
        Clear_Table();
        equip_map.forEach((collection, key) => {
            let equipment = collection.Get_Equip_List();
            if (equipment != null){
                for (let i = 0; i < equipment.length; i++){
                    let row = m_table.insertRow(m_table.rows.length);
                    var cell;
                    if (i == 0){
                        cell = document.createElement('th');
                        row.appendChild(cell);
                    }else{
                        cell = row.insertCell(0);
                    }
                    cell.innerHTML = equipment[i].name;
                    
                    if (equipment[i].descr_func != null){
                        cell.onclick = equipment[i].descr_func;
                    }
                }
                m_table.insertRow(m_table.rows.length).insertCell(0).innerHTML = "&nbsp;";
            }
        });
        if (m_table.rows.length == 0){
            m_table.insertRow(m_table.rows.length).insertCell(0).innerHTML = "У вашего персонажа нет снаряжения";
        }
    }

//private properties
    var self = this;
    var m_map = new Map();
    var m_table = document.getElementById("table_face_equipment");

//public properties

//additional initialization
    Init();
}

function Block_Face_Inventory_t(){
//private methods

//public methods

//private properties
    var self = this;

//public properties
    this.weapons = new Block_Face_Weapons();
    this.equipment = new Block_Face_Equipment();

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
    this.block_inventory = new Block_Face_Inventory_t();
    this.block_abilities = new Block_Face_Abilities_t();
    this.block_spells = new Block_Face_Spells_t();
}