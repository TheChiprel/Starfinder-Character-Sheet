function Append_Label_Element_Pair(
    gui_block,
    label_name,
    html_element,
    is_separate_line = false
){
    var label = HTML_Create_Label(
        label_name
    );
    
    if (is_separate_line){
        label.appendChild(HTML_Create_BR());
    }
    label.appendChild(html_element);
    gui_block.appendChild(label);
}

//TODO: move GUI elements to separate file?

//TODO: check numerical values, cancel invalids
function GUI_Element_InField_t(is_numerical = false){
//constants

//private methods
    var Event_OnChange = function(event){
        if ((m_owner == null) || (m_owner.Set == undefined)){
            return;
        }
        
        m_owner.Set(event.target.value);
    }

//public methods
    this.Reset = function(owner){
        m_owner = owner;
    }

    this.Set_Value = function(value){
        self.html_element.value = value;
    }

//private properties
    var self = this;
    var m_owner = null;

//public properties
    this.html_element = HTML_Create_Input_Text(
        "",
        Event_OnChange
    );

//additional initialization
}

function GUI_Element_OutField_t(){
//constants

//private methods
    var Event_OnClick = function(){
        if (m_onclick_func == null){
            return;
        }
        
        m_onclick_func();
    }

//public methods
    this.Reset = function(owner, onclick_func){
        m_owner = owner;
        m_onclick_func = onclick_func;
    }

    this.Set_Value = function(value){
        self.html_element.value = value;
    }

//private properties
    var self = this;
    var m_owner = null;
    var m_onclick_func = null;

//public properties
    this.html_element = HTML_Create_Output(
        "",
        Event_OnClick,
        undefined,
        "class_output_field"
    );

//additional initialization
}

//TODO: check manual exceed of max
function GUI_Element_InNumber_t(){
//constants

//private methods
    var Event_OnChange = function(event){
        if (m_onchange_func == null){
            return;
        }
        
        let value = event.target.value;
        if(isNaN(value)){
            event.target.value = m_get_value_func();
            return;
        }
        m_onchange_func(parseInt(value));
    }

//public methods
    this.Reset = function(onchange_func, get_value_func){
        m_onchange_func = onchange_func;
        m_get_value_func = get_value_func;
    }

    this.Set_Value = function(value){
        self.html_element.value = value;
    }
    
    this.Set_Min_Value = function(value){
        self.html_element.min = value;
    }
    
    this.Set_Max_Value = function(value){
        self.html_element.max = value;
    }

//private properties
    var self = this;
    var m_onchange_func = null;
    var m_get_value_func = null;

//public properties
    this.html_element = HTML_Create_Input_Number(
        0,
        0,
        0,
        Event_OnChange
    );

//additional initialization
}

function GUI_Element_Selector_t(option_list){
//constants

//private methods
    var Event_OnChange = function(){
        if ((m_owner == null) || (m_owner.Set == undefined)){
            return;
        }
        
        m_owner.Set(event.target.value);
    }

//public methods
    this.Reset = function(owner){
        m_owner = owner;
    }

    this.Set_Value = function(value){
        self.html_element.value = value;
    }

//private properties
    var self = this;
    var m_owner = null;

//public properties
    this.html_element = HTML_Create_Selector(
        false,
        option_list,
        Event_OnChange
    );

//additional initialization
}

function Block_DropDownList_t(
    option_list
){
//constants

//private methods
    var Init = function(option_list){
        self.html_element = HTML_Create_Div("class_ddlist_classes");
        var pseudo_button = HTML_Create_Button("+");
        self.html_element.appendChild(pseudo_button);
        var dd_list = HTML_Create_Div("class_ddlist_classes_content");
        
        option_list.forEach(option => {
            var button = HTML_Create_Button(
                option,
                Event_DD_Button_OnClick.bind(null, option)
            );
            dd_list.appendChild(button);
            m_dd_button_map.set(option, button);
        });
        self.html_element.appendChild(dd_list);
    }
    
    var Event_DD_Button_OnClick = function(button_name){
        if (m_callback_button_press == null){
            return;
        }
        
        m_callback_button_press(button_name);
    }

//public methods
    this.Reset = function(callback_button_press){
        m_callback_button_press = callback_button_press;
        m_dd_button_map.forEach((button, key) => {
            button.disabled = false;
        });
    }

    this.Set_DD_Button_State = function(button_name, is_enabled){
        if (!m_dd_button_map.has(button_name)){
            console.error("Button '" + button_name + "' not found in dropdown list!");
            return;
        }
        
        let button = m_dd_button_map.get(button_name);
        button.disabled = !is_enabled;
    }

//private properties
    var self = this;
    var m_owner = null;
    var m_dd_button_map = new Map();
    var m_callback_button_press = null;

//public properties
    this.html_element; //set on init

//additional initialization
    Init(option_list);
}
