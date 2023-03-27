const GRENADE_DATABASE = [ 
{
    name: "Осколочная граната I",
    lvl: 1,
    price: 35,
    weight: "Л",
    special: "Взрыв (1d6 Ко, 15 футов)",
    additional_info: null,
    descr: "При взрыве оболочка осколочной гранаты разлетается на множество поражающих элементов.",
    source: "ОКП"
},
{
    name: "Дымовая граната",
    lvl: 1,
    price: 40,
    weight: "Л",
    special: "Взрыв (облако дыма на 1 минуту, 20 футов)",
    additional_info: "Любое вдохнувшее дым существо каждый раунд должно проходить испытание Стойкости (СЛ = 15 + 1 за каждую предыдущую попытку) и при провале задыхается, заходится в кашле и не может совершать в этот раунд других действий. Если существо задыхается два раза подряд, оно получает 1d6 несмертельного урона. Если у брони включена система жизнеобеспечения, она отменяет этот эффект. Вне зависимости от брони дым мешает зрению, считаясь областью плохой видимости.",
    descr: "Дымовая граната не наносит урона и при взрыве выпускает плотное облако дыма. Любое вдохнувшее дым существо каждый раунд должно проходить испытание Стойкости (СЛ = 15 + 1 за каждую предыдущую попытку) и при провале задыхается, заходится в кашле и не может совершать в этот раунд других действий. Если существо задыхается два раза подряд, оно получает 1d6 несмертельного урона. Если у брони включена система жизнеобеспечения, она отменяет этот эффект. Вне зависимости от брони дым мешает зрению, считаясь областью плохой видимости.",
    source: "ОКП"
},
{
    name: "Электрическая граната I",
    lvl: 1,
    price: 50,
    weight: "Л",
    special: "Взрыв (1d8 Э, 15 футов)",
    additional_info: null,
    descr: "При ударе эта граната создаёт мощный электрический импульс.",
    source: "ОКП"
},
{
    name: "Обездвиживающая граната I",
    lvl: 1,
    price: 80,
    weight: "Л",
    special: "Взрыв (опутывание на 2d4 раунда, 10 футов)",
    additional_info: null,
    descr: "При взрыве эта граната выпускает облако липкого полимера.",
    source: "ОКП"
},
{
    name: "Световая граната I",
    lvl: 2,
    price: 120,
    weight: "Л",
    special: "Взрыв (слепота на 1d4 раунда, 5 футов)",
    additional_info: null,
    descr: null,
    source: "ОКП"
},
{
    name: "Зажигательная граната I",
    lvl: 2,
    price: 140,
    weight: "Л",
    special: "Взрыв (1d6 О, горение 1d4, 5 футов)",
    additional_info: null,
    descr: "При взрыве этой гранаты выбрасывается облако высокотемпературной плазмы.",
    source: "ОКП"
},
{
    name: "Электрическая граната II",
    lvl: 4,
    price: 290,
    weight: "Л",
    special: "Взрыв (1d12 Э, 15 футов)",
    additional_info: null,
    descr: "При ударе эта граната создаёт мощный электрический импульс.",
    source: "ОКП"
},
{
    name: "Обездвиживающая граната II",
    lvl: 4,
    price: 300,
    weight: "Л",
    special: "Взрыв (опутывание на 2d4 раунда, 15 футов)",
    additional_info: null,
    descr: "При взрыве эта граната выпускает облако липкого полимера.",
    source: "ОКП"
},
{
    name: "Осколочная граната II",
    lvl: 4,
    price: 310,
    weight: "Л",
    special: "Взрыв (2d6 Ко, 15 футов)",
    additional_info: null,
    descr: "При взрыве оболочка осколочной гранаты разлетается на множество поражающих элементов.",
    source: "ОКП"
},
{
    name: "Шумовая граната I",
    lvl: 4,
    price: 320,
    weight: "Л",
    special: "Взрыв (1d10 З, глухота на 1d4 минуты, 15 футов)",
    additional_info: null,
    descr: null,
    source: "ОКП"
},
{
    name: "Разряжающая граната",
    lvl: 4,
    price: 700,
    weight: "Л",
    special: "Взрыв (Каждый аккумулятор теряет 2d4 заряда, испытание Реакции отменяет, 10 футов)",
    additional_info: null,
    descr: "When a drain grenade explodes, each creature in a 10-foot-radius burst must succeed at a Reflex saving throw or all batteries in its possession lose 2d4 charges.",
    source: "СП-09"
},
{
    name: "Некрограната I",
    lvl: 5,
    price: 870,
    weight: "Л",
    special: "Взрыв (1d8 Х, некротическое, 10 футов)",
    additional_info: null,
    descr: "These grenades are crafted to resemble leering, pygmy-sized skulls. When a necro grenade detonates, it expels a shroud of chemical coolants from its exposed eyes and mouth. This freezing gas is laced with minor traces of negative energy, draining the living and healing undead caught in the area of effect.",
    source: "СП-03"
},
{
    name: "Зажигательная граната II",
    lvl: 6,
    price: 580,
    weight: "Л",
    special: "Взрыв (2d6 О, горение 1d6, 10 футов)",
    additional_info: null,
    descr: "При взрыве этой гранаты выбрасывается облако высокотемпературной плазмы.",
    source: "ОКП"
},
{
    name: "Криограната I",
    lvl: 6,
    price: 600,
    weight: "Л",
    special: "Взрыв (1d8 Х, ошеломление на 1 раунд, 10 футов)",
    additional_info: null,
    descr: null,
    source: "ОКП"
},
{
    name: "Световая граната II",
    lvl: 6,
    price: 620,
    weight: "Л",
    special: "Взрыв (слепота на 1d4 раунда, 10 футов)",
    additional_info: null,
    descr: null,
    source: "ОКП"
},
{
    name: "Осколочная граната III",
    lvl: 8,
    price: 1260,
    weight: "Л",
    special: "Взрыв (4d6 Ко, 15 футов)",
    additional_info: null,
    descr: "При взрыве оболочка осколочной гранаты разлетается на множество поражающих элементов.",
    source: "ОКП"
},
{
    name: "Шумовая граната II",
    lvl: 8,
    price: 1340,
    weight: "Л",
    special: "Взрыв (2d10 З, глухота на 1d4 минуты, 20 футов)",
    additional_info: null,
    descr: null,
    source: "ОКП"
},
{
    name: "Зажигательная граната III",
    lvl: 8,
    price: 1380,
    weight: "Л",
    special: "Взрыв (3d6 О, горение 1d6, 10 футов)",
    additional_info: null,
    descr: "При взрыве этой гранаты выбрасывается облако высокотемпературной плазмы.",
    source: "ОКП"
},
{
    name: "Граната искажения",
    lvl: 8,
    price: 1600,
    weight: "Л",
    special: "Взрыв (2d10 З, ошеломление, 20 футов)",
    additional_info: null,
    descr: "Граната искажения выпускает поток гравитационных волн, разрушающих субатомные поля подобно звуковому оружию, но в отличие от последнего не оглушает, а ошеломляет цель, кратковременно нарушая ткань пространства вокруг неё.",
    source: "СП-05"
},
{
    name: "Некрограната II",
    lvl: 9,
    price: 3900,
    weight: "Л",
    special: "Взрыв (2d8 Х, некротическое, 15 футов)",
    additional_info: null,
    descr: "These grenades are crafted to resemble leering, pygmy-sized skulls. When a necro grenade detonates, it expels a shroud of chemical coolants from its exposed eyes and mouth. This freezing gas is laced with minor traces of negative energy, draining the living and healing undead caught in the area of effect.",
    source: "СП-03"
},
{
    name: "Криограната II",
    lvl: 10,
    price: 2350,
    weight: "Л",
    special: "Взрыв (2d8 Х, ошеломление на 1 раунд, 15 футов)",
    additional_info: null,
    descr: null,
    source: "ОКП"
},
{
    name: "Обездвиживающая граната III",
    lvl: 10,
    price: 2500,
    weight: "Л",
    special: "Взрыв (опутывание на 2d4 раунда, 20 футов)",
    additional_info: null,
    descr: "При взрыве эта граната выпускает облако липкого полимера.",
    source: "ОКП"
},
{
    name: "Электрическая граната III",
    lvl: 10,
    price: 2500,
    weight: "Л",
    special: "Взрыв (3d12 Э, 15 футов)",
    additional_info: null,
    descr: "При ударе эта граната создаёт мощный электрический импульс.",
    source: "ОКП"
},
{
    name: "Осколочная граната IV",
    lvl: 10,
    price: 2700,
    weight: "Л",
    special: "Взрыв (6d6 Ко, 15 футов)",
    additional_info: null,
    descr: "При взрыве оболочка осколочной гранаты разлетается на множество поражающих элементов.",
    source: "ОКП"
},
{
    name: "Граната темпорального искажения",
    lvl: 10,
    price: 2900,
    weight: "Л",
    special: "Взрыв (шок на 1 раунд (испытание Стойкости отменяет), 20 футов)",
    additional_info: null,
    descr: "Гранаты темпорального искажения замедляют субатомные колебания, кратковременно останавливая цели, но не повреждая их при этом.",
    source: "СП-05"
},
{
    name: "Зажигательная граната IV",
    lvl: 12,
    price: 4300,
    weight: "Л",
    special: "Взрыв (5d6 О, горение 3d6, 15 футов)",
    additional_info: null,
    descr: "При взрыве этой гранаты выбрасывается облако высокотемпературной плазмы.",
    source: "ОКП"
},
{
    name: "Световая граната III",
    lvl: 12,
    price: 4800,
    weight: "Л",
    special: "Взрыв (слепота на 1d6 раундов, 15 футов)",
    additional_info: null,
    descr: null,
    source: "ОКП"
},
{
    name: "Шумовая граната III",
    lvl: 12,
    price: 5200,
    weight: "Л",
    special: "Взрыв (4d10 З, глухота на 1d4 минуты, 25 футов)",
    additional_info: null,
    descr: null,
    source: "ОКП"
},
{
    name: "Некрограната III",
    lvl: 13,
    price: 14640,
    weight: "Л",
    special: "Взрыв (4d8 Х, некротическое, 20 футов)",
    additional_info: null,
    descr: "These grenades are crafted to resemble leering, pygmy-sized skulls. When a necro grenade detonates, it expels a shroud of chemical coolants from its exposed eyes and mouth. This freezing gas is laced with minor traces of negative energy, draining the living and healing undead caught in the area of effect.",
    source: "СП-03"
},
{
    name: "Осколочная граната V",
    lvl: 14,
    price: 8400,
    weight: "Л",
    special: "Взрыв (10d6 Ко, 15 футов)",
    additional_info: null,
    descr: "При взрыве оболочка осколочной гранаты разлетается на множество поражающих элементов.",
    source: "ОКП"
},
{
    name: "Криограната III",
    lvl: 14,
    price: 9400,
    weight: "Л",
    special: "Взрыв (4d8 Х, ошеломление на 1 раунд, 20 футов)",
    additional_info: null,
    descr: null,
    source: "ОКП"
},
{
    name: "Электрическая граната IV",
    lvl: 14,
    price: 10500,
    weight: "Л",
    special: "Взрыв (6d12 Э, 15 футов)",
    additional_info: null,
    descr: "При ударе эта граната создаёт мощный электрический импульс.",
    source: "ОКП"
},
{
    name: "Шумовая граната IV",
    lvl: 16,
    price: 20000,
    weight: "Л",
    special: "Взрыв (7d10 З, глухота на 1d4 минуты, 30 футов)",
    additional_info: null,
    descr: null,
    source: "ОКП"
},
{
    name: "Зажигательная граната V",
    lvl: 16,
    price: 20200,
    weight: "Л",
    special: "Взрыв (10d6 О, горение 5d6, 15 футов)",
    additional_info: null,
    descr: "При взрыве этой гранаты выбрасывается облако высокотемпературной плазмы.",
    source: "ОКП"
},
{
    name: "Осколочная граната VI",
    lvl: 16,
    price: 20500,
    weight: "Л",
    special: "Взрыв (12d6 Ко, 15 футов)",
    additional_info: null,
    descr: "При взрыве оболочка осколочной гранаты разлетается на множество поражающих элементов.",
    source: "ОКП"
},
{
    name: "Световая граната IV",
    lvl: 16,
    price: 24300,
    weight: "Л",
    special: "Взрыв (слепота на 1d8 раундов, 20 футов)",
    additional_info: null,
    descr: null,
    source: "ОКП"
},
{
    name: "Некрограната IV",
    lvl: 17,
    price: 72900,
    weight: "Л",
    special: "Взрыв (6d8 Х, некротическое, 20 футов)",
    additional_info: null,
    descr: "These grenades are crafted to resemble leering, pygmy-sized skulls. When a necro grenade detonates, it expels a shroud of chemical coolants from its exposed eyes and mouth. This freezing gas is laced with minor traces of negative energy, draining the living and healing undead caught in the area of effect.",
    source: "СП-03"
},
{
    name: "Осколочная граната VII",
    lvl: 18,
    price: 48400,
    weight: "Л",
    special: "Взрыв (16d6 Ко, 15 футов)",
    additional_info: null,
    descr: "При взрыве оболочка осколочной гранаты разлетается на множество поражающих элементов.",
    source: "ОКП"
},
{
    name: "Криограната IV",
    lvl: 18,
    price: 54100,
    weight: "Л",
    special: "Взрыв (6d8 Х, ошеломление на 1 раунд, 20 футов)",
    additional_info: null,
    descr: null,
    source: "ОКП"
},
{
    name: "Зажигательная граната VI",
    lvl: 18,
    price: 54300,
    weight: "Л",
    special: "Взрыв (12d6 О, горение 6d6, 15 футов)",
    additional_info: null,
    descr: "При взрыве этой гранаты выбрасывается облако высокотемпературной плазмы.",
    source: "ОКП"
},
{
    name: "Электрическая граната V",
    lvl: 20,
    price: 110000,
    weight: "Л",
    special: "Взрыв (9d12 Э, 15 футов)",
    additional_info: null,
    descr: "При ударе эта граната создаёт мощный электрический импульс.",
    source: "ОКП"
},
{
    name: "Осколочная граната VIII",
    lvl: 20,
    price: 132000,
    weight: "Л",
    special: "Взрыв (20d6 Ко, 15 футов)",
    additional_info: null,
    descr: "При взрыве оболочка осколочной гранаты разлетается на множество поражающих элементов.",
    source: "ОКП"
}
];