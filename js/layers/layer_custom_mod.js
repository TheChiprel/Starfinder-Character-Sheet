function Custom_List_Entry_t (name, types, owner){
    this.name = name;
    this.types = types;
    this.owner = owner;
}

function Sublayer_Custom_t(sublayer_div, infield_id, infield_value, type_selector, add_callback){
//private methods
    var Reset = function(){
        m_infield_id.value = "";
        if (m_infield_value != null){
            m_infield_value.value = "";
        }
        self.Hide();
    }

//public methods
    this.Show = function(types){
        m_sublayer_div.style.display = 'inline';

        HTML_Selector_Clear_Options(m_type_selector);
        HTML_Selector_Add_Option(m_type_selector, "---");
        if (types != null){
            for (let i = 0; i < types.length; i++){
                HTML_Selector_Add_Option(m_type_selector, types[i]);
            }
            m_type_selector.style.display = 'inline';
        }else{
            m_type_selector.style.display = 'none';
        }
    }

    this.Hide = function(){
        m_sublayer_div.style.display = 'none';
    }

    this.Add = function(){
        let name = m_infield_id.value;
        let category = document.getElementById('custom_main_category').value;
        let type = m_type_selector.value;

        if (m_infield_value != null){
            let value = Number(m_infield_value.value);
            m_add_callback(name, category, type, value);
        }else{
            m_add_callback(name, category, type);
        }
    }

//private properties
    var self = this;
    var m_sublayer_div = sublayer_div;
    var m_infield_id = infield_id;
    var m_infield_value = infield_value;
    var m_type_selector = type_selector;
    var m_add_callback = add_callback;

//public properties

//additional initialization
    Reset();
}

function Layer_Custom_t(){
//private methods
    var Reset = function(){
        m_stats_list = [
            new Custom_List_Entry_t('Значение хар-ки', Object.values(ABISCORES), chardata.stats.abiscores.values),
            new Custom_List_Entry_t('Модификатор хар-ки', Object.values(ABISCORES), chardata.stats.abiscores.modifiers),
            new Custom_List_Entry_t('Инициатива', null, chardata.stats.initiative),
            new Custom_List_Entry_t('ПЖ', null, chardata.stats.sp),
            new Custom_List_Entry_t('ПЗ', null, chardata.stats.hp),
            new Custom_List_Entry_t('ПР', null, chardata.stats.rp),
            new Custom_List_Entry_t('БМА', null, chardata.stats.attacks.bab),
            new Custom_List_Entry_t('КБ', ['ЭКБ', 'ККБ', 'Против манёвров'], chardata.stats.defense),
            new Custom_List_Entry_t('Мод. атаки', [WEAPON_MODIFIER.MELEE, WEAPON_MODIFIER.OPERATIVE, WEAPON_MODIFIER.RANGED, WEAPON_MODIFIER.THROWN], chardata.stats.attacks),
            new Custom_List_Entry_t('Скорость', ['Наземная', 'Полёт', 'Рытьё', 'Плавание', 'Лазание'], chardata.stats.speeds),
            new Custom_List_Entry_t('Спасбросок', ['Стойкость', 'Реакция', 'Воля'], chardata.stats.saves)
        ];
        //TODO: special weapon
        m_bool_list = [
            new Custom_List_Entry_t('Владение оружием', [WEAPON_TYPES.MELEE_SIMPLE, WEAPON_TYPES.MELEE_ADVANCED, WEAPON_TYPES.RANGED_SMALL, WEAPON_TYPES.RANGED_LONG, WEAPON_TYPES.RANGED_SNIPER, WEAPON_TYPES.RANGED_HEAVY, WEAPON_TYPES.GRENADE], chardata.stats.weapon_proficiency),
            new Custom_List_Entry_t('Привычное оружие', [WEAPON_TYPES.MELEE_SIMPLE, WEAPON_TYPES.MELEE_ADVANCED, WEAPON_TYPES.RANGED_SMALL, WEAPON_TYPES.RANGED_LONG, WEAPON_TYPES.RANGED_SNIPER, WEAPON_TYPES.RANGED_HEAVY], chardata.stats.weapon_specialization),
            new Custom_List_Entry_t('Ношение брони', [ARMOR_TYPES.LIGHT, ARMOR_TYPES.HEAVY, ARMOR_TYPES.POWER], chardata.stats.armor_proficiency),
            new Custom_List_Entry_t('Ключевая хар-ка', Object.values(ABISCORES), chardata.stats.abiscores.key)
        ];

        var skill_list = new Array(0);
        for (let i = 0; i < chardata.skills.arr.length; i++){
            skill_list.push(chardata.skills.arr[i].name);
        }

        m_stats_list.push(new Custom_List_Entry_t('Навык', skill_list, chardata.skills));
        m_bool_list.push(new Custom_List_Entry_t('Классовый навык', skill_list, chardata.skills));

        HTML_Selector_Clear_Options(category_selector);
        HTML_Selector_Add_Option(category_selector, "---");
        for (let i = 0; i < m_stats_list.length; i++){
            HTML_Selector_Add_Option(category_selector, m_stats_list[i].name);
        }
        for (let i = 0; i < m_bool_list.length; i++){
            HTML_Selector_Add_Option(category_selector, m_bool_list[i].name);
        }

        while (custom_mod_table.rows.length > 1){
            custom_mod_table.deleteRow(1);
        }

        m_owner_map = new Map();
    }

    var Hide_All_Sublayers = function(){
        self.sublayer_stats.Hide();
        self.sublayer_bools.Hide();
    }

    var Get_Free_ID = function(){
        //searching free id
        let id;
        for (let id_enum = 0; id_enum < 1000; id_enum++){
            let found = false;
            let cur_name = "custom_" + id_enum;
            for (let i = 0; i < custom_mod_table.rows.length; i++){
                if (custom_mod_table.rows[i].name == cur_name){
                    found = true;
                    break;
                }
                //else NOTHING TO DO
            }

            if (!found){
                id = cur_name;
                break;
            }
            //else NOTHING TO DO
        }
        return id;
    }

//public methods
    this.Custom_Mod_Change_Category = function(event){
        var category = event.target.value;

        Hide_All_Sublayers();
        if (category == "---"){
            return;
        }

        for (let i = 0; i < m_stats_list.length; i++){
            if (category == m_stats_list[i].name){
                self.sublayer_stats.Show(m_stats_list[i].types);
                return;
            }
        }

        for (let i = 0; i < m_bool_list.length; i++){
            if (category == m_bool_list[i].name){
                self.sublayer_bools.Show(m_bool_list[i].types);
                return;
            }
        }
    }

    this.Add_Custom_Mod_To_Table = function(category, type, id, name, value){
        var row = custom_mod_table.insertRow(custom_mod_table.rows.length);
        row.class = 'class_row_custom_mod';
        row.name = id;

        var cell_name = row.insertCell(0);
        var cell_category = row.insertCell(1);
        var cell_type = row.insertCell(2);
        var cell_value = row.insertCell(3);
        var cell_remove_button = row.insertCell(4);

        cell_name.innerHTML = name;
        cell_category.innerHTML = category;
        cell_type.innerHTML = type;

        if (!isNaN(value)){
            var field_mod_value = document.createElement("input");
            var change_value_func = self.Custom_Mod_Change_Value.bind(null, id);
            field_mod_value.type = 'number';
            field_mod_value.value = value;
            field_mod_value.onchange = change_value_func;
            cell_value.appendChild(field_mod_value);
        }else{
            cell_value.innerHTML = value;
        }

        var remove_func = self.Custom_Mod_Remove.bind(null, id);
        var button_mod_remove = document.createElement("input");
        button_mod_remove.type = "button";
        button_mod_remove.value = "Удалить";
        button_mod_remove.onclick = remove_func;
        cell_remove_button.appendChild(button_mod_remove);
    }

    this.Add_Custom_Stats = function(name, category, type, value){
        if (name == ""){
            alert("Введите название для модификатора");
            return;
        }

        let id = Get_Free_ID();

        if (id == undefined){
            alert("Нельзя добавить более 1000 модификаторов.");
            return;
        }
        //else NOTHING TO DO

        if (chardata.stats.custom_mods.stats.Add(category, type, id, name, value)){
            self.Add_Custom_Mod_To_Table(category, type, id, name, value);
            m_owner_map.set(id, chardata.stats.custom_mods.stats);
        }
        //else NOTHING TO DO
    }

    this.Add_Custom_Bool = function(name, category, type){
        if (name == ""){
            alert("Введите название для модификатора");
            return;
        }

        let id = Get_Free_ID();

        if (id == undefined){
            alert("Нельзя добавить более 1000 модификаторов.");
            return;
        }
        //else NOTHING TO DO

        if (chardata.stats.custom_mods.bools.Add(category, type, id, name)){
            self.Add_Custom_Mod_To_Table(category, type, id, name, "+");
            m_owner_map.set(id, chardata.stats.custom_mods.bools);
        }
        //else NOTHING TO DO
    }

    this.Custom_Mod_Change_Value = function(event, id){
        if (!m_owner_map.has(id)){
            console.error("Custom mod '" + id + "' not found in owner map.");
            return;
        }

        m_owner_map.get(id).Change_Value(id, Number(event.target.value));
    }

    this.Custom_Mod_Remove = function(id){
        if (!m_owner_map.has(id)){
            console.error("Custom mod '" + id + "' not found in owner map.");
            return;
        }

        m_owner_map.get(id).Remove(id);

        for (let i = 0; i < custom_mod_table.rows.length; i++){
            var row = custom_mod_table.rows[i];
            if(row.name == id){
                custom_mod_table.deleteRow(i);
                break;
            }
        }
    }

    this.Stats_List_Get_Owner = function(category){
        for (let i = 0; i < m_stats_list.length; i++){
            if (m_stats_list[i].name == category){
                return m_stats_list[i].owner;
            }
        }
        console.warn("Attempt adding modifier of unknown category: " + category)
        return null;
    }

    this.Prof_List_Get_Owner = function(category){
        for (let i = 0; i < m_bool_list.length; i++){
            if (m_bool_list[i].name == category){
                return m_bool_list[i].owner;
            }
        }
        console.warn("Attempt adding modifier of unknown category: " + category)
        return null;
    }

    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        obj.stats.forEach(mod => {
           self.Add_Custom_Stats(mod.name, mod.category, mod.type, mod.value);
        });
        obj.bools.forEach(mod => {
           self.Add_Custom_Bool(mod.name, mod.category, mod.type);
        });
    }

//private properties
    var self = this;
    var m_stats_list;
    var m_bool_list;

    var m_owner_map;

    var custom_mod_table = document.getElementById("table_custom_mods");
    var category_selector = document.getElementById('custom_main_category');

//public properties
    this.sublayer_stats = new Sublayer_Custom_t(
        document.getElementById('sublayer_custom_stats'),
        document.getElementById('custom_stats_id'),
        document.getElementById('custom_stats_value'),
        document.getElementById('custom_stats_type'),
        this.Add_Custom_Stats
    );

    this.sublayer_bools = new Sublayer_Custom_t(
        document.getElementById('sublayer_custom_bools'),
        document.getElementById('custom_bools_id'),
        null,
        document.getElementById('custom_bools_type'),
        this.Add_Custom_Bool
    );

//additional initialization
    Reset();
}