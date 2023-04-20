function Layer_Skills_t(){
//private methods
    var Reset = function(){
        m_outfield_sp_map = new Map();

        //clearing table
        while (m_table_skills.rows.length > 1){
            m_table_skills.deleteRow(1);
        }

        for (let i = 0; i < chardata.skills.arr.length; i++){
            var skill_name = chardata.skills.arr[i].name;

            var row = m_table_skills.insertRow(m_table_skills.rows.length);
            row.class = 'class_row_skill';
            row.name = skill_name;

            var cell_skill_name = row.insertCell(0);
            var cell_points = row.insertCell(1);
            var cell_mod = row.insertCell(2);


            var skill_label = HTML_Create_Label(skill_name);
            cell_skill_name.appendChild(skill_label);

            var skill_points = HTML_Create_Input_Number(0, 0, 20, "layers.skills.Set_Skill_Points('" + skill_name + "', Number(event.target.value))");
            cell_points.appendChild(skill_points);
            m_outfield_sp_map.set(skill_name, skill_points);

            var onchange_func = chardata.skills.Show_Detail_Popup.bind(null, skill_name);
            var output_field = HTML_Create_Output(
                0,
                onchange_func,
                'out_field_skill_' + skill_name,
                'class_output_field class_output_skill_' + skill_name);
            cell_mod.appendChild(output_field);

            chardata.skills.arr[i].Set_Outfield(output_field);
    }
}

//public methods
    this.Set_Skill_Points = function(skill_name, value, update_outfield = false){
        chardata.skills.Set_Skill_Points(skill_name, value);
        if (update_outfield){
            if (m_outfield_sp_map.has(skill_name)){
                m_outfield_sp_map.get(skill_name).value = value;
            }else{
                console.error("Attempt to set skill points for unknown skill '" + skill_name + "'");
            }
        }
        //else NOTHING TO DO
    }

    this.Load_From_Obj = function(obj){
        if (obj == undefined){
            return;
        }
        
        for (const [skill_name, points] of Object.entries(obj)){
            self.Set_Skill_Points(skill_name, points, true);
        };
    }

//private properties
    var self = this;
    var m_table_skills = document.getElementById('table_skills');
    var m_outfield_sp_map;

//public properties

//additional initialization
    Reset();
}