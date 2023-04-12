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

function Exp_Skills_Collection_t (){
//constants
const EXPERTISE_LVLS = [1, 1, 5, 9, 13, 17];
    
//private methods
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
    this.Set = function(row, skill_name, curr_lvl){
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
                ret.push.Get_SaveData_Obj();
            }
        }
        return ret;
    }

//private properties
    var self = this;
    var m_skills = new Array(EXPERTISE_LVLS.length).fill(null);

//public properties

//additional initialization
    m_skills[0] = new Exp_Skill_t(SKILLS.SENSE_MOTIVE);
}

function Class_Envoy_t (){
const CLASS_ABILITY_LVLS = [1, 1, 1, 3, 3, 20];
const IMPROV_LVLS = [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const TALENTS_LVLS = [3, 7, 11, 15, 19];

//private methods

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

//private properties
    var self = this;

//public properties
    this.lvl = 0;
    this.class_abilities = new Class_Ability_List_t(
        "Классовые способности (Посланник)",
        CLASS_ABILITY_LVLS,
        "envoy_class_");
    this.improvs = new Class_Ability_List_t(
        "Импровизации Посланника",
        IMPROV_LVLS,
        "envoy_improv_");
    this.talents = new Class_Ability_List_t(
        "Мастерские таланты",
        TALENTS_LVLS,
        "envoy_talent_");
    this.exp_skills = new Exp_Skills_Collection_t();

//additional initialization
}