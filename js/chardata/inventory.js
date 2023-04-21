function Weapon_t(database_entry, row, is_from_database = true){
    const BASIC_HIT_MOD_ID_T = Object.freeze(
        {
            "ATTACK_MOD": 'ATTACK_MOD',
            "WEAPON_PROF": 'WEAPON_PROF'
        }
    );
    const BASIC_DAMAGE_ID_T = Object.freeze(
        {
            "DICE": 'DICE',
            "STR": 'STR',
            "SPEC": 'SPEC',
            "CRYSTAL": 'CRYSTAL'
        }
    );

//private methods
    var Set_Hit_Mod_Field_Values = function(){
        self.row.cells[1].innerHTML = GetModifierStr(self.hit_mod); //TODO: magic!
    }

    var Set_Damage_Field_Values = function(){
        self.row.cells[2].innerHTML = self.damage; //TODO: magic!
    }
    
    var Set_Crit_Effect_Field = function(){
        
    }
    
    var Set_Special_Field = function(){
        
    }

    var Update_Hit_Mod_Map = function(){
        //updating attack modifier
        let base_mod = 0;
        let prof_modifier = -4;

        switch (self.mod_type){
        case WEAPON_MODIFIER.OPERATIVE:
            base_mod = chardata.stats.attacks.operative.sum;
            break;

        case WEAPON_MODIFIER.MELEE:
            base_mod = chardata.stats.attacks.melee.sum;
            break;

        case WEAPON_MODIFIER.RANGED:
            base_mod = chardata.stats.attacks.ranged.sum;
            break;

        default:
            console.warn("Attempting to change modifier for weapon with unknown attack modifier type")
            break;
        }
        self.modifier_hit_map.Change_Value(
            BASIC_HIT_MOD_ID_T.ATTACK_MOD,
            base_mod);

        //updating proficiency
        if (chardata.stats.weapon_proficiency.Is_Set(self.w_type)){
            prof_modifier = 0;
        }
        //else NOTHING TO DO
        self.modifier_hit_map.Change_Value(
            BASIC_HIT_MOD_ID_T.WEAPON_PROF,
            prof_modifier);
    }

    var Update_Damage_Mod_Map = function(){
        //updating specialization modifier
        let spec_mod = 0;
        if (chardata.stats.weapon_specialization.Is_Set(self.w_type)){
            spec_mod = chardata.lvl.sum;
        }
        self.damage_map.Change_Value(
            BASIC_DAMAGE_ID_T.SPEC,
            spec_mod);

        //updating STR modifier for melee weapon
        if (self.is_melee){
            self.damage_map.Change_Value(
                BASIC_DAMAGE_ID_T.STR,
                chardata.stats.abiscores.modifiers.Get_Sum(ABISCORES.STR));
        }
    }

//functions
    this.Recalc_Hit_Mod = function(){
        Update_Hit_Mod_Map();

        let new_sum = self.modifier_hit_map.Get_Sum();
        if (new_sum != self.hit_mod){
            self.hit_mod = new_sum;
            Set_Hit_Mod_Field_Values();
        }
    }

    this.Recalc_Damage_Mod = function(){
        Update_Damage_Mod_Map();

        let new_sum = self.damage_map.Get_Sum();
        if (new_sum != self.damage){
            self.damage = new_sum;
            Set_Damage_Field_Values();
        }
    }

    this.Show_Hit_Detail_Popup = function(){
        Popup_Stat_Details.Call("Модификатор попадания (" + self.entry.name + ")", self.hit_mod, self.modifier_hit_map.Get_Mod_Map(), true);
    }

    this.Show_Damage_Detail_Popup = function(){
        Popup_Stat_Details.Call("Урон", self.damage, self.damage_map.Get_Mod_Map(), false);
    }
    
    this.Change_Base_Damage = function(new_value){
        if (new_value != self.base_damage){
            self.base_damage = new_value;
            self.damage_map.Change_Value(
                BASIC_DAMAGE_ID_T.DICE,
                new_value);
            self.Recalc_Damage_Mod();
        }
    }
    
    this.Set_Crystal = function(entry){
        if (self.crystal != null){
            self.Remove_Crystal();
        }
        
        self.crystal = entry;
        if (entry.damage.includes("d")){
            self.damage_map.Add(
                BASIC_DAMAGE_ID_T.CRYSTAL,
                new Damage_Modifier_t(entry.damage, entry.damage_type, entry.name, null, MODIFIER_TYPES_T.DICE)
            );
        }else{
            self.damage_map.Add(
                BASIC_DAMAGE_ID_T.CRYSTAL,
                new Damage_Modifier_t(parseInt(entry.damage), entry.damage_type, entry.name, null)
            );
        }
        self.Recalc_Damage_Mod();
    }
    
    this.Remove_Crystal = function(){
        if (self.crystal == null){
            console.error("Attempt to remove crystal from weapon with no crystal.");
        }
        
        self.damage_map.Remove(BASIC_DAMAGE_ID_T.CRYSTAL);
        self.Recalc_Damage_Mod();
        
        self.crystal = null;
    }

    this.Get_SaveData_Obj = function(){
        var ret = {
            name: self.entry.name
        }
        return ret;
    }

//private properties
    var self = this;

//public properties
    this.base_damage = database_entry.damage;
    this.w_type = WEAPON_TYPES.UNKNOWN; //will be set lower
    this.mod_type = WEAPON_MODIFIER.NONE; //will be set lower
    this.is_melee = false; //will be set lower
    this.hit_mod = 0;
    this.damage = 0;
    this.row = row;
    this.modifier_hit_map = new Modifier_Map_t(this.Recalc);
    this.damage_map = new Damage_Map_t(this.Recalc);
    this.is_from_database = is_from_database;
    this.crystal = null;
    this.entry = database_entry;

//additional initialization
    //getting weapon type
    for (let i = 0; i < Object.values(WEAPON_TYPES).length; i++){
        var cur_w_type = Object.values(WEAPON_TYPES)[i];
        if (database_entry.type == cur_w_type){
            this.w_type = cur_w_type;
            break;
        }
    }
    if (WEAPON_TYPES.UNKNOWN == this.w_type){
        console.warn("Added weapon '" + database_entry.name + "' has unknown type");
    }

    switch (database_entry.type){
    case WEAPON_TYPES.MELEE_SIMPLE:
        if (database_entry.special.includes('Оперативное') || database_entry.special.includes('оперативное')){  //TODO: magic!
            this.mod_type = WEAPON_MODIFIER.OPERATIVE;
        }else{
            this.mod_type = WEAPON_MODIFIER.MELEE;
        }
        break;

    case WEAPON_TYPES.MELEE_ADVANCED:
    case WEAPON_TYPES.MELEE_SPECIAL:
        this.mod_type = WEAPON_MODIFIER.MELEE;
        break;

    case WEAPON_TYPES.RANGED_SMALL:
    case WEAPON_TYPES.RANGED_LONG:
    case WEAPON_TYPES.RANGED_HEAVY:
    case WEAPON_TYPES.RANGED_SNIPER:
    case WEAPON_TYPES.RANGED_SPECIAL:
        this.mod_type = WEAPON_MODIFIER.RANGED;
        break;

    default:
        break;
    }
    if (WEAPON_MODIFIER.NONE == this.mod_type){
        console.warn("Added weapon '" + database_entry.name + "' has unknown attack roll modifier type");
    }

    if ((this.w_type == WEAPON_TYPES.MELEE_SIMPLE) || (this.w_type == WEAPON_TYPES.MELEE_ADVANCED) || (this.w_type == WEAPON_TYPES.MELEE_SPECIAL)){
        this.is_melee = true;
    }
    //else NOTHING TO DO, already set to false

    this.modifier_hit_map.Add(
        BASIC_HIT_MOD_ID_T.ATTACK_MOD,
        new Modifier_t(0, "Модификатор атаки", this.mod_type));
    this.modifier_hit_map.Add(
        BASIC_HIT_MOD_ID_T.WEAPON_PROF,
        new Modifier_t(-4, "Отсутствие владения типом оружия", this.w_type));

    this.damage_map.Add(
        BASIC_DAMAGE_ID_T.DICE,
        new Damage_Modifier_t(this.base_damage, this.entry.damage_type, "Урон оружия", null, MODIFIER_TYPES_T.DICE));
    this.damage_map.Add(
        BASIC_DAMAGE_ID_T.STR,
        new Damage_Modifier_t(0, this.entry.damage_type, ABISCORES.STR));
    this.damage_map.Add(
        BASIC_DAMAGE_ID_T.SPEC,
        new Damage_Modifier_t(0, this.entry.damage_type, "Привычное оружие", this.w_type));

    this.Recalc_Hit_Mod();
    this.Recalc_Damage_Mod();
}

function Weapon_Collection_t(){
//private methods
    var Add_Weapon_To_Recalc_Func = function(weapon_num){
        //getting the weapon
        var weapon = m_arr[weapon_num];


        var recalc_mod = new Recalc_Function_t (weapon.row.name + "_mod", weapon.Recalc_Hit_Mod);
        var recalc_dmg = new Recalc_Function_t (weapon.row.name + "_dmg", weapon.Recalc_Damage_Mod);

        //adding modifier recalc function
        chardata.stats.weapon_proficiency.Add_Recalc_Func(weapon.w_type, recalc_mod);
        chardata.stats.attacks.Add_Recalc_Func(weapon.mod_type, recalc_mod);

        //adding damage recalc function
        chardata.stats.weapon_specialization.Add_Recalc_Func(weapon.w_type, recalc_dmg);
        chardata.lvl.arr_recalc_functions.Add(recalc_dmg);
        if (weapon.is_melee){
            chardata.stats.abiscores.modifiers.AddRecalcFunc(ABISCORES.STR, recalc_dmg);
        }
        //else NOTHING TO DO
    }

    var Remove_Weapon_From_Recalc_Func = function(weapon_num){
        var weapon = m_arr[weapon_num];
        var recalc_mod_id = weapon.row.name + "_mod";
        var recalc_dmg_id = weapon.row.name + "_dmg";

        //removing modifier recalc function
        chardata.stats.weapon_proficiency.Remove_Recalc_Func(weapon.w_type, recalc_mod_id);
        chardata.stats.attacks.Remove_Recalc_Func(weapon.mod_type, recalc_mod_id);

        //removeing damage recalc function
        chardata.stats.weapon_specialization.Remove_Recalc_Func(weapon.w_type, recalc_dmg_id);
        chardata.lvl.arr_recalc_functions.Remove(recalc_dmg_id);
        if (weapon.is_melee){
            chardata.stats.abiscores.modifiers.RemoveRecalcFunc(ABISCORES.STR, recalc_dmg_id);
        }
    }

//public methods
    this.Add = function(database_entry, row, is_from_database){
        var new_weapon = new Weapon_t (database_entry, row, is_from_database)
        var len = m_arr.push(new_weapon);
        Add_Weapon_To_Recalc_Func(len - 1);
        chardata.inventory.weight.Add_Item(row.name, database_entry.weight, database_entry.name, count = 1);
        layers.face.block_inventory.weapons.Add(new_weapon);
        return true;
    }

    this.Remove = function(table_row){
        Remove_Weapon_From_Recalc_Func(table_row);
        chardata.inventory.weight.Remove_Item(m_arr[table_row].row.name);
        m_arr.splice(table_row, 1);
        layers.face.block_inventory.weapons.Remove(table_row);
    }
    
    this.Set_Crystal = function(table_row, entry){
        m_arr[table_row].Set_Crystal(entry);
    }
    
    this.Remove_Crystal = function(table_row){
        m_arr[table_row].Remove_Crystal();
    }
    
    this.Change_Base_Damage = function(table_row, new_value){
        m_arr[table_row].Change_Base_Damage(new_value);
    }

    this.Show_Hit_Detail_Popup = function(table_row){
        m_arr[table_row].Show_Hit_Detail_Popup();
    }

    this.Show_Damage_Detail_Popup = function(table_row){
        return m_arr[table_row].Show_Damage_Detail_Popup();
    }

    this.Get_SaveData_Obj = function(){
        var ret = new Array(0);
        m_arr.forEach(weapon => {
            if (weapon.is_from_database){
                ret.push(weapon.Get_SaveData_Obj());
            }
        });
        return ret;
    }

//public properties

//private properties
    var self = this;
    var m_arr = new Array(0);
}

function Grenade_t(database_entry, in_count = 1, row){
const BASIC_MOD_ID_T = Object.freeze(
        {
            "BASE_DC": 'BASE_DC',
            "AGI": 'AGI',
            "LVL": 'LVL'
        }
    );

//private methods
    var Set_DC_Field_Values = function(){
       self.row.cells[1].innerHTML = self.dc; //TODO: magic!
    }

    var Update_Mod_Map = function(){
        //updating AGI modifier
        self.dc_modifier_map.Change_Value(
            BASIC_MOD_ID_T.AGI,
            chardata.stats.abiscores.modifiers.Get_Sum(ABISCORES.AGI));
    }

//public methods
    this.Recalc_DC = function(){
        Update_Mod_Map();

        let new_sum = self.dc_modifier_map.Get_Sum();
        if (new_sum != self.dc){
            self.dc = new_sum;
            Set_DC_Field_Values();
        }
    }

    this.Show_DC_Detail_Popup = function(){
        Popup_Stat_Details.Call("СЛ гранаты (" + self.entry.name + ")", self.dc, self.dc_modifier_map.Get_Mod_Map(), false);
    }

    this.Get_SaveData_Obj = function(){
        var ret = {
            name: self.entry.name, //m_name,
            count: self.count
        }
        return ret;
    }

//private properties
    var self = this;
    // var m_dc_mod_map;
    //var m_name = database_entry.name;
    this.dc_modifier_map = new Modifier_Map_t(this.Recalc_DC);

//public properties
    //this.lvl = database_entry.lvl;
    this.dc; //value set later later
    this.row = row;
    this.count = in_count;
    this.entry = database_entry;

//additional initialization
    this.dc_modifier_map.Add(
        BASIC_MOD_ID_T.BASE_DC,
        new Modifier_t(10, "Базовая СЛ"));
    this.dc_modifier_map.Add(
        BASIC_MOD_ID_T.AGI,
        new Modifier_t(0, ABISCORES.AGI));
    this.dc_modifier_map.Add(
        BASIC_MOD_ID_T.LVL,
        new Modifier_t(Math.floor(this.entry.lvl / 2), "Уровень гранаты"));
    this.Recalc_DC();
}

function Grenade_Collection_t(){
//constants
const ID_PREFIX = "grenade_";

    const BASIC_MOD_ID_T = Object.freeze(
        {
            "ATTACK_MOD": 'ATTACK_MOD',
            "PROF": 'PROF'
        }
    );

//private methods
    var Set_Throw_Field_Values = function(){
        outfield_throw_mod.innerHTML = GetModifierStr(self.throw_mod);
    }

    var Update_Throw_Mod_Map = function(){
        //updating proficiency
        let prof_modifier = -4;
        if (chardata.stats.weapon_proficiency.Is_Set(WEAPON_TYPES.GRENADE)){
            prof_modifier = 0;
        }
        //else NOTHING TO DO
        self.throw_modifier_map.Change_Value(
            BASIC_MOD_ID_T.PROF,
            prof_modifier);

        //updating thrown weapon modifier
        self.throw_modifier_map.Change_Value(
            BASIC_MOD_ID_T.ATTACK_MOD,
            chardata.stats.attacks.thrown.sum);
    }

//public methods
    this.Add = function(database_entry, in_count = 1, row){
        var len = m_arr.push(new Grenade_t (database_entry, in_count, row));
        chardata.inventory.weight.Add_Item(
            ID_PREFIX + row.name,
            database_entry.weight,
            database_entry.name,
            in_count);
        return true;
    }

    this.Remove = function(table_row){
        chardata.inventory.weight.Remove_Item(ID_PREFIX + m_arr[table_row].row.name);
        m_arr.splice(table_row, 1);
    }

    this.Change_Count = function(num, value){
        let cur_grenade = m_arr[num];
        cur_grenade.count = value;
        chardata.inventory.weight.Change_Count(ID_PREFIX + cur_grenade.row.name, value);
    }

    this.Recalc_All_DC = function(){
        m_arr.forEach(grenade => {
            grenade.Recalc_DC();
        });
    }

    this.Recalc_Throw_Mod = function(){
        Update_Throw_Mod_Map();

        let new_sum = self.throw_modifier_map.Get_Sum();
        if (new_sum != self.throw_mod){
            self.throw_mod = new_sum;
            Set_Throw_Field_Values();
        }
    }

    this.Show_Throw_Mod_Detail_Popup = function(){
        Popup_Stat_Details.Call("Модификатор атаки гранатами", self.throw_mod, self.throw_modifier_map.Get_Mod_Map());
    }

    this.Show_DC_Detail_Popup = function(row){
        m_arr[row].Show_DC_Detail_Popup();
    }
    
    this.Open_Descr_Tooltip = function(row){
        let grenade = m_arr[row];
        let text = grenade.entry.special;
        if (grenade.entry.additional_info != null){
            text += ".\n" + grenade.entry.additional_info;
        }
        Popup_Descr.Call(grenade.entry.name, text);
    }

    this.Get_SaveData_Obj = function(){
        var ret = new Array(0);
        m_arr.forEach(grenade => {
            ret.push(grenade.Get_SaveData_Obj());
        });
        return ret;
    }

//private properties
    var self = this;
    var outfield_throw_mod = document.getElementById("outfield_grenade_mod");
    var m_arr = new Array(0);
    /* var m_throw_mod_map; */

//public properties
    this.throw_mod = -4;
    this.throw_modifier_map = new Modifier_Map_t(this.Recalc);
    /* this.throw_mod_other = new Other_Mod_Collection_t (); */

//additional initialization
    Set_Throw_Field_Values();

    this.throw_modifier_map.Add(
        BASIC_MOD_ID_T.ATTACK_MOD,
        new Modifier_t(0, "Модификатор атаки", WEAPON_MODIFIER.THROWN));
    this.throw_modifier_map.Add(
        BASIC_MOD_ID_T.PROF,
        new Modifier_t(-4, "Отсутствие владения типом оружия", WEAPON_TYPES.GRENADE));

}

function Armor_t(){
//private methods
    var Clean_Prof_Recalc_Functions = function(){
        let armor_type = self.Get_Armor_Type();
        if (armor_type != ARMOR_TYPES.NONE){
            chardata.stats.armor_proficiency.Remove_Recalc_Func(armor_type, 'eac');
            chardata.stats.armor_proficiency.Remove_Recalc_Func(armor_type, 'kac');
        }
        //else NOTHING TO DO
    }

    var Recalc_Armor_Upgr_Slots_Cur = function(){
        var slots_used = 0;
        for (let i = 0; i < self.upgrades.length; i++){
            slots_used += self.upgrades[i].slots;
        }
        layers.inventory.armor_block.upgrades.Update_Slots_Used(slots_used);
    }

//public methods
    //TODO: power armor
    this.Set = function(entry){
        Clean_Prof_Recalc_Functions();
        chardata.stats.armor_proficiency.Add_Recalc_Func(
            entry.type,
            new Recalc_Function_t ('eac', chardata.stats.defense.eac.Recalc));
        chardata.stats.armor_proficiency.Add_Recalc_Func(
            entry.type,
            new Recalc_Function_t ('kac', chardata.stats.defense.kac.Recalc));

        self.entry = entry;
        chardata.stats.defense.eac.Set_Armor_Value(entry.name, entry.eac);
        chardata.stats.defense.kac.Set_Armor_Value(entry.name, entry.kac);
        chardata.stats.defense.armor_limit_agi.Set_Armor_Value(entry.max_agi);
        chardata.skills.Set_Armor_Penalty(entry.name, entry.penalty);
        chardata.stats.speeds.Set_Armor_Penalty(entry.name, entry.speed);

        chardata.inventory.weight.Change_Weight("armor", entry.weight);
        layers.inventory.armor_block.upgrades.Update_Slots_Max(entry.upgrades);
    }

    this.Remove = function(){
        Clean_Prof_Recalc_Functions();

        this.entry = null;
        chardata.stats.defense.eac.Set_Armor_Value("Без брони", 0);
        chardata.stats.defense.kac.Set_Armor_Value("Без брони", 0);
        chardata.stats.defense.armor_limit_agi.Set_Armor_Value(Infinity);
        chardata.skills.Set_Armor_Penalty("Без брони", 0);
        chardata.stats.speeds.Set_Armor_Penalty("Без брони", 0);

        chardata.inventory.weight.Change_Weight("armor", 0);
        layers.inventory.armor_block.upgrades.Update_Slots_Max(0);
    }

    this.Get_Armor_Type = function(){
        if (self.entry == null){
            return ARMOR_TYPES.NONE;
        }
        //else NOTHING TO DO

        switch (self.entry.type){
            case ARMOR_TYPES.NONE:
            case ARMOR_TYPES.LIGHT:
            case ARMOR_TYPES.HEAVY:
            case ARMOR_TYPES.POWER:
                return self.entry.type;

            default:
                break;
        }
        return ARMOR_TYPES.UNKNOWN;
    }

    this.Add_Armor_Upgr = function(entry){
        self.upgrades.push(entry);
        chardata.inventory.weight.Add_Item("armor_upgr_" + entry.name, entry.weight, entry.name);

        Recalc_Armor_Upgr_Slots_Cur();
    }

    this.Remove_Armor_Upgr = function(row){
        chardata.inventory.weight.Remove_Item("armor_upgr_" + self.upgrades[row].name);
        self.upgrades.splice(row, 1);

        Recalc_Armor_Upgr_Slots_Cur();
    }

    this.Open_Descr_Tooltip = function(in_name){
        for (let i = 0; i < self.upgrades.length; i++){
            armor_upgr = self.upgrades[i];
            if (armor_upgr.name == in_name){
                Popup_Descr.Call(in_name, armor_upgr.descr);
                return;
            }
        }
    }

    this.Get_SaveData_Obj = function(){
        var ret = {
            name: null,
            upgrades: new Array(0)
        };

        if (self.entry != null){
            ret.name = self.entry.name;
        }
        //else NOTHING TO DO

        self.upgrades.forEach(upgr => {
            ret.upgrades.push(upgr.name);
        });
        return ret;
    }

//private properties
    var self = this;

//public properties
    this.entry = null;
    this.upgrades = new Array(0);   //for now it is collection of entries
}

function Augment_t(database_entry){
//public methods
    this.Get_SaveData_Obj = function(){
        var ret = {
            name: self.entry.name
        }
        return ret;
    }

//private properties
    var self = this;

//public properties
    this.entry = database_entry;
}

function Augment_Collection_t(){
//public methods
    this.Add = function(database_entry){
        var len = m_arr.push(new Augment_t (database_entry));
        return true;
    }

    this.Remove = function(table_row){
        m_arr.splice(table_row, 1);
    }

    this.Open_Descr_Tooltip = function(in_name){
        for (let i = 0; i < m_arr.length; i++){
            var augment = m_arr[i];
            if (augment.entry.name == in_name){
                Popup_Descr.Call(in_name, augment.entry.descr);
                return;
            }
        }
    }

    this.Get_SaveData_Obj = function(){
        var ret = new Array(0);
        m_arr.forEach(augment => {
            ret.push(augment.Get_SaveData_Obj());
        });
        return ret;
    }

//private properties
    var m_arr = new Array(0);
}

function Equipment_t(entry, in_count = 1){
//public methods
    this.Get_SaveData_Obj = function(){
        var ret = {
            name: self.entry.name,
            count: self.count
        }
        return ret;
    }

//private properties
    var self = this;

//public properties
    this.entry = entry;
    this.count = in_count;
}

function Equipment_Collection_t(){
//constants
const ID_PREFIX = "item_";

//public methods
    this.Add = function(entry, in_count = 1){
        m_arr.push(new Equipment_t(entry, in_count));
        chardata.inventory.weight.Add_Item(
            ID_PREFIX + entry.name,
            entry.weight,
            entry.name,
            in_count);
    }

    this.Remove = function(num){
        chardata.inventory.weight.Remove_Item(ID_PREFIX + m_arr[num].entry.name);
        m_arr.splice(num, 1);
    }

    this.Change_Count = function(num, value){
        let cur_item = m_arr[num];
        cur_item.count = value;
        chardata.inventory.weight.Change_Count(ID_PREFIX + cur_item.entry.name, value);
    }

    this.Open_Descr_Tooltip = function(in_name){
        for (let i = 0; i < m_arr.length; i++){
            var equipment_item = m_arr[i];
            if (equipment_item.entry.name == in_name){
                Popup_Descr.Call(in_name, equipment_item.entry.descr);
                return;
            }
        }
    }

    this.Get_SaveData_Obj = function(){
        var ret = new Array(0);
        m_arr.forEach(item => {
            ret.push(item.Get_SaveData_Obj());
        });
        return ret;
    }

//private properties
    var self = this;
    var m_arr = new Array(0);
}

function Ammo_t(id, in_count, entry){
//public methods
    this.Get_SaveData_Obj = function(){
        var ret = {
            name: self.entry.name,
            count: self.count
        }
        return ret;
    }

//private properties
    var self = this;

//public properties
    this.id = id;
    this.entry = entry;
    this.count = in_count;
}

function Ammo_Collection_t(){
//constants
const ID_PREFIX = "ammo_";

//public methods
    this.Add = function(id, in_count, entry){
        let new_id = ID_PREFIX + id
        m_arr.push(new Ammo_t(new_id, in_count, entry));
        chardata.inventory.weight.Add_Item(new_id, entry.weight, entry.name);
    }

    this.Remove = function(num){
        chardata.inventory.weight.Remove_Item(m_arr[num].id);
        m_arr.splice(num, 1);
    }

    this.Change_Count = function(num, value){
        let cur_ammo = m_arr[num];
        cur_ammo.count = value;
    }

    this.Get_SaveData_Obj = function(){
        var ret = new Array(0);
        m_arr.forEach(item => {
            ret.push(item.Get_SaveData_Obj());
        });
        return ret;
    }

//private properties
    var self = this;
    var m_arr = new Array(0);
}

function Custom_Item_t(id, name, descr, weight, count){
//public methods
    this.Get_SaveData_Obj = function(){
        var ret = {
            name: self.name,
            descr: self.descr,
            weight: self.weight,
            count: self.count
        }
        return ret;
    }

//private properties
    var self = this;

//public properties
    this.id = id;
    this.name = name;
    this.descr = descr;
    this.weight = weight;
    this.count = count;
}

function Custom_Item_Collection_t(){
//public methods
    this.Add = function(id, name = "", descr = "", weight = "", count = 1){
        m_arr.push(new Custom_Item_t(id, name, descr, weight, count));
        chardata.inventory.weight.Add_Item(id, 0, "");
    }

    this.Remove = function(num){
        chardata.inventory.weight.Remove_Item(m_arr[num].id);
        m_arr.splice(num, 1);
    }

    this.Change_Name = function(num, value){
        let cur_item = m_arr[num];
        cur_item.name = value;
        chardata.inventory.weight.Change_Name(cur_item.id, value);
    }

    this.Change_Descr = function(num, value){
        m_arr[num].descr = value;
    }

    this.Change_Count = function(num, value){
        let cur_item = m_arr[num];
        cur_item.count = value;
        chardata.inventory.weight.Change_Count(cur_item.id, value);
    }

    this.Change_Weight = function (num, value){
        let cur_item = m_arr[num];
        cur_item.weight = value;
        chardata.inventory.weight.Change_Weight(cur_item.id, value);
    }

    this.Get_SaveData_Obj = function(){
        var ret = new Array(0);
        m_arr.forEach(item => {
            ret.push(item.Get_SaveData_Obj());
        });
        return ret;
    }

//private properties
    var self = this;
    var m_arr = new Array(0);
}

function Weight_Entry_t(id, weight, name, count){
    this.id = id;
    this.weight;
    this.name = name;
    this.count = count;

    if ((weight != "Л") && (weight != "-") && (isNaN(weight))){
        console.warn("Item '" + id + "' has invalid weight: '" + weight + "'");
        this.weight = "-";
    }else{
        this.weight = weight;
    }
}

function Weight_t(){
    const BASIC_MOD_ID_T = Object.freeze(
        {
            "STR": 'STR',
        }
    );

//private methods
    var Set_Max_Weight_Field_Values = function(){
        document.getElementById('outfield_weight_encumbered').value = self.encumbered;
        document.getElementById('outfield_weight_overburdened').value = self.overburdened;
    }

    var Find_Weight_Entry_By_Id = function(id){
        for (let i = 0; i < m_weight_arr.length; i++){
            if (m_weight_arr[i].id == id){
                return m_weight_arr[i];
            }
        }

        return null;
    }

    var Recalc_Current_Weight = function(){
        var new_cur_mod_map = new Map();
        var lights_sum = 0;
        var numbers_sum = 0;
        var sum;

        for (let i = 0; i < m_weight_arr.length; i++){
            var cur_item = m_weight_arr[i];
            if(cur_item.weight == "-"){
                continue;
            }else if(cur_item.weight == "Л"){
                lights_sum += cur_item.count;
                if (cur_item.count > 1){
                    new_cur_mod_map.set(cur_item.name, cur_item.count + cur_item.weight);
                }else{
                    new_cur_mod_map.set(cur_item.name, cur_item.weight);
                }
            }else{
                var weight_to_add = cur_item.count * cur_item.weight;
                numbers_sum += weight_to_add;
                new_cur_mod_map.set(cur_item.name, weight_to_add);
            }
        }

        if (m_curr_map_mod == new_cur_mod_map){
            return;
        }

        m_curr_map_mod = new_cur_mod_map;
        sum = numbers_sum + Math.floor(lights_sum / 10);
        lights_sum = lights_sum % 10;

        self.current_sum = sum;
        self.current_lights = lights_sum;

        if (lights_sum == 0){
            m_curr_out_string = self.current_sum;
        }else{
            m_curr_out_string = self.current_sum + " (+ " + self.current_lights + "Л)";
        }

        document.getElementById('outfield_weight_current').value = m_curr_out_string;
    }

    var Update_Max_Weight_Map = function(){
        //updating str modifier
        var strength = chardata.stats.abiscores.values.Get_Sum(ABISCORES.STR);

        self.encumbered_modifier_map.Change_Value(
            BASIC_MOD_ID_T.STR,
            Math.floor(strength / 2));
        self.overburdened_modifier_map.Change_Value(
            BASIC_MOD_ID_T.STR,
            strength);
    }

//public methods
    this.Add_Item = function(id, weight, name = undefined, count = 1){
        if (name == undefined){
            name = id;
        }
        m_weight_arr.push(new Weight_Entry_t(id, weight, name, count));
        Recalc_Current_Weight();
    }

    this.Remove_Item = function(id){
        for (let i = 0; i < m_weight_arr.length; i++){
            if (m_weight_arr[i].id == id){
                m_weight_arr.splice(i, 1);
                Recalc_Current_Weight();
                return;
            }
        }

        console.warn("Can't remove item weight with id '" + id + "'. Item not found")
    }

    this.Change_Name = function(id, value){
        w_entry = Find_Weight_Entry_By_Id(id);
        if (w_entry == null){
            console.warn("Can't change item weight with id '" + id + "'. Item not found");
            return;
        }

        w_entry.name = value;
    }

    this.Change_Weight = function(id, value){
        w_entry = Find_Weight_Entry_By_Id(id);
        if (w_entry == null){
            console.warn("Can't change item weight with id '" + id + "'. Item not found");
            return;
        }

        if ((value != "Л") && (value != "-") && (isNaN(value))){
            console.warn("Item '" + id + "' has invalid weight: '" + value + "'");
            w_entry.weight = "-";
        }else{
            w_entry.weight = value;
        }
        Recalc_Current_Weight();
    }

    this.Change_Count = function(id, value){
        w_entry = Find_Weight_Entry_By_Id(id);
        if (w_entry == null){
            console.warn("Can't change item weight with id '" + id + "'. Item not found");
            return;
        }

        w_entry.count = value;
        Recalc_Current_Weight();
    }

//public methods
    this.Recalc_Max_Weight = function (){
        Update_Max_Weight_Map();

        let encumbered_sum = self.encumbered_modifier_map.Get_Sum();
        let overburdened_sum = self.overburdened_modifier_map.Get_Sum();

        if ((encumbered_sum != self.encumbered) || (overburdened_sum != self.overburdened)){
            self.encumbered = encumbered_sum;
            self.overburdened = overburdened_sum;
            Set_Max_Weight_Field_Values();
        }
    }

    this.Show_Curr_Detail_Popup = function(){
        Popup_Stat_Details.Call("Текущий вес", m_curr_out_string, m_curr_map_mod, false);
    }

    this.Show_Encumbered_Detail_Popup = function(){
        Popup_Stat_Details.Call("Вес до нагрузки", self.encumbered, self.encumbered_modifier_map.Get_Mod_Map(), false);
    }

    this.Show_Overburdened_Detail_Popup = function(){
        Popup_Stat_Details.Call("Вес до перегрузки", self.overburdened, self.overburdened_modifier_map.Get_Mod_Map(), false);
    }

//private properties
    var self = this;
    var m_weight_arr = new Array(0);
    var m_curr_map_mod;
    /* var m_encumbered_map_mod = new Map().set(ABISCORES.STR + "/2", 5);
    var m_overburdened_map_mod = new Map().set(ABISCORES.STR, 10); */
    var m_curr_out_string = "0";

//public properties
    this.current_sum = 0;
    this.current_lights = 0;
    this.encumbered = 5;
    this.overburdened = 10;
    /* this.encumbered_other_mod = new Other_Mod_Collection_t(this.Recalc_Max_Weight);
    this.overburdened_other_mod = new Other_Mod_Collection_t(this.Recalc_Max_Weight); */
    this.encumbered_modifier_map = new Modifier_Map_t(this.Recalc);
    this.overburdened_modifier_map = new Modifier_Map_t(this.Recalc);

//additional initialization
    Set_Max_Weight_Field_Values();

    this.encumbered_modifier_map.Add(
        BASIC_MOD_ID_T.STR,
        new Modifier_t(this.encumbered, ABISCORES.STR, "/2"));
    this.overburdened_modifier_map.Add(
        BASIC_MOD_ID_T.STR,
        new Modifier_t(this.overburdened, ABISCORES.STR));
    this.Add_Item("armor", 0, "Броня"); //TODO: armor change should change name of this
}

function Credits_t (){
//private methods

//public methods
    this.Set = function(value){
        this.count = value;
    }

    this.ChangeBy = function(value){
        this.count -= value;
        if (this.count < 0){
            this.count = 0;
        }
        /* else NOTHING TO DO */
    }

//private properties

//public properties
    this.count = 0;

//additional initialization
}

function Upb_t (){
//private methods

//public methods
    this.Set = function(value){
        this.count = value;
    }

    this.ChangeBy = function(value){
        this.count -= value;
        if (this.count < 0){
            this.count = 0;
        }
        /* else NOTHING TO DO */
    }

//private properties

//public properties
    this.count = 0;

//additional initialization
}

function Inventory_t (){
//private methods

//public methods
    this.Get_SaveData_Obj = function(){
        var ret = {
            weapons: self.weapons.Get_SaveData_Obj(),
            grenades: self.grenades.Get_SaveData_Obj(),
            armor: self.armor.Get_SaveData_Obj(),
            augments: self.augments.Get_SaveData_Obj(),
            equipment: self.equipment.Get_SaveData_Obj(),
            ammo: self.ammo.Get_SaveData_Obj(),
            other: self.other.Get_SaveData_Obj(),
            credits: self.credits.count,
            upb: self.upb.count
        };
        return ret;
    }

//private properties
    var self = this;

//public properties
    this.weapons = new Weapon_Collection_t();
    this.grenades = new Grenade_Collection_t();
    this.armor = new Armor_t();
    this.augments = new Augment_Collection_t();
    this.equipment = new Equipment_Collection_t();
    this.ammo = new Ammo_Collection_t();
    this.other = new Custom_Item_Collection_t();
    this.weight = new Weight_t();
    this.credits = new Credits_t();
    this.upb = new Upb_t();

//additional initialization

}