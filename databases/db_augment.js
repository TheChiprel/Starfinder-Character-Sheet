const AUGMENT_DATABASE = [ 
{
    name: "Жаберная оболочка",
    lvl: 1,
    price: 95,
    type: "Биоимплант",
    body_part: "Лёгкие",
    descr: "An external lining striated with oxygen-filtering nodules coats the outside of your lungs. If you breathe in water, it filters into the lining, where the nodules extract the oxygen and deposit it into your lungs. This lets you breathe underwater or in the air. You still exhale normally.",
    source: "ОКП"
},
{
    name: "Звероуст",
    lvl: 2,
    price: 500,
    type: "Биоимплант",
    body_part: "Горло",
    descr: "The soft purple fungus called wildwise attaches itself to your vocal cords and extends fine filaments into portions of your brain. It allows you to communicate in a general sense with animals and with magical beasts with an Intelligence score of 1 or 2. You can attempt Diplomacy checks to influence such creatures as well as understand in very vague terms information they try to convey to you. The information they give you usually consists of simple concepts such as “danger,” “food,” or “that way.”",
    source: "ОКП"
},
{
    name: "Ядовитое жало",
    lvl: 2,
    price: 625,
    type: "Биоимплант",
    body_part: "Кисть",
    descr: "You implant a retractable stinger and venom sac into your hand. You can extend this stinger as a swift action but only while you aren\’t holding anything in that hand. While extended, the venom spur is a one-handed basic melee weapon that deals 1d6 piercing damage and automatically injects venom into a struck target. On a failed save, the creature takes 2d6 damage immediately and must attempt a new Fortitude saving throw at the start of its turn each round to end the effect. Each time it fails this save, it takes an additional 2d6 damage. Effects such as remove affliction and antitoxin affect this venom as though it were a poison.\nOnce used, the venom sac doesn\’t refill until the next time you rest to regain Stamina Points. While it\’s empty, you can still attack with the stinger but can\’t envenomate your target.",
    source: "ОКП"
},
{
    name: "Драконья железа змеёныша",
    lvl: 2,
    price: 755,
    type: "Биоимплант",
    body_part: "Горло",
    descr: "You implant an arcanicus gland modified to function for a creature of your race at the back of your throat. You can trigger this gland as a standard action to expel a breath weapon in a 15- foot cone as an extraordinary ability. Choose the damage type when the organ is biocrafted, picking from the following list: acid, cold, electricity, or fire. You are not harmed by using your own breath weapon. Once you\’ve used your breath weapon, you can\’t use it again until you\’ve rested for 10 minutes to regain Stamina Points, though you can spend 1 Resolve Point at any point to recharge it immediately.\nA wyrmling dragon gland deals 3d6 damage. Targets in the area can attempt a Reflex save (DC = 10 + half your level + your Constitution modifier) to take only half damage.",
    source: "ОКП"
},
{
    name: "Присоски для лазания",
    lvl: 3,
    price: 1200,
    type: "Биоимплант",
    body_part: "Все ступни",
    descr: "The soles of your feet become covered in fleshy slats you can open and close, providing you a climb speed of 20 feet. You don\’t need to attempt Athletics checks to traverse a vertical or horizontal surface (even upside down). You don\’t benefit from climbing suckers unless you\’re barefoot or wearing custom clothing, and you can not be wearing more than light armor. Climbing suckers integrate into your natural feet and do not require you to replace your feet and legs. Climbing suckers can be installed into the feet of prosthetic legs.",
    source: "ОКП"
},
{
    name: "Адаптивные биоцепи",
    lvl: 3,
    price: "Разная",
    type: "Биоимплант",
    body_part: "Любая",
    descr: "You can duplicate the effects of cybernetics with biotech by using adaptive biochains—microscopic cells that can reform themselves into replacements for technology within the body of a living host. This replicates the effects of any cybernetic augmentation, but it costs an additional 10% due to the price of the biochains. Adaptive biochains can also be used to replace any existing cybernetic with a biotech version of the same device; doing so has the same price and time as introducing a new adaptive biochain.",
    source: "ОКП"
},
{
    name: "Многослойная барабанная перепонка",
    lvl: 4,
    price: 2150,
    type: "Биоимплант",
    body_part: "Уши",
    descr: "Многосдойная барабанная перепонка состоит из нескольких небольших мембран разных размеров, способных улавливать широкий диапазон звуков. Вы получаете бонус +2 (ситуативый) к проверкам Внимания, зависящим слуха.",
    source: "ОКП"
},
{
    name: "Око-процессор",
    lvl: 4,
    price: 2200,
    type: "Биоимплант",
    body_part: "Мозг",
    descr: "Этот биотехнологический предмет – крохотный компьютер, устанавливаемый в мозг и соединённый с технологическим плащом. Если обе части комплекта надеты и включены, носителя нельзя взять в тиски. Стоимость плаща входит в стоимость этой аугментации.",
    source: "ИА-01"
},
{
    name: "Кожа хамелеона",
    lvl: 6,
    price: 4050,
    type: "Биоимплант",
    body_part: "Кожа",
    descr: "This biotech modification replaces pigmentation cells in your skin. You can alter your skin to mimic the terrain or lighting conditions around you, giving you a +3 circumstance bonus to Stealth checks. You must be wearing custom clothing and no more than light armor to benefit from this biotech.",
    source: "ОКП"
},
{
    name: "Драконья железа, стандартная",
    lvl: 10,
    price: 19125,
    type: "Биоимплант",
    body_part: "Горло",
    descr: "You implant an arcanicus gland modified to function for a creature of your race at the back of your throat. You can trigger this gland as a standard action to expel a breath weapon in a 15- foot cone as an extraordinary ability. Choose the damage type when the organ is biocrafted, picking from the following list: acid, cold, electricity, or fire. You are not harmed by using your own breath weapon. Once you\’ve used your breath weapon, you can\’t use it again until you\’ve rested for 10 minutes to regain Stamina Points, though you can spend 1 Resolve Point at any point to recharge it immediately.\nA standard gland deals 9d6 damage, and a wyrm gland deals 18d6 damage. Targets in the area can attempt a Reflex save (DC = 10 + half your level + your Constitution modifier) to take only half damage.",
    source: "ОКП"
},
{
    name: "Драконья железа, великого змея",
    lvl: 16,
    price: 181500,
    type: "Биоимплант",
    body_part: "Горло",
    descr: "You implant an arcanicus gland modified to function for a creature of your race at the back of your throat. You can trigger this gland as a standard action to expel a breath weapon in a 15- foot cone as an extraordinary ability. Choose the damage type when the organ is biocrafted, picking from the following list: acid, cold, electricity, or fire. You are not harmed by using your own breath weapon. Once you\’ve used your breath weapon, you can\’t use it again until you\’ve rested for 10 minutes to regain Stamina Points, though you can spend 1 Resolve Point at any point to recharge it immediately.\nA wyrm gland deals 18d6 damage. Targets in the area can attempt a Reflex save (DC = 10 + half your level + your Constitution modifier) to take only half damage.",
    source: "ОКП"
},
{
    name: "Протез конечности, стандартный",
    lvl: 1,
    price: 100,
    type: "Киберимлант",
    body_part: "Рука и кисть, либо нога и ступня",
    descr: "This prosthesis replaces a missing limb. It restores functionality, but it is no more durable than and doesn\’t otherwise function differently than a normal limb for your species. A prosthetic limb can replace one you\’ve lost, or you can have a limb removed in order to replace it with a prosthetic.",
    source: "ОКП"
},
{
    name: "Голосовой модулятор",
    lvl: 1,
    price: 125,
    type: "Киберимлант",
    body_part: "Горло",
    descr: "A vocal modulator includes a series of miniature actuators built specifically to reshape your voice box, along with miniature hyper-resonant chambers that dynamically close or open. This allows you to change the pitch, timbre, and tone of your voice. You can more easily imitate accents or pronounce alien languages. When using Disguise to change your appearance, you gain a +2 circumstance bonus if the change in your voice also helps your disguise (at the GM\’s discretion).",
    source: "ОКП"
},
{
    name: "Голосовой усилитель",
    lvl: 1,
    price: 125,
    type: "Киберимлант",
    body_part: "Горло",
    descr: "A voice amplifier greatly increases the volume of your voice. You can switch a voice amplifier on or off as a swift action. When activated, a voice amplifier grants a +2 circumstance bonus to Intimidate checks and lowers the DCs of other creatures\’ Perception checks to hear you speaking by 5.",
    source: "ИА-01"
},
{
    name: "Конечность-тайник, стандартная",
    lvl: 1,
    price: 150,
    type: "Киберимлант",
    body_part: "Рука или нога",
    descr: "This compartment is hidden inside one of your limbs. You can conceal items inside and protect them with a simple passcode. The compartment can hold items of negligible bulk and items of light bulk that are either relatively small or can be folded or contracted to fit. A hideaway in a leg (in a human) can hold more than one in an arm, and the creature\’s size also adjusts the capacity. The GM decides what can fit.\nWhen the compartment is closed, the seam in your flesh is difficult to detect. You gain a +2 bonus to Sleight of Hand checks to conceal items in a hideaway limb. Though this compartment can usually foil a simple pat down, most security checkpoints include a scan that can detect such devices. Retrieving an item from a hideaway limb is a move action instead of a standard action.\nThis type of augmentation is for Small and Medium creatures only. Hideaway limbs for creatures larger than Medium typically cost more but can hold items of greater size or bulk.\nNothing stored in a hideaway limb is considered part of the cybernetic, and the stored item does not gain the cybernetic\’s immunity to attacks affecting technological devices.",
    source: "ОКП"
},
{
    name: "Система замкнутого дыхания",
    lvl: 1,
    price: 250,
    type: "Киберимлант",
    body_part: "Лёгкие",
    descr: "A respiration compounder consists of a series of modules that attach to your lungs, letting you survive longer without having to breathe. Treat your Constitution score as though it were doubled for the purpose of how long you can hold your breath. You also gain a +4 bonus to Constitution checks to continue holding your breath. This doesn\’t protect you from other dangers of an airless environment.\nThe compounder also filters your air, granting a +2 bonus to saving throws against inhaled poisons or other airborne toxins.",
    source: "ОКП"
},
{
    name: "Инфоразъём, стандартный",
    lvl: 2,
    price: 625,
    type: "Киберимлант",
    body_part: "Мозг",
    descr: "This cybernetic includes a programmable data port that allows you to access different types of computers and digital storage media. Any handheld computer can be inserted directly into the port, while larger systems need to be connected by an adapter cable. Having the system connected directly to your nervous system obviates the need for an interface to access data on a system. Actually operating the system requires you to use the Computers skill as usual. Some closed systems don\’t allow data access or require you to do some rewiring to connect with a datajack (usually an Engineering check).",
    source: "ОКП"
},
{
    name: "Сетчаточный рефлектор",
    lvl: 3,
    price: 1350,
    type: "Киберимлант",
    body_part: "Глаза",
    descr: "These sheets of reflective material can be implanted behind the retina, granting you low-light vision and a +1 enhancement bonus to vision-based Perception checks.",
    source: "ОКП"
},
{
    name: "Протез конечности с тайником",
    lvl: 3,
    price: 1450,
    type: "Киберимлант",
    body_part: "Рука и кисть, либо нога и ступня",
    descr: "This prosthesis replaces a missing limb. It restores functionality, but it is no more durable than and doesn\’t otherwise function differently than a normal limb for your species. A prosthetic limb can replace one you\’ve lost, or you can have a limb removed in order to replace it with a prosthetic.\nA storage prosthetic limb has a built-in concealed storage compartment, which functions as a hideaway limb.",
    source: "ОКП"
},
{
    name: "Импланты ночного видения, стандартные",
    lvl: 3,
    price: 1750,
    type: "Киберимлант",
    body_part: "Глаза",
    descr: "These replacement eyes allow you to see in total darkness, giving you darkvision with a range of 60 feet. They operate by sending out low-powered ultraviolet lasers that are then detected by receptors within the capacitors. When your capacitors are in operation, their lasers can be detected by creatures that have darkvision capacitors or can otherwise see ultraviolet light.",
    source: "ОКП"
},
{
    name: "Сервоприводы, упрощённые",
    lvl: 4,
    price: 1900,
    type: "Киберимлант",
    body_part: "Все ноги",
    descr: "You increase your land speed by replacing joints and tendons in your legs with high-performance cybernetics. A minimal speed suspension replaces only a few parts, increasing your land speed by 10 feet. You can install a speed suspension into prosthetic legs. Extra speed from these augmentations is treated as an enhancement bonus.",
    source: "ОКП"
},
{
    name: "Инфоразъём, высокоёмкий",
    lvl: 5,
    price: 2600,
    type: "Киберимлант",
    body_part: "Мозг",
    descr: "This cybernetic includes a programmable data port that allows you to access different types of computers and digital storage media. Any handheld computer can be inserted directly into the port, while larger systems need to be connected by an adapter cable. Having the system connected directly to your nervous system obviates the need for an interface to access data on a system. Actually operating the system requires you to use the Computers skill as usual. Some closed systems don\’t allow data access or require you to do some rewiring to connect with a datajack (usually an Engineering check).\n\nAdvanced datajacks make it easier to process and send information through the datajack. With a high-density datajack, you gain a +1 circumstance bonus to Computer checks when accessing a system via your datajack.",
    source: "ОКП"
},
{
    name: "Многоспектральный глазной имплант",
    lvl: 5,
    price: 2825,
    type: "Киберимлант",
    body_part: "Глаза",
    descr: "These cybernetic spheres replace your eyes entirely. You gain lowlight vision, as well as the ability to see infrared and ultraviolet light. These enhancements grant you a +2 bonus to vision-based Perception checks and allow you to notice some things people who can see only the red-violet light spectrum can\’t, including the lasers from darkvision capacitors. This doesn\’t grant you darkvision, but in darkness you can see significant sources of heat due to your infrared vision.",
    source: "ОКП"
},
{
    name: "Антитоксиновая мембрана",
    lvl: 5,
    price: 3000,
    type: "Киберимлант",
    body_part: "Кожа",
    descr: "An antitoxin membrane consists of a colony of nanobots that operate on the molecular level to counter certain toxins. An antitoxin membrane provides a +4 circumstance bonus to saving throws against contact and injury diseases and poisons.",
    source: "ИА-01"
},
{
    name: "Подкожная броня (тип 1)",
    lvl: 5,
    price: 3025,
    type: "Киберимлант",
    body_part: "Кожа",
    descr: "Вы укрепляете кожу композитными пластинами, позволяющимиотражать физические атаки. Вы получаете СУ, величина которого завиит от модели подкожной брони. Если у вас есть естественное СУ, величина которого не меньше СУ подкожной брони, её установка увеличит ваше естественное СУ на 1. Если у вас есть естественное СУ величиной меньше СУ подкожной брони, СУ подкожной брони увеличивается на 1.",
    source: "ОКП"
},
{
    name: "Конечность-тайник, быстродоступная",
    lvl: 5,
    price: 3050,
    type: "Киберимлант",
    body_part: "Рука или нога",
    descr: "This compartment is hidden inside one of your limbs. You can conceal items inside and protect them with a simple passcode. The compartment can hold items of negligible bulk and items of light bulk that are either relatively small or can be folded or contracted to fit. A hideaway in a leg (in a human) can hold more than one in an arm, and the creature\’s size also adjusts the capacity. The GM decides what can fit.\nWhen the compartment is closed, the seam in your flesh is difficult to detect. You gain a +2 bonus to Sleight of Hand checks to conceal items in a hideaway limb. Though this compartment can usually foil a simple pat down, most security checkpoints include a scan that can detect such devices. Retrieving an item from a hideaway limb is a move action instead of a standard action.\nThis type of augmentation is for Small and Medium creatures only. Hideaway limbs for creatures larger than Medium typically cost more but can hold items of greater size or bulk.\nThe compartment is integrated with a specific weapon. This allows you to draw the weapon as a swift action or as part of making an attack or full attack (similar to using the Quick Draw feat). A quickdraw hideaway limb works only if the limb is one you can normally aim and attack with, typically an arm. You can\’t, for example, put a quickdraw hideaway limb in your leg and have the weapon spring into your hand.\nYou can have a mount installed in a quickdraw limb that holds the weapon in place while you shoot. You still can\’t use your hand for other purposes, but you gain a +2 bonus to KAC against disarm attempts. The mount can\’t hold a weapon that requires more than one hand to operate. You can\’t hide other objects inside a quickdraw hideaway limb—there\’s room for only the weapon.\nNothing stored in a hideaway limb is considered part of the cybernetic, and the stored item does not gain the cybernetic\’s immunity to attacks affecting technological devices.",
    source: "ОКП"
},
{
    name: "Ускоритель сердечной деятельности",
    lvl: 6,
    price: 3850,
    type: "Киберимлант",
    body_part: "Сердце",
    descr: "This implant plugs directly into your heart and can be triggered to overclock the performance of your heart and circulatory system. When you run, charge, or take a move action to move, you can spend 1 Resolve Point to increase your speed (in the relevant mode of movement) by 20 feet for that action. This extra movement is treated as an enhancement bonus.\nAlternatively, you can spend 1 Resolve Point as a reaction when you attempt a Reflex saving throw to gain a +1 enhancement bonus to your roll.",
    source: "ОКП"
},
{
    name: "Коротковолновый трансивер",
    lvl: 7,
    price: 6500,
    type: "Киберимлант",
    body_part: "Мозг",
    descr: "A shortwave receiver-transmitter grants you the anacite\’s shortwave ability: \’An anacite can communicate wirelessly. This acts as telepathy, but only with other creatures with this ability or constructs with the technological subtype.\’",
    source: "ИА-01"
},
{
    name: "Подкожная броня (тип 2)",
    lvl: 7,
    price: 6950,
    type: "Киберимлант",
    body_part: "Кожа",
    descr: "Вы укрепляете кожу композитными пластинами, позволяющимиотражать физические атаки. Вы получаете СУ, величина которого завиит от модели подкожной брони. Если у вас есть естественное СУ, величина которого не меньше СУ подкожной брони, её установка увеличит ваше естественное СУ на 1. Если у вас есть естественное СУ величиной меньше СУ подкожной брони, СУ подкожной брони увеличивается на 1.",
    source: "ОКП"
},
{
    name: "Инфоразъём, высокоскоростной",
    lvl: 8,
    price: 8525,
    type: "Киберимлант",
    body_part: "Мозг",
    descr: "This cybernetic includes a programmable data port that allows you to access different types of computers and digital storage media. Any handheld computer can be inserted directly into the port, while larger systems need to be connected by an adapter cable. Having the system connected directly to your nervous system obviates the need for an interface to access data on a system. Actually operating the system requires you to use the Computers skill as usual. Some closed systems don\’t allow data access or require you to do some rewiring to connect with a datajack (usually an Engineering check).\nAdvanced datajacks make it easier to process and send information through the datajack. With a high-density datajack, you gain a +2 circumstance bonus to Computer checks when accessing a system via your datajack.",
    source: "ОКП"
},
{
    name: "Сервоприводы, стандартные",
    lvl: 8,
    price: 8800,
    type: "Киберимлант",
    body_part: "Все ноги",
    descr: "You increase your land speed by replacing joints and tendons in your legs with high-performance cybernetics. A standard suspension is more invasive and increases your land speed by 20 feet. You can install a speed suspension into prosthetic legs. Extra speed from these augmentations is treated as an enhancement bonus.",
    source: "ОКП"
},
{
    name: "Импланты ночного видения, улучшенные",
    lvl: 8,
    price: 9000,
    type: "Киберимлант",
    body_part: "Глаза",
    descr: "These replacement eyes allow you to see in total darkness, giving you darkvision with a range of 60 feet. They operate by sending out low-powered ultraviolet lasers that are then detected by receptors within the capacitors. When your capacitors are in operation, their lasers can be detected by creatures that have darkvision capacitors or can otherwise see ultraviolet light.\nAdvanced darkvision capacitors have the benefits of a wide-spectrum ocular implant. You gain lowlight vision, as well as the ability to see infrared and ultraviolet light. These enhancements grant you a +2 bonus to vision-based Perception checks and allow you to notice some things people who can see only the red-violet light spectrum can\’t, including the lasers from darkvision capacitors.",
    source: "ОКП"
},
{
    name: "Обескураживающие наниты",
    lvl: 8,
    price: 10000,
    type: "Киберимлант",
    body_part: "Кожа и горло",
    descr: "Аугментация покрывает кожу множеством радужных нанитов, которые кружатся на ней, создавая гипнотические узоры. Некоторые из нанитов оседают на голосовых связках, заставляя голос ритмично реверберировать. Для активации нанитов требуется основное действие, а для поддержания эффекта в каждом раунде после первого нужно использовать быстрое действие. Существо, которое после активации нанитов видит или слышит вас, должно пройти испытание Воли (СЛ = 14 + модификатор вашей ключевой характеристики) и при провале становится потрясено, пока может видеть или слышать вас и пока вы поддерживаете эффект. При успехе испытания существо становится невосприимчиво к эффекту нанитов на 24 часа. Вы можете запретить нанитам воздействовать на союзников. Если существо и видит, и слышитвас, оно получает штраф -2 к испытанию Воли. Это эффект с дескрипторами \’разум\’ и \’восприятие\’. Вы можете использоваь аугментацию 8 раундов в день (необязательно подряд).",
    source: "СП-05"
},
{
    name: "Подкожная броня (тип 3)",
    lvl: 9,
    price: 17975,
    type: "Киберимлант",
    body_part: "Кожа",
    descr: "Вы укрепляете кожу композитными пластинами, позволяющимиотражать физические атаки. Вы получаете СУ, величина которого завиит от модели подкожной брони. Если у вас есть естественное СУ, величина которого не меньше СУ подкожной брони, её установка увеличит ваше естественное СУ на 1. Если у вас есть естественное СУ величиной меньше СУ подкожной брони, СУ подкожной брони увеличивается на 1.",
    source: "ОКП"
},
{
    name: "Кибернетическая рука, одна",
    lvl: 11,
    price: 24750,
    type: "Киберимлант",
    body_part: "Позвоночник",
    descr: "Made of ultralight materials, this fully cybernetic arm fuses to your spinal column, exoskeleton, or equivalent body structure and functions as a full arm. You can hold an additional hand\’s worth of equipment. This lets you have more items at the ready, but it doesn\’t increase the number of attacks you can make in combat. You must have a Strength score of 12 to use a cybernetic arm effectively.",
    source: "ОКП"
},
{
    name: "Сервоприводы, полные",
    lvl: 12,
    price: 32900,
    type: "Киберимлант",
    body_part: "Все ноги",
    descr: "You increase your land speed by replacing joints and tendons in your legs with high-performance cybernetics. Replacing all your leg joints and tendons with a complete speed suspension increases your land speed by 30 feet. You can install a speed suspension into prosthetic legs. Extra speed from these augmentations is treated as an enhancement bonus.",
    source: "ОКП"
},
{
    name: "Подкожная броня (тип 4)",
    lvl: 12,
    price: 48850,
    type: "Киберимлант",
    body_part: "Кожа",
    descr: "Вы укрепляете кожу композитными пластинами, позволяющимиотражать физические атаки. Вы получаете СУ, величина которого завиит от модели подкожной брони. Если у вас есть естественное СУ, величина которого не меньше СУ подкожной брони, её установка увеличит ваше естественное СУ на 1. Если у вас есть естественное СУ величиной меньше СУ подкожной брони, СУ подкожной брони увеличивается на 1.",
    source: "ОКП"
},
{
    name: "Импланты ночного видения большой дальности",
    lvl: 13,
    price: 48950,
    type: "Киберимлант",
    body_part: "Глаза",
    descr: "These replacement eyes allow you to see in total darkness, giving you darkvision with a range of 120 feet. They operate by sending out low-powered ultraviolet lasers that are then detected by receptors within the capacitors. When your capacitors are in operation, their lasers can be detected by creatures that have darkvision capacitors or can otherwise see ultraviolet light.\nLong-range darkvision capacitors have the benefits of a wide-spectrum ocular implant. You gain lowlight vision, as well as the ability to see infrared and ultraviolet light. These enhancements grant you a +2 bonus to vision-based Perception checks and allow you to notice some things people who can see only the red-violet light spectrum can\’t, including the lasers from darkvision capacitors.",
    source: "ОКП"
},
{
    name: "Кибернетическая рука, пара",
    lvl: 14,
    price: 70150,
    type: "Киберимлант",
    body_part: "Позвоночник",
    descr: "Made of ultralight materials, this fully cybernetic arm fuses to your spinal column, exoskeleton, or equivalent body structure and functions as a full arm. Dual cybernetic arms consist of a pair of arms, one on each side of your body, and let you hold two additional hands\’ worth of equipment. This lets you have more items at the ready, but it doesn\’t increase the number of attacks you can make in combat. You must have a Strength score of 14 to use a dual cybernetic arm effectively.",
    source: "ОКП"
},
{
    name: "Мультикисть",
    lvl: 14,
    price: 71000,
    type: "Киберимлант",
    body_part: "Кисть",
    descr: "You replace your entire hand with a hand made of reprogrammable microscopic adamantine prisms. With either a mental command or a programmable interface built into the hand, you can reconfigure your hand into the shape of various tools. The hand can contain programming for nine different tools, in addition to a configuration for a normal hand for your species. As a move action, you can switch the setting, causing the adamantine pieces to realign into the shape of the chosen tool. The tool has all the flexibility of the normal tool (or of a hand, if set to that).\nProgramming a new tool into the polyhand takes 10 minutes, and you must choose either to fill an empty slot or to replace a programmed tool. The tool replicated must be 8th level or lower. The polyhand can replicate the moving parts of a tool, but you must supply any fuel or batteries needed for the tool to function. The tool cannot produce substances, and since it\’s not very conductive (important so as to avoid shocking the user), it can\’t serve as a power conduit or data transmission line. The GM has final say in deciding which tools you can duplicate. The tools within engineering kits and similar kits can be duplicated, subject to the restrictions above.\nYou can\’t replace the hand setting based on your biology, which is required for the polyhand to function properly. You can add a hand corresponding to another species in any slot that isn\’t reserved; for instance, a human could program her polyhand to replicate a shirren hand. This can\’t duplicate features of a unique individual, such as thumbprints. You can install a polyhand into a prosthetic limb that replaces an arm as if the prosthetic were a natural arm.\nThe adamantine construction makes the polyhand extremely durable. This doesn\’t change the amount of unarmed strike damage, no matter the form your polyhand is in. The polyhand can\’t maintain structural integrity if extended too far, so it can\’t assume a form more than one and a half feet long in any dimension. Consequently, it can\’t extend your reach.",
    source: "ОКП"
},
{
    name: "Подкожная броня (тип 5)",
    lvl: 14,
    price: 105000,
    type: "Киберимлант",
    body_part: "Кожа",
    descr: "Вы укрепляете кожу композитными пластинами, позволяющимиотражать физические атаки. Вы получаете СУ, величина которого завиит от модели подкожной брони. Если у вас есть естественное СУ, величина которого не меньше СУ подкожной брони, её установка увеличит ваше естественное СУ на 1. Если у вас есть естественное СУ величиной меньше СУ подкожной брони, СУ подкожной брони увеличивается на 1.",
    source: "ОКП"
},
{
    name: "Подкожная броня (тип 6)",
    lvl: 16,
    price: 163500,
    type: "Киберимлант",
    body_part: "Кожа",
    descr: "Вы укрепляете кожу композитными пластинами, позволяющимиотражать физические атаки. Вы получаете СУ, величина которого завиит от модели подкожной брони. Если у вас есть естественное СУ, величина которого не меньше СУ подкожной брони, её установка увеличит ваше естественное СУ на 1. Если у вас есть естественное СУ величиной меньше СУ подкожной брони, СУ подкожной брони увеличивается на 1.",
    source: "ОКП"
},
{
    name: "Подкожная броня (тип 7)",
    lvl: 19,
    price: 542000,
    type: "Киберимлант",
    body_part: "Кожа",
    descr: "Вы укрепляете кожу композитными пластинами, позволяющимиотражать физические атаки. Вы получаете СУ, величина которого завиит от модели подкожной брони. Если у вас есть естественное СУ, величина которого не меньше СУ подкожной брони, её установка увеличит ваше естественное СУ на 1. Если у вас есть естественное СУ величиной меньше СУ подкожной брони, СУ подкожной брони увеличивается на 1.",
    source: "ОКП"
},
{
    name: "Подошвы прыткости",
    lvl: 4,
    price: 2000,
    type: "Магитехническая",
    body_part: "Ступни",
    descr: "A nimble soles augmentation places sets of miniature metal rings that hold the essence of the Elemental Plane of Air on your feet. The rings grant you a +2 enhancement bonus to Acrobatics checks to fly and tumble. In addition, once per day as a swift action, you can overcharge the rings to increase this bonus to +4 for 1 minute.",
    source: "СП-08"
},
{
    name: "Резонирующая гортань, стандартная",
    lvl: 6,
    price: 4400,
    type: "Магитехническая",
    body_part: "Горло",
    descr: "The resonant larynx augmentation is a small resonating crystal in your throat that can amplify your voice to deafening levels. As a standard action, you can activate the resonant larynx to unleash an ear-piercing shriek in a 30-foot cone-shaped spread that doesn\’t harm you. Each creature in the area must attempt a Fortitude saving throw (DC = 10 + half your level + your Constitution modifier). On a failure, a creature takes 5d6 sonic damage and is deafened for 2d4 rounds. If a creature succeeds at the saving throw, it takes half the damage and is deafened for only 1 round. Once you have used your resonant larynx, you can\’t use it again until you\’ve taken a 10-minute rest that would allow you to regain Stamina Points. However, you can spend 1 Resolve Point at any time to recharge the augmentation immediately.",
    source: "СП-08"
},
{
    name: "Резонирующая гортань, улучшенная",
    lvl: 11,
    price: 25500,
    type: "Магитехническая",
    body_part: "Горло",
    descr: "The resonant larynx augmentation is a small resonating crystal in your throat that can amplify your voice to deafening levels. As a standard action, you can activate the resonant larynx to unleash an ear-piercing shriek in a 30-foot cone-shaped spread that doesn\’t harm you. Each creature in the area must attempt a Fortitude saving throw (DC = 10 + half your level + your Constitution modifier). On a failure, a creature takes 10d6 sonic damage and is deafened for 2d4 rounds. If a creature succeeds at the saving throw, it takes half the damage and is deafened for only 1 round. Once you have used your resonant larynx, you can\’t use it again until you\’ve taken a 10-minute rest that would allow you to regain Stamina Points. However, you can spend 1 Resolve Point at any time to recharge the augmentation immediately.",
    source: "СП-08"
},
{
    name: "Вечный глаз",
    lvl: 14,
    price: 46000,
    type: "Магитехническая",
    body_part: "Глаз",
    descr: "An aeon eye replaces one of your eyes with a specialized aeon stone connected to your ocular nerves. As a move action, you can mentally activate or deactivate this augmentation, which grants you sense through (vision) with a range of 60 feet. While the augmentation is active, you gain no benefit from other special visual senses, and you can\’t see anything beyond the augmentation\’s range.",
    source: "СП-08"
},
{
    name: "Вечная длань",
    lvl: 16,
    price: 200000,
    type: "Магитехническая",
    body_part: "Кисть",
    descr: "An aeon gage not only functions as a polyhand, but it also has six sockets in which aeon stones can be slotted. You gain the benefit of each aeon stone slotted in your aeon gage as if the stone orbited you. If all six sockets contain aeon stones, you can also cast one or more of the spells listed below as spell-like abilities. Total the item levels of the aeon stones slotted into the aeon gage to determine the spells you have access to. While you have access to a spell, you also have access to any spell from a lower level range, as follows: 6–30, caustic conversion; 31-60, arcing surge; 61–90, corrosive haze; 91–120, heat leech. The aeon gage has a number of charges per day equal to twice the highest level of spell it provides as a spell-like ability. Using a spell-like ability from the gage consumes a number of charges equal to that spell\’s level. The caster level for these spells is 16th.",
    source: "СП-08"
},
{
    name: "Голос вампира (тип 1)",
    lvl: 1,
    price: 200,
    type: "Некротрансплант",
    body_part: "Горло",
    descr: "A vampire voice necrograft attaches to your vocal cords, granting a supernaturally threatening tone. While most recipients of vampire voices are convinced their necrografts came from vampire spawn, creators of these undead augmentations never promise any such lofty origins.\nA vampire voice grants an enhancement bonus to Intimidate checks equal to the necrograft\’s mark. You can also use Intimidate to bully a creature without sharing a language. If you succeed at the check, you can convey a single simple request along with the bullying (such as “go away” or “don\’t hurt him”), though specific or complex requests can\’t be made without sharing a language. Once a creature has been the target of a bullying attempt by a recipient with a vampire voice, it can\’t be targeted by this ability from the same recipient again for 24 hours.",
    source: "СП-03"
},
{
    name: "Железы упыря (тип 1)",
    lvl: 1,
    price: 200,
    type: "Некротрансплант",
    body_part: "Кожа",
    descr: "Ghoul glands are a series of hundreds of tiny undead sweat glands installed just under the surface of your skin, replacing many of your natural sweat glands. The glands produce their own loathsome chemicals, but they also pull energy from your body and mind and use it to create a staggering or paralyzing effect on foes. As a standard action a number of times per day equal to the necrograft\’s mark, you can activate the glands and attempt to touch a foe (doing so requires a successful melee attack roll against the target\’s KAC). The target must succeed at a Fortitude saving throw or be staggered.",
    source: "СП-03"
},
{
    name: "Костяное лезвие (тип 1)",
    lvl: 1,
    price: 200,
    type: "Некротрансплант",
    body_part: "Рука",
    descr: "Bone blades are weapons built into undead arms that are then grafted onto their recipients. The blade can be retracted into the limb (making it impossible to notice without a careful inspection, scan, spell, or similar ability) or extended from the wrist for combat. Extending or retracting a bone blade is a swift action, and you can\’t use the hand of the associated arm to hold anything or perform fine manipulation when the blade is extended. A bone blade cannot be disarmed, but it can be sundered. When you regain Hit Points (whether through first aid, magic, or natural healing), the blade regains the same number of Hit Points. If destroyed, a bone blade regrows in 24 hours.\nStandard bone blades are one-handed simple melee weapons with the operative weapon special property. It is possible to have a more complex heavy bone blade installed, which changes the bone blade into a one-handed advanced melee weapon. These heavy bone blades are not operative weapons, but they deal more damage. There is no difference in cost between standard and heavy bone blades, but the decision between them must be made when the bone blade is installed and cannot be changed.\nУрон: Стандартное – 1d4; Тяжёлое – 2d4.\nКритический эффект: Ошеломление.",
    source: "СП-03"
},
{
    name: "Могильный ветер (тип 1)",
    lvl: 1,
    price: 200,
    type: "Некротрансплант",
    body_part: "Лёгкие",
    descr: "A grave wind necrograft replaces your lungs with black, undead lungs that can still pump air and oxygenate blood, but they are also able to exhale a diseased miasma. As a standard action a number of times per day equal to the necrograft\’s mark, you can expose an adjacent creature to a necromantic disease. The disease inflicted depends on the model of the grave wind, as indicated in the Grave Wind table above.\nThese necromantic diseases act as the diseases of the same name, except for the following. The save DC is determined by the necrograft and its recipient. No wound or actual transfer of air is necessary for the disease to affect a target; even someone in armor with its environmental seals active can be exposed. A creature infected with such a disease is not a carrier, so it can\’t pass the disease on to other victims. Creatures immune to death effects are immune to these diseases, and any bonus a creature has to saving throws against death effects applies to saves against these diseases. The diseases don\’t count as death effects for other purposes, such as raise dead.\nБолезнь: Заражение крови.",
    source: "СП-03"
},
{
    name: "Призрачные очи (тип 1)",
    lvl: 1,
    price: 200,
    type: "Некротрансплант",
    body_part: "Глаза",
    descr: "Wraith motes replace your eyes with glowing red motes of fiery-red light which smolder and produce thin trails of white smoke. Wraith motes allow you to retain all your natural vision abilities, but they can also augment your vision for a number of minutes per day equal to the necrograft\’s mark. They can be activated as a swift action, or they can be activated as a reaction whenever you attempt a Perception check. They can be deactivated as a swift action. The wraith motes\’ duration need not be used all at once, but it must be used in 1-minute increments.\nThe vision granted by the wraith motes varies based on the model as follows. Higher-level models can be used to grant the vision options of a lower-level version, but only a single benefit can be gained at a time. Mk 1 wraith motes grant low-light vision.",
    source: "СП-03"
},
{
    name: "Теневые нервы (тип 1)",
    lvl: 1,
    price: 200,
    type: "Некротрансплант",
    body_part: "Позвоночник",
    descr: "Shadow nerves are long strands of partially incorporeal undead nerve fibers that have strong connections to the Shadow Plane, allowing you to navigate a path that exists partially in the Material Plane and partially in the Shadow Plane. A number of times per day equal to the necrograft\’s mark, you can take a guarded step of 10 feet, rather than the usual 5-foot guarded step, as long as you are not in an area of bright light.",
    source: "СП-03"
},
{
    name: "Чёрное сердце (тип 1)",
    lvl: 1,
    price: 200,
    type: "Некротрансплант",
    body_part: "Сердце или лёгкие",
    descr: "Despite its name, a black heart can augment any major circulatory organ that helps sustain life in a living creature, though it most commonly augments a heart. A black heart is a strip of necromancy-infused undead flesh that turns whatever organ it is attached to a deep shade of ebony.\nYou gain the benefits of the environmental protections of armor, which last for a number of days equal to double the necrograft\’s item level. A black heart automatically recharges 1 hour of this duration for each hour this ability is not in use (up to its normal maximum). Additionally, you gain an enhancement bonus to saving throws against death effects, disease, mind-affecting effects, paralysis, poison, sleep effects, and stunning effects equal to the necrograft\’s mark, unless the effect specifies it functions against undead.",
    source: "СП-03"
},
{
    name: "Голос вампира (тип 2)",
    lvl: 6,
    price: 4000,
    type: "Некротрансплант",
    body_part: "Горло",
    descr: "A vampire voice necrograft attaches to your vocal cords, granting a supernaturally threatening tone. While most recipients of vampire voices are convinced their necrografts came from vampire spawn, creators of these undead augmentations never promise any such lofty origins.\nA vampire voice grants an enhancement bonus to Intimidate checks equal to the necrograft\’s mark. You can also use Intimidate to bully a creature without sharing a language. If you succeed at the check, you can convey a single simple request along with the bullying (such as “go away” or “don\’t hurt him”), though specific or complex requests can\’t be made without sharing a language. Once a creature has been the target of a bullying attempt by a recipient with a vampire voice, it can\’t be targeted by this ability from the same recipient again for 24 hours.",
    source: "СП-03"
},
{
    name: "Железы упыря (тип 2)",
    lvl: 6,
    price: 4000,
    type: "Некротрансплант",
    body_part: "Кожа",
    descr: "Ghoul glands are a series of hundreds of tiny undead sweat glands installed just under the surface of your skin, replacing many of your natural sweat glands. The glands produce their own loathsome chemicals, but they also pull energy from your body and mind and use it to create a staggering or paralyzing effect on foes. As a standard action a number of times per day equal to the necrograft\’s mark, you can activate the glands and attempt to touch a foe (doing so requires a successful melee attack roll against the target\’s KAC). The target must succeed at a Fortitude saving throw or be staggered.",
    source: "СП-03"
},
{
    name: "Костяное лезвие (тип 2)",
    lvl: 6,
    price: 4000,
    type: "Некротрансплант",
    body_part: "Рука",
    descr: "Bone blades are weapons built into undead arms that are then grafted onto their recipients. The blade can be retracted into the limb (making it impossible to notice without a careful inspection, scan, spell, or similar ability) or extended from the wrist for combat. Extending or retracting a bone blade is a swift action, and you can\’t use the hand of the associated arm to hold anything or perform fine manipulation when the blade is extended. A bone blade cannot be disarmed, but it can be sundered. When you regain Hit Points (whether through first aid, magic, or natural healing), the blade regains the same number of Hit Points. If destroyed, a bone blade regrows in 24 hours.\nStandard bone blades are one-handed simple melee weapons with the operative weapon special property. It is possible to have a more complex heavy bone blade installed, which changes the bone blade into a one-handed advanced melee weapon. These heavy bone blades are not operative weapons, but they deal more damage. There is no difference in cost between standard and heavy bone blades, but the decision between them must be made when the bone blade is installed and cannot be changed.\nУрон: Стандартное – 1d8; Тяжёлое – 2d8.\nКритический эффект: Ошеломление.",
    source: "СП-03"
},
{
    name: "Могильный ветер (тип 2)",
    lvl: 6,
    price: 4000,
    type: "Некротрансплант",
    body_part: "Лёгкие",
    descr: "A grave wind necrograft replaces your lungs with black, undead lungs that can still pump air and oxygenate blood, but they are also able to exhale a diseased miasma. As a standard action a number of times per day equal to the necrograft\’s mark, you can expose an adjacent creature to a necromantic disease. The disease inflicted depends on the model of the grave wind, as indicated in the Grave Wind table above.\nThese necromantic diseases act as the diseases of the same name, except for the following. The save DC is determined by the necrograft and its recipient. No wound or actual transfer of air is necessary for the disease to affect a target; even someone in armor with its environmental seals active can be exposed. A creature infected with such a disease is not a carrier, so it can\’t pass the disease on to other victims. Creatures immune to death effects are immune to these diseases, and any bonus a creature has to saving throws against death effects applies to saves against these diseases. The diseases don\’t count as death effects for other purposes, such as raise dead.\nБолезнь: Горячечный кашель.",
    source: "СП-03"
},
{
    name: "Призрачные очи (тип 2)",
    lvl: 6,
    price: 4000,
    type: "Некротрансплант",
    body_part: "Глаза",
    descr: "Wraith motes replace your eyes with glowing red motes of fiery-red light which smolder and produce thin trails of white smoke. Wraith motes allow you to retain all your natural vision abilities, but they can also augment your vision for a number of minutes per day equal to the necrograft\’s mark. They can be activated as a swift action, or they can be activated as a reaction whenever you attempt a Perception check. They can be deactivated as a swift action. The wraith motes\’ duration need not be used all at once, but it must be used in 1-minute increments.\nThe vision granted by the wraith motes varies based on the model as follows. Higher-level models can be used to grant the vision options of a lower-level version, but only a single benefit can be gained at a time. Mk 1 wraith motes grant low-light vision. Mk 2 wraith motes grant darkvision with a range of 60 feet.",
    source: "СП-03"
},
{
    name: "Теневые нервы (тип 2)",
    lvl: 6,
    price: 4000,
    type: "Некротрансплант",
    body_part: "Позвоночник",
    descr: "Shadow nerves are long strands of partially incorporeal undead nerve fibers that have strong connections to the Shadow Plane, allowing you to navigate a path that exists partially in the Material Plane and partially in the Shadow Plane. A number of times per day equal to the necrograft\’s mark, you can take a guarded step of 10 feet, rather than the usual 5-foot guarded step, as long as you are not in an area of bright light.",
    source: "СП-03"
},
{
    name: "Чёрное сердце (тип 2)",
    lvl: 6,
    price: 4000,
    type: "Некротрансплант",
    body_part: "Сердце или лёгкие",
    descr: "Despite its name, a black heart can augment any major circulatory organ that helps sustain life in a living creature, though it most commonly augments a heart. A black heart is a strip of necromancy-infused undead flesh that turns whatever organ it is attached to a deep shade of ebony.\nYou gain the benefits of the environmental protections of armor, which last for a number of days equal to double the necrograft\’s item level. A black heart automatically recharges 1 hour of this duration for each hour this ability is not in use (up to its normal maximum). Additionally, you gain an enhancement bonus to saving throws against death effects, disease, mind-affecting effects, paralysis, poison, sleep effects, and stunning effects equal to the necrograft\’s mark, unless the effect specifies it functions against undead.",
    source: "СП-03"
},
{
    name: "Голос вампира (тип 3)",
    lvl: 12,
    price: 30000,
    type: "Некротрансплант",
    body_part: "Горло",
    descr: "A vampire voice necrograft attaches to your vocal cords, granting a supernaturally threatening tone. While most recipients of vampire voices are convinced their necrografts came from vampire spawn, creators of these undead augmentations never promise any such lofty origins.\nA vampire voice grants an enhancement bonus to Intimidate checks equal to the necrograft\’s mark. You can also use Intimidate to bully a creature without sharing a language. If you succeed at the check, you can convey a single simple request along with the bullying (such as “go away” or “don\’t hurt him”), though specific or complex requests can\’t be made without sharing a language. Once a creature has been the target of a bullying attempt by a recipient with a vampire voice, it can\’t be targeted by this ability from the same recipient again for 24 hours.",
    source: "СП-03"
},
{
    name: "Железы упыря (тип 3)",
    lvl: 12,
    price: 30000,
    type: "Некротрансплант",
    body_part: "Кожа",
    descr: "Ghoul glands are a series of hundreds of tiny undead sweat glands installed just under the surface of your skin, replacing many of your natural sweat glands. The glands produce their own loathsome chemicals, but they also pull energy from your body and mind and use it to create a staggering or paralyzing effect on foes. As a standard action a number of times per day equal to the necrograft\’s mark, you can activate the glands and attempt to touch a foe (doing so requires a successful melee attack roll against the target\’s KAC). The target must succeed at a Fortitude saving throw or be staggered.",
    source: "СП-03"
},
{
    name: "Костяное лезвие (тип 3)",
    lvl: 12,
    price: 30000,
    type: "Некротрансплант",
    body_part: "Рука",
    descr: "Bone blades are weapons built into undead arms that are then grafted onto their recipients. The blade can be retracted into the limb (making it impossible to notice without a careful inspection, scan, spell, or similar ability) or extended from the wrist for combat. Extending or retracting a bone blade is a swift action, and you can\’t use the hand of the associated arm to hold anything or perform fine manipulation when the blade is extended. A bone blade cannot be disarmed, but it can be sundered. When you regain Hit Points (whether through first aid, magic, or natural healing), the blade regains the same number of Hit Points. If destroyed, a bone blade regrows in 24 hours.\nStandard bone blades are one-handed simple melee weapons with the operative weapon special property. It is possible to have a more complex heavy bone blade installed, which changes the bone blade into a one-handed advanced melee weapon. These heavy bone blades are not operative weapons, but they deal more damage. There is no difference in cost between standard and heavy bone blades, but the decision between them must be made when the bone blade is installed and cannot be changed.\nУрон: Стандартное – 2d8; Тяжёлое – 4d8.\nКритический эффект: Шок.",
    source: "СП-03"
},
{
    name: "Могильный ветер (тип 3)",
    lvl: 12,
    price: 30000,
    type: "Некротрансплант",
    body_part: "Лёгкие",
    descr: "A grave wind necrograft replaces your lungs with black, undead lungs that can still pump air and oxygenate blood, but they are also able to exhale a diseased miasma. As a standard action a number of times per day equal to the necrograft\’s mark, you can expose an adjacent creature to a necromantic disease. The disease inflicted depends on the model of the grave wind, as indicated in the Grave Wind table above.\nThese necromantic diseases act as the diseases of the same name, except for the following. The save DC is determined by the necrograft and its recipient. No wound or actual transfer of air is necessary for the disease to affect a target; even someone in armor with its environmental seals active can be exposed. A creature infected with such a disease is not a carrier, so it can\’t pass the disease on to other victims. Creatures immune to death effects are immune to these diseases, and any bonus a creature has to saving throws against death effects applies to saves against these diseases. The diseases don\’t count as death effects for other purposes, such as raise dead.\nБолезнь: Дьявольский жар.",
    source: "СП-03"
},
{
    name: "Призрачные очи (тип 3)",
    lvl: 12,
    price: 30000,
    type: "Некротрансплант",
    body_part: "Глаза",
    descr: "Wraith motes replace your eyes with glowing red motes of fiery-red light which smolder and produce thin trails of white smoke. Wraith motes allow you to retain all your natural vision abilities, but they can also augment your vision for a number of minutes per day equal to the necrograft\’s mark. They can be activated as a swift action, or they can be activated as a reaction whenever you attempt a Perception check. They can be deactivated as a swift action. The wraith motes\’ duration need not be used all at once, but it must be used in 1-minute increments.\nThe vision granted by the wraith motes varies based on the model as follows. Higher-level models can be used to grant the vision options of a lower-level version, but only a single benefit can be gained at a time. Mk 1 wraith motes grant low-light vision. Mk 2 wraith motes grant darkvision with a range of 60 feet. Mk 3 wraith motes grant the see in darkness universal creature ability (allowing you to see perfectly in darkness of any kind, including magical darkness).",
    source: "СП-03"
},
{
    name: "Теневые нервы (тип 3)",
    lvl: 12,
    price: 30000,
    type: "Некротрансплант",
    body_part: "Позвоночник",
    descr: "Shadow nerves are long strands of partially incorporeal undead nerve fibers that have strong connections to the Shadow Plane, allowing you to navigate a path that exists partially in the Material Plane and partially in the Shadow Plane. A number of times per day equal to the necrograft\’s mark, you can take a guarded step of 10 feet, rather than the usual 5-foot guarded step, as long as you are not in an area of bright light.",
    source: "СП-03"
},
{
    name: "Чёрное сердце (тип 3)",
    lvl: 12,
    price: 30000,
    type: "Некротрансплант",
    body_part: "Сердце или лёгкие",
    descr: "Despite its name, a black heart can augment any major circulatory organ that helps sustain life in a living creature, though it most commonly augments a heart. A black heart is a strip of necromancy-infused undead flesh that turns whatever organ it is attached to a deep shade of ebony.\nYou gain the benefits of the environmental protections of armor, which last for a number of days equal to double the necrograft\’s item level. A black heart automatically recharges 1 hour of this duration for each hour this ability is not in use (up to its normal maximum). Additionally, you gain an enhancement bonus to saving throws against death effects, disease, mind-affecting effects, paralysis, poison, sleep effects, and stunning effects equal to the necrograft\’s mark, unless the effect specifies it functions against undead.",
    source: "СП-03"
},
{
    name: "Голос вампира (тип 4)",
    lvl: 18,
    price: 350000,
    type: "Некротрансплант",
    body_part: "Горло",
    descr: "A vampire voice necrograft attaches to your vocal cords, granting a supernaturally threatening tone. While most recipients of vampire voices are convinced their necrografts came from vampire spawn, creators of these undead augmentations never promise any such lofty origins.\nA vampire voice grants an enhancement bonus to Intimidate checks equal to the necrograft\’s mark. You can also use Intimidate to bully a creature without sharing a language. If you succeed at the check, you can convey a single simple request along with the bullying (such as “go away” or “don\’t hurt him”), though specific or complex requests can\’t be made without sharing a language. Once a creature has been the target of a bullying attempt by a recipient with a vampire voice, it can\’t be targeted by this ability from the same recipient again for 24 hours.",
    source: "СП-03"
},
{
    name: "Железы упыря (тип 4)",
    lvl: 18,
    price: 350000,
    type: "Некротрансплант",
    body_part: "Кожа",
    descr: "Ghoul glands are a series of hundreds of tiny undead sweat glands installed just under the surface of your skin, replacing many of your natural sweat glands. The glands produce their own loathsome chemicals, but they also pull energy from your body and mind and use it to create a staggering or paralyzing effect on foes. As a standard action a number of times per day equal to the necrograft\’s mark, you can activate the glands and attempt to touch a foe (doing so requires a successful melee attack roll against the target\’s KAC). The target must succeed at a Fortitude saving throw or be stunned for 1d4 rounds.",
    source: "СП-03"
},
{
    name: "Костяное лезвие (тип 4)",
    lvl: 18,
    price: 350000,
    type: "Некротрансплант",
    body_part: "Рука",
    descr: "Bone blades are weapons built into undead arms that are then grafted onto their recipients. The blade can be retracted into the limb (making it impossible to notice without a careful inspection, scan, spell, or similar ability) or extended from the wrist for combat. Extending or retracting a bone blade is a swift action, and you can\’t use the hand of the associated arm to hold anything or perform fine manipulation when the blade is extended. A bone blade cannot be disarmed, but it can be sundered. When you regain Hit Points (whether through first aid, magic, or natural healing), the blade regains the same number of Hit Points. If destroyed, a bone blade regrows in 24 hours.\nStandard bone blades are one-handed simple melee weapons with the operative weapon special property. It is possible to have a more complex heavy bone blade installed, which changes the bone blade into a one-handed advanced melee weapon. These heavy bone blades are not operative weapons, but they deal more damage. There is no difference in cost between standard and heavy bone blades, but the decision between them must be made when the bone blade is installed and cannot be changed.\nУрон: Стандартное – 5d8; Тяжёлое – 7d8.\nКритический эффект: Шок.",
    source: "СП-03"
},
{
    name: "Могильный ветер (тип 4)",
    lvl: 18,
    price: 350000,
    type: "Некротрансплант",
    body_part: "Лёгкие",
    descr: "A grave wind necrograft replaces your lungs with black, undead lungs that can still pump air and oxygenate blood, but they are also able to exhale a diseased miasma. As a standard action a number of times per day equal to the necrograft\’s mark, you can expose an adjacent creature to a necromantic disease. The disease inflicted depends on the model of the grave wind, as indicated in the Grave Wind table above.\nThese necromantic diseases act as the diseases of the same name, except for the following. The save DC is determined by the necrograft and its recipient. No wound or actual transfer of air is necessary for the disease to affect a target; even someone in armor with its environmental seals active can be exposed. A creature infected with such a disease is not a carrier, so it can\’t pass the disease on to other victims. Creatures immune to death effects are immune to these diseases, and any bonus a creature has to saving throws against death effects applies to saves against these diseases. The diseases don\’t count as death effects for other purposes, such as raise dead.\nБолезнь: Демоническая лихорадка.",
    source: "СП-03"
},
{
    name: "Призрачные очи (тип 4)",
    lvl: 18,
    price: 350000,
    type: "Некротрансплант",
    body_part: "Глаза",
    descr: "Wraith motes replace your eyes with glowing red motes of fiery-red light which smolder and produce thin trails of white smoke. Wraith motes allow you to retain all your natural vision abilities, but they can also augment your vision for a number of minutes per day equal to the necrograft\’s mark. They can be activated as a swift action, or they can be activated as a reaction whenever you attempt a Perception check. They can be deactivated as a swift action. The wraith motes\’ duration need not be used all at once, but it must be used in 1-minute increments.\nThe vision granted by the wraith motes varies based on the model as follows. Higher-level models can be used to grant the vision options of a lower-level version, but only a single benefit can be gained at a time. Mk 1 wraith motes grant low-light vision. Mk 2 wraith motes grant darkvision with a range of 60 feet. Mk 3 wraith motes grant the see in darkness universal creature ability (allowing you to see perfectly in darkness of any kind, including magical darkness). Mk 4 wraith motes grant the ability to see invisible creatures and objects.",
    source: "СП-03"
},
{
    name: "Теневые нервы (тип 4)",
    lvl: 18,
    price: 350000,
    type: "Некротрансплант",
    body_part: "Позвоночник",
    descr: "Shadow nerves are long strands of partially incorporeal undead nerve fibers that have strong connections to the Shadow Plane, allowing you to navigate a path that exists partially in the Material Plane and partially in the Shadow Plane. A number of times per day equal to the necrograft\’s mark, you can take a guarded step of 10 feet, rather than the usual 5-foot guarded step, as long as you are not in an area of bright light.",
    source: "СП-03"
},
{
    name: "Чёрное сердце (тип 4)",
    lvl: 18,
    price: 350000,
    type: "Некротрансплант",
    body_part: "Сердце или лёгкие",
    descr: "Despite its name, a black heart can augment any major circulatory organ that helps sustain life in a living creature, though it most commonly augments a heart. A black heart is a strip of necromancy-infused undead flesh that turns whatever organ it is attached to a deep shade of ebony.\nYou gain the benefits of the environmental protections of armor, which last for a number of days equal to double the necrograft\’s item level. A black heart automatically recharges 1 hour of this duration for each hour this ability is not in use (up to its normal maximum). Additionally, you gain an enhancement bonus to saving throws against death effects, disease, mind-affecting effects, paralysis, poison, sleep effects, and stunning effects equal to the necrograft\’s mark, unless the effect specifies it functions against undead.",
    source: "СП-03"
},
{
    name: "Голос вампира (тип 5)",
    lvl: 20,
    price: 775000,
    type: "Некротрансплант",
    body_part: "Горло",
    descr: "A vampire voice necrograft attaches to your vocal cords, granting a supernaturally threatening tone. While most recipients of vampire voices are convinced their necrografts came from vampire spawn, creators of these undead augmentations never promise any such lofty origins.\nA vampire voice grants an enhancement bonus to Intimidate checks equal to the necrograft\’s mark. You can also use Intimidate to bully a creature without sharing a language. If you succeed at the check, you can convey a single simple request along with the bullying (such as “go away” or “don\’t hurt him”), though specific or complex requests can\’t be made without sharing a language. Once a creature has been the target of a bullying attempt by a recipient with a vampire voice, it can\’t be targeted by this ability from the same recipient again for 24 hours.",
    source: "СП-03"
},
{
    name: "Железы упыря (тип 5)",
    lvl: 20,
    price: 775000,
    type: "Некротрансплант",
    body_part: "Кожа",
    descr: "Ghoul glands are a series of hundreds of tiny undead sweat glands installed just under the surface of your skin, replacing many of your natural sweat glands. The glands produce their own loathsome chemicals, but they also pull energy from your body and mind and use it to create a staggering or paralyzing effect on foes. As a standard action a number of times per day equal to the necrograft\’s mark, you can activate the glands and attempt to touch a foe (doing so requires a successful melee attack roll against the target\’s KAC). The target must succeed at a Fortitude saving throw or be stunned for 1d4 rounds.",
    source: "СП-03"
},
{
    name: "Костяное лезвие (тип 5)",
    lvl: 20,
    price: 775000,
    type: "Некротрансплант",
    body_part: "Рука",
    descr: "Bone blades are weapons built into undead arms that are then grafted onto their recipients. The blade can be retracted into the limb (making it impossible to notice without a careful inspection, scan, spell, or similar ability) or extended from the wrist for combat. Extending or retracting a bone blade is a swift action, and you can\’t use the hand of the associated arm to hold anything or perform fine manipulation when the blade is extended. A bone blade cannot be disarmed, but it can be sundered. When you regain Hit Points (whether through first aid, magic, or natural healing), the blade regains the same number of Hit Points. If destroyed, a bone blade regrows in 24 hours.\nStandard bone blades are one-handed simple melee weapons with the operative weapon special property. It is possible to have a more complex heavy bone blade installed, which changes the bone blade into a one-handed advanced melee weapon. These heavy bone blades are not operative weapons, but they deal more damage. There is no difference in cost between standard and heavy bone blades, but the decision between them must be made when the bone blade is installed and cannot be changed.\nУрон: Стандартное – 5d10; Тяжёлое – 7d10.\nКритический эффект: Шок.",
    source: "СП-03"
},
{
    name: "Могильный ветер (тип 5)",
    lvl: 20,
    price: 775000,
    type: "Некротрансплант",
    body_part: "Лёгкие",
    descr: "A grave wind necrograft replaces your lungs with black, undead lungs that can still pump air and oxygenate blood, but they are also able to exhale a diseased miasma. As a standard action a number of times per day equal to the necrograft\’s mark, you can expose an adjacent creature to a necromantic disease. The disease inflicted depends on the model of the grave wind, as indicated in the Grave Wind table above.\nThese necromantic diseases act as the diseases of the same name, except for the following. The save DC is determined by the necrograft and its recipient. No wound or actual transfer of air is necessary for the disease to affect a target; even someone in armor with its environmental seals active can be exposed. A creature infected with such a disease is not a carrier, so it can\’t pass the disease on to other victims. Creatures immune to death effects are immune to these diseases, and any bonus a creature has to saving throws against death effects applies to saves against these diseases. The diseases don\’t count as death effects for other purposes, such as raise dead.\nБолезнь: Фараонова чума.",
    source: "СП-03"
},
{
    name: "Призрачные очи (тип 5)",
    lvl: 20,
    price: 775000,
    type: "Некротрансплант",
    body_part: "Глаза",
    descr: "Wraith motes replace your eyes with glowing red motes of fiery-red light which smolder and produce thin trails of white smoke. Wraith motes allow you to retain all your natural vision abilities, but they can also augment your vision for a number of minutes per day equal to the necrograft\’s mark. They can be activated as a swift action, or they can be activated as a reaction whenever you attempt a Perception check. They can be deactivated as a swift action. The wraith motes\’ duration need not be used all at once, but it must be used in 1-minute increments.\nThe vision granted by the wraith motes varies based on the model as follows. Higher-level models can be used to grant the vision options of a lower-level version, but only a single benefit can be gained at a time. Mk 1 wraith motes grant low-light vision. Mk 2 wraith motes grant darkvision with a range of 60 feet. Mk 3 wraith motes grant the see in darkness universal creature ability (allowing you to see perfectly in darkness of any kind, including magical darkness). Mk 4 wraith motes grant the ability to see invisible creatures and objects. Mk 5 wraith motes allow you to see into both the Ethereal Plane and Shadow Plane.",
    source: "СП-03"
},
{
    name: "Теневые нервы (тип 5)",
    lvl: 20,
    price: 775000,
    type: "Некротрансплант",
    body_part: "Позвоночник",
    descr: "Shadow nerves are long strands of partially incorporeal undead nerve fibers that have strong connections to the Shadow Plane, allowing you to navigate a path that exists partially in the Material Plane and partially in the Shadow Plane. A number of times per day equal to the necrograft\’s mark, you can take a guarded step of 10 feet, rather than the usual 5-foot guarded step, as long as you are not in an area of bright light.",
    source: "СП-03"
},
{
    name: "Чёрное сердце (тип 5)",
    lvl: 20,
    price: 775000,
    type: "Некротрансплант",
    body_part: "Сердце или лёгкие",
    descr: "Despite its name, a black heart can augment any major circulatory organ that helps sustain life in a living creature, though it most commonly augments a heart. A black heart is a strip of necromancy-infused undead flesh that turns whatever organ it is attached to a deep shade of ebony.\nYou gain the benefits of the environmental protections of armor, which last for a number of days equal to double the necrograft\’s item level. A black heart automatically recharges 1 hour of this duration for each hour this ability is not in use (up to its normal maximum). Additionally, you gain an enhancement bonus to saving throws against death effects, disease, mind-affecting effects, paralysis, poison, sleep effects, and stunning effects equal to the necrograft\’s mark, unless the effect specifies it functions against undead.",
    source: "СП-03"
},
{
    name: "Синергетический симбиот (тип 1)",
    lvl: 3,
    price: 1400,
    type: "Персональное улучшение (гибридное)",
    body_part: "-",
    descr: "Ability Modifier: +2\nThese tiny, biovat-grown, tadpole-like creatures form symbiotic relationships with other animals by attaching to their bodies and instinctively maximizing efficiency in the hosts\’ biological systems, losing their own independence and functionally becoming a new organ. Synergizing symbiotes grant additional ability points. This counts as a personal upgrade of the appropriate model number. It takes an hour to implant a synergizing symbiote, and once a character has benefited from it, it is forever spent.",
    source: "ОКП"
},
{
    name: "Синергетический симбиот (тип 2)",
    lvl: 7,
    price: 6500,
    type: "Персональное улучшение (гибридное)",
    body_part: "-",
    descr: "Ability Modifier: +4\nThese tiny, biovat-grown, tadpole-like creatures form symbiotic relationships with other animals by attaching to their bodies and instinctively maximizing efficiency in the hosts\’ biological systems, losing their own independence and functionally becoming a new organ. Synergizing symbiotes grant additional ability points. This counts as a personal upgrade of the appropriate model number. It takes an hour to implant a synergizing symbiote, and once a character has benefited from it, it is forever spent.",
    source: "ОКП"
},
{
    name: "Синергетический симбиот (тип 3)",
    lvl: 14,
    price: 75000,
    type: "Персональное улучшение (гибридное)",
    body_part: "-",
    descr: "Ability Modifier: +6\nThese tiny, biovat-grown, tadpole-like creatures form symbiotic relationships with other animals by attaching to their bodies and instinctively maximizing efficiency in the hosts\’ biological systems, losing their own independence and functionally becoming a new organ. Synergizing symbiotes grant additional ability points. This counts as a personal upgrade of the appropriate model number. It takes an hour to implant a synergizing symbiote, and once a character has benefited from it, it is forever spent.",
    source: "ОКП"
},
{
    name: "Кристалл способностей (тип 1)",
    lvl: 3,
    price: 1400,
    type: "Персональное улучшение (магическое)",
    body_part: "-",
    descr: "Ability Modifier: +2\nThis crystal formed a mystical connection to the memories of heroes long ago. Any character can spend 1 hour communing with the crystal to gain additional ability points. This counts as a personal upgrade of the appropriate model number. Once a character has used the crystal, its magic is forever spent.",
    source: "ОКП"
},
{
    name: "Кристалл способностей (тип 2)",
    lvl: 7,
    price: 6500,
    type: "Персональное улучшение (магическое)",
    body_part: "-",
    descr: "Ability Modifier: +4\nThis crystal formed a mystical connection to the memories of heroes long ago. Any character can spend 1 hour communing with the crystal to gain additional ability points. This counts as a personal upgrade of the appropriate model number. Once a character has used the crystal, its magic is forever spent.",
    source: "ОКП"
},
{
    name: "Кристалл способностей (тип 3)",
    lvl: 14,
    price: 75000,
    type: "Персональное улучшение (магическое)",
    body_part: "-",
    descr: "Ability Modifier: +6\nThis crystal formed a mystical connection to the memories of heroes long ago. Any character can spend 1 hour communing with the crystal to gain additional ability points. This counts as a personal upgrade of the appropriate model number. Once a character has used the crystal, its magic is forever spent.",
    source: "ОКП"
},
{
    name: "Синаптический ускоритель (тип 1)",
    lvl: 3,
    price: 1400,
    type: "Персональное улучшение (технологическое)",
    body_part: "-",
    descr: "Ability Modifier: +2\nThese implants supercharge the synaptic connections in your brain, allowing you to process information faster and send impulses throughout your body more effectively. Synaptic accelerators grant you additional ability points. This counts as a personal upgrade of the appropriate model number. It takes an hour to install a synaptic accelerator, and once a character has benefited from its technology, it is forever spent.",
    source: "ОКП"
},
{
    name: "Синаптический ускоритель (тип 2)",
    lvl: 7,
    price: 6500,
    type: "Персональное улучшение (технологическое)",
    body_part: "-",
    descr: "Ability Modifier: +4\nThese implants supercharge the synaptic connections in your brain, allowing you to process information faster and send impulses throughout your body more effectively. Synaptic accelerators grant you additional ability points. This counts as a personal upgrade of the appropriate model number. It takes an hour to install a synaptic accelerator, and once a character has benefited from its technology, it is forever spent.",
    source: "ОКП"
},
{
    name: "Синаптический ускоритель (тип 3)",
    lvl: 14,
    price: 75000,
    type: "Персональное улучшение (технологическое)",
    body_part: "-",
    descr: "Ability Modifier: +6\nThese implants supercharge the synaptic connections in your brain, allowing you to process information faster and send impulses throughout your body more effectively. Synaptic accelerators grant you additional ability points. This counts as a personal upgrade of the appropriate model number. It takes an hour to install a synaptic accelerator, and once a character has benefited from its technology, it is forever spent.",
    source: "ОКП"
}
];