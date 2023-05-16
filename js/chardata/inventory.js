//TODO: add "is_from_database" property to all items
function Find_Entry_By_Name(name, database){
    for (let i = 0; i < database.length; i++){
        var entry = database[i];
        if (entry.name == name){
            return entry;
        }
        //else NOTHING TO DO
    }

    return null;
}

function Weapon_t(database_entry, id, is_from_database = true){
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
    const CLASS_WEAPON_OUTFIELD_PREFIX_HIT_MOD = "class_outfield_weapon_mod_";
    const CLASS_WEAPON_OUTFIELD_PREFIX_DMG = "class_outfield_weapon_dmg_";

//private methods
    var Set_Hit_Mod_Field_Values = function(){
        let str = GetModifierStr(self.hit_mod);
        let elems = document.getElementsByClassName(CLASS_WEAPON_OUTFIELD_PREFIX_HIT_MOD + id);
        for (let i = 0; i < elems.length; i++){
            elems[i].value = str;
        }
    }

    var Set_Damage_Field_Values = function(){
        let str = self.damage;
        let elems = document.getElementsByClassName(CLASS_WEAPON_OUTFIELD_PREFIX_DMG + id);
        for (let i = 0; i < elems.length; i++){
            elems[i].value = str;
        }
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
    this.modifier_hit_map = new Modifier_Map_t(this.Recalc);
    this.damage_map = new Damage_Map_t(this.Recalc);
    this.is_from_database = is_from_database;
    this.crystal = null;
    this.entry = database_entry;
    this.id = id;

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

function Weapon_Collection_t(gui_block_inv, gui_block_face){
//constants
    const GUI_BLOCK_INV = gui_block_inv;
    const GUI_BLOCK_FACE = gui_block_face;
    
//private methods
    var Init = function(){
        GUI_BLOCK_INV.Reset(self);
        GUI_BLOCK_FACE.Reset();
    }
    
    var Get_Weapon_By_ID = function(id){
        if (m_map.has(id)){
            return m_map.get(id);
        }
        return null;
    }

    var Find_Free_ID = function (weapon_name){
        for (let id_enum = 0; id_enum < 100; id_enum++){
            let found = false;
            let cur_id = weapon_name + "_" + id_enum;
            if (!m_map.has(cur_id)){
                return cur_id;
            }
        }
        
        return null;
    }

    var Add_Weapon_To_Recalc_Func = function(weapon){
        var recalc_mod = new Recalc_Function_t (weapon.id + "_mod", weapon.Recalc_Hit_Mod);
        var recalc_dmg = new Recalc_Function_t (weapon.id + "_dmg", weapon.Recalc_Damage_Mod);

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

    var Remove_Weapon_From_Recalc_Func = function(weapon){
        var recalc_mod_id = weapon.id + "_mod";
        var recalc_dmg_id = weapon.id + "_dmg";

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
    this.Add = function(database_entry, custom_id = null, is_from_database = true){
        let weapon_id = custom_id;
        if (weapon_id == null){
            weapon_id = Find_Free_ID(database_entry.name);
            if (weapon_id == null){
                console.warn("More than 100 weapons with name '" + database_entry.name + "', can't add more!");
                return;
            }
        }
        
        var new_weapon = new Weapon_t (database_entry, weapon_id, is_from_database)
        m_map.set(weapon_id, new_weapon);
        Add_Weapon_To_Recalc_Func(new_weapon);
        chardata.inventory.weight.Add_Item(weapon_id, database_entry.weight, database_entry.name, count = 1);
        
        GUI_BLOCK_INV.Add(new_weapon, weapon_id, is_from_database);
        GUI_BLOCK_FACE.Add(new_weapon, weapon_id);
        return;
    }

    this.Remove = function(weapon_id){
        let weapon = Get_Weapon_By_ID(weapon_id);
        if (weapon == null){
            //TODO: warn user
            return;
        }
        
        Remove_Weapon_From_Recalc_Func(weapon);
        chardata.inventory.weight.Remove_Item(weapon_id);
        m_map.delete(weapon_id);
        
        GUI_BLOCK_INV.Remove(weapon_id);
        GUI_BLOCK_FACE.Remove(weapon_id);
    }
    
    this.Set_Crystal = function(weapon_id, entry){
        let weapon = Get_Weapon_By_ID(weapon_id);
        if (weapon == null){
            //TODO: warn user
            return;
        }
        
        weapon.Set_Crystal(entry);
    }
    
    this.Remove_Crystal = function(weapon_id){
        let weapon = Get_Weapon_By_ID(weapon_id);
        if (weapon == null){
            //TODO: warn user
            return;
        }
        
        weapon.Remove_Crystal();
    }
    
    this.Change_Base_Damage = function(weapon_id, new_value){
        let weapon = Get_Weapon_By_ID(weapon_id);
        if (weapon == null){
            //TODO: warn user
            return;
        }
        
        weapon.Change_Base_Damage(new_value);
    }

    this.Show_Hit_Detail_Popup = function(weapon_id){
        let weapon = Get_Weapon_By_ID(weapon_id);
        if (weapon == null){
            //TODO: warn user
            return;
        }
        
        weapon.Show_Hit_Detail_Popup();
    }

    this.Show_Damage_Detail_Popup = function(weapon_id){
        let weapon = Get_Weapon_By_ID(weapon_id);
        if (weapon == null){
            //TODO: warn user
            return;
        }
        
        weapon.Show_Damage_Detail_Popup();
    }

    this.Get_SaveData_Obj = function(){
        var ret = new Array(0);
        m_map.forEach(weapon => {
            if (weapon.is_from_database){
                ret.push(weapon.Get_SaveData_Obj());
            }
        });
        return ret;
    }
    
    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        obj.forEach(weapon => {
            let entry = Find_Entry_By_Name(weapon.name, WEAPON_DATABASE);
            if (entry != null){
                self.Add(entry);
            }else{
                //TODO: warn user
            }
        });
    }

//public properties

//private properties
    var self = this;
    var m_map = new Map();
    
//additional initialization
    Init();
}

function Grenade_t(database_entry, in_count = 1){
const BASIC_MOD_ID_T = Object.freeze(
        {
            "BASE_DC": 'BASE_DC',
            "AGI": 'AGI',
            "LVL": 'LVL'
        }
    );

//private methods
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
            if (gui_dc_cell != null){
                gui_dc_cell.innerHTML = self.dc;
            }
        }
    }

    this.Show_DC_Detail_Popup = function(){
        Popup_Stat_Details.Call("СЛ гранаты (" + self.entry.name + ")", self.dc, self.dc_modifier_map.Get_Mod_Map(), false);
    }
    
    this.Change_Count = function(value){
        self.count = value;
        if (gui_count_field != null){
            gui_count_field.value = self.count;
        }
    }

    this.Set_GUI_Count_Field = function(gui_field){
        gui_count_field = gui_field;
    }
    
    this.Set_GUI_DC_Cell = function(gui_field){
        gui_dc_cell = gui_field;
    }

    this.Get_SaveData_Obj = function(){
        var ret = {
            name: self.entry.name,
            count: self.count
        }
        return ret;
    }
    
    this.Show_Descr = function(){
        let text = self.entry.special;
        if (self.entry.additional_info != null){
            text += ".\n" + self.entry.additional_info;
        }
        Popup_Descr.Call(self.entry.name, text);
    }

//private properties
    var self = this;
    this.dc_modifier_map = new Modifier_Map_t(this.Recalc_DC);
    
    var gui_count_field = null;
    var gui_dc_cell = null;

//public properties
    this.dc; //value set later later
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

function Grenade_Collection_t(gui_block){
//constants
    const GUI_BLOCK = gui_block;

    const BASIC_MOD_ID_T = Object.freeze(
        {
            "ATTACK_MOD": 'ATTACK_MOD',
            "PROF": 'PROF'
        }
    );

//private methods
    var Init = function(){
        Set_Throw_Field_Values();

        self.throw_modifier_map.Add(
            BASIC_MOD_ID_T.ATTACK_MOD,
            new Modifier_t(0, "Модификатор атаки", WEAPON_MODIFIER.THROWN));
        self.throw_modifier_map.Add(
            BASIC_MOD_ID_T.PROF,
            new Modifier_t(-4, "Отсутствие владения типом оружия", WEAPON_TYPES.GRENADE));

        m_update_func = combined_collections.equipment.Add("grenades", self);
        GUI_BLOCK.Reset(self);
    }
    
    var Get_By_ID = function(id){
        if (m_map.has(id)){
            return m_map.get(id);
        }
        return null;
    }

    var Update = function(){
        if (m_update_func != null){
            m_update_func();
        }
    }

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
    this.Add = function(database_entry, in_count = 1, custom_id = null){
        let id = (custom_id == null) ? database_entry.name : custom_id;
        var item = Get_By_ID(id);
        if (item != null){
            //change count instead
            self.Change_Count(id, item.count + in_count);
            return;
        }
        
        item = new Grenade_t (database_entry, in_count)
        m_map.set(id, item);
        
        chardata.inventory.weight.Add_Item(
            id,
            database_entry.weight,
            database_entry.name,
            in_count);
            
        GUI_BLOCK.Add(id, item);
        Update();
        
        return;
    }

    this.Remove = function(id){
        if (m_map.has(id)){
            m_map.delete(id);
            chardata.inventory.weight.Remove_Item(id);
            
            GUI_BLOCK.Remove(id);
            Update();
        }//else TODO: warn user
    }

    this.Change_Count = function(id, value){
        let item = Get_By_ID(id);
        if (item == null){
            //TODO: warn user
            return;
        }
        item.Change_Count(value);
        
        chardata.inventory.weight.Change_Count(id, value);
        Update();
    }
    
    this.Get_Count = function(id){
        let item = Get_By_ID(id);
        if (item == null){
            return null;
        }
        
        return item.count;
    }
    
    this.Get_Equip_List = function(){
        let item_list = new Array(0);
        
        m_map.forEach((item, key) => {
            if ((item != null) && (item.entry.name != "")){
                let str = item.entry.name;
                if (item.count != 1){
                    str += " x" + item.count;
                }
                str += " (СЛ: " + item.dc + ")";
                item_list.push({
                    name: str,
                    descr_func: item.Show_Descr
                });
            }
        });
        
        if (item_list.length == 0){
            return null;
        }
        
        item_list.unshift({
            name: "Гранаты (Мод. броска: " + GetModifierStr(self.throw_mod) + ")",
            descr_func: self.Show_Throw_Mod_Detail_Popup
        });
        return item_list;
    }

    this.Recalc_All_DC = function(){
        m_map.forEach(item, key => {
            grenade.Recalc_DC();
        });
        Update();
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
        let item = Get_By_ID(id);
        item.Show_DC_Detail_Popup();
    }
    
    this.Open_Descr_Tooltip = function(row){
        let item = Get_By_ID(id);
        item.Show_Descr();
    }

    this.Get_SaveData_Obj = function(){
        var ret = new Array(0);
        m_map.forEach(grenade => {
            ret.push(grenade.Get_SaveData_Obj());
        });
        return ret;
    }
    
    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        obj.forEach(item => {
            let entry = Find_Entry_By_Name(item.name, GRENADE_DATABASE);
            if (entry != null){
                self.Add(entry, item.count);
            }else{
                //TODO: warn user
            }
        });
    }

//private properties
    var self = this;
    var outfield_throw_mod = document.getElementById("outfield_grenade_mod");
    var m_update_func = null;
    var m_map = new Map();

//public properties
    this.throw_mod = -4;
    this.throw_modifier_map = new Modifier_Map_t(this.Recalc);

//additional initialization
    Init();
}

function Armor_t(gui_block){
//constants
    const GUI_BLOCK = gui_block;
    
//private methods
    var Init = function(){
        m_update_func = combined_collections.equipment.Add("ArmorUpgr", self);
        GUI_BLOCK.Reset(self);
    }

    var Update = function(){
        if (m_update_func != null){
            m_update_func();
        }
    }
    
    var Get_Upgr_By_ID = function(id){
        if (m_upgr_map.has(id)){
            return m_upgr_map.get(id);
        }
        return null;
    }

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
        m_upgr_map.forEach ((upgr, key) => {
            slots_used += upgr.slots;
        });
        GUI_BLOCK.upgrades.Update_Slots_Used(slots_used);
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

        self.armor_entry = entry;
        chardata.stats.defense.eac.Set_Armor_Value(entry.name, entry.eac);
        chardata.stats.defense.kac.Set_Armor_Value(entry.name, entry.kac);
        chardata.stats.defense.armor_limit_agi.Set_Armor_Value(entry.max_agi);
        chardata.skills.Set_Armor_Penalty(entry.name, entry.penalty);
        chardata.stats.speeds.Set_Armor_Penalty(entry.name, entry.speed);

        chardata.inventory.weight.Change_Weight("armor", entry.weight);
        GUI_BLOCK.Set(entry);
        GUI_BLOCK.upgrades.Update_Slots_Max(entry.upgrades);
    }

    this.Remove = function(){
        Clean_Prof_Recalc_Functions();

        self.armor_entry = null;
        chardata.stats.defense.eac.Set_Armor_Value("Без брони", 0);
        chardata.stats.defense.kac.Set_Armor_Value("Без брони", 0);
        chardata.stats.defense.armor_limit_agi.Set_Armor_Value(Infinity);
        chardata.skills.Set_Armor_Penalty("Без брони", 0);
        chardata.stats.speeds.Set_Armor_Penalty("Без брони", 0);

        chardata.inventory.weight.Change_Weight("armor", 0);
        GUI_BLOCK.Remove();
        GUI_BLOCK.upgrades.Update_Slots_Max(0);
    }

    this.Get_Armor_Type = function(){
        if (self.armor_entry == null){
            return ARMOR_TYPES.NONE;
        }
        //else NOTHING TO DO

        switch (self.armor_entry.type){
            case ARMOR_TYPES.NONE:
            case ARMOR_TYPES.LIGHT:
            case ARMOR_TYPES.HEAVY:
            case ARMOR_TYPES.POWER:
                return self.armor_entry.type;

            default:
                break;
        }
        return ARMOR_TYPES.UNKNOWN;
    }

    this.Add_Armor_Upgr = function(entry, custom_id = null){
        let id = custom_id;
        if (id == null){
            id = entry.name;
        }
        
        if (m_upgr_map.has(id)){
            alert("Это улучшение брони уже добавлено.");
            return;
        }
        
        m_upgr_map.set(id, entry);
        chardata.inventory.weight.Add_Item(id, entry.weight, entry.name);
        GUI_BLOCK.upgrades.Add(id, entry);

        Recalc_Armor_Upgr_Slots_Cur();
        Update();
    }

    this.Remove_Armor_Upgr = function(id){
        if (!m_upgr_map.has(id)){
            //TODO: warn user, return
        }
        
        chardata.inventory.weight.Remove_Item(id);
        m_upgr_map.delete(id);
        GUI_BLOCK.upgrades.Remove(id);

        Recalc_Armor_Upgr_Slots_Cur();
        Update();
    }

    this.Open_Descr_Tooltip = function(id){
        let item = Get_Upgr_By_ID(id);
        if (item == null){
            //TODO: warn user
            return;
        }
        
        Popup_Descr.Call(item.name, item.descr);
    }
    
    this.Get_Equip_List = function(){
        let item_list = new Array(0);
        
        m_upgr_map.forEach((item, key) => {
            if ((item != null) && (item.name != "")){
                let str = item.name;
                item_list.push({
                    name: str,
                    descr_func: self.Open_Descr_Tooltip.bind(null, item.name)
                });
            }
        });
        
        if (item_list.length == 0){
            return null;
        }
        
        item_list.unshift({
            name: "Улучшения брони",
            descr_func: null
        });
        return item_list;
    }

    this.Get_SaveData_Obj = function(){
        var ret = {
            name: null,
            upgrades: new Array(0)
        };

        if (self.armor_entry != null){
            ret.name = self.armor_entry.name;
        }
        //else NOTHING TO DO

        m_upgr_map.forEach(upgr => {
            ret.upgrades.push(upgr.name);
        });
        return ret;
    }
    
    //TODO
    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        if (obj.name != null){
            let entry = Find_Entry_By_Name(obj.name, ARMOR_DATABASE);
            self.Set(entry);
        }
         
        obj.upgrades.forEach(upgr => {
            let entry = Find_Entry_By_Name(upgr, ARMOR_UPGR_DATABASE);
            if (entry != null){
                self.Add_Armor_Upgr(entry);
            }else{
                //TODO: warn user
            }
        });
    }

//private properties
    var self = this;
    var m_update_func = null;
    var m_upgr_map = new Map();

//public properties
    this.armor_entry = null;
    
//additional initialization
    Init();
}

function Augment_t(database_entry){
//public methods
    this.Show_Descr = function(){
        Popup_Descr.Call(self.entry.name, self.entry.descr);
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
    this.entry = database_entry;
}

function Augment_Collection_t(gui_block){
//constants
    const GUI_BLOCK = gui_block;
    
//private methods
    var Init = function(){
        m_update_func = combined_collections.equipment.Add("augments", self);
        GUI_BLOCK.Reset(self);
    }
    
    var Update = function(){
        if (m_update_func != null){
            m_update_func();
        }
    }
    
    var Get_By_ID = function(id){
        if (m_map.has(id)){
            return m_map.get(id);
        }
        return null;
    }
    
//public methods
    this.Add = function(database_entry, custom_id = null){
        let id = custom_id;
        if (id == null){
            id = database_entry.name;
        }
        
        if (m_map.has(id)){
            alert("Эта аугментация уже добавлена.");
            return;
        }
        
        var item = new Augment_t (database_entry);
        m_map.set(id, item);
        GUI_BLOCK.Add(id, item);
        
        Update();
        return true;
    }

    this.Remove = function(id){
        if (!m_map.has(id)){
            //TODO: warn user
            return;
        }
        
        m_map.delete(id);
        GUI_BLOCK.Remove(id);
        Update();
    }
    
    this.Get_Equip_List = function(){
        let item_list = new Array(0);
        
        m_map.forEach((item, key) => {
            if ((item != null) && (item.entry.name != "")){
                let str = item.entry.name;
                item_list.push({
                    name: str,
                    descr_func: item.Show_Descr
                });
            }
        });
        
        if (item_list.length == 0){
            return null;
        }
        
        item_list.unshift({
            name: "Аугментации",
            descr_func: null
        });
        return item_list;
    }

    this.Open_Descr_Tooltip = function(id){
        let item = Get_By_ID(id);
        if (item == null){
            //TODO: warn user
            return;
        }
        
        item.Show_Descr();
    }

    this.Get_SaveData_Obj = function(){
        var ret = new Array(0);
        m_map.forEach((augment, key) => {
            ret.push(augment.Get_SaveData_Obj());
        });
        return ret;
    }
    
    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        obj.forEach(item => {
            let entry = Find_Entry_By_Name(item.name, AUGMENT_DATABASE);
            if (entry != null){
                self.Add(entry);
            }else{
                //TODO: warn user
            }
        });
    }

//private properties
    var self = this;
    var m_map = new Map();
    var m_update_func = null;
    
//additional initialization
    Init();
}

function Equipment_t(entry, in_count = 1){
//public methods
    this.Show_Descr = function(){
        Popup_Descr.Call(self.entry.name, self.entry.descr);
    }
    
    this.Change_Count = function(value){
        self.count = value;
        if (gui_count_field != null){
            gui_count_field.value = self.count;
        }
    }
    
    this.Set_GUI_Count_Field = function(gui_field){
        gui_count_field = gui_field;
    }

    this.Get_SaveData_Obj = function(){
        var ret = {
            name: self.entry.name,
            count: self.count
        }
        return ret;
    }

//private properties
    var self = this;
    var gui_count_field = null;

//public properties
    this.entry = entry;
    this.count = in_count;
}

function Equipment_Collection_t(gui_block){
//constants
    const GUI_BLOCK = gui_block;

//private methods
    var Init = function(){
        m_update_func = combined_collections.equipment.Add("equipment", self);
        GUI_BLOCK.Reset(self);
    }
    
    var Update = function(){
        if (m_update_func != null){
            m_update_func();
        }
    }
    
    var Get_By_ID = function(id){
        if (m_map.has(id)){
            return m_map.get(id);
        }
        return null;
    }

//public methods
    this.Add = function(entry, in_count = 1, custom_id = null){
        let id = (custom_id == null) ? entry.name : custom_id;
        var item = Get_By_ID(id);
        if (item != null){
            //change count instead
            self.Change_Count(id, item.count + in_count);
            return;
        }
        
        item = new Equipment_t(entry, in_count)
        m_map.set(id, item);
        
        chardata.inventory.weight.Add_Item(
            id,
            entry.weight,
            entry.name,
            in_count);
            
        GUI_BLOCK.Add(id, item);
        Update();
    }

    this.Remove = function(id){
        if (m_map.has(id)){
            m_map.delete(id);
            chardata.inventory.weight.Remove_Item(id);
            
            GUI_BLOCK.Remove(id);
            Update();
        }//else TODO: warn user
    }

    this.Change_Count = function(id, value){
        let item = Get_By_ID(id);
        if (item == null){
            //TODO: warn user
            return;
        }
        item.Change_Count(value);
        
        chardata.inventory.weight.Change_Count(id, value);
        Update();
    }
    
    this.Get_Count = function(id){
        let item = Get_By_ID(id);
        if (item == null){
            return null;
        }
        
        return item.count;
    }

    this.Open_Descr_Tooltip = function(in_name){
        for (let i = 0; i < m_arr.length; i++){
            var equipment_item = m_arr[i];
            if (equipment_item.entry.name == in_name){
                equipment_item.Show_Descr();
                return;
            }
        }
    }
    
    this.Get_Equip_List = function(){
        let item_list = new Array(0);
        
        m_map.forEach((item, key) => {
            if ((item != null) && (item.entry.name != "")){
                let str = item.entry.name;
                if (item.count != 1){
                    str += " x" + item.count;
                }
                item_list.push({
                    name: str,
                    descr_func: item.Show_Descr
                });
            }
        });
        
        if (item_list.length == 0){
            return null;
        }
        
        item_list.unshift({
            name: "Снаряжение",
            descr_func: null
        });
        return item_list;
    }

    this.Get_SaveData_Obj = function(){
        var ret = new Array(0);
        m_map.forEach((item, key) => {
            ret.push(item.Get_SaveData_Obj());
        });
        return ret;
    }
    
    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        obj.forEach(item => {
            let entry = Find_Entry_By_Name(item.name, ITEMS_DATABASE);
            if (entry != null){
                self.Add(entry, item.count);
            }else{
                //TODO: warn user
            }
        });
    }

//private properties
    var self = this;
    var m_map = new Map();
    var m_update_func = null;
    
//additional initialization
    Init();
}

function Ammo_t(entry, in_count){
//public methods
    this.Change_Count = function(value){
        self.count = value;
        if (gui_count_field != null){
            gui_count_field.value = self.count;
        }
    }
    
    this.Set_GUI_Count_Field = function(gui_field){
        gui_count_field = gui_field;
    }

    this.Get_SaveData_Obj = function(){
        var ret = {
            name: self.entry.name,
            count: self.count
        }
        return ret;
    }

//private properties
    var self = this;
    var gui_count_field = null;

//public properties
    this.entry = entry;
    this.count = (in_count == null) ? entry.capacity : in_count;
}

function Ammo_Collection_t(gui_block){
//constants
    const GUI_BLOCK = gui_block;

//private methods
    var Init = function(){
        m_update_func = combined_collections.equipment.Add("ammo", self);
        GUI_BLOCK.Reset(self);
    }
    
    var Update = function(){
        if (m_update_func != null){
            m_update_func();
        }
    }
    
    var Get_By_ID = function(id){
        if (m_map.has(id)){
            return m_map.get(id);
        }
        return null;
    }
    
    var Find_Free_ID = function (weapon_name){
        for (let id_enum = 0; id_enum < 100; id_enum++){
            let found = false;
            let cur_id = weapon_name + "_" + id_enum;
            if (!m_map.has(cur_id)){
                return cur_id;
            }
        }
        
        return null;
    }

//public methods
    this.Add = function(entry, in_count = null, custom_id = null){
        let id;
        if (custom_id != null){
            if (m_map.has(custom_id)){
                //TODO: warn user
                return;
            }
            
            id = custom_id;
        }else{
            id = Find_Free_ID(entry.name);
            if (id == null){
                console.warn("More than 100 ammo with name '" + entry.name + "', can't add more!");
                return;
            }
        }
        
        let item = new Ammo_t(entry, in_count);
        m_map.set(id, item);
        
        chardata.inventory.weight.Add_Item(
            id,
            entry.weight,
            entry.name
        );
        
        GUI_BLOCK.Add(id, item);
        Update();
    }

    this.Remove = function(id){
        if (m_map.has(id)){
            m_map.delete(id);
            chardata.inventory.weight.Remove_Item(id);
            
            GUI_BLOCK.Remove(id);
            Update();
        }//else TODO: warn user
    }

    this.Change_Count = function(id, value){
        let item = Get_By_ID(id);
        if (item == null){
            //TODO: warn user
            return;
        }
        
        item.Change_Count(value);
        Update();
    }
    
    this.Get_Count = function(id){
        let item = Get_By_ID(id);
        if (item == null){
            return null;
        }
        
        return item.count;
    }
    
    this.Get_Equip_List = function(){
        let item_list = new Array(0);
        
        m_map.forEach((item, key) => {
            if ((item != null) && (item.entry.name != "")){
                let str = item.entry.name;
                str += " (" + item.count + "/" + item.entry.capacity + ")";
                item_list.push({
                    name: str,
                    descr_func: null
                });
            }
        });
        
        if (item_list.length == 0){
            return null;
        }
        
        item_list.unshift({
            name: "Боеприпасы",
            descr_func: null
        });
        return item_list;
    }

    this.Get_SaveData_Obj = function(){
        var ret = new Array(0);
        m_map.forEach((item, key) => {
            ret.push(item.Get_SaveData_Obj());
        });
        return ret;
    }
    
    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        obj.forEach(item => {
            let entry = Find_Entry_By_Name(item.name, AMMO_DATABASE);
            if (entry != null){
                self.Add(entry, item.count);
            }else{
                //TODO: warn user
            }
        });
    }

//private properties
    var self = this;
    var m_map = new Map();
    var m_update_func = null;
    
//additional initialization
    Init();
}

function Custom_Item_t(name, descr, weight, count){
//public methods
    this.Show_Descr = function(){
        Popup_Descr.Call(self.name, self.descr);
    }
    
    this.Change_Name = function(value){
        self.name = value;
        if (m_outfield_name != null){
            m_outfield_name.value = value; 
        }
    }
    
    this.Change_Descr = function(value){
        self.descr = value;
        if (m_outfield_descr != null){
            m_outfield_descr.value = value; 
        }
    }
    
    this.Change_Weight = function(value){
        self.weight = value;
        if (m_outfield_weight != null){
            m_outfield_weight.value = value; 
        }
    }
    
    this.Change_Count = function(value){
        self.count = value;
        if (m_outfield_count != null){
            m_outfield_count.value = value; 
        }
    }
    
    this.Set_Outfield_Name = function(outfield){
        m_outfield_name = outfield;
    }
    
    this.Set_Outfield_Descr = function(outfield){
        m_outfield_descr = outfield;
    }
    
    this.Set_Outfield_Weight = function(outfield){
        m_outfield_weight = outfield;
    }
    
    this.Set_Outfield_Count = function(outfield){
        m_outfield_count = outfield;
    }

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
    var m_outfield_name = null;
    var m_outfield_descr = null;
    var m_outfield_weight = null;
    var m_outfield_count = null;

//public properties
    this.name = name;
    this.descr = descr;
    this.weight = weight;
    this.count = count;
}

function Custom_Item_Collection_t(gui_block){
//constants
    const GUI_BLOCK = gui_block;
    const ID_PREFIX = "custom"
    
//private methods
    var Init = function(){
        m_update_func = combined_collections.equipment.Add("other", self);
        GUI_BLOCK.Reset(self);
    }

    var Update = function(){
        if (m_update_func != null){
            m_update_func();
        }
    }
    
    var Get_By_ID = function(id){
        if (m_map.has(id)){
            return m_map.get(id);
        }
        return null;
    }
    
    var Find_Free_ID = function (){
        for (let id_enum = 0; id_enum < 100; id_enum++){
            let found = false;
            let cur_id = ID_PREFIX + "_" + id_enum;
            if (!m_map.has(cur_id)){
                return cur_id;
            }
        }
        
        return null;
    }
    
//public methods
    this.Add = function(name = "", descr = "", weight = "-", count = 1, custom_id = null){
        let id = (custom_id == null) ? Find_Free_ID() : custom_id;
        if (id == null){
            console.log("More than 100 custom items '" + entry.name + "', can't add more!");
            return;
        }
        
        var item = new Custom_Item_t(name, descr, weight, count);
        m_map.set(id, item);
        
        chardata.inventory.weight.Add_Item(id, weight, name, count);
        GUI_BLOCK.Add(id, item);
        Update();
    }

    this.Remove = function(id){
        if (m_map.has(id)){
            m_map.delete(id);
            chardata.inventory.weight.Remove_Item(id);
            
            GUI_BLOCK.Remove(id);
            Update();
        }//else TODO: warn user
    }

    this.Change_Name = function(id, value){
        let item = Get_By_ID(id);
        if (item == null){
            //TODO: warn user
            return;
        }
        item.Change_Name(value);
        chardata.inventory.weight.Change_Name(id, value);
        
        Update();
    }

    this.Change_Descr = function(id, value){
        let item = Get_By_ID(id);
        if (item == null){
            //TODO: warn user
            return;
        }
        item.Change_Descr(value);
        
        Update();
    }

    this.Change_Count = function(id, value){
        let item = Get_By_ID(id);
        if (item == null){
            //TODO: warn user
            return;
        }
        
        item.Change_Count(value);
        chardata.inventory.weight.Change_Count(id, value);
        
        Update();
    }
    
    this.Change_Weight = function (id, value){
        let item = Get_By_ID(id);
        if (item == null){
            //TODO: warn user
            return;
        }
        
        item.Change_Weight(value);
        chardata.inventory.weight.Change_Weight(id, value);
    }
    
    this.Get_Equip_List = function(){
        let item_list = new Array(0);
        
        m_map.forEach((item, key) => {
            if ((item != null) && (item.name != "")){
                let str = item.name;
                if (item.count != 1){
                    str += " x" + item.count;
                }
                item_list.push({
                    name: str,
                    descr_func: item.Show_Descr
                });
            }
        });
        
        if (item_list.length == 0){
            return null;
        }
        
        item_list.unshift({
            name: "Прочее",
            descr_func: null
        });
        return item_list;
    }


    this.Get_SaveData_Obj = function(){
        var ret = new Array(0);
        m_map.forEach((item, key) => {
            ret.push(item.Get_SaveData_Obj());
        });
        return ret;
    }
    
    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        obj.forEach(item => {
            self.Add(item.name, item.descr, item.weight, item.count);
        });
    }

//private properties
    var self = this;
    var m_map = new Map();
    var m_update_func = null;
    
//additional initialization
    Init();
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
//constants
    const CLASS_INFIELD = "class_input_credits";
    
//private methods
    var Init = function(){
        let elems = document.getElementsByClassName(CLASS_INFIELD);
        for (let i = 0; i < elems.length; i++){
            elems[i].onchange = OnChange_Event;
        }
        Set_Field_Values();
    }
    
    var OnChange_Event = function(event){
        let value = event.target.value;
        if(isNaN(value)){
            event.target.value = self.count;
            return;
        }
        self.Set(parseInt(value));
    }
    
    var Set_Field_Values = function(){
        let elems = document.getElementsByClassName(CLASS_INFIELD);
        for (let i = 0; i < elems.length; i++){
            elems[i].value = self.count;
        }
    }

//public methods
    this.Set = function(value){
        if (self.count != value){
            self.count = value;
            Set_Field_Values();
        }
    }

    this.ChangeBy = function(value){
        self.count -= value;
        if (self.count < 0){
            self.count = 0;
        }
        /* else NOTHING TO DO */
    }

//private properties
    var self = this;

//public properties
    this.count = 0;

//additional initialization
    Init();
}

function Upb_t (){
//constants
    const CLASS_INFIELD = "class_input_upb";
    
//private methods
    var Init = function(){
        let elems = document.getElementsByClassName(CLASS_INFIELD);
        for (let i = 0; i < elems.length; i++){
            elems[i].onchange = OnChange_Event;
        }
        Set_Field_Values();
    }
    
    var OnChange_Event = function(event){
        let value = event.target.value;
        if(isNaN(value)){
            event.target.value = self.count;
            return;
        }
        self.Set(parseInt(value));
    }
    
    var Set_Field_Values = function(){
        let elems = document.getElementsByClassName(CLASS_INFIELD);
        for (let i = 0; i < elems.length; i++){
            elems[i].value = self.count;
        }
    }

//public methods
    this.Set = function(value){
        if (self.count != value){
            self.count = value;
            Set_Field_Values();
        }
    }

    this.ChangeBy = function(value){
        self.count -= value;
        if (self.count < 0){
            self.count = 0;
        }
        /* else NOTHING TO DO */
    }

//private properties
    var self = this;

//public properties
    this.count = 0;

//additional initialization
    Init();
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
    
    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        self.weapons.Load_From_Obj(obj.weapons);
        self.grenades.Load_From_Obj(obj.grenades);
        self.armor.Load_From_Obj(obj.armor);
        self.augments.Load_From_Obj(obj.augments);
        self.equipment.Load_From_Obj(obj.equipment);
        self.ammo.Load_From_Obj(obj.ammo);
        self.other.Load_From_Obj(obj.other);

        layers.inventory.resourses_block.Set_Credits(obj.credits, true);
        layers.inventory.resourses_block.Set_UPB(obj.upb, true);
    }

//private properties
    var self = this;

//public properties
    this.weapons = new Weapon_Collection_t(
        layers.inventory.weapon_block, 
        layers.face.block_inventory.weapons
    );
    this.grenades = new Grenade_Collection_t(layers.inventory.grenade_block);
    this.armor = new Armor_t(layers.inventory.armor_block);
    this.augments = new Augment_Collection_t(layers.inventory.augment_block);
    this.equipment = new Equipment_Collection_t(layers.inventory.equipment_block);
    this.ammo = new Ammo_Collection_t(layers.inventory.ammo_block);
    this.other = new Custom_Item_Collection_t(layers.inventory.other_items_block);
    this.weight = new Weight_t();
    this.credits = new Credits_t();
    this.upb = new Upb_t();

//additional initialization

}