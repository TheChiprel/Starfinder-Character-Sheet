const ARMOR_UPGR_DATABASE = [ 
{
    name: "Жуткие трофеи",
    lvl: 1,
    price: 125,
    descr: "Культисты Пожирателя частенько укражают свю броню магическими обработанными трофеями, напоминающими им о самых значимых убийствах: черепами, осколками костей или панцирей поверженных врагов, осквернёнными симвоами религий, обломками оружия или окрававленными и рваными нашивками или знаками отличия.\nКогда вы носите броню с жуткими трофеями и вызываете у противника потрясение, он в дополнение к обычным эффектам получает от этого штраф -2 к проверкам урона.",
    slots: 1,
    armor_type: "Любая",
    weight: "-",
    source: "СП-02"
},
{
    name: "Армирование",
    lvl: 1,
    price: 150,
    descr: "When calculating your armor\’s hardness and Hit Points, treat it as if its item level were 5 higher.",
    slots: 1,
    armor_type: "Любая",
    weight: "-",
    source: "ОКП"
},
{
    name: "Инфракрасные сенсоры",
    lvl: 1,
    price: 200,
    descr: "Вы получаете ночное зрение на расстоянии 60 футов.",
    slots: 1,
    armor_type: "Любая",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Противорадиационный барьер",
    lvl: 1,
    price: 200,
    descr: "This device grants a +2 bonus to your initial saving throw against radiation in addition to any bonuses from your armor\’s environmental protection. This doesn\’t provide any bonus to saves against the secondary effects of radiation.",
    slots: 1,
    armor_type: "Любая",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Быстродоступная кобура",
    lvl: 1,
    price: 325,
    descr: "В этом легкодоступном отсеке можно хранить одноручное оружие весом не более лёгкого. В качестве быстрого действия вы можете включить это улучшение и поместить оружие себе в руку, как если бы вы его выхватили.",
    slots: 1,
    armor_type: "Любая",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Посадочные двигатели",
    lvl: 1,
    price: 800,
    descr: "Developed by kasathan engineers long ago to help them navigate the steep cliffs of their native Kasath, descent thrusters are miniature jets that slow your fall. You fall at a rate of only 60 feet per round, and you take no damage upon landing. You can trigger decent thrusters as part of an action when jumping down, or as a reaction if you fall.",
    slots: 1,
    armor_type: "Любая",
    weight: "Л",
    source: "МС"
},
{
    name: "Цепкие колючки",
    lvl: 1,
    price: 1500,
    descr: "This upgrade consists of chains and barbs that cover your armor. Frequently used by Kuthite warriors to enhance their fearsome appearance, this upgrade also snarls near misses in close combat. When an opponent attacks you with a melee weapon and misses, you gain a +2 circumstance bonus to attack rolls when attempting to disarm your opponent of the melee weapon used for that attack until the end of your next turn.",
    slots: 1,
    armor_type: "Любая",
    weight: "Л",
    source: "МС"
},
{
    name: "Автомат заряжания",
    lvl: 2,
    price: 750,
    descr: "This device attaches to powered armor and consists of a small robotic arm and a storage compartment that holds up to 2 bulk of ammunition and batteries. You can activate the automated loader as a move action to reload or recharge a weapon that\’s mounted to the powered armor (but not to replace the batteries of the powered armor itself). Abilities that let you reload faster than a move action don\’t apply to an automated loader.",
    slots: 1,
    armor_type: "Силовая",
    weight: "1",
    source: "ОКП"
},
{
    name: "Прыжковые двигатели",
    lvl: 2,
    price: 1000,
    descr: "Ёмкость: 20; Расход: 2 за действие.\nВключение прыжковых двигателей считается частью сопутствующего действия для перемещения и позволяет вам пролететь расстояние до 30 футов (средняя манёвренность) на высоте до 10 футов или взлететь строго вверх на высоту до 20 футов. В конце сопутствующего действия вы должны приземлиться.\nВы не можете взлететь с помощью прыжковых двигателей, если нагружены.\nДанное улучшение можно установить только на лёгкую или тяжёлую броню.",
    slots: 1,
    armor_type: "Лёгкая, тяжёлая",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Силовое поле, коричневое",
    lvl: 3,
    price: 1600,
    descr: "Ёмкость: 10; Временные ПЗ: 1; Быстрое исцеление: 1; Укрепление: 0%.\nВ качестве основного действия вы можете включить или отключить силовое поле брони. При включении устройство создаёт вокруг вас невидимое силовое поле (силовой эффект), защищая в том числе все предметы, которые вы держите в руках или надели. Силовое поле не пропускает твёрдые предметы и жидкости, но не мешает проникновению газов и света (включая лазерные лучи). Пока поле включено, вы можете дышать, но не можете есть или пить.\nПока силовое поле включено, оно даёт вам временные ПЗ в количестве, зависящем от мощности поля.\nСиловое поле обладает способностью быстрое исцеление, что позволяет ему восстанавливать определённое количество временных ПЗ (вплоть до максимума) каждый раунд в конце вашего хода. Если временные ПЗ силового поля снижаются до 0, оно отключается до конца вашего следующего хода, пока быстрое исцеление не восстановит часть его ПЗ. Ёмкость, количество ПЗ и величина быстрого исцеления зависят от цветового кода поля. Все силовые поля расходуют 1 заряд за раунд.\nБолее мощные силовые поля обладают свойством \’укрепление\’, с определённой вероятностью превращающим критический удар в обычный (наносящий обычный урон без каких-либо критических эффектов). Вероятность срабатывания укрепления проверяется до проверки урона критического удара. Если силовое поле отключено, это свойство не работает. На броню можно установить только одно силовое поле.",
    slots: 2,
    armor_type: "Любая",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Система выхода",
    lvl: 4,
    price: 1750,
    descr: "This body harness fits into a suit of powered armor or is built into the frame of heavy armor, allowing you to exit the armor as a move action instead of as a full action. Entering the armor is no faster with an exit pod.",
    slots: 1,
    armor_type: "Силовая, тяжёлая",
    weight: "2",
    source: "ОКП"
},
{
    name: "Стробоскопы, тип 1",
    lvl: 4,
    price: 2000,
    descr: "The crystals used at the core of this upgrade are harvested from a slow-moving, geode-like beast that hunts the dark side of Verces and stuns its prey with flashes of light. You can activate this upgrade as a move action to emit a strobe-like burst of radiance. All creatures other than you within 20 feet must succeed at a Reflex saving throw (DC = [12 + your Dexterity modifier]) or become blind for 1 round. A set of flashblinders recharges automatically after 1 minute.",
    slots: 1,
    armor_type: "Любая",
    weight: "1",
    source: "МС"
},
{
    name: "Резервный генератор",
    lvl: 4,
    price: 2100,
    descr: "You can connect charged electric items such as batteries to this miniature generator to recharge them. The electricity comes from the kinetic energy of your movement, which generates 1 charge every 10 minutes of movement. No more than one item can be plugged in at a time, and the generator doesn\’t produce charges when you\’re resting or otherwise stationary.",
    slots: 1,
    armor_type: "Любая",
    weight: "1",
    source: "ОКП"
},
{
    name: "Система наведения",
    lvl: 4,
    price: 2250,
    descr: "Компьютерная система наведения помогает целиться в условиях плохой видимости. Вы игнорируете плохую видимость при совершении атак. Это улучшение неэффективно в условиях отсутствия видимости.",
    slots: 1,
    armor_type: "Любая",
    weight: "-",
    source: "ОКП"
},
{
    name: "Грузоподъёмник",
    lvl: 5,
    price: 2250,
    descr: "This set of artificial muscles increases the amount of bulk you can carry while wearing your armor by 3.",
    slots: 1,
    armor_type: "Любая",
    weight: "-",
    source: "ОКП"
},
{
    name: "Электростатическое поле (тип 1)",
    lvl: 5,
    price: 3000,
    descr: "Устойчивость 5; Урон: 1d6 Э\nЭлектростатическое поле окружает вашу броню, обеспечивая устойчивость к электричеству и нанося урон электричеством всякому, кто коснётся вас или нанесёт урон оружием ближнего боя. Величина устойчивости и наносимого урона зависит от типа улучшения.",
    slots: 1,
    armor_type: "Любая",
    weight: "-",
    source: "ОКП"
},
{
    name: "Реактивный ранец",
    lvl: 5,
    price: 3100,
    descr: "Ёмкость: 40; Расход: 2 в раунд\nВы получаете скорость полёта 30 футов (средняя манёвренность). Вы можете летать в \’крейсерском режиме\’, расходуя всего 1 заряд в минуту, но при это вы считаетесь сбитым с цели и застигнутым врасплох. переключение между обычным и крейсерским режимом (и обратно) требует основного действия. Вы не можете взлетель с помощью реакивного ранца, если нагружены.\nДанное улучшение можно установить только на лёгкую или тяжёлую броню.",
    slots: 1,
    armor_type: "Лёгкая, тяжёлая",
    weight: "1",
    source: "ОКП"
},
{
    name: "Терморегулятор (Тип 1)",
    lvl: 5,
    price: 3600,
    descr: "Устойчивость 5\nЭто улучшение поддерживает комфортную температуру, защищая вас от жары и холода. Вы комфортно чувствуете себя в диапазоне температур от -45 до 77°C без необходимости проходить испытания Стойкости. Кроме того, броня даёт вам устойчивость к огню и холоду. Величина устойчивости зависит от типа терморегулятора.",
    slots: 1,
    armor_type: "Любая",
    weight: "-",
    source: "ОКП"
},
{
    name: "Фазовый щит",
    lvl: 6,
    price: 4325,
    descr: "You can activate this upgrade to generate a glowing, translucent blue shield on one of your arms that helps you block incoming attacks. Activating or deactivating the shield takes a move action. While the shield is active, you gain a +1 enhancement bonus to EAC. The phase shield interferes with your ability to use the arm it\’s installed on, so while the phase shield is active, you can hold an item in that hand but not use it or make attacks with it.",
    slots: 1,
    armor_type: "Силовая, тяжёлая",
    weight: "1",
    source: "ОКП"
},
{
    name: "Силовое поле, фиолетовое",
    lvl: 6,
    price: 4550,
    descr: "Ёмкость: 10; Временные ПЗ: 5; Быстрое исцеление: 2; Укрепление: 0.\nВ качестве основного действия вы можете включить или отключить силовое поле брони. При включении устройство создаёт вокруг вас невидимое силовое поле (силовой эффект), защищая в том числе все предметы, которые вы держите в руках или надели. Силовое поле не пропускает твёрдые предметы и жидкости, но не мешает проникновению газов и света (включая лазерные лучи). Пока поле включено, вы можете дышать, но не можете есть или пить.\nПока силовое поле включено, оно даёт вам временные ПЗ в количестве, зависящем от мощности поля.\nСиловое поле обладает способностью быстрое исцеление, что позволяет ему восстанавливать определённое количество временных ПЗ (вплоть до максимума) каждый раунд в конце вашего хода. Если временные ПЗ силового поля снижаются до 0, оно отключается до конца вашего следующего хода, пока быстрое исцеление не восстановит часть его ПЗ. Ёмкость, количество ПЗ и величина быстрого исцеления зависят от цветового кода поля. Все силовые поля расходуют 1 заряд за раунд.\nБолее мощные силовые поля обладают свойством \’укрепление\’, с определённой вероятностью превращающим критический удар в обычный (наносящий обычный урон без каких-либо критических эффектов). Вероятность срабатывания укрепления проверяется до проверки урона критического удара. Если силовое поле отключено, это свойство не работает. На броню можно установить только одно силовое поле.",
    slots: 2,
    armor_type: "Любая",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Фильтрующий дыхательный аппарат",
    lvl: 6,
    price: 4600,
    descr: "Этот усовершенствованный дыхательный аппарат дополняет систему жизнеобеспечения брони и позволяет сохранять воздух свежим, отфильтровывая обычные токсины и ядовитые газы. Броня, оснащённая этим улучшением, способна обеспечивать подачу свежего воздуха в течение 1 недели за каждый её уровень. Кроме этого вы получаете устойчивость к кислоте 5 и бонус +2 к испытаниям против яда и болезней.",
    slots: 1,
    armor_type: "Любая",
    weight: "1",
    source: "ОКП"
},
{
    name: "Залповый игломёт",
    lvl: 7,
    price: 6700,
    descr: "Eoxian corporations excel at technologies that use unliving materials, and the needle-sized self-replicating bone spurs in this upgrade are no exception. You can activate this upgrade as a standard action to launch microspurs in a 20-foot spread around you. All creatures in this area are affected by harrying fire. A microspur spray\’s charges replenish each day.",
    slots: 1,
    armor_type: "Силовая, тяжёлая",
    weight: "1",
    source: "МС"
},
{
    name: "Система шумоподавления",
    lvl: 7,
    price: 7150,
    descr: "This device muffles the incidental sounds you make, and sonic attacks lose power in your vicinity. You gain sonic resistance 5 and reduce your armor check penalty by 1 when making Stealth checks.",
    slots: 1,
    armor_type: "Любая",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Отражающее покрытие",
    lvl: 7,
    price: 7500,
    descr: "С этим улучшением ваша броня становится крайне скользкой. Вы получаете СУ 5/-. При проверках Акробатики для освобождения штраф за броню снижается на 2.",
    slots: 1,
    armor_type: null,
    weight: "1",
    source: "ОКП"
},
{
    name: "Контур ускорения",
    lvl: 8,
    price: 9250,
    descr: "Ёмкость: 10; Расход: 1 в раунд.\nВы можете включить контур ускорения в качестве быстрого действия, чтобы получить преимущества заклинания ускорение до тех пор, пока вы не отключите контур в качестве быстрого действия или пока в нём не закончатся заряды. Заряды контура ускорения полностью восстанавливаются ежедневно.\nДанное улучшение можно установить только на лёгкую или тяжёлую броню.",
    slots: 1,
    armor_type: "Лёгкая, тяжёлая",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Плащ внука",
    lvl: 8,
    price: 10000,
    descr: "This upgrade is imprinted upon the interior of the armor in the shape of a curled rat. A grandchild\’s cloak uses a combination of holographic fields and illusion magic to render you invisible for a short period of time. You can activate a grandchild\’s cloak as a move action, and its benefits last until you spend another move action to deactivate it, it runs out of charges, or if you make any kind of attack (as described in the invisibility spell), whichever comes first.\nA grandchild\’s cloak\’s charges replenish each day.",
    slots: 1,
    armor_type: "Лёгкая",
    weight: "Л",
    source: "МС"
},
{
    name: "Стробоскопы, тип 2",
    lvl: 8,
    price: 10000,
    descr: "The crystals used at the core of this upgrade are harvested from a slow-moving, geode-like beast that hunts the dark side of Verces and stuns its prey with flashes of light. You can activate this upgrade as a move action to emit a strobe-like burst of radiance. All creatures other than you within 20 feet must succeed at a Reflex saving throw (DC = [14 + your Dexterity modifier]) or become blind for 1 round. A set of flashblinders recharges automatically after 1 minute.",
    slots: 1,
    armor_type: "Любая",
    weight: "1",
    source: "МС"
},
{
    name: "Силовое поле, чёрное",
    lvl: 8,
    price: 10500,
    descr: "Ёмкость: 10; Временные ПЗ: 10; Быстрое исцеление: 3; Укрепление: 0%.\nВ качестве основного действия вы можете включить или отключить силовое поле брони. При включении устройство создаёт вокруг вас невидимое силовое поле (силовой эффект), защищая в том числе все предметы, которые вы держите в руках или надели. Силовое поле не пропускает твёрдые предметы и жидкости, но не мешает проникновению газов и света (включая лазерные лучи). Пока поле включено, вы можете дышать, но не можете есть или пить.\nПока силовое поле включено, оно даёт вам временные ПЗ в количестве, зависящем от мощности поля.\nСиловое поле обладает способностью быстрое исцеление, что позволяет ему восстанавливать определённое количество временных ПЗ (вплоть до максимума) каждый раунд в конце вашего хода. Если временные ПЗ силового поля снижаются до 0, оно отключается до конца вашего следующего хода, пока быстрое исцеление не восстановит часть его ПЗ. Ёмкость, количество ПЗ и величина быстрого исцеления зависят от цветового кода поля. Все силовые поля расходуют 1 заряд за раунд.\nБолее мощные силовые поля обладают свойством \’укрепление\’, с определённой вероятностью превращающим критический удар в обычный (наносящий обычный урон без каких-либо критических эффектов). Вероятность срабатывания укрепления проверяется до проверки урона критического удара. Если силовое поле отключено, это свойство не работает. На броню можно установить только одно силовое поле.",
    slots: 2,
    armor_type: "Любая",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Дымчатое поле",
    lvl: 9,
    price: 13000,
    descr: "Haze fields were developed on Akiton to mimic the thick haze that forms from the dust of the dry seabeds of that world. You can activate a haze field as a move action, and its benefits last until you spend another move action to deactivate it or it runs out of charges. While active, the field creates a visual haze centered on you. This has no impact on visibility at short range, but you take a –2 penalty to all attack rolls and Perception checks against targets 30 or more feet away, and creatures 30 or more feet away take the same penalties to attacks and Perception checks against you. A haze field\’s charges replenish each day.",
    slots: 1,
    armor_type: "Любая",
    weight: "-",
    source: "МС"
},
{
    name: "Электростатическое поле (тип 2)",
    lvl: 9,
    price: 13000,
    descr: "Устойчивость 10; Урон: 2d6 Э\nЭлектростатическое поле окружает вашу броню, обеспечивая устойчивость к электричеству и нанося урон электричеством всякому, кто коснётся вас или нанесёт урон оружием ближнего боя. Величина устойчивости и наносимого урона зависит от типа улучшения.",
    slots: 1,
    armor_type: "Любая",
    weight: "-",
    source: "ОКП"
},
{
    name: "Полётный ранец",
    lvl: 9,
    price: 13100,
    descr: "Ёмкость: 100; Расход: 2 в раунд.\nA forcepack grants you a fly speed of 60 feet (average maneuverability). You can use this for “cruising flight” at a usage of 1 charge per minute, but you are flat-footed and off-target while doing so. Changing from normal flight to cruising flight, or back, is a standard action. A forcepack can\’t lift you if you\’re encumbered.",
    slots: 1,
    armor_type: "Лёгкая, тяжёлая",
    weight: "1",
    source: "ОКП"
},
{
    name: "Силовое поле, белое",
    lvl: 10,
    price: 20000,
    descr: "Ёмкость: 20; Временные ПЗ: 14; Быстрое исцеление: 4; Укрепление: 0%.\nВ качестве основного действия вы можете включить или отключить силовое поле брони. При включении устройство создаёт вокруг вас невидимое силовое поле (силовой эффект), защищая в том числе все предметы, которые вы держите в руках или надели. Силовое поле не пропускает твёрдые предметы и жидкости, но не мешает проникновению газов и света (включая лазерные лучи). Пока поле включено, вы можете дышать, но не можете есть или пить.\nПока силовое поле включено, оно даёт вам временные ПЗ в количестве, зависящем от мощности поля.\nСиловое поле обладает способностью быстрое исцеление, что позволяет ему восстанавливать определённое количество временных ПЗ (вплоть до максимума) каждый раунд в конце вашего хода. Если временные ПЗ силового поля снижаются до 0, оно отключается до конца вашего следующего хода, пока быстрое исцеление не восстановит часть его ПЗ. Ёмкость, количество ПЗ и величина быстрого исцеления зависят от цветового кода поля. Все силовые поля расходуют 1 заряд за раунд.\nБолее мощные силовые поля обладают свойством \’укрепление\’, с определённой вероятностью превращающим критический удар в обычный (наносящий обычный урон без каких-либо критических эффектов). Вероятность срабатывания укрепления проверяется до проверки урона критического удара. Если силовое поле отключено, это свойство не работает. На броню можно установить только одно силовое поле.",
    slots: 2,
    armor_type: "Любая",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Электростатическое поле (тип 3)",
    lvl: 12,
    price: 35000,
    descr: "Устойчивость 15; Урон: 3d6 Э\nЭлектростатическое поле окружает вашу броню, обеспечивая устойчивость к электричеству и нанося урон электричеством всякому, кто коснётся вас или нанесёт урон оружием ближнего боя. Величина устойчивости и наносимого урона зависит от типа улучшения.",
    slots: 1,
    armor_type: "Любая",
    weight: "-",
    source: "ОКП"
},
{
    name: "Терморегулятор (Тип 2)",
    lvl: 12,
    price: 36250,
    descr: "Устойчивость 10\nЭто улучшение поддерживает комфортную температуру, защищая вас от жары и холода. Вы комфортно чувствуете себя в диапазоне температур от -45 до 77°C без необходимости проходить испытания Стойкости. Кроме того, броня даёт вам устойчивость к огню и холоду. Величина устойчивости зависит от типа терморегулятора.",
    slots: 1,
    armor_type: "Любая",
    weight: "-",
    source: "ОКП"
},
{
    name: "Стробоскопы, тип 3",
    lvl: 12,
    price: 38000,
    descr: "The crystals used at the core of this upgrade are harvested from a slow-moving, geode-like beast that hunts the dark side of Verces and stuns its prey with flashes of light. You can activate this upgrade as a move action to emit a strobe-like burst of radiance. All creatures other than you within 20 feet must succeed at a Reflex saving throw (DC = [16 + your Dexterity modifier]) or become blind for 1 round. A set of flashblinders recharges automatically after 1 minute.",
    slots: 1,
    armor_type: "Любая",
    weight: "1",
    source: "МС"
},
{
    name: "Силовое поле, серое",
    lvl: 12,
    price: 40000,
    descr: "Ёмкость: 20; Временные ПЗ: 20; Быстрое исцеление: 5; Укрепление: 0%.\nВ качестве основного действия вы можете включить или отключить силовое поле брони. При включении устройство создаёт вокруг вас невидимое силовое поле (силовой эффект), защищая в том числе все предметы, которые вы держите в руках или надели. Силовое поле не пропускает твёрдые предметы и жидкости, но не мешает проникновению газов и света (включая лазерные лучи). Пока поле включено, вы можете дышать, но не можете есть или пить.\nПока силовое поле включено, оно даёт вам временные ПЗ в количестве, зависящем от мощности поля.\nСиловое поле обладает способностью быстрое исцеление, что позволяет ему восстанавливать определённое количество временных ПЗ (вплоть до максимума) каждый раунд в конце вашего хода. Если временные ПЗ силового поля снижаются до 0, оно отключается до конца вашего следующего хода, пока быстрое исцеление не восстановит часть его ПЗ. Ёмкость, количество ПЗ и величина быстрого исцеления зависят от цветового кода поля. Все силовые поля расходуют 1 заряд за раунд.\nБолее мощные силовые поля обладают свойством \’укрепление\’, с определённой вероятностью превращающим критический удар в обычный (наносящий обычный урон без каких-либо критических эффектов). Вероятность срабатывания укрепления проверяется до проверки урона критического удара. Если силовое поле отключено, это свойство не работает. На броню можно установить только одно силовое поле.",
    slots: 2,
    armor_type: "Любая",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Отражатель заклинаний (тип 1)",
    lvl: 13,
    price: 47950,
    descr: "You can activate a spell reflector as a reaction when you\’re targeted by a spell. This does not affect spells that include an area you are in or affect you in other ways; it affects only those that target you specifically. The spell is reflected on its caster, as if the caster had been the target. The type of spell reflector determines the highest level of spell it can reflect. A spell reflector\’s charge replenishes each day.\nYou can reflect a spell of 4th level or lower.",
    slots: 1,
    armor_type: "Лёгкая, тяжёлая",
    weight: "1",
    source: "ОКП"
},
{
    name: "Титанический щит",
    lvl: 14,
    price: 75000,
    descr: "This emitter generates a wide, unidirectional energy shield that protects against incoming attacks. You can activate or deactivate the shield as a move action. When you activate it, choose one edge of your space. The shield extends along three continuous edges in a straight line centered on the chosen edge. The shield provides cover against attacks coming from the far side of the shield but not against attacks originating from the side you\’re on.\nIf you move, you can reposition your shield, moving it to a different edge of your space. You can also spend a move action to reposition the shield without leaving your space.",
    slots: 1,
    armor_type: "Силовая",
    weight: "2",
    source: "ОКП"
},
{
    name: "Силовое поле, зелёное",
    lvl: 14,
    price: 80000,
    descr: "Ёмкость: 20; Временные ПЗ: 24; Быстрое исцеление: 6; Укрепление: 20%.\nВ качестве основного действия вы можете включить или отключить силовое поле брони. При включении устройство создаёт вокруг вас невидимое силовое поле (силовой эффект), защищая в том числе все предметы, которые вы держите в руках или надели. Силовое поле не пропускает твёрдые предметы и жидкости, но не мешает проникновению газов и света (включая лазерные лучи). Пока поле включено, вы можете дышать, но не можете есть или пить.\nПока силовое поле включено, оно даёт вам временные ПЗ в количестве, зависящем от мощности поля.\nСиловое поле обладает способностью быстрое исцеление, что позволяет ему восстанавливать определённое количество временных ПЗ (вплоть до максимума) каждый раунд в конце вашего хода. Если временные ПЗ силового поля снижаются до 0, оно отключается до конца вашего следующего хода, пока быстрое исцеление не восстановит часть его ПЗ. Ёмкость, количество ПЗ и величина быстрого исцеления зависят от цветового кода поля. Все силовые поля расходуют 1 заряд за раунд.\nБолее мощные силовые поля обладают свойством \’укрепление\’, с определённой вероятностью превращающим критический удар в обычный (наносящий обычный урон без каких-либо критических эффектов). Вероятность срабатывания укрепления проверяется до проверки урона критического удара. Если силовое поле отключено, это свойство не работает. На броню можно установить только одно силовое поле.",
    slots: 2,
    armor_type: "Любая",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Плащ внука, великий",
    lvl: 15,
    price: 120000,
    descr: "The much rarer greater grandchild\’s cloak—which followers of Grandmother Rat stridently insist does not exist—functions as a standard grandchild\’s cloak, but it uses only 2 charges per round and its benefits do not end if you attack.\nA grandchild\’s cloak\’s charges replenish each day.",
    slots: 1,
    armor_type: "Лёгкая",
    weight: "Л",
    source: "МС"
},
{
    name: "Терморегулятор (Тип 3)",
    lvl: 15,
    price: 120000,
    descr: "Устойчивость 15\nЭто улучшение поддерживает комфортную температуру, защищая вас от жары и холода. Вы комфортно чувствуете себя в диапазоне температур от -45 до 77°C без необходимости проходить испытания Стойкости. Кроме того, броня даёт вам устойчивость к огню и холоду. Величина устойчивости зависит от типа терморегулятора.",
    slots: 1,
    armor_type: "Любая",
    weight: "-",
    source: "ОКП"
},
{
    name: "Силовое поле, красное",
    lvl: 16,
    price: 180000,
    descr: "Ёмкость: 40; Временные ПЗ: 30; Быстрое исцеление: 7; Укрепление: 40%.\nВ качестве основного действия вы можете включить или отключить силовое поле брони. При включении устройство создаёт вокруг вас невидимое силовое поле (силовой эффект), защищая в том числе все предметы, которые вы держите в руках или надели. Силовое поле не пропускает твёрдые предметы и жидкости, но не мешает проникновению газов и света (включая лазерные лучи). Пока поле включено, вы можете дышать, но не можете есть или пить.\nПока силовое поле включено, оно даёт вам временные ПЗ в количестве, зависящем от мощности поля.\nСиловое поле обладает способностью быстрое исцеление, что позволяет ему восстанавливать определённое количество временных ПЗ (вплоть до максимума) каждый раунд в конце вашего хода. Если временные ПЗ силового поля снижаются до 0, оно отключается до конца вашего следующего хода, пока быстрое исцеление не восстановит часть его ПЗ. Ёмкость, количество ПЗ и величина быстрого исцеления зависят от цветового кода поля. Все силовые поля расходуют 1 заряд за раунд.\nБолее мощные силовые поля обладают свойством \’укрепление\’, с определённой вероятностью превращающим критический удар в обычный (наносящий обычный урон без каких-либо критических эффектов). Вероятность срабатывания укрепления проверяется до проверки урона критического удара. Если силовое поле отключено, это свойство не работает. На броню можно установить только одно силовое поле.",
    slots: 2,
    armor_type: "Любая",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Стробоскопы, тип 4",
    lvl: 16,
    price: 180000,
    descr: "The crystals used at the core of this upgrade are harvested from a slow-moving, geode-like beast that hunts the dark side of Verces and stuns its prey with flashes of light. You can activate this upgrade as a move action to emit a strobe-like burst of radiance. All creatures other than you within 20 feet must succeed at a Reflex saving throw (DC = [18 + your Dexterity modifier]) or become blind for 1 round. A set of flashblinders recharges automatically after 1 minute.",
    slots: 1,
    armor_type: "Любая",
    weight: "1",
    source: "МС"
},
{
    name: "Силовое поле, синее",
    lvl: 17,
    price: 280000,
    descr: "Ёмкость: 40; Временные ПЗ: 35; Быстрое исцеление: 8; Укрепление: 60%.\nВ качестве основного действия вы можете включить или отключить силовое поле брони. При включении устройство создаёт вокруг вас невидимое силовое поле (силовой эффект), защищая в том числе все предметы, которые вы держите в руках или надели. Силовое поле не пропускает твёрдые предметы и жидкости, но не мешает проникновению газов и света (включая лазерные лучи). Пока поле включено, вы можете дышать, но не можете есть или пить.\nПока силовое поле включено, оно даёт вам временные ПЗ в количестве, зависящем от мощности поля.\nСиловое поле обладает способностью быстрое исцеление, что позволяет ему восстанавливать определённое количество временных ПЗ (вплоть до максимума) каждый раунд в конце вашего хода. Если временные ПЗ силового поля снижаются до 0, оно отключается до конца вашего следующего хода, пока быстрое исцеление не восстановит часть его ПЗ. Ёмкость, количество ПЗ и величина быстрого исцеления зависят от цветового кода поля. Все силовые поля расходуют 1 заряд за раунд.\nБолее мощные силовые поля обладают свойством \’укрепление\’, с определённой вероятностью превращающим критический удар в обычный (наносящий обычный урон без каких-либо критических эффектов). Вероятность срабатывания укрепления проверяется до проверки урона критического удара. Если силовое поле отключено, это свойство не работает. На броню можно установить только одно силовое поле.",
    slots: 2,
    armor_type: "Любая",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Отражатель заклинаний (тип 2)",
    lvl: 18,
    price: 360000,
    descr: "You can activate a spell reflector as a reaction when you\’re targeted by a spell. This does not affect spells that include an area you are in or affect you in other ways; it affects only those that target you specifically. The spell is reflected on its caster, as if the caster had been the target. The type of spell reflector determines the highest level of spell it can reflect. A spell reflector\’s charge replenishes each day.\nYou can reflect a spell of 6th level or lower.",
    slots: 1,
    armor_type: "Лёгкая, тяжёлая",
    weight: "1",
    source: "ОКП"
},
{
    name: "Силовое поле, оранжевое",
    lvl: 18,
    price: 400000,
    descr: "Ёмкость: 40; Временные ПЗ: 40; Быстрое исцеление: 9; Укрепление: 80%.\nВ качестве основного действия вы можете включить или отключить силовое поле брони. При включении устройство создаёт вокруг вас невидимое силовое поле (силовой эффект), защищая в том числе все предметы, которые вы держите в руках или надели. Силовое поле не пропускает твёрдые предметы и жидкости, но не мешает проникновению газов и света (включая лазерные лучи). Пока поле включено, вы можете дышать, но не можете есть или пить.\nПока силовое поле включено, оно даёт вам временные ПЗ в количестве, зависящем от мощности поля.\nСиловое поле обладает способностью быстрое исцеление, что позволяет ему восстанавливать определённое количество временных ПЗ (вплоть до максимума) каждый раунд в конце вашего хода. Если временные ПЗ силового поля снижаются до 0, оно отключается до конца вашего следующего хода, пока быстрое исцеление не восстановит часть его ПЗ. Ёмкость, количество ПЗ и величина быстрого исцеления зависят от цветового кода поля. Все силовые поля расходуют 1 заряд за раунд.\nБолее мощные силовые поля обладают свойством \’укрепление\’, с определённой вероятностью превращающим критический удар в обычный (наносящий обычный урон без каких-либо критических эффектов). Вероятность срабатывания укрепления проверяется до проверки урона критического удара. Если силовое поле отключено, это свойство не работает. На броню можно установить только одно силовое поле.",
    slots: 2,
    armor_type: "Любая",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Контур призрачного перемещения",
    lvl: 19,
    price: 590000,
    descr: "You can activate a ghostmarch unit as a swift action to gain the benefits of the ethereal jaunt spell until you spend another swift action to deactivate it or it runs out of charges. A ghostmarch unit\’s charges replenish each day.",
    slots: 1,
    armor_type: "Лёгкая",
    weight: "1",
    source: "МС"
},
{
    name: "Силовое поле, радужное",
    lvl: 20,
    price: 1000000,
    descr: "Ёмкость: 100; Временные ПЗ: 50; Быстрое исцеление: 10; Укрепление: 100%.\nВ качестве основного действия вы можете включить или отключить силовое поле брони. При включении устройство создаёт вокруг вас невидимое силовое поле (силовой эффект), защищая в том числе все предметы, которые вы держите в руках или надели. Силовое поле не пропускает твёрдые предметы и жидкости, но не мешает проникновению газов и света (включая лазерные лучи). Пока поле включено, вы можете дышать, но не можете есть или пить.\nПока силовое поле включено, оно даёт вам временные ПЗ в количестве, зависящем от мощности поля.\nСиловое поле обладает способностью быстрое исцеление, что позволяет ему восстанавливать определённое количество временных ПЗ (вплоть до максимума) каждый раунд в конце вашего хода. Если временные ПЗ силового поля снижаются до 0, оно отключается до конца вашего следующего хода, пока быстрое исцеление не восстановит часть его ПЗ. Ёмкость, количество ПЗ и величина быстрого исцеления зависят от цветового кода поля. Все силовые поля расходуют 1 заряд за раунд.\nБолее мощные силовые поля обладают свойством \’укрепление\’, с определённой вероятностью превращающим критический удар в обычный (наносящий обычный урон без каких-либо критических эффектов). Вероятность срабатывания укрепления проверяется до проверки урона критического удара. Если силовое поле отключено, это свойство не работает. На броню можно установить только одно силовое поле.",
    slots: 2,
    armor_type: "Любая",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Оружейные шипы",
    lvl: "Варьируется",
    price: "Варьируется",
    descr: "Покрытый зловещими шипами доспех – неотъемлимый атрибут любого культиса Пожирателя. Вы можете добавить простое одноручное оружие ближнего боя лёгкого или незначительного веса на свою броню в качестве оружейных шипов. Для установки улучшения необходимо заплатить 125% стоимости выбранного оружия. Для атаки при помощи оружейных щитов требуется свободная рука (чтобы насадить противника на шипы), если, конечно, вы не держите его в захвате или наоборот (в этом случае вы можете атаковать его шипами даже если все руки заняты). Кроме этого, вы можете совершать атаки оружейными шипами, даже если вас обездвижили, но только против обездвижившего вас существа.",
    slots: 1,
    armor_type: "Тяжёлая, силовая",
    weight: "Варьируется",
    source: "СП-02"
}
];