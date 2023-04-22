function Layer_Skills_t(){
//private methods

//public methods
    this.Clear_Table = function(){
        //clearing table
        while (m_table_skills.rows.length > 1){
            m_table_skills.deleteRow(1);
        }
    }
    
    this.Add_Skill = function(skill_name, infield_class, outfield_class){
        var row = m_table_skills.insertRow(m_table_skills.rows.length);

        let cell_skill_name = row.insertCell(0);
        cell_skill_name.innerHTML = skill_name;
        
        let cell_points = row.insertCell(1);
        var skill_points = HTML_Create_Input_Number(
            0,
            0,
            20,
            undefined,
            undefined,
            infield_class
        );
        cell_points.appendChild(skill_points);
        
        let cell_mod = row.insertCell(2);
        var output_field = HTML_Create_Output(
            0,
            undefined,
            undefined,
            'class_output_field ' + outfield_class
        );
        cell_mod.appendChild(output_field);
    }

//private properties
    var self = this;
    var m_table_skills = document.getElementById('table_skills');

//public properties

//additional initialization
    //Reset();
}