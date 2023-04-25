function Custom_List_Entry_t (name, types, owner){
    this.name = name;
    this.types = types;
    this.owner = owner;
}

function Sublayer_Custom_t(sublayer_div, infield_id, infield_value, type_selector){
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
    
    this.Set_Callback = function(func){
        m_add_callback = func;
    }

    this.Add = function(){
        if (m_add_callback == null){
            console.error("add callback not set!")
            return;
        }
        
        let name = m_infield_id.value;
        let category = document.getElementById('custom_main_category').value;
        let type = m_type_selector.value;

        if (m_infield_value != null){
            let value = Number(m_infield_value.value);
            m_add_callback(category, type, name, value);
        }else{
            m_add_callback(category, type, name);
        }
    }

//private properties
    var self = this;
    var m_sublayer_div = sublayer_div;
    var m_infield_id = infield_id;
    var m_infield_value = infield_value;
    var m_type_selector = type_selector;
    var m_add_callback = null;

//public properties

//additional initialization
    Reset();
}

function Layer_Custom_t(){
//private methods

    var Hide_All_Sublayers = function(){
        self.sublayer_stats.Hide();
        self.sublayer_bools.Hide();
    }

//public methods
    this.Reset = function(){
        //TODO: move these lists somewhere as const, create selectors based on const
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
    }

    this.Clear_Table = function(){
        while (m_custom_mod_table.rows.length > 1){
            m_custom_mod_table.deleteRow(1);
        }
    }
       
    this.Add = function(
        id,
        name,
        category,
        type,
        value,
        onchange_func,
        remove_func
    ){
        var row = m_custom_mod_table.insertRow(m_custom_mod_table.rows.length);
        //row.class = 'class_row_custom_mod';
        row.name = id;

        var cell_name = row.insertCell(0);
        var cell_category = row.insertCell(1);
        var cell_type = row.insertCell(2);
        var cell_value = row.insertCell(3);
        var cell_remove_button = row.insertCell(4);

        cell_name.innerHTML = name;
        cell_category.innerHTML = category;
        cell_type.innerHTML = type;

        if (onchange_func != null){
            var field_mod_value = HTML_Create_Input_Number(
                value,
                undefined,
                undefined,
                onchange_func,
                undefined,
                undefined
            );
            cell_value.appendChild(field_mod_value);
        }else{
            cell_value.innerHTML = value;
        }
        
        var button_mod_remove = HTML_Create_Button(
            "Удалить",
            remove_func
        );
        cell_remove_button.appendChild(button_mod_remove);
    }
    
    this.Change_Value = function(id, new_value){
        let found_row = null;
        for (let i = 0; i < m_custom_mod_table.rows.length; i++){
            var row = m_custom_mod_table.rows[i];
            if(row.name == id){
                found_row = row;
                break;
            }
        }
        
        if (row == null){
            console.warn("Attempt it edit value of unknown custom mod: " + id);
            return;
        }
        
        let node = found_row.cells[3].childNodes[0];
        if (node == undefined){
            console.warn("Attempt to edit value of custom mod without value: " + id);
            return;
        }
        let x = found_row.cells[3].childNodes[0].value = new_value;
    }
    
    this.Remove = function(id){
        for (let i = 0; i < m_custom_mod_table.rows.length; i++){
            var row = m_custom_mod_table.rows[i];
            if(row.name == id){
                m_custom_mod_table.deleteRow(i);
                return;
            }
        }
        
        console.warn("Failed to remove unknown custom modifier from table");
    }

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

//private properties
    var self = this;
    var m_stats_list;
    var m_bool_list;

    var m_custom_mod_table = document.getElementById("table_custom_mods");
    var category_selector = document.getElementById('custom_main_category');

//public properties
    this.sublayer_stats = new Sublayer_Custom_t(
        document.getElementById('sublayer_custom_stats'),
        document.getElementById('custom_stats_id'),
        document.getElementById('custom_stats_value'),
        document.getElementById('custom_stats_type'),
    );

    this.sublayer_bools = new Sublayer_Custom_t(
        document.getElementById('sublayer_custom_bools'),
        document.getElementById('custom_bools_id'),
        null,
        document.getElementById('custom_bools_type'),
    );

//additional initialization
}