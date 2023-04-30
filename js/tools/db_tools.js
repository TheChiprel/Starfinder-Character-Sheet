function Ability_Database_GetList(in_database, in_type = undefined, in_subtype = undefined, min_lvl = undefined, max_lvl = undefined, sort_lvl = false){
    var ret = new Array(0);
    if ((in_type == undefined) && (in_subtype == undefined) && (in_category == undefined)){
        console.error("Extracting from database with no criteria set");
        return in_database;
    }

    for (let i = 0; i < in_database.length; i++){
        let entry = in_database[i]; //VAR?
        if ((in_type != undefined) && (in_type != entry.type)){
            continue;
        }

        if ((in_subtype != undefined) && (in_subtype.length > 0)){
            if (entry.subtype == null){
                continue;
            }

            let entry_subtypes = entry.subtype.split(', ');
            let valid = true;
            for (let j = 0; (j < in_subtype.length) && (valid); j++){
                valid = (entry_subtypes.includes(in_subtype[j]));
            }

            if (!valid){
                continue;
            }
        }

        if (min_lvl != undefined){
            if ((entry.lvl == null) || (entry.lvl < min_lvl)){
                continue;
            }
        }

        if (max_lvl != undefined){
            if ((entry.lvl == null) || (entry.lvl > max_lvl)){
                continue;
            }
        }

        ret.push(entry);
    }

    if (sort_lvl){
        ret.sort((a, b) => {
            if (a.lvl == null){
                if (b.lvl == null){
                    return 0;
                }

                return -1;
            }

            if (b.lvl == null){
                return 1;
            }

            return (a.lvl - b.lvl);
        });
    }

    return ret;
}

function Spell_Database_GetList(
    in_database,
    in_class = undefined,
    min_lvl = undefined,
    max_lvl = undefined
){
    var ret = new Array(0);
    if ((in_class == undefined) && (min_lvl == undefined) && (max_lvl == undefined)){
        console.error("Extracting from database with no criteria set");
        return in_database;
    }

    for (let i = 0; i < in_database.length; i++){
        var entry = in_database[i];

        if (in_class != undefined){
            if (entry.classes == null){
                continue;
            }

            let entry_classes = entry.classes.split(', ');
            let valid = entry_classes.includes(in_class);

            if (entry_classes.includes(in_class)){
                continue;
            }
        }

        if (min_lvl != undefined){
            if (entry.lvl == null){
                continue;
            }
            
            let entry_max_lvl = parseInt(entry.lvl[entry.lvl.length - 1]);
            if ((entry.lvl == null) || (entry_max_lvl < min_lvl)){
                continue;
            }
        }

        if (max_lvl != undefined){
            if (entry.lvl == null){
                continue;
            }
            
            let entry_min_lvl = parseInt(entry.lvl[0]);
            if ((entry.lvl == null) || (entry_min_lvl > min_lvl)){
                continue;
            }
        }

        ret.push(entry);
    }

    return ret;
}
