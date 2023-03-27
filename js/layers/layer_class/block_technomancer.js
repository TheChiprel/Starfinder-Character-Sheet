function Block_Technomancer_Class_Abilities_t (class_data){
//constants
const ABILITY_LIST = [
    ["Хранилище чар"],
    ["Заклинатель-эксперт"],
    ["Привычное оружие [Техномант]"],
    ["Техноразум"],
    ["Накопитель чар"],
    ["Подзарядка решимости"],
    ["Объединение заклинаний"]
];

//private methods
    var Init = function(){
        while (m_table.rows.length > 1){
            m_table.deleteRow(1);
        }

        for (let i = 0; i < ABILITY_LIST.length; i++){
            let ability = ABILITY_LIST[i];

            if(ability.length == 1){
                var entry = Find_Ability_By_Name(ability[0]);
                if (entry != null){
                    var row = m_table.insertRow(m_table.rows.length);

                    var cell_lvl = row.insertCell(0);
                    var cell_ability = row.insertCell(1);

                    var onclick_func = m_class_data.class_abilities.Show_Details.bind(null, i);

                    if (entry.lvl != null){
                        cell_lvl.innerHTML = entry.lvl;
                    }

                    cell_ability.innerHTML = entry.name;
                    row.onclick = onclick_func;

                    m_class_data.class_abilities.Set(i, entry);
                }else{
                    console.error("Attempting to add unknown ability to ability table: '" + ABILITY_LIST[i] + "'");
                }
            }
            //else: TODO
        }
    }

//private properties
    var self = this;
    var m_table = document.getElementById('table_class_abilities_technomancer');
    var m_class_data = class_data;

//public properties

//additional initialization
    Init();
}

//public methods
function Block_Technomancer_Hacks_t(class_data){
//constants

//private methods
    var Init = function(){
        while (m_table.rows.length > 1){
            m_table.deleteRow(1);
        }

        let lvl_list = m_class_data.hacks.Get_Lvl_List();
        for (let i = 0; i < lvl_list.length; i++){
            let cur_lvl = lvl_list[i];

            var row = m_table.insertRow(m_table.rows.length);
            var cell_lvl = row.insertCell(0);
            var cell_ability = row.insertCell(1);
            var cell_add_remove_button = row.insertCell(2);

            cell_lvl.innerHTML = cur_lvl;
            cell_ability.innerHTML = "---";

            var add_func = self.Open_Database.bind(null, i);
            var add_remove_button = HTML_Create_Button("+", add_func); //TODO
            cell_add_remove_button.appendChild(add_remove_button);
        }
    }

//public methods
    this.Open_Database = function(row){
        let lvl_list = m_class_data.hacks.Get_Lvl_List();
        let max_lvl = lvl_list[row];
        m_database = Ability_Database_GetList(ABILITIES_DATABASE, "Класс", ["Техномант", "Магический хак"], undefined, max_lvl, true);

        var table_data = new Array(0);
        var filters = new Array(0);
        var add_func = self.Set_By_Entry_Num.bind(null, row);

        let headers = [
            "Название",
            "Ур.",
            "Описание",
            "Ист."
        ];

        for (let i = 0; i < m_database.length; i++){
            let cur_ability = m_database[i];

            table_data.push([
                cur_ability.name,
                cur_ability.lvl,
                cur_ability.descr,
                cur_ability.source]);
        }

        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.FIND,    0, "Название"  ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.RANGE,   1, "Ур."  ));
        filters.push(new Database_Filter_Input_t(POPUP_FILTER_TYPES.SELECT,  3, "Источник"  ));

        Popup_Database.Open(
            table_data,
            add_func,
            filters,
            headers,
            self.Show_Info_Database);
    }
    
    this.Set = function(row, entry){
        let table_row = m_table.rows[row + 1]; // +1 with header
        let cell_name = table_row.cells[1];
        let cell_add_remove_button = table_row.cells[2];
        var remove_func = self.Remove.bind(null, row);
        var show_details_func = self.Show_Details.bind(null, row);

        cell_name.innerHTML = entry.name;
        cell_name.onclick = show_details_func;

        cell_add_remove_button.innerHTML = "";
        var add_remove_button = HTML_Create_Button("X", remove_func);
        cell_add_remove_button.appendChild(add_remove_button);

        m_class_data.hacks.Set(row, entry);

        m_database = null;
        Popup_Database.Close();
    }

    this.Set_By_Entry_Num = function(row, entry_num){
        self.Set(row, m_database[entry_num]);
    }
    
    this.Set_By_Name = function(row, name){
        var entry = Get_Ability_Entry_By_Name(ABILITIES_DATABASE, name);
        if (entry == null){
            console.error("Failed to find ability: '" + name + "'");
            return;
        }
        
        self.Set(row, entry);
    }

    this.Remove = function(row){
        let table_row = m_table.rows[row + 1]; // +1 with header
        let cell_name = table_row.cells[1];
        let cell_add_remove_button = table_row.cells[2];
        var add_func = self.Open_Database.bind(null, row);

        m_class_data.hacks.Remove(row);

        cell_name.innerHTML = "---";
        cell_name.removeAttribute("onclick");

        cell_add_remove_button.innerHTML = "";

        var add_remove_button = HTML_Create_Button("+", add_func);
        cell_add_remove_button.appendChild(add_remove_button);
    }

    this.Show_Details = function(row){
        m_class_data.hacks.Show_Details(row);
    }

    this.Show_Info_Database = function(entry_num){
        let ability = m_database[entry_num];

        Popup_Descr.Call(ability.name, ability.descr);
    }

    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }

        for (let i = 0; i < obj.length; i++){
            if (obj[i] != null){
                self.Set_By_Name(i, obj[i]);
            }
        }
    }

//private properties
    var self = this;
    var m_class_data = class_data;
    var m_table = document.getElementById('table_technomancer_hacks');
    var m_database = null;

//public properties

//additional initialization
    Init();
}

function Block_Class_Technomancer_t(){

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

    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        m_adept_skills.Load_From_Obj(obj.adept_skills);
        m_revelations.Load_From_Obj(obj.revelations);
        m_zeniths_graviton.Load_From_Obj(obj.zeniths_graviton);
        m_zeniths_photon.Load_From_Obj(obj.zeniths_photon);
        m_manifistation.Load_From_Obj(obj.manifistation);
    }

//private properties
    var self = this;
    var m_block = document.getElementById("block_class_details_technomancer");
    var m_class_data = chardata.classes.class_map.get(CLASSES.TECHNOMANCER).context;
    var m_class_abilities = new Block_Technomancer_Class_Abilities_t(m_class_data);
    var m_hacks = new Block_Technomancer_Hacks_t(m_class_data);

//public properties

//additional initialization
    Init();
}