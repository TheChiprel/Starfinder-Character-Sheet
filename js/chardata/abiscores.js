function Get_Class_Abiscore_Value(abiscore_name){
    return "class_output_abiscore_value_" + abiscore_name;
}

function Get_Class_Abiscore_Mod(abiscore_name){
    return "class_output_abiscore_mod_" + abiscore_name;
}

//TODO: get rid of name here and in values?
function Abiscore_Mod_Data_t(name, outfield){
//constants
    const BASIC_MOD_MOD_ID_T = Object.freeze(
        {
            "ABISCORE_VALUE": 'ABISCORE_VALUE',
        }
    );
    const OUTFIELD_CLASS_NAME = Get_Class_Abiscore_Mod(name);

//private methods
    var Init = function(){
        self.mod_map.Add(
            BASIC_MOD_MOD_ID_T.ABISCORE_VALUE,
            new Modifier_t(0, "Значение " + self.name));
        
        let elems = document.getElementsByClassName(OUTFIELD_CLASS_NAME);
        for (let i = 0; i < elems.length; i++){
            elems[i].onclick = self.Show_Detail_Popup;
            elems[i].value = self.sum;
        }
    }

    var Set_Field_Value = function(){
        let elems = document.getElementsByClassName(OUTFIELD_CLASS_NAME);
        for (let i = 0; i < elems.length; i++){
            elems[i].value = GetModifierStr(self.sum);
        }
    }

    var Update_Mod_Map = function(){
        let abiscore_value = chardata.stats.abiscores.values.Get_Sum(self.name);
        let mod_base = Math.floor((abiscore_value - 10) / 2);
        self.mod_map.Change_Value(BASIC_MOD_MOD_ID_T.ABISCORE_VALUE, mod_base);
    }

//public methods
    this.Recalc = function(){
        Update_Mod_Map();

        let new_sum = self.mod_map.Get_Sum();
        if (new_sum != self.mod_sum){
            self.sum = new_sum;
            Set_Field_Value();
            self.arr_recalc_functions.Call();
        }
    }

    this.Show_Detail_Popup = function(){
        Popup_Stat_Details.Call("Модификатор " + self.name, self.sum, self.mod_map.Get_Mod_Map());
    }

//private properties
    var self = this;
    var m_outfield = outfield;

//public properties
    this.name = name;
    this.mod_map = new Modifier_Map_t(this.Recalc);

    this.sum = 0;

    this.arr_recalc_functions = new Recalc_Function_Collection_t();

//additional initialization
    Init();
}

function Abiscore_Value_Data_t (name, cb_table_row){
//constants
    const BASIC_VALUE_MOD_ID_T = Object.freeze(
        {
            "BASE_VALUE": 'BASE_VALUE',
            "POINTS": 'POINTS',
            "RACE": 'RACE',
            "THEME": 'DIVIDER',
            "BOOST_LVL_5": 'BOOST_LVL_5',
            "BOOST_LVL_10": 'BOOST_LVL_10',
            "BOOST_LVL_15": 'BOOST_LVL_15',
            "BOOST_LVL_20": 'BOOST_LVL_20',
        }
    );
    const OUTFIELD_CLASS_NAME = Get_Class_Abiscore_Value(name);
    const CHECKBOX_ID_PREFIX = "class_checkbox_abiscore_" + name + "_";

//private methods
    var Init = function(cb_table_row){
        Create_Checkboxes(cb_table_row);

        self.mod_map.Add(
            BASIC_VALUE_MOD_ID_T.BASE_VALUE,
            new Modifier_t(10, "Начальное значение"));//TODO: magic
        self.mod_map.Add(
            BASIC_VALUE_MOD_ID_T.POINTS,
            new Modifier_t(self.points, "Вложенные пункты"));
        self.mod_map.Add(
            BASIC_VALUE_MOD_ID_T.RACE,
            new Modifier_t(m_value_race, "Раса"));
        self.mod_map.Add(
            BASIC_VALUE_MOD_ID_T.THEME,
            new Modifier_t(m_value_theme, "Тема"));
        self.mod_map.Add(
            BASIC_VALUE_MOD_ID_T.BOOST_LVL_5,
            new Modifier_t(0, "Увеличение на 5 уровне"));
        self.mod_map.Add(
            BASIC_VALUE_MOD_ID_T.BOOST_LVL_10,
            new Modifier_t(0, "Увеличение на 10 уровне"));
        self.mod_map.Add(
            BASIC_VALUE_MOD_ID_T.BOOST_LVL_15,
            new Modifier_t(0, "Увеличение на 15 уровне"));
        self.mod_map.Add(
            BASIC_VALUE_MOD_ID_T.BOOST_LVL_20,
            new Modifier_t(0, "Увеличение на 20 уровне"));
            
        let elems = document.getElementsByClassName(OUTFIELD_CLASS_NAME);
        for (let i = 0; i < elems.length; i++){
            elems[i].onclick = self.Show_Detail_Popup;
            elems[i].value = self.sum;
        }
    }
    
    //TODO: replace with setting event
    var Create_Checkboxes = function(cb_table_row){
        var cell_name = document.createElement('th');
        cell_name.innerHTML = self.name;
        cb_table_row.appendChild(cell_name);
        
        for (let i = 0; i < self.upgrades.length; i++){
            let cb_cell = cb_table_row.insertCell(cb_table_row.cells.length);
            var cb = HTML_Create_Input_Checkbox(
                    false,
                    Proc_Checkbox_OnChange_Event.bind(null, i)
            );
            cb.setAttribute('id', CHECKBOX_ID_PREFIX + i);
            cb_cell.appendChild(cb);
        }
    }
    
    var Proc_Checkbox_OnChange_Event = function(lvl_boost, event){
        self.SetUpgradeValue(lvl_boost, event.target.checked);
    }

    var Set_Field_Value = function(){
        let elems = document.getElementsByClassName(OUTFIELD_CLASS_NAME);
        for (let i = 0; i < elems.length; i++){
            elems[i].value = self.sum;
        }
    }

    var Update_Mod_Map = function(){
        let abiscore_value = 10 + self.points + m_value_race + m_value_theme;

        if (chardata != undefined){
            for (let i = 0; i < self.upgrades.length; i++){
                let lvl_boost = 0;
                let abi_boost_lvl = (1 + i) * 5;
                if ((chardata.lvl.sum >= abi_boost_lvl) && (self.upgrades[i])){
                    if (abiscore_value < 17){
                        lvl_boost = 2;
                    }else{
                        lvl_boost = 1;
                    }
                }//else NOTHING TO DO

                abiscore_value += lvl_boost;
                self.mod_map.Change_Value(
                    BASIC_VALUE_MOD_ID_T["BOOST_LVL_" + abi_boost_lvl],
                    lvl_boost);
            }
        }

        let mod_base = Math.floor((self.mod_map.Get_Sum() - 10) / 2);
    }

//public methods
    this.Recalc = function(){
        Update_Mod_Map();

        let new_sum = self.mod_map.Get_Sum();
        if (new_sum != self.sum){
            self.sum = new_sum;
            Set_Field_Value();
            self.arr_recalc_functions.Call();
        }
    }

    this.SetPoints = function(value){
        self.points = value;
        self.mod_map.Change_Value(BASIC_VALUE_MOD_ID_T.POINTS, self.points);
        self.Recalc();
    }

    this.ChangePoints = function(change){
        self.points += change;
        self.mod_map.Change_Value(BASIC_VALUE_MOD_ID_T.POINTS, self.points);
        self.Recalc();
    }

    this.SetRaceValue = function(value){
        m_value_race = value;
        self.mod_map.Change_Value(BASIC_VALUE_MOD_ID_T.RACE, m_value_race);
        self.Recalc();
    }

    this.SetThemeValue = function(value){
        m_value_theme = value;
        self.mod_map.Change_Value(BASIC_VALUE_MOD_ID_T.THEME, m_value_theme);
        self.Recalc();
    }

    this.SetUpgradeValue = function(lvlup_num, value){
        let cb = document.getElementById(CHECKBOX_ID_PREFIX + lvlup_num);
        self.upgrades[lvlup_num] = value;
        cb.checked = value;
        self.Recalc();
    }

    this.Show_Detail_Popup = function(){
        Popup_Stat_Details.Call("Значение " + self.name, self.sum, self.mod_map.Get_Mod_Map(), false);
    }

//private properties
    var self = this;
    var m_value_race = 0;
    var m_value_theme = 0;

//public properties
    this.name = name;

    this.mod_map = new Modifier_Map_t(this.Recalc);

    this.sum = 10;
    this.points = 0;
    this.upgrades = new Array(4).fill(false);

    this.arr_recalc_functions = new Recalc_Function_Collection_t();

//additional initialization
    Init(cb_table_row);
}

function Abiscore_Mod_Collection_t(){
//private methods
    var FindAbiscoreByName = function(abiscore){
        if (!m_map.has(abiscore)){
            return null;
        }
        //else NOTHING TO DO

        return m_map.get(abiscore);
    }

//public methods
    this.Get_Sum = function(abiscore){
        let abiscore_obj = FindAbiscoreByName(abiscore);
        if (abiscore_obj != null){
            return abiscore_obj.sum;
        }else{
            console.warn("Attempting to read unknown ability score modifier: " + abiscore);
        }
    }

    this.AddRecalcFunc = function(abiscore, func){
        let abiscore_obj = FindAbiscoreByName(abiscore);
        if (abiscore_obj != null){
            abiscore_obj.arr_recalc_functions.Add(func);
        }else{
            console.warn("Attempting to read unknown ability score modifier: " + abiscore);
        }
    }

    this.RemoveRecalcFunc = function(abiscore, id){
        let abiscore_obj = FindAbiscoreByName(abiscore);
        if (abiscore_obj != null){
            abiscore_obj.arr_recalc_functions.Remove(id);
        }else{
            console.warn("Attempting to read unknown ability score modifier: " + abiscore);
        }
    }

    this.Get_Mod_Map = function(abiscore){
        let abiscore_obj = FindAbiscoreByName(abiscore);
        if (abiscore_obj != null){
            return abiscore_obj.mod_map;
        }else{
            console.warn("Attempting to set custom mod to unknown ability score modifier: " + abiscore);
            return null;
        }
    }

    this.Show_Detail_Popup = function(abiscore){
        let abiscore_obj = FindAbiscoreByName(abiscore);
        if (abiscore_obj != null){
            abiscore_obj.Show_Detail_Popup();
        }else{
            console.warn("Attempting to show details for unknown ability score: " + abiscore);
        }
    }

    this.GetRecalcFunc = function(abiscore){
        let abiscore_obj = FindAbiscoreByName(abiscore);
        if (abiscore_obj != null){
            return abiscore_obj.Recalc;
        }else{
            console.warn("Attempting to get recalc function of unknown ability score modifier: " + abiscore);
            return null;
        }
    }

//private properties
    var self = this;
    var m_map = new Map();

//public properties

//additional initialization
    m_map.set (ABISCORES.STR, new Abiscore_Mod_Data_t (ABISCORES.STR, document.getElementById('outfield_abiscore_mod_str')));
    m_map.set (ABISCORES.AGI, new Abiscore_Mod_Data_t (ABISCORES.AGI, document.getElementById('outfield_abiscore_mod_agi')));
    m_map.set (ABISCORES.CON, new Abiscore_Mod_Data_t (ABISCORES.CON, document.getElementById('outfield_abiscore_mod_con')));
    m_map.set (ABISCORES.INT, new Abiscore_Mod_Data_t (ABISCORES.INT, document.getElementById('outfield_abiscore_mod_int')));
    m_map.set (ABISCORES.WIS, new Abiscore_Mod_Data_t (ABISCORES.WIS, document.getElementById('outfield_abiscore_mod_wis')));
    m_map.set (ABISCORES.CHA, new Abiscore_Mod_Data_t (ABISCORES.CHA, document.getElementById('outfield_abiscore_mod_cha')));
}

function Abiscore_Value_Collection_t(){
//constants
    const CHECKBOX_TABLE = document.getElementById('table_abiscores_upgrades');
    
//private methods
    var Init = function(){
        const ABISCORE_ARR = Object.values(ABISCORES);
        while(CHECKBOX_TABLE.rows.length > 1){
            CHECKBOX_TABLE.deleteRow(1);
        }
        
        ABISCORE_ARR.forEach(abiscore => {
            let cb_table_row = CHECKBOX_TABLE.insertRow(CHECKBOX_TABLE.rows.length);
            m_map.set (abiscore, new Abiscore_Value_Data_t (abiscore, cb_table_row));
        });
    }

    var FindAbiscoreByName = function(abiscore){
        if (!m_map.has(abiscore)){
            return null;
        }
        //else NOTHING TO DO

        return m_map.get(abiscore);
    }

//public methods
    this.SetPoints = function(abiscore, value){
        let abiscore_obj = FindAbiscoreByName(abiscore);
        if (abiscore_obj != null){
            abiscore_obj.SetPoints(value);
            self.abiscore_points.Recalc_Spent();
        }else{
            console.warn("Attempting to change unknown ability score: " + abiscore);
        }
    }

    this.ChangeBaseValue = function(abiscore, mod){
        let abiscore_obj = FindAbiscoreByName(abiscore);
        if (abiscore_obj != null){
            abiscore_obj.ChangePoints(mod);
            self.abiscore_points.Recalc_Spent();
        }else{
            console.warn("Attempting to change unknown ability score: " + abiscore);
        }
    }

    this.SetRaceValues = function (abiscores, is_any){
        let arr = Array.from(m_map.values());
        for (let i = 0; i < arr.length; i++){
            arr[i].SetRaceValue(abiscores[i]);
        }

        self.abiscore_points.Set_Race_Any(is_any);
    }

    this.SetThemeValue = function(abiscore){
        let found = false;
        let is_any = (abiscore == 'Любая');
        if (is_any){
            found = true;
            self.abiscore_points.Set_Theme_Any(is_any);
            m_map.forEach((abiscore_obj, key) => {
                abiscore_obj.SetThemeValue(0);
            });

            return;
        }
        //else NOTHING TO DO

        m_map.forEach((abiscore_obj, key) => {
            if (key == abiscore){
                found = true;
                abiscore_obj.SetThemeValue(1);
            }else{
                abiscore_obj.SetThemeValue(0);
            }
        });

        if (!found && (abiscore != null)){
            console.warn("Attempting to set theme modifier to unknown ability score:" + abiscore);
        }
        //else NOTHING TO DO
    }

    this.Get_Sum = function(abiscore){
        let abiscore_obj = FindAbiscoreByName(abiscore);
        if (abiscore_obj != null){
            return abiscore_obj.sum;
        }else{
            console.warn("Attempting to read unknown ability score value: " + abiscore);
        }
    }

    this.SetLvlupUpgrade = function(abiscore, lvlup_num, value){
        let abiscore_obj = FindAbiscoreByName(abiscore);
        if (abiscore_obj != null){
            abiscore_obj.SetUpgradeValue(lvlup_num, value);
        }else{
            console.warn("Attempting to read unknown ability score modifier: " + abiscore);
        }
    }

    this.Get_Mod_Map = function(abiscore){
        let abiscore_obj = FindAbiscoreByName(abiscore);
        if (abiscore_obj != null){
            return abiscore_obj.mod_map;
        }else{
            console.warn("Attempting to set custom mod to unknown ability score modifier: " + abiscore);
            return null;
        }
    }

    this.Show_Detail_Popup = function(abiscore){
        let abiscore_obj = FindAbiscoreByName(abiscore);
        if (abiscore_obj != null){
            abiscore_obj.Show_Detail_Popup();
        }else{
            console.warn("Attempting to show details for unknown ability score: " + abiscore);
        }
    }

    this.GetPointArray = function(){
        var ret = new Array(0);
        m_map.forEach((abiscore_obj, ) => {
            ret.push(abiscore_obj.points);
        });

        return ret;
    }

    this.GetUpgrArray = function(){
        var ret = new Array(0);
        m_map.forEach((abiscore_obj, ) => {
            ret.push(abiscore_obj.upgrades);
        });
        
        return ret;
    }

    this.AddRecalcFunc = function(abiscore, func){
        let abiscore_obj = FindAbiscoreByName(abiscore);
        if (abiscore_obj != null){
            abiscore_obj.arr_recalc_functions.Add(func);
        }else{
            console.warn("Attempting to read unknown ability score modifier: " + abiscore);
        }
    }

    this.RemoveRecalcFunc = function(abiscore, id){
        let abiscore_obj = FindAbiscoreByName(abiscore);
        if (abiscore_obj != null){
            abiscore_obj.arr_recalc_functions.Remove(id);
        }else{
            console.warn("Attempting to read unknown ability score modifier: " + abiscore);
        }
    }

    this.Recalc_All = function(){
        m_map.forEach((abiscore_obj, ) => {
            abiscore_obj.Recalc();
        });
    }
    
    this.Get_Points_Spent = function(){
        let sum = 0;
        m_map.forEach((abiscore_obj, ) => {
            sum += abiscore_obj.points;
        });
        return sum;
    }
    
    this.Get_SaveData_Obj = function(){
        var ret = {
            points: self.GetPointArray(),
            upgr: self.GetUpgrArray()
        }
        return ret;
    }
    
    this.Load_From_Obj = function(obj){
        const ABISCORE_ARR = Object.values(ABISCORES);
        if (obj.points != undefined){
            for (let i = 0; i < obj.points.length; i++){
                self.SetPoints(ABISCORE_ARR[i], obj.points[i])
            }
        }
        
        if (obj.upgr != undefined){
            for (let i = 0; i < obj.upgr.length; i++){
                for (j = 0; j < obj.upgr[i].length; j++){
                    self.SetLvlupUpgrade(ABISCORE_ARR[i], j, obj.upgr[i][j]);
                }
            }
        }
    }

//private properties
    var self = this;
    var m_map = new Map();

//public properties
    this.abiscore_points = new Abiscore_Point_t (
        (document.getElementById('outfield_abiscore_points_total')),
        (document.getElementById('outfield_abiscore_points_spent')),
        (document.getElementById('outfield_abiscore_points_left'))
    );

//additional initialization
    Init();
}

function Abiscore_Key_Collection_t(){
//private methods
    var FindAbiscoreByName = function(abiscore){
        if (!m_map.has(abiscore)){
            return null;
        }
        //else NOTHING TO DO

        return m_map.get(abiscore);
    }

//public methods
    this.Add = function(id, abiscore){
        if (abiscore.includes(' или ')){
            var as_list = abiscore.split(' или ');
            Popup_Selector.Call(id, "Выберите ключевую хар-ку:", as_list, self.Add);
            return;
        }
        //else NOTHING TO DO
        
        var abiscore_obj = FindAbiscoreByName(abiscore);
        if (abiscore_obj == null){
            console.warn("Attempting to set unknown ability score as key: " + abiscore);
            return;
        }
        //else NOTHING TO DO

        //adding recalc function if it isn't key yet
        if (!abiscore_obj.Get_Value()){
            chardata.stats.abiscores.modifiers.AddRecalcFunc(
                abiscore,
                new Recalc_Function_t ('key_modifier', chardata.stats.abiscores.key.Recalc));
        }

        abiscore_obj.Add(id);
        self.Recalc();
    }

    this.GetModifier = function(){
        return [m_abiscore_name, m_sum];
    }

    this.Remove = function(id){
        m_map.forEach((abiscore_obj, key) => {
            if (!abiscore_obj.Has(id)){
                return;
            }
            //else NOTHING TO DO

            abiscore_obj.Remove(id);

            //adding recalc function if it isn't key yet
            if (!abiscore_obj.Get_Value()){
                chardata.stats.abiscores.modifiers.RemoveRecalcFunc(key, 'key_modifier');
                self.Recalc();
            }
            //else NOTHING TO DO
        });
    }

    this.Recalc = function(){
        let mod_name;
        let mod_value;
        m_map.forEach((abiscore_obj, key) => {
            if (!abiscore_obj.Get_Value()){
                return;
            }

            if (mod_value != undefined){
                if (abiscore_obj.sum < mod_value){
                    return;
                }

                if (abiscore_obj.sum == mod_value){
                    mod_name += "/" + abiscore_obj.name;
                    return;
                }
            }
            //else NOTHING TO DO

            mod_name = key;
            mod_value = chardata.stats.abiscores.modifiers.Get_Sum(key);
        });

        m_sum = mod_value;
        m_abiscore_name = mod_name;
        self.arr_recalc_functions.Call();
    }

    this.RemoveRecalcFunc = function(abiscore, id){
        var abiscore_obj = FindAbiscoreByName(abiscore);
        if (abiscore_obj != null){
            abiscore_obj.arr_recalc_functions.Remove(id);
        }else{
            console.warn("Attempting to read unknown ability score modifier: " + abiscore);
        }
    }

    this.Get_Bool_Map = function(abiscore){
        var abiscore_obj = FindAbiscoreByName(abiscore);
        if (abiscore_obj != null){
            return abiscore_obj;
        }else{
            console.warn("Attempting to set custom mod to unknown ability score modifier: " + abiscore);
            return null;
        }
    }

//private properties
    var self = this;
    var m_map = new Map();
    var m_sum = 0;
    var m_abiscore_name;

//public properties
    this.arr_recalc_functions = new Recalc_Function_Collection_t();

//additional initialization
    Object.values(ABISCORES).forEach(abiscore => {
        m_map.set(abiscore, new Boolean_Modifier_t(false, this.Recalc));
    });
}

//rework
function Abiscore_Point_t (out_field_total, out_field_spent, out_field_left){
    this.Recalc_Total = function(){
        var sum = 10;

        if (self.race_any){
            sum += 2;
        }

        if (self.theme_any){
            sum += 1;
        }

        if (sum == self.total){
            return;
        }

        self.total = sum;
        self.out_field_total.value = self.total;
        self.Recalc_Left();
    }

    this.Recalc_Spent = function(){
        var sum = chardata.stats.abiscores.values.Get_Points_Spent();

        if (sum == self.spent){
            return;
        }

        self.spent = sum;
        self.out_field_spent.value = self.spent;
        self.Recalc_Left();
    }

    this.Recalc_Left = function(){
        self.left = self.total - self.spent;
        self.out_field_left.value = self.left;
    }

    this.Set_Race_Any = function(value){
        self.race_any = value;
        self.Recalc_Total();
    }

    this.Set_Theme_Any = function(value){
        self.theme_any = value;
        self.Recalc_Total();
    }

    this.total = 10;
    this.spent = 0;
    this.left = 10;

    this.race_any = false;
    this.theme_any = false;

    this.out_field_total = out_field_total;
    this.out_field_spent = out_field_spent;
    this.out_field_left = out_field_left;

    var self = this;
}

function Abiscore_t (){
//private methods
    var Init = function(){
        const ABISCORE_ARR = Object.values(ABISCORES);
        layers.abiscores.Clear_Tables();
        layers.face.block_stats.abiscores.Clear_Table();
        
        ABISCORE_ARR.forEach(abiscore => {
            layers.abiscores.Add_Abiscore(
                abiscore,
                self.values.ChangeBaseValue,
                Get_Class_Abiscore_Value(abiscore),
                Get_Class_Abiscore_Mod(abiscore)
            );
            layers.face.block_stats.abiscores.Add_Abiscore(
                abiscore,
                Get_Class_Abiscore_Value(abiscore),
                Get_Class_Abiscore_Mod(abiscore)
            );
        });
    }

//public methods
    this.Get_SaveData_Obj = function(){
        return self.values.Get_SaveData_Obj();
    }
    
    this.Load_From_Obj = function(obj){
        if (obj != undefined){
            self.values.Load_From_Obj(obj);
        }
    }

//private properties
    var self = this;

//public properties
    this.values = new Abiscore_Value_Collection_t();
    this.modifiers = new Abiscore_Mod_Collection_t();
    this.key = new Abiscore_Key_Collection_t();
    
//additional initialization
    Init();
}

function Init_Callbacks_Abiscores(){
    //abiscore value -> abiscore modifiers
    Object.values(ABISCORES).forEach(abiscore => {
        chardata.stats.abiscores.values.AddRecalcFunc(
            abiscore,
            new Recalc_Function_t (
                'abiscore_modifier',
                chardata.stats.abiscores.modifiers.GetRecalcFunc(abiscore)
            )
        );
    });

    //AGI -> initiative
     chardata.stats.abiscores.modifiers.AddRecalcFunc(
        ABISCORES.AGI,
        new Recalc_Function_t ('initiative', chardata.stats.initiative.Recalc));

    //CON -> stamina
    chardata.stats.abiscores.modifiers.AddRecalcFunc(
        ABISCORES.CON,
        new Recalc_Function_t ('sp', chardata.stats.sp.Recalc));

    //STR, AGI -> attacks
    chardata.stats.abiscores.modifiers.AddRecalcFunc(
        ABISCORES.STR,
        new Recalc_Function_t ('attack_melee', chardata.stats.attacks.melee.Recalc));
    chardata.stats.abiscores.modifiers.AddRecalcFunc(
        ABISCORES.STR,
        new Recalc_Function_t ('attack_thrown', chardata.stats.attacks.thrown.Recalc));
    chardata.stats.abiscores.modifiers.AddRecalcFunc(
        ABISCORES.AGI,
        new Recalc_Function_t ('attack_oper', chardata.stats.attacks.operative.Recalc));
    chardata.stats.abiscores.modifiers.AddRecalcFunc(
        ABISCORES.AGI,
        new Recalc_Function_t ('attack_ranged', chardata.stats.attacks.ranged.Recalc));

    //AGI -> ACs
    chardata.stats.abiscores.modifiers.AddRecalcFunc(
        ABISCORES.AGI,
        new Recalc_Function_t ('defense_eac', chardata.stats.defense.eac.Recalc));
    chardata.stats.abiscores.modifiers.AddRecalcFunc(
        ABISCORES.AGI,
        new Recalc_Function_t ('defense_kac', chardata.stats.defense.kac.Recalc));

    //AGI, CON, WIS -> saves
    chardata.stats.abiscores.modifiers.AddRecalcFunc(
        ABISCORES.CON,
        new Recalc_Function_t ('save_fortitude', chardata.stats.saves.fortitude.Recalc));
    chardata.stats.abiscores.modifiers.AddRecalcFunc(
        ABISCORES.AGI,
        new Recalc_Function_t ('save_reflex', chardata.stats.saves.reflex.Recalc));
    chardata.stats.abiscores.modifiers.AddRecalcFunc(
        ABISCORES.WIS,
        new Recalc_Function_t ('save_will', chardata.stats.saves.will.Recalc));

    //stats -> skills
    for (let i = 0; i < chardata.skills.arr.length; i++){
        var cur_skill = chardata.skills.arr[i];

        chardata.stats.abiscores.modifiers.AddRecalcFunc(
            cur_skill.abiscore,
            new Recalc_Function_t (cur_skill.name, cur_skill.Recalc));
    }

    //INT -> skill points total
    chardata.stats.abiscores.modifiers.AddRecalcFunc(
        ABISCORES.INT,
        new Recalc_Function_t ('skill_points_total', chardata.skills.skill_points.Recalc_Total));

    //AGI -> grenade DC
    chardata.stats.abiscores.modifiers.AddRecalcFunc(
        ABISCORES.AGI,
        new Recalc_Function_t ('grenade_dc', chardata.inventory.grenades.Recalc_All_DC));

    //STR -> max weight
    chardata.stats.abiscores.modifiers.AddRecalcFunc(
        ABISCORES.STR,
        new Recalc_Function_t ('max_weight', chardata.inventory.weight.Recalc_Max_Weight));

    //KEY -> RP
    chardata.stats.abiscores.key.arr_recalc_functions.Add(
        new Recalc_Function_t ('resolve', chardata.stats.rp.Recalc));
}
