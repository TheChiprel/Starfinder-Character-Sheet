function Adapt_Skill_t (skill_name){
//constants
const MODIFIER_ID = "adapt_skill";

//private methods

//public methods
    this.Activate = function(){
        if (m_is_active){
            return;
        }

        let mod_map = chardata.skills.Get_Bool_Map(m_skill_name);
        if (mod_map.Add(MODIFIER_ID, true)){
            m_is_active = true;
        }
    }

    this.Deactivate = function(){
        if (!m_is_active){
            return;
        }

        m_is_active = false;
        let mod_map = chardata.skills.Get_Bool_Map(m_skill_name);
        mod_map.Remove(MODIFIER_ID, true);
    }

    this.Get_SaveData_Obj = function(){
        return m_skill_name;
    }

//private properties
    var self = this;
    var m_is_active = false;
    var m_skill_name = skill_name;

//public properties

//additional initialization
}

function Adapt_Skills_Collection_t (){
//constants
const ADEPT_SKILLS_COUNT = 2;
const SKILL_LIST = [
    SKILLS.LIFE_SCIENCE,
    SKILLS.BLUFF,
    SKILLS.SURVIVAL,
    SKILLS.ENGINEERING,
    SKILLS.COMPUTERS,
    SKILLS.CULTURE,
    SKILLS.SLEIGHT_OF_HAND,
    SKILLS.DISGUISE,
    SKILLS.MEDICINE,
    SKILLS.PILOTING,
    SKILLS.PHYSICAL_SCIENCE
];
const GUI_BLOCK = layers.classes.Get_Block(CLASSES.SOLARION).adept_skills;

//private methods
    var Init = function(){
        GUI_BLOCK.Reset(self, ADEPT_SKILLS_COUNT, SKILL_LIST);
    }

//public methods
    this.Set = function(row, skill_name){
        if (row >= ADEPT_SKILLS_COUNT){
            console.error("Attempt to set adapt skill out of bounds");
            return;
        }
        
        if ((skill_name != null) && !(SKILL_LIST.includes(skill_name))){
            console.error("Inappropriate skill to be set as adept skill: " + skill_name);
            return;
        }

        if (m_skills[row] != null){
            m_skills[row].Deactivate();
        }

        if (skill_name == null){
            m_skills[row] = null;
        }else{
            m_skills[row] = new Adapt_Skill_t(skill_name);
            m_skills[row].Activate();
        }
        
        GUI_BLOCK.Set(row, skill_name);
    }

    this.Update_Lvl = function(lvl){
        for (let i = 0; i < ADEPT_SKILLS_COUNT; i++){
            if (m_skills[i] == null){
                continue;
            }

            if (lvl > 0){
                m_skills[i].Activate();
            }else{
                m_skills[i].Deactivate();
            }
        }
    }

    this.Get_SaveData_Obj = function(){
        var ret = new Array(0);
        m_skills.forEach(cur_skill => {
            if (cur_skill == null){
                ret.push(null);
            }else{
                ret.push(cur_skill.Get_SaveData_Obj());
            }
        });
        return ret;
    }
    
    //TODO:
    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }

        for (let i = 0; i < obj.length; i++){
            self.Set(i, obj[i]);
        }
    }

//private properties
    var self = this;
    var m_skills = new Array(ADEPT_SKILLS_COUNT).fill(null);

//public properties

//additional initialization
    Init();
}

function Manifistation_Solar_Weapon_t(){
//constants
const MODIFIER_ID = "Звёздное оружие";

//private methods
    var Recalc_Weapon_Damage = function(lvl){
        if (lvl <= 0){
            m_weapon_dice = 0;
        }else if (lvl < 6){
            m_weapon_dice = "1d6";
        }else if (lvl < 9){
            m_weapon_dice = "2d6";
        }else if (lvl < 12){
            m_weapon_dice = "3d6";
        }else{
            m_weapon_dice = (4 + (lvl - 12)) + "d6";
        }
    }
    
    var Find_Crystal_Entry = function(name){
        for (let i = 0; i < CRYSTALS_DATABASE.length; i++){
            if (CRYSTALS_DATABASE[i].name == name){
                return CRYSTALS_DATABASE[i];
            }
        }
        return null;
    }

    var Init = function(){
        let lvl = chardata.classes.Get_Lvl(CLASSES.SOLARION)
        Recalc_Weapon_Damage(lvl);
        
        if (lvl > 0){
            var weapon_entry = {
                'name': "Звёздное оружие",
                'hands': "Одноручное",
                'type': "Высокотехнологичное ближнего боя",
                'subtype': null,
                'lvl': 0,
                'price': null,
                'dist': null,
                'damage': m_weapon_dice,
                'damage_type': "Д/К/Р",
                'crit_effect': null,
                'ammo_type': null,
                'capacity': null,
                'usage': null,
                'weight': "-",
                'special': null,
                'additional_info': null,
                'source': "ОКП"
            };
        }
        CRYSTALS_DATABASE.forEach(crystal => {
            SELECTOR_LIST.push(crystal.name);
        });
        
        m_weapon_id = layers.inventory.weapon_block.Add_By_Entry(weapon_entry, false);
        m_outfield_data.value = "(Добавлено в Инвентарь)";
    }

//public methods
    this.IsAlwaysActive = function(){
        return true;
    }

    this.Get_Selector_Options = function(){
        return ["Кристалл:", SELECTOR_LIST];
    }

    this.Activate = function(){
        console.error("Attempt to activate solar weapon");
    }

    this.Deactivate = function(){
        console.error("Attempt to deactivate solar weapon");
    }

    this.Clean = function(){
        if (m_weapon_id != null){
            layers.inventory.weapon_block.Remove(m_weapon_id);
        }
    }

    this.Update_Lvl = function(lvl){
        Recalc_Weapon_Damage(lvl);
        
        if (m_weapon_id != null){
            layers.inventory.weapon_block.Change_Base_Damage(m_weapon_id, m_weapon_dice);
        }
    }

    this.Selector_Changed = function(value){
        if (m_selector_value != null){
            layers.inventory.weapon_block.Remove_Crystal(m_weapon_id);
        }
        
        if (value != null){
            var entry = Find_Crystal_Entry(value);
            if (entry != null){
                layers.inventory.weapon_block.Set_Crystal(m_weapon_id, entry);
                m_selector_value = entry;
                return;
            }
        }
        
        m_selector_value = null;
    }

    this.Get_SaveData_Obj = function(){
        var ret = {
            'selector': m_selector_value.name
        };
        
        return ret;
    }

//private properties
    var self = this;
    var m_weapon_id = null;
    var m_weapon_dice = 0;
    var m_selector_value = null;
    var m_outfield_data = document.getElementById('outfield_manifistation_data');
    var SELECTOR_LIST = new Array(0);

//public properties

//additional initialization
    Init();
}

function Manifistation_Solar_Armor_t(){
//constants
const MODIFIER_ID = "manifistation_solar_armor";
const SELECTOR_LIST = ["Огонь", "Холод"];

//private methods
    var Recalc_Bonus = function(lvl){
        let outfield_str;

        if (lvl == 0){
            m_ac_bonus = 0;
            m_resist_bonus = 0;
        }else{
            m_ac_bonus = Math.floor(lvl/10) + 1;
            m_resist_bonus = Math.floor(lvl / 5) * 5;
        }

        outfield_str = "КБ: +" + m_ac_bonus;
        if (m_resist_bonus > 0){
            outfield_str += ", Устойчивость: " + m_resist_bonus;
        }
        m_outfield_data.value = outfield_str;
    }

    var Init = function(){
        Recalc_Bonus(chardata.classes.Get_Lvl(CLASSES.SOLARION));

        chardata.stats.defense.eac.modifier_map.Add(
            MODIFIER_ID,
            new Modifier_t(0, "Звёздная броня", null),
            false
        );
        chardata.stats.defense.kac.modifier_map.Add(
            MODIFIER_ID,
            new Modifier_t(0, "Звёздная броня", null),
            false
        );
    }

//public methods
    this.IsAlwaysActive = function(){
        return false;
    }

    this.Get_Selector_Options = function(){
        return ["Устойчивость:", SELECTOR_LIST];
    }

    this.Activate = function(){
        if (m_is_active){
            return;
        }

        Recalc_Bonus(chardata.classes.Get_Lvl(CLASSES.SOLARION));

        chardata.stats.defense.eac.modifier_map.Change_Value(MODIFIER_ID, m_ac_bonus, true);
        chardata.stats.defense.kac.modifier_map.Change_Value(MODIFIER_ID, m_ac_bonus, true);
        if (m_selector_value != null){
            chardata.stats.defense.resistance.Change_Value(
                m_selector_value,
                MODIFIER_ID,
                m_resist_bonus,
                true
            );
        }

        m_is_active = true;
    }

    this.Deactivate = function(){
        if (!m_is_active){
            return;
        }

        chardata.stats.defense.eac.modifier_map.Change_Value(MODIFIER_ID, 0, true);
        chardata.stats.defense.kac.modifier_map.Change_Value(MODIFIER_ID, 0, true);
        if (m_selector_value != null){
            chardata.stats.defense.resistance.Change_Value(
                m_selector_value,
                MODIFIER_ID,
                0,
                true
            );
        }

        m_is_active = false;
    }

    this.Clean = function(){
        chardata.stats.defense.eac.modifier_map.Remove(MODIFIER_ID, true);
        chardata.stats.defense.kac.modifier_map.Remove(MODIFIER_ID, true);

        if (m_selector_value != null){
            chardata.stats.defense.resistance.Remove(m_selector_value, MODIFIER_ID, true);
        }
    }

    this.Update_Lvl = function(lvl){
        Recalc_Bonus(lvl);
        if (m_is_active){
            chardata.stats.defense.eac.modifier_map.Change_Value(MODIFIER_ID, m_ac_bonus, true);
            chardata.stats.defense.kac.modifier_map.Change_Value(MODIFIER_ID, m_ac_bonus, true);

            if (m_selector_value != null){
                chardata.stats.defense.resistance.Change_Value(
                    m_selector_value,
                    MODIFIER_ID,
                    m_resist_bonus,
                    true
                );
            }
        }
    }

    this.Selector_Changed = function(value){
        if (m_selector_value != null){
            chardata.stats.defense.resistance.Remove(m_selector_value, MODIFIER_ID, true);
        }

        if ((value != null) && SELECTOR_LIST.includes(value)){
            chardata.stats.defense.resistance.Add(
                value,
                MODIFIER_ID,
                new Modifier_t(
                    (m_is_active ? m_resist_bonus : 0),
                    "Звёздная броня",
                    null,
                    MODIFIER_TYPES_T.MIN_VALUE
                ),
                true
            );
            m_selector_value = value;
        }else{
            m_selector_value = null;
        }
    }

    this.Get_SaveData_Obj = function(){
        var ret = {
            'is_active': m_is_active,
            'selector': m_selector_value
        };
        
        return ret;
    }

//private properties
    var self = this;
    var m_is_active = false;
    var m_ac_bonus = 0;
    var m_resist_bonus = 0;
    var m_selector_value = null;
    var m_outfield_data = document.getElementById('outfield_manifistation_data');

//public properties

//additional initialization
    Init();
}

function Manifistation_t(){
//constants
const GUI_BLOCK = layers.classes.Get_Block(CLASSES.SOLARION).manifistation;
const MANIFISTATION_SOLAR_WEAPON = "Звёздное оружие";
const MANIFISTATION_SOLAR_ARMOR = "Звёздная броня";

//private methods
    var Init = function(){
        GUI_BLOCK.Reset(self);
    }

//public methods
    this.Set = function(entry){
        let manif_type = null;
        if (entry != null){
            manif_type = entry.name;
        }

        
        if (m_context != null){
            m_context.Clean();
        }

        switch(manif_type){
        case MANIFISTATION_SOLAR_WEAPON:
            m_context = new Manifistation_Solar_Weapon_t();
            break;

        case MANIFISTATION_SOLAR_ARMOR:
            m_context = new Manifistation_Solar_Armor_t();
            break;

        case null:
        default:
            m_context = null;
            break;
        }
        
        if (m_context == null){
            GUI_BLOCK.Clear();
            m_entry = null;
            return false;
        }
        
        m_entry = entry;
        let [selector_label, selector_options] = m_context.Get_Selector_Options();
        GUI_BLOCK.Set(entry.name, m_context.IsAlwaysActive(), selector_label, selector_options);
        return true;
    }

    this.Clear = function(){
        if (m_context != null){
            m_context.Clean();
            m_context = null;
        }

        m_entry = null;
        GUI_BLOCK.Clear();
    }

    this.Update_Lvl = function(lvl){
        if (m_context != null){
            m_context.Update_Lvl(lvl);
        }
    }

    this.Activate = function(){
        m_context.Activate();
        GUI_BLOCK.Set_Active_State(true);
    }

    this.Deactivate = function(){
        m_context.Deactivate();
        GUI_BLOCK.Set_Active_State(false);
    }

    this.Selector_Changed = function(value){
        if (m_context == null){
            return false;
        }

        m_context.Selector_Changed(value);
        GUI_BLOCK.Set_Selector_Value(value);
    }

    this.Show_Details = function(){
        if (m_entry != null){
            Popup_Descr.Call(m_entry.name, m_entry.descr);
        }
    }

    this.Get_SaveData_Obj = function(){
        if (m_context == null){
            return null;
        }
        
        var ret = {
            'name': m_entry.name,
            'context': m_context.Get_SaveData_Obj()
        };
        return ret;
    }
    
    this.Load_From_Obj = function(obj){
        if ((obj == undefined) || obj.name == null){
            return;
        }
        
        //TODO: suffix unused here
        let [abi_name, abi_suffix] = Split_Ability_Name_Suffix(obj.name);
        //TODO: put smaller db here
        let abi_entry = Get_Ability_Entry_By_Name(ABILITIES_DATABASE, abi_name);
        self.Set(abi_entry);
        
        if (obj.context != undefined){
            if (obj.context.selector != undefined){
                self.Selector_Changed(obj.context.selector);
            }
            
            if (obj.context.is_active){
                self.Activate();
            }
        }
    }

//private properties
    var self = this;
    var m_context = null;
    var m_entry = null;
    
//additional initialization
    Init();
}

function Class_Solarion_t (){
//constants
const ABILITY_LIST = [
    ["Звёздное воплощение"],
    ["Звёздное откровение"],
    ["Звёздный режим"],
    ["Знаток навыков"],
    ["Сидерическое влияние"],
    ["Привычное оружие [Солярион]"],
    ["Блистательные удары"],
    ["Наивысшие откровения"],
    ["Солярионский натиск"],
    ["Звёздный идеал"]
];
const CLASS_ABILITY_LVLS = [1, 1, 1, 1, 3, 3, 7, 9, 13, 20];
const REVELATIONS_LVLS = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const STELLAR_MODES_LIST = [
    ["Гравитонный режим"],
    ["Нейтральный режим"],
    ["Фотонный режим"]
];
const STELLAR_MODES_LVLS = [1, 1, 1];
const ZENITHS_LVLS = [1, 9, 17];
const ADEPT_SKILL_COUNT = 2;

//private methods
    var Init = function(){
        let solarion_db = Ability_Database_GetList(ABILITIES_DATABASE, "Класс", ["Солярион"]);
        
        let curr_db = Ability_Database_GetList(solarion_db, undefined, ["Способность класса"]);
        for (let i = 0; i < ABILITY_LIST.length; i++){
            if (ABILITY_LIST[i].length == 1){
                let abi_name_full = ABILITY_LIST[i][0];
                let [abi_name, abi_suffix] = Split_Ability_Name_Suffix(abi_name_full);
                let abi_entry = Get_Ability_Entry_By_Name(curr_db, abi_name);
                self.class_abilities.Set(i, abi_entry, abi_suffix);
            }else{
                //TODO?
            }
        }
        
        curr_db = Ability_Database_GetList(
            solarion_db, undefined, ["Звёздный режим"]);
        for (let i = 0; i < STELLAR_MODES_LIST.length; i++){
            if (STELLAR_MODES_LIST[i].length == 1){
                let abi_name_full = STELLAR_MODES_LIST[i][0];
                let [abi_name, abi_suffix] = Split_Ability_Name_Suffix(abi_name_full);
                let abi_entry = Get_Ability_Entry_By_Name(curr_db, abi_name);
                self.stellar_modes.Set(i, abi_entry, abi_suffix);
            }else{
                //TODO?
            }
        }
        
        self.zeniths_graviton.Set(0, Get_Ability_Entry_By_Name(solarion_db, "Чёрная дыра"), undefined);
        self.zeniths_photon.Set(0, Get_Ability_Entry_By_Name(solarion_db, "Сверхновая"), undefined);
        
        layers.classes.Get_Block(CLASSES.SOLARION).zeniths_graviton.Set_Row_Const_State(0, true);
        layers.classes.Get_Block(CLASSES.SOLARION).zeniths_photon.Set_Row_Const_State(0, true);
    }

//public methods
    this.Set_Lvl = function(lvl){
        self.lvl = lvl;
        self.class_abilities.Update_Lvl(self.lvl);
        self.stellar_modes.Update_Lvl(self.lvl);
        self.adept_skills.Update_Lvl(self.lvl);
        self.revelations.Update_Lvl(self.lvl);
        self.zeniths_graviton.Update_Lvl(self.lvl);
        self.zeniths_photon.Update_Lvl(self.lvl);
        self.manifistation.Update_Lvl(self.lvl);
    }

    this.Set_Adept_Skill = function(row, skill){
        self.adept_skills[row] = skill;
    }

    this.Get_SaveData_Obj = function(){
        var ret = {
            'lvl': self.lvl,
            'adept_skills': self.adept_skills.Get_SaveData_Obj(),
            'revelations': self.revelations.Get_SaveData_Obj(),
            'zeniths_graviton': self.zeniths_graviton.Get_SaveData_Obj(),
            'zeniths_photon': self.zeniths_photon.Get_SaveData_Obj(),
            'manifistation': self.manifistation.Get_SaveData_Obj()
        }
        return ret;
    }
    
    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        self.adept_skills.Load_From_Obj(obj.adept_skills);
        self.revelations.Load_From_Obj(obj.revelations);
        self.zeniths_graviton.Load_From_Obj(obj.zeniths_graviton);
        self.zeniths_photon.Load_From_Obj(obj.zeniths_photon);
        self.manifistation.Load_From_Obj(obj.manifistation);
    }

//private properties
    var self = this;

//public properties
    this.lvl = 0;
    this.class_abilities = new Leveled_Ability_List_t(
        "abi_class_solarion",
        "Классовые способности (Солярион)",
        CLASS_ABILITY_LVLS,
        "solarion_class_",
        layers.classes.Get_Block(CLASSES.SOLARION).class_abilities,
        true);
    this.stellar_modes = new Leveled_Ability_List_t(
        "abi_class_solarion_modes",
        "Звёздные режимы",
        STELLAR_MODES_LVLS,
        "solarion_stellar_mode_",
        layers.classes.Get_Block(CLASSES.SOLARION).stellar_modes,
        true);
    this.adept_skills = new Adapt_Skills_Collection_t();
    this.revelations = new Leveled_Ability_List_t(
        "abi_class_solarion_revelations",
        "Звёздные откровения",
        REVELATIONS_LVLS,
        "solarion_revelation_",
        layers.classes.Get_Block(CLASSES.SOLARION).revelations);
    this.zeniths_graviton = new Leveled_Ability_List_t(
        "abi_class_solarion_zeniths_grav",
        "Высшие откровения (Гравитонные)",
        ZENITHS_LVLS,
        "solarion_zeniths_graviton_",
        layers.classes.Get_Block(CLASSES.SOLARION).zeniths_graviton);
    this.zeniths_photon = new Leveled_Ability_List_t(
        "abi_class_solarion_zeniths_photon",
        "Высшие откровения (Фотонные)",
        ZENITHS_LVLS,
        "solarion_zeniths_photon_",
        layers.classes.Get_Block(CLASSES.SOLARION).zeniths_photon);
    this.manifistation = new Manifistation_t();

//additional initialization
    Init();
}