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
    var Reset = function(){
        m_table.style.display = "none";
        while(m_table.rows.length > 1){
            m_table.deleteRow(1);
        }
    }

    var Get_Grenade_Row_Num_By_Name = function(name){
        for (let i = 0; i < m_table.rows.length - 1; i++){
            var row = m_table.rows[i + 1];
            if(row.name == name){
                return i;
            }
        }

        return null;
    }

//public methods
    this.Add = function(num, in_count = 1){
        var row;
        var entry = GRENADE_DATABASE[num];

        //checking weapons with same name
        var row_name = entry.name;

        //if grenade already in table, increase its amount by 1 instead of adding
        for (let i = 0; i < m_table.rows.length; i++){
            if (m_table.rows[i].name == row_name){
                in_field = document.getElementById("infield_" + row_name);
                in_field.value = Number(in_field.value) + 1;
                return;
            }
            //else NOTHING TO DO
        }

        row = m_table.insertRow(m_table.rows.length);
        row.name = row_name;

        for (let i = 0; i < 5; i++){
            var cell = row.insertCell(i);
            var func;
            switch (i){
                case 0:
                    cell.innerHTML = entry.name;
                    func = self.Show_Descr_Popup.bind(null, row.name);
                    cell.onclick = func;
                    break;

                case 1:
                    cell.innerHTML = 0;
                    func = self.Show_DC_Detail_Popup.bind(null, row.name);
                    cell.onclick = func;
                    break;

                case 2:
                    cell.innerHTML = entry.weight;
                    break;

                case 3:
                    var count = HTML_Create_Input_Number(
                        value = in_count,
                        min = 1,
                        max = 100,
                        "layers.inventory.grenade_block.Change_Count(event, '" + row.name + "')",
                        "infield_" + row_name);
                    cell.appendChild(count);
                    break;

                case 4:
                    func = self.Remove.bind(null, row.name);
                    var button_remove = HTML_Create_Button("X", func);
                    cell.appendChild(button_remove);
                    break;

                default:
                    cell.innerHTML = "WIP";
                    break;
            }
        }
        m_table.style.display = "block";

        chardata.inventory.grenades.Add(entry, in_count, row);
    }

    this.Remove = function(row_name){
        var row_num = Get_Grenade_Row_Num_By_Name(row_name);
        if (row_num != null){
            chardata.inventory.grenades.Remove(row_num);
            m_table.deleteRow(row_num + 1);
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

        Popup_Database.Open(table_data, self.Add, filters, headers, self.Show_Info_Database);
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

    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        obj.forEach(item => {
            for (let i = 0; i < GRENADE_DATABASE.length; i++){
                let entry = GRENADE_DATABASE[i];
                if (item.name == entry.name){
                    self.Add(i, item.count);
                    break;
                }
                //else NOTHING TO DO
            }
        });
    }

    this.Change_Count = function(event, row_name){
        var row_num = Get_Grenade_Row_Num_By_Name(row_name);
        if (row_num != null){
            chardata.inventory.grenades.Change_Count(row_num, Number(event.currentTarget.value));
        }//else TODO

    }

    this.Show_DC_Detail_Popup = function(row_name){
        var row_num = Get_Grenade_Row_Num_By_Name(row_name);
        if (row_num != null){
            chardata.inventory.grenades.Show_DC_Detail_Popup(row_num);
        }//else TODO
    }

    this.Show_Descr_Popup = function(row_name){
        var row_num = Get_Grenade_Row_Num_By_Name(row_name);
        if (row_num != null){
            chardata.inventory.grenades.Open_Descr_Tooltip(row_num);
        }//else TODO
    }

//private properties
    var m_table = document.getElementById("table_inventory_grenades");
    var self = this;

//additional initialization
    Reset();
}

function Armor_Upgr_Block_t(){
//private methods
    var Reset = function(){
        m_table.style.display = "none";
        while(m_table.rows.length > 1){
            m_table.deleteRow(1);
        }
        m_outfield_used_slots.value = 0;
        m_outfield_max_slots.value = 0;
    }

//public methods
    this.Add = function(num){
        var row;
        var entry = ARMOR_UPGR_DATABASE[num];

        //checking weapons with same name
        var row_name = entry.name;

        //if armor already in table, alert and do nothing
        for (let i = 0; i < m_table.rows.length; i++){
            if (m_table.rows[i].name == row_name){
                alert("Это улучшение брони уже добавлено.")
                return;
            }
            //else NOTHING TO DO
        }

        row = m_table.insertRow(m_table.rows.length);
        row.name = row_name;

        for (let i = 0; i < 4; i++){    //TODO: magic
            var cell = row.insertCell(i);
            var func;
            switch (i){
                case 0:
                    cell.innerHTML = entry.name;
                    func = self.Show_Popup.bind(null, row.name);
                    cell.onclick = func;
                    break;

                case 1:
                    cell.innerHTML = entry.slots;
                    break;

                case 2:
                    cell.innerHTML = entry.weight;
                    break;

                case 3:
                    func = self.Remove.bind(null, row.name);
                    var button_remove = HTML_Create_Button("X", func);
                    cell.appendChild(button_remove);
                    break;

                default:
                    cell.innerHTML = "WIP";
                    break;
            }
        }
        m_table.style.display = "block";

        chardata.inventory.armor.Add_Armor_Upgr(entry);
    }

    this.Remove = function(id){
        for (let i = 0; i < m_table.rows.length - 1; i++){
            var row = m_table.rows[i + 1];
            if(row.name == id){
                chardata.inventory.armor.Remove_Armor_Upgr(i);
                m_table.deleteRow(i + 1);
                break;
            }
        }

        if (m_table.rows.length == 1){ //only header: remove
            m_table.style.display = "none";
        }
    }

    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        obj.forEach(item => {
            for (let i = 0; i < ARMOR_UPGR_DATABASE.length; i++){
                let entry = ARMOR_UPGR_DATABASE[i];
                if (item == entry.name){
                    self.Add(i);
                    break;
                }
                //else NOTHING TO DO
            }
        });
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

        Popup_Database.Open(table_data, self.Add, filters, headers, self.Show_Info_Database);
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
    var m_table = document.getElementById("table_inventory_armor_upgr");
    var m_outfield_used_slots = document.getElementById("outfield_armor_upgrades_used");
    var m_outfield_max_slots = document.getElementById("outfield_armor_upgrades_max");
    var self = this;

//additional initialization
    Reset();
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
    var Reset = function(){
        m_outfields.name.value = "Без брони";
        m_outfields.eac.value = 0;
        m_outfields.kac.value = 0;
        m_outfields.max_agi.value = "---";
        m_outfields.skill_penalty.value = 0;
        m_outfields.speed.value = 0;
        m_outfields.additional.value = "---";
        pow_attributes_block.style.display = "none";
    }

//public methods
    this.Add = function(num){
        var armor = ARMOR_DATABASE[num];
        m_outfields.name.value = armor.name;
        m_outfields.eac.value = armor.eac;
        m_outfields.kac.value = armor.kac;
        m_outfields.max_agi.value = armor.max_agi;

        if (armor.penalty == null){
            m_outfields.skill_penalty.value = 0;
        }else{
            m_outfields.skill_penalty.value = armor.penalty;
        }

        if (armor.speed == null){
            m_outfields.speed.value = 0;
        }else{
            m_outfields.speed.value = armor.speed;
        }

        if (armor.additional_info == null){
            m_outfields.additional.value = "---";
        }else{
            m_outfields.additional.value = armor.additional_info;
        }

        if (armor.type == "Силовая"){
            pow_attributes_block.style.display = "block";
            m_outfields.pow_max_weapon.value = armor.max_weapons;
            m_outfields.pow_capacity.value = armor.capacity;
            m_outfields.pow_usage.value = armor.usage;
            m_outfields.pow_str.value = armor.str;
            m_outfields.pow_damage.value = armor.damage;
            m_outfields.pow_size.value = armor.size;

        }else{
            pow_attributes_block.style.display = "none";
        }


        chardata.inventory.armor.Set(armor);

        Popup_Database.Close();
    }

    this.Remove = function(){
        Reset();
        chardata.inventory.armor.Remove();
    }

    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        if (obj.name != null){
            for (let i = 0; i < ARMOR_DATABASE.length; i++){
                let entry = ARMOR_DATABASE[i];
                if (obj.name == entry.name){
                    self.Add(i);
                    break;
                }
                //else NOTHING TO DO
            }
        }
        //else NOTHING TO DO

        self.upgrades.Load_From_Obj(obj.upgrades);
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

        Popup_Database.Open(table_data, self.Add, filters, headers, self.Show_Info_Database);
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
    var m_outfields = new Object(armor_outfields_t);
    var pow_attributes_block = document.getElementById("div_armor_power_attributes");
    var self = this;

//public properties
    this.upgrades = new Armor_Upgr_Block_t();

//additional initialization
    Reset();
}

function Augment_Block_t(){
//private methods
    var Reset = function(){
        m_table.style.display = "none";
        while(m_table.rows.length > 1){
            m_table.deleteRow(1);
        }
    }

//public methods
    this.Add = function(num){
        var row;
        var entry = AUGMENT_DATABASE[num];

        //checking weapons with same name
        var row_name = entry.name;

        //if armor already in table, alert and do nothing
        for (let i = 0; i < m_table.rows.length; i++){
            if (m_table.rows[i].name == row_name){
                alert("Эта аугментация уже добавлена.")
                return;
            }

            //TODO: check body part
            //else NOTHING TO DO
        }

        row = m_table.insertRow(m_table.rows.length);
        row.name = row_name;

        for (let i = 0; i < 3; i++){    //TODO: magic
            var cell = row.insertCell(i);
            var func;
            switch (i){
                case 0:
                    cell.innerHTML = entry.name;
                    func = self.Show_Popup.bind(null, row.name);
                    cell.onclick = func;
                    break;

                case 1:
                    cell.innerHTML = entry.body_part;
                    break;

                case 2:
                    func = self.Remove.bind(null, row.name);
                    var button_remove = HTML_Create_Button("X", func);
                    cell.appendChild(button_remove);
                    break;

                default:
                    cell.innerHTML = "WIP";
                    break;
            }
        }
        m_table.style.display = "block";

        chardata.inventory.augments.Add(entry);
    }

    this.Remove = function(id){
        for (let i = 0; i < m_table.rows.length - 1; i++){
            var row = m_table.rows[i + 1];
            if(row.name == id){
                chardata.inventory.augments.Remove(i);
                m_table.deleteRow(i + 1);
                break;
            }
        }

        if (m_table.rows.length == 1){ //only header: hide
            m_table.style.display = "none";
        }
    }

    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        obj.forEach(item => {
            for (let i = 0; i < AUGMENT_DATABASE.length; i++){
                let entry = AUGMENT_DATABASE[i];
                if (item.name == entry.name){
                    self.Add(i);
                    break;
                }
                //else NOTHING TO DO
            }
        });
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

        Popup_Database.Open(table_data, self.Add, filters, headers, self.Show_Info_Database);
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

    this.Show_Popup = function(name){
        chardata.inventory.augments.Open_Descr_Tooltip(name);
    }

//private properties
    var m_table = document.getElementById("table_inventory_augments");
    var self = this;

//additional initialization
    Reset();
}

function Equipment_Block_t (){
//private methods
    var Reset = function(){
        m_table.style.display = "none";
        while(m_table.rows.length > 1){
            m_table.deleteRow(1);
        }
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

    this.Add = function(num, in_count = 1){
        var row;
        var entry = ITEMS_DATABASE[num];

        //if item already in table, increase its amount by 1 instead of adding
        for (let i = 0; i < m_table.rows.length; i++){
            if (m_table.rows[i].name == entry.name){
                var in_field = document.getElementById("infield_" + entry.name);
                var new_count = Number(in_field.value) + in_count;
                in_field.value = new_count;
                chardata.inventory.equipment.Change_Count(entry.name, new_count);
                return;
            }
            //else NOTHING TO DO
        }

        row = m_table.insertRow(m_table.rows.length);
        row.name = entry.name;

        for (let i = 0; i < 4; i++){
            var cell = row.insertCell(i);
            var func;
            switch (i){
                case 0:
                    cell.innerHTML = entry.name;
                    func = self.Show_Popup.bind(null, row.name);
                    cell.onclick = func;
                    break;

                case 1:
                    cell.innerHTML = entry.weight;
                    break;

                case 2:
                    var count = HTML_Create_Input_Number(
                        value = in_count,
                        min = 1,
                        max = 100,
                        "layers.inventory.equipment_block.Change_Count(event, '" + row.name + "')",
                        "infield_" + entry.name);
                    cell.appendChild(count);
                    break;

                case 3:
                    func = self.Remove.bind(null, row.name);
                    var button_remove = HTML_Create_Button("X", func);
                    cell.appendChild(button_remove);
                    break;

                default:
                    cell.innerHTML = "WIP";
                    break;
            }
        }
        m_table.style.display = "block";

        chardata.inventory.equipment.Add(entry, in_count);
    }

    this.Remove = function(id){
        let row_num = Get_Item_Row_Num_By_Name(id);
        if (row_num != null){
            chardata.inventory.equipment.Remove(row_num);
            m_table.deleteRow(row_num + 1);
        }

        if (m_table.rows.length == 1){ //only header: remove
            m_table.style.display = "none";
        }
    }

    this.Change_Count = function(event, id){
        let row_num = Get_Item_Row_Num_By_Name(id);
        if (row_num != null){
            chardata.inventory.equipment.Change_Count(row_num, Number(event.currentTarget.value));
        }
    }

    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        obj.forEach(item => {
            for (let i = 0; i < ITEMS_DATABASE.length; i++){
                let entry = ITEMS_DATABASE[i];
                if (item.name == entry.name){
                    self.Add(i, item.count);
                    break;
                }
                //else NOTHING TO DO
            }
        });
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

        Popup_Database.Open(table_data, self.Add, filters, headers, self.Show_Info_Database);
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
    var m_table = document.getElementById("table_inventory_equipment");

//additional initialization
    Reset();
}

function Ammo_Block_t (){
//private methods
    var Reset = function(){
        m_table.style.display = "none";
        while(m_table.rows.length > 1){
            m_table.deleteRow(1);
        }
    }

    var Get_Ammo_Row_Num_By_Name = function(name){
        for (let i = 0; i < m_table.rows.length - 1; i++){
            var row = m_table.rows[i + 1];
            if(row.name == name){
                return i;
            }
        }

        return null;
    }

//public methods
    this.Add = function(num, in_count = undefined){
        var row;
        var entry = AMMO_DATABASE[num];

        let temp_count = entry.capacity;
        if (in_count != undefined){
            temp_count = in_count;
        }
        //else NOTHING TO DO

        //checking weapons with same name
        var row_name = entry.name;

        //checking ammo with same name
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
            console.log("More than 100 ammo with name '" + entry.name + "', can't add more!");
            return;
        }
        //else NOTHING TO DO

        row = m_table.insertRow(m_table.rows.length);
        row.name = row_name;

        for (let i = 0; i < 4; i++){
            var cell = row.insertCell(i);
            switch (i){
                case 0:
                    cell.innerHTML = entry.name;
                    break;

                case 1:
                    if (entry.special == null){
                        cell.innerHTML = "---";
                    }else{
                        cell.innerHTML = entry.special;
                    }
                    break;


                case 2:
                    var count = HTML_Create_Input_Number(
                        value = temp_count,
                        min = 0, max = entry.capacity,
                        "layers.inventory.ammo_block.Change_Count(event, '" + row.name + "')",
                        "infield_" + row_name);
                    cell.appendChild(count);
                    break;

                case 3:
                    var func = self.Remove.bind(null, row.name);
                    var button_remove = HTML_Create_Button("X", func);
                    cell.appendChild(button_remove);
                    break;

                default:
                    cell.innerHTML = "WIP";
                    break;
            }
        }
        m_table.style.display = "block";

        chardata.inventory.ammo.Add(row_name, temp_count, entry);
    }

    this.Remove = function(id){
        let row_num = Get_Ammo_Row_Num_By_Name(id);
        if (row_num != null){
            chardata.inventory.ammo.Remove(row_num);
            m_table.deleteRow(row_num + 1);
        }

        if (m_table.rows.length == 1){ //only header: remove
            m_table.style.display = "none";
        }
    }

    this.Change_Count = function(event, id){
        let row_num = Get_Ammo_Row_Num_By_Name(id);
        if (row_num != null){
            chardata.inventory.ammo.Change_Count(row_num, Number(event.currentTarget.value));
        }
    }

    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        obj.forEach(item => {
            for (let i = 0; i < AMMO_DATABASE.length; i++){
                let entry = AMMO_DATABASE[i];
                if (item.name == entry.name){
                    self.Add(i, item.count);
                    break;
                }
                //else NOTHING TO DO
            }
        });
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

        Popup_Database.Open(table_data, self.Add, filters, headers, self.Show_Info_Database);
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
    var self = this;

//additional initialization
    Reset();
}

function Other_Items_t(){
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
            let cur_name = "other_" + id_enum;
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
            console.log("More than 100 custom items '" + entry.name + "', can't add more!");
            return;
        }
        //else NOTHING TO DO

        row = m_table.insertRow(m_table.rows.length);
        row.name = row_name;

        var outfield_name = HTML_Create_Input_Text(
            "",
            onchange_elem = "layers.inventory.other_items_block.Change_Name('" + row.name + "', event.target.value)",
            id = undefined,
            class_elem = undefined);
        var outfield_descr = HTML_Create_Input_Text(
            "",
            onchange_elem = "layers.inventory.other_items_block.Change_Descr('" + row.name + "', event.target.value)",
            id = undefined,
            class_elem = undefined);
            var outfield_weight = HTML_Create_Input_Text(
                "-",
                onchange_elem = "layers.inventory.other_items_block.Change_Weight('" + row.name + "', event.target.value)",
                id = undefined,
                class_elem = undefined); //TODO
        var outfield_count = HTML_Create_Input_Number(
                        value = 1,
                        min = 1,
                        max = 100,
                        onchange_elem = "layers.inventory.other_items_block.Change_Count('" + row.name + "', Number(event.target.value))",
                        id = undefined,
                        class_elem = undefined); //TODO

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
                    var func = self.Remove_Row.bind(null, row.name);
                    var button_remove = HTML_Create_Button("X", func);
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
           "descr": outfield_descr,
           "weight": outfield_weight,
           "count": outfield_count
        });

        chardata.inventory.other.Add(row_name);
        return row_name;
    }

    this.Remove_Row = function(id){
        let row_num = Get_Item_Row_Num_By_Name(id);
        if (row_num != null){
            chardata.inventory.other.Remove(row_num);
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
            chardata.inventory.other.Change_Name(row_num, value);
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
            chardata.inventory.other.Change_Descr(row_num, value);
            if (update_outfield){
               m_outfield_map.get(id).descr.value = value;
            }
            //else NOTHING TO DO
        }
        //else NOTHING TO DO
    }

    this.Change_Count = function(id, value, update_outfield = false){
        let row_num = Get_Item_Row_Num_By_Name(id);
        if (row_num != null){
            chardata.inventory.other.Change_Count(row_num, value);
            if (update_outfield){
               m_outfield_map.get(id).count.value = value;
            }
            //else NOTHING TO DO
        }
        //else NOTHING TO DO
    }

    this.Change_Weight = function(id, value, update_outfield = false){
        let row_num = Get_Item_Row_Num_By_Name(id);
        if (row_num != null){
            let weight = value;
            if (isNaN(weight)){
                chardata.inventory.other.Change_Weight(row_num, weight);
            }else{
                chardata.inventory.other.Change_Weight(row_num, Number(weight));
            }
            if (update_outfield){
               m_outfield_map.get(id).weight.value = value;
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
            self.Change_Weight(id, item.weight, true);
            self.Change_Count(id, item.count, true);
        });
    }

//private properties
    var m_table = document.getElementById("table_inventory_other");
    var m_outfield_map;
    var self = this;

//additional initialization
    Reset();
}

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
    this.resourses_block = new Resources_Block_t();
}