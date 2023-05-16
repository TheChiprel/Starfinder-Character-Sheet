//TODO: remove unnececcary events, replace with direct call to owner function
function Weapon_Block_t(){
//constants
    const CLASS_WEAPON_OUTFIELD_PREFIX_HIT_MOD = "class_outfield_weapon_mod_";
    const CLASS_WEAPON_OUTFIELD_PREFIX_DMG = "class_outfield_weapon_dmg_";
    
//private methods
     var Get_Weapon_Row_Num_By_Name = function(name){
        for (let i = 1; i < m_table.rows.length; i++){
            var row = m_table.rows[i];
            if(row.name == name){
                return i;
            }
        }

        return null;
    }
    
    var Proc_Event_Remove = function(id){
        if (m_owner == null){
            return;
        }
        
        m_owner.Remove(id);
    }

//public methods
    this.Reset = function(owner){
        m_owner = owner;
        m_table.style.display = "none";
        while(m_table.rows.length > 1){
            m_table.deleteRow(1);
        }
    }
    
    this.Proc_Event_Add = function(entry_num){
        if (m_owner == null){
            return;
        }
        
        m_owner.Add(WEAPON_DATABASE[entry_num]);
    }

    this.Add = function(weapon, id, can_user_remove = true){
        var row = m_table.insertRow(m_table.rows.length);
        row.name = id;
        
        for (let i = 0; i < 11; i++){
            var cell = row.insertCell(i);
            var outfield;
            var func;
            switch (i){
                case 0:
                    cell.innerHTML = weapon.entry.name;
                    break;

                case 1:
                    func = weapon.Show_Hit_Detail_Popup;
                    outfield = HTML_Create_Output(
                        GetModifierStr(weapon.hit_mod),
                        undefined,
                        undefined,
                        CLASS_WEAPON_OUTFIELD_PREFIX_HIT_MOD + id)
                    cell.onclick = func;
                    cell.appendChild(outfield);
                    break;

                case 2:
                    func = weapon.Show_Damage_Detail_Popup;
                    outfield = HTML_Create_Output(
                        weapon.damage,
                        undefined,
                        undefined,
                        CLASS_WEAPON_OUTFIELD_PREFIX_DMG + id)
                    cell.onclick = func;
                    cell.appendChild(outfield);
                    break;

                case 3:
                    if (weapon.entry.dist == null){
                        cell.innerHTML = "---";
                    }else{
                        cell.innerHTML = weapon.entry.dist + " ф.";
                    }
                    break;

                case 4:
                    if (weapon.entry.usage == null){
                        cell.innerHTML = "---";
                    }else{
                        cell.innerHTML = weapon.entry.usage;
                    }
                    break;

                case 5:
                    if (weapon.entry.capacity == null){
                        cell.innerHTML = "---";
                    }else{
                        cell.innerHTML = weapon.entry.capacity;
                    }
                    break;

                //case 6: //TODO
                //    break;

                case 7:
                    if (weapon.entry.crit_effect == null){
                        cell.innerHTML = "---";
                    }else{
                        cell.innerHTML = weapon.entry.crit_effect;
                    }
                    break;

                case 8:
                    if (weapon.entry.special == null){
                        cell.innerHTML = "---";
                    }else{
                        cell.innerHTML = weapon.entry.special;
                    }
                    break;

                case 9:
                    if (weapon.entry.additional_info == null){
                        cell.innerHTML = "---";
                    }else{
                        cell.innerHTML = weapon.entry.additional_info;
                    }
                    break;

                case 10:
                    func = Proc_Event_Remove.bind(null, id);
                    var button_remove = HTML_Create_Button("X", func);
                    if (!can_user_remove){
                        button_remove.disabled = true;
                    }
                    cell.appendChild(button_remove);
                    break;

                default:
                    cell.innerHTML = "WIP";
                    break;
            }
        }

        m_table.style.display = "block";

        return;
    }

    this.Remove = function(row_name){
        var row_num = Get_Weapon_Row_Num_By_Name(row_name);
        if (row_num != null){
            m_table.deleteRow(row_num);
        }//else TODO

        if (m_table.rows.length == 1){ //only header: remove
            m_table.style.display = "none";
        }
    }

    //TODO: ???
    /*
    this.Change_Base_Damage = function(row_name, new_value){
        var row_num = Get_Weapon_Row_Num_By_Name(row_name);
        if (row_num != null){
            chardata.inventory.weapons.Change_Base_Damage(row_num, new_value);
        }
    }
    
    
    this.Set_Crystal = function(row_name, entry){
        var row_num = Get_Weapon_Row_Num_By_Name(row_name);
        if (row_num != null){
            chardata.inventory.weapons.Set_Crystal(row_num, entry);
        }
    }
    
    this.Remove_Crystal = function(row_name){
        var row_num = Get_Weapon_Row_Num_By_Name(row_name);
        if (row_num != null){
            chardata.inventory.weapons.Remove_Crystal(row_num);
        }
    }*/

    this.Open_Database = function(){
        var table_data = new Array(0);
        var filters = new Array(0);

        let headers = [
            "Название",
            "Руки",
            "Тип",
            "Подтип",
            "Ур.",
            "Цена",
            "Дист.",
            "Урон",
            null,
            "Крит. Эффект",
            "Боеприпасы",
            "Ёмкость",
            "Расход",
            "Вес",
            "Особые свойства",
            "Дополнительно",
            "Ист."
        ];

        for (let i = 0; i < WEAPON_DATABASE.length; i++){
            var row = Object.values(WEAPON_DATABASE[i]);
            for (let j = 0; j < row.length; j++){
                if (row[j] == null){
                    row[j] = "";
                }
            }
            table_data.push(row);
        }

        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.FIND,    0, "Название"     ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.SELECT,  1, "Руки"         ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.SELECT,  2, "Тип"          ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.SELECT,  3, "Подтип"       ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.RANGE,   4, "Уровень"      ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.RANGE,   5, "Цена"         ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.SELECT, 16, "Источник"     ));

        Popup_Database.Open(table_data, self.Proc_Event_Add, filters, headers, self.Show_Info_Database);
    }

    this.Show_Info_Database = function(entry_num){
        let entry = WEAPON_DATABASE[entry_num];
        let descr = "Тип: " + entry.hands + ", " + entry.type;

        if (entry.subtype != null){
            descr += "(" + entry.subtype + ")";
        }
        //else NOTHING TO DO

        descr += "\nУр.: " + entry.lvl;

        if (entry.price != null){
            descr += "\nЦена: " + entry.price;
        }

        if (entry.dist != null){
            descr += "\nДистанция: " + entry.dist;
        }
        //else NOTHING TO DO

        descr +=  "\nУрон: " + entry.damage + " " + entry.damage_type;

        if (entry.crit_effect != null){
            descr += "\nКрит. эффект: " + entry.crit_effect;
        }
        //else NOTHING TO DO

        if (entry.ammo_type != null){
            descr += "\nТип боеприпасов: " + entry.ammo_type;
        }
        //else NOTHING TO DO

        if (entry.capacity != null){
            descr += "\nЁмкость: " + entry.capacity;
        }
        //else NOTHING TO DO

        if (entry.usage != null){
            descr += "\nРасход: " + entry.usage;
        }
        //else NOTHING TO DO

        if (entry.weight != null){
            descr += "\nВес: " + entry.weight;
        }
        //else NOTHING TO DO

        if (entry.special != null){
            descr += "\nОсобые свойства: " + entry.special;
        }
        //else NOTHING TO DO

        if (entry.additional_info != null){
            descr += "\nДополнительно: " + entry.additional_info;
        }
        //else NOTHING TO DO

        Popup_Descr.Call(entry.name, descr);
    }

//private properties
    var self = this;
    var m_table = document.getElementById("table_inventory_weapons");
    var m_owner = null;

//additional initialization
}

function Grenade_Block_t(){
//private methods
    var Get_Grenade_Row_Num_By_Name = function(name){
        for (let i = 1; i < m_table.rows.length; i++){
            var row = m_table.rows[i];
            if(row.name == name){
                return i;
            }
        }

        return null;
    }
    
    var Proc_Event_Add = function(entry_num){
        if (m_owner == null){
            return;
        }
        
        m_owner.Add(GRENADE_DATABASE[entry_num]);
    }
    
    var Proc_Event_Remove = function(id){
        if (m_owner == null){
            return;
        }
        
        m_owner.Remove(id);
    }
    
    var Proc_Event_Change_Count = function(id, event){
        if (m_owner == null){
            return;
        }
        
        let new_value = event.target.value;
        if (isNaN(new_value)){
            let count_to_set = m_owner.Get_Count(id);
            if (count_to_set == null){
                event.target.value = "";
            }else{
                event.target.value = count_to_set;
            }
            return;
        }
        m_owner.Change_Count(id, parseInt(new_value));
    }

//public methods
    this.Reset = function(owner){
        m_owner = owner;
        
        m_table.style.display = "none";
        while(m_table.rows.length > 1){
            m_table.deleteRow(1);
        }
    }
    
    this.Add = function(id, item){
        var row = m_table.insertRow(m_table.rows.length);
        row.name = id;
        
        for (let i = 0; i < 5; i++){
            var cell = row.insertCell(i);
            var func;
            switch (i){
                case 0:
                    cell.innerHTML = item.entry.name;
                    func = item.Show_Descr;
                    cell.onclick = func;
                    break;

                case 1:
                    cell.innerHTML = item.dc;
                    func = item.Show_DC_Detail_Popup;
                    cell.onclick = func;
                    item.Set_GUI_DC_Cell(cell);
                    break;

                case 2:
                    cell.innerHTML = item.entry.weight;
                    break;

                case 3:
                    var count = HTML_Create_Input_Number(
                        value = item.count,
                        min = 1,
                        max = 99,
                        Proc_Event_Change_Count.bind(null, id)
                    );
                    cell.appendChild(count);
                    item.Set_GUI_Count_Field(count);
                    break;

                case 4:
                    func = Proc_Event_Remove.bind(null, id);
                    var button_remove = HTML_Create_Button("X", func);
                    cell.appendChild(button_remove);
                    break;

                default:
                    cell.innerHTML = "WIP";
                    break;
            }
        }
        m_table.style.display = "block";
    }

    this.Remove = function(row_name){
        var row_num = Get_Grenade_Row_Num_By_Name(row_name);
        if (row_num != null){
            m_table.deleteRow(row_num);
        }//else TODO

        if (m_table.rows.length == 1){ //only header: remove
            m_table.style.display = "none";
        }
    }

    this.Open_Database = function(){
        var table_data = new Array(0);
        var filters = new Array(0);

        let headers = [
            "Название",
            "Ур.",
            "Цена",
            "Вес",
            "Особое свойство",
            "Ист."
        ];

        for (let i = 0; i < GRENADE_DATABASE.length; i++){
            var cur_entry = GRENADE_DATABASE[i];
            var row = [
                cur_entry.name,
                cur_entry.lvl,
                cur_entry.price,
                cur_entry.weight,
                cur_entry.special,
                cur_entry.source
            ];
            if (cur_entry.additional_info != null){
                row[4] += "\n" + cur_entry.additional_info;
            }
            table_data.push(row);
        }

        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.FIND,    0, "Название"     ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.RANGE,   1, "Уровень"      ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.RANGE,   2, "Цена"         ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.SELECT,  5, "Источник"     ));

        Popup_Database.Open(table_data, Proc_Event_Add, filters, headers, self.Show_Info_Database);
    }

    this.Show_Info_Database = function(entry_num){
        let entry = GRENADE_DATABASE[entry_num];
        let descr = "Ур.: " + entry.lvl;

        if (entry.price != null){
            descr += "\nЦена: " + entry.price;
        }

        if (entry.weight != null){
            descr += "\nВес: " + entry.weight;
        }
        //else NOTHING TO DO

        if (entry.special != null){
            descr += "\nОсобые свойства: " + entry.special;
        }
        //else NOTHING TO DO

        if (entry.additional_info != null){
            descr += "\nДополнительно: " + entry.additional_info;
        }
        //else NOTHING TO DO

        Popup_Descr.Call(entry.name, descr);
    }

//private properties
    var m_owner = null;
    var m_table = document.getElementById("table_inventory_grenades");
    var self = this;

//additional initialization
}

function Armor_Upgr_Block_t(){
//private methods
    var Get_Row_Num_By_Name = function(name){
        for (let i = 1; i < m_table.rows.length; i++){
            var row = m_table.rows[i];
            if(row.name == name){
                return i;
            }
        }

        return null;
    }

    var Proc_Add_Event = function(entry_num){
        if (m_owner == null){
            return;
        }
        
        m_owner.Add_Armor_Upgr(ARMOR_UPGR_DATABASE[entry_num]);
    }

//public methods
    this.Reset = function(owner){
        m_owner = owner;
        
        m_table.style.display = "none";
        while(m_table.rows.length > 1){
            m_table.deleteRow(1);
        }
        m_outfield_used_slots.value = 0;
        m_outfield_max_slots.value = 0;
    }

    this.Add = function(id, entry){
        var row = m_table.insertRow(m_table.rows.length);
        row.name = id;

        for (let i = 0; i < 4; i++){    //TODO: magic
            var cell = row.insertCell(i);
            var func;
            switch (i){
                case 0:
                    cell.innerHTML = entry.name;
                    func = m_owner.Open_Descr_Tooltip.bind(null, id);
                    cell.onclick = func;
                    break;

                case 1:
                    cell.innerHTML = entry.slots;
                    break;

                case 2:
                    cell.innerHTML = entry.weight;
                    break;

                case 3:
                    func = m_owner.Remove_Armor_Upgr.bind(null, id);
                    var button_remove = HTML_Create_Button("X", func);
                    cell.appendChild(button_remove);
                    break;

                default:
                    cell.innerHTML = "WIP";
                    break;
            }
        }
        m_table.style.display = "block";
    }

    this.Remove = function(id){
        var row_num = Get_Row_Num_By_Name(id);
        if (row_num != null){
            m_table.deleteRow(row_num);
        }//else TODO

        if (m_table.rows.length == 1){ //only header: remove
            m_table.style.display = "none";
        }
    }

    this.Open_Database = function(){
        var table_data = new Array(0);
        var filters = new Array(0);

        let headers = [
            "Название",
            "Ур.",
            "Цена",
            "Описание",
            "Мест",
            "Тип брони",
            "Вес",
            "Ист."
        ];

        //TODO: filter by current armor type?
        for (let i = 0; i < ARMOR_UPGR_DATABASE.length; i++){
            var cur_entry = ARMOR_UPGR_DATABASE[i];
            var row = [
                cur_entry.name,
                cur_entry.lvl,
                cur_entry.price,
                cur_entry.descr,
                cur_entry.slots,
                cur_entry.armor_type,
                cur_entry.weight,
                cur_entry.source
            ];
            table_data.push(row);
        }

        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.FIND,    0,  "Название"  ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.RANGE,   1,  "Уровень"   ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.RANGE,   2,  "Цена"      ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.SELECT,  5,  "Тип брони" ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.SELECT,  7,  "Источник"  ));

        Popup_Database.Open(table_data, Proc_Add_Event, filters, headers, self.Show_Info_Database);
    }

    this.Show_Info_Database = function(entry_num){
        let entry = ARMOR_UPGR_DATABASE[entry_num];
        let descr = "Ур.: " + entry.lvl;

        if (entry.price != null){
            descr += "\nЦена: " + entry.price;
        }

        descr += "\nМест: " + entry.slots;
        descr += "\nТип брони: " + entry.armor_type;
        descr += "\nВес: " + entry.weight;

        descr += "\n\n" + entry.descr;

        Popup_Descr.Call(entry.name, descr);
    }

    this.Show_Popup = function(name){
        chardata.inventory.armor.Open_Descr_Tooltip(name);
    }

    this.Update_Slots_Used = function(value){
        m_outfield_used_slots.value = value;
    }

    this.Update_Slots_Max = function(value){
        m_outfield_max_slots.value = value;
    }

//private properties
    var m_owner = null;
    var m_table = document.getElementById("table_inventory_armor_upgr");
    var m_outfield_used_slots = document.getElementById("outfield_armor_upgrades_used");
    var m_outfield_max_slots = document.getElementById("outfield_armor_upgrades_max");
    var self = this;

//additional initialization
}

function Armor_Block_t(){
//constants
const armor_outfields_t = {
    name:               document.getElementById("outfield_armor_name"),
    eac:                document.getElementById("outfield_armor_eac"),
    kac:                document.getElementById("outfield_armor_kac"),
    max_agi:            document.getElementById("outfield_armor_max_agi"),
    skill_penalty:      document.getElementById("outfield_armor_penalty"),
    speed:              document.getElementById("outfield_armor_speed"),
    additional:         document.getElementById("outfield_armor_additional"),

    pow_max_weapons:    document.getElementById("outfield_armor_max_weapon"),
    pow_capacity:       document.getElementById("outfield_armor_capacity"),
    pow_usage:          document.getElementById("outfield_armor_usage"),
    pow_str:            document.getElementById("outfield_armor_str"),
    pow_damage:         document.getElementById("outfield_armor_damage"),
    pow_size:           document.getElementById("outfield_armor_size")
}

//private methods
    var Set_No_Armor_Values = function(){
        m_outfields.name.value = "Без брони";
        m_outfields.eac.value = 0;
        m_outfields.kac.value = 0;
        m_outfields.max_agi.value = "---";
        m_outfields.skill_penalty.value = 0;
        m_outfields.speed.value = 0;
        m_outfields.additional.value = "---";
        pow_attributes_block.style.display = "none";
    }
    
    var Proc_Set_Armor_Event = function(entry_num){
        if (m_owner == null){
            return;
        }
        
        m_owner.Set(ARMOR_DATABASE[entry_num]);
    }
    
    var Proc_Remove_Armor_Event = function(){
        if (m_owner == null){
            return;
        }
        
        m_owner.Remove();
    }

//public methods
    this.Reset = function(owner){
        m_owner = owner;
        self.upgrades.Reset(owner);
        Set_No_Armor_Values();
    }

    this.Set = function(entry){
        m_outfields.name.value = entry.name;
        m_outfields.eac.value = entry.eac;
        m_outfields.kac.value = entry.kac;
        m_outfields.max_agi.value = entry.max_agi;

        if (entry.penalty == null){
            m_outfields.skill_penalty.value = 0;
        }else{
            m_outfields.skill_penalty.value = entry.penalty;
        }

        if (entry.speed == null){
            m_outfields.speed.value = 0;
        }else{
            m_outfields.speed.value = entry.speed;
        }

        if (entry.additional_info == null){
            m_outfields.additional.value = "---";
        }else{
            m_outfields.additional.value = entry.additional_info;
        }

        if (entry.type == "Силовая"){
            pow_attributes_block.style.display = "block";
            m_outfields.pow_max_weapon.value = entry.max_weapons;
            m_outfields.pow_capacity.value = entry.capacity;
            m_outfields.pow_usage.value = entry.usage;
            m_outfields.pow_str.value = entry.str;
            m_outfields.pow_damage.value = entry.damage;
            m_outfields.pow_size.value = entry.size;

        }else{
            pow_attributes_block.style.display = "none";
        }

        Popup_Database.Close();
    }

    this.Remove = function(){
        Set_No_Armor_Values();
    }

    this.Open_Database = function(){
        var table_data = new Array(0);
        var filters = new Array(0);

        let headers = [
            "Название",
            "Тип",
            "Ур.",
            "Цена",
            "ЭКБ",
            "ККБ",
            "Макс. ЛВК",
            "Штраф брони",
            "Скорость",
            "Вес",
            "Улучшения",
            "СИЛ",
            "Урон",
            "Размер",
            "Ёмкость",
            "Расход",
            "Макс. орудий",
            "Дополнительно",
            "Ист."
        ];

        for (let i = 0; i < ARMOR_DATABASE.length; i++){
            var cur_entry = ARMOR_DATABASE[i];
            var row = [
                cur_entry.name,
                cur_entry.type,
                cur_entry.lvl,
                cur_entry.price,
                cur_entry.eac,
                cur_entry.kac,
                cur_entry.max_agi,
                cur_entry.penalty,
                cur_entry.speed,
                cur_entry.weight,
                cur_entry.upgrades,
                cur_entry.str,
                cur_entry.damage,
                cur_entry.size,
                cur_entry.capacity,
                cur_entry.usage,
                cur_entry.max_weapons,
                cur_entry.additional_info,
                cur_entry.source
            ];
            table_data.push(row);
        }

        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.FIND,    0,  "Название"  ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.SELECT,  1,  "Тип"       ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.RANGE,   2,  "Уровень"   ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.RANGE,   3,  "Цена"      ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.SELECT,  18, "Источник"  ));

        Popup_Database.Open(table_data, Proc_Set_Armor_Event, filters, headers, self.Show_Info_Database);
    }

    this.Show_Info_Database = function(entry_num){
        let entry = ARMOR_DATABASE[entry_num];
        let descr = entry.type + " броня";

        descr += "\nУр.: " + entry.lvl;

        if (entry.price != null){
            descr += "\nЦена: " + entry.price + " кред.";
        }
        //else NOTHING TO DO

        descr += "\nЭКБ: " + entry.eac;
        descr += "\nККБ: " + entry.kac;
        descr +=  "\nМакс. ЛВК: " + entry.max_agi;

        if (entry.penalty != null){
            descr += "\nШтраф брони: " + entry.penalty;
        }
        //else NOTHING TO DO

        if (entry.speed != null){
            descr += "\nСкорость: " + entry.speed;
        }
        //else NOTHING TO DO

        if (entry.weight != null){
            descr += "\nВес: " + entry.weight;
        }
        //else NOTHING TO DO

        if (entry.upgrades != null){
            descr += "\nМест для улучшений: " + entry.upgrades;
        }
        //else NOTHING TO DO

        if (entry.type == "Силовая"){
            if (entry.str != null){
                descr += "\nСИЛ: " + entry.str;
            }
            //else NOTHING TO DO

            if (entry.damage != null){
                descr += "\nУрон: " + entry.damage;
            }
            //else NOTHING TO DO

            if (entry.size != null){
                descr += "\nРазмер: " + entry.size;
            }
            //else NOTHING TO DO

            if (entry.capacity != null){
                descr += "\nЁмкость: " + entry.capacity;
            }
            //else NOTHING TO DO

            if (entry.usage != null){
                descr += "\nРасход: " + entry.usage;
            }
            //else NOTHING TO DO

            if (entry.max_weapons != null){
                descr += "\nМест для оружия: " + entry.max_weapons;
            }
            //else NOTHING TO DO
        }
        //else NOTHING TO DO

        if (entry.additional_info != null){
            descr += "\nДополнительно: " + entry.additional_info;
        }
        //else NOTHING TO DO

        Popup_Descr.Call(entry.name, descr);
    }

//private properties
    var m_owner = null;
    var m_outfields = new Object(armor_outfields_t);
    var pow_attributes_block = document.getElementById("div_armor_power_attributes");
    var self = this;

//public properties
    this.upgrades = new Armor_Upgr_Block_t();

//additional initialization
}

function Augment_Block_t(){
//private methods
    var Get_Row_Num_By_Name = function(name){
        for (let i = 1; i < m_table.rows.length; i++){
            var row = m_table.rows[i];
            if(row.name == name){
                return i;
            }
        }

        return null;
    }

    var Proc_Event_Add = function(entry_num){
        if (m_owner == null){
            return;
        }
        
        m_owner.Add(AUGMENT_DATABASE[entry_num]);
    }
    
    var Proc_Event_Remove = function(id){
        if (m_owner == null){
            return;
        }
        
        m_owner.Remove(id);
    }

//public methods
    this.Reset = function(owner){
        m_owner = owner;
        m_table.style.display = "none";
        while(m_table.rows.length > 1){
            m_table.deleteRow(1);
        }
    }

    this.Add = function(id, item){
        var row = m_table.insertRow(m_table.rows.length);
        row.name = id;
        
        for (let i = 0; i < 3; i++){    //TODO: magic
            var cell = row.insertCell(i);
            var func;
            switch (i){
                case 0:
                    cell.innerHTML = item.entry.name;
                    func = item.Show_Descr;
                    cell.onclick = func;
                    break;

                case 1:
                    cell.innerHTML = item.entry.body_part;
                    break;

                case 2:
                    func = Proc_Event_Remove.bind(null, id);
                    var button_remove = HTML_Create_Button("X", func);
                    cell.appendChild(button_remove);
                    break;

                default:
                    cell.innerHTML = "WIP";
                    break;
            }
        }
        m_table.style.display = "block";
    }

    this.Remove = function(id){
        var row_num = Get_Row_Num_By_Name(id);
        if (row_num != null){
            m_table.deleteRow(row_num);
        }//else TODO

        if (m_table.rows.length == 1){ //only header: remove
            m_table.style.display = "none";
        }
    }

    this.Open_Database = function(){
        var table_data = new Array(0);
        var filters = new Array(0);

        let headers = [
            "Название",
            "Ур.",
            "Цена",
            "Тип",
            "Часть тела",
            "Описание",
            "Ист."
        ];

        for (let i = 0; i < AUGMENT_DATABASE.length; i++){

            var cur_entry = AUGMENT_DATABASE[i];
            var row = [
                cur_entry.name,
                cur_entry.lvl,
                cur_entry.price,
                cur_entry.type,
                cur_entry.body_part,
                cur_entry.descr,
                cur_entry.source
            ];
            table_data.push(row);
        }

        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.FIND,    0,  "Название"   ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.RANGE,   1,  "Уровень"    ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.RANGE,   2,  "Цена"       ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.SELECT,  3,  "Тип"        ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.SELECT,  4,  "Часть тела" ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.SELECT,  6,  "Источник"   ));

        Popup_Database.Open(table_data, Proc_Event_Add, filters, headers, self.Show_Info_Database);
    }

    this.Show_Info_Database = function(entry_num){
        let entry = AUGMENT_DATABASE[entry_num];
        let descr = entry.type;

        descr += "\nУр.: " + entry.lvl;

        if (entry.price != null){
            descr += "\nЦена: " + entry.price + " кред.";
        }
        //else NOTHING TO DO

        descr += "\nЧасть тела: " + entry.body_part;
        descr += "\n\n" + entry.descr;

        Popup_Descr.Call(entry.name, descr);
    }

//private properties
    var m_table = document.getElementById("table_inventory_augments");
    var self = this;

//additional initialization
}

function Equipment_Block_t (){
//private methods
var Get_Row_Num_By_Name = function(name){
        for (let i = 1; i < m_table.rows.length; i++){
            var row = m_table.rows[i];
            if(row.name == name){
                return i;
            }
        }

        return null;
    }
    
    var Proc_Event_Add = function(entry_num){
        if (m_owner == null){
            return;
        }
        
        m_owner.Add(ITEMS_DATABASE[entry_num]);
    }
    
    var Proc_Event_Remove = function(id){
        if (m_owner == null){
            return;
        }
        
        m_owner.Remove(id);
    }
    
    var Proc_Event_Change_Count = function(id, event){
        if (m_owner == null){
            return;
        }
        
        let new_value = event.target.value;
        if (isNaN(new_value)){
            let count_to_set = m_owner.Get_Count(id);
            if (count_to_set == null){
                event.target.value = "";
            }else{
                event.target.value = count_to_set;
            }
            return;
        }
        m_owner.Change_Count(id, parseInt(new_value));
    }

//public methods
    this.Reset = function(owner){
        m_owner = owner;
        
        m_table.style.display = "none";
        while(m_table.rows.length > 1){
            m_table.deleteRow(1);
        }
    }

    this.Add = function(id, item){
        var row = m_table.insertRow(m_table.rows.length);
        row.name = id;

        for (let i = 0; i < 4; i++){
            var cell = row.insertCell(i);
            switch (i){
                case 0:
                    cell.innerHTML = item.entry.name;
                    cell.onclick = item.Show_Descr;
                    break;

                case 1:
                    cell.innerHTML = item.entry.weight;
                    break;

                case 2:
                    var count = HTML_Create_Input_Number(
                        item.count,
                        1,
                        99,
                        Proc_Event_Change_Count.bind(null, id)
                    );
                    cell.appendChild(count);
                    item.Set_GUI_Count_Field(count);
                    break;

                case 3:
                    var func = Proc_Event_Remove.bind(null, id);
                    var button_remove = HTML_Create_Button("X", func);
                    cell.appendChild(button_remove);
                    break;

                default:
                    cell.innerHTML = "WIP";
                    break;
            }
        }
        m_table.style.display = "block";
    }

    this.Remove = function(id){
        var row_num = Get_Row_Num_By_Name(id);
        if (row_num != null){
            m_table.deleteRow(row_num);
        }//else TODO

        if (m_table.rows.length == 1){ //only header: remove
            m_table.style.display = "none";
        }
    }

    this.Open_Database = function(){
        var table_data = new Array(0);
        var filters = new Array(0);

        let headers = [
            "Название",
            "Ур.",
            "Цена",
            "Тип",
            "Описание",
            "Вес",
            "Ист."
        ];

        for (let i = 0; i < ITEMS_DATABASE.length; i++){

            var cur_entry = ITEMS_DATABASE[i];
            var row = [
                cur_entry.name,
                cur_entry.lvl,
                cur_entry.price,
                cur_entry.type,
                cur_entry.descr,
                cur_entry.weight,
                cur_entry.source
            ];
            table_data.push(row);
        }

        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.FIND,    0,  "Название"   ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.RANGE,   1,  "Уровень"    ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.RANGE,   2,  "Цена"       ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.SELECT,  3,  "Тип"        ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.SELECT,  6,  "Источник"   ));

        Popup_Database.Open(table_data, Proc_Event_Add, filters, headers, self.Show_Info_Database);
    }

    this.Show_Info_Database = function(entry_num){
        let entry = ITEMS_DATABASE[entry_num];
        let descr = entry.type;

        descr += "\nУр.: " + entry.lvl;

        if (entry.price != null){
            descr += "\nЦена: " + entry.price + " кред.";
        }
        //else NOTHING TO DO

        descr += "\nВес: " + entry.weight;
        descr += "\n\n" + entry.descr;

        Popup_Descr.Call(entry.name, descr);
    }

    this.Show_Popup = function(name){
        chardata.inventory.equipment.Open_Descr_Tooltip(name);
    }

//private properties
    var self = this;
    var m_owner = null;
    var m_table = document.getElementById("table_inventory_equipment");

//additional initialization
}

function Ammo_Block_t (){
//private methods
    var Get_Row_Num_By_Name = function(name){
        for (let i = 1; i < m_table.rows.length; i++){
            var row = m_table.rows[i];
            if(row.name == name){
                return i;
            }
        }

        return null;
    }
    
        
    var Proc_Event_Add = function(entry_num){
        if (m_owner == null){
            return;
        }
        
        m_owner.Add(AMMO_DATABASE[entry_num]);
    }
    
    var Proc_Event_Remove = function(id){
        if (m_owner == null){
            return;
        }
        
        m_owner.Remove(id);
    }
    
    var Proc_Event_Change_Count = function(id, event){
        if (m_owner == null){
            return;
        }
        
        let new_value = event.target.value;
        if (isNaN(new_value)){
            let count_to_set = m_owner.Get_Count(id);
            if (count_to_set == null){
                event.target.value = "";
            }else{
                event.target.value = count_to_set;
            }
            return;
        }
        m_owner.Change_Count(id, parseInt(new_value));
    }

//public methods
    this.Reset = function(owner){
        m_owner = owner;
        
        m_table.style.display = "none";
        while(m_table.rows.length > 1){
            m_table.deleteRow(1);
        }
    }

    this.Add = function(id, item){
        var row = m_table.insertRow(m_table.rows.length);
        row.name = id;

        for (let i = 0; i < 4; i++){
            var cell = row.insertCell(i);
            switch (i){
                case 0:
                    cell.innerHTML = item.entry.name;
                    break;

                case 1:
                    if (item.entry.special == null){
                        cell.innerHTML = "---";
                    }else{
                        cell.innerHTML = item.entry.special;
                    }
                    break;


                case 2:
                    var count = HTML_Create_Input_Number(
                        value = item.count,
                        0,
                        item.entry.capacity,
                        Proc_Event_Change_Count.bind(null, id)
                    );
                    cell.appendChild(count);
                    item.Set_GUI_Count_Field(count);
                    break;

                case 3:
                    var func = m_owner.Remove.bind(null, id);
                    var button_remove = HTML_Create_Button("X", func);
                    cell.appendChild(button_remove);
                    break;

                default:
                    cell.innerHTML = "WIP";
                    break;
            }
        }
        m_table.style.display = "block";
    }

    this.Remove = function(id){
        var row_num = Get_Row_Num_By_Name(id);
        if (row_num != null){
            m_table.deleteRow(row_num);
        }//else TODO

        if (m_table.rows.length == 1){ //only header: remove
            m_table.style.display = "none";
        }
    }

    this.Open_Database = function(){
        var table_data = new Array(0);
        var filters = new Array(0);

        let headers = [
            "Название",
            "Ур.",
            "Цена",
            "Тип",
            "Ёмкость",
            "Дополнительно",
            "Вес",
            "Ист."
        ];

        for (let i = 0; i < AMMO_DATABASE.length; i++){

            var cur_entry = AMMO_DATABASE[i];
            var row = [
                cur_entry.name,
                cur_entry.lvl,
                cur_entry.price,
                cur_entry.type,
                cur_entry.capacity,
                cur_entry.special,
                cur_entry.weight,
                cur_entry.source
            ];
            table_data.push(row);
        }

        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.FIND,    0,  "Название"   ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.RANGE,   1,  "Уровень"    ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.RANGE,   2,  "Цена"       ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.SELECT,  3,  "Тип"        ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.SELECT,  7,  "Источник"   ));

        Popup_Database.Open(table_data, Proc_Event_Add, filters, headers, self.Show_Info_Database);
    }
    
    this.Show_Info_Database = function(entry_num){
        let entry = AMMO_DATABASE[entry_num];
        let descr = entry.type + " боеприпасы";

        descr += "\nУр.: " + entry.lvl;

        if (entry.price != null){
            descr += "\nЦена: " + entry.price + " кред.";
        }
        //else NOTHING TO DO
        
        if (entry.capacity != null){
            descr += "\nЁмкость: " + entry.capacity;
        }
        //else NOTHING TO DO

        descr += "\nВес: " + entry.weight;
        
        if (entry.special != null){
            descr += "\n\n" + entry.special;
        }
        //else NOTHING TO DO

        Popup_Descr.Call(entry.name, descr);
    }

//private properties
    var m_table = document.getElementById("table_inventory_ammo");
    var m_owner = null;
    var self = this;

//additional initialization
}

function Other_Items_t(){
//private methods
    var Get_Row_Num_By_Name = function(name){
        for (let i = 1; i < m_table.rows.length; i++){
            var row = m_table.rows[i];
            if(row.name == name){
                return i;
            }
        }

        return null;
    }
    
    var Proc_Event_Remove = function(id){
        if (m_owner == null){
            return;
        }
        
        m_owner.Remove(id);
    }
    
    var Proc_Event_Change_Count = function(id, event){
        if (m_owner == null){
            return;
        }
        
        let new_value = event.target.value;
        if (isNaN(new_value)){
            let count_to_set = m_owner.Get_Count(id);
            if (count_to_set == null){
                event.target.value = "";
            }else{
                event.target.value = count_to_set;
            }
            return;
        }
        m_owner.Change_Count(id, parseInt(new_value));
    }
    
    var Proc_Event_Change_Name = function(id, event){
        if (m_owner == null){
            return;
        }
        
        m_owner.Change_Name(id, event.target.value);
    }
    
    var Proc_Event_Change_Descr = function(id, event){
        if (m_owner == null){
            return;
        }
        
        m_owner.Change_Descr(id, event.target.value);
    }
    
    var Proc_Event_Change_Weight = function(id, event){
        if (m_owner == null){
            return;
        }
        
        m_owner.Change_Weight(id, event.target.value);
    }
    
    var Proc_Event_Change_Count = function(id, event){
        if (m_owner == null){
            return;
        }
        
        let new_value = event.target.value;
        if (isNaN(new_value)){
            let count_to_set = m_owner.Get_Count(id);
            if (count_to_set == null){
                event.target.value = "";
            }else{
                event.target.value = count_to_set;
            }
            return;
        }
        m_owner.Change_Count(id, parseInt(new_value));
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
    this.Reset = function(owner){
        m_owner = owner;
        
        m_table.style.display = "none";
        while(m_table.rows.length > 1){
            m_table.deleteRow(1);
        }
    }
    
    this.Proc_Event_Add = function(entry_num){
        if (m_owner == null){
            return;
        }
        
        m_owner.Add();
    }
    
    this.Add = function(id, item){
        var row = m_table.insertRow(m_table.rows.length);
        row.name = id;

        var outfield_name = HTML_Create_Input_Text(
            item.name,
            Proc_Event_Change_Name.bind(null, id)
        );
        item.Set_Outfield_Name(outfield_name);
        var outfield_descr = HTML_Create_Input_Text(
            item.descr,
            Proc_Event_Change_Descr.bind(null, id)
        );
        item.Set_Outfield_Descr(outfield_descr);
        var outfield_weight = HTML_Create_Input_Text(
            item.weight,
            Proc_Event_Change_Weight.bind(null, id)
        );
        item.Set_Outfield_Weight(outfield_weight);
        var outfield_count = HTML_Create_Input_Number(
            item.count,
            1,
            99,
            Proc_Event_Change_Count.bind(null, id)
        );
        item.Set_Outfield_Count(outfield_count);

        for (let i = 0; i < 5; i++){
            var cell = row.insertCell(i);
            switch (i){
                case 0:
                    cell.appendChild(outfield_name);
                    break;

                case 1:
                    cell.appendChild(outfield_descr);
                    break;

                case 2:
                    cell.appendChild(outfield_weight);
                    break;

                case 3:
                    cell.appendChild(outfield_count);
                    break;

                case 4:
                    var func = Proc_Event_Remove.bind(null, id);
                    var button_remove = HTML_Create_Button("X", func);
                    cell.appendChild(button_remove);
                    break;

                default:
                    cell.innerHTML = "WIP";
                    break;
            }
        }
        m_table.style.display = "block";
    }

    this.Remove = function(id){
        var row_num = Get_Row_Num_By_Name(id);
        if (row_num != null){
            m_table.deleteRow(row_num);
        }//else TODO

        if (m_table.rows.length == 1){ //only header: remove
            m_table.style.display = "none";
        }
    }

//private properties
    var m_owner = null;
    var m_table = document.getElementById("table_inventory_other");
    var self = this;

//additional initialization
}

//TODO: unused, remove?
function Resources_Block_t(){
//private methods
    var Reset = function(){
        outfield_credits.value = 0;
        outfield_upb.value = 0;
    }

//public methods
    this.Set_Credits = function(value, update_outfield = false){
        chardata.inventory.credits.Set(value);
        if (update_outfield){
            outfield_credits.value = value;
        }
        //else NOTHING TO DO
    }

    this.Set_UPB = function (value, update_outfield = false){
        chardata.inventory.upb.Set(value);
        if (update_outfield){
            outfield_upb.value = value;
        }
        //else NOTHING TO DO
    }

//private properties
    var self = this;
    var outfield_credits = document.getElementById("inventory_credits");
    var outfield_upb = document.getElementById("inventory_UPB");

//public properties

//additional initialization
    Reset();
}

function Layer_Inventory_t (){
//public methods

//private properties
    var self = this;

//public properties
    this.weapon_block = new Weapon_Block_t();
    this.grenade_block = new Grenade_Block_t();
    this.armor_block = new Armor_Block_t();
    this.augment_block = new Augment_Block_t();
    this.equipment_block = new Equipment_Block_t();
    this.ammo_block = new Ammo_Block_t();
    this.other_items_block = new Other_Items_t();
    //this.resourses_block = new Resources_Block_t();
}