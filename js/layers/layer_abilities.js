var Find_Ability_By_Name = function(ability_str, database_arr = ABILITIES_DATABASE){
    let name_to_find = ability_str.replace(/ *\([^)]*\) */g, "");

    for (let i = 0; i < database_arr.length; i++){
        var entry = database_arr[i];
        if (entry.name == name_to_find){
            return entry;
        }
        //else NOTHING TO DO
    }

    return null;
}

function Spell_Likes_Abilities_Block(){
//private methods
    var Get_Default_Values = function(entry){
        var res = {
            lvl: 0,
            daily: 1,
            dc: 10 + chardata.stats.abiscores.modifiers.Get_Sum(ABISCORES.CHA)
        };
        
        let temp_lvl = parseInt(entry.lvl);
        if (temp_lvl == NaN){
            temp_lvl = parseInt(entry.lvl[0]);
        } //else NOTHING TO DO
        res.lvl = temp_lvl;
        res.dc += temp_lvl;
        
        return res;
    }

    var Get_Spell_Row_Num_By_Name = function(name){
        for (let i = 1; i < m_table.rows.length; i++){
            var row = m_table.rows[i];
            if(row.name == name){
                return i;
            }
        }

        return null;
    }

    var Reset = function(){
        while (m_table.rows.length > 1){
            m_table.deleteRow(1);
        }
    }

    this.Add = function(num, lvl = undefined, daily = undefined, dc = undefined){
        var row;
        var entry = SPELLS_DATABASE[num];

        //checking abilities with same name
        var row_name;
        for (let id_enum = 0; id_enum < 100; id_enum++){
            let found = false;
            let cur_name = entry.name + "_" + id_enum;
            for (let i = 0; i < m_table.rows.length; i++){
                if (m_table.rows[i].name == cur_name){
                    found = true;
                    break;
                }
                //else NOTHING TO DO
            }

            if (!found){
                row_name = cur_name;
                break;
            }
            //else NOTHING TO DO
        }

        if (row_name == undefined){
            console.error("More than 100 spells with name '" + entry.name + "', can't add more!");
            return;
        }
        //else NOTHING TO DO

        row = m_table.insertRow(m_table.rows.length);
        row.name = row_name;
        
        var name_cell = row.insertCell(0);
        var daily_cell = row.insertCell(1);
        var dc_cell = row.insertCell(2);
        var remove_cell = row.insertCell(3);
        
        var onclick_func = self.Show_Descr.bind(null, row.name);
        
        name_cell.innerHTML = entry.name;
        name_cell.onclick = onclick_func;
        
        var defaults = Get_Default_Values(entry);
        
        chardata.abilities.spell_like.Add(row_name, entry, true, defaults.lvl, defaults.daily, defaults.dc);
        
        var remove_func = self.Remove.bind(null, row_name);
        var remove_button = HTML_Create_Button("X", remove_func);
        remove_cell.innerHTML = "";
        remove_cell.appendChild(remove_button);
        
        daily_cell.appendChild(
            HTML_Create_Input_Number(
                1,
                1,
                100,
                "layers.abilities.spell_likes.Set_Daily('" + row.name + "', Number(event.target.value))")
        );
        dc_cell.appendChild(HTML_Create_Input_Number(
            defaults.dc,
            1,
            100,
            "layers.abilities.spell_likes.Set_DC('" + row.name + "', Number(event.target.value))")
        );
    }
    
    this.Remove = function(row_name){
        var row_num = Get_Spell_Row_Num_By_Name(row_name);
        if (row_num != null){
            chardata.abilities.spell_like.Remove(row_num - 1);
            m_table.deleteRow(row_num);
        }//else TODO
    }
    
    //TODO: set lvl
    
    this.Set_DC = function(row_name, value){
        var row_num = Get_Spell_Row_Num_By_Name(row_name);
        if (row_num != null){
            chardata.abilities.spell_like.Set_DC(row_num - 1, value);
        }//else TODO
    }
    
    this.Set_Daily = function(row_name, value){
        var row_num = Get_Spell_Row_Num_By_Name(row_name);
        if (row_num != null){
            chardata.abilities.spell_like.Set_Daily(row_num - 1, value);
        }//else TODO
    }

    this.Show_Descr = function(row_name){
        let row_num = Get_Spell_Row_Num_By_Name(row_name);
        chardata.abilities.spell_like.Show_Detail_Popup(row_num - 1);
    }

    this.Open_Database = function(row){
        var table_data = new Array(0);
        var filters = new Array(0);
        m_feat_to_set = row;

        let headers = [
            "Название",
            "Ур.",
            "Школа",
            "Дист.",
            "Область",
            "Эффект",
            "Цель",
            "Длит.",
            "Испытание",
            "УкМ",
            "Описание",
            "Ист."
        ];

        for (let i = 0; i < SPELLS_DATABASE.length; i++){
            let cur_spell = SPELLS_DATABASE[i];

            table_data.push([
                cur_spell.name,
                cur_spell.lvl,
                cur_spell.school,
                cur_spell.dist,
                cur_spell.area,
                cur_spell.effect,
                cur_spell.target,
                cur_spell.duration,
                cur_spell.save,
                cur_spell.magic_resistance,
                cur_spell.descr,
                cur_spell.source,
            ]);
        }

        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.FIND,    0, "Название" ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.FIND,    1, "Ур."      ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.FIND,    2, "Школа"   ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.SELECT,  11, "Источник" ));

        Popup_Database.Open(table_data, self.Add, filters, headers, self.Show_Info_Database);
    }
    
    this.Show_Info_Database = function(entry_num){
        let spell = SPELLS_DATABASE[entry_num];
        
        Popup_Descr.Call(spell.name, Get_Spell_Descr(spell));
    }
    
    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        obj.forEach(spell => {            
            for (let i = 0; i < SPELLS_DATABASE.length; i++){
                let entry = SPELLS_DATABASE[i];
                if (spell.name == entry.name){
                    self.Add(i, spell.lvl, spell.daily, spell.dc);
                    break;
                }
                //else NOTHING TO DO
            }
        });
    }

//private properties
    var self = this;
    var m_table = document.getElementById('table_spell_likes');

//public properties

//additional initialization
    Reset();
}

function Custom_Abilities_Block_t(){
//private methods
    var Reset = function(){
        m_table.style.display = "none";
        while(m_table.rows.length > 1){
            m_table.deleteRow(1);
        }

        m_outfield_map = new Map();
    }

    var Get_Item_Row_Num_By_Name = function(name){
        for (let i = 0; i < m_table.rows.length - 1; i++){
            var row = m_table.rows[i + 1];
            if(row.name == name){
                return i;
            }
        }

        return null;
    }

//public methods
    this.Add_Row = function(){
        var row;

        //checking for free id
        var row_name;
        for (let id_enum = 0; id_enum < 100; id_enum++){
            let found = false;
            let cur_name = "ability_custom_" + id_enum;
            for (let i = 0; i < m_table.rows.length; i++){
                if (m_table.rows[i].name == cur_name){
                    found = true;
                    break;
                }
                //else NOTHING TO DO
            }

            if (!found){
                row_name = cur_name;
                break;
            }
            //else NOTHING TO DO
        }

        if (row_name == undefined){
            console.log("More than 100 custom abilities '" + entry.name + "', can't add more!");
            return;
        }
        //else NOTHING TO DO

        row = m_table.insertRow(m_table.rows.length);
        row.name = row_name;
        
        var outfield_name = HTML_Create_Input_Text(
            "",
            onchange_elem = "layers.abilities.custom_block.Change_Name('" + row.name + "', event.target.value)",
            id = undefined,
            class_elem = undefined);
        var outfield_descr = HTML_Create_Input_Text(
            "",
            onchange_elem = "layers.abilities.custom_block.Change_Descr('" + row.name + "', event.target.value)",
            id = undefined,
            class_elem = undefined);

        for (let i = 0; i < 3; i++){
            var cell = row.insertCell(i);
            switch (i){
                case 0:
                    cell.appendChild(outfield_name);
                    break;

                case 1:
                    cell.appendChild(outfield_descr);
                    break;

                case 2:
                    var remove_func = self.Remove_Row.bind(null, row.name);
                    var button_remove = HTML_Create_Button("X", remove_func);
                    cell.appendChild(button_remove);
                    break;

                default:
                    cell.innerHTML = "WIP";
                    break;
            }
        }
        m_table.style.display = "block";

        m_outfield_map.set(row_name, {
           "name": outfield_name,
           "descr": outfield_descr
        });

        chardata.abilities.custom.Add(row_name);
        return row_name;
    }

    this.Remove_Row = function(id){
        let row_num = Get_Item_Row_Num_By_Name(id);
        if (row_num != null){
            chardata.abilities.custom.Remove(row_num);
            m_table.deleteRow(row_num + 1);
        }

        if (m_table.rows.length == 1){ //only header: remove
            m_table.style.display = "none";
        }

        m_outfield_map.delete(id);
    }

    this.Change_Name = function(id, value, update_outfield = false){
        let row_num = Get_Item_Row_Num_By_Name(id);
        if (row_num != null){
            chardata.abilities.custom.Change_Name(row_num, value);
            if (update_outfield){
               m_outfield_map.get(id).name.value = value;
            }
            //else NOTHING TO DO
        }
        //else NOTHING TO DO
    }

    this.Change_Descr = function(id, value, update_outfield = false){
        let row_num = Get_Item_Row_Num_By_Name(id);
        if (row_num != null){
            chardata.abilities.custom.Change_Descr(row_num, value);
            if (update_outfield){
               m_outfield_map.get(id).descr.value = value;
            }
            //else NOTHING TO DO
        }
        //else NOTHING TO DO
    }

    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        obj.forEach(item => {
            let id = self.Add_Row();
            self.Change_Name(id, item.name, true);
            self.Change_Descr(id, item.descr, true);
        });
    }

//private properties
    var m_table = document.getElementById("table_abilities_custom");
    var m_outfield_map;
    var self = this;

//additional initialization
    Reset();
}

function Layer_Abilities_t(){
//public methods

//private properties
    var self = this;

//public properties
    this.race = new Block_Ability_List_t(
        document.getElementById('table_abilities_race'),
        null
    );
    
    this.theme = new Block_Ability_List_t(
        document.getElementById('table_abilities_theme'),
        null
    );
    this.feats = new Block_Ability_List_t(
        document.getElementById('table_abilities_feats'),
        Ability_Database_GetList(ABILITIES_DATABASE, "Черта")
    );
    this.other = new Block_Ability_List_t(
        document.getElementById('table_abilities_other'),
        ABILITIES_DATABASE,
        true
    );
    
    this.spell_likes = new Block_Spell_List_t(
        document.getElementById('table_spell_likes'),
        SPELLS_DATABASE,
        true
    );//= new Spell_Likes_Abilities_Block();
    
    this.custom_block = new Custom_Abilities_Block_t();
}