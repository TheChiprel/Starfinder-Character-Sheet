function Technomancer_Spells_t(){
//constants
const RECALC_FUNC_ID = "TECHNOMANCER_SPELL_DAILY";

const SPELLS_KNOWN = [
    [ 1,  1,  1,  1,  2,  3], //0 lvl
    [ 1,  1,  2,  3,  7, 11], //1 lvl
    [ 4,  4,  5,  6, 10, 14], //2 lvl
    [ 7,  7,  8,  9, 13, 17], //3 lvl
    [10, 10, 11, 12, 16, 20], //4 lvl
    [13, 13, 14, 15, 19    ], //5 lvl
    [16, 16, 17, 18, 20    ]  //6 lvl
];

const SPELLS_DAILY = [
    "∞",                                                          //0 lvl
    [2, 2, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5], //1 lvl
    [0, 0, 0, 2, 2, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5], //2 lvl
    [0, 0, 0, 0, 0, 0, 2, 2, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5], //3 lvl
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 3, 4, 4, 4, 4, 5, 5, 5], //4 lvl
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 3, 4, 4, 5, 5], //5 lvl
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 3, 4, 5]  //6 lvl
];

const SPELLS_DAILY_BY_INT = [
    null,
    [0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3], //1 lvl
    [0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3], //2 lvl
    [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2], //3 lvl
    [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2], //4 lvl
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2], //5 lvl
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2]  //6 lvl
];

const TECHNOMANCER_SPELL_ID_PREFIX = "TECHNOMANCER_SPELL_";

//private methods
    var Init = function(){
        //initiating spell lists
        for (let i = 0; i < m_arr.length; i++){
            m_arr[i] = new Spell_Collection_t(
            "spells_technomancer_" + i,
            Get_Spell_Level_String(i),
            SPELLS_KNOWN[i].length,
            false);
        }
    }
    
    var Get_Spell_Level_String = function(spell_lvl, daily = null, dc = null){
        let str = "Заклинания Техноманта " + spell_lvl + " круга";
        if ((daily != null) && (dc != null)){
            str += " (В день: " + daily + " , СЛ: " + dc + ")";
        }
        return str;
    }
    
    var Update_Spell_Active_State = function(){
        for (let spell_lvl = 0; spell_lvl < SPELLS_KNOWN.length; spell_lvl++){
            for (let i = 0; i < SPELLS_KNOWN[i].length; i++){
                m_arr[spell_lvl].Set_Active_State(i, (m_class_lvl >= SPELLS_KNOWN[spell_lvl][i]));
            }
        }
    }
    
    var Update_Daily_And_DC = function(){
        let daily_arr = new Array(m_arr.length).fill(0);
        let base_dc = 10;
        if (m_class_lvl > 0){
            let int_mod = (chardata.stats.abiscores.modifiers.Get_Sum(ABISCORES.INT));
            daily_arr[0] = SPELLS_DAILY[0];
            for (let i = 1; i < m_arr.length; i++){
                if (int_mod < SPELLS_DAILY_BY_INT.length){
                    daily_arr[i] = SPELLS_DAILY[i][m_class_lvl - 1] + SPELLS_DAILY_BY_INT[i][int_mod];
                }else{
                    daily_arr[i] = SPELLS_DAILY[i][m_class_lvl - 1] + SPELLS_DAILY_BY_INT[i][SPELLS_DAILY_BY_INT.length - 1];
                }
            }
            base_dc += int_mod;
        }//else NOTHING TO DO
        
        for (let i = 0; i < m_arr.length; i++){
            m_arr[i].Rename_Collection(Get_Spell_Level_String(i, daily_arr[i], base_dc + i));
        }
        
        layers.classes.Get_Block(CLASSES.TECHNOMANCER).spells.Set_Daily_And_DC(daily_arr, base_dc);
    }

//public methods
    this.Set = function(spell_lvl, row, entry){
        m_arr[spell_lvl].Replace(
            row,
            (TECHNOMANCER_SPELL_ID_PREFIX + spell_lvl + "_" + row),
            entry,
            (m_class_lvl >= SPELLS_KNOWN[spell_lvl][row])
        );
    }

    this.Remove = function(spell_lvl, row){
        m_arr[spell_lvl].Remove(row);
    }

    this.Show_Details = function(spell_lvl, row){
        m_arr[spell_lvl].Show_Detail_Popup(row);
    }
    
    this.Update_Lvl = function(lvl){
        if (m_class_lvl == lvl){
            return;
        }
        
        if (m_class_lvl == 0){
            //INT -> Technomancer Daily
            chardata.stats.abiscores.modifiers.AddRecalcFunc(
                ABISCORES.INT,
                new Recalc_Function_t (RECALC_FUNC_ID, self.Update_Int));
        }else if (lvl == 0){
            chardata.stats.abiscores.modifiers.RemoveRecalcFunc(
                ABISCORES.INT,
                RECALC_FUNC_ID);
        }//else NOTHING TO DO
            
        m_class_lvl = lvl;
        Update_Daily_And_DC();
        Update_Spell_Active_State();
    }
    
    this.Update_Int = function(){
        Update_Daily_And_DC();
    }
    
    this.Get_SaveData_Obj = function(){
        var ret = new Array(m_arr.length);
        for (let i = 0; i < m_arr.length; i++){
            let spells = m_arr[i].Get_SaveData_Obj();
            
            ret[i] = new Array(0);
            spells.forEach(cur_spell => {
                if (cur_spell == null){
                    ret[i].push(null);
                }else{
                    ret[i].push(cur_spell.name);
                }
            });
        }
        return ret;
    }

//private properties
    var self = this;
    var m_class_lvl = 0;
    var m_arr = new Array(SPELLS_KNOWN.length);

//public properties

//additional initialization
    Init();
}

function Class_Technomancer_t (){
//constants
const CLASS_ABILITY_LVLS = [1, 3, 3, 3, 6, 19, 20];
const HACKS_LVLS = [2, 5, 8, 11, 14, 17, 20];

//private methods

//public methods
    this.Set_Lvl = function(lvl){
        self.lvl = lvl;
        self.class_abilities.Update_Lvl(self.lvl);
        self.hacks.Update_Lvl(self.lvl);
        self.spells.Update_Lvl(self.lvl);
    }

    this.Get_SaveData_Obj = function(){
        var ret = {
            'lvl': self.lvl,
            'hacks': self.hacks.Get_SaveData_Obj(),
            'spells': self.spells.Get_SaveData_Obj()
        }
        return ret;
    }

//private properties
    var self = this;

//public properties
    this.lvl = 0;
    this.class_abilities = new Leveled_Ability_List_t(
        "abi_class_technomancer",
        "Классовые способности (Техномант)",
        CLASS_ABILITY_LVLS,
        "technomancer_class_");
    this.hacks = new Leveled_Ability_List_t(
        "abi_class_technomancer_hacks",
        "Магические хаки",
        HACKS_LVLS,
        "technomancer_hacks");
    this.spells = new Technomancer_Spells_t();

//additional initialization
}