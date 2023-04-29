//rename
function Exp_Skill_t (skill_name){
//constants
const MODIFIER_DICE_ID = "exp_skill_dice";
const MODIFIER_BONUS_ID = "exp_skill_point";
    
//private methods

//public methods
    this.Activate = function(modifier){
        let [new_dice_mod, new_bonus_mod] = modifier;
        if ((m_is_active) && (m_dice_mod == new_dice_mod) && (m_bonus_mod == new_bonus_mod)){
            return;
        }
        
        let mod_map = chardata.skills.Get_Mod_Map(m_skill_name);
        
        if (!m_is_active){
            m_dice_mod = new_dice_mod;
            m_bonus_mod = new_bonus_mod;
            if (mod_map.Add(MODIFIER_DICE_ID, new Modifier_t (m_dice_mod, "Мастерство в навыке", "Кубик", MODIFIER_TYPES_T.DICE))){
                mod_map.Add(MODIFIER_BONUS_ID, new Modifier_t (m_bonus_mod, "Мастерство в навыке", "Бонус", MODIFIER_TYPES_T.NUMBER), true)
                m_is_active = true;
            }
        }else if (m_dice_mod != new_dice_mod){
            m_dice_mod = new_dice_mod;
            mod_map.Change_Value(MODIFIER_DICE_ID, m_dice_mod, true);
        }else{
            m_bonus_mod = new_bonus_mod;
            mod_map.Change_Value(MODIFIER_BONUS_ID, m_bonus_mod, true);
        }
    }
    
    this.Deactivate = function(){
        if (!m_is_active){
            return;
        }
        
        m_is_active = false;
        let mod_map = chardata.skills.Get_Mod_Map(m_skill_name);
        mod_map.Remove(MODIFIER_DICE_ID);
        mod_map.Remove(MODIFIER_BONUS_ID, true);
    }
    
    this.Get_SaveData_Obj = function(){
        return m_skill_name;
    }

//private properties
    var self = this;
    var m_is_active = false;
    var m_dice_mod;
    var m_bonus_mod;
    var m_skill_name = skill_name;

//public properties

//additional initialization
}

function Exp_Skills_Collection_t (class_data){
//constants
const GUI_BLOCK = layers.classes.Get_Block(CLASSES.ENVOY).expertise_skills;
const EXPERTISE_LVLS = [1, 1, 5, 9, 13, 17];
const ENVOY_EXPERTISE_SKILL_LIST = [
    SKILLS.BLUFF,
    SKILLS.COMPUTERS,
    SKILLS.CULTURE,
    SKILLS.DIPLOMACY,
    SKILLS.DISGUISE,
    SKILLS.ENGINEERING,
    SKILLS.INTIMIDATE,
    SKILLS.MEDICINE
];
    
//private methods
    var Init = function(){
        m_skills[0] = new Exp_Skill_t(SKILLS.SENSE_MOTIVE);
        
        GUI_BLOCK.Reset(self, EXPERTISE_LVLS, ENVOY_EXPERTISE_SKILL_LIST);
    }

    var Get_Modifier_Value = function (lvl){
        let dice = (lvl < 13) ? "1d6" : "1d8";
        let bonus = 0;
        
        if (lvl >= 20){
            bonus = 4;
        }else if (lvl >= 17){
            bonus = 3;
        }else if (lvl >= 9){
            bonus = 2;
        }else if (lvl >= 5){
            bonus = 1;
        }
        
        return [dice, bonus];
    }

//public methods
    //TODO: instead of taking null as argument, add Remove function
    this.Set = function(row, skill_name){
        let curr_lvl = m_class_data.lvl;
        
        if ((skill_name != null) && !(ENVOY_EXPERTISE_SKILL_LIST.includes(skill_name))){
            console.error("Inappropriate skill to be set as expertise skill: " + skill_name);
            return;
        }
        
        let skill_num = row + 1;
        if (skill_num >= EXPERTISE_LVLS.length){
            console.error("Attempt to set expertise skill out of bounds");
            return;
        }
        
        if (m_skills[skill_num] != null){
            m_skills[skill_num].Deactivate();
        }
        
        if (skill_name == null){
            m_skills[skill_num] = null;
        }else{
            m_skills[skill_num] = new Exp_Skill_t(skill_name);
            if (curr_lvl >= EXPERTISE_LVLS[skill_num]){
                m_skills[skill_num].Activate(Get_Modifier_Value(curr_lvl));
            }
        }
        
        GUI_BLOCK.Set(row, skill_name);
    }
    
    this.Update_Lvl = function(lvl){
        for (let i = 0; i < EXPERTISE_LVLS.length; i++){
            if (m_skills[i] == null){
                continue;
            }
            
            if (lvl >= EXPERTISE_LVLS[i]){
                m_skills[i].Activate(Get_Modifier_Value(lvl));
            }else{
                m_skills[i].Deactivate();
            }
        }
    }
    
    this.Get_SaveData_Obj = function(){
        var ret = new Array(0);
        for (let i = 1; i < EXPERTISE_LVLS.length; i++){
            let cur_skill = m_skills[i];
            if (cur_skill == null){
                ret.push(null);
            }else{
                ret.push(cur_skill.Get_SaveData_Obj());
            }
        }
        return ret;
    }
    
    this.Load_From_Obj = function(obj, curr_lvl){
        if (obj == undefined){
            return;
        }
        
        for (let i = 0; i < EXPERTISE_LVLS.length - 1; i++){
            if (obj[i] != null){
                self.Set(i, obj[i], curr_lvl);
            }
        }
    }

//private properties
    var self = this;
    var m_skills = new Array(EXPERTISE_LVLS.length).fill(null);
    var m_class_data = class_data;

//public properties

//additional initialization
    Init();
}

function Class_Envoy_t (){
const ABILITY_LIST = [
    ["Импровизация посланника"],
    ["Мастерство"],
    ["Мастерство в навыке"],
    ["Мастерский талант"],
    ["Привычное оружие [Посланник]"],
    ["Истинный мастер"]
];
const CLASS_ABILITY_LVLS = [1, 1, 1, 3, 3, 20];
const IMPROV_LVLS = [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const TALENTS_LVLS = [3, 7, 11, 15, 19];

//private methods
    var Init = function(){
        let db = Ability_Database_GetList(ABILITIES_DATABASE, "Класс", ["Посланник", "Способность класса"]);
        for (let i = 0; i < ABILITY_LIST.length; i++){
            if (ABILITY_LIST[i].length == 1){
                let abi_name = ABILITY_LIST[i][0];
                let abi_entry = Get_Ability_Entry_By_Name(db, abi_name);
                self.class_abilities.Set(i, abi_entry, undefined, true);
            }else{
                //TODO?
            }
        }
    }

//public methods    
    this.Set_Lvl = function(lvl){
        self.lvl = lvl;
        self.class_abilities.Update_Lvl(self.lvl);
        self.improvs.Update_Lvl(self.lvl);
        self.talents.Update_Lvl(self.lvl);
        self.exp_skills.Update_Lvl(self.lvl);
    }

    this.Get_SaveData_Obj = function(){
        var ret = {
            lvl: self.lvl,
            exp_skills: self.exp_skills.Get_SaveData_Obj(),
            improvs: self.improvs.Get_SaveData_Obj(),
            talents: self.talents.Get_SaveData_Obj()
        }
        return ret;
    }
    
    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        self.improvs.Load_From_Obj(obj.improvs);
        self.talents.Load_From_Obj(obj.talents);
        self.exp_skills.Load_From_Obj(obj.exp_skills, obj.lvl);
    }

//private properties
    var self = this;

//public properties
    this.lvl = 0;
    this.class_abilities = new Leveled_Ability_List_t(
        "abi_class_envoy",
        "Классовые способности (Посланник)",
        CLASS_ABILITY_LVLS,
        "envoy_class_",
        layers.classes.Get_Block(CLASSES.ENVOY).class_abilities);
    this.improvs = new Leveled_Ability_List_t(
        "abi_class_envoy_improv",
        "Импровизации Посланника",
        IMPROV_LVLS,
        "envoy_improv_",
        layers.classes.Get_Block(CLASSES.ENVOY).improvs);
    this.talents = new Leveled_Ability_List_t(
        "abi_class_envoy_talants",
        "Мастерские таланты",
        TALENTS_LVLS,
        "envoy_talent_",
        layers.classes.Get_Block(CLASSES.ENVOY).talents);
    this.exp_skills = new Exp_Skills_Collection_t(self);

//additional initialization
    Init();
}