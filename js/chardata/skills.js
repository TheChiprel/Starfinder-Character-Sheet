function Skill_Data_t (name, abiscore, is_learn_req, has_armor_penalty){
//constants
    const BASIC_MOD_ID_T = Object.freeze(
        {
            "POINTS": 'POINTS',
            "CLASS": 'CLASS',
            "ABISCORE": 'ABISCORE',
            "ARMOR_PENALTY": 'ARMOR_PENALTY'
        }
    );
    
    const INFIELD_POINTS = "class_infield_skill_points_" + name;
    const OUTFIELD_CLASS_NAME = "class_output_skill_" + name;

//private methods
    var Init = function(){
        self.modifier_map.Add(
            BASIC_MOD_ID_T.POINTS,
            new Modifier_t(0, "Вложено пунктов"));
        self.modifier_map.Add(
            BASIC_MOD_ID_T.CLASS,
            new Modifier_t(0, "Классовый"));
        self.modifier_map.Add(
            BASIC_MOD_ID_T.ABISCORE,
            new Modifier_t(0, self.abiscore));
        if (self.has_armor_penalty){
            self.modifier_map.Add(
                BASIC_MOD_ID_T.ARMOR_PENALTY,
                new Modifier_t(0, "Штраф брони", "Без брони"));
        }
        //else NOTHING TO DO
        
        layers.skills.Add_Skill(self.name, INFIELD_POINTS, OUTFIELD_CLASS_NAME);
        layers.face.block_stats.skills.Add_Skill(self.name, OUTFIELD_CLASS_NAME);
        
        let elems = document.getElementsByClassName(OUTFIELD_CLASS_NAME);
        for (let i = 0; i < elems.length; i++){
            elems[i].onclick = self.Show_Detail_Popup;
        }
        
        elems = document.getElementsByClassName(INFIELD_POINTS);
        for (let i = 0; i < elems.length; i++){
            elems[i].onchange = Proc_Points_Onchange_Event;
        }
    }
    
    var Proc_Points_Onchange_Event = function(event){
        let new_value = event.target.value;
        if (isNaN(new_value)){
            event.target.value = self.points;
            return;
        }
        self.Set_Points(parseInt(new_value));
    }

    var Set_Field_Values = function(){
        let elems = document.getElementsByClassName(OUTFIELD_CLASS_NAME);
        for (let i = 0; i < elems.length; i++){
            elems[i].value = GetModifierStr(self.sum);
        }
    }

    var Update_Mod_Map = function(){
        //updating abiscore modifier
        self.modifier_map.Change_Value(
            BASIC_MOD_ID_T.ABISCORE,
            chardata.stats.abiscores.modifiers.Get_Sum(self.abiscore));

        //updateing class modifier
        let class_mod = 0;
        if ((self.is_class.Get_Value()) && (self.points > 0)){
            class_mod = 3;
        }
        //else NOTHING TO DO
        self.modifier_map.Change_Value(
            BASIC_MOD_ID_T.CLASS,
            class_mod);
    }

//public methods
    this.Recalc = function (){
        Update_Mod_Map();

        let new_sum = self.modifier_map.Get_Sum();
        if (new_sum != self.sum){
            self.sum = new_sum;
            Set_Field_Values();
            self.arr_recalc_functions.Call();
        }
    }

    this.Set_Points = function (value){
        self.points = value;
        this.modifier_map.Change_Value(
            BASIC_MOD_ID_T.POINTS,
            self.points);
        self.Recalc();
        
        let elems = document.getElementsByClassName(INFIELD_POINTS);
        for (let i = 0; i < elems.length; i++){
            elems[i].value = value;
        }
    }

    this.Set_Armor_Penalty = function (value, source){
        if (self.has_armor_penalty){
            this.modifier_map.Change_Value(
                BASIC_MOD_ID_T.ARMOR_PENALTY,
                value);
            this.modifier_map.Change_Substring(
                BASIC_MOD_ID_T.ARMOR_PENALTY,
                source);
            self.Recalc();
        }
        //else NOTHING TO DO
    }

    this.Show_Detail_Popup = function(){
        Popup_Stat_Details.Call(self.name, self.sum, self.modifier_map.Get_Mod_Map(), true);
    }

//private properties
    var self = this;

//public properties
    this.name = name;
    this.abiscore = abiscore;
    this.is_learn_req = is_learn_req;
    this.has_armor_penalty = has_armor_penalty;
    this.is_class = new Boolean_Modifier_t (false, self.Recalc);
    this.arr_recalc_functions = new Recalc_Function_Collection_t();

    this.sum = 0;
    this.points = 0;
    this.modifier_map = new Modifier_Map_t(this.Recalc);

//additional initialization
    Init();
}

function Skill_Point_t (out_field_total, out_field_spent, out_field_left){
//constants
    const CLASS_ID_PREFIX = "CLASS_";
    const CLASS_MAIN_STR = "Класс";
    const BASIC_MOD_ID_T = Object.freeze(
        {
            "INT": 'INT',
        }
    );

//private methods
    var Set_Field_Values = function(){
        m_out_field_total.value = self.total;
        m_out_field_spent.value = self.spent;
        m_out_field_left.value = self.left;
    }

    var Update_Mod_Map = function(){
        //updating INT modifier
        self.total_modifier_map.Change_Value(
            BASIC_MOD_ID_T.INT,
            chardata.lvl.sum * chardata.stats.abiscores.modifiers.Get_Sum(ABISCORES.INT));

        //updating class modifier
        chardata.classes.class_map.forEach((class_obj, class_name) => {
            let class_id = CLASS_ID_PREFIX + class_name;
            self.total_modifier_map.Change_Value(class_id, (class_obj.context.lvl * class_obj.entry.skills_per_lvl));
        });
    }

//public methods
    this.Recalc_Total = function(){
        Update_Mod_Map();

        let new_sum = self.total_modifier_map.Get_Sum();
        if (new_sum != self.total){
            self.total = new_sum;
            m_out_field_total.value = self.total;
            self.Recalc_Left();
        }
    }

    this.Recalc_Spent = function(){
        var sum = 0;
        for (let i = 0; i < chardata.skills.arr.length; i++){
            sum += chardata.skills.arr[i].points;
        }

        if (sum == self.spent){
            return;
        }

        self.spent = sum;
        m_out_field_spent.value = self.spent;
        self.Recalc_Left();
    }

    this.Recalc_Left = function(){
        self.left = self.total - self.spent;
        m_out_field_left.value = self.left;
    }

    this.Show_Detail_Popup = function(){
        Popup_Stat_Details.Call("Пункты навыков", self.total, self.total_modifier_map.Get_Mod_Map(), false);
    }

//private properties
    var self = this;
    var m_out_field_total = out_field_total;
    var m_out_field_spent = out_field_spent;
    var m_out_field_left = out_field_left;

//public properties
    this.total = 0;
    this.spent = 0;
    this.left = 0;
    this.total_modifier_map = new Modifier_Map_t(this.Recalc);

//additional initialization
    Set_Field_Values();
    this.total_modifier_map.Add(
        BASIC_MOD_ID_T.INT,
        new Modifier_t(0, ABISCORES.INT));
    CLASS_DATABASE.forEach(class_item => {
        this.total_modifier_map.Add(
            CLASS_ID_PREFIX + class_item.name,
            new Modifier_t(0, CLASS_MAIN_STR, class_item.name));
    });
}

function Skills_t (){
//private methods
    var Init = function(){
        layers.skills.Clear_Table();
        layers.face.block_stats.skills.Clear_Table();
        
        self.arr = [
            new Skill_Data_t(SKILLS.ACROBATICS,         ABISCORES.AGI, false, true  ),
            new Skill_Data_t(SKILLS.ATHLETICS,          ABISCORES.STR, false, true  ),
            new Skill_Data_t(SKILLS.LIFE_SCIENCE,       ABISCORES.INT, true,  false ),
            new Skill_Data_t(SKILLS.BLUFF,              ABISCORES.CHA, false, false ),
            new Skill_Data_t(SKILLS.PERCEPTION,         ABISCORES.WIS, false, false ),
            new Skill_Data_t(SKILLS.SURVIVAL,           ABISCORES.WIS, false, false ),
            new Skill_Data_t(SKILLS.DIPLOMACY,          ABISCORES.CHA, false, false ),
            new Skill_Data_t(SKILLS.INTIMIDATE,         ABISCORES.CHA, false, false ),
            new Skill_Data_t(SKILLS.ENGINEERING,        ABISCORES.INT, true,  false ),
            new Skill_Data_t(SKILLS.COMPUTERS,          ABISCORES.INT, true,  false ),
            new Skill_Data_t(SKILLS.CULTURE,            ABISCORES.INT, true,  false ),
            new Skill_Data_t(SKILLS.SLEIGHT_OF_HAND,    ABISCORES.AGI, true,  true  ),
            new Skill_Data_t(SKILLS.DISGUISE,           ABISCORES.CHA, false, false ),
            new Skill_Data_t(SKILLS.MEDICINE,           ABISCORES.INT, true,  false ),
            new Skill_Data_t(SKILLS.MYSTICISM,          ABISCORES.WIS, true,  false ),
            new Skill_Data_t(SKILLS.PILOTING,           ABISCORES.AGI, false, false ),
            new Skill_Data_t(SKILLS.SENSE_MOTIVE,       ABISCORES.WIS, false, false ),
            new Skill_Data_t(SKILLS.STEALTH,            ABISCORES.AGI, false, true  ),
            new Skill_Data_t(SKILLS.PHYSICAL_SCIENCE,   ABISCORES.INT, true,  false )
        ];
        
        self.arr.forEach(skill => {
            skill.arr_recalc_functions.Add(new Recalc_Function_t(
                "points_spent",
                self.skill_points.Recalc_Spent
            ));
        });
    }


    var Find_Skill_By_Name = function (skill_name){
        for (let i = 0; i < self.arr.length; i++){
            if (skill_name == self.arr[i].name){
                return self.arr[i];
            }
        }

        return null;
    }

//public methods
    this.Get_Sum = function(skill_name){
        let skill_obj = Find_Skill_By_Name(skill_name);
        if (skill_obj != null){
            return skill_obj.sum;
        }else{
            console.warn("Attempting to get value of unknown skill: " + skill_name);
            return 0;
        }
    }

    this.Set_Skill_Points = function(skill_name, value){
        let skill_obj = Find_Skill_By_Name(skill_name);
        if (skill_obj != null){
            skill_obj.Set_Points(value);
        }else{
            console.warn("Attempting to set modifier to unknown skill: " + skill_name);
            return null;
        }
    }

    this.Set_Class_Skill = function(skill_name, id){
        let skill_obj = Find_Skill_By_Name(skill_name);
        if (skill_obj != null){
            skill_obj.is_class.Add(id);
            skill_obj.Recalc();
        }else{
            console.error("Attempting to set unknown skill as class skill: " + skill_name);
        }
    }

    this.Remove_Class_Skill = function(skill_name, id){
        let skill_obj = Find_Skill_By_Name(skill_name);
        if (skill_obj != null){
            skill_obj.is_class.Remove(id);
            skill_obj.Recalc();
        }else{
            console.error("Attempting to make unknown skill not class skill: " + skill_name);
        }
    }

    this.Get_Mod_Map = function(skill_name){
        var skill_obj = Find_Skill_By_Name(skill_name);
        if (skill_obj != null){
            return skill_obj.modifier_map;
        }else{
            console.warn("Attempting to set modifier to unknown skill: " + skill_name);
            return null;
        }
    }
    
    this.AddRecalcFunc = function(skill_name, func){
        let skill_obj = Find_Skill_By_Name(skill_name);
        if (skill_obj != null){
            skill_obj.arr_recalc_functions.Add(func);
        }else{
            console.warn("Attempting to add recalc func to unknown skill: " + skill_name);
        }
    }

    this.Get_Bool_Map = function(skill_name){
        var skill_obj = Find_Skill_By_Name(skill_name);
        if (skill_obj != null){
            return skill_obj.is_class;
        }else{
            console.warn("Attempting to get class mod map of unknown skill: " + skill_name);
            return null;
        }
    }

    this.Set_Armor_Penalty = function(source, new_value){
        for (let i = 0; i < self.arr.length; i++){
            var cur_skill = self.arr[i];
            if (!cur_skill.has_armor_penalty){
                continue;
            }
            //else NOTHING TO DO

            cur_skill.Set_Armor_Penalty(new_value, source);
        }
    }

    this.Show_Detail_Popup = function(skill_name){
        var skill_obj = Find_Skill_By_Name(skill_name);
        if (skill_obj != null){
            skill_obj.Show_Detail_Popup();
        }else{
            console.warn("Attempting to show details of unknown skill: " + skill_name);
            return null;
        }
    }

    this.Get_Point_Obj = function(){
        var ret = new Map();
        self.arr.forEach(skill => {
            ret.set(skill.name, skill.points);
        });
        return Object.fromEntries(ret);
    }
    
    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        for (const [skill_name, points] of Object.entries(obj)){
            self.Set_Skill_Points(skill_name, points);
        };
    }

//private properties
    var self = this;

//public properties
    this.arr;

    this.skill_points = new Skill_Point_t (
        (document.getElementById('outfield_skill_points_total')),
        (document.getElementById('outfield_skill_points_spent')),
        (document.getElementById('outfield_skill_points_left'))
    );
    
//additional initialization
    Init();
}