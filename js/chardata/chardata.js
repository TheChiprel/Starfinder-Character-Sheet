function Stats_t(){
//public properties
    this.abiscores = new Abiscore_t();
    this.initiative = new Initative_t();
    this.hp = new Health_t();
    this.sp = new Stamina_t();
    this.rp = new Resolve_t();
    this.saves = new Saves_t();
    this.attacks = new Attacks_t();
    this.defense = new Defense_t();
    this.speeds = new Speeds_t();
    this.weapon_proficiency = new Prof_Spec_Collection_t([
        WEAPON_TYPES.MELEE_SIMPLE,
        WEAPON_TYPES.MELEE_ADVANCED,
        WEAPON_TYPES.RANGED_SMALL,
        WEAPON_TYPES.RANGED_LONG,
        WEAPON_TYPES.RANGED_SNIPER,
        WEAPON_TYPES.RANGED_HEAVY,
        WEAPON_TYPES.GRENADE
    ]);
    this.weapon_specialization = new Prof_Spec_Collection_t([
        WEAPON_TYPES.MELEE_SIMPLE,
        WEAPON_TYPES.MELEE_ADVANCED,
        WEAPON_TYPES.RANGED_SMALL,
        WEAPON_TYPES.RANGED_LONG,
        WEAPON_TYPES.RANGED_SNIPER,
        WEAPON_TYPES.RANGED_HEAVY
    ]);
    this.armor_proficiency = new Prof_Spec_Collection_t([
        ARMOR_TYPES.LIGHT,
        ARMOR_TYPES.HEAVY,
        ARMOR_TYPES.POWER,
    ]);
    this.custom_mods = new Custom_Data_t();
}

function Chardata_t(){
//private methods

//public methods
    this.Reset = function(){
        m_data_collections = new Map();
        m_data_collections.set("abilities", new Map());
        m_data_collections.set("spells", new Map());
        
        self.name = "";
        self.race = null;
        self.theme = null;
        self.abilities = new Chardata_Abilities_t();
        self.classes = new Class_Collection_t();
        self.lvl = new Level_t();
        self.stats = new Stats_t();
        self.skills = new Skills_t();
        self.inventory = new Inventory_t();
    }

//private properties
    var self = this;
    var m_all_ability;

//public properties
    this.name;
    this.race;
    this.theme;
    this.lvl;
    this.classes;
    this.stats;
    this.skills;
    this.inventory;
    this.abilities;
}

var chardata = new Chardata_t();