//TODO: rework so value changed through functions
function Block_Face_Abiscores_t(){
//constants

//private methods
    var Init = function(){
        const ABISCORE_ARR = Object.values(ABISCORES);
        
        self.html_element.innerHTML = "Хар-ки:";
        m_table = HTML_Create_Table(
            1,
            3,
            true,
            "100%",
            ["34%", "33%", "33%"]
        );
        
        m_table.rows[0].cells[0].innerHTML = "Хар-ка";
        m_table.rows[0].cells[1].innerHTML = "Значение";
        m_table.rows[0].cells[2].innerHTML = "Мод.";
        
        //Clear_Table();
        
        ABISCORE_ARR.forEach(abiscore => {
            Add_Abiscore(abiscore);
        });
        
        self.html_element.appendChild(m_table);
    }

//public methods
    // var Clear_Table = function(){
        //clearing table
        // while (m_table.rows.length > 1){
            // m_table.deleteRow(1);
        // }
    // }
    
    var Add_Abiscore = function(abiscore){
        var row = m_table.insertRow(m_table.rows.length);
            
        var cell_name = document.createElement('th');
        cell_name.innerHTML = abiscore;
        row.appendChild(cell_name);
        
        let cell_value = row.insertCell(1);
        var cell_value_output = HTML_Create_Output(
            10,
            undefined,
            undefined,
            "class_output_field " + Get_Class_Abiscore_Value(abiscore));
        cell_value.appendChild(cell_value_output);
            
        let cell_mod = row.insertCell(2);
        var cell_mod_output = HTML_Create_Output(
            0,
            undefined,
            undefined,
            "class_output_field " + Get_Class_Abiscore_Mod(abiscore));
        cell_mod.appendChild(cell_mod_output);
    }
    
    var Set_Abiscore_Value = function(){
        //TODO
    }
    
    var Set_Abiscore_Mod = function(){
        //TODO
    }

//private properties
    var self = this;
    var m_table; //created on init

//public properties
    this.html_element = HTML_Create_Div();

//additional initialization
    Init();
}

function Block_Face_Skills_t(){
//private methods
    var Init = function(){
        self.html_element.innerHTML = "Навыки:";
        
        m_table = HTML_Create_Table(
            1,
            2,
            true,
            "100%",
            ["75%", "25%"]
        );
        
        m_table.rows[0].cells[0].innerHTML = "Навык";
        m_table.rows[0].cells[1].innerHTML = "Мод.";
        
        self.html_element.appendChild(m_table);
    }

//public methods
    this.Clear_Table = function(){
        //clearing table
        while (m_table.rows.length > 1){
            m_table.deleteRow(1);
        }
    }
    
    this.Add_Skill = function(skill_name, outfield_class){
        var row = m_table.insertRow(m_table.rows.length);
            
        var cell_name = document.createElement('th');
        cell_name.innerHTML = skill_name;
        row.appendChild(cell_name);

        let cell_mod = row.insertCell(1);
        var cell_mod_output = HTML_Create_Output(
            0,
            undefined,
            undefined,
            "class_output_field " + outfield_class
        );
        
        cell_mod.appendChild(cell_mod_output);
    }

//private properties
    var self = this;
    var m_table; //created on init

//public properties
    this.html_element = HTML_Create_Div();

//additional initialization
    Init();
}

function Block_Face_Stats_t(){
//constants
    GUI_BLOCK = document.getElementById("sublayer_face_stats");
    
//private methods
    var Init = function(){
        GUI_BLOCK.innerHTML = "";
        var left_column = HTML_Create_Div("class_face_stats_column");
        var middle_column = HTML_Create_Div("class_face_stats_column");
        var right_column = HTML_Create_Div("class_face_stats_column");
        
        Init_Left_Column(left_column);
        Init_Middle_Column(middle_column);
        Init_Right_Column(right_column);
        
        GUI_BLOCK.appendChild(left_column);
        GUI_BLOCK.appendChild(middle_column);
        GUI_BLOCK.appendChild(right_column);
    }
    
    var Init_Left_Column = function(clmn_block){
        var div_init = HTML_Create_Div();
        var div_temp_hp = HTML_Create_Div();
        var div_sp = HTML_Create_Div();
        var div_hp = HTML_Create_Div();
        var div_rp = HTML_Create_Div();
        
        Append_Label_Element_Pair(
            div_init,
            "Инициатива:",
            self.initiative.html_element,
            true
        );
        
        Append_Label_Element_Pair(
            div_temp_hp,
            "Временные ПЗ:",
            self.temp_hp.html_element,
            true
        );
        
        Append_Label_Element_Pair(
            div_sp,
            "ПЖ:",
            self.sp_curr.html_element,
            true
        );
        div_sp.appendChild(document.createTextNode(" / "));
        div_sp.appendChild(self.sp_max.html_element);
        
        Append_Label_Element_Pair(
            div_hp,
            "ПЗ:",
            self.hp_curr.html_element,
            true
        );
        div_hp.appendChild(document.createTextNode(" / "));
        div_hp.appendChild(self.hp_max.html_element);
        
        Append_Label_Element_Pair(
            div_rp,
            "ПР:",
            self.rp_curr.html_element,
            true
        );
        div_rp.appendChild(document.createTextNode(" / "));
        div_rp.appendChild(self.rp_max.html_element);
        
        clmn_block.appendChild(div_init);
        clmn_block.appendChild(div_temp_hp);
        clmn_block.appendChild(div_sp);
        clmn_block.appendChild(div_hp);
        clmn_block.appendChild(div_rp);
        clmn_block.appendChild(self.abiscores.html_element);
    }
    
    var Init_Middle_Column = function(clmn_block){
        clmn_block.appendChild(self.skills.html_element);
    }
    
    var Init_Right_Column = function(clmn_block){
        var div_speed = HTML_Create_Div();
        var div_attack = HTML_Create_Div();
        var div_defense = HTML_Create_Div();
        var div_saves = HTML_Create_Div();
        
        Init_Speed_Block(div_speed);
        Init_Attack_Block(div_attack);
        Init_Defense_Block(div_defense);
        Init_Saves_Block(div_saves);
        
        
        clmn_block.appendChild(div_speed);
        clmn_block.appendChild(div_attack);
        clmn_block.appendChild(div_defense);
        clmn_block.appendChild(div_saves);

    }
    
    var Init_Speed_Block = function(div_speed){
        div_speed.innerHTML = "Скорости:";
        div_speed.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            div_speed,
            "Наземная:",
            self.speed_land.html_element,
            false
        );
        div_speed.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            div_speed,
            "Полёт:",
            self.speed_flight.html_element,
            false
        );
        div_speed.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            div_speed,
            "Рытьё:",
            self.speed_burrow.html_element,
            false
        );
        div_speed.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            div_speed,
            "Плавание:",
            self.speed_swim.html_element,
            false
        );
        div_speed.appendChild(HTML_Create_BR());

        Append_Label_Element_Pair(
            div_speed,
            "Лазание:",
            self.speed_climb.html_element,
            false
        );
    }
    
    var Init_Attack_Block = function(div_attack){
        div_attack.innerHTML = "Атака:";
        div_attack.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            div_attack,
            WEAPON_MODIFIER.MELEE,
            self.attack_melee.html_element,
            false
        );
        div_attack.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            div_attack,
            WEAPON_MODIFIER.OPERATIVE,
            self.attack_operative.html_element,
            false
        );
        div_attack.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            div_attack,
            WEAPON_MODIFIER.RANGED,
            self.attack_ranged.html_element,
            false
        );
        div_attack.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            div_attack,
            WEAPON_MODIFIER.THROWN,
            self.attack_thrown.html_element,
            false
        );
    }
    
    var Init_Defense_Block = function(div_defense){
        div_defense.innerHTML = "Защита:";
        div_defense.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            div_defense,
            "ЭКБ:",
            self.eac.html_element,
            false
        );
        div_defense.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            div_defense,
            "ККБ:",
            self.kac.html_element,
            false
        );
        div_defense.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            div_defense,
            "Против манёвров:",
            self.against_maneuvers.html_element,
            false
        );
        div_defense.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            div_defense,
            "Устойчивости:",
            self.resistance.html_element,
            false
        );
        div_defense.appendChild(HTML_Create_BR());

        Append_Label_Element_Pair(
            div_defense,
            "СУ:",
            self.dr.html_element,
            false
        );
        
        //TODO: remove later...
        self.dr.Set_Value(0);
    }
    
    var Init_Saves_Block = function(div_saves){
        div_saves.innerHTML = "Скорости:";
        div_saves.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            div_saves,
            "Стойкость:",
            self.save_fort.html_element,
            false
        );
        div_saves.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            div_saves,
            "Реакция:",
            self.save_refl.html_element,
            false
        );
        div_saves.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            div_saves,
            "Воля:",
            self.save_will.html_element,
            false
        );
    }

//public methods

//private properties
    var self = this;

//public properties
    this.initiative = new GUI_Element_OutField_t();
    
    this.temp_hp = new GUI_Element_InNumber_t();
    
    this.sp_curr = new GUI_Element_InNumber_t();
    this.sp_max = new GUI_Element_OutField_t();
    
    this.hp_curr = new GUI_Element_InNumber_t();
    this.hp_max = new GUI_Element_OutField_t();
    
    this.rp_curr = new GUI_Element_InNumber_t();
    this.rp_max = new GUI_Element_OutField_t();
    
    this.abiscores = new Block_Face_Abiscores_t();
    
    this.skills = new Block_Face_Skills_t();
    
    this.speed_land = new GUI_Element_OutField_t();
    this.speed_flight = new GUI_Element_OutField_t();
    this.speed_burrow = new GUI_Element_OutField_t();
    this.speed_swim = new GUI_Element_OutField_t();
    this.speed_climb = new GUI_Element_OutField_t();
    
    this.attack_melee = new GUI_Element_OutField_t();
    this.attack_operative = new GUI_Element_OutField_t();
    this.attack_ranged = new GUI_Element_OutField_t();
    this.attack_thrown = new GUI_Element_OutField_t();
    
    this.eac = new GUI_Element_OutField_t();
    this.kac = new GUI_Element_OutField_t();
    this.against_maneuvers = new GUI_Element_OutField_t();
    this.resistance = new GUI_Element_OutField_t();
    this.dr = new GUI_Element_OutField_t();
    
    this.save_fort = new GUI_Element_OutField_t();
    this.save_refl = new GUI_Element_OutField_t();
    this.save_will = new GUI_Element_OutField_t();

//additional initialization
    Init();
}

function Block_Face_Weapons(){
//constants
    const COLSPAN_VALUE = 5;
    const ROWS_PER_ENTRY = 7;
    const CLASS_WEAPON_OUTFIELD_PREFIX_HIT_MOD = "class_outfield_weapon_mod_";
    const CLASS_WEAPON_OUTFIELD_PREFIX_DMG = "class_outfield_weapon_dmg_";
    
//private methods
    var Find_Weapon_Start_Row = function(id){
        for (let i = 0; i < m_table.rows.length; i += ROWS_PER_ENTRY){
            if (m_table.rows[i].name == id){
                return i;
            }
        }
        
        return null;
    }

//public methods
    this.Reset = function(){
        while (m_table.rows.length > 0){
            m_table.deleteRow(0);
        }
    }

    this.Add = function(weapon_obj, id){
        let row_name = m_table.insertRow(m_table.rows.length);
        row_name.name = id;
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
    
    this.Remove = function(id){
        let start_table_row = Find_Weapon_Start_Row(id);
        if (id == null){
            //TODO: warn user
            return;
        }
        
        for (let i = 0; i < ROWS_PER_ENTRY; i++){
            m_table.deleteRow(start_table_row);
        }
    }
    
    this.Update = function(row){
        //TODO
    }

//private properties
    var self = this;
    var m_table = document.getElementById("table_face_weapons");

//public properties

//additional initialization

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
        
        self.block_current_state.Load_From_Obj(obj);
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