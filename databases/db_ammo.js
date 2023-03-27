const AMMO_DATABASE = [ 
{
    name: "Аккумулятор",
    type: "Стандартные",
    lvl: 1,
    price: 60,
    capacity: 20,
    weight: "-",
    special: null,
    source: "ОКП"
},
{
    name: "Аккумулятор повышенной ёмкости",
    type: "Стандартные",
    lvl: 4,
    price: 330,
    capacity: 40,
    weight: "-",
    special: null,
    source: "ОКП"
},
{
    name: "Аккумулятор высокой ёмкости",
    type: "Стандартные",
    lvl: 4,
    price: 390,
    capacity: 80,
    weight: "-",
    special: null,
    source: "ОКП"
},
{
    name: "Аккумулятор сверхвысокой ёмкости",
    type: "Стандартные",
    lvl: 5,
    price: 445,
    capacity: 100,
    weight: "-",
    special: null,
    source: "ОКП"
},
{
    name: "Кишалийский аккумулятор",
    type: "Стандартные",
    lvl: 1,
    price: 400,
    capacity: 20,
    weight: "-",
    special: "Полностью перезаряжается самостоятельно, если не использовать 24 часа",
    source: "СП-04"
},
{
    name: "Кишалийский аккумулятор повышенной ёмкости",
    type: "Стандартные",
    lvl: 4,
    price: 3000,
    capacity: 40,
    weight: "-",
    special: "Полностью перезаряжается самостоятельно, если не использовать 24 часа",
    source: "СП-04"
},
{
    name: "Кишалийский аккумулятор высокой ёмкости",
    type: "Стандартные",
    lvl: 4,
    price: 5000,
    capacity: 80,
    weight: "-",
    special: "Полностью перезаряжается самостоятельно, если не использовать 24 часа",
    source: "СП-04"
},
{
    name: "Кишалийский аккумулятор сверхвысокой ёмкости",
    type: "Стандартные",
    lvl: 5,
    price: 8400,
    capacity: 100,
    weight: "-",
    special: "Полностью перезаряжается самостоятельно, если не использовать 24 часа",
    source: "СП-04"
},
{
    name: "Дробовые патроны",
    type: "Стандартные",
    lvl: 1,
    price: 55,
    capacity: 25,
    weight: "Л",
    special: null,
    source: "ОКП"
},
{
    name: "Дротики",
    type: "Стандартные",
    lvl: 1,
    price: 20,
    capacity: 25,
    weight: "Л",
    special: null,
    source: "ОКП"
},
{
    name: "Мини-ракеты",
    type: "Стандартные",
    lvl: 4,
    price: 300,
    capacity: 10,
    weight: "Л",
    special: null,
    source: "ОКП"
},
{
    name: "Патроны для короткоствольного оружия",
    type: "Стандартные",
    lvl: 1,
    price: 40,
    capacity: 30,
    weight: "Л",
    special: null,
    source: "ОКП"
},
{
    name: "Патроны для длинноствольного и снайперского оружия",
    type: "Стандартные",
    lvl: 1,
    price: 75,
    capacity: 25,
    weight: "Л",
    special: null,
    source: "ОКП"
},
{
    name: "Патроны для тяжёлого оружия",
    type: "Стандартные",
    lvl: 2,
    price: 90,
    capacity: 20,
    weight: "Л",
    special: null,
    source: "ОКП"
},
{
    name: "Стрелы",
    type: "Стандартные",
    lvl: 1,
    price: 50,
    capacity: 20,
    weight: "Л",
    special: null,
    source: "ОКП"
},
{
    name: "Каустрол, стандартный",
    type: "Стандартные",
    lvl: 1,
    price: 60,
    capacity: 20,
    weight: "Л",
    special: null,
    source: "ОКП"
},
{
    name: "Каустрол, повышенной ёмкости",
    type: "Стандартные",
    lvl: 3,
    price: 280,
    capacity: 40,
    weight: "1",
    special: null,
    source: "ОКП"
},
{
    name: "Топливный бак, стандартный",
    type: "Стандартные",
    lvl: 1,
    price: 60,
    capacity: 20,
    weight: "Л",
    special: null,
    source: "ОКП"
},
{
    name: "Топливный бак, повышенной ёмкости",
    type: "Стандартные",
    lvl: 3,
    price: 280,
    capacity: 40,
    weight: "1",
    special: null,
    source: "ОКП"
},
{
    name: "Фальшфейер",
    type: "Стандартные",
    lvl: 1,
    price: 5,
    capacity: 1,
    weight: "2",
    special: "Можно поджечь вручную. Горит в течение 1 часа. Можно применять как импровизированное оружие ближнего боя, наносящее 1d2 огнём.",
    source: "ОКП"
},
{
    name: "Флешетты",
    type: "Стандартные",
    lvl: 1,
    price: 75,
    capacity: 25,
    weight: "Л",
    special: null,
    source: "МС"
},
{
    name: "Разрывная стрела I",
    type: "Особые",
    lvl: 6,
    price: 875,
    capacity: 1,
    weight: "-",
    special: "Аналогично любой гранате 1 уровня или ниже",
    source: "ОКП"
},
{
    name: "Разрывная стрела II",
    type: "Особые",
    lvl: 10,
    price: 5450,
    capacity: 1,
    weight: "-",
    special: "Аналогично любой гранате 5 уровня или ниже",
    source: "ОКП"
},
{
    name: "Разрывная стрела III",
    type: "Особые",
    lvl: 15,
    price: 32050,
    capacity: 1,
    weight: "-",
    special: "Аналогично любой гранате 10 уровня или ниже",
    source: "ОКП"
},
{
    name: "Разрывная стрела IV",
    type: "Особые",
    lvl: 20,
    price: 245000,
    capacity: 1,
    weight: "-",
    special: "Аналогично любой гранате 15 уровня или ниже",
    source: "ОКП"
},
{
    name: "Ракета, тактическая",
    type: "Особые",
    lvl: 10,
    price: 5700,
    capacity: 1,
    weight: "1",
    special: "Взрыв (6d8 Д&Ко, 30 футов)",
    source: "ОКП"
},
{
    name: "Ракета, улучшенная",
    type: "Особые",
    lvl: 13,
    price: 14600,
    capacity: 1,
    weight: "1",
    special: "Взрыв (6d8 Д&О, 30 футов)",
    source: "ОКП"
}
];