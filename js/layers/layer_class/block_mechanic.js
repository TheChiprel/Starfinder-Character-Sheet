function Block_Drone_Chassis_t(){
//constants
    const GUI_BLOCK = document.getElementById("block_drone_chassis");

//private methods
    var Init = function(){
        const ABISCORE_ARR = Object.values(ABISCORES);
        
        //clear div
        GUI_BLOCK.innerHTML = "Корпус";
        
        //create and fill table
        m_outfield = HTML_Create_Output(
            "Не выбрано",
            undefined, //TODO: onclick event
            undefined,
            "class_output_field"
        );
        m_add_remove_button = HTML_Create_Button(
            "+",
            undefined //TODO: onclick event
        );
        
        GUI_BLOCK.appendChild(HTML_Create_BR());
        GUI_BLOCK.appendChild(m_outfield);
        GUI_BLOCK.appendChild(m_add_remove_button);
    }

//public methods

//private properties
    var self = this;
    var m_outfield;
    var m_add_remove_button;

//public properties

//additional initialization
    Init();
}

function Block_Drone_Abiscores_t(){
//constants
    const GUI_BLOCK = document.getElementById("block_drone_abiscores");

//private methods
    var Init = function(){
        const ABISCORE_ARR = Object.values(ABISCORES);
        
        //clear div
        GUI_BLOCK.innerHTML = "";
        
        //create and fill table
        m_table = HTML_Create_Table(
            ABISCORE_ARR.length + 1,
            3,
            true,
            "100%",
            ["50%", "25%", "25%"]
        );
        
        m_table.rows[0].cells[0].innerHTML = "Хар-ки";
        m_table.rows[0].cells[1].innerHTML = "Значение";
        m_table.rows[0].cells[2].innerHTML = "Мод.";
        for (let i = 0; i < ABISCORE_ARR.length; i++){
            let row = m_table.rows[i+1];
            row.cells[0].innerHTML = ABISCORE_ARR[i];
            row.cells[1].innerHTML = 10;
            row.cells[2].innerHTML = 0;
        }
        
        GUI_BLOCK.appendChild(m_table);
    }

//public methods

//private properties
    var self = this;
    var m_table;

//public properties

//additional initialization
    Init();
}

function Block_Drone_Skills_t(){
//constants
    const GUI_BLOCK = document.getElementById("block_drone_skills");

//private methods
    var Init = function(){
        const SKILLS_ARR = Object.values(SKILLS);
        
        //clear div
        GUI_BLOCK.innerHTML = "";
        
        //create and fill table
        m_table = HTML_Create_Table(
            SKILLS_ARR.length + 1,
            2,
            true,
            "100%",
            ["75%", "25%"]
        );
        
        m_table.rows[0].cells[0].innerHTML = "Навыки";
        m_table.rows[0].cells[1].innerHTML = "Значение";
        for (let i = 0; i < SKILLS_ARR.length; i++){
            let row = m_table.rows[i+1];
            row.cells[0].innerHTML = SKILLS_ARR[i];
            row.cells[1].innerHTML = 0;
        }
        
        GUI_BLOCK.appendChild(m_table);
    }

//public methods

//private properties
    var self = this;
    var m_table;

//public properties

//additional initialization
    Init();
}

function Block_Drone_Numbers_t(){
//constants

//private methods
    var Init = function(){
        self.html_element.innerHTML = "";
        
        Append_Label_Element_Pair(
            self.html_element,
            "Макс. Пункты Живучести (ПЖ):",
            self.outfield_sp.html_element,
            true
        );
        self.html_element.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            self.html_element,
            "Макс. Пункты Здоровья (ПЗ):",
            self.outfield_hp.html_element,
            true
        );
        self.html_element.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            self.html_element,
            "Макс. Пункты Решимости (ПР):",
            self.outfield_rp.html_element,
            true
        );
    }

//public methods

//private properties
    var self = this;

//public properties
    this.outfield_sp = new GUI_Element_OutField_t();
    this.outfield_hp = new GUI_Element_OutField_t();
    this.outfield_rp = new GUI_Element_OutField_t();
    this.html_element = HTML_Create_Div("class_block_class_subblock");

//additional initialization
    Init();
}

function Block_Drone_Attack_t(){
//constants

//private methods
    var Init = function(){
        self.html_element.innerHTML = "Атака:";
        self.html_element.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            self.html_element,
            "БМА:",
            self.outfield_bab.html_element,
            false
        );
        self.html_element.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            self.html_element,
            "Ближняя:",
            self.outfield_melee.html_element,
            false
        );
        self.html_element.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            self.html_element,
            "Оперативная:",
            self.outfield_operative.html_element,
            false
        );
        self.html_element.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            self.html_element,
            "Дистанционная:",
            self.outfield_ranged.html_element,
            false
        );
        self.html_element.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            self.html_element,
            "Метательная:",
            self.outfield_thrown.html_element,
            false
        );
    }

//public methods

//private properties
    var self = this;

//public properties
    this.outfield_bab = new GUI_Element_OutField_t();
    this.outfield_melee = new GUI_Element_OutField_t();
    this.outfield_operative = new GUI_Element_OutField_t();
    this.outfield_ranged = new GUI_Element_OutField_t();
    this.outfield_thrown = new GUI_Element_OutField_t();
    this.html_element = HTML_Create_Div("class_block_class_subblock");

//additional initialization
    Init();
}

function Block_Drone_Defense_t(){
//constants

//private methods
    var Init = function(){
        self.html_element.innerHTML = "Защита:";
        self.html_element.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            self.html_element,
            "ЭКБ:",
            self.outfield_eac.html_element,
            false
        );
        self.html_element.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            self.html_element,
            "ККБ:",
            self.outfield_kac.html_element,
            false
        );
        self.html_element.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            self.html_element,
            "Против манёвров:",
            self.outfield_maneuver.html_element,
            false
        );
        self.html_element.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            self.html_element,
            "Устойчивости:",
            self.outfield_resistance.html_element,
            false
        );
        self.html_element.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            self.html_element,
            "СУ:",
            self.outfield_dr.html_element,
            false
        );
        
        //TODO: remove, once implemented!
        self.outfield_dr.Set_Value(0);
    }

//public methods

//private properties
    var self = this;

//public properties
    this.outfield_eac = new GUI_Element_OutField_t();
    this.outfield_kac = new GUI_Element_OutField_t();
    this.outfield_maneuver = new GUI_Element_OutField_t();
    this.outfield_resistance = new GUI_Element_OutField_t();
    this.outfield_dr = new GUI_Element_OutField_t();
    this.html_element = HTML_Create_Div("class_block_class_subblock");

//additional initialization
    Init();
}

function Block_Drone_Speed_t(){
//constants

//private methods
    var Init = function(){
        self.html_element.innerHTML = "Скорости:";
        self.html_element.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            self.html_element,
            "Наземная:",
            self.outfield_land.html_element,
            false
        );
        self.html_element.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            self.html_element,
            "Полёт:",
            self.outfield_flight.html_element,
            false
        );
        self.html_element.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            self.html_element,
            "Рытьё:",
            self.outfield_burrow.html_element,
            false
        );
        self.html_element.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            self.html_element,
            "Плавание:",
            self.outfield_swim.html_element,
            false
        );
        self.html_element.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            self.html_element,
            "Лазание:",
            self.outfield_climb.html_element,
            false
        );
    }

//public methods

//private properties
    var self = this;

//public properties
    this.outfield_land = new GUI_Element_OutField_t();
    this.outfield_flight = new GUI_Element_OutField_t();
    this.outfield_burrow = new GUI_Element_OutField_t();
    this.outfield_swim = new GUI_Element_OutField_t();
    this.outfield_climb = new GUI_Element_OutField_t();
    this.html_element = HTML_Create_Div("class_block_class_subblock");

//additional initialization
    Init();
}

function Block_Drone_Saves_t(){
//constants

//private methods
    var Init = function(){
        self.html_element.innerHTML = "Испытания:";
        self.html_element.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            self.html_element,
            "Стойкость:",
            self.outfield_fort.html_element,
            false
        );
        self.html_element.appendChild(HTML_Create_BR());
        
        Append_Label_Element_Pair(
            self.html_element,
            "Реакция:",
            self.outfield_refl.html_element,
            false
        );
        self.html_element.appendChild(HTML_Create_BR());
        
        
        Append_Label_Element_Pair(
            self.html_element,
            "Воля:",
            self.outfield_will.html_element,
            false
        );
    }

//public methods

//private properties
    var self = this;

//public properties
    this.outfield_fort = new GUI_Element_OutField_t();
    this.outfield_refl = new GUI_Element_OutField_t();
    this.outfield_will = new GUI_Element_OutField_t();
    this.html_element = HTML_Create_Div("class_block_class_subblock");

//additional initialization
    Init();
}

function Block_Drone_t(){
//constants
    const GUI_BLOCK = document.getElementById("block_mechanic_drone");
    const GUI_BLOCK_BODY = document.getElementById("block_mechanic_drone_body");

//private methods
    var Init = function(){
        GUI_BLOCK_BODY.appendChild(self.numbers.html_element);
        GUI_BLOCK_BODY.appendChild(self.attacks.html_element);
        GUI_BLOCK_BODY.appendChild(self.defense.html_element);
        GUI_BLOCK_BODY.appendChild(self.speed.html_element);
        GUI_BLOCK_BODY.appendChild(self.saves.html_element);
    }

//public methods
    this.Reset = function(){
        self.Hide();
    }

    this.Show = function(spec){
        GUI_BLOCK.style.display = "block";
    }
    
    this.Hide = function(){
        GUI_BLOCK.style.display = "none";
    }

//private properties
    var self = this;

//public properties
    this.chassis = new Block_Drone_Chassis_t();
    this.feats = new Block_Ability_List_t(
        document.getElementById('table_drone_feats'),
        Ability_Database_GetList(
            ABILITIES_DATABASE,
            "Черта",
            ["Черта дрона"],
            undefined,
            undefined,
            true
        )
    );
    this.mods = new Block_Ability_List_t(
        document.getElementById('table_drone_mods'),
        Ability_Database_GetList(
            ABILITIES_DATABASE,
            "Класс",
            ["Механик", "Дрон", "Модификация дрона"],
            undefined,
            20,
            true
        )
    );
    
    this.abilities = new Block_Ability_List_t(
        document.getElementById('table_drone_abilities'),
        null
    );
    
    this.abiscores = new Block_Drone_Abiscores_t();
    this.skills = new Block_Drone_Skills_t();
    
    this.numbers = new Block_Drone_Numbers_t();
    this.attacks = new Block_Drone_Attack_t();
    this.defense = new Block_Drone_Defense_t();
    this.speed = new Block_Drone_Speed_t();
    this.saves = new Block_Drone_Saves_t();
    //TODO: weapons!

//additional initialization
    Init();
    //TODO: below is just test, remove
    // this.abilities.Reset(null, "Способности дрона", [1, 1, 1, 1, 7, 10, 11, 20]);
    // this.feats.Reset(null, "Черты дрона", [1, 3, 6, 9, 11, 14, 17, 19]);
    // this.mods.Reset(null, "Модификации дрона", [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]);
}

function Block_Exocortex_t(){
//constants
    const GUI_BLOCK = document.getElementById("block_mechanic_exocortex");
    const MOD_LIST = [
        "Багажник",
        "Водомёты",
        "Гаффы",
        "Место под улучшение брони",
        "Обращение с высокотехнологичным оружием ближнего боя [Модификация дрона]",
        "Обращение с тяжёлым оружием [Модификация дрона]",
        "Потайной отсек",
        "Прыжковые двигатели",
        "Усиленное восприятие",
        "Ускоритель",
        "Устойчивость",
        "Адаптивный камуфляж",
        "Летательная установка",
        "Поле невидимости",
        "Устойчивость+",
        "Экскаватор",
        "Эхолокаторы"
    ];

//private methods
    var Get_Mod_DB = function(){
        const FIRST_MOD_LVL = 7;
        
        var db = Ability_Database_GetList(ABILITIES_DATABASE, "Класс", ["Механик", "Модификация дрона"], undefined, 20, true);
        
        for (let i = db.length - 1; i >= 0; i--){
            if (!MOD_LIST.includes(db[i].name)){
                db.splice(i, 1);
            }else if (db[i].lvl == 1){
                db[i].lvl = FIRST_MOD_LVL;
            }
        }
        return db;
    }

//public methods
    this.Reset = function(){
        self.Hide();
    }

    this.Show = function(){
        GUI_BLOCK.style.display = "block";
    }
    
    this.Hide = function(){
        GUI_BLOCK.style.display = "none";
    }

//private properties
    var self = this;

//public properties
    this.abilities = new Block_Ability_List_t(
        document.getElementById('table_abilities_exocortex'),
        null
    );
    this.mods = new Block_Ability_List_t(
        document.getElementById('table_exocortex_mods'),
        Get_Mod_DB()
    );

//additional initialization
}

function Block_AI_Level_t(div_block){
//constants
    const DIV_BLOCK = div_block;

//private methods
    var Init = function(){
        DIV_BLOCK.innerHTML = "Распределённое управление:";
        var table = HTML_Create_Table(
            2,
            3,
            true,
            "100%",
            ["40%", "20%", "40%"]
        );
        DIV_BLOCK.appendChild(table);
        var button_incr_exocortex = HTML_Create_Button(
            ">",
            Proc_Incr_Exocortex_Event
        );
        var button_incr_drone = HTML_Create_Button(
            "<",
            Proc_Incr_Drone_Event
        );
        m_outfield_exocortex = HTML_Create_Output(0);
        m_outfield_drone = HTML_Create_Output(0);
        
        table.rows[0].cells[0].innerHTML = "Дрон";
        table.rows[0].cells[1].appendChild(button_incr_exocortex);
        table.rows[0].cells[2].innerHTML = "Экзокортекс";
        table.rows[1].cells[0].appendChild(m_outfield_drone);
        table.rows[1].cells[1].appendChild(button_incr_drone);
        table.rows[1].cells[2].appendChild(m_outfield_exocortex);
    }
    
    var Proc_Incr_Exocortex_Event = function(){
        if (m_owner == null){
            return;
        }
        
        m_owner.Increase_Exocortex_Lvl();
    }
    
    var Proc_Incr_Drone_Event = function(){
        if (m_owner == null){
            return;
        }
        
        m_owner.Increase_Drone_Lvl();
    }

//public methods
    this.Reset = function(owner){
        m_owner = owner;
        self.Hide();
        self.Set_Drone_Lvl(0);
        self.Set_Exocortex_Lvl(0);
    }
    
    this.Set_Drone_Lvl = function(value){
        m_outfield_drone.value = value;
    }
    
    this.Set_Exocortex_Lvl = function(value){
        m_outfield_exocortex.value = value;
    }
    
    this.Show = function(){
        DIV_BLOCK.style.display = "block";
    }
    
    this.Hide = function(){
        DIV_BLOCK.style.display = "none";
    }
    

//private properties
    var self = this;
    var m_owner = null;
    var m_outfield_drone;
    var m_outfield_exocortex;

//public properties

//additional initialization
    Init();
}

function Block_Mechanic_Speciality_t(){
//constants
    const HTML_BLOCK = document.getElementById("block_mechanic_speciality");

//private methods
    var Init = function(){        
        HTML_BLOCK.innerHTML = "Основная специализация или ИИ";
        var selector_div = HTML_Create_Div();
        HTML_BLOCK.appendChild(selector_div);
        self.main_ai_selector = new Block_Subclass_Selector_t(
            selector_div);
            
        var lvl_div = HTML_Create_Div();
        HTML_BLOCK.appendChild(lvl_div);
        self.ai_lvl_selector = new Block_AI_Level_t(
            lvl_div);
    }

//public methods
    this.Reset = function(){
        self.Hide_All();
    }

    this.Hide_All = function(){
        self.exocortex.Hide();
        self.drone.Hide();
    }

//private properties
    var self = this;
    var m_map = new Map();

//public properties
    this.main_ai_selector; //set in init function
    this.ai_lvl_selector; //set in init function
    this.exocortex = new Block_Exocortex_t();
    this.drone = new Block_Drone_t();

//additional initialization
    Init();
}

function Block_Class_Mechanic_t(){
//private methods
    var Init = function(){
        self.Hide_Block();
    }

//public methods
    this.Show_Block = function(){
        m_block.style.display = "block";
    }

    this.Hide_Block = function(){
        m_block.style.display = "none";
    }

//private properties
    var self = this;
    var m_block = document.getElementById("block_class_details_mechanic");

//public properties
//TODO: get levels properly
    this.class_abilities = new Block_Ability_List_t(
        document.getElementById('table_class_abilities_mechanic'),
        null
    );
    
    this.tricks = new Block_Ability_List_t(
        document.getElementById('table_class_mechanic_tricks'),
        Ability_Database_GetList(ABILITIES_DATABASE, "Класс", ["Механик", "Трюк механика"], undefined, 20, true)
    );

    this.speciality = new Block_Mechanic_Speciality_t();

//additional initialization
    Init();
}