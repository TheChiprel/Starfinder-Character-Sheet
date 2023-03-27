function GetModifierStr(value){
    var ret = "";
    if (value > 0){
        ret += "+";
    }
    ret += value;
    return ret;
}

// function Append_Maps(map1, map2){
    // map2.forEach(function(value, key) {
        // map1.set(key, value);
    // });
// }

function Recalc_Function_t (id, func){
    this.id = id;
    this.func = func;
    this.recurs_defense = false;
    
    var self = this;
    
    this.call = function (){
        if (!self.recurs_defense){
            self.recurs_defense = true;
            self.func();
            self.recurs_defense = false;
        }
        else
        {
            console.log("Error: recursive call detected with recalculation function '" + self.id + "'");
        }
    }
}

function Recalc_Function_Collection_t (){
    this.func_arr = new Array(0);
    
    var self = this;
    
    this.Add = function (recalc_func){
        self.func_arr.push(recalc_func);
    }
    
    this.Remove = function (id){
        for (let i = 0; i < self.func_arr.length; i++){
            if (self.func_arr[i].id == id){
                self.func_arr.splice(i, 1);
                return;
            }
        }
    }
    
    this.Call = function (){
        for (let i = 0; i < self.func_arr.length; i++){
            self.func_arr[i].call();
        }
    }
}