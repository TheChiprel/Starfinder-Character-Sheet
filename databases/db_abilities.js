const ABILITIES_DATABASE = [ 
{
    name: "Анатомия разумных жиж",
    descr: "Selamids are not immune to critical hits, are not mindless, and can gain and use skills normally. For effects targeting creatures by type, selamids count as both humanoids and oozes (whichever type allows an ability to affect them for abilities that affect only one type, and whichever is worse for abilities that affect both creature types).",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-05"
},
{
    name: "Аносмия",
    descr: "У бантридов отсутствует обоняние, они невосприимчивы к эффектам с дескриптором \’восприятие\’, основанным на обонянии.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС"
},
{
    name: "Атрофия",
    descr: "A contemplative\’s limbs are practically vestigial. A contemplative can manipulate most tools and one-handed weapons (including small arms) without difficulty. A contemplative can\’t properly wield a two-handed weapon without dedicating its telekinetic powers to supporting the weapon, and even then it takes a –4 penalty to attack rolls. It also can\’t use its spell-like abilities or fly until it is no longer wielding that weapon.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Баланс",
    descr: "Бантриды получают бонус +2 (раса) к КБ против манёвров сбивания с ног и когда они распластаны, то могу встать в качестве быстрого действия.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС"
},
{
    name: "Безэмоциональный",
    descr: "Андроидам непонятны эмоции - они стараются их не проявлять. Они получают штраф -2 к проверкам Проницательности, но и СЛ проверок Проницательности против них самих увеличивается на 2.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Бесстрашный",
    descr: "Вески получают +2 (раса) к испытаниям против эффектов ужаса.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Бестактный",
    descr: "Urogs are matter-of-fact creatures who value frankness and getting to the heart of a matter far more than protecting the feelings of others. Urogs take a –2 penalty to Bluff and Diplomacy checks",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Брахиатор",
    descr: "Neskintis have a climb speed of 30 feet. They can use this speed to move horizontally in an area that has adequate handholds, such as from branch to branch in a tree.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-08"
},
{
    name: "Брызги крови",
    descr: "Once per day as a move action (plus one additional time per day for every 5 character levels), an ikeshti can squirt blood from one of his eyes at a foe within 30 feet, making a ranged attack against the target\’s KAC. A successful hit grants the next ally who hits that foe the benefit of harrying fire against it.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Быстрое восприятие",
    descr: "A screedreep can use Perception to search an area in half the normal time. In addition, screedreeps gain a +2 racial bonus to Sense Motive checks.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-08"
},
{
    name: "Быстрое лечение",
    descr: "Один раз в день во время 10-минутного отдыха для восстановления ПЖ астроид может дополнительно восстановить ПЗ, как после полноценного восьмичасового отдыха.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС"
},
{
    name: "В пустыне как дома",
    descr: "Kasathas can move through nonmagical difficult terrain in deserts, hills, and mountains at their normal speed.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Вечнозелёный",
    descr: "For effects targeting creatures by type, khizars count as both humanoids and plants. They receive a +2 racial bonus to saving throws against mind-affecting effects, paralysis, poison, sleep effects, and stunning, unless the effect specifies that it works against plants. Khizars can go without food for three times longer than other humanoids as long as they are exposed to natural sunlight for at least 4 hours per day.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС"
},
{
    name: "Видоизменяющиеся конечности",
    descr: "A shimreen can transform one of her arms into a weapon as a swift action. This crystal lance is a natural weapon that deals 1d3 lethal piercing damage with unarmed strikes; this attack doesn\’t count as archaic. A shimreen gain a unique version of the Weapon Specialization feat with her natural weapon at 3rd level, allowing her to add 1-1/2 × her character level to her damage rolls with her natural weapon (instead of just adding her character level, as usual).",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-06"
},
{
    name: "Внимание к деталям",
    descr: "Endiffians gain a +2 racial bonus to Perception checks.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-07"
},
{
    name: "Водное тело",
    descr: "Provided enough water exists nearby or in the air, a stellifera can psychokinetically construct a watery humanoid-shaped body as a full action and maintain this hydrobody indefinitely, including while unable to take actions or unconscious. A stellifera can dismiss this hydrobody as a standard action, and it disintegrates if he dies. The hydrobody affords the stellifera the size and reach of a Medium creature, and while unclad, it can fit through any opening the stellifera can without squeezing. While within a hydrobody, a stellifera has a Strength score 4 higher, 2 additional Hit Points, a land speed of 30 feet, a swim speed of 30 feet, and the ability to wield weapons and wear clothing and armor as a Medium creature. In addition, a stellifera in a hydrobody takes the bleed effect from only a wound or severe wound critical hit effect, is immune to gases and inhaled poisons, and gains a +4 racial bonus to Fortitude saving throws against diseases and poisons of the contact or injury types. The hydrobody slowly exchanges oxygen with the surrounding atmosphere or liquid, including environmental protections from armor, allowing the stellifera to breathe as if he were underwater. The nature of this body makes the stellifera immune to most effects of vacuum as well as atmospheric or underwater pressure. The hydrobody stores enough oxygen at one time for a stellifera to go 1 hour without oxygen exchange from his surroundings. After that time, he risks suffocation.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-08"
},
{
    name: "Восприятие и речь",
    descr: "Khizars have no eyes or visual senses, other than the ability to perceive the presence or absence of light. Khizars have blindsense (vibration) and blindsight (life), each with a range of 30 feet. Khizars can\’t speak and can communicate only via telepathy.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС"
},
{
    name: "Встроенное снаряжение",
    descr: "An SRO has an internal, integrated standard datajack and comm unit. If an SRO is helpless, these can be removed or destroyed without damaging the SRO. They can be replaced or upgraded for the normal price of this equipment. An SRO has an additional built-in cybernetic component with an item level no greater than half the SRO\’s character level (minimum item level 1). Each time the SRO gains a level, they can swap out this piece of equipment at no additional cost to represent internal reconfigurations. These pieces of equipment don\’t count against the systems in which an SRO can install cybernetics.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС"
},
{
    name: "Выброс огня",
    descr: "As a standard action, a haan can create a 30-foot cone of flame that deals 1d6 fire. Starting at 3rd level, a haan adds 1-1/2 × her character level to the damage. A creature in the cone can attempt a Reflex save (DC = 10 + half the haan\’s character level + her Constitution modifier) for half damage. A haan can\’t use this ability again until she has taken a 10-minute rest to recover Stamina Points.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Выживание в пустынях",
    descr: "An ikeshti can go without water for 3 days plus a number of hours equal to her Constitution score before needing to attempt Constitution checks to avoid nonlethal damage.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Гибкий",
    descr: "A gosclaw can move through an area as small as one-half his space without squeezing or onequarter his space when squeezing.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-08"
},
{
    name: "Гиперактивный",
    descr: "Once per day, a skittermander can take an extra move action.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Гномья магия",
    descr: "Gnomes gain the following spell-like abilities: 1/day—dancing lights, ghost sound, and token spell. The caster level for these effects is equal to the gnome\’s character level. In addition, gnomes get a +2 racial saving throw bonus against illusion spells and effects.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Гравитационная адаптация",
    descr: "Selamids can always take 10 on Athletics checks in zero gravity.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-05"
},
{
    name: "Губительное дыхание [Драконоид]",
    descr: "As a standard action, a dragonkin can breathe a 30-foot cone of flame that deals 1d6 fire damage. At 3rd level, a dragonkin adds 1-1/2 × his character level to the damage. A creature in the cone can attempt a Reflex save for half damage (DC = 10 + half the dragonkin\’s character level + his Constitution modifier). A dragonkin can\’t use this ability again until he has taken a 10-minute rest to recover Stamina Points.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Давние враги",
    descr: "Дварфы по-прежнему готовятся к битве с древними врагами. Они получают бонус +1 (раса) к атакам по существам с подтипом \’гоблиноид\’ или \’орк\’ и бонус +4 (раса) к КБ против атак с подтипом \’великан\’.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Дерзкий",
    descr: "Исоки остаются проворными и задиристыми даже перед лицом большой опасности. Распластавшийся исоки может встать в качестве быстрого действия. Кроме того, во время неконтролируемого вращения исоки не считается затигнутым врасплох и не получает обычных штрафов к атакам. Исоки получают бонус +5 (раса) при проверке Акробатики для переката через занятую противником клетку, если размер противника хотя бы на 1 категорию больше.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Дополнительная черта",
    descr: "Вы получаете одну дополнительную черту на 1 уровне.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Драконий иммунитет",
    descr: "Dragonkin are immune to sleep effects and gain a +2 racial bonus to saving throws against effects that cause paralysis.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Друг лесов",
    descr: "Neskintis gain a +2 racial bonus to Life Science and Survival checks.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-08"
},
{
    name: "Живая оболочка",
    descr: "A borai counts as a living creature for the purposes of what can affect him (such as magic healing). If destroyed, a borai can be brought back to his normal undead state by spells (such as raise dead) that restore life to his body as if he were alive.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС"
},
{
    name: "Задержка дыхания",
    descr: "A Floatborn woioko can hold her breath for 10 minutes before she risks drowning.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-02"
},
{
    name: "Замедленное падение",
    descr: "A haan in an environment with atmosphere can slow her fall by inflating a web balloon as a reaction. This is an extraordinary ability that functions as per flight cast at 1st level.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Запасные органы",
    descr: "Ilthisarian receive a +4 racial bonus to saving throws against effects that target specific organs, such as the wound and severe wound critical hit effects.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-05"
},
{
    name: "Защёчные мешки",
    descr: "Исоки могут прятать в защёчных мешках предметы общим весом 1 или менее и объёмом до 1 кубического фута. для перемещения одного предмета из руки за щёку или обратно требуется быстрое действие. В качестве сопутствующего действия исоки может выплюнуть всё содержимое защёчных мешков на землю в своей клетке. Это действие не провоцирует внеочередных атак.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Знание брони",
    descr: "Вески носят броню так, что она дополняет их необычно крепкое телосложение. При ношении брони они получают +1 (раса) к КБ, кроме этого, штраф за тяжёлую броню для весков снижаются на 1.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Знание камня",
    descr: "Дварфы получают бонус +2 к проверкам Внимания при обнаружении странностей в каменной кладке (например, ловушек или потайных дверей, скрытых в каменных стенах или полу). Каждый раз, когда дварф оказываеся на расстоянии 10 футов от такого места, он автоматически совершает эту проверку, даже если не занимается поиском.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Знание оружия",
    descr: "Дварфы умеют обращаться с простым и высокотехнологичным оружием ближнего боя, а по достижении 3 уровня получают для них черту Привычное оружие.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Инерция",
    descr: "A ferran deals an additional amount of damage equal to its character level with its first melee attack after it moves at least 10 feet in the same round.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-02"
},
{
    name: "Искусственный",
    descr: "Для эффектов, действующих на определённый тип существ, андроиды считаются и гуманоидами, и конструкциями (для особенностей, влияющих на один тип существ - тем типом, который позволяет эффекту действовать на них; для влияющих на оба - тем, что хуже). Они получают бонус +2 (раса) к испытаниям против болезней, ядов, сна, эффектов с дескриптором \’разум\’, если те не предназначены специально для конструкций. Андроиды не дышат и не подвержены негативному влиянию вакуума.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Историк",
    descr: "Due to their in-depth historical training and the wide-ranging academic background knowledge they possess, kasathas receive a +2 racial bonus to Culture checks.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Кислотные щупальца",
    descr: "As a swift action, a scyphozoan can make one of her prehensile tentacles secrete acid; her unarmed strikes with that tentacle count as having the corrosive weapon fusion, except the ability is not magical. While the effect is activated, the scyphozoan is considered armed, and the attack doesn\’t count as archaic, but the scyphozoan cannot hold an item in that tentacle.\nStarting at 3rd level, a scyphozoan adds 1-1/2 × her character level to the damage while the effect is activated. A scyphozoan can deactivate the effect as a swift action.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-05"
},
{
    name: "Контур исцеления",
    descr: "In addition to being constructs and thus able to benefit from spells like make whole, SROs count as living creatures for the purposes of magic healing effects that work on living creatures, though the number of Hit Points restored in such cases is halved. A character must use the Engineering skill to perform the tasks of the Medicine skill on SROs. SROs also heal naturally over time as living creatures do, and can benefit from magic or technology that can bring constructs back from the dead, as well as effects that normally can\’t (such as raise dead).",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС"
},
{
    name: "Коренастый",
    descr: "You receive a +2 racial bonus to KAC against attempts to bull rush or reposition them.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-02"
},
{
    name: "Культурный",
    descr: "Screedreeps gain a +2 racial bonus to Bluff, Culture, and Diplomacy checks.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-08"
},
{
    name: "Летяга",
    descr: "Neskintis are able to fly with the aid of skin membranes stretching between their arms and legs, traveling 5 feet horizontally for every 1 foot of vertical descent, with an extraordinary fly speed of 60 feet and average maneuverability. A neskinti can\’t gain altitude using only this flight, so she can\’t fly if she can\’t descend. If falling, a neskinti can use this ability as a reaction to avoid falling damage. A neskinti can charge while flying but can\’t run, and she can\’t glide while carrying more weight than her normal bulk limit. At the GM\’s discretion, wind or another effect can cause a neskinti to gain altitude, increasing the distance she can glide.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-08"
},
{
    name: "Линька",
    descr: "As part of the action to attempt the check, an ikeshti can shed a portion of her skin to gain a +4 bonus to Acrobatics checks to escape from grapples, pins, and restraints.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Лобовая атака",
    descr: "A nuar can charge without taking the normal charge penalties to the attack roll or its AC. If the nuar has another ability that allows it to charge without taking these penalties (such as the charge attack ability from the soldier\’s blitz attack fighting style), the nuar also gains the ability to charge through difficult terrain.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Ломастер",
    descr: "В качестве сопутствующего действия космогоблин может до начала своего следующего хода снять все штрафы, полученные одним предметом снаряжения из-за поломки. После этого предмет нельзя использовать в течение 10 минут (и он остаётся сломанным до тех пор, пока не будет починен).",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Любитель культуры",
    descr: "Ширрены тянутся к любым знаниям о чужой культуре и обществе. Они получают +2 (раса) к проверкам Дипломатии и Культуры.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Любитель укрытий",
    descr: "A wrikreechee instinctively knows how to exploit sources of cover. When a wrikreechee is benefiting from partial cover, cover, or improved cover, the granted bonus to its AC and Reflex saves increases by 1.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Любопытство",
    descr: "Gnomes receive a +2 racial bonus to Culture checks.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Магия дроу",
    descr: "Drow gain the following spell-like abilities. The caster level for these effects is equal to the drow\’s level.\nAt will—dancing lights, detect magic\nIn addition, drow count as having the Minor Psychic Power feat for the purpose of meeting prerequisites, and if a drow takes the Psychic Power feat, she can add the drow noble\’s limning light supernatural ability to the list of spell-like abilities available to her.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Магия дрэликов",
    descr: "Draeliks gain the spells listed below as spell-like abilities. The caster level for these effects is equal to the draelik\’s character level.\n1/day—wisp ally\nAt will—fatigue, ghost sound",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Магия лашунт",
    descr: "Лашунты получают следующие псевдозаклинания:\nНеограниченно - психокинетическая рука, ступор.\n1 в день - обнаружение мыслей.\nУЗ для этих эффектов равен уровню персонажа.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Магия серых",
    descr: "Grays gain the following spell-like abilities. The caster level for these effects is equal to the gray\’s level.\n1/day—mind thrust (1st level)\nAt will—daze, telepathic message",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Магия стеллифер",
    descr: "Stelliferas have these spell-like abilities: At will: psychokinetic hand, telepathic message",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-08"
},
{
    name: "Мастер выживания",
    descr: "Киши получают +2 (раса) к проверкам Выживания и могут взять 20 при проверках Выживания для предсказания погоды и укрытия от непогоды.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-04"
},
{
    name: "Медленно, но верно",
    descr: "Базовая наземная скорость дварфов – 20 футов, но она никогда не снижается из-за тяжёлой брони или когда дварф нагружен. У них бонус +2 (раса) к испытаниям против ядов, заклинаний и псевдозаклинаний. Стоя на земле, дварфы получают бонус +4 (раса) к ККБ против боевых манёвров тарана и сбивания с ног.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Мертвенный",
    descr: "For effects targeting creatures by type, borais count as both humanoids and undead (whichever effect is worse). They are immune to negative energy damage and gain a +1 racial bonus to saving throws against disease, exhaustion, fatigue, mind-affecting effects, paralysis, poison, sleep effects, and stunning.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС"
},
{
    name: "Место под улучшение",
    descr: "В теле каждого андроида есть одно место под улучшение брони, куда можно установить одно улучшение для лёгкой брони вне зависимости от того, носит андроид броню или нет.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Мимикрирующая кожа",
    descr: "Verthani can manipulate the pigments in their skin at will and with astonishing precision, creating bright decorative patterns or deceptive camouflage. A verthani who stays stationary for 1 round gains a +10 racial bonus to Stealth checks (this bonus doesn\’t stack with the invisibility spell or similar effects). If the verthani takes any action, he loses this bonus until he once again spends 1 round remaining still. A verthani wearing clothing or armor that covers more than one-quarter of his body can\’t use this ability.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Многонациональный",
    descr: "To navigate the evershifting waters of alliances and enmities between the scattered Floatborn nations and arcologies, Floatborn woiokos must be skilled at dealing with those from different backgrounds; they receive a +2 racial bonus to Culture and Diplomacy checks.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-02"
},
{
    name: "Многоногий",
    descr: "Seprevois have four legs, which makes them particularly stable in areas of normal or higher gravity. A seprevois gains a +2 bonus to its KAC against combat maneuvers to trip or move it from its position.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-05"
},
{
    name: "Множество форм",
    descr: "Для эффектов, действующих на определённый тип существ, астроиды считаются и гуманоидами, и аберациями.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС"
},
{
    name: "Начальная адаптация",
    descr: "An early stage barathu\’s body is mutable and can adapt to many different situations. Once every 1d4 rounds as a swift action, an early stage barathu can reshape its body and adjust its chemistry to gain one of the following qualities. The adaptation lasts until the beginning of the early stage barathu\’s next turn. Unlike more mature barathus, early stage barathus are not generally capable of more complex adaptations.\n- Upper limb refinements enable the barathu to add an additional amount of damage to melee attacks equal to its Strength modifier.\n- A toughened dermal layer grants its a +1 racial bonus to AC.\n- Developed lower limbs grant it a base speed of 15 feet.\n- Molecular-level modifications grant it resistance 2 against a single energy type (acid, cold, electricity, fire, or sonic).\n- Elongated limbs extend its reach to 10 feet.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Негасимая надежда",
    descr: "Gnomes receive a +2 racial bonus to saving throws against fear effects. Once per day, after rolling a 1 on a d20, the gnome can reroll and use the second result.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Незаметные пловцы",
    descr: "Kalos gain a +4 bonus to Stealth checks when in water.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Ночной",
    descr: "Strix gain a +2 racial bonus to Perception and Stealth checks in dim light or darkness.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС"
},
{
    name: "Обвивающая хватка",
    descr: "Endiffians gain a +2 racial bonus to grapple combat maneuvers and Athletics checks to climb, and they gain a +2 racial bonus to AC against disarm combat maneuvers.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-07"
},
{
    name: "Обитатель пустошей",
    descr: "Brakims are immune to low radiation. They also gain a +2 racial bonus to Survival checks, to Fortitude saving throws against radiation and extreme weather, and to Constitution checks against starvation and thirst.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-08"
},
{
    name: "Общественный",
    descr: "Ширрены привыкли работать в команде. Один раз в день, если в пределах 10 футов находится союзник, ширрен может совершить двойной бросок при одной проверке атаки или навыка и взять лучший результат.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Орбитальная адаптация",
    descr: "Most seprevois live their whole lives in zero-g environments in the spacecraft orbiting their home world. While a seprevoi must still attempt all required skill checks to move in zero-g, failure at any such checks never imparts the off-kilter condition to the creature. Additionally, seprevois have a natural resistance to radiation. A seprevoi gains a +2 bonus to saving throws to resist radiation and radiation sickness. Finally, seprevois have weakened immune systems, such that they take a -2 penalty to saving throws against diseases (except radiation sickness).",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-05"
},
{
    name: "Ориентирование в лабиринтах",
    descr: "Nuars have a naturally strong sense of direction and an instinctive understanding of complex patterns. As a result, they very rarely get lost. A nuar can attempt a special level-based Wisdom check (1d20 + CR or level + Wisdom bonus) instead of using his total bonus in the Piloting skill to navigate or his total bonus in the Survival skill for orienteering. In addition, a nuar with 1 or more ranks in Piloting or Survival also gains a +2 racial bonus to checks with that skill.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Острые чувства",
    descr: "You receive a +2 racial bonus to Perception skill checks.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Отвлекающий гул",
    descr: "As a standard action, a membrane ghibrani can vibrate her wings fast enough to produce an almost imperceptible hum. All creatures within 15 feet of the membrane ghibrani that hear this buzz must attempt a Will saving throw (DC = 10 + half the ghibrani\’s character level or CR + her Wisdom modifier) or gain the off-target condition for 1 round. This is a mind-affecting, sense-dependent ability. The membrane ghibrani can\’t use her wings to fly in the same round in which she uses this ability.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-05"
},
{
    name: "Партнёрские узы",
    descr: "A dragonkin can form a permanent bond with one willing non-dragonkin creature. Once this bond is made, a dragonkin cannot form another partner bond unless its current partner dies. A dragonkin and its partner can communicate with each other as if they both had telepathy with a range of 100 feet. In combat, when a dragonkin is within 30 feet of its partner, both creatures roll initiative checks separately and treat the higher result as the result for both of them.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Пластичные конечности",
    descr: "Lacking an internal skeleton, a brakim can change her limbs easily. This adaptability grants a brakim a +4 racial bonus to Athletics checks to climb and to swim. If a brakim loses a limb or digit, it regrows in 1d4 hours. In addition, as a full action, a brakim can change up to all four of her limbs to give herself one of the following advantages.\n- A brakim can stretch her limbs. A stretched arm has 5 feet of additional reach. A stretched leg gives 5 feet of additional height. Stretched limbs are weak for combat, so a brakim takes a –2 penalty to attack rolls and gains no Strength bonus to damage with them. In addition, while her legs are stretched, a brakim can\’t run or charge.\n- A brakim can modify her arms for locomotion, moving as a quadruped and gaining a 10-foot enhancement bonus to her speed. While a brakim\’s arms are modified this way, she can\’t wield or hold objects that require two hands.\n- A brakim can modify her legs and feet to be manipulators like arms and hands, respectively. In this mode, a brakim can wield or hold up to four hands worth of weapons or equipment. However, while a brakim holds an object with her modified foot, she takes a 10-foot penalty to her speed. While she holds an object that requires two hands with her feet and legs, she can move only by crawling. If a brakim wants to hold an object with every hand and foot, she must be prone.\n- As a move action, or a reaction when grabbed or otherwise held by a limb, a brakim can detach her limbs. She takes 1 damage directly to her Hit Points for each limb she sheds.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-08"
},
{
    name: "Пловец",
    descr: "A vilderaro has a swim speed of 30 feet. She can jet water through her body, so when she charges, runs, or withdraws while in water, she can swim twice as far as those actions normally allow.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-08"
},
{
    name: "Поглощение силы",
    descr: "As a reaction, a witchwyrd can use any number of its free hands to catch magic missiles (from the spell of the same name) fired at it. Doing so absorbs the missile and manifests as a glowing nimbus around that hand (which is no longer considered free). The energy lasts 6 rounds or until it is used to create an additional force bolt (see below). To use this ability, the witchwyrd must be aware of the incoming magic missile and cannot be flat-footed.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Податливый",
    descr: "A selamid can manipulate and wear equipment as a creature with two arms, and equipment and armor of the appropriate size never needs to be adjusted to allow the selamid to use it. It gains a +8 racial bonus to Acrobatics checks to escape.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-05"
},
{
    name: "Подозрительность",
    descr: "Strix receive a +2 racial bonus to saving throws against illusion spells and effects.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС"
},
{
    name: "Поиск уязвимостей",
    descr: "Elebrians can instinctively find and take advantage of other creatures\’ weak points. An elebrian can make a single melee or ranged attack as a full action, and if she hits, she can add half her level to the damage dealt (minimum +1 damage). Whether successful or not, once an elebrian has used this ability on a creature, that creature is immune to it for 24 hours.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-03"
},
{
    name: "Полёт [драконоид]",
    descr: "A dragonkin gains an extraordinary flight speed of 30 feet with average maneuverability. Until a dragonkin is 5th level, he must end his movement on the ground at the end of each turn or fall.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Полёт в вакууме",
    descr: "Саркезианин может не дышать в течение 1 часа и не подвержен негативному воздействию вакуума. В вакууме саркезиане автоматически выпускают энергетические крылья, получая скорость полёта 60 футов (Св, средняя манёвренность). Крылья позволяют летать только в вакууме.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Практические знания",
    descr: "Once per day before attempting a skill check or saving throw against a creature, a contemplative can use its bonus for the skill associated with that creature\’s type (such as Life Science for an ooze or Mysticism for an outsider) in place of its normal bonus.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Привычная архаика",
    descr: "A seprevoi using a weapon with the analog or archaic weapon property receives a +1 racial bonus on attack rolls, due to the centuries of rationing that restricted the race\’s access to and familiarity with powered or otherwise advanced technology.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-05"
},
{
    name: "Привычная аугментация",
    descr: "Verthani have spent a long time implanting devices into their bodies. A verthani can install an additional augmentation (cybernetics only) into one system that already has an augmentation.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Природная грация",
    descr: "Kasathas receive a +2 racial bonus to Acrobatics and Athletics checks.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Природная эмпатия",
    descr: "Khizars have an empathic understanding of the natural world, giving them a +2 racial bonus to Life Science and Survival checks. Additionally, they can use their limited telepathy to communicate with non-mindless creatures of the plant type without sharing a common language.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС"
},
{
    name: "Прирождённый охотник",
    descr: "Maraquoi receive a +2 racial bonus to Survival skill checks.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Приспособляемость",
    descr: "Half-elves receive Skill Focus as a bonus feat at 1st level.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Проворный",
    descr: "Halflings receive a +2 racial bonus to Acrobatics and Athletics skill checks.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Прозрачный",
    descr: "Scyphozoans receive a +2 racial bonus to Stealth skill checks.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-05"
},
{
    name: "Проныра",
    descr: "Вы получает +2 (раса) к проверкам Выживания, Инженерного дела и Скрытности.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Пронырливость",
    descr: "Halflings receive a +2 racial bonus to Stealth checks. In addition, halflings reduce the penalty for using Stealth while moving by 5, and reduce the Stealth check penalty for sniping by 10.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Пространственное мышление",
    descr: "Vilderaros have a +4 racial bonus to Piloting checks to navigate and Survival checks when orienteering. This bonus can also apply to Profession skills in which spatial awareness is a benefit. The GM is the arbiter of when this bonus applies.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-08"
},
{
    name: "Прячущийся",
    descr: "Draeliks receive a +4 bonus to Stealth checks in dim light or darker conditions.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Развитый интеллект",
    descr: "Elebrians can easily comprehend complex issues and remember minutia. An elebrian can attempt a skill check to recall knowledge untrained, regardless of the DC, and can always take 20 to do so (though this takes 2 minutes), even without access to an information network or data set.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-03"
},
{
    name: "Робот",
    descr: "SROs are immune to bleed, disease, death effects, poison, nonlethal damage, and sleep effects unless those effects specify they affect constructs. SROs can be affected by effects or spells that normally target only humanoids, but receive a +4 racial bonus to saving throws against such effects. SROs can eat and drink, though they don\’t need to, and they must recharge their internal batteries by entering an off-line mode that is similar to sleep for 8 hours every day. SROs do not breathe or suffer the normal environmental effects of being in a vacuum.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС"
},
{
    name: "Рытьё [Госклоу]",
    descr: "Gosclaws have a burrow speed of 10 feet. A gosclaw can leave a tunnel if he moves at half speed.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-08"
},
{
    name: "Самодостаточность",
    descr: "Half-orcs receive a +2 racial bonus to Survival skill checks.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Светящийся",
    descr: "Shimreens constantly emit light (dim, normal, or bright) in a 5-foot radius and are immune to the dazzled condition. Shimreens can adjust their current level of light as a move action, but they can never extinguish it.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-06"
},
{
    name: "Себе на уме",
    descr: "Screedreeps gain a +2 racial bonus to saving throws against mind-affecting effects other than fear effects. They also gain a +2 racial bonus to saving throws against effects used to determine if a target is being deceitful.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-08"
},
{
    name: "Силовой снаряд",
    descr: "Witchwyrds can cast magic missile as a spell-like ability once per day. For every two magic missiles caught using its absorb force ability, a witchwyrd can use its force bolt ability an additional time each day.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Симулякр",
    descr: "An endiffian can spend 1 minute to physically alter her form to look like any Medium humanoid with two arms and two legs, as long as she has seen a similar creature before. She can attempt to either mimic a specific creature she has seen or appear as a creature of her own design of that chosen species. The endiffian gains a +10 bonus to Disguise checks to appear as that creature, and the DC of this Disguise check is not modified as a result of altering major features or being disguised as a different race of humanoid. The endiffian can remain in her altered form indefinitely.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-07"
},
{
    name: "Сорвиголова [Бантрид]",
    descr: "Бантриды получают бонус +2 (раса) к проверкам Акробатики.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС"
},
{
    name: "Старые таланты",
    descr: "Borais\’ not-quite-dead bodies still have some of their old racial traits. At character creation, a borai selects one of the following races as his original living form and gains the racial trait indicated in parenthesis for the selected race: android (upgrade slot), human (skilled), kasatha (four-armed), lashunta (limited telepathy), shirren (blindsense), vesk (natural weapons), or ysoki (cheek pouches). A GM can, at her discretion, allow a borai to choose another humanoid race, along with an appropriate racial trait. Additionally, when a borai attempts to disguise himself as a member of his selected race, the DC of his Disguise check is not modified as a result of disguising himself as a different creature type.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС"
},
{
    name: "Странная анатомия",
    descr: "Early stage barathus gain a +1 racial bonus to Fortitude saving throws.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Талантливый механик",
    descr: "Gosclaws gain a +2 racial bonus to Computers, Engineering, and Physical Science checks. A gosclaw can treat one of these skills as a class skill.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-08"
},
{
    name: "Технолог",
    descr: "Strix have a natural eye for technology and can craft such items at incredible speed. It takes a strix a base time of 2 hours to craft a technological item.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС"
},
{
    name: "Торговец",
    descr: "Witchwyrds are known as skilled traders and negotiators throughout the galaxy and the planes. They receive a +2 racial bonus to Bluff and Diplomacy checks.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Триморфизм",
    descr: "Summerborn ryphorians gain fire resistance 5. Winterborn ryphorians gain cold resistance 5. Transitional ryphorians gain cold and fire resistance 2, and when in conditions of severe cold or heat, they have to attempt Fortitude saves only once per hour instead of once every 10 minutes. A ryphorian can stack this natural resistance with one other form of resistance.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Тяга к сотрудничеству",
    descr: "Wrikreechees spend much of their lives in close contact with one another, learning to predict their neighbors\’ reactions and coordinate their actions. A wrikreechee gains a +2 bonus to skill checks for the aid another action and to attack rolls to provide harrying fire. A creature using the aid another action to assist a wrikreechee\’s skill check gains a +2 bonus to her check.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Удача полурослика",
    descr: "Halflings receive a +1 racial bonus to all saving throws. This bonus increases to +3 against fear effects.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Умелый",
    descr: "Вы получаете один дополнительный пункт навыков на первом и каждом последующем уровне.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Умелый ремонтник",
    descr: "Brakims have a +2 racial bonus to Engineering checks.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-08"
},
{
    name: "Усиление",
    descr: "Whenever a shimreen takes energy damage, she can voluntarily take an additional 1d4 damage of the same type by amplifying the energy within her crystalline form. This empowers her next melee attack. The next melee attack the shimreen makes releases this energy, dealing an additional amount of damage equal to the extra damage the shimreen took (and of the same type). The shimreen can\’t take additional damage again until she releases the energy she is storing. If unused, this stored energy dissipates after 10 minutes. The amount of extra damage the shimreen takes (and deals) increases to 2d4 at level 8 and 3d4 at level 16.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-06"
},
{
    name: "Устойчивость к вытягиванию жизни",
    descr: "A borai takes no penalties from energy drain effects, but he can still be destroyed if he accrues more negative levels then he has class levels. After 24 hours, any negative levels a borai has taken are removed without the need for an additional saving throw.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС"
},
{
    name: "Устойчивость к некромантии",
    descr: "Draeliks receive a +2 racial bonus to saving throws against necromancy effects.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Устойчивость к радиации",
    descr: "Ferrans receive a +4 racial bonus to saving throws against radiation effects.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-02"
},
{
    name: "Устойчивый к ядам",
    descr: "Ilthisarians receive a +2 racial bonus to saving throws against poison effects.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-05"
},
{
    name: "Устрашающий вид",
    descr: "Half-orcs receive a +2 racial bonus to Intimidate skill checks.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Ученик",
    descr: "Лашунты обожают учиться и получают +2 (раса) к любым двум навыкам по своему выбору.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Учтивый",
    descr: "Ghibranis receive a +2 racial bonus to Diplomacy skill checks.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-05"
},
{
    name: "Фазовое смещение",
    descr: "A gray can shift itself out of phase with reality as a reaction to gain a 20% miss chance against one attack. A gray can use this ability a number of times per day equal to its Constitution modifier.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Фотодыхание",
    descr: "Khizars breathe in carbon dioxide and exhale oxygen. In situations of slow suffocation, a khizar reduces the effective number of creatures consuming air by two, unless no oxygen-breathing creatures are present.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС"
},
{
    name: "Хваткий",
    descr: "Thanks to the feathery material lining its forelimbs, a wrikreechee is adept at grabbing small prey. A wrikreechee gains a +4 bonus to attack rolls when attempting to grapple a creature smaller than itself. As a full action, a wrikreechee can make two attempts to grapple a creature with a -4 penalty to the attack rolls.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Холоднокровный",
    descr: "Рептоиды получают бонус +2 (раса) к испытаниям против эффектов с дескрипторами \’разум\’ и ядов.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Цепкий",
    descr: "Skittermanders gain a +2 racial bonus to grapple combat maneuvers.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Цепкий хвост",
    descr: "A maraquoi\’s tail is as effective as a hand at manipulating objects, which allows them to wield and hold up to three hands\’ worth of weapons and equipment. This does not increase the number of attacks they can make during combat.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Четырёхрукий",
    descr: "У вас четыре руки, каждой из которых вы можете что-то держать или использовать. Несмотря на то, что многорукость позволяет иметь наготове больше предметов, количество совершаемых атак не увеличивается.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Шестирукий",
    descr: "Skittermanders have six arms, which allows them to wield and hold up to six hands\’ worth of weapons and equipment. While their multiple arms increase the number of items they can have at the ready, it doesn\’t increase the number of attacks they can make during combat.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Электролокация",
    descr: "An urog who is in contact with a crystalline or metallic surface can detect the presence of other creatures within 60 feet that are also in contact with the same surface, even through walls and other obstacles. This otherwise functions as blindsense (vision).",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Эльфийская кровь",
    descr: "Half-elves are immune to magic sleep effects and receive a +2 racial bonus to saving throws against enchantment spells and effects.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Эльфийская магия",
    descr: "Elves receive a +2 racial bonus to caster level checks to overcome spell resistance. In addition, elves receive a +2 racial bonus to Mysticism skill checks.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Эльфийский иммунитет",
    descr: "Эльфы и дроу невосприимчивы к эффектам магического сна и получают бонус +2 (раса) к испытаниям против заклинаний и эффектов очарования.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Природная грация [Наалу]",
    descr: "Друаа получают +2 (раса) к проверкам Акробатики и Атлетики. Кроме того распластавшийся Друаа может встать в качестве быстрого действия.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "Homerule"
},
{
    name: "Дар предвидения",
    descr: "Раз в день Друаа воспользоваться заклинанием Предвидение (позволяет узнать, принесёт ли некое действие пользу или вред). Кроме того вы получаете бонус инициативы +2.",
    lvl: null,
    type: "Раса",
    subtype: null,
    category: null,
    requirement: null,
    source: "Homerule"
},
{
    name: "Дрон",
    descr: "You begin play with a powerful robotic drone to house your AI. You build and control this drone, which accompanies you on your adventures and is capable of combat, espionage, and other specialized tasks. As you gain levels, your drone advances in sophistication and gain additional abilities. While the value of your drone is immense, only you, with your extensive knowledge of its quirks and security measures, can ever hope to operate or repair it.",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Искусственный интеллект",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Экзокортекс",
    descr: "Вы начинаете игру с экзокортексом – процессором, усиливающим когнитивные способности вашего биологического мозга и облегчающим выполнение самых разнообразных действий, от стрельбы до взлома компьютерных систем. Экзокортекс имплантируется в ваше тело или мозг как кибернетическое устройство, позволяя ИИ подключаться к вашему разуму напрямую и передавать информацию. По мере повышения в уровне вычислительная мощность экзокортекса увеличивается. Только вы можете получить доступ к своему экзокортексу и совершать операции с ними.",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Искусственный интеллект",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Боевой дрон",
    descr: "Bigger than other chassis options, the combat drone moves along the ground and is outfitted with wheels, tracks, legs, or a similar form of propulsion. This drone is designed specifically for battle. It has an armored body and multiple weapon mounts, allowing it to pack a variety of armaments.",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Корпус дрона, Дрон",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Дрон-невидимка",
    descr: "Sleek and covered in a light-absorbing alloy, the stealth drone prowls along the ground on multiple small legs, silenced wheels, an air cushion, or some similar form of propulsion. This drone specializes in stealth and infiltration and can vanish almost entirely from sight as long as it remains perfectly still.",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Корпус дрона, Дрон",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Летающий дрон",
    descr: "The hover drone is the smallest chassis and is equipped with miniature hoverjets or similar aerial propulsion (legs or wheels provide propulsion on land). This drone can fly and avoid obstacles but isn\’t very stealthy. A hover drone with melee weapon arms or weapon mounts can use weapons designed for Small or Medium creatures without penalty. ",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Корпус дрона, Дрон",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Багажник",
    descr: "Your drone is outfitted with cargo space. The drone\’s Strength score counts as 4 higher for the purpose of how determining much bulk it can carry, but all of this extra bulk must be stored gear and cargo, not mounted weapons, armor mods, or the like. This does not affect the drone\’s actual Strength score in any way, merely how much it can carry. Due to its size, a drone might still be unable to carry awkward or unwieldy items.",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Модификация дрона, Дрон",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Боевая рука",
    descr: "Your drone is equipped with a robotic arm to which you can affix a one-handed melee weapon, allowing your drone to wield that weapon and attack with it. This weapon cannot be disarmed. Wielding a two-handed melee weapon requires two melee weapon arms. If you do not already have a weapon to equip, you must purchase it separately. Swapping out a weapon in a melee weapon arm requires use of your custom rig and 1 hour of work. You can select this mod multiple times, each time adding an additional melee weapon arm to the drone.",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Модификация дрона, Дрон",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Видеокамера",
    descr: "Ваш дрон оснащается видеокамерой, через которую вы можете наблюдать за происходящим с помощью специнструмента, пока дрон находится в пределах дистанции действия. Камера не обладает особым зрением и видит то же, что видел бы обычный человек. При помощи камеры можно записать до 1 часа видеоматериалов, которые можно скачать и просмотреть посредствам специнструмента.",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Модификация дрона, Дрон",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Водомёты",
    descr: "Your drone is equipped with miniature marine jet engines, granting it a swim speed equal to half its land speed. This mod can be applied to only combat drones and stealth drones.",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Модификация дрона, Дрон",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Гаффы",
    descr: "Дрон получает скорость лазания, равную половине наземной. Эту модификацию можно установить только на боевых дронов и дронов-невидимок.",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Модификация дрона, Дрон",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Дополнительный боезапас",
    descr: "One of your drone\’s weapon mounts can hold two additional batteries, magazines, or other type of ammunition in addition to its usual weapon and ammunition capacity. Your drone must have the weapon mount mod before selecting this mod. You can select this mod more than once, up to the number of weapon mounts the drone has.",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Модификация дрона, Дрон",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Защищённый ИИ",
    descr: "Your drone\’s AI is secured against outside influence. Any attempt to hack your drone takes a –4 penalty, and your drone receives a +4 insight bonus to saving throws against spells or effects that attempt to take control of the drone or otherwise dictate its actions.",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Модификация дрона, Дрон",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Манипуляторы",
    descr: "Your drone is equipped with two robotic arms with simple hands. They can perform most functions that your arms can perform (such as opening doors, typing on a keypad, wielding a weapon, or attempting skill checks that require manual dexterity), but attacks made with them take a –4 penalty.",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Модификация дрона, Дрон",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Место под оружие",
    descr: "Вы можете установить одно короткоствольное или подобное одноручное дистанционное оружие, предназначенное для небольших или средних существ, позволяя дрону использовать его без штрафофв за размер, в том числе и для атаки. Это оружие невозприимчиво к разоружению. для установки длинноствольного, тяжёлого или подобного двуручного оружия требуются два места под оружие. Место под оружие также способно вместить два или менее аккумулятора, магазина или других контейнера с боеприпасами для установленного на него оружия, при условии, что боеприпасы имеют лёгкий или меньший вес. При этом два места, на которые установлено двуручное оружие считаютс одним. Перезарядка установленного оружия происходит автоматически, с обычной для оружия скоростью. Использованные аккумуляторы или магазины хранятся внутри дрона. В качестве сопутствующего действия вы можете заменить все боеприпасы для одного места под оружие. Само оружие и боеприпасы в комплект не входят, вам нужно купить их или установить те, что у вас есть. Вы можете заменить установленное оружие аналогичным, если при этом соблюдаются все требования по количеству мест (например, если у вас два места под оружие, вы можете заменить длинноствольное оружие тяжёлым). Для замены установленного оружия вам потребуется 1 час работы с использованием специнструмента. Вы можете брать эту модификацию несколько раз, каждый раз добавляя 1 новое место под оружие.",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Модификация дрона, Дрон",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Место под улучшение брони",
    descr: "Your drone gains an armor upgrade slot for an armor upgrade. If you do not already have an armor upgrade to install, you must purchase one separately. You can install the armor upgrade only if your drone has enough open upgrade slots to meet the upgrade\’s requirements. You can select this mod up to four times, each time adding an additional slot.",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Модификация дрона, Дрон",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Обращение с высокотехнологичным оружием ближнего боя [Модификация дрона]",
    descr: "Your drone gains Advanced Melee Weapon Proficiency bonus feat.",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Модификация дрона, Дрон",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Обращение с длинноствольным оружием [Модификация дрона]",
    descr: "Your drone gains Longarm Proficiency bonus feat.",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Модификация дрона, Дрон",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Обращение с короткоствольным оружием [Модификация дрона]",
    descr: "Your drone gains Small Arm Proficiency bonus feat.",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Модификация дрона, Дрон",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Обращение с особым оружием [Модификация дрона]",
    descr: "Your drone gains Special Weapon Proficiency bonus feat.",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Модификация дрона, Дрон",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Обращение с простым оружием ближнего боя [Модификация дрона]",
    descr: "Your drone gains Basic Melee Weapon Proficiency bonus feat.",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Модификация дрона, Дрон",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Обращение с тяжёлым оружием [Модификация дрона]",
    descr: "Your drone gains Heavy Weapon Proficiency bonus feat.",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Модификация дрона, Дрон",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Потайной отсек",
    descr: "Your drone has a secret compartment that can hold a single item of light bulk or smaller. A successful Perception check (DC = 15 + your mechanic level) is needed to notice or find the compartment. Accessing this compartment is a move action.",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Модификация дрона, Дрон",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Прыжковые двигатели",
    descr: "Your drone is equipped with powerful miniature jets. It can use these jets to jump up to 30 feet as a move action (either vertically, horizontally, or in any combination that does not exceed 30 feet). If applied to a hover drone, these jets instead allow your drone to increase its fly speed by 30 feet for 1 round. Once used, these jets must cool down for 1 minute before they can be used again.",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Модификация дрона, Дрон",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Седло",
    descr: "Your drone is equipped with a seat and programming to carry a rider as a combat-trained mount. If you ride your drone, it must be at least your size or larger. To carry another rider, the drone must be at least one size larger than the rider. You no longer need to attempt the Survival check to fight from a combat-trained mount.",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Модификация дрона, Дрон",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Специализированное ПО",
    descr: "Choose another skill from the skill unit list. This is a class skill for your drone, which gains a number of ranks in that skill equal to your mechanic level. Your drone also increases its Intelligence score by 2. At 11th level, you can choose this mod a second time as an advanced mod. If you do, choose an additional skill to become a class skill for your drone (this skill doesn\’t have to be on the skill unit list). Your drone gains ranks in the skill equal to your mechanic level. Your drone also increases its Intelligence score again by 2.",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Модификация дрона, Дрон",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Технологическая рука",
    descr: "Select one technological item from Chapter 7: Equipment of no more than light bulk and an item level no higher than your mechanic level. Your drone is equipped with a robotic arm with that item attached and the proper programming to use the item, although it cannot use a tool that requires skill checks unless it also has ranks in the relevant skill (or you have ranks in the relevant skill and the drone is under your direct control).",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Модификация дрона, Дрон",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Усиленная броня",
    descr: "Your drone gains a +2 bonus to its AC. At 11th level, you can choose this mod a second time as an advanced mod.",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Модификация дрона, Дрон",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Усиленное восприятие",
    descr: "Your drone gains low-light vision, darkvision to 60 feet, and a +2 insight bonus to Perception skill checks. If your drone has the camera mod, the camera gains these senses as well.",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Модификация дрона, Дрон",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Ускоритель",
    descr: "Your drone\’s land speed increases by 10 feet.",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Модификация дрона, Дрон",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Устойчивость",
    descr: "Your drone gains resistance to an energy type of your choice—acid, cold, electricity, fire, or sonic—equal to your mechanic level, to a maximum of 10. You can select this mod multiple times. Its effects do not stack; each time you select this mod, it must apply to a different energy type from the list above.",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Модификация дрона, Дрон",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Адаптивный камуфляж",
    descr: "На корпус дрона наносится покрытие, способное изменять цвет, маскируя дрона на фоне окружающей обстановки. Всякий раз, когда дрон остаётся неподвижным в течение 1 раунда, он получает бонус +10 к проверкам Скрытности (не складывается с бонусом от заклинания невидимость и подобных эффектов). При совершении любого действия дрон теряет этот бонус, пока вновь не проведёт 1 раунд неподвижно.",
    lvl: 11,
    type: "Класс",
    subtype: "Механик, Модификация дрона, Дрон",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Защитное покрытие",
    descr: "Your drone gains damage reduction 1/—. This increases to DR 2/— at 7th level and increases by 1 again at 13th level and every 3 levels thereafter.\n",
    lvl: 11,
    type: "Класс",
    subtype: "Механик, Модификация дрона, Дрон",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Летательная установка",
    descr: "Your drone gains a fly speed equal to half its land speed with average maneuverability for up to 10 minutes per day. This duration need not be continuous, but it must be used in 1-minute increments. You can select this mod a second time; in this case, the drone\’s fly speed has perfect maneuverability and increases to its full land speed, and there is no limit on the amount of time it can fly.",
    lvl: 11,
    type: "Класс",
    subtype: "Механик, Модификация дрона, Дрон",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Медицинское ПО",
    descr: "Your drone is equipped with first aid capabilities. If you are reduced to 0 Hit Points, your drone can attempt to administer emergency medical treatment to you, even despite you being unconscious. On subsequent rounds on your turn, your drone takes as many move actions as necessary to return to your side, followed by a standard action to administer first aid. Once it has done so, you can spend 2 Resolve Points to recover a number of Hit Points equal to your mechanic level. Your drone cannot use this mod on anyone but you nor use it if you are dead or have fewer than 2 RP remaining. You can\’t benefit from this treatment more than once every 24 hours. Your drone must have the manipulator arms and skill subroutines (with the Medicine skill) mods to select this mod.",
    lvl: 11,
    type: "Класс",
    subtype: "Механик, Модификация дрона, Дрон",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Поле невидимости",
    descr: "Once per day as a standard action, your drone can turn invisible for 10 minutes, as per the invisibility spell. If it makes an attack during this time, the invisibility ends. Your drone can spend 2 Resolve Points to use this ability again on the same day. Your drone must have the reactive camouflage mod to select this.",
    lvl: 11,
    type: "Класс",
    subtype: "Механик, Модификация дрона, Дрон",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Устойчивость+",
    descr: "Choose one type of energy for which your drone already has the resistance mod. Increase your drone\’s resistance to that energy type by 5. You can select this mod multiple times. Its effects do not stack. Each time you select this mod, it applies to a different energy type for which your drone has the resistance mod.",
    lvl: 11,
    type: "Класс",
    subtype: "Механик, Модификация дрона, Дрон",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Экскаватор",
    descr: "Your drone gains a burrow speed equal to half its land speed. It can use this speed to move through clay, dirt, earth, and sand. It does not leave a hole behind, nor is its passage marked on the surface.",
    lvl: 11,
    type: "Класс",
    subtype: "Механик, Модификация дрона, Дрон",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Электроволна",
    descr: "Whenever your drone is reduced to fewer than 10 HP, it immediately shuts down and unleashes a shock wave of electricity as a reaction (even if it is deactivated or destroyed by the attack). This deals 1d6 electricity damage per level to every creature within 10 feet (except the drone). An affected creature can attempt a Reflex save to take half damage (DC = 10 + half your mechanic level + your Intelligence modifier).",
    lvl: 11,
    type: "Класс",
    subtype: "Механик, Модификация дрона, Дрон",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Энергетический щит [Модификация дрона]",
    descr: "Your drone gains an energy shield that provides it with a number of temporary Hit Points equal to your mechanic level. This shield remains active until all of its temporary Hit Points are depleted. The drone can replenish the shield\’s Hit Points to full by spending 1 Resolve Point when you rest to regain Stamina Points. You can select this mod a second time to double the energy shield\’s temporary Hit Points.",
    lvl: 11,
    type: "Класс",
    subtype: "Механик, Модификация дрона, Дрон",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Эхолокаторы",
    descr: "Your drone uses basic echolocation to notice unseen foes. The drone gains blindsense (sound) with a range of 60 feet.",
    lvl: 11,
    type: "Класс",
    subtype: "Механик, Модификация дрона, Дрон",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Базовые модификации",
    descr: "You can choose any of the mods on the basic mod list whenever your drone gains a new mod. Unless otherwise specified, you cannot install a single mod more than once.",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Способность дрона, Дрон",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Встроенные модификации",
    descr: "Каждый корпус имеет встроенные модификации, являющиеся его неотъемлемой частью. Они идут в дополнение к модификациям, которые дрон получает при повышении в уровне. Вы не можете изменить эти модификации при повышении в уровне или когда пересобираете дрона заного, если при этом не выбрали для него другой корпус.",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Способность дрона, Дрон",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Корпус дрона",
    descr: "От выбора корпуса зависит размер, начальные параметры и модификации, а также внешний вид и специализация дрона.",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Способность дрона, Дрон",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Модификации дронов",
    descr: "По мере роста вашего уровня дрон будет получать индивидуальные модификации, снаряжение и программное обеспечение, становясь более мощным и полезным. Для всех способностей модификаций, зависящих от уровня, используется ваш полный уровень механика, даже если вы посредством распределённого управления и выделили дрону меньше уровней.\nДрон получает первую модификацию на 1 уровне, а последующие – каждые 2 уровня после этого. Модификации делятся на две категории – базовые и улучшенные. Вы можете устанавливать базовые модификации на любом уровне, а улучшенные модификации – только по достижении 11 уровня (или выделив как минимум 11 уровней дрону). Для работы некоторых модификаций требуется предварительная установка других модификаций. Если не указано обратное, каждую модификацию можно установить только один раз.",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Способность дрона, Дрон",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Модуль навыка",
    descr: "Выберите один из перечисленных навыков: Акробатика, Атлетика, Внимание, Инженерное дело, Компьютеры или Скрытность. данный наавык считается для дрона классовым, а количество вложенных в него пунктов равно вашему уровню в классе. Дрон может использовать этот навык, даже не находясь под вашим прямым управлением. Вы можете изменить выбранный для модуля навык, когда пересобираете дрона заного. Когда вы управляете дроном напрямую, он может применять любые из ваших пунктов в навыках, если имеет необходимое оснащение (так, если у дрона нет манипуляторов, он не сможет использовать Инженерное дело для отключения устройств).",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Способность дрона, Дрон",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Ограниченный ИИ",
    descr: "В каждом раунде, когда вы закончили действия во время своего хода, ваш дрон может совершить либо основное действие для атаки, либо сопутствующее действие (дрон не совершает отдельной проверки инициативы).\nВы при этом должны быть способны отдавать дрону простые приказы, но действия на это не тратятся.\nДля получения приказов дрон должен видеть или слышать вас, либо находиться в пределах дистанции действия вашего специнструмента. Если вы потеряете сознание или по другой причине будете неспособны отдать приказ или дрон окажется за пределами дистанции, он не будет совершать никаких действий, пока снова не окажется в пределах дистанции действия специнструмента или пока вы снова не сможете отдать ему приказ.",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Способность дрона, Дрон",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Прямое управление",
    descr: "В качестве сопутствующего дйствия вы можете управлять дроном напрямую, что позволит дрону в этот ход совершить и сопутствующее, и любое основное действие (одно – благодаря вашему управлению, другое – благодаря ограниченномму ИИ). если вы потратите ещё и быстрое действие, дрон тоже сможет его совершить или сможет объединить все свои действия в действие полного хода. Для того, чтобы вы могли управлять дроном, он должен видеть или слышать вас либо находиться в пределах дистанции действия вашего специнструмента.",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Способность дрона, Дрон",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Черты дронов",
    descr: "When choosing feats for your drone, you can choose from the following:\nBlind-Fight, Cleave, Deadly Aim, Far Shot, Great Cleave, Great Fortitude, Improved Combat Maneuver, Improved Critical, Iron Will, Jet Dash, Kip Up, Lightning Reflexes, Lunge, Mobility, Multi-Weapon Fighting, Nimble Moves, Opening Volley, Penetrating Attack, Shot on the Run, Skill Focus, Skill Synergy, Slippery Shooter, Spring Attack, Strike Back, Suppressive Fire, Versatile Focus, Versatile Specialization, Weapon Focus, Weapon Specialization\nAt 10th level, when the drone has an upgraded power core, you can also choose:\nExtra Resolve, Improved Great Fortitude, Improved Iron Will, Improved Lightning Reflexes\nGMs can expand this list to include feats from other sources.",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Способность дрона, Дрон",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Экспертный ИИ",
    descr: "Your drone\’s AI has grown more sophisticated, giving it a more robust combat routine when not under your direct control. Each round on your turn, the drone can take a move action, take a standard action to attack, or make a full attack (this last option allows it to shoot more than once if it has the necessary weapons to do so). The drone takes a –6 penalty to full attacks made without your direct control instead of the normal –4 penalty. Like limited AI, you must still be conscious and within range. ",
    lvl: 7,
    type: "Класс",
    subtype: "Механик, Способность дрона, Дрон",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Улучшенный реактор",
    descr: "Your drone gains a pool of Resolve Points equal to 1 per 2 levels it has (minimum 1). Your drone can spend 1 Resolve Point to make a full attack without requiring your direct control and at only the normal –4 penalty for a full attack instead of the –6 penalty. Your drone regains Resolve Points after a full 8-hour rest as normal. ",
    lvl: 10,
    type: "Класс",
    subtype: "Механик, Способность дрона, Дрон",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Улучшенные модификации",
    descr: "You can choose from any of the mods on the advanced mod list whenever your drone gains a new mod (in addition to those from the basic mod list). Your drone must always have at least 5 mods from the basic list before you can add any advanced mods, even if you rebuild your drone after it gains this ability.",
    lvl: 11,
    type: "Класс",
    subtype: "Механик, Способность дрона, Дрон",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Истинный ИИ",
    descr: "Your drone\’s AI can act with complete autonomy. Each round on your turn, your drone can take a full suite of actions (either a full action or else a move action, a standard action, and a swift action) without requiring your direct control, and it makes full attacks without your direct control with the normal –4 penalty. You don\’t need to issue commands to your drone for it to take actions. You must still directly control the drone for it to use your skill ranks.",
    lvl: 20,
    type: "Класс",
    subtype: "Механик, Способность дрона, Дрон",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Искусственный интеллект",
    descr: "You construct an artificial intelligence (or AI), a sophisticated program of self-motivated code that you can access for help in a variety of endeavors. This AI is the product of your own genius, far more advanced and complicated than any available for sale to consumers (though it falls short of being truly self-aware), and only you know the secrets of its creation and operation. Your AI can take one of two forms: a drone or an exocortex. You must pick one of these forms upon taking your first level of mechanic, and once this choice is made, it cannot be changed.",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Способность класса",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Обход",
    descr: "Вы умеете получать доступ к компьютерным системам и электронным устройствам. На 1 уровне вы получате бонус +1 (интуитивный) к проверкам Инженерного дела и Компьютеров. На 5 уровне и каждые 4 уровня после этого и на 20 уровне этот бонус увеличивается на 1.",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Способность класса",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Специнструмент",
    descr: "Вы создали индивидуальный набор инструментов, который используете для взлома предметов и систем. Набор может размещаться в броне, занимая место под улучшение, может быть выполнен в виде кибернетической аугментации, установленной в ваш мозг (его можно объединить с инфоразъёмом, заплатив стоимость установки интерфейса), глаза или руку. Специнструмент может быть и карманным устройством, которое придётся вынимать и брать в руки для использования. Если у вас есть специнструмент, то при проверках Компьютеров или Инженерного дела считается, что у вас есть соответствующий базовый набор инструментов. Ряд трюков механика и модификаций дрона требуют использования специнструмента. Кроме этого, специнструмент можно применять как персональный коммуникатор. Наконец, если у вас дрон, вы можете использовать специнструмент, чтобы общаться с ним по зашифрованному каналу, отдавая приказы ИИ или напрямую управляя им на дистанции до 2 500 футов.\nЕсли специнструмент повреждён, уничтожен потерян или украден, вы можете за 1 час собрать новый на основе любого инженерного, хакерского или подобного набора технологических инструментов. Одновременно у вас может быть только один специнструмент: после создания нового старый можно использовать только как обычный набор инструментов, из которого тот ранее был сделан, и нельзя применять для трюков механика.",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Способность класса",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Трюк механика",
    descr: "As you gain experience, you learn tricks that allow you to perform wonders of engineering, aid in electronic infiltrations, and optimize gear. While some of these are things you learn, others are small cybernetic enhancements you make to yourself (none of which have a price or count against your augmentation limits). Some tricks require the use of a custom rig or other gear.\nYou learn your first mechanic trick at 2nd level, and you learn an additional mechanic trick at 4th level and every 2 levels thereafter. If a mechanic trick allows an opponent a saving throw to resist its effects, the DC is equal to 10 + half your mechanic level + your Intelligence modifier. If a mechanic trick requires an opponent to attempt a skill check, the DC is equal to 10 + 1-1/2 × your class level + your Intelligence modifier.\nUnless otherwise specified, you can\’t learn mechanic tricks more than once. ",
    lvl: 2,
    type: "Класс",
    subtype: "Механик, Способность класса",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Перегрузка",
    descr: "В качестве основного действия вы можете вызвать короткое замыкание в электронном устройстве (сюда относится большинство видов дистанционного энергитического оружия, а также оружие ближнего боя с особым свойством \’аккумуляторное\’) или одном улучшении брони, в результате чего оно выходит из строя на 1 раунд. Перегрузка не открывает закрытые двери, сейфы и прочие устройства, но на 1 раунд предотвращает их открывание кем бы то ни было. Для использования этой способности необходимо находиться рядом с устройством. Есди у вас есть дрон, вы можее применить эту способность на устройство рядом с ним. Если у вас есть экзокортекс со способностью беспроводной взлом, вы можете использовать перегрузку на любое электронное устройство в радиусе действия беспроводного взлома экзокортекса. Если вы применяете перегрузку на предмет или улучшение брони, находящееся в распоряжении кого-либо, владелец может попытаться пройти испытание Реакции, чтобы отменить эффект (СЛ = [10 + ½ вашего уровня механика + модификатор вашего Интеллекта]). Перегрузка не действует на андроидов, кибернетические импланты, дронов, силовую броню, роботов или существ с подтипом \’технологический\’ (все перечисленные существа и устройства экранированы от подобного воздействия), а также на предметы размером больше среднего. После перегрузки в устройстве остаётся остаточный заряд, в течение 1 минуты защищающий от повторной перегрузки.",
    lvl: 3,
    type: "Класс",
    subtype: "Механик, Способность класса",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Привычное оружие [Механик]",
    descr: "Вы получаете черту Привычное оружие для следующих типов оружия: Простое оружие ближнего боя, Короткоствольное. Если ваш Искусственный Интеллект - Экзокортекс, вы также получаете черту Привычное оружие для Длинноствольного оружия.",
    lvl: 3,
    type: "Класс",
    subtype: "Механик, Способность класса",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Удалённый взлом",
    descr: "Вы можете использовать специнструмент, чтобы совершать проверки Компьютеров и Инженерного дела на дистанции до 20 футов. На 7 уровне и каждые 2 уровня после этого дистанция увеличивается на 10 футов. Цель этой способности (либо существо, взаимодействующее или налюдающее за ней) может пройти проверку Внимания или Проницательности (СЛ = 10 + 1,5 x ваш уровень механика + модификатор вашего Интеллекта), чтобы понять, что это делаете именно вы.",
    lvl: 5,
    type: "Класс",
    subtype: "Механик, Способность класса",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Золотые руки",
    descr: "В качестве сопутствующего действия вы можете починить системы звездолёта либо усовершенствовать броню или оружие, чтобы повысить их эффективность. Для применения способности необходимо иметь беспрепятственный доступ к предмету или системе. Вы можете использовать эту способность один раз в день начиная с 7 уровня и один дополнительный раз за каждые 4 уровня механика после 7. Эффект способности зависит от предмета или системы, с которыми вы работаете.\nБроня: бонус +2 (усиление) к ККБ и ЭКБ брони на 1 минуту.\nОружие: бонус +2 (усиление) к проверкам атаки и урона этого оружия на 1 минуту.\nПовреждённый звездолёт: восстановите ПЗ в количестве равном шагу ПЗ базового корпуса корабля. Если в результатае количество ПЗ корабля поднимается выше одного или нескольких значений, кратных его критическому пределу, вы можете снизить серьёзность критических повреждений одной из систем (за каждое пройденное кратное значение) на одну категорию. Например, если КП звездолёта равен 8, а вы восстанавливаете 10 ПЗ, увеличивая их с 23 до 33 ПЗ, вы можете сделать вышедшую из строя систему сбоящей. Применение этой способности во время космического боя считается вашим действием в этом ходу и должно быть совершено на этапе ремонта.",
    lvl: 7,
    type: "Класс",
    subtype: "Механик, Способность класса",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Профессиональный инструмент",
    descr: "Вы улучшили специнструмент: после удачного взлома компьютера с его помощью вы можете отключить одно из установленных средств защиты (кроме сетевых экранов). Кроме этого, спец инструмент теперь может использоваться как любой специализированный инженерный или хакерский набор уровнем 6 и ниже и обладает возможностями компьютера с рангом, равным ½ вашего уровня, и установленным укреплённым корпусом, модулем искуственной личности или безопасности I. На него можно установить дополнительные модули или средства защиты по обычным ценам. Помимо этого, специнструмент оснащается средствами аудио- и видеозаписи.\nС помощью спец инструмента вы также можете создать защищённый канал связи с вашим звездолётом, что позволяет использовать его локальные базы данных и передатчик на дистанции до 5 миль. Если у вас есть дрон, вы можете отдавать приказы его ИИ или напрямую управлять им на таком же расстоянии.",
    lvl: 7,
    type: "Класс",
    subtype: "Механик, Способность класса",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Перехват управления",
    descr: "Ваша классовая особенность перегрузка теперь действует на андроидов, роботов и существ с подтипом \’технологический\’, которые должны пройти испытание Воли (СЛ = [10 + ½ вашего уровня механика + модификатор вашего Интеллекта]). При провале существо впадает в ступор на 1 раунд, а в случае провала на 10 и более – не впадает в ступор, но в течение 1 раунда выполняет ваши приказы, кроме явно самоубийственных. Существо, попытавшееся пройти испытание против этой способности (вне зависимости от результата), невосприимчиво к этой атаке на 24 часа.",
    lvl: 9,
    type: "Класс",
    subtype: "Механик, Способность класса",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Слаженная атака",
    descr: "If you have a drone, whenever both you and your drone make attacks against the same target, you each receive a +1 circumstance bonus to your attack rolls. If you have an exocortex instead, whenever you and your exocortex are both attempting to hack a system, you each receive a +1 circumstance bonus to the checks to gain access. In either case, these bonuses increase to +2 at 17th level.",
    lvl: 11,
    type: "Класс",
    subtype: "Механик, Способность класса",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Улучшенный инструмент",
    descr: "Your custom rig\’s computer functions gain a bonus firewall countermeasure. This firewall has no additional cost, does not count against the maximum number of countermeasures your custom rig can have, and can block off a module or group of modules already protected by a firewall.\nIn addition, you can use your custom rig to communicate over an encrypted channel with your ship, allowing you to access the ship\’s sensors, control its security systems, and prepare its engines for takeoff (as well as use the encrypted communications functions of your expert rig) at a range of 50 miles. If you have a drone, you can issue commands to or directly control your drone over an encrypted channel at the same range.",
    lvl: 13,
    type: "Класс",
    subtype: "Механик, Способность класса",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Распределённое управление",
    descr: "You are capable of operating multiple AIs, one in a drone and one in an exocortex. You must divide up your mechanic level between these different AIs, and each gains abilities based on the number of levels you assign to it. Every time you gain a level in mechanic, you can change the distribution of levels between these AIs using your custom rig after 24 hours of uninterrupted work. While each AI can act independently to the limits of its ability, you can control them as normal (although you can directly control only one AI at a time). If the number of levels assigned to your exocortex is less than your mechanic level, your exocortex grants a smaller increase to your base attack bonus when using combat tracking, as noted below. You gain additional exocortex abilities, such as wireless hack and multitasking, based upon the level you assign to it as normal.\nIncrease to Base Attack Bonus: Levels 1-4: +1; levels 5-8: +2; levels 9-12: +3; levels: 13-16: +4; levels 17-20: +5.",
    lvl: 17,
    type: "Класс",
    subtype: "Механик, Способность класса",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Превосходный инструмент",
    descr: "Your custom rig\’s computer functions now gain bonus lockout and wipe countermeasures. You can use your custom rig normally even when its lockout is active (you have special authorization no one else can access under any circumstances), and while any wiped data cannot be recovered by anyone else (as if the data module were destroyed), you can automatically recover it with 8 hours of work. These countermeasures have no additional cost and do not count against the maximum number of countermeasures your custom rig can have.\nAdditionally, you can use your custom rig to communicate over an encrypted channel with your ship at a range encompassing a planet and its close orbit, allowing you to remotely pilot your starship from point to point on the same planet or to and from orbit (as well as use the encrypted communications functions of your expert and advanced rig at the same range). If you have a drone, you can issue commands to or directly control your drone over an encrypted channel at the same range.",
    lvl: 19,
    type: "Класс",
    subtype: "Механик, Способность класса",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Призрак в машине",
    descr: "When using your override class feature to affect an android, drone, robot, or creature with the technological subtype, a target that fails its saving throw by any amount is not dazed, and you can instead dictate its actions for the next round. These actions can\’t be obviously self-destructive. Once a creature has attempted a saving throw against this attack (regardless of the result), it is immune to this attack for 24 hours unless you spend 1 Resolve Point. You can continue to spend Resolve Points in this manner each round to make the creature susceptible to override again.",
    lvl: 19,
    type: "Класс",
    subtype: "Механик, Способность класса",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Мастер технологий",
    descr: "Your custom rig\’s computer functions gain a bonus firewall countermeasure. This firewall has no additional cost, does not count against the maximum number of countermeasures your custom rig can have, and can block off a module or group of modules already protected by a firewall.\nIn addition, you can use your custom rig to communicate over an encrypted channel with your ship, allowing you to access the ship\’s sensors, control its security systems, and prepare its engines for takeoff (as well as use the encrypted communications functions of your expert rig) at a range of 50 miles. If you have a drone, you can issue commands to or directly control your drone over an encrypted channel at the same range.",
    lvl: 20,
    type: "Класс",
    subtype: "Механик, Способность класса",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Модуль памяти",
    descr: "You can use your exocortex\’s memory module to enhance your own knowledge. Once per day, as a reaction while not in combat, you can reroll a failed skill check to recall knowledge. In addition, your exocortex grants you the Skill Focus feat as a bonus feat. You can\’t use your exocortex\’s memory module while combat tracking is activated. Every time you gain a mechanic level, you can rebuild your exocortex\’s memory module, replacing the exocortex\’s bonus Skill Focus feat with Skill Focus in a different skill.",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Способность экзокортекса, Экзокортекс",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Система отслеживания целей",
    descr: "Your exocortex provides you with enhanced combat ability, granting you proficiency with heavy armor and longarms. At 3rd level, you gain weapon specialization in longarms just as if your class granted proficiency. As a move action during combat, you can designate a foe for your exocortex to track. As long as that target is in sight, the exocortex feeds you telemetry, vulnerabilities, and combat tactics, allowing you to make attacks against that target as if your base attack bonus from your mechanic levels were equal to your mechanic level. Designating another target causes you to immediately lose this bonus against the previous target.",
    lvl: 1,
    type: "Класс",
    subtype: "Механик, Способность экзокортекса, Экзокортекс",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Беспроводной взлом",
    descr: "В раунд, когда вы не использовали систему отслеживания целей, экзокортекс может получить доступ к компьютерной системе в пределах 20 футов, что позволяет ему в каждом раунде пытаться пройти проверку Компьютеров против этой системы, используя ваш бонус навыка. Для выполнения задач навка Компьютеры такая проверка учитывается как основное действие. На протяжении всего премени взаимодействия экзокортекса с компьютером необходимо находиться в пределах 2 футов от компьютерной системы. Если для завершения задачи требуется несколько действий (или даже раундов_, вы можете работать совместно с экзокортексом. Если у вас нет классовой особенности удалённый взлом, то вы должны находиться рядом с компьютером, чтобы совершать проверки.",
    lvl: 5,
    type: "Класс",
    subtype: "Механик, Способность экзокортекса, Экзокортекс",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Модификация экзокортекса",
    descr: "Your exocortex allows you to apply any one of the following drone mods to yourself as if you were a drone with that mod installed: armor slot, cargo rack, climbing claws, enhanced senses, hydrojets, jump jets, resistance, smuggler\’s compartment, speed, or weapon proficiency (gaining proficiency in advanced melee or heavy weapons). At 11th level, you can apply an additional mod, and your options expand to include echolocators, excavator, flight system, greater resistance, invisibility field, and reactive camouflage. At 14th and 17th levels, you can apply an additional mod. Each time you gain a level, you can switch any of your mods for different mods, but you must always choose at least one mod from the 7th-level list.",
    lvl: 7,
    type: "Класс",
    subtype: "Механик, Способность экзокортекса, Экзокортекс",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Двухпотоковое отслеживание",
    descr: "Вы можете использовать экзокортекс для отслеживания двух целей одновременно, чтобы увеличить БМА против них. Вы можете выбрать одновременно обе цели, протратив одно сопутствующее действие, но при этом вы должны их видеть.",
    lvl: 10,
    type: "Класс",
    subtype: "Механик, Способность экзокортекса, Экзокортекс",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Многозадачность",
    descr: "You can designate three targets for your exocortex to track (and designate them all as a single move action). In addition, the range of your exocortex\’s wireless hack increases to 40 feet. Your exocortex can also engage in combat tracking and hack a nearby computer at the same time, but the computer counts as one of the exocortex\’s designated targets (allowing you to track only two targets at the same time while wirelessly hacking the computer). Lastly, you can access your exocortex\’s memory module in combat, even while it is engaged in combat tracking.",
    lvl: 15,
    type: "Класс",
    subtype: "Механик, Способность экзокортекса, Экзокортекс",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Четырёхпотоковое отслеживание",
    descr: "Your exocortex can track four targets simultaneously, and hacking a nearby computer doesn\’t count against that limit.",
    lvl: 20,
    type: "Класс",
    subtype: "Механик, Способность экзокортекса, Экзокортекс",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Быстрая починка предмета",
    descr: "When you attempt to repair an item, you can do so in half the time normally required (to a minimum of a full action).",
    lvl: 2,
    type: "Класс",
    subtype: "Механик, Трюк механика",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Быстрый временный ремонт",
    descr: "When you attempt to patch a system on a starship, you reduce the number of actions required to do so by one. This does not reduce the time needed to patch a glitching system, but you can patch two systems with one action.",
    lvl: 2,
    type: "Класс",
    subtype: "Механик, Трюк механика",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Взлом каталога",
    descr: "Whenever you attempt to hack a system and fail the check, you immediately become aware of any countermeasures that were activated due to your failure. You can then select one of these countermeasures and attempt another Computers check (with the same DC as the original). If you succeed at this second check, you can prevent that countermeasure from activating, as if you had not attempted to access the system at all. Any other countermeasures have their normal effect.",
    lvl: 2,
    type: "Класс",
    subtype: "Механик, Трюк механика",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Видеопроцессор",
    descr: "You notice even the smallest shifts in movement, temperature, and vibration, gaining the insight bonus from your bypass class feature to Perception skill checks.",
    lvl: 2,
    type: "Класс",
    subtype: "Механик, Трюк механика",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Дополнительная мощность",
    descr: "В качестве основного действия вы можете использовать свой специнструмент, чтобы атаковать дистанционным энергетическим оружием или аккумуляторным оружием ближнего боя, которое вы держите в руках, предварительно усилив мощность. При попадании вы дополнительно наносите 1d6 урона того же типа, что обычно наносит оружие. Для совершения такой атаки требуется в три раза больше зарядов аккумулятора или энергоячейки, чем обычно, и её нельзя совершить, если зарядов недостаточно. трюк не действует на оружие, не использующее аккумуляторы или энергоячейки в качестве сопутствующего действия, чтобы коснуться бесхозного оружия или оружие в распоряжении союзника и добавить вышеописанный эффект следующей атаке, совершаемой этим оружием до начала вашего следующего хода.",
    lvl: 2,
    type: "Класс",
    subtype: "Механик, Трюк механика",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Нейронный сброс",
    descr: "Once per day, as a reaction when you fail a saving throw against a mind-affecting effect, you can shunt that effect into your exocortex instead. When you do so, you are not affected by the mind-affecting effect, but for the normal duration of that effect, you lose the Skill Focus feat granted by your exocortex\’s memory module and cannot use any of the exocortex\’s abilities in any way (including any proficiencies and mods it grants you). When a mind-affecting effect is shunted into the exocortex, spells such as dispel magic or break enchantment can be cast on you to end the effect as if you were affected by it. Once the duration of the mind-affecting effect has ended, your exocortex resumes its normal functions. You must have an exocortex to learn this trick.",
    lvl: 2,
    type: "Класс",
    subtype: "Механик, Трюк механика",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Оружейная перегрузка",
    descr: "As a full action or as a move action by spending 1 Resolve Point, you can cause a powered weapon (either a ranged energy weapon or a melee weapon with the powered special property) in your possession to explode. You can use the weapon as if it were a grenade of the weapon\’s item level or lower dealing the weapon\’s normal damage type, except the weapon has a range increment of only 10 feet unless it is a thrown weapon. If someone tries to attack with the weapon, it explodes as a grenade would instead, centered on the user, and the user doesn\’t receive a Reflex save to negate the grenade\’s effect (if any). Once you\’ve primed a weapon to explode in this way, it\’s difficult to reverse the effect, requiring 8 hours of work and a successful Engineering check (DC = 15 + your Engineering bonus); failing the check by 5 or more detonates the weapon. Once detonated, the weapon is destroyed, just like a grenade.",
    lvl: 2,
    type: "Класс",
    subtype: "Механик, Трюк механика",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Отвлекающий взлом",
    descr: "You can hack a computer within 30 feet of a foe to distract that foe, such as with a sudden noise or an image. You must be able to access the computer (whether it is your own computer or you are within range to access one manually or via remote hack). This functions as a feint action except that it uses your Computers skill instead of Bluff, so you can apply the benefits of Improved Feint and Greater Feint if you have them.",
    lvl: 2,
    type: "Класс",
    subtype: "Механик, Трюк механика",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Переносной аккумулятор",
    descr: "You can use your custom rig to supply limited power for up to 1 minute to a computer or starship system that lacks power. If this system is part of a much larger network, this trick does not supply power to the entire network, just to a limited point of access (typically a terminal), which might greatly limit functionality. Once you have used portable power on a system, you cannot do so again on that system for 24 hours.",
    lvl: 2,
    type: "Класс",
    subtype: "Механик, Трюк механика",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Разгон",
    descr: "You have augmented the performance of your AI for maximum response timing. You gain a +2 insight bonus to initiative checks, and either you (if you have an exocortex) or your drone (if you have a drone) gains a +2 insight bonus to Reflex saves.",
    lvl: 2,
    type: "Класс",
    subtype: "Механик, Трюк механика",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Ремонт дрона",
    descr: "When you repair your drone, you repair 25% of its maximum Hit Points instead of 10%. You must have a drone to learn this trick.",
    lvl: 2,
    type: "Класс",
    subtype: "Механик, Трюк механика",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Система ночного видения",
    descr: "Your visual data processor allows you to see better in conditions of poor lighting, granting you low-light vision and darkvision to a range of 60 feet. You must have the visual data processor mechanic trick to learn this trick.",
    lvl: 2,
    type: "Класс",
    subtype: "Механик, Трюк механика",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Энергетический щит",
    descr: "В качестве основного действия вы можете использовать специнструмент, чтобы создать вокруг себя энергетический щит. щит даёт вам временные ПЗ в количестве, равном модификатору вашего Интеллекта + вашему уровню механика. Щит действует на протяжении 1 минуты за каждый уровень механика или пока у него не закончатся временные ПЗ (в зависиомсти от того, что случится раньше). Создав энергетический щит, вы не можете использовать его повторно, пока не потратитве 1 ПР для 10-минутного отдыха с целью восстановления ПЖ. Во время этого отдыха ваш щит автоматически отключается.",
    lvl: 2,
    type: "Класс",
    subtype: "Механик, Трюк механика",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Гиперразгон",
    descr: "When you repair your drone, you repair 25% of its maximum Hit Points instead of 10%. You must have a drone to learn this trick.",
    lvl: 8,
    type: "Класс",
    subtype: "Механик, Трюк механика",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Голографический проектор",
    descr: "Your custom rig can project holographic images as a standard action as often as you like, as per 2nd-level holographic image except it can create speech and has a range of only 120 feet.",
    lvl: 8,
    type: "Класс",
    subtype: "Механик, Трюк механика",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Дополнительная мощность+",
    descr: "Урон от трюка дополнительная мощность увеличивается до 2d6. Для изучения этого трюка необходимо предварительно изучить дополнительную мощность.",
    lvl: 8,
    type: "Класс",
    subtype: "Механик, Трюк механика",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Намётанный глаз",
    descr: "When you are within 10 feet of a trapped or malfunctioning machine or computer, you receive a free Computers, Engineering, or Perception check (as decided by the GM) to notice the trap or defect, whether or not you are actively looking. In addition, due to your intimate knowledge of your ship, you receive one of these checks whenever you board your ship to notice if anything is wrong with the ship\’s systems.",
    lvl: 8,
    type: "Класс",
    subtype: "Механик, Трюк механика",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Незаметный взлом",
    descr: "Whenever you use the Computers skill to access a system and you fail to overcome its defenses by 4 or less, you do not trigger any countermeasures and there is no log of your attempt. If you fail by 5 or more, any countermeasures take effect against you as normal.",
    lvl: 8,
    type: "Класс",
    subtype: "Механик, Трюк механика",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Разведбот",
    descr: "You\’re always crafting rudimentary bots in your spare time, and can use them to scout. It takes you 10 minutes and 1 Resolve Point to create a scoutbot. A scoutbot is a Small technological construct, its EAC and KAC are equal to 10 + your mechanic level, and it has 1 Hit Point per mechanic level you have (and no Stamina Points). It has a land speed of 30 feet, and you can control its movements with your custom rig as a move action. It has a camera that streams visual and auditory data back to your rig. The scoutbot uses your saving throw bonuses if necessary. It is untrained in all skills and has a +0 bonus in all of them, though you can use your own Perception skill when examining the feed from its stream. Once created, the scoutbot lasts for 1 minute per mechanic level you have before falling apart unless otherwise destroyed.",
    lvl: 8,
    type: "Класс",
    subtype: "Механик, Трюк механика",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Система обнаружения невидимости",
    descr: "Your visual data processor now allows you to see invisible creatures as per see invisibility. You must have the visual data processor mechanic trick to learn this trick.",
    lvl: 8,
    type: "Класс",
    subtype: "Механик, Трюк механика",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Слияние с дроном",
    descr: "As a full action while in contact with your drone, you can reconfigure it into a mechanical drone suit (or a backpack-like apparatus, for the Tiny hover drone) that you can wear. While in this form, the drone can\’t take any actions or use any of its abilities, but you gain either the drone\’s flight system mods if you have a hover drone, reactive camouflage (and an invisibility field if your drone has it) if you have a stealth drone, or reductive plating if you have a combat drone. You can end the meld and return the drone to its normal form as a full action. Though it normally acts on your turn just after you, the drone can take no actions on that turn other than transforming back.",
    lvl: 8,
    type: "Класс",
    subtype: "Механик, Трюк механика",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Усиленный щит",
    descr: "Your energy shield grants you a number of temporary Hit Points equal to your Intelligence modifier + double your mechanic level. In addition, if you have already used your shield, you can spend 1 Resolve Point to use it again without having to regain Stamina Points first. This replenishes your shield\’s temporary Hit Points to full. You must have the energy shield mechanic trick to learn this trick.",
    lvl: 8,
    type: "Класс",
    subtype: "Механик, Трюк механика",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Энергетическая устойчивость",
    descr: "Энергитический щит частично защищает вас, даже когда отключён. Вы получаете устойчивость 5 к одному типу энергии: звуку, кислоте, огню, холоду или электричеству. для изучения этого трюка необходимо предварительно изучить энергетический щит.",
    lvl: 8,
    type: "Класс",
    subtype: "Механик, Трюк механика",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Диверсант",
    descr: "Whenever you use the Engineering skill to sabotage or disable a device, you can roll twice and take the better result. In addition, if you have the appropriate tools (including your custom rig), performing these tasks takes half the normal amount of time, to a minimum of 1 move action.",
    lvl: 14,
    type: "Класс",
    subtype: "Механик, Трюк механика",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Дополнительная модификация",
    descr: "If you have a drone, your drone gains an additional basic mod. If you have an exocortex, you gain an additional basic mod. It can\’t be a basic mod taken a second time as an advanced mod. You can rebuild this extra mod when you gain a mechanic level as with any other mod, but you can\’t rebuild this mod to convert it into the advanced version of the mod.",
    lvl: 14,
    type: "Класс",
    subtype: "Механик, Трюк механика",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Дополнительная мощность++",
    descr: "The additional damage of the overcharge mechanic trick increases to 4d6. You must have the overcharge and improved overcharge mechanic tricks to learn this trick. You can select this trick multiple times. Each time you do after the first, increase the damage by 1d6 (to a maximum of 7d6 if you select it all four times).",
    lvl: 14,
    type: "Класс",
    subtype: "Механик, Трюк механика",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Моддер",
    descr: "You can spend 24 hours of uninterrupted work to exchange all your drone or exocortex mods at any time, even if you haven\’t gained a level. Any other drone features (such as its chassis or bonus feats) can still be exchanged only when you gain a level.",
    lvl: 14,
    type: "Класс",
    subtype: "Механик, Трюк механика",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Система наложения изображений",
    descr: "As a move action, you can use your custom rig\’s holographic projector to project a holographic image in a direct overlay over an invisible creature within 120 feet, and your custom rig\’s computer moves the image to follow the invisible creature, effectively negating the creature\’s invisibility as long as it remains within 120 feet of you. If it moves beyond that range, it breaks the effect until you use this ability again. You must have the holographic projector, invisibility bypass processor, and visual data processor mechanic tricks to learn this trick.",
    lvl: 14,
    type: "Класс",
    subtype: "Механик, Трюк механика",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Ультраразгон",
    descr: "If you have a drone, you can grant the effects of haste to your drone for 1 minute as a move action. If you have an exocortex, you can gain the effects of haste for 1 minute as a move action. Once you or your drone has used this ability, you cannot use it again until you spend 1 Resolve Point to regain Stamina Points from a 10-minute rest. You must have the overclocking and hyperclocking mechanic tricks to learn this trick.",
    lvl: 14,
    type: "Класс",
    subtype: "Механик, Трюк механика",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Энергетическая устойчивость+",
    descr: "Выберите дополнительный тип энергии из списка, приведённого в описании трюка энергитическия устойчивость. Вы получаете устойчивость 15 против этого и ранее выбранного для трюка энергитическая устойчивость типа энергии. Для изучения этого трюка необходимо предварительно изучить энергитический щит и энергитическую устойчивость.",
    lvl: 14,
    type: "Класс",
    subtype: "Механик, Трюк механика",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Акашиец",
    descr: "You\’re linked to the collective knowledge of every sentient species that ever lived that\’s held in the Akashic Record, an Astral library of perfect psychic records of every moment in history. You might be an ancient lorekeeper, an inquisitive student of the occult, an intuitive consulting detective, or a secret-hoarding spy.\nAssociated Deities: Eloritu, Nyarlathotep, Pharasma, Talavet, Triune, Weydan, Yaraesa\nНавыки: Культура; Мистицизм.\nЗаклинания: 1 – Опознание, 2 – Предвидение, 3 – Полиглот, 4 – Прорицание, 5 – Связь с иным планом, 6 – Видение.",
    lvl: 1,
    type: "Класс",
    subtype: "Мистик, Дарование",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Владыка",
    descr: "You realize that not all connections are symmetrical, and seek to be the dominant force in any situation. You aren\’t necessarily evil; perhaps you consider yourself a benevolent philosophermonarch who takes control for the good of your charges. You might also be a cult leader, a criminal mastermind, or a hypnotist.\nAssociated Deities: Abadar, Besmara, Damoritosh, Lao Shu Po, Zon-Kuthon\nНавыки: Дипломатия; Запугивание.\nЗаклинания: 1 – Приказ, 2 – Паралич (гуманоид), 3 – Внушение, 4 – Замешательство, 5 – Подчинение гуманоида, 6 – Внушение, массовое.",
    lvl: 1,
    type: "Класс",
    subtype: "Мистик, Дарование",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Звёздный шаман",
    descr: "Your connection channels the energy of the cosmos, its celestial bodies, and the dark voids between them. You might be a brilliant astronomer, a daredevil starpilot, a Drift explorer, a prophetic astrologer, or a would-be transhuman godling.\nAssociated Deities: Desna, Ibra, Nyarlathotep, Sarenrae, The Devourer, Triune\nНавыки: Внимание; Пилотирование.\nЗаклинания: 1 – Волшебная стрела, 2 – Ночное зрение, 3 – Облучение, 4 – Устранение радиации, 5 – Телекинез, 6 – Власть над гравитацией.",
    lvl: 1,
    type: "Класс",
    subtype: "Мистик, Дарование",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Ксенодруид",
    descr: "You channel the energy inherent in the ecosystems around you, taking inspiration from the endless cycles of the natural world. You might be a corporate biotech researcher, a hermitic shaman of the Green Faith, or one of the legendary Xenowardens.\nAssociated Deities: Green Faith (Philosophy), Oras\nНавыки: Биологические науки; Выживание.\nЗаклинания: 1 – Защитная оболочка, 2 – Облако тумана, 3 – Прикосновение энтропии, 4 – Реинкарнация, 5 – Единение с природой, 6 – Терраформирование.",
    lvl: 1,
    type: "Класс",
    subtype: "Мистик, Дарование",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Опустошитель",
    descr: "С вашей точки зрения, ничто не имеет ценности, и поэтому ценно лишь ничто. Вы посвящаете себя разрушению бытия во всех его проявлениях, от жизней конкретных существ до структуры общества и ткани самой реальности. Вы стремитесь к разрушению любыми методами и черпаете силу, отнимая жизни.\nБожества: Азатот, Гротус, Даморитош, Ламашту, Пожиратель.\nНавыки: Внимание; Запугивание.\nЗаклинания: 1 – Плотоядность, 2 – Кислотная среда, 3 – Вирусная активность, 4 – Истощение, 5 – Сокрушение черепа, 6 – Гравитационная сингулярность.",
    lvl: 1,
    type: "Класс",
    subtype: "Мистик, Дарование",
    category: null,
    requirement: null,
    source: "СП-02"
},
{
    name: "Сокрушитель разума",
    descr: "You use your raw will and understanding of the mind\’s structure to crush and demoralize your enemies. You might be a special ops assassin, a psychic interrogator, or a righteous military crusader breaking the enemy\’s spirit on the battlefield.\nAssociated Deities: Besmara, Damoritosh, Iomedae, The Devourer, Urgathoa, Zon-Kuthon\nНавыки: Блеф; Запугивание.\nЗаклинания: 1-6 – Удар по разуму; заменяется на 1 – Замешательство, низшее, 2 – Причинение боли, 3 – Нейронный импульс, 4 – Замешательство, 5 – Слабоумие.",
    lvl: 1,
    type: "Класс",
    subtype: "Мистик, Дарование",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Целитель",
    descr: "Ваше дарование позволяет вам управлять силами жизни и смерти. Вы опытный целитель, но это вовсе не означает, что вами движет исключительно человеколюбие и вы бескорыстны. Вы можете быть странствующим врачом, одолеваемым духами медиумом, военным медиком или деспотичным некромантом.\nБожества: Вейдан, Дезна, Иомедей, Саренрэй, Телавет, Уратоа, Фаразма, Хайлакс\nНавыки: Медицина; Мистицизм.\nЗаклинания: 1-6 – Мистическое исцеление; заменяется на 1 – Избавление, низшее, 2 – Избавление, 3 – Исцеление от недуга, 4 – Восстановление, 5 – Высшее избавление.",
    lvl: 1,
    type: "Класс",
    subtype: "Мистик, Дарование",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Эмпат",
    descr: "Your connection helps you sense emotions and notice details others can\’t. You might be a diplomat, an investigator, a mind-reading bodyguard, a ship\’s psychologist, or a psychic con artist.\nAssociated Deities: Abadar, Hylax, Iomedae, Sarenrae, Talavet, Triune (Casandalee)\nНавыки: Внимание; Проницательность.\nЗаклинания: 1 – Обнаружение мыслей, 2 – Место истины, 3 – Яснослышание/ясновидение, 4 – Зондирование памяти, 5 – Телепатия, 6 – Истинное зрение.",
    lvl: 1,
    type: "Класс",
    subtype: "Мистик, Дарование",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Кровавая метка",
    descr: "Всякий раз, когда вы убиваете или уничтожаете существо или снижаете его ПЗ до 0, на вашей коже немедленно появляется кровавая метка, выглядящая как кроваво-красная спираль чёрной дыры. Время действия метки в раундах равно модификатору вашей Мудрости (минимум 1 раунд). Метка настраивается против существ того же типа, что и существо, которое вы убили, уничтожили или довели до 0 ПЗ, и даёт вам одно из следующих преимуществ на выбор: бонус +1 (боевой дух) к КБ против атак по существам этого типа, бонус +1 (боевой дух) к испытаниям против атак существ этого типа, бонус +1 (боевой дух) к испытаниям против атак и эффектов, созданных существами этого типа, или бонус +1 (боевой дух) к урону по существам этого типа. Вы получаете бонус одновременно с меткой, и он сохраняется, пока метка действует. Одновременно у вас может быть не больше одной метки, при получении новой действие предыдущей немедленно завершается.",
    lvl: 1,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Опустошитель",
    category: "СВ",
    requirement: null,
    source: "СП-02"
},
{
    name: "Неведомые приказания",
    descr: "When one of your mind-affecting charm or compulsion spells or spell-like abilities ends, the target loses all memory that it was magically controlled or influenced. That creature still remembers the actions it took, but may be confused by them.",
    lvl: 1,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Владыка",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Память Акаши",
    descr: "You gain the channel skill ability at 1st level (instead of 2nd level). Each day when you recover your spell slots, you can tap into the Akashic Record, enabling you to choose one Profession skill and add that to your list of associated skills for the channel skill class feature.",
    lvl: 1,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Акашиец",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Проведение исцеляющей энергии",
    descr: "You can heal yourself and your allies. You can spend 1 Resolve Point to channel this energy. Healing yourself with channeled energy is a move action, healing an ally you touch is a standard action, and healing all allies within 30 feet is a full action. This energy restores 2d8 Hit Points and increases by 2d8 at 3rd level and every 3 levels thereafter.",
    lvl: 1,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Целитель",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Прогулка в пустоте",
    descr: "You are immune to the harmful environmental effects of outer space and vacuum. You also gain a fly speed of 20 feet while in space. In addition, whenever you can see the stars, you can determine your precise location. Finally, add Piloting to your list of class skills.",
    lvl: 1,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Звёздный шаман",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Разговор с животными",
    descr: "You can communicate with any creature of the animal type, though this doesn\’t make it friendly. If an animal is friendly toward you, it may do you favors. This ability allows you to use Intimidate to bully animals, and you can use any other language-dependent effect against animals.",
    lvl: 1,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Ксенодруид",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Разделение боли",
    descr: "Когда противник наносит вам урон, вы можете в качестве ответного действия потратить 1 ПО, чтобы вернуть ему часть урона. Если противник провалит испытание Воли, наносимый урон снижается на значение, равное вашему уровню мистика (но не ниже 0), а противник получает столько же урона. Это эффект с дескриптерами \’боль\’ и \’разум\’.",
    lvl: 1,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Сокрушитель разума",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Эмпатия",
    descr: "As a full action, you can attempt a Sense Motive check to read the emotions of a particular creature (DC = 20 or 10 + its Bluff modifier, whichever is higher). If you succeed, you learn its general disposition and attitude toward creatures within 30 feet of it, and you gain a +2 circumstance bonus to Bluff, Diplomacy, Intimidate, and Sense Motive checks against that creature for 1 hour. Whether you succeed or fail, after opening your mind to read emotions, you take a –2 penalty to saving throws against mind-affecting effects for 1 minute.",
    lvl: 1,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Эмпат",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Кровные узы",
    descr: "At the start of each turn, you can choose an ally within 30 feet who has taken Hit Point damage and transfer her wounds to yourself, dealing an amount of damage up to your mystic level to your Hit Points (bypassing any Stamina Points you may have) and healing the ally\’s Hit Points an equal amount. This doesn\’t require any action on your part. You can\’t prevent or reduce the damage you take from lifelink.",
    lvl: 3,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Целитель",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Отдача",
    descr: "Каждый раз, когда противник успешно проходит испытание Воли против одного из ваших заклинаний и полностью отменяет его эффект, он получает 1 пункт несмертельного урона за каждый ваш уровень мистика.",
    lvl: 3,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Сокрушитель разума",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Ползучие лианы",
    descr: "You can spend 1 Resolve Point as a standard action to cause an area within 100 feet to sprout writhing vines in a 20-foot-radius spread. The target surface must be solid but does not need to be capable of sustaining plants normally. The vines have a reach of 5 feet and attempt to wrap around creatures in the area of effect or those that enter the area; such a creature must succeed at a Reflex save or gain the entangled condition. Creatures that successfully save can move as normal, but those that remain in the area must attempt a new save at the end of your turn each round. Creatures moving into the area must attempt a save immediately; failure ends their movement and they become entangled. An entangled creature can break free as a move action with a successful Acrobatics check or DC 15 Strength check. The vines last for a number of rounds equal to your mystic level, and the entire area is difficult terrain while the effect lasts. At 11th level, the vines can reach 10 feet and sprout thorns that deal 1d6 piercing damage each round to creatures in the area.",
    lvl: 3,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Ксенодруид",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Принудительная дружба",
    descr: "You can spend 1 Resolve Point as a standard action to shunt positive emotions and thoughts through your connection, forcing a humanoid creature to become friendly to you for a time. This functions as charm person.",
    lvl: 3,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Владыка",
    category: "ПС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Разрушительное буйство",
    descr: "В качестве сопутствующего действия вы можете потратить ячейку мистика 1 круга и выше, чтобы впасть в разрушительное буйство. Вы получаете бонус к проверкам атаки и урона, совершаемых короткоствольным оружием и простым оружием ближнего боя. Величина бонуса к атаке: [круг потраченной ячейки - 2] (минимум +1), а величина бонуса к урону равна кругу потраченной ячейки. Длительность буйства в раундах: [круг потраченной ячейки + модификатор вашей Мудрости] (минимум 1). Буйство можно прервать досрочно без затрат действий. Во время разрушительного буйства вы не можете творить заклинания или использовать требующие затрат действия псевдозаклинания, экстраординарные и сверхъестественные способности.",
    lvl: 3,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Опустошитель",
    category: "ПС",
    requirement: null,
    source: "СП-02"
},
{
    name: "Связь разумов+",
    descr: "You can use your mindlink ability on the same creature as many times per day as you wish, and the communication can be both ways, though the maximum of 10 minutes of communication per round still applies.",
    lvl: 3,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Эмпат",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Форма света",
    descr: "You can transform yourself into blazing starlight as a standard action. Your body sheds normal light in a 30-foot radius, and you gain the benefits of concealment (20% miss chance). At 7th level, a creature that ends its turn adjacent to your starlight form must succeed at a Fortitude save or be blinded for 1 round. You can maintain your starlight form for a number of minutes per day equal to your mystic level; this duration does not need to be continuous, but it must be used in 1-minute increments. You can forgo the ability\’s concealment and blinding aspects to instead simply shed light, though this still counts against the ability\’s duration for the day.",
    lvl: 3,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Звёздный шаман",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Хроники Акаши",
    descr: "You can access the Akashic Record to augment your skills. You can spend 1 Resolve Point to attempt a skill check as if you had ranks in that skill equal to your mystic level.",
    lvl: 3,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Акашиец",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Видение будущего",
    descr: "Once per day, you can spend 10 minutes in uninterrupted meditation to receive visions of possible futures. At any point over the next 24 hours, you can declare that you are using the benefit of this ability before rolling one initiative check, saving throw, or skill check. You gain a +4 insight bonus to that check. At 11th level, you can use this ability twice per day, though you can\’t use it again until after you\’ve used your first bonus.",
    lvl: 6,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Акашиец",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Животная адаптация",
    descr: "As a standard action, you can modify your body. Choose one of the following to gain the noted benefit: elongated legs (increase your land speed by 10 feet), fins and webbed digits (granting you a swim speed equal to half your land speed), suckers on wrists and feet (granting you a climb speed equal to half your land speed), or vertical-slit pupils (granting you darkvision 60 feet). This ability lasts for a number of minutes per day equal to your mystic level; this duration doesn\’t need to be continuous, but it must be used in 1-minute increments. Your base form and size are largely unchanged, but some of your body parts are altered. Armor and gear you are wearing adjusts to your new shape for the duration of this ability. You can have only one of these adaptations active at a time; choosing a new adaptation is a standard action and the new choice replaces the old. At 12th level, the climb and swim speeds granted by your adaptation are equal to your land speed, and you add wings (granting you a fly speed of 30 feet with average maneuverability) to the list of possible adaptations.",
    lvl: 6,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Ксенодруид",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Звездочёт",
    descr: "You can study the stars to gain a bit of good luck. Twice per day, if you are outdoors and can see the stars, you can reroll a failed ability check, attack roll, saving throw, or skill check.",
    lvl: 6,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Звёздный шаман",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Зерно сомнения",
    descr: "В качестве основного действия вы можете потратить 1 ПР чтобы заронить зерно сомнения в разум противника в пределах 30 футов. Вы выбираете, какому эффекту подвергнется цель: застигнута врасплох, сбита с цели, штраф -2 к испытаниям или -2 к проверкам навыков. Длительность выбранного эффекта в раундах равна ½ вашего уровня мистика, но если цель успешно пройдёт испытание Воли, то он длится 1 раунд. на существо может воздействовать только один эффект зерна сомнения. Если вы повторно примените эту способность к тому же существу, новый эффект заменит предыдущий. Это эффект с дескриптором \’разум\’.",
    lvl: 6,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Сокрушитель разума",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Клятва целителя",
    descr: "As a standard action, you can form a bond with up to three allies, allowing you to constantly sense their condition as per the status spell. This bond lasts until dispelled or until you create a new healer\’s bond, which immediately ends the previous one. At 11th level, when you gain the telepathic bond class feature, you also gain the effects of status on all creatures linked by your telepathic bond.",
    lvl: 6,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Целитель",
    category: "ПС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Опустошительный удар",
    descr: "When you score a critical hit with an attack, you can spend 1 Resolve Point as a swift action to add the wound critical hit effect to the attack, replacing any other critical hit effect the attack has. If the attack would already have the wound critical hit effect, you can instead spend 1 Resolve Point to add the severe wound critical hit effect to the attack in place of other critical hit effects.",
    lvl: 6,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Опустошитель",
    category: "СВ",
    requirement: null,
    source: "СП-02"
},
{
    name: "Отголоски власти",
    descr: "Even creatures that resist your dominance can\’t shake the lingering echoes of your mind. When a creature succeeds at a saving throw against one of your mind-affecting charm or compulsion spells or spell-like abilities and negates the effect, it takes a –1 penalty to AC, attack rolls, and skill checks until the beginning of your next turn. This is a mind-affecting effect.",
    lvl: 6,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Владыка",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Чутьё на эмоции",
    descr: "You can share the good fortune of your stargazer class feature with your allies. Whenever an ally linked by your telepathic bond class feature fails an ability check, attack roll, saving throw, or skill check, you can spend 1 Resolve Point as a reaction to enable your ally to reroll the failed check. This ability otherwise functions as the stargazer class feature.",
    lvl: 6,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Эмпат",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Выявление лжи",
    descr: "You can use discern lies as a spell-like ability a number of times per day equal to your mystic level, each time targeting a single creature. This effect lasts 1 round. Once a creature successfully saves against this ability, it becomes immune to further uses of this ability for 24 hours.",
    lvl: 9,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Эмпат",
    category: "ПС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Зондирование памяти",
    descr: "You can use mind probe as a spell-like ability a number of times per day equal to your mystic level, lasting for 1 round. A creature that successfully saves against your mind probe is immune to further uses of this ability for 24 hours.",
    lvl: 9,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Акашиец",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Кража жизни",
    descr: "As a standard action, you can spend 1 Resolve Point to steal part of a creature\’s life force and transfer it to yourself or others. You must touch the target (requiring a successful melee attack against its EAC), which deals 1d6 damage for every 2 mystic levels you have (maximum 10d6). Choose an ally within 30 feet; that ally recovers an amount of Hit Points equal to the damage dealt (to a maximum of the foe\’s remaining Hit Points). Alternatively, you can heal yourself instead, but you restore only a number of Hit Points equal to half the damage dealt. If this heals the recipient (you or your ally) up to maximum Hit Points, any excess persists for 1 hour as temporary Hit Points. If your attack misses, you don\’t lose the Resolve Point.",
    lvl: 9,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Целитель",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Летающий свет",
    descr: "While in starlight form, you gain the ability to fly as per the flight spell (spell level 3rd or lower).",
    lvl: 9,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Звёздный шаман",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Ментальная боль",
    descr: "В качестве основного действия вы можете перенастроить центры болевой чувствительности в мозгу противника, находящегося на расстоянии до 60 футов, чтобы вызврать сильнейшую мигрень. При провале испытания Воли цель на 1 раунд становится мучимой тошнотой. Вне зависимости от успешности испытания существо становится невосприимчиво к этой способности на 24 часа. Это эффект с дескрипторами \’боль\’ и \’разум\’.",
    lvl: 9,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Сокрушитель разума",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Ответная устойчивость",
    descr: "The first time each day you would take energy damage, you immediately gain resistance 10 to that energy type for the remainder of the day. (If you are damaged by more than one energy type simultaneously, choose which type you resist.)",
    lvl: 9,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Ксенодруид",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Принудительная дружба+",
    descr: "Your forced amity ability functions as charm monster.",
    lvl: 9,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Владыка",
    category: "ПС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Пробой защиты",
    descr: "You can break a target\’s defenses. Once per day as a standard action, you can reduce the DR, energy resistances, and hardness of a single target by an amount equal to your mystic level (to a minimum of 0) for a number of rounds equal to your mystic level. The target can attempt a Fortitude saving throw to resist this effect (DC = 10 + half your mystic level + your Wisdom modifier). This ability can affect objects.",
    lvl: 9,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Опустошитель",
    category: "СВ",
    requirement: null,
    source: "СП-02"
},
{
    name: "Высшая кровавая метка",
    descr: "At 12th level, whenever an ally linked by your telepathic bond class feature kills or destroys a creature or reduces a creature to 0 HP, you can grant yourself or one other ally linked by your telepathic bond a greater blood mark. This functions as the blood mark connection ability (see above), but the bonus is +2 and the subject that gains the blood mark decides which of the benefits to gain. You cannot have more than one greater blood mark active at a time, and granting a new greater blood mark ends any previous greater blood mark you had active. A creature cannot benefit from more than one greater blood mark at a time or from a blood mark as well as a greater blood mark, though you can benefit from both your own blood mark and a greater blood mark.",
    lvl: 12,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Опустошитель",
    category: "СВ",
    requirement: null,
    source: "СП-02"
},
{
    name: "Исцеляющая связь",
    descr: "When you use healing channel as a standard action, you can heal an ally linked by your telepathic bond class feature as if you were touching that ally, as long as the ally is within 120 feet. When you use healing channel as a full action, it heals all allies linked by your telepathic bond class feature within 120 feet (as well as all other allies within 30 feet).",
    lvl: 12,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Целитель",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Общая устойчивость",
    descr: "As a standard action, you can spend 1 Resolve Point to grant allies linked by your telepathic bond class feature resistance 5 to the same energy type that you can resist through your reactive resistance class feature for 1 minute. You can\’t use this ability if your reactive resistance class feature has not yet been activated for the day.",
    lvl: 12,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Ксенодруид",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Разрушительная связь",
    descr: "Whenever you or an ally linked by your telepathic bond class feature scores a critical hit against a foe, you can spend 1 Resolve Point as a reaction to confuse that foe. The foe must succeed at a Will save or become confused for 1 round. Whether or not it succeeds at this save, the target is affected by your sow doubt ability for 1 round. This is a mind-affecting effect.",
    lvl: 12,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Сокрушитель разума",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Ревнивый владыка",
    descr: "When an ally linked by your telepathic bond class feature is subject to mind-affecting effect that issues commands, as a reaction you can issue a countermand allowing the linked ally to act normally. When you do, attempt an opposed Charisma check against the originator of the mind-affecting effect; if you succeed, your ally can act normally.",
    lvl: 12,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Владыка",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Счастливая звезда",
    descr: "You can share the good fortune of your stargazer class feature with your allies. Whenever an ally linked by your telepathic bond class feature fails an ability check, attack roll, saving throw, or skill check, you can spend 1 Resolve Point as a reaction to enable your ally to reroll the failed check. This ability otherwise functions as the stargazer class feature.",
    lvl: 12,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Звёздный шаман",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Телепатические воспоминания",
    descr: "You can share memories at will with allies linked by your telepathic bond class feature. As a full action, you or a linked ally can send a memory of up to 1 minute to as many others in the bond as they choose. Sending a relevant memory counts as a successful aid another attempt for a skill check, even if you wouldn\’t otherwise be able to use aid another (to a limit of one such memory per skill check).",
    lvl: 12,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Акашиец",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Чутьё на эмоции+",
    descr: "Your emotionsense is far more discerning, as if you had blindsight (emotion).",
    lvl: 12,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Эмпат",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Метеоритный дождь",
    descr: "You can spend 1 Resolve Point as a full action to call down a rain of meteorites in a 10-foot-radius vertical cylinder, 40 feet high, at a range of up to 250 feet. The meteorites deal 12d6 damage to every creature in the area (Reflex half). Half the damage is bludgeoning damage; the other half is fire damage. If you are outdoors and can see stars, the meteorites instead deal 12d10 damage.",
    lvl: 15,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Звёздный шаман",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Мистическая кровожадность",
    descr: "At 15th level, you gain renewed vigor when one of your foes is brought low. When you or an ally linked by your telepathic bond class feature scores a critical hit against a foe, as a reaction you can spend 1 Resolve Point to regain a number of Stamina Points equal to three times your mystic level, plus your Wisdom modifier (up to your maximum number of Stamina Points). Once you have benefited from mystic bloodlust, you can\’t gain the benefits from this ability again until you rest to recover Stamina.",
    lvl: 15,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Опустошитель",
    category: "ЭКС",
    requirement: null,
    source: "СП-02"
},
{
    name: "Неотвратимые приказания",
    descr: "When you use a mind-affecting charm or compulsion spell or spell-like ability against a target benefiting from an active spell that protects against your attack, you automatically become aware of the presence of such defenses, and can spend 1 Resolve Point as part of casting the spell to attempt a caster level check to dispel the highest-level such spell, as if you had cast dispel magic.",
    lvl: 15,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Владыка",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Проведение жизненной силы",
    descr: "If you use healing channel on a creature that has died within 1 round, you can bring it back to life as per a 5th-level mystic cure spell.",
    lvl: 15,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Целитель",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Путешествие сквозь растения",
    descr: "Once per day as a full action, you can enter any living plant equal to your size or larger and exit from another plant of the same kind in the same solar system, regardless of the distance separating the two. The destination plant does not need to be familiar to you. If you are uncertain of the location of a particular kind of destination plant, you merely designate direction and distance and this ability moves you as close as possible to the desired location. If a particular destination plant is desired but the plant is not living, this ability fails and you are ejected from the entry plant. You cannot travel through plant creatures. You can bring along objects as long as their bulk doesn\’t exceed your Strength score. You can also bring up to five willing Medium or smaller creatures (each carrying no more bulk than their Strength scores) with you, provided they are linked to you with joined hands.",
    lvl: 15,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Ксенодруид",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Ретрокогниция",
    descr: "You can use retrocognition as a spell-like ability at will. When doing so, you take a –2 penalty to saving throws against mind-affecting effects for as long as you concentrate on retrocognition and an equal amount of time afterward. You can spend 1 Resolve Point to negate this penalty.",
    lvl: 15,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Эмпат",
    category: "ПС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Убийственный образ",
    descr: "As a standard action, you can mold the subconscious fear of a foe within 60 feet into a psychic image of the most disturbing creature imaginable to the target. Only the target can see the mindkiller, and if the target succeeds at a Will save to recognize the image as unreal, the mindkiller has no effect. If the target fails this Will save, the mindkiller touches the target, which must then succeed at a Fortitude save or die from fear. On a successful Fortitude save, the target instead takes 3d6 damage. Once a creature succeeds at either save against this ability, it becomes immune to this ability for 24 hours. This is a mind-affecting fear effect.",
    lvl: 15,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Сокрушитель разума",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Чертоги разума",
    descr: "You assemble an extradimensional library to house mental constructs representing your accumulated knowledge. This memory palace has a single shimmering entrance. You can access your memory palace once per day; when you do, the entrance appears within close range. If any creatures or objects that were not part of the memory palace when it was created remain inside it, the entrance remains where it first appeared. Only those you designate can enter the memory palace, and the entrance closes and becomes invisible behind you when you enter. Anyone inside can open the entrance and exit the memory palace at will. The only way to enter and exit the memory palace is via the entrance; even plane shift and similar magic do not access it.\n\nYou can create any floor plan you desire for your memory palace, up to a number of 10-foot cubes equal to your mystic level. Inside, the atmosphere is clean, fresh, and warm; outside conditions don\’t affect the memory palace, nor do conditions inside it pass beyond. There is no furniture other than bookcases, computers, and a few desks and sofas. A number of unseen servants (as per the spell of the same name) equal to half your mystic level serve as librarians. The library keeps the same layout each time you access it, though you can alter its appearance each time you gain a level or by spending 15 minutes concentrating—you don\’t need to be inside it to alter it.\n\nWhen you gain this ability, choose one skill that can be used with the recall knowledge task. Consulting your memory palace gives anyone who studies within—including you—a +4 enhancement bonus to skill checks to recall knowledge of that type, and creatures inside the memory palace can attempt checks of that type untrained. At 16th level, and at each level thereafter, choose another skill that can be used with the recall knowledge task to which your memory palace\’s skill bonus applies.",
    lvl: 15,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Акашиец",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Безграничная власть",
    descr: "When you issue a command to a dominated creature that would force it to act against its nature, you can spend 1 Resolve Point to deny it a new saving throw against your domination. The dominated creature still won\’t carry out an obviously self-destructive order.",
    lvl: 18,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Владыка",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Взрыв мозга",
    descr: "You can spend 1 Resolve Point as a standard action to psychically assault the brain of a foe within 60 feet, causing incredible pressure to build in its head. If the target has 20 Hit Points or fewer, its head explodes, instantly killing the target and spreading debris in a 10-foot radius. Each creature in the area must succeed at a Reflex saving throw or take 2d6 slashing damage from the flying debris. A target with more than 20 Hit Points takes 1d6 damage per mystic level you have (maximum 20d6), but can attempt a Fortitude save to take only half damage. If this damage would reduce the target to 0 HP, the target\’s head explodes as described above. This ability works only on a creature that has a head and would die from the loss of a head.",
    lvl: 18,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Сокрушитель разума",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Круг опустошения",
    descr: "At 18th level, you can channel your destructive energies into a sphere of devastation around you. As a standard action, you can spend 1 Resolve Point to create a burst of energy in a 30-foot radius around you, dealing 12d10 force damage (Reflex half) to all creatures and objects in the area. Crackling residual energies turn the area into difficult terrain (even empty spaces in the air or vacuum around you) for 1 round per mystic level. You are not affected by this difficult terrain. You can use this ability a number of times per day equal to your Wisdom modifier.",
    lvl: 18,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Опустошитель",
    category: "СВ",
    requirement: null,
    source: "СП-02"
},
{
    name: "Мастер эмпатии",
    descr: "You can spend 1 Resolve Point to use psychic surgery as a spell-like ability. If you are incapacitated by an effect that psychic surgery could remove and have at least 1 Resolve Point remaining, you can spend 1 Resolve Point to use this ability on yourself, even without being able to take any actions.",
    lvl: 18,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Эмпат",
    category: "ПС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Межпланетная телепортация",
    descr: "At 18th level, once per day, you can spend 1 Resolve Point as a full action to use interplanetary teleport as a spell-like ability. If you have been to a location in another star system before, you can spend 2 Resolve Points to use interplanetary teleport to travel there, even though it exceeds the spell\’s normal range.",
    lvl: 18,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Звёздный шаман",
    category: "ПС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Отрицание смерти",
    descr: "You are immune to death effects and negative levels. If you would normally die from damage, as long as you have at least 1 Resolve Point remaining, you can immediately spend all of your remaining Resolve Points to instead stay alive. If your Hit Points would have been reduced to 0, you now have 1 Hit Point instead. Once you use this ability, you can\’t regain Resolve Points again until you rest for 8 hours, even if you have another means to do so.",
    lvl: 18,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Целитель",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Подсмотренное заклинание",
    descr: "Once per day, you can delve into the Akashic Record to cast a spell from either the mystic or technomancer spell list as if it were on your list of spells known. The spell consumes a spell slot 1 level higher than the level of the spell.",
    lvl: 18,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Акашиец",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Управляемое перерождение",
    descr: "As long as you have at least 1 Resolve Point remaining, you can spend all your remaining Resolve Points as a full action to surround yourself with an organic cocoon. While enclosed in the cocoon, you are considered helpless. Eight hours later, you emerge having changed your type to animal, humanoid (of any subtype), or your original type, gaining superficial physical characteristics as appropriate. This change does not alter your ability scores, Hit Points, Stamina Points, saving throws, skill points, class skills, or proficiencies. Each time you make this transformation, you are cleansed of all poisons and diseases, are restored to full Hit Points and Stamina Points, and heal all ability damage. You must select a type other than your current type every time you make the transformation. You can use this ability once per day. Once you use this ability, you can\’t regain Resolve Points until you rest for 8 hours, even if you have another means to do so.",
    lvl: 18,
    type: "Класс",
    subtype: "Мистик, Способность дарования, Ксенодруид",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Дарование",
    descr: "You have a mysterious connection with some force that grants you magical powers. The exact nature of your connection can vary widely, and even mystics who share the same connection may interpret it differently. You must pick one connection upon taking your first level of mystic—once made, this choice can\’t be changed.\nMany mystics serve as priests of various gods, and while you can theoretically choose any type of connection with any entity or concept, deities rarely grant connections that don\’t fit within their ethos (for example, Weydan, the god of freedom, is unlikely to look kindly on overlords). As such, each connection lists the deities and philosophies commonly associated with it. ",
    lvl: 1,
    type: "Класс",
    subtype: "Мистик, Способность класса",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Дарованная сила",
    descr: "At 1st level, 3rd level, and every 3 levels thereafter, you gain a connection power unique to your connection. If a connection power allows a saving throw to resist its effects, the DC is equal to 10 + half your mystic level + your Wisdom modifier. If the power requires an enemy to attempt a skill check, the DC is equal to 10 + 1-1/2 × your mystic level + your Wisdom modifier. ",
    lvl: 1,
    type: "Класс",
    subtype: "Мистик, Способность класса",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Дарованное заклинание",
    descr: "Your connection grants you additional spells known, one for each level of mystic spell you can cast, starting at 1st level and at any level when you normally gain access to a new spell level. These spells are in addition to the spells known. These spells can\’t be exchanged for different spells at higher levels (except in specific cases; see below). The spell level of each spell is listed in your connection\’s entry.\nIf your connection lists a single variable-level spell for all spell levels at the start of its spells entry, you gain that variable-level spell when you first get your connection spell for each level. The next time you gain a connection spell, add the next higher level of the variable-level spell to your list of spells known. You immediately lose the lower-level version of that variable-level spell and replace it with the listed connection spell for that lower level. ",
    lvl: 1,
    type: "Класс",
    subtype: "Мистик, Способность класса",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Исцеляющее прикосновение",
    descr: "Once per day, you can spend 10 minutes to magically heal an ally up to 5 Hit Points per mystic level. ",
    lvl: 1,
    type: "Класс",
    subtype: "Мистик, Способность класса",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Отголоски навыка",
    descr: "You draw strange feelings, instincts, knowledge, and urges from your connection, augmenting your prowess in certain tasks. Each connection has two skills associated with it. You gain a +1 insight bonus to skill checks with your connection\’s associated skills. This bonus increases by 1 at 5th level and every 3 levels thereafter. ",
    lvl: 2,
    type: "Класс",
    subtype: "Мистик, Способность класса",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Связь разумов",
    descr: "You can form a mental link with creatures you touch, communicating information rapidly through it. You can use mindlink at will as a spell-like ability, though only once per day on any given individual. ",
    lvl: 2,
    type: "Класс",
    subtype: "Мистик, Способность класса",
    category: "ПС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Привычное оружие [Мистик]",
    descr: "Вы получаете черту Привычное оружие для следующих типов оружия: Простое оружие ближнего боя, Короткоствольное.",
    lvl: 3,
    type: "Класс",
    subtype: "Мистик, Способность класса",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Телепатическая связь",
    descr: "As a standard action, you can form a telepathic link with up to six other willing creatures, allowing you to communicate telepathically at great distances. This functions as telepathic bond, except the duration is permanent. You can have only one telepathic bond active in this way at any given time; creating a new telepathic bond immediately ends the previous one. ",
    lvl: 11,
    type: "Класс",
    subtype: "Мистик, Способность класса",
    category: "ПС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Возвышение",
    descr: "You are close to becoming one with your connection. You can cast each of your connection spells once per day without consuming a spell slot. In addition, you learn how to temporarily transcend your physical form. Once per day, you can spend 1 Resolve Point to project your consciousness outside of your physical body in the form of an intangible psychic image of yourself. This counts as a 6th-level illusion effect and lasts for a number of rounds equal to your mystic level. While your consciousness is projected, your physical body is considered blind, deaf, and helpless, but you can return to your body as a swift action. You control your psychic image as though it was your own body, and your senses perceive only what the image can see and hear. You move with a fly speed of 60 feet and perfect maneuverability. You can pass through solid objects as though you were incorporeal, but you can\’t go farther into a solid object than your space (5 feet for a Medium creature). You can\’t directly affect physical objects. Your projected consciousness is immune to most attacks or effects, whether or not they affect incorporeal creatures, but mindaffecting effects have their full effect on you.\nYou can cast any mystic spell or spell-like ability with a range of touch or greater from your projected consciousness. The spells affect other targets normally. You can\’t cast any spells on your projected consciousness except for illusion spells. You need not maintain line of effect to your projected consciousness, but if you cross into another plane, even momentarily (including via Drift travel), your mind immediately returns to your physical body. ",
    lvl: 19,
    type: "Класс",
    subtype: "Мистик, Способность класса",
    category: "ПС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Просветление",
    descr: "You achieve enlightenment, becoming a living incarnation of your connection. You no longer age, nor do you die of old age. Once per day as a move action, you can enter a state of total communion with your connection that lasts for 1 minute. During this time, you gain a +4 insight bonus to attack rolls, saving throws, and skill checks, and you gain 20 temporary Resolve Points that you can use only on connection powers. Any unspent temporary Resolve Points disappear at the end of this minute. In addition, once per week, you can cast miracle as a spell-like ability.",
    lvl: 20,
    type: "Класс",
    subtype: "Мистик, Способность класса",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Боевая уловка",
    descr: "You gain a bonus combat feat. You must meet all of that feat\’s prerequisites.",
    lvl: 2,
    type: "Класс",
    subtype: "Оперативник, Оперативная уловка",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Быстрая маскировка",
    descr: "Once per day as a standard action, you can quickly change your appearance. This functions as disguise self and lasts for 1 minute per operative level. You can use this exploit an additional time per day at 6th level, and again at 10th level.",
    lvl: 2,
    type: "Класс",
    subtype: "Оперативник, Оперативная уловка",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Быстрая перевязка",
    descr: "You can take 1 minute to tend your wounds and spend 1 Resolve Point to recover a number of Hit Points equal to three times your operative level.",
    lvl: 2,
    type: "Класс",
    subtype: "Оперативник, Оперативная уловка",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Вакцинация",
    descr: "You\’ve trained to resist various chemical and biological weapons, toxins, and pathogens you come across in the course of your missions. You add your operative\’s edge bonus to Fortitude saves against poison and disease.",
    lvl: 2,
    type: "Класс",
    subtype: "Оперативник, Оперативная уловка",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Голографический клон",
    descr: "Вы можете создавать голографические дубликаты или ментальные проекции, сбившиеся в кучу на вашей клетке, чтобы скрыть своё истинное местоположение. Один раз в день в качестве основного действия вы можете создать 1d4 двойника на 1 минуту за уровень оперативника. они остаются на вашей клетке и перемещаются вместе с вами, делая такие же движения, издавая такие же звуки и повторяя ваши действия. Когда вас атакуют или когда вы становитесь целью заклинания, требующего проверки атаки, есть вероятность, что вместо вас попадут в двойника.\nВ случае попадания атаки случайным образом определите, в кого попали: в вас или одного из двойников. В случае попадания в двойника он исчезает. В случае промаха на 5 или меньше или если вы избежали атаки благодаря вероятности промаха, одно из отражений также оказывается уничтожено.\nЗаклинания, действующие на область, и эффекты, не требующие проверки попадания, влияют на вас обычным образом и не уничтожают двойников. Если заклинание с дистанцией \’касание\’ уничтожает двойника, заряд рассеивается без вреда для кого-либо.\nНападающий должен быть способен видеть двойников, чтобы они могли его обмануть. Если вы невидимы или нападающий слеп, двойники не действуют на него. При помощи слепозрения можно отличить двойника от оригинала, а при помощь слепого чутья - нет.\nНа 6 и 10 уровнях дневной лимит применений этой способности увеличивается на 1",
    lvl: 2,
    type: "Класс",
    subtype: "Оперативник, Оперативная уловка",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Инопланетный архив",
    descr: "Your vast experience makes identifying new creatures easier for you. Double your operative\’s edge bonus to your skill checks when identifying a creature and its abilities. If you successfully identify a creature, you gain a +2 enhancement bonus to your skill check when you make a trick attack against that creature.",
    lvl: 2,
    type: "Класс",
    subtype: "Оперативник, Оперативная уловка",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Мастер на все руки [Оперативная уловка]",
    descr: "You\’ve learned how to handle any situation. You can use all skills untrained, and you double your operative\’s edge bonus when using a skill in which you have no ranks.",
    lvl: 2,
    type: "Класс",
    subtype: "Оперативник, Оперативная уловка",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Невероятная подвижность",
    descr: "Если при совершении обманной атаки вы выбираете её цель до того, как переместитесь, то ваше перемещение не спровоцирует внеочередных атак от цели. Когда вы используете основное действие для перемещения, вы можете выбрать одно существо, чтобы не спровоцировать этим перемещением внеочередных атак с его стороны.",
    lvl: 2,
    type: "Класс",
    subtype: "Оперативник, Оперативная уловка",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Невероятный пилотаж",
    descr: "When you attack while you\’re driving a vehicle, you halve the vehicle\’s penalty to your attack roll (to a minimum of no penalty if the vehicle normally imposes a –1 penalty). When you\’re in a chase, you gain a +2 bonus to skill checks you attempt when taking the evade or trick pilot actions.",
    lvl: 2,
    type: "Класс",
    subtype: "Оперативник, Оперативная уловка",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Ночное видение",
    descr: "You can see in the dark as if you had low-light vision and darkvision with a range of 60 feet.",
    lvl: 2,
    type: "Класс",
    subtype: "Оперативник, Оперативная уловка",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Armor Optimizer",
    descr: "You\’ve learned to customize your armor. You can adjust armor to fit you without needing to attempt an Engineering check. This also allows you to add one upgrade slot to the armor, though any upgrade that uses that slot functions only when you wear the armor. Such upgrades are useless to anyone else.",
    lvl: 2,
    type: "Класс",
    subtype: "Оперативник, Оперативная уловка",
    category: "ЭКС",
    requirement: null,
    source: "CRB"
},
{
    name: "Быстрое перемещение+",
    descr: "You can move even faster than other operatives. You gain double the benefits of your quick movement ability, up to a maximum additional increase of +20 feet. You must have quick movement to learn this exploit.",
    lvl: 6,
    type: "Класс",
    subtype: "Оперативник, Оперативная уловка",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Закалённость",
    descr: "If you succeed at a Fortitude save against an effect that normally requires multiples successful saves to cure (such as a disease or poison), that effect immediately ends and is cured with a single successful save.",
    lvl: 6,
    type: "Класс",
    subtype: "Оперативник, Оперативная уловка",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Калечащий снайпер",
    descr: "Вы можете использовать снайперское оружие для обманной атаки (игнорируя свойство \’громоздкое\’ и словно потратив сопутствующее действие для прицеливания). Вы не добавляете дополнительный урон от обманной атаки, но цель считается застигнутой врасплох, и вы можете использовать калечащие приёмы.",
    lvl: 6,
    type: "Класс",
    subtype: "Оперативник, Оперативная уловка",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Кровопускающий приём",
    descr: "For your debilitating trick, you can afflict your target with an amount of bleed damage equal to your operative level.",
    lvl: 6,
    type: "Класс",
    subtype: "Оперативник, Оперативная уловка",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Осторожный стрелок",
    descr: "Ваши дистанционные атаки с применением короткоствольного оружия не провоцируют внеочередных атак.",
    lvl: 6,
    type: "Класс",
    subtype: "Оперативник, Оперативная уловка",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Ошеломляющий приём",
    descr: "For your debilitating trick, you can attempt to stagger your target. The target must succeed at a Fortitude save or be staggered until the beginning of your next turn. Once you\’ve used this ability to attempt to stagger a creature, that creature is immune to your staggering shot for 24 hours.",
    lvl: 6,
    type: "Класс",
    subtype: "Оперативник, Оперативная уловка",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Сдерживающий приём",
    descr: "For your debilitating trick, you can prevent your target from using reactions until the end of your next turn.",
    lvl: 6,
    type: "Класс",
    subtype: "Оперативник, Оперативная уловка",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Скользкий разум",
    descr: "If you fail your Will saving throw against a mind-affecting effect with a duration of 1 round or more, you can attempt another saving throw against the effect 1 round later at the same DC. You get only one extra chance to save per effect.\nIf you succeed at a saving throw against a charm or compulsion effect, you can prevent the effect\’s originator from knowing you succeeded. You gain basic knowledge of what the mental effect would have made you do or feel, and you can attempt a Bluff check to pretend you are under that effect. If the mental effect would provide a link between you and the originator (like the dominate person spell), you can choose to allow the link without the control.",
    lvl: 6,
    type: "Класс",
    subtype: "Оперативник, Оперативная уловка",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Скоростной взлом",
    descr: "You can disable mechanical devices with Engineering and computer systems with Computers in half the usual time. In the rare cases when disabling a system or device would normally be a full action, you can do it as a standard action, and if it would normally be a standard action, you can do it as a move action.",
    lvl: 6,
    type: "Класс",
    subtype: "Оперативник, Оперативная уловка",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Тормозящий приём",
    descr: "For your debilitating trick, you can reduce your target\’s speeds by half and prevent it from using the guarded step action until the beginning of your next turn.",
    lvl: 6,
    type: "Класс",
    subtype: "Оперативник, Оперативная уловка",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Уверенная походка",
    descr: "You move at your full speed when moving over difficult terrain, and without penalty when using Acrobatics or Stealth at your full speed.",
    lvl: 6,
    type: "Класс",
    subtype: "Оперативник, Оперативная уловка",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Уверенность",
    descr: "You can spend 1 Resolve Point as a reaction to reroll one of your specialization\’s associated skill checks.",
    lvl: 6,
    type: "Класс",
    subtype: "Оперативник, Оперативная уловка",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Улучшенное восприятие",
    descr: "You can sense your surroundings without needing to see them. You gain blindsense with a range of 60 feet. You must have darkvision and low-light vision, or the nightvision exploit, to learn this exploit.",
    lvl: 6,
    type: "Класс",
    subtype: "Оперативник, Оперативная уловка",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Адаптивное перемещение",
    descr: "You gain a climb speed and a swim speed equal to your land speed. This speed is not increased by the quick movement class feature or improved quick movement exploit.",
    lvl: 10,
    type: "Класс",
    subtype: "Оперативник, Оперативная уловка, Сорвиголова",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Всегда начеку",
    descr: "Вы достаточно часто выполняли задания в одиночку и приучились не терять бдительности даже во время сна. Вы не получаете штрафа к проверкам Внимания, когда спите, но если проверка требует только зрения, успешно пройти её вы всё равно не сможете. Вы всегда можете действовать в предбоевом раунде, но если это происходит в ситуации, когда вы не осведомлены о присутствии противника, вы используете либо свой результат проверки иициативы, либо значение на 1 ниже, чем наивысшая инициатива среди существ, о чьём присутствии вы не осведомлены (смотря, что ниже).",
    lvl: 10,
    type: "Класс",
    subtype: "Оперативник, Оперативная уловка, Исследователь",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Голографический дублёр",
    descr: "As a standard action, you can spend 1 Resolve Point to create a single holographic duplicate or psychic projection of yourself that moves away from you for 1 round per operative level. The double climbs walls, jumps across pits, or simply passes through obstacles, moving at twice your speed in one direction indicated by you when the ability is activated. Its course cannot be changed. Those who interact with the double can attempt a Will save to recognize that it is not real. You must have the holographic clone exploit to learn this exploit.",
    lvl: 10,
    type: "Класс",
    subtype: "Оперативник, Оперативная уловка, Вор",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Маскировочное поле",
    descr: "Вы искривляете свет вокруг себя и приглушаете издаваемые звуки. Вы почти невидимы, пока неподвижны, но даже при движении виден лишь ваш размытый силуэт. Маскировочное поле не делает вас полностью невидимым, но существенно облегчает скрытные перемещения. Его включение требует сопутствующего действия. Пока поле включено, вы можете использовать Скрытность, чтобы спрятаться, даже если вы находитесь в прямой видимости и рядом нет укромных мест. Атака не отключает маскировочное поле, но прерывает попытку спрятаться. Если вы сохраняете полную неподвижность в течение как минимум 1 раунда, то получаете +10 к проверкам Скрытности (эффект не складывается с невидимостью), пока не переместитесь.\nЗаряда маскировочного поля хватает на 10 раундов, после чего оно отключается. Отключённое поле перезаряжается со скоростью 1 раунд в минуту.",
    lvl: 10,
    type: "Класс",
    subtype: "Оперативник, Оперативная уловка, Призрак",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Мастер маскировки",
    descr: "Вы можете маскироваться под других существ и даже принимать вид какой-то конкретной личности. Действие способности аналогично уловке быстрая маскировка, но её длительность увеличивается до 10 минут за уровень оперативника. Вы также можете на 1 минуту за уровень оперативника принять облик конкретного лица, виденного вами ранее. Если вы слышали, как это существо разговаривает, и знаете его язык, вы также можете скопировать голос и манеру речи. Подобная маскировка настолько убедительна, что даже знакомым этого существа придётся сначала успешно пройти испытание Воли, чтобы получить возможность совершить проверку Внимания для разоблачения маскировки. Для освоения этой уловки у вас должна быть быстрая маскировка.",
    lvl: 10,
    type: "Класс",
    subtype: "Оперативник, Оперативная уловка, Шпион",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Невероятная подвижность+",
    descr: "When you use the trick attack action or take a standard action to move up to your speed, your movement doesn\’t provoke attacks of opportunity. You still provoke attacks of opportunity normally when making ranged attacks or casting spells. You must have the uncanny mobility exploit to learn this exploit.",
    lvl: 10,
    type: "Класс",
    subtype: "Оперативник, Оперативная уловка",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Неуловимый хакер",
    descr: "Your hacking skills make your code incredibly difficult for countermeasures to pin down. Whenever you would trigger a system\’s countermeasure while hacking the system, there is a 50% chance that you manage to elude the countermeasure and it doesn\’t trigger. You still haven\’t disarmed the countermeasure, and it might trigger in the future.",
    lvl: 10,
    type: "Класс",
    subtype: "Оперативник, Оперативная уловка, Хакер",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Отключающий приём",
    descr: "For your debilitating trick, you can attempt to temporarily suppress one magic item or deactivate one weapon, piece of equipment, or armor upgrade worn or carried by the target. Roll 1d20 + your operative level; the DC is equal to 10 + the item level. If you succeed, you deactivate the device (or suppress the item\’s magical properties) until the beginning of your next turn. The device\’s owner can spend a move action and attempt an Engineering check (for technological devices) or a Mysticism check (for magic items) against your operative exploit DC to try to reactivate the device.\nYou can instead use this debilitating trick to temporarily deactivate a construct that has either the magical subtype (such as a golem) or the technological subtype (such as a robot). You don\’t need to attempt a check, but the creature can attempt a Fortitude save to negate the debilitating effect. If it fails, it\’s stunned until the beginning of your next turn. Once you\’ve used this ability to attempt to deactivate a construct, that creature is immune to your deactivating shot for 24 hours.",
    lvl: 10,
    type: "Класс",
    subtype: "Оперативник, Оперативная уловка",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Поиск истины",
    descr: "By picking up on subtle clues and hidden traces in your immediate surroundings, you can see things as they really are. As a full action, you can spend 1 Resolve Point to gain the effects of true seeing for 1 round with a range of 60 feet.",
    lvl: 10,
    type: "Класс",
    subtype: "Оперативник, Оперативная уловка, Детектив",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Уклонение+",
    descr: "When you fail a Reflex save against an effect that has a partial effect on a successful save, you take the partial effect instead of the full effect. You must have evasion to learn this exploit.",
    lvl: 10,
    type: "Класс",
    subtype: "Оперативник, Оперативная уловка",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Шокирующий приём",
    descr: "For your debilitating trick, you can try to stun your target. The target must succeed at a Fortitude save or be stunned until the start of your next turn. Once you\’ve used this ability to try to stun a creature, it\’s immune to your stunning shot for 24 hours. You must have the staggering shot exploit to learn this exploit.",
    lvl: 10,
    type: "Класс",
    subtype: "Оперативник, Оперативная уловка",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Калечащая мультиатака",
    descr: "When you use triple attack or quad attack to attack the same target with all of your attacks, after your full attack is complete, if at least two of your attacks hit, you can apply a debilitating trick to the target.",
    lvl: 14,
    type: "Класс",
    subtype: "Оперативник, Оперативная уловка",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Невероятное восприятие",
    descr: "Your enhanced senses grow even more discerning. Your blindsense becomes blindsight with a range of 60 feet. If you have darkvision, its range increases by 30 feet. You must have the enhanced senses exploit to learn this exploit.",
    lvl: 14,
    type: "Класс",
    subtype: "Оперативник, Оперативная уловка",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Нокаутирующий приём",
    descr: "For your debilitating trick, you can attempt to knock the target out in one blow. The target must succeed at a Fortitude save or fall unconscious for 1 minute. Once you\’ve used this ability to attempt to knock a creature out, that creature is immune to your knockout shot for 24 hours. You must have the staggering shot and stunning shot exploits to learn this exploit.",
    lvl: 14,
    type: "Класс",
    subtype: "Оперативник, Оперативная уловка",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Энергоэффективное маскировочное поле",
    descr: "Your cloaking field lasts for up to 100 rounds (10 minutes), and it recharges at the rate of 2 rounds of cloaking per minute while inactive. You can spend 1 Resolve Point as a move action to recharge 20 rounds immediately, and you can do this even while the cloaking field is active. You must have the cloaking field exploit to learn this exploit.",
    lvl: 14,
    type: "Класс",
    subtype: "Оперативник, Оперативная уловка",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Вор",
    descr: "You specialize in acquisition, from quick swipes to complex heists.\nНавыки: Внимание; Ловкость рук. You can use Sleight of Hand to make a trick attack by concealing your weapons and motions.\nSpecialization Exploit: Holographic Distraction.\nContingency Plan",
    lvl: 1,
    type: "Класс",
    subtype: "Оперативник, Специализация оперативника",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Детектив",
    descr: "Your ability to read people and make deductions helps you ferret out the truth in any situation.\nНавыки: Культура; Проницательность. You can attempt a Sense Motive check with a +4 bonus to make a trick attack by reading your foe.\nSpecialization Exploit: Glimpse the Truth.\nDetective\’s Insight",
    lvl: 1,
    type: "Класс",
    subtype: "Оперативник, Специализация оперативника",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Исследователь",
    descr: "Знания и навыки выживания в опасной местности делают из вас непревзайдённого разведчика.\nНавыки: Выживание; Культура. Вы умело используете особенности местности и поэтому можете проходить проверку выживания с бонусом +4 для обманной атаки.\nСпецуловка: всегда начеку.\nСпецприём: В бесконечность и далее.",
    lvl: 1,
    type: "Класс",
    subtype: "Оперативник, Специализация оперативника",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Призрак",
    descr: "You can move from place to place without being noticed.\nНавыки: Акробатика; Скрытность. When you use Stealth to make a trick attack, you gain a +1 bonus to the skill check.\nSpecialization Exploit: Cloaking Field.\nPhase Shift Escape",
    lvl: 1,
    type: "Класс",
    subtype: "Оперативник, Специализация оперативника",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Сорвиголова",
    descr: "Вы специализируетесь на задачах, требующих отваги и атлетической подготовки.\nНавыки: Акробатика; Атлетика. Вы можете проходить проверку Акробатики для совершения обманной атаки.\nСпецуловка: адаптивное перемещение.\nСпецспособность: Экстремальная атака",
    lvl: 1,
    type: "Класс",
    subtype: "Оперативник, Специализация оперативника",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Хакер",
    descr: "Whether it\’s a computer system or a mechanical device, you can hack it.\nНавыки: Компьютеры; Инженерное Дело. You can attempt a Computers check with a +4 bonus to make a trick attack by creating a computerized distraction (you can\’t use this option if stripped of all computerized gear in an area with no computers).\nSpecialization Exploit: Elusive Hacker.\nControl Hack",
    lvl: 1,
    type: "Класс",
    subtype: "Оперативник, Специализация оперативника",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Шпион",
    descr: "Для вас украсть чужую личность или придумать новую столь же легко, как переодеться, поэтому вы можете внедриться практически куда угодно.\nНавыки: Блеф; Маскировка. Вы получаете бонус +4 к проверке Блефа для совершения обманной атаки.\nСпецуловка: Мастер маскировки.\nСпецспособность: Обман систем обнаружения",
    lvl: 1,
    type: "Класс",
    subtype: "Оперативник, Специализация оперативника",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "В бесконечность и далее",
    descr: "At 11th level, you gain a +4 bonus to Culture and Survival checks. While you\’re outside both the Pact Worlds and your home star system (if different), you gain a +2 bonus to initiative checks. At the GM\’s discretion, in games centered around a different star system than the Pact Worlds, replace the Pact Worlds with that star system.",
    lvl: 11,
    type: "Класс",
    subtype: "Оперативник, Спецспособность специализации, Исследователь",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Взлом систем управления",
    descr: "At 11th level, when you exceed the DC of a Computers or Engineering check to disable a device or computer system by 5 or more, you can instead take control of the device or system. For every 5 by which you exceed the DC, you can typically make the device or system perform one task, at the GM\’s discretion. Once the device or system has done what you commanded, you choose whether the device deactivates or returns to normal.",
    lvl: 11,
    type: "Класс",
    subtype: "Оперативник, Спецспособность специализации, Хакер",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Запасной план",
    descr: "At 11th level, you\’ve performed enough heists to realize that things never go exactly as you had planned. When something unexpected happens during a heist or infiltration, you can spend 2 Resolve Points and specify a contingency plan that you had set up in advance for this eventuality, either having the right prop (such as an ID or a computer file, but not a particularly valuable item), having the right information, or having hired a confederate to perform a single task at the right time. You then attempt a skill check. The appropriate skill and the DC are at the GM\’s discretion, with a higher DC for a more elaborate or unlikely contingency. If you succeed, you have the item or knowledge, or the confederate performs the task as specified. If you fail, either you don\’t have what you need or your plan fails.",
    lvl: 11,
    type: "Класс",
    subtype: "Оперативник, Спецспособность специализации, Вор",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Интуиция детектива",
    descr: "At 11th level, your incredible insights help you move investigations forward where mundane inquiries fail. Once per day, you can spend 1 Resolve Point and take 10 minutes pondering a mystery or quandary to gain an enigmatic insight as if you had cast divination (though the result is often presented as a cryptic clue).",
    lvl: 11,
    type: "Класс",
    subtype: "Оперативник, Спецспособность специализации, Детектив",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Обман систем обнаружения",
    descr: "At 11th level, whenever you succeed at a saving throw against a spell, technological device, or ability that would provide information about you (such as detect thoughts), instead of negating the effect, you can provide false information that matches your cover identity. If such an effect has no saving throw, you can attempt a Bluff check opposed by the Sense Motive check of the caster or user, and provide similar false information on a success.",
    lvl: 11,
    type: "Класс",
    subtype: "Оперативник, Спецспособность специализации, Шпион",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Фазовый сдвиг",
    descr: "At 11th level, you can move through solid matter by taking your body\’s matter out of phase for just a moment. As a full action, you can spend 1 Resolve Point to phase through up to 5 feet of solid matter. If you attempt to phase through something that is too thick, you spend the Resolve Point and take the action but the attempt fails. You cannot phase through force effects such as force fields or the barrier created by wall of force. After using phase shift escape, you can\’t use it again until after you\’ve taken a full 8-hour rest.",
    lvl: 11,
    type: "Класс",
    subtype: "Оперативник, Спецспособность специализации, Призрак",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Экстремальная атака",
    descr: "Начиная с 11 уровня вы автоматически успешно проходите проверку Блефа при совершении обманной атаки, если и вы, и ваша цель удерживаете равновесие, лазаете, летаете или плывёте.",
    lvl: 11,
    type: "Класс",
    subtype: "Оперативник, Спецспособность специализации, Сорвиголова",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Обманная атака",
    descr: "Вы можете обмануть или испугать противника, чтобы получить возможность внезапно на него напасть. В качестве действия полного хода вы можете переместиться на расстояние вплоть до значения вашей скорости. Вне зависимости от того, переместились ли вы или нет, после этого вы можете совершить атаку оружием ближнего боя с особым свойством \’оперативное\’ или любым короткоствольным оружием. Непосредственно перед атакой пройдите проверку Блефа, Запугивания или Скрытности (или проверку навыка, связанного с вашей специализацией) со СЛ 20 + КО цели. В случае успеха для этой атаки цель считается застигнутой врасплох и дополнительно получает дополнительный урон. Вы не можете использовать эту способность, если оружие громоздкое или требует действия полного хода для совершения одной атаки.\nДополнительный урон зависит от уровня: 1 уровень - 1d4, 3 уровень - 1d8, 5 уровень - 3d8, далее за каждые два уровня добавляется 1d8.",
    lvl: 1,
    type: "Класс",
    subtype: "Оперативник, Способность класса",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Оперативный опыт",
    descr: "Your diverse training as an operative grants you a +1 insight bonus to initiative checks and to skill checks. This bonus increases by 1 at 3rd level and every 4 levels thereafter.",
    lvl: 1,
    type: "Класс",
    subtype: "Оперативник, Способность класса",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Специализация",
    descr: "Your specialization represents your primary area of expertise. Pick one specialization upon taking your 1st level of the operative class. Once made, this choice cannot be changed. Your specialization grants you the Skill Focus feat in your specialization\’s associated skills, and you gain a free skill rank in each of those skills at each operative level (this does not allow you to exceed the maximum number of skill ranks in a single skill). ",
    lvl: 1,
    type: "Класс",
    subtype: "Оперативник, Способность класса",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Оперативная уловка",
    descr: "As you gain experience, you learn special tricks called operative exploits. You learn your first operative exploit at 2nd level, and you learn an additional exploit every 2 levels thereafter. If an operative exploit allows a saving throw to resist its effects, the DC is equal to 10 + half your operative level + your Dexterity modifier. If it requires an enemy to attempt a skill check, the DC is equal to 10 + 1-1/2 × your operative level + your Dexterity modifier. You cannot learn the same exploit more than once unless it specially says otherwise. ",
    lvl: 2,
    type: "Класс",
    subtype: "Оперативник, Способность класса",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Уклонение",
    descr: "Если вы подвергаетесь действию эффекта, позволяющего пройти испытание реакции для уменьшения урона вдвое или ослабления эффекта, то в случае успеха эффект для вас не срабатывает вообще. Вы можете применять уклонение, только если вы без брони или в лёгкой броне и не нагружены. Если вы беспомощны или не можете двигаться по иным причинам, уклонение не работает.",
    lvl: 2,
    type: "Класс",
    subtype: "Оперативник, Способность класса",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Быстрое перемещение",
    descr: "As long as you are unencumbered and wearing light armor or no armor, your land speed increases by 10 feet. At 9th level, your land speed instead increases by 20 feet, and at 15th level, your land speed instead increases by 30 feet. ",
    lvl: 3,
    type: "Класс",
    subtype: "Оперативник, Способность класса",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Привычное оружие [Оперативник]",
    descr: "Вы получаете черту Привычное оружие для следующих типов оружия: Простое оружие ближнего боя, Короткоствольное, Снайперское.",
    lvl: 3,
    type: "Класс",
    subtype: "Оперативник, Способность класса",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Калечащий приём",
    descr: "Если и обманная атака, и соответствующая ей проверка навыка были успешны, на ваш выбор противник может стать застигнутым врасплох или сбитым с цели до начала вашего следующего следующего хода. Вы можете изучить дополнительные варианты калечащих приёмов, но при каждом успешном проведении обманной атаки можете выбрать только один из известных вам эффектов.",
    lvl: 4,
    type: "Класс",
    subtype: "Оперативник, Способность класса",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Спецуловка",
    descr: "You gain your specialization\’s listed exploit as a bonus operative exploit, even if you don\’t meet the prerequisites. ",
    lvl: 5,
    type: "Класс",
    subtype: "Оперативник, Способность класса",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Невероятное проворство",
    descr: "Вас нельзя застать врасплох, и противник не получает бонусов к атаке, когда вы распластаны или взяты в тиски. Кроме этого, прикрывающий и отвлекающий огонь не даёт противнику преимущества против вас.",
    lvl: 7,
    type: "Класс",
    subtype: "Оперативник, Способность класса",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Спецподготовка",
    descr: "You become so confident in certain skills that you can use them reliably even under adverse conditions. When attempting a skill check with a skill in which you have the Skill Focus feat, you can take 10 even if stress or distractions would normally prevent you from doing so. ",
    lvl: 7,
    type: "Класс",
    subtype: "Оперативник, Способность класса",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Троекратная атака",
    descr: "При совершении полной атаки с использованием только оружия ближнего боя со свойством \’оперативное\’ или короткоствольного оружия вы можете предпринять до 3 атак вместо 2.",
    lvl: 8,
    type: "Класс",
    subtype: "Оперативник, Способность класса",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Спецспособность",
    descr: "You gain a special power depending on your specialization. ",
    lvl: 11,
    type: "Класс",
    subtype: "Оперативник, Способность класса",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Четырёхкратная атака",
    descr: "When making a full attack using only melee weapons with the operative special property or small arms, you can make up to four attacks instead of two. ",
    lvl: 13,
    type: "Класс",
    subtype: "Оперативник, Способность класса",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Двойной калечащий приём",
    descr: "When you succeed at both the skill check and attack roll of your trick attack, you can apply two of your debilitating trick effects. ",
    lvl: 17,
    type: "Класс",
    subtype: "Оперативник, Способность класса",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Превосходный оперативник",
    descr: "Whenever you attempt a skill check with your specialization\’s associated skills, you can roll twice and take the higher result. Once per day as a move action, you can temporarily trade out one of your operative exploits for another operative exploit requiring the same level or lower. This trade lasts 24 hours. If the exploit you trade away is a prerequisite for any of your other abilities, you lose all abilities that require it as a prerequisite for the duration.",
    lvl: 20,
    type: "Класс",
    subtype: "Оперативник, Способность класса",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "В атаку!",
    descr: "Дескрипторы: [Язык], [Разум], [Восприятие]\nВ качестве сопутствующего действия вы можете выбрать одного противника в пределах 60 футов. До начала вашего следующего хода вы и ваши союзники получаете бонус +1 (боевой дух) к проверкам атаки по этому противнику. Бонус сохранятеся, даже если противник переместился за пределы линии видимости или слышимости, либо дальше 60 футов.\nНачиная с 6 уровня вы можете потратить 1 ПР, чтобы добавить этот бонус к проверкам атаки и урона по всем противникам в пределах 60 футов.",
    lvl: 1,
    type: "Класс",
    subtype: "Посланник, Импровизация посланника",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Воодушевляющее слово",
    descr: "Дескрипторы: [Язык], [Разум], [Восприятие]\nAs a standard action, you can signal an ally within 30 feet who has taken damage from any attack made by a significant enemy at any point after your last turn ended. That ally regains a number of Stamina Points (up to his maximum) equal to twice your envoy level + your Charisma modifier; at 15th level, this increases to three times your envoy level + your Charisma modifier. Once an ally has benefited from your inspiring boost, that ally can\’t gain the benefits of your inspiring boost again until he takes a 10-minute rest to recover Stamina Points.\nAt 6th level, you can spend 1 Resolve Point to add your envoy level to the number of Stamina Points regained.",
    lvl: 1,
    type: "Класс",
    subtype: "Посланник, Импровизация посланника",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Индивидуальный подход",
    descr: "You can use beneficial mind-affecting envoy improvisations to aid allies who usually would not be able to gain benefits from mind-affecting effects, such as constructs, robots, and undead. If the improvisation grants a morale bonus, even allies who can\’t normally benefit from morale bonuses gain that bonus.",
    lvl: 1,
    type: "Класс",
    subtype: "Посланник, Импровизация посланника",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Не сдавайся!",
    descr: "Дескрипторы: [Разум], [Восприятие]\nAs a standard action, you can signal a single ally within 60 feet. That ally ignores one condition of your choice until the start of your next turn, chosen from the following list: confused, fascinated, fatigued, shaken, sickened, and staggered.\nWhile your ally doesn\’t suffer the effects of the condition during that period, the condition is merely suppressed, not removed, and its effects resume at the start of your next turn. The condition can still be removed with spells, technology, and other effects as normal.\nAt 6th level, add the following conditions to the list: cowering, dazed, exhausted, frightened, nauseated, panicked, paralyzed, and stunned.\nAt 12th level, you can spend 1 Resolve Point to remove the condition with this ability instead of suppressing it. You can\’t remove a condition with a permanent duration in this way; if you attempt to do so, your attempt fails but you don\’t lose the Resolve Point.",
    lvl: 1,
    type: "Класс",
    subtype: "Посланник, Импровизация посланника",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Обескураживающая провокация",
    descr: "Дескрипторы: [Язык], [Разум], [Восприятие]\nВ качестве основного действия вы можете спровоцировать противника на расстоянии до 60 футов. Совершите проверку Запугивания со СЛ, равной СЛ деморализации этого противника (обратите внимание, что это не проверка деморализации, поэтому способности, влияющие на попытки деморализации, такие как мастерский талант устрашающее присутствие, не применяются). В случае провала противник сбит с цели до конца вашего следующего хода. В случае успеха противник вместо этого потрясён до конца вашего следующего хода. данный эффект имеет дескрипторы \’ужас\’ и \’эмоции\’.\nНачиная с 6 уровня вы можете потратить 1 ПР, чтобы считать успешной проверку Запугивания для обескураживающей провокации.",
    lvl: 1,
    type: "Класс",
    subtype: "Посланник, Импровизация посланника",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Общепринятое выражение",
    descr: "When using a language-dependent improvisation that affects an enemy, you can use the improvisation against that enemy even if the two of you do not share a language.",
    lvl: 1,
    type: "Класс",
    subtype: "Посланник, Импровизация посланника",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Смотри в оба!",
    descr: "Дескрипторы: [Разум]\nWhen you spend a Resolve Point to regain Stamina Points after a 10-minute rest, all allies who stay within 60 feet of you throughout the rest gain a +2 morale bonus to Perception and initiative checks for the next hour or until the next 10-minute rest to recover Stamina Points, whichever comes first.",
    lvl: 1,
    type: "Класс",
    subtype: "Посланник, Импровизация посланника",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Смотри под ноги!",
    descr: "Дескрипторы: [Язык], [Разум], [Восприятие]\nWhen an ally within 60 feet must succeed at a Reflex save to avoid a harmful effect, as a reaction before your ally attempts the saving throw, you can grant the ally a +2 bonus to that saving throw.\nAt 6th level, you can spend 1 Resolve Point to have the ally roll twice on the saving throw and take the better result. Both of those rolls benefit from the +2 bonus provided by this ability.",
    lvl: 1,
    type: "Класс",
    subtype: "Посланник, Импровизация посланника",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Только не по лицу!",
    descr: "Дескрипторы: [Восприятие]\nВ качестве сопутствующего действия вы можее выбрать одного противника в пределах 60 футов. Он должен пройти испытание Воли и в случае провала получает штраф -4 ко всем атакам по вам до конца вашего следующего хода.\nНачиная с 6 уровня вы можете потратить 1 ПР, чтобы противник получил штраф без возможности пройти испытание.",
    lvl: 1,
    type: "Класс",
    subtype: "Посланник, Импровизация посланника",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Хитрый финт",
    descr: "Дескрипторы: [Восприятие]\nAs a standard action, you can fake out an enemy within 60 feet, making that enemy open to your attacks. Attempt a Bluff check with the same DC as a check to feint against that enemy (though this isn\’t a standard check to feint, so Improved Feint and Greater Feint don\’t apply). Even if you fail, that enemy is flat-footed against your attacks until the end of your next turn. If you succeed, the enemy is also flat-footed against your allies\’ attacks until the end of your next turn. You can\’t use clever feint against a creature that lacks an Intelligence score.\nAt 6th level, you can spend 1 Resolve Point to treat a failed Bluff check for clever feint as if it were a success.",
    lvl: 1,
    type: "Класс",
    subtype: "Посланник, Импровизация посланника",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Берегись",
    descr: "Дескрипторы: [Язык], [Разум], [Восприятие]\nAs a reaction, when an enemy makes a ranged attack against an ally within 60 feet of you, you can warn that ally of the danger. You must spend your reaction when the enemy declares the attack but before it makes the attack roll. Your ally can spend a reaction to gain a +4 to AC against the triggering attack. Once the triggering attack is resolved, the ally falls prone.\nAt 8th level, you can spend 1 Resolve Point to prevent your ally from falling prone after the attack.",
    lvl: 4,
    type: "Класс",
    subtype: "Посланник, Импровизация посланника",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Быстрая обескураживающая провокация",
    descr: "Вы можете использовать обескураживающую провокацию в качестве сопутствующего, а не основного действия. Чтобы взять эту импровизацию, у вас должна быть обескураживающая провокация.",
    lvl: 4,
    type: "Класс",
    subtype: "Посланник, Импровизация посланника",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Быстрое воодушевляющее слово",
    descr: "You can use inspiring boost as a move action instead of a standard action, though when you do so, the number of Stamina Points your ally recovers is reduced by your envoy level. You must have the inspiring boost envoy improvisation to choose this improvisation.",
    lvl: 4,
    type: "Класс",
    subtype: "Посланник, Импровизация посланника",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Дальняя импровизация",
    descr: "Double the range of your improvisations with ranges of at least 30 feet.",
    lvl: 4,
    type: "Класс",
    subtype: "Посланник, Импровизация посланника",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Нырок",
    descr: "You can duck under a foe\’s melee attack, causing it to overextend and move into a position more favorable to you. You must take the total defense action to use this ability. If, before the start of your next turn, a foe misses you with a melee attack, as a reaction you can attempt a reposition combat maneuver with a +8 bonus to your attack roll against that foe.",
    lvl: 4,
    type: "Класс",
    subtype: "Посланник, Импровизация посланника",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Соберись!",
    descr: "Дескрипторы: [Разум], [Восприятие]\nAs a standard action, you can encourage a single ally within 60 feet to focus on the danger at hand. If that ally is flat-footed or off-target, you end that condition. If circumstances would cause the ally to immediately become flat-footed or off-target again, you instead suppress that condition for 1 round.",
    lvl: 4,
    type: "Класс",
    subtype: "Посланник, Импровизация посланника",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Хитрая атака",
    descr: "Вы можете атакой вывести противника из равновесия. В качестве основного действия вы можете совершить одиночную атаку по цели в пределах 60 футов и получить преимущество хитрого финта (при этом вы проходите проверку Блефа как обычно). Эффекты хитрого финта применяются перед проведение атаки. Чтобы взять эту импровизацию, у вас должен быть хитрый финт.",
    lvl: 4,
    type: "Класс",
    subtype: "Посланник, Импровизация посланника",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Шевелись!",
    descr: "Дескрипторы: [Разум], [Восприятие]\nAs a standard action, you can grant a single move action to an ally within 60 feet. The ally can use that move action during her next turn to take a guarded step, move up to her speed, or draw or sheathe a weapon. The ally can use her extra move action in between her other actions, and she can even use it before or after a full action. A character can use no more than one extra action from hurry in a single round.",
    lvl: 4,
    type: "Класс",
    subtype: "Посланник, Импровизация посланника",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "В атаку!+",
    descr: "Бонус импровизации \’В атаку!\’ увеличивается до +2 (боевой дух). В качестве основного действия вы можете совершить одиночную атаку по противнику в пределах 60 футов. Вы и ваши союзники в пределах 60 футов получаете преимущества импровизации \’В атаку!\’ против этого противника (эффекты применяются до первой атаки). Если вы потратите 1 ПР при использовании этой способности, то дадите бонус +2 (боевой\nдух) к проверкам атаки и урона по всем противникам в пределах 60 футов. Чтобы взять эту импровизацию, у вас должна быть импровизация \’В атаку!\’.",
    lvl: 6,
    type: "Класс",
    subtype: "Посланник, Импровизация посланника",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Не зевай!",
    descr: "Дескрипторы: [Язык], [Восприятие]\nWhen you succeed at a Perception check, as a reaction, you can signal a single ally within 60 feet. That ally can act as if he had also succeeded at the Perception check with the same result.",
    lvl: 6,
    type: "Класс",
    subtype: "Посланник, Импровизация посланника",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Отвлечение огня",
    descr: "Дескрипторы: [Восприятие]\nAs a standard action, you can spend 1 Resolve Point to make all enemies within 100 feet take a –4 penalty to all ranged attacks they make that don\’t target you until the end of your next turn. This penalty remains even if you and an enemy move more than 100 feet away from each other, and enemies that weren\’t within 100 feet when you used draw fire don\’t take the penalty if they later come within range.",
    lvl: 6,
    type: "Класс",
    subtype: "Посланник, Импровизация посланника",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Продуманные импровизации",
    descr: "The first time you would spend Resolve Points on one of your envoy improvisations, reduce the cost by 1 Resolve Point (minimum 0). This ability refreshes whenever you take a 10-minute rest to recover Stamina Points and after an 8-hour rest to recover Resolve Points, reducing the Resolve Point cost of your next envoy improvisation after the rest.",
    lvl: 6,
    type: "Класс",
    subtype: "Посланник, Импровизация посланника",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Мастерская атака",
    descr: "As a move action, you can spend 2 Resolve Points to add your bonus from expertise to your next attack roll before the end of your turn.",
    lvl: 8,
    type: "Класс",
    subtype: "Посланник, Импровизация посланника",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Негаснущая решимость",
    descr: "Дескрипторы: [Язык], [Разум], [Восприятие]\nAs a move action, you can spend 2 Resolve Points to grant an ally within 60 feet 1 Resolve Point that he can spend to empower one of his abilities, even if he has spent all of his own Resolve Points. The ally must spend the Resolve Point before the start of your next turn; if he does not do so, he loses the Resolve Point and you still lose the Resolve Points you spent. You can\’t grant the same ally the benefits of this ability again until both you and your ally have recovered your Resolve Points after an 8-hour rest or its equivalent.",
    lvl: 8,
    type: "Класс",
    subtype: "Посланник, Импровизация посланника",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Отчаянная защита",
    descr: "As a move action, you can cause one ally adjacent to you to not be considered helpless for the purpose of actions that can be used only against helpless creatures (such as a coup de grace). This effect ends if the creature ceases to be adjacent to you or at the beginning of your next turn, whichever comes first.",
    lvl: 8,
    type: "Класс",
    subtype: "Посланник, Импровизация посланника",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Ситуационная осведомлённость",
    descr: "If you ready an action, once before the trigger you selected occurs, you can spend 1 Resolve Point to change both the trigger and the action you have ready. You must ready an action that takes the same kind of action as your originally readied action, or you must ready a lesser action. (For example, if you readied a standard action, you could switch to another standard action, a move action, or a swift action, and if you readied a move action, you could switch to another move action or a swift action.)",
    lvl: 8,
    type: "Класс",
    subtype: "Посланник, Импровизация посланника",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Тайный умысел",
    descr: "You\’re an expert at veiling your true thoughts and goals. Whenever a creature attempts a Sense Motive check to detect a deception of yours, the creature must roll twice and take the worse of the two results. When you attempt a saving throw against an effect or ability that would read your thoughts or reveal your motives, you can roll twice and take the better of the two results.",
    lvl: 8,
    type: "Класс",
    subtype: "Посланник, Импровизация посланника",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Шевелись!+",
    descr: "You can use the hurry envoy improvisation as a move action instead of a standard action. You must have the hurry envoy improvisation to choose this improvisation.\nAt 12th level, you can use hurry as a standard action and spend 1 Resolve Point to grant a standard action instead of a move action.",
    lvl: 8,
    type: "Класс",
    subtype: "Посланник, Импровизация посланника",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Аналитик",
    descr: "Требуется мастерство в навыке: Проницательность\nYou have been taught to carefully consider your own assumptions, making it much less likely you assign false motives to other creatures. When using Sense Motive to detect deception or discern a secret message, as long as your expertise die roll result is not a 1, you don\’t think a truthful statement contains deceptions or infer false information from a secret message even if you fail your check by 5 or more.",
    lvl: 3,
    type: "Класс",
    subtype: "Посланник, Мастерский талант",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Быстрый взлом",
    descr: "Требуется мастерство в навыке: Компьютеры\nWhen you attempt a Computers check to hack into a computer system, you can forgo rolling your expertise die to instead halve the time it takes to make the attempt (to a minimum of 1 round). At 9th level, if you successfully hack the system, you can also negate a single countermeasure protecting that computer system. You cannot use this talent to negate a countermeasure from the same computer again for 24 hours.",
    lvl: 3,
    type: "Класс",
    subtype: "Посланник, Мастерский талант",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Вдумчивый мастер",
    descr: "Требуется мастерство в навыке: См. ниже\nChoose a skill you have selected with the skill expertise class feature. When you take 20 with this skill, you can roll your expertise die twice and take the better result.\nYou can choose this talent up to three times, choosing a different skill selected with the skill expertise class feature each time.",
    lvl: 3,
    type: "Класс",
    subtype: "Посланник, Мастерский талант",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Грозный взгляд",
    descr: "Требуется мастерство в навыке: Запугивание\nWhen you attempt an Intimidate check to demoralize foes, you can forgo your expertise die to attempt to briefly demoralize a small group as a full action. You attempt an Intimidate check against foes within 60 feet, no two of which can be more than 20 feet apart. The DC of this check is equal to the highest DC to demoralize any one of the foes. If you are successful, the targets gain the shaken condition for 1 round (even if your result exceeded the DC by 5 or more). Once you use this ability against a creature, it is immune to this talent for 24 hours.",
    lvl: 3,
    type: "Класс",
    subtype: "Посланник, Мастерский талант",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Дополнительное мастерство в навыке",
    descr: "Choose another skill in which you have at least 1 rank from the list of skills you can choose with the expertise class feature; you can use expertise with that skill. You can choose this talent up to three times, choosing a different skill each time.",
    lvl: 3,
    type: "Класс",
    subtype: "Посланник, Мастерский талант",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Златоуст",
    descr: "Требуется мастерство в навыке: Дипломатия\nWhen you attempt a Diplomacy check, you can choose not to roll your expertise die until later. After you determine what the check\’s result would be, you can choose to either roll your expertise die and add it to the total or forgo the expertise die and reroll the check. At 9th level, you can spend 1 Resolve Point to both reroll the check and add the result of your expertise die.",
    lvl: 3,
    type: "Класс",
    subtype: "Посланник, Мастерский талант",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Знаток культуры",
    descr: "Требуется мастерство в навыке: Культура\nAs long as you have enough time, you can take 20 on Culture checks to recall knowledge, even if you don\’t have access to a computer terminal or other means of research.",
    lvl: 3,
    type: "Класс",
    subtype: "Посланник, Мастерский талант",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Знаток технологий",
    descr: "Требуется мастерство в навыке: Инженерное дело\nAs long as you have the time to do so, you can take 20 on Engineering checks to identify creatures and technology, even if you do not have access to a computer terminal or other means of research. If the creature or technology was created by a group or individual you are familiar with (normally including any major corporation or military), on a successful check you also identify what group created the object identified.",
    lvl: 3,
    type: "Класс",
    subtype: "Посланник, Мастерский талант",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Искусный лжец",
    descr: "Требуется мастерство в навыке: Блеф\nWhen you attempt a Bluff check, you can choose not to roll your expertise die until later. After you determine what the check\’s result would be, you can choose to either roll your expertise die and add the result to the total or forgo the expertise die and reroll the check. At 9th level, you can spend 1 Resolve Point to reroll the check and add the result of your expertise die.",
    lvl: 3,
    type: "Класс",
    subtype: "Посланник, Мастерский талант",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Искусный медик",
    descr: "Требуется мастерство в навыке: Медицина\nWhen you attempt a Medicine check, you can choose not to roll your expertise die until later. After you determine what the check\’s result would be, you can choose to either roll your expertise die and add it to the total or forgo the expertise die and reroll the check. At 9th level, you can spend 1 Resolve Point to both reroll the check and add the result of your expertise die.",
    lvl: 3,
    type: "Класс",
    subtype: "Посланник, Мастерский талант",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Опытный техник",
    descr: "Требуется мастерство в навыке: Инженерное дело\nWhen you attempt an Engineering check to disable or repair a device, you can forgo rolling your expertise die to instead halve the time it takes to make the attempt.",
    lvl: 3,
    type: "Класс",
    subtype: "Посланник, Мастерский талант",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Осведомлённость обо всём",
    descr: "Требуется мастерство в навыке: Дипломатия\nYou keep yourself as up to date as possible about the events and major figures of any region you are in. Once you have been in a settlement or region for at least 24 hours, when you attempt a Diplomacy check to gather information, you can forgo your expertise die to attempt the check as a swift action (rather than the normal 1d4 hours).",
    lvl: 3,
    type: "Класс",
    subtype: "Посланник, Мастерский талант",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Проницательный наблюдатель",
    descr: "Требуется мастерство в навыке: Проницательность\nWhenever you interact with a creature under a mental effect for at least 1 minute, the GM attempts an automatic secret Sense Motive check for you without your expertise die. On a success, you learn about the mental effect. If you specifically request a Sense Motive check to sense mental effects, you can attempt a Sense Motive check as normal, including your expertise die, in addition to this automatic check.",
    lvl: 3,
    type: "Класс",
    subtype: "Посланник, Мастерский талант",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Профессиональный лингвист",
    descr: "Требуется мастерство в навыке: Культура\nYou can speak and read a number of bonus languages equal to your ranks in Culture. Additionally, when you attempt a Culture check to decipher writing, you can forgo your expertise die to attempt the check as a full action (rather than the normal 1 minute) per approximately 250 words of writing or fewer.",
    lvl: 3,
    type: "Класс",
    subtype: "Посланник, Мастерский талант",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Смена поведения",
    descr: "Требуется мастерство в навыке: Маскировка\nYou can quickly adjust your posture, your stride, your demeanor, and the way your clothes and gear fit, causing casual observers to fail to recognize your true appearance. When you attempt a Disguise check to alter minor details of your appearance, you can forgo your expertise die to attempt the check as a move action. You don\’t reduce the DC by 5 for attempting to alter only minor details, and if an observer succeeds at an opposed Perception check that pierces your disguise, he also realizes your true race and what features you have disguised. You can\’t use this ability for more complex disguises.",
    lvl: 3,
    type: "Класс",
    subtype: "Посланник, Мастерский талант",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Умелый фальсификатор",
    descr: "Требуется мастерство в навыке: Компьютеры\nYou have a database of electronic seals and predesigned templates that allow you forge an official document in a matter of moments. When you attempt a Computers check to create a forgery, as long as you have access to a computer, you can forgo your expertise die to attempt the check as a full action (rather than the normal required time of 1d4 minutes).",
    lvl: 3,
    type: "Класс",
    subtype: "Посланник, Мастерский талант",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Устрашающее присутствие",
    descr: "Требуется мастерство в навыке: Запугивание\nWhen you attempt an Intimidate check to demoralize an opponent, you can forgo rolling your expertise die to automatically increase the duration of the shaken condition by 1 round on a successful check. At 9th level, you instead increase the duration by 2 rounds on a success when using this talent.",
    lvl: 3,
    type: "Класс",
    subtype: "Посланник, Мастерский талант",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Хирург",
    descr: "Требуется мастерство в навыке: Медицина\nYou can use Medicine to treat deadly wounds on a patient once each day in addition to the normal allowances for the medical equipment you are using. Because performing this level of advanced medicine is difficult and time consuming, the DC for this additional treatment increases by 5 and the skill check takes 1 hour.",
    lvl: 3,
    type: "Класс",
    subtype: "Посланник, Мастерский талант",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Хитроумная маскировка",
    descr: "Требуется мастерство в навыке: Маскировка\nWhen you attempt an initial Disguise check, you can forgo rolling your expertise die. Instead, the first time a creature would pierce your disguise with a Perception check, treat its result as if it had rolled a natural 1 on its Perception check. This benefit applies only once per disguise. At 9th level, this ability also applies against the second creature who pierces your disguise.",
    lvl: 3,
    type: "Класс",
    subtype: "Посланник, Мастерский талант",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Импровизация посланника",
    descr: "As you gain experience, you learn envoy improvisations—little tricks that bolster allies, confound enemies, or change the ebb and flow of battle using guile, inspiration, or luck. You learn your first envoy improvisation at 1st level, and you learn an additional improvisation at 2nd level and every 2 levels thereafter.\nIf an improvisation allows you to grant an effect to an ally, you cannot grant yourself that effect unless the improvisation states otherwise. If an envoy improvisation allows a saving throw to resist its effects, the DC is equal to 10 + half your envoy level + your Charisma modifier.\nSome envoy improvisations are language-dependent, mind-affecting, sense-dependent, or some combination of any or all of these.",
    lvl: 1,
    type: "Класс",
    subtype: "Посланник, Способность класса",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Мастерство",
    descr: "You are an expert at dealing with challenges that test your skills, be the challenges social or otherwise. At 1st level, when attempting a Sense Motive check, you can roll 1d6 (your expertise die) and add the result of the roll to your check as an insight bonus. You can use this and other expertise abilities as long as you have at least 1 Resolve Point remaining. At 5th level, anytime you roll your expertise die, you gain a +1 bonus to the result. At 9th, 17th, and 20th levels, this bonus increases by 1. At 13th level, you roll 1d8 as your expertise die instead of 1d6.\nBeginning at 9th level, you have even greater expertise with skills to which you can add your expertise die that you have also selected with the Skill Focus feat. For each such skill, once per day when rolling your expertise die to add to that skill, you may roll the expertise die twice and take the better of the two results. ",
    lvl: 1,
    type: "Класс",
    subtype: "Посланник, Способность класса",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Мастерство в навыке",
    descr: "At 1st level and every 4 levels thereafter, you can use expertise with one additional class skill. You must have at least 1 rank in a skill to select it, and it must come from the following list: Bluff (Cha), Computers (Int), Culture (Int), Diplomacy (Cha), Disguise (Cha), Engineering (Int), Intimidate (Cha), and Medicine (Int). ",
    lvl: 1,
    type: "Класс",
    subtype: "Посланник, Способность класса",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Мастерский талант",
    descr: "At 3rd level and every 4 levels thereafter, you choose an expertise talent, which gives you an extra option when using a skill with which you have expertise.",
    lvl: 3,
    type: "Класс",
    subtype: "Посланник, Способность класса",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Привычное оружие [Посланник]",
    descr: "Вы получаете черту Привычное оружие для следующих типов оружия: Простое оружие ближнего боя, Короткоствольное.",
    lvl: 3,
    type: "Класс",
    subtype: "Посланник, Способность класса",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Истинный мастер",
    descr: "You gain total mastery over one of your envoy improvisations and can use it with but a thought. When you gain this ability, choose one improvisation you know that has an effect when you spend 1 Resolve Point.\nAs long as you have at least 1 Resolve Point remaining, you can gain the improvisation\’s effect without spending the Resolve Point. This ability has no benefit if the improvisation requires more than 1 Resolve Point.\nIn addition, when you roll your expertise die, you can add 2d8 rather than 1d8+4 to the result of your skill check. If, for some reason, your bonus gained from expertise isn\’t 1d8+4, you can\’t use this option.",
    lvl: 20,
    type: "Класс",
    subtype: "Посланник, Способность класса",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Бомбардир",
    descr: "The bombard fighting style emphasizes attacking multiple targets, often using grenades, and leverages substantial physical strength to control large weapons with significant recoil. At higher levels, you can use launchers, missiles, and other heavy weapons.",
    lvl: 1,
    type: "Класс",
    subtype: "Солдат, Боевой стиль",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Бронированный колосс",
    descr: "The armor storm fighting style focuses on using armor as a weapon by maximizing the damage of armor-based weapons while withstanding enemy fire. You learn to increase the effectiveness of attacks made with your armor and to add equipment normally beyond your armor\’s capacity.",
    lvl: 1,
    type: "Класс",
    subtype: "Солдат, Боевой стиль",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Коммандо",
    descr: "The hit-and-run fighting style focuses on tactical movement as you move in and out of combat. You use ranged weapons but fight close up, and you can even mix ranged and melee attacks. Your abilities allow you to move even when you make full attacks and to avoid getting locked down by your enemies.",
    lvl: 1,
    type: "Класс",
    subtype: "Солдат, Боевой стиль",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Меткий стрелок",
    descr: "The sharpshoot fighting style enables you to excel at making accurate attacks, usually with ranged weapons at a long distance. You can ignore cover and other impediments to your shots, and your attacks are improved by your intense focus.",
    lvl: 1,
    type: "Класс",
    subtype: "Солдат, Боевой стиль",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Рунический воин",
    descr: "The arcane assailant fighting style supplements its combat effectiveness with magic powers, drawing on traditions of warrior-wizards dating back to well before the Gap. This allows you to use magic runes to augment your weapons and call on legendary powers, giving you access to arcane options even when you don\’t have a magic weapon in your possession.",
    lvl: 1,
    type: "Класс",
    subtype: "Солдат, Боевой стиль",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Страж",
    descr: "The guard fighting style focuses on defense. You become adept at wearing armor, protecting against attacks, and enduring damage and other setbacks from attacks that get through your defenses.",
    lvl: 1,
    type: "Класс",
    subtype: "Солдат, Боевой стиль",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Штурмовик",
    descr: "Суть этого стиля – в использовании скорости и агрессивной тактики, чтобы как можно быстрее оказаться в гуще сражения. Вы оперативно реагируете на угрозы, а также получаете способности, позволяющие добиться превосходства в ближнем бою, даже когда враги окружили вас со всех сторон.",
    lvl: 1,
    type: "Класс",
    subtype: "Солдат, Боевой стиль",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Бронированное превосходство",
    descr: "При ношении брони выполучаете бонус +1 (интуитивный) к ККБ.",
    lvl: 3,
    type: "Класс",
    subtype: "Солдат, Военная хитрость",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Кислотные ожоги",
    descr: "Когда вы наносите критический удар оружием из категории \’дезинтеграторное\’, вы увеличивете урон критического эффекта \’окисление\’ на 1d6. Если у оружия нет этого критического эффекта, оно получает критический эффект \’окисление 1d6\’. Вы можете добавить этот критический эффект своему дезинтеграторному оружию, даже если у него уже есть другой критический эффект.",
    lvl: 3,
    type: "Класс",
    subtype: "Солдат, Военная хитрость",
    category: "ЭКС",
    requirement: null,
    source: "СП-02"
},
{
    name: "Лазерная точность",
    descr: "You gain a +1 insight bonus to attack rolls with weapons in the laser category.",
    lvl: 3,
    type: "Класс",
    subtype: "Солдат, Военная хитрость",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Плотный конус",
    descr: "You gain a +2 insight bonus to damage rolls with weapons that have the blast special property (such as a scattergun). This extra damage applies only to creatures within 10 feet of you; creatures farther away take the normal amount of damage. This bonus increases by 1 for every 4 soldier levels you have.",
    lvl: 3,
    type: "Класс",
    subtype: "Солдат, Военная хитрость",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Рукопашник",
    descr: "Вы добавляете к урону оружия ближнего боя дополнительный бонус в размере ½ вашего модификатора Силы.",
    lvl: 3,
    type: "Класс",
    subtype: "Солдат, Военная хитрость",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Шквал свинца",
    descr: "You gain a +1 insight bonus to damage rolls for weapons in the projectile category. This bonus increases by 1 for every 4 soldier levels you have.",
    lvl: 3,
    type: "Класс",
    subtype: "Солдат, Военная хитрость",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Звуковой резонанс",
    descr: "When you hit a creature within 30 feet of you using a weapon in the sonic category, the sonic energy continues to resonate within that creature, giving it the flat-footed condition for 1 round. If you hit multiple creatures at the same time (such as with an automatic, blast, or explode weapon), only the creature nearest to you or to the center of the explosion (your choice if multiple creatures are equidistant) is affected.",
    lvl: 7,
    type: "Класс",
    subtype: "Солдат, Военная хитрость",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Магический якорь",
    descr: "As a full action, you can make a single attack with a magic weapon against a single foe. If the attack is a ranged attack, the target must be within the first range increment. Even if the attack normally affects an area or multiple targets, it affects only your selected target. If your attack hits, you can spend 1 Resolve Point to force the target to attempt a Will saving throw (DC = 10 + half your soldier level + your key ability score modifier). If the target fails its save, it can\’t voluntarily move from its current space for 1d4 rounds. This has no effect on involuntary movement, but it does prevent the creature from teleporting or moving to another plane. Once you\’ve struck a foe with this attack, whether it succeeds at or fails its saving throw, it is immune to this ability for 24 hours.",
    lvl: 7,
    type: "Класс",
    subtype: "Солдат, Военная хитрость",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Мгновенная заморозка",
    descr: "When you hit a creature with a weapon in the cryo category, that creature\’s speeds are reduced by 10 feet for 1 round, to a minimum of 10 feet.",
    lvl: 7,
    type: "Класс",
    subtype: "Солдат, Военная хитрость",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Мощная взрывчатка",
    descr: "Когда вы совершаете атаку оружием с особым свойством \’взрыв\’ и радиусом взрыва 10 или более футов, вы можете увеличить радиус взрыва на 5 футов.",
    lvl: 7,
    type: "Класс",
    subtype: "Солдат, Военная хитрость",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Плазменный поджог",
    descr: "You are expert at setting things on fire with plasma. If your attack roll with a weapon in the plasma category is a 19 (the d20 shows a 19), and the attack hits your target, the target gains the burning condition. The condition deals 1d4 fire damage if the weapon has an item level of 1st-6th, 1d8 if its item level is 7th-14th, and 2d8 if its item level is 15th or higher.",
    lvl: 7,
    type: "Класс",
    subtype: "Солдат, Военная хитрость",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Электрическая дуга",
    descr: "When you hit a target with a weapon in the shock category, electricity arcs out from your original target to deal electricity damage to a secondary subject within 10 feet of the original target. This damage is equal to the weapon\’s level. The secondary subject must be the creature nearest to the original target (your choice if multiple creatures are equidistant).\nThis gear boost does not function for weapons that have the explode or blast special property. If you use this gear boost with a weapon with the arc critical hit effect, your secondary subject for electric arc must be the same as your secondary subject for the arc critical effect.",
    lvl: 7,
    type: "Класс",
    subtype: "Солдат, Военная хитрость",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Тяжёлый натиск",
    descr: "Your attacks with heavy weapons bypass part of the target\’s damage reduction. If your heavy weapon does not already overcome the target\’s damage reduction, treat the target\’s damage reduction as though it were 5 lower. At 15th level, treat the target\’s damage reduction as 10 lower.",
    lvl: 11,
    type: "Класс",
    subtype: "Солдат, Военная хитрость",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Быстрое реагирование",
    descr: "Вы получаете бонус +4 к проверкам инициативы, а ваша наземная скорость увеличивается на 10 футов.",
    lvl: 1,
    type: "Класс",
    subtype: "Солдат, Способность боевого стиля, Штурмовик",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Гренадёр",
    descr: "You increase the range increment of your thrown grenades by 5 × your Strength bonus. In addition, you\’re able to salvage enough materials to create a grenade without paying for it. Creating a grenade takes 10 minutes. You can create any grenade whose item level is less than or equal to your soldier level, but this grenade is unstable and only you can use it effectively. If anyone else tries to use the grenade, it is a dud. You can have only one grenade created by this ability at one time (if you create a new grenade using this ability, the old grenade no longer works).",
    lvl: 1,
    type: "Класс",
    subtype: "Солдат, Способность боевого стиля, Бомбардир",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Могучий кулак",
    descr: "You treat any unarmed strike you make while wearing heavy or powered armor as being made with a battleglove with an item level equal to or lower than your soldier level, and you calculate damage for these attacks as if you had the melee striker gear boost. If you have the melee striker gear boost, you gain a +2 bonus to damage rolls with your unarmed strikes when using this ability. These unarmed strikes don\’t benefit from other abilities that apply specifically to unarmed strikes (such as the Improved Unarmed Strike feat).",
    lvl: 1,
    type: "Класс",
    subtype: "Солдат, Способность боевого стиля, Бронированный колосс",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Привычная броня",
    descr: "Штрафы за броню снижаются для вас на 1 (до минимума в 0), а максимальный бонус Ловкости к КБ увеличивается на 1.",
    lvl: 1,
    type: "Класс",
    subtype: "Солдат, Способность боевого стиля, Страж",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Руна рыцаря-колдуна",
    descr: "Вы можете нанести на оружие волшебный знак, руну рыцаря-колдуна, чтобы оружие считалось магическим при преодолении СУ и атаках против бестелесных существ. Начертание руны занимает 10 минут, одновременно её можно нанести только на одно оружие. Если вы начертите новую руну на другом оружии, предыдущая потеряет силу. При определении твёрдости и ПЗ оружия с нанесённой руной, его уровень считается на 5 выше, чем обычно.",
    lvl: 1,
    type: "Класс",
    subtype: "Солдат, Способность боевого стиля, Рунический воин",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Снайперская точность",
    descr: "Когда вы совершаете дистанционную атаку против цели, находящейся в укрытии, бонус от КБ укрытия снижается на 2. Эту способность нельзя использовать против целей, находящихся в полном укрытии.",
    lvl: 1,
    type: "Класс",
    subtype: "Солдат, Способность боевого стиля, Меткий стрелок",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Упредительный выстрел [Коммандо]",
    descr: "Вы получаете дополнительную черту Упредительный выстрел. Если она у вас уже есть, выберите другую дополнительную черту из списка боевых. Начиная с 9 уровня вы можете использовать Упредительный выстрел в бою и во время вашего первого хода, и во время второго.",
    lvl: 1,
    type: "Класс",
    subtype: "Солдат, Способность боевого стиля, Коммандо",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Атака с разгона",
    descr: "В качестве основного действия вы можете совершить атаку с разбега без штрафов. В конце атаки с разбега вы можете совершить таран вместо одной атаки в ближнем бою. Когда вы получаете классовую особенность солдатский натиск, вы можете совершить не одну, а две атаки в конце атаки с разбега, но каждая из них получает штраф -4.",
    lvl: 5,
    type: "Класс",
    subtype: "Солдат, Способность боевого стиля, Штурмовик",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Вмешательство стража",
    descr: "When an ally adjacent to you is damaged by an attack, you can use your reaction to intercede. You take half the damage, and your ally takes the other half. This has no effect on spells, and any conditions delivered by the attack apply to both of you. In addition, you are now proficient with powered armor.",
    lvl: 5,
    type: "Класс",
    subtype: "Солдат, Способность боевого стиля, Страж",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Залп на ходу",
    descr: "When you make a full attack, you can also either take a guarded step or move up to half your speed. This movement can come before, between, or after your attacks, but it can\’t be split up.",
    lvl: 5,
    type: "Класс",
    subtype: "Солдат, Способность боевого стиля, Коммандо",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Сильный обстрел",
    descr: "You can use your physical power to steady your weapon and make your attacks more dangerous. As a full action, you can make a single ranged attack that deals additional damage equal to your Strength bonus to all targets. You can use this ability in conjunction with the automatic, explode, or unwieldy special property.",
    lvl: 5,
    type: "Класс",
    subtype: "Солдат, Способность боевого стиля, Бомбардир",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Сконцентрированный огонь",
    descr: "При совершении полной атаки дистанционным оружием вы можете предпринять обе атаки со штрафом -3 (вместо обычного -4), если обу они нацелены на одно и то же существо. Если после первой атаки цель умерла или потеряла сознание, вы можете совершить вторую атаку против другого существа со штрафом -4.\nКогда вы получаете классовую особенность солдатский натиск, вы можете сочетать её с этой способностью, чтобы совершить три атаки по одному существу со штрафом -5. Если после первой или второй атаки цель умерла или потеряла сознание, вы можете совершить оставшиеся атаки против другого существа со штрафом -6.",
    lvl: 5,
    type: "Класс",
    subtype: "Солдат, Способность боевого стиля, Меткий стрелок",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Тайна магов",
    descr: "When you imbue a weapon with the rune of the eldritch knight, in addition to its normal benefits, the rune grants the weapon one of the following weapon fusions of your choice: flaming, frost, ghost killer, merciful, or shock. The weapon can\’t gain a fusion it already has, and this bonus fusion doesn\’t count toward the maximum total level of fusions the weapon can have at once. The bonus fusion ends when the weapon ceases to be imbued with the rune of the eldritch knight.",
    lvl: 5,
    type: "Класс",
    subtype: "Солдат, Способность боевого стиля, Рунический воин",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Ходячий танк",
    descr: "You gain the Powered Armored Proficiency feat and access to improved armor. This might be the result of your own engineering abilities or a powerful patron giving you gear not available to the general public. You can add one more upgrade to your armor than its normal maximum number of upgrade slots. If you add this bonus upgrade to heavy armor, you can select an upgrade normally limited to powered armor. An upgrade placed in this bonus slot costs half the normal credit amount and sells for 10% of the reduced cost. If you move an upgrade from this bonus slot to another slot, you must pay the difference between the upgrade\’s reduced cost and its normal cost.",
    lvl: 5,
    type: "Класс",
    subtype: "Солдат, Способность боевого стиля, Бронированный колосс",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Быстрое восстановление",
    descr: "You can spend Resolve Points to ignore detrimental conditions. As a move action, you can spend 1 Resolve Point to suppress one of the following conditions for 10 minutes: exhausted, fatigued, frightened, nauseated, shaken, sickened, or staggered. After 10 minutes, if the condition\’s duration hasn\’t ended, the condition\’s effects return. You can suppress only one condition at a time; if you are both fatigued and shaken, you can avoid the effects of only one of them, and if you are affected by two different instances of the same condition, you\’re still affected by the second one.",
    lvl: 9,
    type: "Класс",
    subtype: "Солдат, Способность боевого стиля, Страж",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Контузия",
    descr: "When you hit an enemy with a ranged attack or an attack with a weapon with the blast or explode special property, you can spend 1 Resolve Point to inflict a debilitating effect on that enemy for a number of rounds equal to your Strength bonus. You can choose to make the target deafened, flat-footed, or off-target, or to reduce its speeds by half (to a minimum of 10 feet). The target can negate this effect with a successful Fortitude save (DC = 10 + half your soldier level + your Strength modifier).",
    lvl: 9,
    type: "Класс",
    subtype: "Солдат, Способность боевого стиля, Бомбардир",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Наклоны и нырки",
    descr: "When you move or make a ranged attack, you can spend 1 Resolve Point to avoid provoking attacks of opportunity from that movement or ranged attack.",
    lvl: 9,
    type: "Класс",
    subtype: "Солдат, Способность боевого стиля, Коммандо",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Напролом",
    descr: "While you are wearing heavy armor or powered armor, you gain a +4 bonus to attack rolls to perform a bull rush combat maneuver. If you successfully push the target back 10 feet or more, you can also damage the target with an unarmed strike (and can use your hammer fist ability when doing so).",
    lvl: 9,
    type: "Класс",
    subtype: "Солдат, Способность боевого стиля, Бронированный колосс",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Предельная концентрация",
    descr: "When you make a ranged attack against a target with cover or concealment, you can spend 1 Resolve Point to negate its AC bonus from cover and reduce its concealment by one category (from total concealment to concealment or from concealment to no concealment). This benefit applies to all ranged attacks you make against that target this round. You can\’t use intense focus more than once per round, nor can you use it against an enemy with total cover.",
    lvl: 9,
    type: "Класс",
    subtype: "Солдат, Способность боевого стиля, Меткий стрелок",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Сила легенд",
    descr: "You can call on the link between you and the legendary heroes who wielded powerful magic weapons eons ago to overcome adversity. As a move action when wielding a magic weapon or a weapon imbued with the rune of the eldritch knight, you can spend 1 Resolve Point to end one of the following conditions affecting you: bleeding, burning, confused, exhausted, fatigued, flat-footed, off-target, shaken, or sickened. Alternatively, you can spend 1 Resolve Point to change the cowering condition to the frightened condition or change the frightened condition to the shaken condition. In this case, the new condition lasts for the same duration the original condition would have and can\’t be further affected by this ability.",
    lvl: 9,
    type: "Класс",
    subtype: "Солдат, Способность боевого стиля, Рунический воин",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Снова в бой",
    descr: "В качестве сопутствующего действия вы можете потратить 1 ПР, чтобы восстановить ПЖ в количестве, равном вашему уровню солдата + 2d6. Вы не можете использовать эту способность повторно, пока не восстановите ПЖ после 10-минутного отдыха. Количество восстанавливаемых ПЖ увеличивается на 1d6 на 10, 15 и 20 уровне.",
    lvl: 9,
    type: "Класс",
    subtype: "Солдат, Способность боевого стиля, Штурмовик",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Внезапная атака",
    descr: "Когда вы попали по противнику внеочередной атакой, он не может переместиться за пределы контролируемых вами клеток до начала своего хода.\nКроме этого, когда противник совершает осторожный шаг, чтобы покинуть контролируемую вами клетку, вы можете совершить по нему внеочередную атаку со штрафом -2.\nЕсли цель своим перемещением спровоцировала вашу внеочередную атаку, то при попадании этой атакой перемещение немедленно завершается и не может быть продолжено.",
    lvl: 13,
    type: "Класс",
    subtype: "Солдат, Способность боевого стиля, Штурмовик",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Кинетическая устойчивость",
    descr: "You gain DR 3/—. At 17th level, this DR increases to 5/—.",
    lvl: 13,
    type: "Класс",
    subtype: "Солдат, Способность боевого стиля, Страж",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Передвижной арсенал",
    descr: "You become a master of all weapons associated with your armor. You deal 1d6 additional damage with any attack from a weapon that is part of your armor, including unarmed strikes using the hammer fist ability and weapons that have been attached to your armor as an armor upgrade. The additional damage is of the same type as the weapon\’s normal type. Also, while wearing heavy or powered armor, you gain a +2 bonus to your KAC against combat maneuvers.",
    lvl: 13,
    type: "Класс",
    subtype: "Солдат, Способность боевого стиля, Бронированный колосс",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Подрывник",
    descr: "You increase the DC to avoid attacks you make using weapons with the explode special property by 1. You reduce the amount of any damage you take from any weapon with the explode special property by an amount equal to your Strength bonus.",
    lvl: 13,
    type: "Класс",
    subtype: "Солдат, Способность боевого стиля, Бомбардир",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Сконцентрированный урон",
    descr: "When you use focus fire, each attack against the first target deals 2d6 additional damage. Additional creatures you attack after killing or knocking out your first target don\’t take this extra damage.",
    lvl: 13,
    type: "Класс",
    subtype: "Солдат, Способность боевого стиля, Меткий стрелок",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Тайна архимагов",
    descr: "You can imbue two weapons with the rune of the eldritch knight. If you attempt to imbue a third weapon, the weapon infused first loses its rune and all benefits. In addition to the normal benefits, the runes grant the weapons one or more of the following weapon fusions of your choice: bane, corrosive, ethereal, flaming, frost, holy, merciful, shock, thundering, or unholy. You can grant no more than 10 total levels\’ worth of fusions between the two weapons, and the bane fusion counts as a 10th-level fusion for this purpose.",
    lvl: 13,
    type: "Класс",
    subtype: "Солдат, Способность боевого стиля, Рунический воин",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Трудная цель",
    descr: "On any turn in which you move, you gain a +1 insight bonus to your AC until the start of your next turn.",
    lvl: 13,
    type: "Класс",
    subtype: "Солдат, Способность боевого стиля, Коммандо",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Волшебная атака",
    descr: "As a standard action, you can spend 1 Resolve Point to use a weapon imbued with the rune of the eldritch knight to make an attack that strikes true. This attack ignores all cover and concealment, including total concealment (though you must at least be aware of a creature\’s presence to target it with this attack). If the attack is a ranged attack, the target must be within the first range increment. The attack only affects your selected target, even if it normally affects an area or multiple targets. You still must make a normal attack roll, and if your attack misses, it has no effect.",
    lvl: 17,
    type: "Класс",
    subtype: "Солдат, Способность боевого стиля, Рунический воин",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Вопреки всему",
    descr: "Ваши проверки урона в ближнем бою получают бонус, равный удвоенному количеству противников в пределах 10 футов от вас.\nПротивники, не являющиеся достойными (те, чей КО меньше вашего уровня на 4 и более, либо на усмотрение ведущего), при определении бонуса не учитываются.",
    lvl: 17,
    type: "Класс",
    subtype: "Солдат, Способность боевого стиля, Штурмовик",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Непробиваемая защита",
    descr: "As a standard action, you can set up a strong defense for yourself and an adjacent ally. Until the start of your next turn, you gain three benefits: your damage reduction increases to DR 10/—; you and the chosen ally each gain a +4 bonus to AC; and if you use guard\’s protection, you direct all the damage to yourself such that your ally takes none.",
    lvl: 17,
    type: "Класс",
    subtype: "Солдат, Способность боевого стиля, Страж",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Отбрасывающая атака",
    descr: "As a full action, you can make a ranged attack that knocks enemies back. Targets you hit are knocked back 5 feet from you. If you use a weapon with the explode special property, all targets that fail their saving throws are instead knocked back 5 feet from the center of the explosion. An enemy that you critically hit or that rolls a natural 1 on its saving throw is also knocked prone. You can\’t make an impactful attack with an automatic weapon, but you can use this ability with a weapon that has the blast special property.",
    lvl: 17,
    type: "Класс",
    subtype: "Солдат, Способность боевого стиля, Бомбардир",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Отвлекающий выстрел",
    descr: "As a full action, you can make one attack and give the benefit of harrying fire against any creature you hit with that attack. If you use a blast weapon or automatic weapon, the benefit applies against all targets hit. You can also take your nimble fusillade movement before or after this attack.",
    lvl: 17,
    type: "Класс",
    subtype: "Солдат, Способность боевого стиля, Коммандо",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Повышенная мобильность",
    descr: "You learn to control your armor with such ease, you are actually more maneuverable in it than out of it. While wearing heavy armor or powered armor, you can move up to your speed when you make a full attack. You can move before or after all your attacks, but not both. If you have the Shot on the Run feat, you can divide your movement to move both before and after making a full attack as long as all the attacks are ranged attacks. If you have the Spring Attack feat, you can divide your movement to move both before and after making a full attack as long as all the attacks are melee attacks. If you have both feats, your attacks can be any combination of melee and ranged attacks.",
    lvl: 17,
    type: "Класс",
    subtype: "Солдат, Способность боевого стиля, Бронированный колосс",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Подготовленный выстрел",
    descr: "As a standard action, you can study a target before you attack. The target must be within line of sight of you and either flat-footed or unaware of your presence. On the first attack you make against that target on your next turn, you gain a +2 bonus to your attack roll. If your attack hits, the target is staggered for 1 round; if you score a critical hit, the target is instead stunned for 1 round. Once you make a prepared shot, you can\’t use this ability again against the same target for 24 hours. You can\’t make an attack on the same round you study the target, even if an ability would let you attack without spending a standard or full action.",
    lvl: 17,
    type: "Класс",
    subtype: "Солдат, Способность боевого стиля, Меткий стрелок",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Основной боевой стиль",
    descr: "Вы предпочитаете сражаться, придерживаясь более удобного для вас стиля ведения боя. Каждый стиль содержить набор техник, которые вы изучаете по мере накопления опыта. Вы выбираете один из боевых стилей на первом уровне солдата, впоследствии этот выбор изменить невозможно.",
    lvl: 1,
    type: "Класс",
    subtype: "Солдат, Способность класса",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Техника основного стиля",
    descr: "На 1 уровне и каждые 4 уровня после этого вы изучаете новую технику для вашего основного боевого стиля.",
    lvl: 1,
    type: "Класс",
    subtype: "Солдат, Способность класса",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Боевая черта",
    descr: "На 2 уровне и каждые 2 уровня после этого вы получаете дополнительную черту (вдобавок к выбираемым при повышении в уровне). Дополнительные черты должны быть взяты из списка боевых черт.\nКогда вы получете новую дополнительную черту, то можете также заменить одну ранее взятую вами дополнительную черту новой, потеряв при этом первую и получив вторую. Потерянная черта не должна являться одним из требований для других имеющихся у вас черт или способностей. Каждый раз вы можете заменить только одну черту, а решение о замене принимаете в тот же момент, когда получаете новую дополнительную черту.",
    lvl: 2,
    type: "Класс",
    subtype: "Солдат, Способность класса",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Военная хитрость",
    descr: "На 3 уровне и каждые 4 уровня после этого вы изучаете приём, называемый военной хитростью, позволяющий лучше использовать определённый тип оружия или брони. Для выбора некоторых из нижеперечисленных военных хитростей требуется достичь определённого уровня в классах солдата.",
    lvl: 3,
    type: "Класс",
    subtype: "Солдат, Способность класса",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Привычное оружие [Солдат]",
    descr: "Вы получаете черту Привычное оружие для следующих типов оружия: Простое оружие ближнего боя, Высокотехнологичное оружие ближнего боя, Короткоствольное, Длинноствольное, Снайперское, Тяжёлое.",
    lvl: 3,
    type: "Класс",
    subtype: "Солдат, Способность класса",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Вспомогательный боевой стиль",
    descr: "Вы выбираете ещё один боевой стиль. Впоследствии этот выбор изменить невозможно.",
    lvl: 9,
    type: "Класс",
    subtype: "Солдат, Способность класса",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Техника вспомогательного стиля",
    descr: "На 9 уровне и каждые 4 уровня после этого вы изучаете новую технику для вашего вспомогательного боевого стиля. При определении соответствия требованиям техник этого стиля ваш уровень солдата считается на 8 ниже, чем на самом деле.",
    lvl: 9,
    type: "Класс",
    subtype: "Солдат, Способность класса",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Солдатский натиск",
    descr: "При совершении полной атаки вы можете предпринять до трёх атак вместо двух. Вы получаете штраф -6 к этим атакам (вместо обычного штрафа -4).",
    lvl: 11,
    type: "Класс",
    subtype: "Солдат, Способность класса",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Смертельная атака",
    descr: "В качестве основного действия вы можете совершить одиночную атаку по противнику. Если атака попала в цель, но не убила её, вы можете потратить 1 ПР, чтобы заставить это существо пройти испытание Стойкости; при провале оно умирает. Существо, против которого вы применили эту способность (вне зависимости от того, заставили ли вы его проходить испытание Стойкости или нет), становится невосприимчиво к вашей смертельной атаке на 24 часа.",
    lvl: 20,
    type: "Класс",
    subtype: "Солдат, Способность класса",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Звёздная броня",
    descr: "Вы можете превратить вашу звёздную крупицу в сотканную из звёздной энергии броню, окружающую тело. Броня может состоять из яркого света или непроглядной тьмы – в зависимости от вашего воплощения, но её вид определяете сами –это могут быть светящиеся бронированные пластины из застывшего звёздного света, облегающий костюм из переливающейся энергии или аура из звёздного вещества. Внешний вид брони никак не влияет на её параметры и не даёт особых способностей. Его можно изменить только при получении нового уровня соляриона.\nЗвёздная броня добавляет бонус +1(усиление) к ЭКБ и ККБ. Начиная с 10 уровня этот бонус увеличивается до +2. Звёздная броня полностью совместима с лёгкой бронёй, но не даёт никаких преимуществ при использовании тяжёлой или силовой брони. Начиная с 5 уровня звёздная броня даёт вам устойчивость 5 либо к огню, либо к холоду, пока активна. Вы выбираете тип энергии при активации брони и можете изменить его, потратив сопутствующее действие. На 10 уровне и каждые 5 уровней после этого устойчивость увеличивается ещё на 5.\nВоплощение или развоплощение брони требует сопутствующего действия.",
    lvl: 1,
    type: "Класс",
    subtype: "Солярион, Звёздное воплощение",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Звёздное оружие",
    descr: "Вы сжимаете звёздную крупицу в руке, превращая её в оружие ближнего боя, сделанное из звёздной энергии. Оружие может светиться или состоять из тьмы – в зависимости от вашего воплощения, но его вид определяете вы сами. Чаще всего солярионы предпочитают обычное оружие – мечи, топоры и копья, но встречаются и другие варианты – большие руны из звёздного света, пучки извивающихся энергетических щупалец или даже огромные кулаки. Внешний вид оружия никак не влияет на его параметры и не даёт особых свойств (например, не делает длинным). Его можно изменить только при получении нового уровня соляриона.\nВаше звёздное оружие считается одноручным кинетическим высокотехнологическим оружием ближнего боя с уровнем, равным вашему уровню соляриона, и вы умеете с ним обращаться. На 1 уровне вы выбираете тип наносимого урона: дробящий, колющий или режущий. При получении нового уровня соляриона вы можете изменить выбранный тип урона. Урон от звёздного оружия равен 1d6 + модификатор вашей силы. он увеличивается на 1d6 на 6, 9 и 12 уровне, а также на каждом уровне после этого. Кроме этого, урон звёздного оружия можно увеличить при помощи солярионских кристаллов.\nВоплощение или развоплощение звёздного оружия требует сопутствующего действия, занимая столько же времени, что и выхватывание или убирание оружия (и может быть совмещено с перемещение в качестве единого сопутствующего действия или ускорено чертой Быстрое выхватывание). Покинув вашу руку, звёздное оружие немедленно развоплощается.",
    lvl: 1,
    type: "Класс",
    subtype: "Солярион, Звёздное воплощение",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Гравитационное удержание",
    descr: "This revelation allows you to move objects at a distance as per psychokinetic hand.\nWhen you are attuned or fully attuned, you can use the psychokinetic hand ability of your gravity hold to immobilize, lift, or move a Medium or smaller creature. The creature can attempt a Fortitude save to negate the effect. While under this effect, the target creature cannot move, but can take any other normal actions. This ability follows all of the restrictions of the spell other than the weight limit, but you can\’t lift a creature higher than 5 feet off the ground. When you spend a standard action concentrating to maintain the gravity hold, the target can attempt a new save to end the effect. Once a creature successfully saves against this ability, it becomes immune to further uses of this revelation for 24 hours.",
    lvl: 2,
    type: "Класс",
    subtype: "Солярион, Звёздное откровение, Гравитонное",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Гравитационный якорь",
    descr: "As a move action, you can form a gravitational bond between yourself and either the surface you\’re standing on or the objects you are holding. This grants you a +4 bonus to your AC against bull rush, reposition, and trip combat maneuvers if you choose the surface underfoot, or against disarm combat maneuvers if you choose objects. The bonus lasts for 1 round or until you leave graviton mode. You can have only one gravity anchor active at a time.\nWhen you are attuned or fully attuned, you can activate this revelation as a reaction when targeted by a bull rush, disarm, reposition, or trip combat maneuver, in which case it defends against only that attack.",
    lvl: 2,
    type: "Класс",
    subtype: "Солярион, Звёздное откровение, Гравитонное",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Изменение гравитации",
    descr: "You can increase or reduce the gravitational attraction between yourself and the terrain around you. You can add a bonus equal to one-third your solarian level (minimum +1) to Athletics checks to climb, jump, or swim as part of the action you take to attempt the skill check. In addition, as a reaction when you are falling, you can reduce the falling damage you take by half. At 6th level, you can move along vertical surfaces and even upside down along ceilings for 1 round. This functions as spider climb, but it leaves your hands free and you can also run. You must end your movement on a surface that can support you normally. If you end your movement while you are standing on a vertical surface or ceiling, you fall unless you succeed at an Athletics check to climb to remain in position.\nWhen you are attuned or fully attuned, the bonus you gain from this revelation to checks to climb, jump, or swim doubles.",
    lvl: 2,
    type: "Класс",
    subtype: "Солярион, Звёздное откровение, Гравитонное",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Тёмная материя",
    descr: "As a move action, you can draw on the properties of dark matter to increase your density, allowing you to resist physical damage. You gain damage reduction 1/—. This increases to DR 2/— at 6th level and increases by 1 again every 3 solarian levels thereafter. This benefit lasts for 1 round or until you leave graviton mode. When you are attuned or fully attuned, your DR from dark matter is equal to half your solarian level.",
    lvl: 2,
    type: "Класс",
    subtype: "Солярион, Звёздное откровение, Гравитонное",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Гравитационный всплеск",
    descr: "В качестве действия полного хода вы можете провести боевой манёвр разоружения или сбивания с ног против цели в пределах 30 футов от вас. Для проверки этой атаки вы вместо модификатора Силы используете модификатор Харизмы и получаете бонус +4 (не складывается с бонусом от черты Боевой манёвр+).Когда вы настроены или достигли полной гармонии, то при разоружении противника при помощи гравитационного всплеска вы можете притянуть и схватить упавший предмет, если у вас есть свободная рука. Если гравитационный всплеск сбил цель с ног, вы можете притянуть её на 10 или менее футов ближе к себе.",
    lvl: 6,
    type: "Класс",
    subtype: "Солярион, Звёздное откровение, Гравитонное",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Игнорирование гравитации",
    descr: "As a move action, you can fly up to your speed. You must end this movement on solid ground or you fall. At 12th level or higher, you don\’t have to land if you immediately follow your flight with another move action to use defy gravity. On your last move action of the turn, you still have to land or fall.\nWhen you are attuned or fully attuned, your fly speed from this revelation increases by 10 feet.",
    lvl: 6,
    type: "Класс",
    subtype: "Солярион, Звёздное откровение, Гравитонное",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Отражение",
    descr: "You can reflect ranged attacks back at your enemies. If you took the total defense action on your last turn, or if you were fighting defensively and spend 1 Resolve Point, as a reaction you can redirect a ranged attack that misses you. Select a new target within 30 feet and make a ranged attack roll with a –4 penalty. If your attack hits, the new target is damaged as if it had been the intended target of the original ranged attack.\nWhen you are attuned or fully attuned, you don\’t take a –4 penalty to your redirected attack roll.",
    lvl: 6,
    type: "Класс",
    subtype: "Солярион, Звёздное откровение, Гравитонное",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Сдавливание",
    descr: "В качестве основного действия вы можете усилить воздействие гравитации на внутренние органы или механизмы цели в пределах 30 футов, ограничивая её действия. Цель проходит испытание Стойкости и при провале ошеломлена на 1 раунд. Это откровение может воздействовать и на конструкции. Вы можете каждый раунд тратить сопутствующее действие на поддержание этого эффекта, но цель в каждом раунде получает возможность пройти новое испытание и отменить эффект. Когда существо успешно проходит испытание или когда эффект прекращается, оно не может повторно стать целью этой вашей способности в течение 24 часов.\nКогда вы настроены или достигли полной гармонии, вы также можете потратить 1 ПР, чтобы повергнуть цель в шок на 1 раунд. Поддерживая эффект в последующих раундах, вы продлеваете только ошеломление, но не шок.",
    lvl: 6,
    type: "Класс",
    subtype: "Солярион, Звёздное откровение, Гравитонное",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Маскирующее искажение",
    descr: "You can bend light, sound, and even vibrations around your body, making you harder to notice. As a move action, you can grant yourself a +4 bonus to Stealth checks. This lasts for 1 round or until you leave graviton mode.\nWhen you are attuned or fully attuned, you can use this revelation to reduce your sensory output so much that you can attempt a Stealth check even when you\’re directly observed and lack cover or a distraction. You are not invisible, simply difficult to see clearly, and if a creature was observing you prior to your Stealth check, it remains aware of your location until you successfully reach cover or concealment. Your stealth warp ends if you make an attack or cause another creature to attempt a saving throw, or at the beginning of your next turn unless you immediately take another move action to use this revelation.",
    lvl: 10,
    type: "Класс",
    subtype: "Солярион, Звёздное откровение, Гравитонное",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Гравитационный щит",
    descr: "As a move action, you can create a minor shield of compressed gravity waves, granting you a +1 circumstance bonus to your AC. The shield lasts for 1 round or until you leave graviton mode.\nWhen you are attuned or fully attuned, as a move action, you can create a disk of massive gravitational energies that is capable of deflecting incoming attacks. Choose one edge of your space. The shield extends along three continuous edges in a straight line centered on the chosen edge. The shield provides cover against attacks coming from its far side, but not against attacks originating from the side you\’re on. If you move, you can reposition your shield as part of your move action, moving it to a different edge of your space. You must use one of your hands to direct and maintain an active gravity shield. You cannot use this version of the gravity shield at the same time you use this revelation to gain a circumstance bonus to your AC. This gravity shield also lasts 1 round or until you leave graviton mode.",
    lvl: 14,
    type: "Класс",
    subtype: "Солярион, Звёздное откровение, Гравитонное",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Повелитель гравитонов",
    descr: "As your ability to manipulate powers of gravity expands, the range of any graviton revelation (but not zenith revelation) you have with a range doubles. Any graviton revelation (but not zenith revelation) you have that targets a single creature can now simultaneously target two creatures, who must be within 20 feet of each other. You also increase the power of any of the following gravity revelations you have.\nDefy Gravity: Your fly speed increases by 20 feet.\nGravity Anchor: As a move action, you can gain both types of gravity anchor simultaneously.\nGravity Boost: Your bonus applies to all Acrobatics checks, and you take no damage from any fall.\nReflection: If you successfully redirect an attack as a reaction, you can continue to reflect additional attacks until the beginning of your next turn. You have a cumulative –2 penalty to your redirect attack roll on each reflection attempt after the first. If any reflected attack misses, you can\’t make further redirect attempts until you use this revelation again.",
    lvl: 16,
    type: "Класс",
    subtype: "Солярион, Звёздное откровение, Гравитонное",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Вспышка",
    descr: "As a move action, you can shed light in a 30-foot radius for 1 minute. You choose dim, normal, or bright light each time you activate this revelation. As a standard action, you can create a flash of brilliant light, forcing one creature within 30 feet to succeed at a Reflex save or be blinded for 1 round. Once you\’ve targeted a creature with flare, you can\’t target it with this revelation again for 10 minutes. Blind or sightless creatures are not affected by this use of this revelation.\nWhen you create a flash of light as a standard action and you are attuned or fully attuned, you can instead choose to make all enemies within range dazzled for 1 round (no save).",
    lvl: 2,
    type: "Класс",
    subtype: "Солярион, Звёздное откровение, Фотонное",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Звёздный таран",
    descr: "As a standard action, you can wreathe yourself in stellar fire and make a charge without the penalties.\nWhen you are attuned or fully attuned, you can substitute a bull rush for the melee attack at the end of the charge. If you attempt this bull rush, the target takes 2d6 fire damage (Reflex half), regardless of whether you succeed. This damage increases by 1d6 at 6th level and every 2 levels thereafter.",
    lvl: 2,
    type: "Класс",
    subtype: "Солярион, Звёздное откровение, Фотонное",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Излучение",
    descr: "As a standard action, you can emit an aura of low-level radiation. Creatures within 5 feet of you must succeed at a Fortitude save or be sickened. A sickened creature recovers as soon as it moves out of your aura, and a creature that succeeds at its saving throw is immune to your radiation for 24 hours. This is a poison effect. The radiation lasts for 1 round or until you leave photon mode.\nWhen you are attuned or fully attuned, the size of your aura increases to 10 feet.",
    lvl: 2,
    type: "Класс",
    subtype: "Солярион, Звёздное откровение, Фотонное",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Плазменное покрытие",
    descr: "As a move action, you can cause all of your melee attacks to deal fire damage instead of their normal damage type. (The attacks are still made against the target\’s EAC or KAC as normal for the weapon.) This benefit lasts for 1 round or until you leave photon mode.\nWhen you are attuned or fully attuned, your attacks with plasma sheath deal additional fire damage equal to half your level.",
    lvl: 2,
    type: "Класс",
    subtype: "Солярион, Звёздное откровение, Фотонное",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Астрологическое предчувствие",
    descr: "You can sense the movement of all objects influencing you to gain insight into upcoming events. Once per day as a full action, you can try to determine whether a particular action of yours will bring good or bad results for you in the immediate future. This functions as augury with your effective caster level equal to your solarian level. You can spend 1 Resolve Point to use this revelation again on the same day, but you still can\’t use it more than once per hour.\nWhen you are attuned or fully attuned, you can see 1 hour into the future (instead of half an hour as is normal for augury) when you use this revelation.",
    lvl: 6,
    type: "Класс",
    subtype: "Солярион, Звёздное откровение, Фотонное",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Корона",
    descr: "В качестве основного действия вы можете окружить своё тело оболочкой высокотемпературной плазмы. Вы получаете устойчивость к холоду 10, а любое находящееся рядом существо, которое попадает по вам естественным оружием или оружием ближнего боя, получает 2d6 урона огнём. Эффект сохраняется в течение 1 раунда, или пока вы не выйдете из фотонного режима. На 12 уровне урон увеличивается до 3d6, а устойчивость к холоду – до 15. На 18 уровне урон увеличивается до 4d6, а устойчивость к холоду – до 20.\nКогда вы настроены или достигли полной гармонии, любое существо, начавшее ход рядом с вами во время действия способности, получает урон огнём, равный 1/2 вашего уровня соляриона.",
    lvl: 6,
    type: "Класс",
    subtype: "Солярион, Звёздное откровение, Фотонное",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Привораживающее сияние",
    descr: "As a standard action, you can convince one living creature that you are to be trusted. This functions as charm person, but with a duration of 1 round per solarian level you have. When the effect ends, if you are out of line of sight and the target is not engaged in an activity it wouldn\’t have begun without being charmed, the target does not realize it was charmed or has acted unusually unless someone else points it out. You can\’t use this revelation again while you currently have a creature charmed via this ability, and once you\’ve attempted to charm a creature, whether or not the attempt was successful, you can\’t charm the same creature again for 24 hours. Your influence over the creature ends once the duration has expired, and at that time the target likely ceases doing anything you\’ve requested of it. At 9th level, hypnotic glow functions as charm monster.\nWhen you are attuned or fully attuned and you successfully charm a creature using this ability, you can also command it to approach, flee, or halt on its next turn, as per the command spell.",
    lvl: 6,
    type: "Класс",
    subtype: "Солярион, Звёздное откровение, Фотонное",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Пылающая траектория",
    descr: "As a move action, you can move up to your speed, gaining concealment against any attack made against you during the move, and you can leave a trail of flames in every square you pass through. The flames last for 1 round and deal 2d6 fire damage to anyone who moves into them. You can\’t move through another creature\’s space during this movement. If you use blazing orbit again, any flames you previously created with it go out. The damage from the flames increases by 1d6 at 8th level and every 2 levels thereafter.\nWhen you are attuned or fully attuned, any creature damaged by the flames also gains the burning condition (1d6 fire damage).",
    lvl: 6,
    type: "Класс",
    subtype: "Солярион, Звёздное откровение, Фотонное",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Свет жизни",
    descr: "As a move action, you can spend 1 Resolve Point to recover a number of Hit Points equal to twice your solarian level. Once you use this revelation, you can\’t use it again until the next time you regain Stamina Points after a 10-minute rest.\nWhen you are attuned or fully attuned, increase the amount you heal with this revelation to three times your solarian level.",
    lvl: 6,
    type: "Класс",
    subtype: "Солярион, Звёздное откровение, Фотонное",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Душевный жар",
    descr: "You can stoke the internal energy of your entire physiology, allowing you to boost your life processes. As a move action, you can spend 1 Resolve Point. If you are suffering from an affliction (a curse, disease, drug or poison), you can immediately attempt an additional saving throw at the affliction\’s normal save DC. If you succeed at this saving throw, the affliction ends (regardless of how many successful saving throws it normally takes to end the affliction). Once you have used this revelation, you can\’t use it again until the next time you regain Stamina Points after a 10-minute rest.\nWhen you are attuned or fully attuned, you can also use this revelation to end any one of the following conditions you have: bleeding, blinded, burning, cowering, dazzled, exhausted, fatigued, frightened, panicked, shaken, or sickened.",
    lvl: 10,
    type: "Класс",
    subtype: "Солярион, Звёздное откровение, Фотонное",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Солнечный удар",
    descr: "As a standard action, you can fire a bolt of concentrated solar energy at one target within long range (400 feet + 40 feet per solarian level you have) as a ranged attack targeting the foe\’s EAC. If you hit, you deal 9d6 fire damage. If you have a solarian crystal that changes the type of damage dealt by a solar weapon, you can use it to change the type of damage you deal with your sunbolt. Once you have used this revelation, you can\’t use it again until the next time you regain Stamina Points after a 10-minute rest.\nWhen you are attuned or fully attuned, you gain a +2 bonus to your ranged attack roll to use this revelation.",
    lvl: 14,
    type: "Класс",
    subtype: "Солярион, Звёздное откровение, Фотонное",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Повелитель фотонов",
    descr: "Your ability to manipulate powers of light and energy expand greatly. The radius of any photon revelation (but not zenith revelation) you have with a radius expands by 10 feet. Any photon revelation (but not zenith revelation) that lasts for 1 round or until you leave photon mode now lasts for 1d4 rounds if you are not in photon mode. You also increase the power of any of the following photon revelations you have.\nAstrologic Sense: You can see twice as far into the future as normal.\nGlow of Life: You can use this revelation as a swift action, rather than a move action.\nHypnotic Glow: The charm\’s duration doubles.\nStellar Rush: You gain a +2 bonus to your EAC until the beginning of your next turn.",
    lvl: 16,
    type: "Класс",
    subtype: "Солярион, Звёздное откровение, Фотонное",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Гравитонный режим",
    descr: "Когда вы входите в гравитонный режим, то получаете 1 пункт гравитонной гармонии и настраиваетесь на гравитоны. Некоторые из звёздных откровений – гравитонные, и их мощь повышается, если вы настроены на этот режим. Находясь в этом режиме, вы получаете бонус +1 (интуитивный) и испытаниям Реакции, этот бонус увеличивается на 1 за каждые 9 ваших уровней соляриона.",
    lvl: 1,
    type: "Класс",
    subtype: "Солярион, Звёздный режим",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Нейтральный режим",
    descr: "Когда вы нейтральны, то не получаете пунктов гармонии и не настроены ни на фотоны, ни на гравитоны. Этот режим не даёт никаких преимуществ.",
    lvl: 1,
    type: "Класс",
    subtype: "Солярион, Звёздный режим",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Фотонный режим",
    descr: "Когда вы входите в гравитонный режим, то получаете 1 пункт фотонной гармонии и настраиваетесь на фотоны. Некоторые из звёздных откровений – фотонные, и их мощь повышается, если вы настроены на этот режим. Находясь в этом режиме, вы получаете бонус +1 (интуитивный) к проверкам урона (включая урон звёздных откровений), этот бонус увеличивается на 1 за каждые 6 ваших уровней соляриона.",
    lvl: 1,
    type: "Класс",
    subtype: "Солярион, Звёздный режим",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Чёрная дыра",
    descr: "Когда вы достигли полной гармонии в гравитонном режиме, вы в качестве основного действия можете притянуть к себе любое количество существ в пределах 20 футов. Вы сами выбираете, на какие цели способность подействует, а на какие нет. Каждая цель проходит испытание Стойкости и при провале притягивается ближе к вам на 10 футов. Дистанция действия этой способности и расстояние, на которое цели перемещаются, увеличивается на 5 футов на 5 уровне и каждые 4 уровня после этого. Твёрдые предметы не препятствуют действию этой способности, но если притягиваемая цель натыкается на такой предмет, её движение прекращается. притягиваемая цель не провоцирует внеочередных атак. После использования этой способности вы немедленно переходите в нейтральный режим. Чёрная дыра считается наивысшим откровением для способностей, влияющих на них.",
    lvl: 1,
    type: "Класс",
    subtype: "Солярион, Наивысшее звёздное откровение, Гравитонное",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Звёздотрясение",
    descr: "Когда вы достигли полной гармонии в гравитационном режиме, вы можете создать при перемещении ударные волны, сбивающие противников с ног. В качестве сопутствующего действия вы можете переместиться по земле на расстояние вплоть до значения скорости, не провоцируя внеочередных атак. Каждое существо, рядом с которым вы прошли во время этого перемещения получает 1d8 дробящего урона и должно пройти испытание Реакции, при провале распластываясь. Существо необязательно должно находиться на земле для этого – если оно было в воздухе (но рядом с вами), то при провале падает вниз. Урон увеличивается на 1d8 за каждые 3 уровня соляриона после 7. Начиная с 17 уровня при использовании этого откровения вы ожете переместиться по земле на расстояние вплоть до удвоенного значения скорости.",
    lvl: 9,
    type: "Класс",
    subtype: "Солярион, Наивысшее звёздное откровение, Гравитонное",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Растяжение времени",
    descr: "When you\’re fully graviton-attuned, you can make time pass more slowly for your enemies. As a standard action, you can project a gravitational wave in a 30-foot cone. You choose which creatures in the cone are affected and which ones aren\’t. Each target must succeed at a Fortitude save or by affected by slow for a number of rounds equal to your solarian level. At 17th level, even targets that succeed at their saving throws are affected by slow for 1 round.",
    lvl: 9,
    type: "Класс",
    subtype: "Солярион, Наивысшее звёздное откровение, Гравитонное",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Червоточины",
    descr: "When you\’re fully graviton-attuned, you can create two linked wormholes as a standard action. One wormhole must be adjacent to you, and the other appears anywhere in line of sight within medium range (100 feet + 10 feet per solarian level). Each wormhole is 5 feet across and appears at an intersection between two squares. You and any Large or smaller creatures you mentally designate (you can designate “all creatures,” “all lashuntas,” or similar categories) can travel between the wormholes. This is considered extradimensional travel. Entering a wormhole instantly transports a creature to a square adjacent to the other wormhole\’s intersection, where the creature can continue its movement. The wormholes remain for 1 round for every 2 solarian levels you have. At 17th level, you can create three wormholes using this ability, and upon entering the wormhole, a creature can decide which of the other two wormholes to exit.",
    lvl: 9,
    type: "Класс",
    subtype: "Солярион, Наивысшее звёздное откровение, Гравитонное",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Сверхновая",
    descr: "Когда вы достигли полной гармонии в фотонном режиме, вы в качестве основного действия можете нанести всем существам в пределах 10 футов от вас 1d6 урона огнём плюс по 1d6 дополнительного урона огнём за каждый уровень соляриона. Существа в области действия могут попытаться пройти испытание Реакции, чтобы уменьшить получаемый урон вдвое. На 9 уровне вы можете увеличить радиус действия способности до 15 футов, а на 17 уровне – до 20 футов. После использования этой способности вы немедленно переходите в нейтральный режим. Сверхновая считается наивысшим откровением для способностей, влияющих на них.",
    lvl: 1,
    type: "Класс",
    subtype: "Солярион, Наивысшее звёздное откровение, Фотонное",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Луч света",
    descr: "When you\’re fully photon-attuned, as a move action, you can transform yourself into a ray of light and move at light speed to any space you can see within long range. Any barrier that would block, reflect, or scatter light prevents you from moving through it. No creature can use a reaction to interfere with your movement or make attacks of opportunity against you unless it\’s capable of reacting faster than the speed of light. At 17th level, you can touch one willing or unconscious creature to convert it to light and bring it with you as part of the same action.",
    lvl: 9,
    type: "Класс",
    subtype: "Солярион, Наивысшее звёздное откровение, Фотонное",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Миниатюрная звезда",
    descr: "When you\’re fully photon-attuned, you can create a simulacrum of a star as a standard action. The star is a 10-foot-radius sphere that fills your square (or one square of your space, if you\’re larger than Medium) and all squares within 5 feet of that space. Any creature that starts its turn in the same space as the star takes 1d6 fire damage for every 2 solarian levels you have, and any creature that starts its turn outside the star but within 5 feet of it takes half that damage. At 17th level, you can create your star simulacrum as a 15-foot-radius sphere that affects your square and all squares within 10 feet of that space (a total of 21 squares).\nCreatures can move through the star, but it exerts a gravitational pull, and any creature inside it or within 5 feet of it must spend twice as much movement for each square of movement that takes it away from the center of the star. The star remains for 1d4+1 rounds, and stays in place even if you later move. You are immune to all effects of your own miniature star.",
    lvl: 9,
    type: "Класс",
    subtype: "Солярион, Наивысшее звёздное откровение, Фотонное",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Солнечное ускорение",
    descr: "When you\’re fully photon-attuned, you can make a full attack as a standard action. In addition, you and up to six allies within 30 feet are affected by haste for 1 minute after you use this revelation. At 17th level, the extra speed from the haste effect increases to 60 feet (to a maximum of three times the creature\’s normal speed).",
    lvl: 9,
    type: "Класс",
    subtype: "Солярион, Наивысшее звёздное откровение, Фотонное",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Звёздное воплощение",
    descr: "На 1 уровне ваша звёздная сила получает физическое воплощение. Основная форма звёздного воплощения – крупица звёздной энергии чуть меньше кулака, парящая возле вашей головы. Помимо крупицы, воплощение может принимать одну из дополнительных форм: броню или оружие. Вы выбираете форму воплощения(броню или оружие) на первом уровне соляриона. Вы также решаете, будет ли воплощение (в любой форме) ярко светиться, будучи окрашенным в один из цветов звёзд (например, синий, красный, белый или жёлтый), или будет тёмным, как чёрная дыра. Принятые вами решения окончательны, и изменить их невозможно. Вне зависимости от формы, светящееся звёздное воплощение создаёт тусклый свет в радиусе 20 футов. В качестве основного действия вы можете погасить свет или разогнать тьму, чтобы стать менее заметным и не выделяться в толпе, но когда вы входите в звёздный режим, воплощение немедленно темнеет или начинает светиться. Только вы можете взаимодействовать со своим воплощением, в какой бы форме оно не находилось. Никто другой не может повлиять на него: например, ваше звёздное оружие нельзя выбить из рук, а звёздную броню – разрушить.",
    lvl: 1,
    type: "Класс",
    subtype: "Солярион, Способность класса",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Звёздное откровение",
    descr: "По мере накопления опыта вы узнаёте новые тайны гравитации, звёзд и других фундаментальных источников космической силы, позволяющих вам использовать энергию светил и питающих могучие способности. на 1 уровне вы автоматически получаете откровения чёрная дыра и сверхновая. На 2 уровне и каждые 2 уровня после этого вы получаете дополнительное звёздное откровение. Каждое откровение можно получить только один раз, если в описании не указано обратное. Вы можете получить какие угодно откровения, но если фотонных откровений у вас будет ощутимо больше (или наоборот), вам будет труднее достичь полной гармонии в любом из режимов, так как вы нарушаете равновесие используемых космических сил. Если разница между количеством откровений каждого типа (фотонных и гравитонных) равна 1, вы не получаете никаких штрафов. Если же разница увеличивается до 2 и более, то вы считаетесь настроенным на режим, если у вас в нём от 1 до 3 пунктов гармонии, а достигаете полной гармонии, только накопив 4 пункта. Например, если вы изучили три фотонных и одно гравитонное откровение, то вам понадобится 4 пункта для достижения полной гармонии в фотонном режиме и 4 пункта для достижения полной гармонии в гравитонном режиме.\nОбычно в описании звёздного откровения указано требуемое для его использования действие. Если оно не указано, но при этом модифицирует другое действие (например, атаку или проверку навыка), оно может быть применено как часть этого действия. Если против эффекта звёздного откровения можно пройти испытание, его СЛ равна 10 + 1/2 вашего уровня соляриона + модификатор вашей Харизмы. Звёздные откровения можно применять и вне боя. Если в описании откровения написано, что его эффект сохраняется в течение 1 раунда или пока вы не выйдете из соответствующего режима, то используется наибольшая продолжительность. Длительность таких откровений вне боя сосавляет всего 1 раунд посколько вы не можете войти в звёздный режим вне боя.",
    lvl: 1,
    type: "Класс",
    subtype: "Солярион, Способность класса",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Звёздный режим",
    descr: "Используемые вами звёздные силы связаны либо с фотонами (олицетворяющими испускаемые звёздами жар, свет и плазму), либо с гравитонами (олицетворяющими силу звёздного притяжения). Квинтэссенцией мощи фотонов является взрыв сверхновой, когда вся энергия звезды устремляется наружу, а квинтэссенцией гравитонов служит чёрная дыра, чьё притяжение настолько велико, что даже свет не способен покинуть её.\nИсточником ваших способностей является баланс и гармония космических противоположностей, а звёздны режим олицетворяет силу вашей связи с ними. равновесие сил изменчиво, и чаша весов склоняется то в одну, то в другую сторону по мере использования звёздных откровений.\nВступив в бой, вы входите в состояние метафизического сближения с космическими силами. Если вы находитесь в сознании, то в начале своего первого хода в бою выбираете один из трёх звёздных режимов: фотонный, гравитонный или нейтральный.\nВ начале каждого последующего хода вы решаете, останетесь ли в текущем звёздном режиме или вернётесь в нейтральный. если вы остаётесь в текущем режиме, то получаете ещё один пункт гармонии для него. Если у вас 1 или 2 пункта гармонии, вы настраиваетесь на этот режим, а если их 3 – достигаете полной гармонии с ним. Некоторые из откровений – наивысшие – могут быть использованы только в состоянии полной гармонии с одним из режимов. Когда вы достигаете полной гармонии, то перестаёте получать пункты гармонии для этого режима, но сохраняете это состояние либо до конца боя, либо пока не выйдете из звёздного режима или не вернётесь в нейтральный режим. Если вы возвращаетесь в нейтральный режим, то теряете все накопленные пункты гармонии и в начале своего следующего хода можете выбрать новый звёздный режим или сохранить нейтральный. В конце боя вы выходите из звёздного режима. Если в ходе сражения вы теряете сознание, то возвращаетесь в нейтральный режим. Если вы придёте в сознание, пока вам ещё угрожает опасность, вы можете выбрать звёздный режим в начале первого хода после этого, как если бы это был первый раунд боя. Если бой завершится прежде, чем вы придёте в сознание, вы выходите из звёздного режима. Если по какой-то причине вы не в звёздном режиме, то при использовании звёздных откровений считается, что вы в нейтральном режиме.\nВы не можете войти в звёздный режим, если не находитесь в бою, – эта способность проявляется только в моменты опасности, когда благодаря интенсивным тренировкам ваш разум устанавливает контакт с вселенскими силами. Опасность должна быть существенной, поэтому вы можете войти в звёздный режим только в сражении с достойным противником. Это также означает, что ваш звёздный режим может преждевременно завершиться до конца боя, если все достойные противники повержены, а оставшиеся недобитки не представляют явной угрозы. В спорных ситуациях решающее слово остаётся за ведущим.",
    lvl: 1,
    type: "Класс",
    subtype: "Солярион, Способность класса",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Знаток навыков",
    descr: "В ходе вашего становления как соляриона вы получили новые знания и опыт. Вы получаете два дополнительных классовых навыка по вашему выбору.",
    lvl: 1,
    type: "Класс",
    subtype: "Солярион, Способность класса",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Привычное оружие [Солярион]",
    descr: "Вы получаете черту Привычное оружие для следующих типов оружия: Простое оружие ближнего боя, Высокотехнологичное оружие ближнего боя, Короткоствольное.",
    lvl: 3,
    type: "Класс",
    subtype: "Солярион, Способность класса",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Сидерическое влияние",
    descr: "You can tap into stellar forces outside of battle, using the properties of gravitons or photons to affect your skill use. At 3rd level, choose two skills from the lists below, one from the graviton list and one from the photon list. At 11th level and again at 19th level, choose two more skills. Each time you pick skills, choose one from the graviton list and one from the photon list.\nTo use your sidereal influence, you must spend 1 minute in meditation, then choose either graviton skills or photon skills. When attempting a skill check with one of your selected skills of the chosen type (either graviton or photon), you can roll 1d6 and add the result as an insight bonus to your check. This ability lasts until you enter combat, fall unconscious, sleep, or meditate again to choose a different skill type. You can reactivate this ability by meditating again for 1 minute.\nGraviton Skills: Bluff (Cha), Disguise (Cha), Mysticism (Wis), Sense Motive (Wis), Stealth (Dex)\nPhoton Skills: Culture (Int), Diplomacy (Cha), Intimidate (Cha), Medicine (Int), Survival (Wis) ",
    lvl: 3,
    type: "Класс",
    subtype: "Солярион, Способность класса",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Блистательные удары",
    descr: "Ваш опыт рукопашных схваток позволяет наносить несколько последовательных ударов без существенной потери точности. Если для совершения полной атаки вы используете оружие ближнего боя, то получаете штраф -3 к каждой атаке (вместо обычного штрафа -4).",
    lvl: 7,
    type: "Класс",
    subtype: "Солярион, Способность класса",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Наивысшие откровения",
    descr: "At 9th level and again at 17th level, you gain two powerful stellar revelations. Choose two revelations from the zenith revelations list: one graviton revelation and one photon revelation.\nZenith revelations are powerful stellar revelations that require you to be fully attuned in a stellar mode. After using a zenith revelation, your stellar mode immediately becomes unattuned. ",
    lvl: 9,
    type: "Класс",
    subtype: "Солярион, Способность класса",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Солярионский натиск",
    descr: "When making a full attack, you can make up to three attacks instead of two attacks. You take a –6 penalty to these attacks instead of a –4 penalty. If you have the flashing strikes class feature, you instead take a –5 penalty to these attacks as long as they are all melee attacks. ",
    lvl: 13,
    type: "Класс",
    subtype: "Солярион, Способность класса",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Звёздный идеал",
    descr: "You are the spiritual kin of the stars themselves. As a move action, you can raise or lower light levels within 30 feet of yourself by one step. When you enter a stellar mode, you gain 2 attunement points of the corresponding type immediately and are considered attuned, and when you keep your current stellar mode at the start of your turn, you can gain 2 attunement points instead of 1, allowing you to become fully attuned after 2 rounds.\nIn addition, you can spend 1 Resolve Point to gain enough attunement points to be fully attuned on the first round of combat (but not after using a zenith revelation), or spend 1 Resolve Point at the start of your turn in combat to exchange all of your attunement points in one stellar mode for an equal number of attunement points in the other mode. For example, you can switch from being fully attuned in graviton mode to being fully attuned in photon mode. ",
    lvl: 20,
    type: "Класс",
    subtype: "Солярион, Способность класса",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Быстрое сканирование",
    descr: "As a standard action, you can get a general sense of what information is stored on drives or other digital storage media. You must pass your hand in the air near the data source, but don\’t have to touch it or connect to it. The information you get is very general, such as “financial records,” “military records,” or “spells.” Getting detailed information requires interfacing with the data more directly. If you attempt a quick scan on a creature that stores its memories in a digital medium—to get a sense of the memories stored in a robot, for example—the target can attempt a Will save to negate the scan and prevent you from trying against it again for 24 hours.",
    lvl: 2,
    type: "Класс",
    subtype: "Техномант, Магический хак",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Влияние на роботов",
    descr: "You can affect constructs, robots, and other creatures that have the technological subtype with your mind-affecting spells, even if they\’re mindless or normally immune to such effects. However, they receive a +2 bonus to their Will saves against your mind-affecting spells.",
    lvl: 2,
    type: "Класс",
    subtype: "Техномант, Магический хак",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Вредоносные заклинания",
    descr: "When you cast an instantaneous spell that deals damage, you can increase the spell\’s damage by half your technomancer level. This increased damage applies to all creatures damaged by an area spell, but for spells that target multiple creatures with multiple rays or other attacks (such as magic missile), the increased damage applies only to a single ray or missile. This increased damage doesn\’t apply to ongoing damage from the spell (such as bleed or burn). This magic hack doesn\’t increase ability damage or other spell effects, only damage to Stamina Points or Hit Points.",
    lvl: 2,
    type: "Класс",
    subtype: "Техномант, Магический хак",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Заряженное заклинание",
    descr: "Once per day as a move action, you can use a battery or a weapon\’s power cell to power your spellcasting, enabling you to cast one spell you know without using a spell slot. This expends 20 charges per spell level from the battery or power cell and requires you to touch the battery, power cell, or weapon. You must cast the spell before the start of your next turn, or the charges are wasted with no effect.",
    lvl: 2,
    type: "Класс",
    subtype: "Техномант, Магический хак",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Изберательное прицеливание",
    descr: "When you cast an instantaneous spell with an area effect, you can shape the spell so it doesn\’t affect one of your allies. Choose one 5-foot square within the spell\’s area to be unaffected by the spell. At 5th level, you can spend 1 Resolve Point to exclude any number of squares with this ability.",
    lvl: 2,
    type: "Класс",
    subtype: "Техномант, Магический хак",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Изготовление механизма",
    descr: "As a full action, you can expend an unused spell slot to temporarily construct a piece of technological gear from raw magic. You can create any single technological item with a level equal to or less than the level of the expended spell slot × 3, to a maximum of your caster level. The item appears in your hands or in an adjacent square. You can use fuse spells with this magic hack. The size of the item cannot exceed 10 bulk or Medium size, and the quality of the item is average. Treat this as a spell of the same level as the expended spell slot. For example, at 4th level, you could expend a 1st-level spell slot to fabricate an item of up to 3rd level, or you could expend a 2nd-level spell slot to fabricate an item of up to 4th level. The item persists for a number of minutes equal to your technomancer level. At the end of this duration, the item disappears. You can\’t create armor, weapons, magic items, or items with limited uses or charges (such as batteries, drugs, or fuel) with this hack.",
    lvl: 2,
    type: "Класс",
    subtype: "Техномант, Магический хак",
    category: "ПС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Контрмеры",
    descr: "Если вы получаете урон от нацеленной именно на вас атаки с использованием технологического оружия или источника в пределах средней дистанции, то в качестве ответного действия можете потратить неиспользованную ячейку заклинания, чтобы помешать атаке. Использовав ячейку 1–5 кругов, вы можете помешать атаке из технологического оружия с уровнем, не превышающим круг использованной ячейки * 3, вплоть до максимума, равного вашему УЗ. использование ячейки 6 круга позволяет противостоять любому оружию с уровнем, не превышающим ваш УЗ. Например, на 2 уровне вы можете потратить ячейку 1 круга, чтобы помешать атаке из оружия 1 или 2 уровня. Для этого необходимо пройти проверку контрмер (1d20+УЗ) со сл, равной 11 + уровень оружия. При успехе проверки атака наносит половину урона, при провале – полный урон. действие этой способности распространяется только на атаки, целью которых являетесь именно вы, и её нельзя использовать против атак, нацеленных на область или другого противника.",
    lvl: 2,
    type: "Класс",
    subtype: "Техномант, Магический хак",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Магические помехи",
    descr: "You gain a +2 bonus to saving throws against spells and other magical effects.",
    lvl: 2,
    type: "Класс",
    subtype: "Техномант, Магический хак",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Понимание оружия",
    descr: "As a standard action, you can spend 1 Resolve Point to temporarily learn how to use a weapon in combat. Choose a single weapon; you gain proficiency with it (and any identical weapon) for a number of minutes equal to your class level. Each round you use the weapon reduces this magic hack\’s duration by 1 minute. For example, at 4th level, you could gain proficiency with corona laser rifles for 4 minutes. If you fire such a weapon for 2 rounds, you remain proficient with it for 2 more minutes.",
    lvl: 2,
    type: "Класс",
    subtype: "Техномант, Магический хак",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Усилитель оружия",
    descr: "As a move action, you can expend an unused spell slot to reconfigure and enhance a weapon you\’re wielding. Until the start of your next turn, your attacks with the enhanced weapon gain a bonus to attack rolls equal to the level of the spell slot you expended. In addition, your attacks with that weapon deal 1d6 additional damage per level of the expended spell slot. This damage is of the same type the weapon normally deals.",
    lvl: 2,
    type: "Класс",
    subtype: "Техномант, Магический хак",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Дальнобойное заклинание",
    descr: "When you cast a spell with a range of close, medium, or long, you can spend 1 Resolve Point to double its range. Spells whose ranges are not defined by distance, as well as spells whose ranges are not close, medium, or long, do not benefit from this magic hack. If the spell affects an area, doubling its range doesn\’t alter the size of its area.",
    lvl: 5,
    type: "Класс",
    subtype: "Техномант, Магический хак",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Длительное заклинание",
    descr: "When you cast a spell, you can spend 1 Resolve Point to double its duration. This has no effect on spells with a duration of concentration, instantaneous, 1 round or less, or permanent, nor can it increase a spell\’s duration to more than 24 hours.",
    lvl: 5,
    type: "Класс",
    subtype: "Техномант, Магический хак",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Зарядник",
    descr: "As a move action, you can expend an unused spell slot to refill charges in a weapon\’s power cell. This requires you to touch the weapon or its power cell. The power cell regains 10 charges per spell level, up to its capacity. You can also use this ability to jump-start or short out an electronic device, allowing you to attempt an Engineering check to disable a device with a bonus equal to double the level of the spell you expended.",
    lvl: 5,
    type: "Класс",
    subtype: "Техномант, Магический хак",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Изготовление снаряжения",
    descr: "As a full action, you can expend an unused spell slot to temporarily construct a technological weapon or suit of armor out of raw magic. You can create one suit of armor or weapon with a level equal to or less than the level of the expended spell slot × 3, to a maximum of your caster level. The item appears in your hands, on your person, or in an adjacent square. You can use fuse spells with this magic hack. A weapon can\’t be larger than two-handed, and the size of the item can\’t exceed 10 bulk. The quality of the item is average for its type. Treat this as a spell of the same level as the expended spell slot. For example, at 10th level, you could expend a 3rd-level spell slot to fabricate a weapon of 9th level or lower, or expend a 4th-level spell slot to fabricate a suit of armor of 10th level or lower. The armor or weapon persists for a number of rounds equal to your technomancer level. At the end of this duration, the item disappears. You are proficient with (but not specialized in) any weapons you create with this ability. You can\’t create magic items, weapons made from a special material, or weapons that are expended with use (such as arrows, grenades, or missiles) with this magic hack.",
    lvl: 5,
    type: "Класс",
    subtype: "Техномант, Магический хак",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Магическая граната",
    descr: "You can spend 1 Resolve Point to store a spell with a range of touch in a grenade, allowing you to affect a target within the grenade\’s blast radius with the spell. Casting a spell with spell grenade uses the spell\’s standard casting time, and throwing the spell grenade is a standard action. You must throw the grenade before the end of your next turn, or the spell is wasted. You are considered proficient with the grenade for this attack. Choose a single target within the grenade\’s blast radius; that target is affected by the spell as if you had successfully touched it. The grenade goes off as normal, with all of its usual effects within its blast radius. If you miss the targeted intersection with the grenade, you must choose a target within the grenade\’s new blast radius. If there are no suitable targets within the grenade\’s blast radius, the spell is wasted. Spells whose ranges are not touch don\’t benefit from this magic hack.",
    lvl: 5,
    type: "Класс",
    subtype: "Техномант, Магический хак",
    category: "ПС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Нейтрализация магии",
    descr: "As a standard action, you can spend 1 RP to temporarily suppress magic, as if using dispel magic. Choose either an ongoing spell or a magic item within 30 feet of you. The magical effects of the spell or magic item are suppressed for 1d4 rounds, and then they return. If the spell\’s level is higher than you can cast or the item\’s level is greater than your level, you can\’t suppress it. If you target a spell affecting a creature, the creature can attempt a Will save to stop you from suppressing the spell.",
    lvl: 5,
    type: "Класс",
    subtype: "Техномант, Магический хак",
    category: "ПС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Отладка заклинания",
    descr: "Any piece of code has bugs, but you can turn the bugs in your spellcode into features. After rolling damage for an instantaneous spell that deals Hit Point damage, you can spend 1 Resolve Point to reroll one die with a result of 1. At 11th level, you can reroll up to two dice with a result of 1, and at 17th level, you can reroll up to three dice with a result of 1. For example, if you were 17th level and cast disintegrate, you could spend 1 Resolve Point to reroll up to three dice that rolled 1s, after rolling and seeing how many 1s you rolled.",
    lvl: 5,
    type: "Класс",
    subtype: "Техномант, Магический хак",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Быстрая телепортация",
    descr: "As a move action, you can spend 1 Resolve Point to teleport up to 30 feet. You must have line of sight to your destination. This movement doesn\’t provoke attacks of opportunity.",
    lvl: 8,
    type: "Класс",
    subtype: "Техномант, Магический хак",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Магический выстрел",
    descr: "You can cast an area spell with a casting time of 1 standard action or less through a ranged weapon, allowing you to use the weapon\’s range rather than the spell\’s range. You must target a single creature with your attack, and the spell\’s area is centered on that creature, or originates at the creature\’s location for a cone or line effect (oriented in whichever direction you choose), even if the spell would normally be centered on or originate from a point. You can fire the weapon as part of the standard action to cast the spell, dealing damage as normal if you hit. You must fire the weapon during the round that the casting is completed, or the spell is wasted. If the attack misses, the spell is wasted. Spells with an emanation effect that would be centered on you don\’t benefit from this magic hack.",
    lvl: 8,
    type: "Класс",
    subtype: "Техномант, Магический хак",
    category: "ПС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Магический жучок",
    descr: "You can hack a computer to set up magical surveillance. This takes 10 minutes and requires a successful Computers check against the device\’s DC. If you fail, you can\’t try again on the same device. On a success, your tap lasts for a number of days equal to your caster level. You can program your tap either to give you general information about user activity on the device or to receive a mental alarm when a user accesses or transmits data about a specific topic (getting an idea of the information found). For instance, a user might hold a video call to talk about your exploits. If you chose to receive general information, you might know that a video call took place but not the call\’s topic. If you chose to have the tap receive an alarm when the topic is you, you\’d get the gist of the conversation (but not a complete transcript). Setting up a new diviner\’s tap ends the duration of any previous one still in effect.",
    lvl: 8,
    type: "Класс",
    subtype: "Техномант, Магический хак",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Ментальная метка",
    descr: "Когда противник проваливает испытание Воли против одного из ваших заклинаний техноманта, он на 1 раунд получает штраф -2 к испытаниям и КБ. Когда противник успешно проходит испытание Воли против одного из ваших залинаний техноманта, он на 1 раунд получает штраф -1 к испытаниям против ваших заклинаний. одновременно на существо ожет действовать не более одного штрафа от ментальной метки.",
    lvl: 8,
    type: "Класс",
    subtype: "Техномант, Магический хак",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Обширное заклинание",
    descr: "When you cast a spell with a burst, emanation, or spread, you can spend 2 Resolve Points to double its radius. For instance, a spell with a 30-foot burst would have a 60-foot burst instead. Spells that don\’t have an area of one of these three types are not affected by this magic hack.",
    lvl: 8,
    type: "Класс",
    subtype: "Техномант, Магический хак",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Технические помехи",
    descr: "В качестве сопутствующего действия вы можете потратить 1 ПР, чтобы в течение 1 раунда по вам было сложнее попасть из технологического оружия. До начала вашего следующего хода, перед тем, как противник атакует вас при помощи технологического оружия, вы в качестве ответного действия можете заставить его совершить проверку атаки дважды и взять худший результат. Если оружие не требует проверки атаки, а позволяет пройти испытание Реакции, вы вместо этого получаете преимущество уклонения (классовая способность оперативника) против этой атаки. Способность не действует против нацеленных на вас заклинаний или атак, не являющихся технологическими.",
    lvl: 8,
    type: "Класс",
    subtype: "Техномант, Магический хак",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Бесконечное заклинание",
    descr: "Choose one 1st-level spell you know from the list of technomancer spells in the Starfinder Core Rulebook. You can cast it at will, as though it were a 0-level spell. It still counts as one of your 1st-level spells known, not one of your 0-level spells known. You can choose a 1st-level spell from a source other than the Core Rulebook with the GM\’s permission.",
    lvl: 11,
    type: "Класс",
    subtype: "Техномант, Магический хак",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Охранные контрмеры",
    descr: "You can spend 1 Resolve Point to use your countertech magic hack to counter a direct attack against an ally within 15 feet. You can\’t use countertech sentinel against attacks that target an area. You must have the countertech magic hack to choose this magic hack.",
    lvl: 11,
    type: "Класс",
    subtype: "Техномант, Магический хак",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Перезагрузка мозга",
    descr: "You can free someone from magical mental control or conditions. As a standard action, you can spend 1 Resolve Point and touch a willing creature. This restarts the subject\’s brain, ending all mind-affecting effects affecting it, as well as all conditions that could be removed by greater remove condition that were imparted on the creature by mind-affecting effects, but the subject becomes stunned until the end of its next turn. Once you reboot a mind, you can\’t use this ability again for 24 hours.\nYou can attempt to reboot the mind of an ally who is unwilling due to the influence of a mind-affecting effect. In this case, the ally can attempt a new saving throw against the effect at the same DC. If she succeeds, the ally can allow her mind to be rebooted, but if she fails, you waste the expended Resolve Point and action.\nYou can use this ability to reboot your own mind. If you\’re unable to take actions, you can reboot your mind without spending actions, but it must be the first thing you do on your turn, and you are stunned until the end of your next turn.",
    lvl: 11,
    type: "Класс",
    subtype: "Техномант, Магический хак",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Самонаводящийся выстрел",
    descr: "As a standard action, you can spend 1 Resolve Point to fire a single shot from a ranged weapon at a target known to you within range. The shot travels to the target, even around corners. Only an unavoidable obstacle or the limit of the weapon\’s range prevents the shot from reaching the target. This ability negates cover and concealment modifiers, but otherwise the attack is rolled normally.",
    lvl: 11,
    type: "Класс",
    subtype: "Техномант, Магический хак",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Библиотека знаний",
    descr: "You gain one extra spell known for each level of spell you can cast. You must choose the new spells when you gain this magic hack. If you gain access to a higher level of spell after choosing this hack, you gain one extra spell known for that spell level.",
    lvl: 14,
    type: "Класс",
    subtype: "Техномант, Магический хак",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Быстрое заклинание",
    descr: "You can cast a spell as a move action. You can spend 2 Resolve Points to cast a quickened 0-level spell or 4 Resolve Points to cast a quickened 1st-level spell. You can quicken only spells with a casting time of 1 full action or shorter. At 16th level, you can spend 6 Resolve Points to cast a quickened 2nd-level spell.",
    lvl: 14,
    type: "Класс",
    subtype: "Техномант, Магический хак",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Огненный дождь",
    descr: "Once per day as a full action, you can spend 2 Resolve Points to shoot a ranged weapon at multiple targets within range; the maximum number of targets is equal to half your technomancer level or the number of shots in your weapon, whichever is lower. Each attack uses your highest attack bonus, and each enemy can be targeted only by a single shot.",
    lvl: 14,
    type: "Класс",
    subtype: "Техномант, Магический хак",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Фазовый выстрел",
    descr: "As a standard action, you can spend 1 Resolve Point to fire a single shot from a ranged weapon at a target known to you within range. The shot travels straight to the target, passing through any nonmagical barrier in its way, ignoring hardness and Hit Points (any magical barrier, such as a wall of force, stops the shot). This ability negates cover and concealment modifiers, but otherwise the attack is rolled normally.",
    lvl: 14,
    type: "Класс",
    subtype: "Техномант, Магический хак",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Хранилище чар",
    descr: "Итогом ваших первых попыток постичь основополагающие силы галактики стало создание хранилища чар, в котором вы можете хранить заклинания для последующего использования. В роли хранилища мог же выступать устройство, например карманный компьютер или технологический имплант, предмет вроде кольца или посоха и даже символ – клеймо , татуировка или другая неотъемлемая модификация тела. Применять заклинания вы можете и без хранилища, но оно позволяет один раз в день сотворить любое из известных и доступных вам заклинаний, даже если вы израсходовали все ячейки соответствующего круга.\nЕсли хранилище чар повреждено, урон его ПЗ полностью снимается, когда вы восстанавливаете ячейки заклинаний. Если хранилище утеряно или уничтожено, вы можете заменить его спустя неделю, проведя особый восьмичасовой ритуал.",
    lvl: 1,
    type: "Класс",
    subtype: "Техномант, Способность класса",
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Магический хак",
    descr: "You have carefully studied the forces that define magic and can manipulate them. You learn your first magic hack at 2nd level, and you learn an additional magic hack every 3 levels thereafter. When casting a spell, you can apply no more than one magic hack that affects the attributes of a spell (such as distant spell or extended spell). If a magic hack allows a saving throw to resist its effects, the DC is equal to 10 + half your technomancer level + your Intelligence modifier.",
    lvl: 2,
    type: "Класс",
    subtype: "Техномант, Способность класса",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Заклинатель-эксперт [Техномант]",
    descr: "You gain Spell Focus as a bonus feat.",
    lvl: 3,
    type: "Класс",
    subtype: "Техномант, Способность класса",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Привычное оружие [Техномант]",
    descr: "Вы получаете черту Привычное оружие для следующих типов оружия: Простое оружие ближнего боя, Короткоствольное.",
    lvl: 3,
    type: "Класс",
    subtype: "Техномант, Способность класса",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Техноразум",
    descr: "You rewire your mind to give you greater insight into the nature of magic and technology. You gain a +1 insight bonus to Computers and Mysticism checks. This bonus increases by 1 at 6th level and every 3 levels thereafter.",
    lvl: 3,
    type: "Класс",
    subtype: "Техномант, Способность класса",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Накопитель чар",
    descr: "You expand your spell cache into a cache capacitor. As part of regaining your spells each day, you can cast a single spell into your spell cache and have it affect you continuously for 24 hours. The cache capacitor can hold any of the following spells: detect radiation, disguise self, keen senses, or unseen servant. You must know a spell to store it in your cache capacitor. When you cast the spell into your cache capacitor, you expend the spell slot normally and make any decisions required for that spell, but the duration doesn\’t expire for 24 hours. If the spell in your cache capacitor is dispelled or dismissed, you can spend 5 minutes of uninterrupted concentration to reestablish it, keeping the same decisions you made when you cast it, and gaining whatever duration the spell had remaining. You can\’t exchange the stored spell for another spell until you again regains your spells.\nAt 12th level, your cache capacitor gains a second slot that can hold darkvision, lesser resistant armor, life bubble, or spider climb.\nAt 18th level, your cache capacitor gains a third slot that can hold arcane sight, flight (spell level 3rd or lower), see invisibility, or tongues. ",
    lvl: 6,
    type: "Класс",
    subtype: "Техномант, Способность класса",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Подзарядка решимости",
    descr: "You recover Resolve Points when you use powerful magic. Each time you cast a 6th-level spell, you regain 1 Resolve Point, up to your normal maximum. This applies only to spells you cast using your normal 6th-level spell slots, not to those you cast using magic items or other methods such as fuse spells. ",
    lvl: 19,
    type: "Класс",
    subtype: "Техномант, Способность класса",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Объединение заклинаний",
    descr: "You can combine lower-level spell slots to cast higher-level spells. As part of casting a spell, you can spend 1 Resolve Point to exchange a number of unused spell slots for a single spell slot of a higher level; this expends the lower-level spell slots. Add up the levels of the expended slots to determine which higher level of spell you can cast (maximum 6th). For instance, you could exchange three 1st-level slots to cast a 3rd-level spell, or you could exchange two 3rd-level slots to cast a 6th-level spell. If you combine spell slots to cast a 6th-level spell, it doesn\’t count as such for resolve attunement.\nFurthermore, you can spend 2 Resolve Points to combine two 6th-level spell slots to cast wish.",
    lvl: 20,
    type: "Класс",
    subtype: "Техномант, Способность класса",
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Адаптивные биоимпланты",
    descr: "You have learned to leverage your biotech augmentations in ways their creators hardly envisioned. Up to twice per day as a standard action, you can deactivate a piece of biotech implanted in your body (except for a prosthetic limb), rendering it inert until your next 8-hour rest, to regain 1 Resolve Point. An inert piece of biotech doesn\’t grant its usual benefits (for instance, an inert venom spur can\’t be used to attack), and you can shut down a single biotech implant only once per day.",
    lvl: 18,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Археологическое открытие",
    descr: "p to twice per day, when you document a new artifact from an ancient or unknown culture, you regain 1 Resolve Point. When you discover an item on an unexplored planet, this process usually takes 10 minutes at most (and doesn\’t count as resting to regain Stamina Points), but even on known planets, you might be able to find new artifacts in 1d4 hours (or less) in old ruins or remote sections of cities with long histories or a high degree of trade with foreign cultures.",
    lvl: 18,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Благославление Бесмары",
    descr: "The pirate goddess Besmara blesses your thieving and marauding ways, even if you don\’t worship her directly. Up to twice per day, when you successfully ambush and defeat a significant foe or group of foes in tactical combat or starship combat in order to take any goods and valuables they are transporting (or simply have in their possession), you recover 1 Resolve Point.",
    lvl: 18,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Боди-хакер",
    descr: "Your constant experimentation has blurred the lines between your body and your augmentations. Once per day as a full action, you can overclock one of your cybernetic augmentations to regain a number of Stamina Points equal to the augmentation\’s item level; you must have a cybernetic augmentation installed in your body to use this ability.",
    lvl: 6,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Божественный дар",
    descr: "Your deity grants you mystic power. Choose one 1st-level mystic spell with some connection to your deity\’s portfolio (subject to the GM\’s approval). If you have levels in the mystic class, you gain 1 additional 1stlevel spell per day and add the chosen spell to your list of mystic spells known. Otherwise, you can use the chosen spell once per day as a spell-like ability.",
    lvl: 12,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Быстрый охотник",
    descr: "You know just how to ask around about your marks to gain information and insight in a hurry. You can use Diplomacy to gather information about a specific individual in half the normal time, and you reduce the penalty for following tracks using Survival while moving at full speed to 0.",
    lvl: 6,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Взгляд в будущее",
    descr: "Up to twice per day when you successfully use the Survival skill to predict the weather, you can spend 10 minutes contemplating what the future holds to regain 1 Resolve Point; this doesn\’t count as resting to regain Stamina Points. You must spend 1 minute observing the surrounding area and its weather patterns to use this ability, even if you have another ability that allows you to predict the weather in a shorter amount of time.",
    lvl: 18,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-07"
},
{
    name: "Воспоминания о пережитом",
    descr: "Reflecting on your experience within or against the galaxy\’s cults provides you with inner reserves of strength. Up to twice per day, you can deliberate about your time as a cultist—either by speaking to another person or by recording private audio logs—for 10 minutes to regain 1 Resolve Point; this time doesn\’t count as resting for the purpose of regaining Stamina Points.",
    lvl: 18,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Вспышка озарения",
    descr: "When you fully open yourself to the psychic resonance around you, especially in the split second when your life is on the line, time seems to come to a halt. In these fleeting moments, you can sense the reverberations of actions that you have not yet taken, and guide your course accordingly. Once per day as a standard action, you can cast augury as a spell-like ability, though you can see only 1 minute into the future. This functions in all other ways as augury.",
    lvl: 6,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Выдающееся открытие",
    descr: "До двух раз в день вы можете восстановить 1 ПР, открыв и описав ранее неизвестного представителя флоры или фауны. На неисследованных планетах этот процесс обычно занимает не более 10 минут (и не считается отдыхом для восстановления ПЖ), но даже на исследованных мирах вы можете отыскать новый вид за 1d4 часа (или даже быстрее), если находитесь в удалённой или богатой живностью местности.",
    lvl: 18,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Грёзы",
    descr: "Up to twice per day after using your dreams of the future ability, if your reroll is unsuccessful, you can spend some time reflecting on the fleeting and sometimes unreliable nature of dreams and prophecy. You can spend 10 minutes in deep meditation on this topic to regain 1 Resolve Point; this doesn\’t count as resting to regain Stamina Points.",
    lvl: 18,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Добытчик",
    descr: "You know that a colony\’s survival means that each colonist look out for everyone else in times of hardship or privation. When you successfully use the Survival skill to endure severe weather or live off the land, increase the number of other creatures you can grant saving throw bonuses or sustenance to by an amount equal to half your level. You can give another creature any benefit that you would gain from a Survival check to endure severe weather or live off the land (such as a bonus to Fortitude saves or sustenance you would gain), but if you do, you don\’t gain it for yourself.",
    lvl: 6,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-07"
},
{
    name: "Драконьи повадки",
    descr: "You can harness the terrifying reputation of dragons to strike fear into the hearts of those you oppose. You\’ve read or seen so much of dragons\’ tactics that you can mimic them with surprising accuracy and effectiveness. When you successfully use Intimidate to bully a creature, its change in attitude lasts for an additional 10 minutes. When you successfully use Intimidate to demoralize an opponent, it is shaken for 1 additional round.",
    lvl: 6,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Драконьи сокровища",
    descr: "You have a deep understanding of dragons\’ motivations, natural prowess, and ancient cultures, and you have taken on a dragon\’s love of material possessions. Up to twice per day, you can spend 10 minutes cataloging and examining your wealth— such as inquiring into your bank account or polishing your most expensive weapon—to recover 1 Resolve Point; this doesn\’t count as resting to regain Stamina Points.",
    lvl: 18,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Драконья шкура",
    descr: "You have conditioned your skin to withstand the inherent power that dragons hold inside them, and you are more inured to elemental damage as a result. The first time each day you would take energy damage, you gain energy resistance 5 against that type of damage for that attack and for 1 hour afterward or until you rest to regain Stamina Points, whichever comes first. This energy resistance stacks with only one other type of energy resistance you have from another source.",
    lvl: 12,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Единение с природой",
    descr: "Being out in the natural world revitalizes your spirits, reminding you why you enjoy the lifestyle you lead. Up to twice per day in a natural setting (such as a jungle or even an arctic tundra), you can spend 10 minutes meditating or simply considering the world around you (this doesn\’t count as resting to regain Stamina Points) to regain 1 Resolve Point.",
    lvl: 18,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Жажда Скорости",
    descr: "Speeding in a vehicle gives you a heady rush, and you can easily handle operating vehicles at high velocities that might send lesser pilots spinning out of control. Reduce any penalties to Piloting checks you make when on a vehicle by 1. When you take the double maneuver action during a vehicle chase, reduce the penalty for each action by 1. Whenever a Piloting check has a penalty for failing by 5 or more, you take that penalty only if you fail by 10 or more.",
    lvl: 12,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Защитник животных",
    descr: "You harm creatures of the wilderness only when necessary for survival, preferring to simply knock them unconscious whenever possible. When you use a weapon that deals lethal damage to deal nonlethal damage to a creature of the animal, plant, or vermin type that you have identified with a successful Life Sciences check, you don\’t take the standard –4 penalty to your attack rolls. In addition, if you are dealing nonlethal damage in this way and score a critical hit, you can choose not to impose any of your weapon\’s critical hit effects. Finally, you can use Life Science to provide first aid (as per the Medicine task) to creatures of the animal, plant, and vermin types.",
    lvl: 6,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Защищённые системы",
    descr: "You understand the potential vulnerabilities of cybernetics and have tinkered extensively with your own to make them more resilient. The DC to hack your cybernetic augmentations via magic or technological means increases by 5, thanks to the devious security countermeasures you have added to them. Additionally, your cybernetic augmentations grant you electricity resistance 5; this resistance stacks with one other source of energy resistance.",
    lvl: 12,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Знаменитость",
    descr: "You are famous enough that pretty much everyone has either heard of you or can quickly find information about you (it\’s a DC 10 Culture check to recognize your name and a DC 20 Culture check for someone to recognize you out of context from your appearance alone). Among those who follow your iconic profession, you\’ve built up both fans and detractors due to your celebrity. If you\’re looking for a generic person like “a doctor who can treat this disease,” you can almost always find one who\’s a fan and whose attitude starts as friendly or helpful to you; this takes 2d4 hours. At the GM\’s discretion, fans might give you services (although not goods) for a discount or even for free.",
    lvl: 6,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Знаменитый боец",
    descr: "You have developed a considerable fandom that loves you for your arena prowess. You\’re famous enough that others require only a DC 15 Culture check to recognize your name and a DC 25 Culture check to recognize you out of context from your appearance alone. Because you\’re famous for your brutal stage presence, you can spend twice the normal amount of time when using Intimidate to bully a creature whose attitude is indifferent or better. If you do and succeed at the check, when the effect wears off, the creature\’s attitude toward you is worsened only to indifferent, not unfriendly. At the GM\’s discretion, a die-hard fan\’s attitude might be worsened to friendly instead, or you might be able to use this ability against an unfriendly target.",
    lvl: 6,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Изыскатель",
    descr: "You can research much faster than most other people, allowing you to collate information from databases, libraries, and other sources in one-quarter the normal time; with this ability, you can typically take 20 to recall knowledge in 5 rounds.",
    lvl: 12,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Истинная сопричастность",
    descr: "Up to twice per day, after performing a significant action strongly aligned with your faith\’s dogma (at the GM\’s discretion), you can spend 10 minutes in deep meditation or prayer to regain 1 Resolve Point; this doesn\’t count as resting to regain Stamina Points.",
    lvl: 18,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Командир отделения",
    descr: "You are extremely skilled at coordinating with your squad, both because of your tactical efficiency and because of the respect that you command. If you are able to attempt the check in question, you automatically succeed at a skill check to aid another when assisting a squad member or other longtime ally (such as a fellow PC).",
    lvl: 12,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Командующий",
    descr: "You pull determination from your victories with your squad, no matter how bloody. After participating in at least three combats in a day in which you defeat distinct groups of significant enemies, you recover 1 Resolve Point. After participating in six such combats in a day, you recover a second Resolve Point.",
    lvl: 18,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Контрабандист",
    descr: "You know how and when to move illicit goods and how to get in and out of tight situations that might spell doom for a less seasoned smuggler. Once per day when you attempt a Stealth check to hide, you can roll twice and take the higher result. Additionally, whenever someone attempts a Perception check to search your body for objects you have hidden on your person using the hide object task of the Sleight of Hand skill, the searcher receives only a +2 bonus to the check, instead of a +4 bonus.",
    lvl: 6,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Коррупционные связи",
    descr: "Your underworld contacts have serious pull with the corporations and the authorities and can get you out of just about any legal trouble—as long as you\’re willing to pay the right price. Depending on the severity of the crime, this can be anywhere between 500 credits × your character level and 10,000 credits × your character level.",
    lvl: 6,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Культист под прикрытием",
    descr: "Once you have discovered a hidden cult, you can quickly learn to slip into the mindset of its members and pretend to be one of them. If you spend 10 minutes conversing with a member of a hidden cult and succeed at a DC 25 Culture check, typical followers of that cult have a starting attitude of indifferent toward you. You also gain a +2 bonus to Bluff, Diplomacy, and Intimidate checks against such followers.",
    lvl: 6,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Любимец толпы",
    descr: "The first time each day you deal the finishing blow (reduce a creature to 0 Hit Points) to a significant enemy in front of an audience (consisting of at least one bystander or ticket-holding fan, but not another enemy), you regain 1 Resolve Point. If the audience contains 20 or more creatures, you instead regain 2 Resolve Points.",
    lvl: 18,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Мастер на все руки",
    descr: "You can do just about anything if you put your mind to it, and you never let lack of formal instruction stand between you and a task that needs handling. You can use all skills untrained, even if you could not normally do so, and when you roll a natural 20 while attempting a skill check for a skill in which you don\’t have ranks, your bonus from eager dabbler increases to +4.",
    lvl: 12,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Ментальная гравитация",
    descr: "Though nothing is truly constant in the universe, stars are one of the few celestial bodies whose positioning within their systems rarely changes. Like the sun\’s ineffable mass, you will not be moved from your proper mental space. You gain a +1 bonus to Will saving throws against compulsion effects.",
    lvl: 6,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Мертвенная стойкость",
    descr: "You draw dark strength from the spark of negative energy within you, and you gain a fraction of the resistances that undead creatures have. You gain a +1 bonus to saving throws against disease, exhaustion, fatigue, mind-affecting effects, paralysis, poison, sleep effects, and stunning.",
    lvl: 6,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Мертвецкая закалка",
    descr: "Your body, always somewhat cool to the touch despite how much warm clothing you wear, becomes resistant even to extreme cold. You gain cold resistance equal to your level. If you already have greater cold resistance from some other source, that cold resistance instead increases by an amount equal to half your level.",
    lvl: 12,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Меч и пистолет",
    descr: "You are well trained in a traditional piratical fighting style dating as far back as the antiquated ages before the Gap. When you are wielding at least one one-handed melee weapon and at least one small arm, you can make two attacks against the same target with one of each type of weapon as a standard action. Each attack takes the same –4 penalty as a full attack action.",
    lvl: 12,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "На кончике языка",
    descr: "Sometimes, after pausing to collect your thoughts, you realize that you know the answer to a particularly challenging question. Once per day, you can reroll any skill check to recall knowledge. You must decide to use this ability after rolling but before learning the information from your first roll. You must take the second result, even if it is worse.",
    lvl: 6,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Несгибаемое упорство",
    descr: "Increase your pool of Resolve Points by 1.",
    lvl: 18,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Неумолимый",
    descr: "You never seem to get tired, even when working longer and harder than everyone else in pursuit of your mark; some of your targets might even refer to you as a tireless ghost or an all-seeing hunter. You can walk or be otherwise active for 12 hours instead of 8 before needing to attempt Constitution checks for a forced march, and you can hustle for 2 hours a day during overland travel instead of 1 hour. Reduce the penalty for following tracks using Survival while moving at double speed to –10.",
    lvl: 12,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Общая эрудиция",
    descr: "При создании персонажа без темы вы получаете один классовый навы по своему выбору. Кроме этого, вы увеличиваете значение любой характеристики по своему выбору на 1.",
    lvl: 1,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Одинокий волк",
    descr: "You know at least a little bit about handling every role on a starship, and you can sub in for certain tasks in a pinch. Whenever you need to attempt a skill check either during starship combat or to directly repair or otherwise maintain your starship, you can treat half your ranks in Piloting as your ranks in the appropriate skill for the check, if that would be better (since you effectively have ranks in the related skill, you are considered trained in the skill for the purposes of this check).",
    lvl: 6,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Определённость",
    descr: "Once per day before you roll a skill check, you can gain a +2 bonus to that skill for that check.",
    lvl: 6,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Первоклассный охотник",
    descr: "Your relentless pursuit of your mark steels your determination and can renew your inner reserves of strength. Once per day while in pursuit of your mark, you can review current information about your mark for 10 minutes to regain 1 Resolve Point; this doesn\’t count as resting to regain Stamina Points. Additionally, once per day when you defeat your mark, you regain 1 Resolve Point.",
    lvl: 18,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Первоклассный пилот",
    descr: "Your piloting accomplishments invigorate you, giving you renewed purpose and zeal. Up to twice per day, when you defeat a significant enemy in starship combat as a pilot or succeed in a vehicle chase (meaning that you\’ve either escaped a pursuer or caught or defeated your opponent), you recover 1 Resolve Point.",
    lvl: 18,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Первый контакт",
    descr: "Вы знаете как произвести хорошее первое впечатление а представителей новых рас и ослабить их чувство страха перед неизведанным. Если существо ранее не встречало представителей вашей расы (или рас ваших спутников) и обычно недружелюбно относится к неизвестным расам, то с вашим подходом его начальное отношение меняется на безразличное. На враждебных безразличных, дружелюбных и готовых помочь существ эта способность влияния не оказывает.",
    lvl: 12,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Пехотинец",
    descr: "You\’re used to long marches while carrying heavy equipment and can hoist most machinery with ease. Treat your Strength as 1 higher for the purpose of determining your bulk limit.",
    lvl: 6,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Пиджин",
    descr: "Если вы не можете найти общего языка с повстречавшимися вам существами, вы можете потратить 10 минут на попытки общения с ними (если они на это согласны) и после этого совершить проверку культуры со СЛ 25. При успехе вы создаёте простой язык (пиджин), позволяющий общаться на простые темы. Вы не можете использовать язык для общения с кем-либо, кроме конкретно этих существ, но при встрече с похожими существами, говорящими на том же языке, вы получаете бонус +2 к проверке Культуры при создании пиджина.",
    lvl: 6,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "По рукам",
    descr: "Nothing is more thrilling to you than engaging in spirited discussion to pursue your employer\’s interests. It is why you were hired, and it\’s why you venture out into the wider cosmos. Up to twice per day, after you spend at least 10 minutes bargaining and negotiating (this doesn\’t count as resting to regain Stamina Points) or using an infosphere to research details relevant to a deal that is significantly advantageous to your company, you regain 1 Resolve Point.",
    lvl: 18,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Подопытный",
    descr: "Thanks to your enthusiasm for biotech gear and constant tinkering with your DNA, you can adopt experimental, cutting-edge augmentations in your body beyond what most people can support. You can install one additional piece of biotech augmentation than a typical member of your race. For example, a human could have both a dragon gland and a wildwise implant even though they both occupy the throat system.",
    lvl: 12,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Пожиратель жизни",
    descr: "If you are close to a sapient creature when its life is snuffed out, you can draw part of the released energy into your deathinfused body, fueling your vitality. The first time each day when a living creature with an Intelligence score of 3 or more dies within 10 feet of you, you regain 1 Resolve Point. You need not be the one to deal the killing blow.\nAdditionally, anytime you are unconscious and a living creature with an Intelligence score of 3 or more dies in a space adjacent to you, as a reaction you can spend the appropriate number of Resolve Points to stabilize or, if you are already stable, you can spend 1 Resolve Point to stay in the fight.",
    lvl: 18,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Полезные связи",
    descr: "If your corporate database doesn\’t have a piece of information you are searching for, you probably know someone who does. It takes you only 10 minutes to attempt a Diplomacy check to gather information, as long as you have connection to a local infosphere or a quick way to communicate with contacts in a settlement that is at least technologically average (see Starfinder Core Rulebook 406). Additionally if you have access to a local infosphere, you can take 20 on a skill check to recall knowledge in half the normal time (typically 1 minute).",
    lvl: 6,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Прирождённый механик",
    descr: "You\’ve developed a unique talent for efficiently repairing constructs and starships, whether effecting emergency repairs on a drone or keeping robotic allies in the fight. Once per day, you can cast make whole, but you can target only construct creatures or damaged technological (not hybrid or magical) items. When repairing a starship (Starfinder Core Rulebook 321), you reduce the time spent to 2 hours of work instead of 5.",
    lvl: 12,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Профессиональный исследователь",
    descr: "Scientifically noting the even tiniest details about a new place—including everything from apparent colors and incline grades to barometric, seismic, and other delicate readings—is absolutely invigorating to you. Up to twice per day while on an unexplored planet (typically one that has had no contact with the Pact Worlds, though it doesn\’t need to be one you discovered yourself), you can spend 10 minutes exploring, mapping, and documenting a new geographical feature to recover 1 Resolve Point; this doesn\’t count as resting to regain Stamina Points.",
    lvl: 18,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Профессиональный кумир",
    descr: "Up to twice per day, you can interact with the public about your profession (usually during a performance, such as a concert, but sometimes in a press conference afterward if your profession requires no audience) for a total of at least 10 minutes to recover 1 Resolve Point.",
    lvl: 18,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Профессиональный модификатор",
    descr: "You feel energized whenever you demonstrate the improved capabilities of your cybernetically enhanced body. Up to twice per day, when you have succeeded at a significant task in a way that crucially relied upon abilities granted by your cybernetics (GM\’s discretion), you can spend 10 minutes testing and performing system maintenance on those augmentations to regain 1 Resolve Point; this doesn\’t count as resting to regain Stamina Points.",
    lvl: 18,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Профессиональный переводчик",
    descr: "Your notable exposure to ancient and foreign writing systems allows you to gain the general meaning of new languages with ease, even if you have never been exposed to the language previously. You can attempt a Culture check to decipher writing of up to 250 words of text as a move action, and you have no chance of entirely misconstruing its meaning. Additionally, as long as you have any computer equipment (including just a comm unit), you are assumed to have the necessary data set to take 20 on Culture checks to decipher writing, which you can do even if you are not trained in the Computers skill. It normally takes you 20 minutes to take 20 on text up to 250 words.",
    lvl: 12,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Профессиональный преступник",
    descr: "Organizing shady plans is one of your specialties, and doing so is like a sweet shot of adrenaline. Up to twice per day, after you spend at least 10 minutes to plan a significant heist, caper, or other crime (this doesn\’t count as resting to regain Stamina Points) and successfully complete at least one action toward enacting that plan, you regain 1 Resolve Point.",
    lvl: 18,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Профессиональный роботехник",
    descr: "There are few pieces of technology that you\’re unfamiliar with, so you are sure to take time to examine those unique discoveries you happen upon. Up to twice per day, after you spend at least 10 minutes studying a previously undiscovered piece of technology with an item level within 5 levels of your character level or the wreckage of a significant enemy technological construct, you regain 1 Resolve Point; this doesn\’t count as resting to regain Stamina Points.",
    lvl: 23,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Профессиональный учёный",
    descr: "To you, learning and absorbing knowledge related to your field of expertise is as refreshing as drinking from a cool spring in the middle of a desert planet. Up to twice per day, when in a situation where information from your specialty field could be useful (at the GM\’s discretion), you can spend 10 minutes in deep contemplation and research of your specialty field and recover 1 Resolve Point, in addition to using recall knowledge for the information you seek; this doesn\’t count as resting to regain Stamina Points.",
    lvl: 18,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Разносторонний опыт",
    descr: "The Tempering is about learning something of your own culture by experiencing others. Up to twice per day, when you participate in an established cultural tradition that takes at least 10 minutes and is significantly different from a tradition of your own culture, you can reflect on those differences to recover 1 Resolve Point. What constitutes a cultural tradition is subject to the GM\’s discretion, but it usually involves a formal or festive ceremony such as a dance, a feast, a parade, or even ritual meditation.",
    lvl: 18,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Резистентность",
    descr: "Your exposure to drugs and poisons during your time with the cult has left you inured to their effects. Once per day, you can reroll a Fortitude saving throw to resist the effects of a disease, drug, or poison. You must decide to use this ability after rolling but before learning the outcome of your first roll.",
    lvl: 12,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Самоделкин",
    descr: "You\’ve mastered the art of putting together technological armor and weapons from a variety of components. While equipment you construct certainly has your flair, it\’s also clear that you can accomplish great feats of construction. When calculating the number of ranks you have in a skill necessary to construct a technological (not magic or hybrid) item, increase that number by 1. This allows you to construct technological equipment of up to your character level + 1.",
    lvl: 6,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Связи в отрасли",
    descr: "You\’ve forged and maintained a number of connections with significant players in the biotech industry, scoring yourself favors and preferred treatment. As long as you are able to contact your connections in the industry, you gain a 10% discount off the typical list price for biotech augmentations installed in you.",
    lvl: 6,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Связи на чёрном рынке",
    descr: "You have contacts who can move goods of all manner discreetly and quietly just about anywhere to nearly any destination you can imagine. You can sell goods in any city for their usual price, even if the goods are illegal or too luxurious for the locals to afford. Additionally, for 10% more than the usual price, you can purchase goods to be delivered to a remote drop-off point (possibly near an adventure location) in the same solar system as a familiar city. The delivery always takes at least as long as the journey between the city and the drop-off point—and usually longer.",
    lvl: 12,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Силовые методы",
    descr: "When you throw the name of your company around, you can usually get what you want, though acting in such a way never wins you any friends. When you successfully use Intimidate to bully a creature, its change in attitude lasts three times as long. At the GM\’s discretion, this ability might not work on creatures that haven\’t heard of your corporation.",
    lvl: 12,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Сны о грядущем",
    descr: "Your dreams often contain vague visions of your immediate future, and they allow you to gain a bit of an edge in certain situations when these dreams rush to the forefront of your consciousness without warning. Each day after you wake from an 8-hour rest, choose ability checks, saving throws, or skill checks; twice per day, you can reroll a roll of the type you chose for that day.",
    lvl: 12,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Солнечная медитация",
    descr: "After much practice and the occasional painful sunburn, your meditation regime has reached the peak of its potency. The light of the sun recharges you, much like it does a solar-powered battery. Up to twice per day, you can spend 10 minutes meditating while in the direct light of a sun to regain 1 Resolve Point; this doesn\’t count as resting to regain Stamina Points.",
    lvl: 18,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Стойкость первопроходца",
    descr: "You are more resistant to effects that would overwhelm a less experienced settler. Once per day, you can reroll a Fortitude saving throw to resist the effects of a disease, poison, or severe weather.",
    lvl: 12,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-07"
},
{
    name: "Суперзнаменитость",
    descr: "Your reputation grows to the point that your name is ubiquitous. The DC of Culture checks to recognize you is reduced to 5 (or 10 to recognize you out of context from your appearance alone) and it takes only 1d4 hours to find a fan who meets a generic description. In addition, fans give you a 10% discount on purchased goods.",
    lvl: 12,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Тематическая эрудиция [Агент корпорации]",
    descr: "You are deeply connected to the world of corporate culture, and know all the movers and shakers. When attempting a Profession or Culture check to recall knowledge about corporations and their executives, reduce the DC by 5. Diplomacy is a class skill for you, though if it is a class skill from the class you take at 1st level, you instead gain a +1 bonus to Diplomacy checks. In addition, you gain an ability adjustment of +1 to Charisma at character creation.",
    lvl: 1,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Тематическая эрудиция [Ас]",
    descr: "Вы просто одержимы звездолётами и транспортными средствами, поэтому запоминаете всё, что с ними связано. Если вы пытаетесь вспомнить информацию о моделях звездолётов и транспортных средств, их частях, а также известных пилотах, СЛ проверок Культуры снижается для вас на 5. Пилотирование становится для вас классовым навыком, но если оно уже является таковым благодаря выбранному на 1 уровне классу, вы вместо этого получаете +1 к проверкам Пилотирования. Кроме этого при создании персонажа значение вашей Ловкости увеличивается на 1.",
    lvl: 1,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Тематическая эрудиция [Биотехник]",
    descr: "You have a sharp mind for the intricacies of biotech augmentations and keep up-to-date on current research in the field, whether because you work to develop such technology or because you are the beneficiary of biotech augmentations— or, most likely, both. Reduce the DC of Life Science checks to identify biotech augmentations and to recall knowledge about famous biotech corporations and researchers by 5. Medicine is a class skill for you, though if it is a class skill from the class you take at 1st level, you instead gain a +1 bonus to your Medicine checks. In addition, you gain an ability adjustment of +1 to Intelligence at character creation.",
    lvl: 1,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Тематическая эрудиция [Гладиатор]",
    descr: "Your experience in the arenas has exposed you to countless warrior cultures, and you both recognize strange martial arts and know how to impress others with your own unique style. Reduce the DC of Culture checks to recall knowledge about entertainment combat, fighting styles, and gladiatorial traditions by 5. Intimidate is a class skill for you, though if it is a class skill from the class you take at 1st level, you instead gain a +1 bonus to Intimidate checks. In addition, you gain an ability adjustment of +1 to Constitution at character creation.",
    lvl: 1,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Тематическая эрудиция [Драконокровый]",
    descr: "You have a voracious appetite for lore about dragons and never forget a detail, whether it\’s about draconic culture, traditions, and abilities, or the personal information of the system\’s oldest dragons. When you attempt a Culture or Mysticism check to recall knowledge about dragons\’ ways, their abilities, or the names and general personal details about dragons that are adults or older, reduce the DC by 5. Culture is a class skill for you, but if it is a class skill from the class you take at 1st level, you instead gain a +1 bonus to Culture checks. In addition, you gain an ability adjustment of +1 to Charisma at character creation.",
    lvl: 1,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Тематическая эрудиция [Закалённый пилигрим]",
    descr: "You have read and studied much in your eagerness to learn about and experience new cultures, and you often know about them before you encounter them. Reduce the DC of Culture checks to recall knowledge about a culture\’s customs and related topics by 5. In addition, whenever you take a rank in Culture, you learn to speak and read two new languages instead of one. Culture is a class skill for you, though if it is a class skill from the class you take at 1st level, you instead gain a +1 bonus to Culture checks. In addition, you gain an ability adjustment of +1 to Charisma at character creation.",
    lvl: 1,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Тематическая эрудиция [Киберорождённый]",
    descr: "You enthusiastically study the field of cybernetics and seek to keep abreast of new applications and experimental technologies. Reduce the DCs of Engineering checks to identify cybernetic augmentations and of Life Science checks to recall knowledge about cybernetic augmentation techniques, as well as corporations and other research facilities involved in the production of and experimentation with cybernetic augmentations, by 5. Computers is a class skill for you, though if it is a class skill from the class you take at 1st level, you instead gain a +1 bonus to Computers checks. In addition, you gain an ability adjustment of +1 to Intelligence at character creation.",
    lvl: 1,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Тематическая эрудиция [Колонист]",
    descr: "You have amassed a vast knowledge of past colonization efforts, including those that have failed due to ignorance or carelessness. You know that basic knowledge about a new, uncharted world is the most valuable resource any colonist can have. Reduce the DC to identify average creatures using Life Science by 5. Survival is a class skill for you, though if it is a class skill from the class you take at 1st level, you instead gain a +1 bonus to Survival checks. In addition, you gain an ability adjustment of +1 to Constitution at character creation.",
    lvl: 1,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-07"
},
{
    name: "Тематическая эрудиция [Космический пират]",
    descr: "You have a distinct advantage over others when operating in the shadows of society. Reduce the DC of Culture checks to recall knowledge about black market locations, known smugglers, and notorious space pirates by 5. Bluff is a class skill for you, though if it is a class skill from the class you take at 1st level, you instead gain a +1 bonus to your Bluff checks. In addition, you gain an ability adjustment of +1 to Dexterity at character creation.",
    lvl: 1,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Тематическая эрудиция [Ксеноархеолог]",
    descr: "You have trained yourself to have few presuppositions about the foreign devices you uncover. Reduce the DC to identify rare, ancient, or alien tech by 5. Engineering is a class skill for you, though if it is a class skill from the class you take at 1st level, you instead gain a +1 bonus to Engineering checks. In addition, you gain an ability adjustment of +1 to Intelligence at character creation.",
    lvl: 1,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Тематическая эрудиция [Ксеноискатель]",
    descr: "Вы обучены находить и опознавать инопланетные формы жизни и умеете устанавливать с ними контакт. СЛ проверки Биологических наук для опознания редкого существа снижается для вас на 5. Биологические науки становятся для вас классовым навыком, но если они уже являются таковым благодаря выбранному на 1 уровне классу, вы вместо этого получаете бонус +1 к проверкам Биологических наук. Кроме того, при создании персонажа значение вашей Харизмы увеличивается на 1.",
    lvl: 1,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Тематическая эрудиция [Культист]",
    descr: "You cataloged the symbols, members, and indoctrination techniques of the cult you joined, and you can generalize these to hidden cults of any kind. Reduce the DC of Culture and Mysticism checks to recall knowledge about hidden cults and secretive religions, including knowledge about their beliefs, hierarchy, and symbols, by 5. Reduce the DC of Diplomacy checks to gather information about hidden cults and their enigmatic members (usually considered obscure or secret knowledge or mysterious or obscure individuals) by 5. Disguise is a class skill for you, though if it is a class skill from the class you take at 1st level, you instead gain a +1 bonus to Disguise checks. In addition, you gain an ability adjustment of +1 to Constitution at character creation.",
    lvl: 1,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Тематическая эрудиция [Кумир]",
    descr: "Выберите навык профессии – вы тесно связаны с занятием, принёсшим вам известность. Если вы пытаетесь вспомнитьинформацию о других кумирах вашей профессии или о каких-то её культурных аспектах, СЛ проверок Культуры и професии снижается для вас на 5. Культура становится для вас классовым навыком, но если оно уже является таковым благодаря выбранному на 1 уровне классу, вы вместо этого получаете +1 к проверкам Культуры. Кроме этого при создании персонажа значение вашей Харизмы увеличивается на 1.",
    lvl: 1,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Тематическая эрудиция [Наёмник]",
    descr: "Вы много знаете о вооружённых силах: от наёмников-конкурентов до сил планетарной обороны и порядков выполнения военных операций. Вы можете прибегать к этой информации, чтобы облегчить себе задачу. Если вы пытаетесь вспомнить информацию об иерархии, военослужащих, манёврах и прочем связанном с вооружёнными силами, СЛ проверок Культуры и профессии (наёмник) снижается для вас на 5. Атлетика становится для вас классовым навыком, но если оно уже является таковым благодаря выбранному на 1 уровне классу, вы вместо этого получаете +1 к проверкам Атлетики. Кроме этого при создании персонажа значение вашей Силы увеличивается на 1.",
    lvl: 1,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Тематическая эрудиция [Отмеченный смертью]",
    descr: "Thanks to your experiences with the undead and the growing power of the grave within your form, you have an instinctive understanding and recognition of negative energy and undead. You can use Perception, rather than Mysticism, to recall knowledge about undead and negative energy effects when you first observe them. Perception is a class skill for you, though if it is a class skill from the class you take at 1st level, you instead gain a +1 bonus to Perception checks. In addition, you gain an ability adjustment of +1 to Constitution at character creation.",
    lvl: 1,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Тематическая эрудиция [Охотник за головами]",
    descr: "Your mind is a cold steel trap when it comes to scraps of information about the creatures you\’re tracking down. Choose a specific sentient creature that you can identify by name, alias, or specific identity to be your mark. Reduce the DC of Culture or Profession (bounty hunter) checks to recall knowledge about your mark, as well as to recall knowledge about law-enforcement individuals and practices, by 5. If you choose a mark that is known only by an alias or secret identity, this ability helps you learn facts only about the identity you know about, not any other unknown identities. Once you defeat your mark, as an action that takes 1 minute, you can study dossiers and database information about another individual to be your new mark. You can instead abandon your mark for a new one without defeating it, but if you do so, you take a –2 penalty to all skill checks for 1 week. Survival is a class skill for you, though if it is a class skill from the class you take at 1st level, you instead gain a +1 bonus to Survival checks. In addition, you gain an ability adjustment of +1 to Constitution at character creation.",
    lvl: 1,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Тематическая эрудиция [Покоритель космоса]",
    descr: "Дальние миры не дают вам покоя: вы тщательно запоминаете всё, что узнаёте о новых и необычных местах, чтобы легко вспомнить это при необходимости. Кроме этого знания в области биологии и топографической анатомии позвлоили вам закалить свой организм. Если вы пытаетесь вспомнить информацию о необычных новых мирах или космических являениях, СЛ проверки Физических наук снижается для вас на 5. Физические науки становятся для вас классовым навыком, но если оно уже является таковым благодаря выбранному на 1 уровне классу, вы вместо этого получаете +1 к проверкам Физических наук. Кроме этого при создании персонажа значение вашей Выносливости увеличивается на 1.",
    lvl: 1,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Тематическая эрудиция [Послушник солнца]",
    descr: "You\’ve read extensively about the physics of the sun and its associated planes and the best theories about how they interact to produce the solar environment. You\’ve also made a study of every sun-based religion of the Pact Worlds, from the Church of the Dawnflower down to the most primitive sun cult. Reduce the DC of Physical Science checks to recall knowledge about scientific questions concerning the sun and light by 5. Reduce the DC of Mysticism checks to recall knowledge about sun-focused religions, the Elemental Plane of Fire, and the Positive Energy Plane by 5. Perception is a class skill for you, though if it is a class skill from the class you take at 1st level, you instead gain a +1 bonus to Perception checks. In addition, you gain an ability adjustment of +1 to Wisdom at character creation.",
    lvl: 1,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Тематическая эрудиция [Преступник]",
    descr: "Вы обладаете связями в преступных кругах, разбираетесь в подпольных махинациях, распологаете информацией о криминальных авторитетах, да и сам кое-что умеете. Если вы пытаетесь вспомнить информацию о преступном мире, СЛ проверок Культуры снижается для вас на 5. Ловкость рук становится для вас классовым навыком, но если оно уже является таковым благодаря выбранному на 1 уровне классу, вы вместо этого получаете +1 к проверкам Ловкости рук. Кроме этого при создании персонажа значение вашей Ловкости увеличивается на 1.",
    lvl: 1,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Тематическая эрудиция [Роботехник]",
    descr: "You\’re obsessed with the intricacies of constructs and how automated machines function. You can easily identify what a machine\’s function is and have an easier time attempting to access the internal programming of mechanized life-forms. Reduce the DC of Engineering checks to identify creatures and technology by 5. Computers is a class skill for you, though if it is a class skill from a class you take at 1st level, you instead gain a +1 bonus to Computers checks. In addition, you gain an ability adjustment of +1 to Intelligence at character creation.",
    lvl: 1,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Тематическая эрудиция [Священник]",
    descr: "Choose a deity or a philosophy whose alignment is within one step (on either the good-evil axis or the law-chaos axis) of your own. Reduce the DC of Culture and Mysticism checks to recall knowledge about religious traditions, religious symbols, and famous religious leaders by 5. Mysticism becomes a class skill for you, though if it\’s a class skill from the class you take at 1st level, you instead gain a +1 bonus to Mysticism checks. In addition, you gain an ability adjustment of +1 to Wisdom at character creation.",
    lvl: 1,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Тематическая эрудиция [Толкователь снов]",
    descr: "Your perceptions of the psychic energies permeating reality provide you insight into various magical and mystical phenomena, especially those produced by creatures that can cast spells. Reduce the DCs of Mysticism checks to identify spells as they are being cast and to recall knowledge about arcane symbols and magic traditions by 5. Mysticism is always a class skill for you, though if it is a class skill from the class you take at 1st level, you instead gain a +1 bonus to Mysticism checks. In addition, you gain an ability adjustment of +1 to Wisdom at character creation.",
    lvl: 1,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Тематическая эрудиция [Учёный]",
    descr: "Вы – признанный эксперт в одной из дисциплин, вашу страсть сложно не заметить. Выберите Биологические или Физические науки и область вашей специализации. Выбрав Биологические науки, можете специализироваться в биоинженерии, биологии, ботанике, экологии, генетике, ксенобиологии, зоологии или другой подобной науке. Выбрав Физические науки, можете специализироваться в астрономии, химии, климатологии, географии, геологии, метеорологии, океанографии, физике или другой подобной науке. Если вы пытаетесь вспомнить информацию по своей специальности, СЛ проверок навыков снижается для вас на 5. Выбранный навык становится для вас классовым навыком, но если оно уже является таковым благодаря выбранному на 1 уровне классу, вы вместо этого получаете +1 к проверкам выбранного навыка. Кроме этого при создании персонажа значение вашего Интеллекта увеличивается на 1.",
    lvl: 1,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Тематическая эрудиция [Хранитель природы]",
    descr: "In the course of your explorations of various biomes, you have studied all manner of flora and fauna. Reduce the DC to identify creatures of the animal, plant, and vermin types using Life Sciences by 5. Survival is a class skill for you, though if it is a class skill from the class you take at 1st level, you instead gain a +1 bonus to Survival checks. In addition, you gain an ability adjustment of +1 to Wisdom at character creation.",
    lvl: 1,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Тематическая эрудиция [Esper]",
    descr: "You might have studied the traditions and techniques of the Swarm Patrol Corps, who once used their psychic abilities against the Swarm. Or you may be part of a new unit that is finding novel ways to leverage psychic gifts to achieve military victories. Whichever is true, you fight battles with your brain as much as your weaponry and use the psychic talents of your team to seize victory.\nAlways alert to dangers, you\’ve created extensive files on past psychic threats. You know that psychic foes can come in countless varieties, from sapient beings to monsters. You\’ve cataloged not only their most dangerous abilities, but also their weaknesses and the best methods to combat them. Reduce the DC by 5 for Culture, Life Science, or Mysticism checks to identify creatures or opponents with psychic or magical abilities, from the Swarm with their hive mind to necrovites with their mighty spellcasting. Mysticism is a class skill for you, though if it is a class skill from the class you take at 1st level, you instead gain a +1 bonus to Mysticism checks. In addition, you gain an ability adjustment of +1 to Charisma at character creation.",
    lvl: 1,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-23"
},
{
    name: "Теплопередача",
    descr: "You have learned to thrive in the heat of the sun, and when you are burned, you can funnel some of that fiery energy into your own spells and weapons. Whenever you take fire damage, you can increase the amount of fire damage you deal as part of an attack or spell made before the end of your next turn by an amount equal to one-quarter the damage you just took (rounded down, minimum 1).",
    lvl: 12,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Убедительные доводы",
    descr: "You understand a variety of social cues and are quick to take advantage of them when you interact with others. When you exceed the DC of a Diplomacy check to improve a creature\’s attitude by 5 or more, you need to spend only 1 extra minute interacting with the creature to improve its attitude by one additional category. In addition, you worsen a creature\’s attitude only if you fail the Diplomacy check to improve its attitude by 10 or more.",
    lvl: 6,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Углублённое изучение",
    descr: "Choose a skill that is a class skill for you. Once per day, you can reroll one such skill check before learning the results of the roll. You must take the second result, even if it is worse.",
    lvl: 12,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Умелый любитель",
    descr: "In your journeys, you\’ve picked up quite a few tricks about all sorts of things, even if you haven\’t formally studied them, and you can often use this logic and intuition to your advantage. You gain a +2 bonus to skill checks if you don\’t have any ranks in that skill. This ability does not allow you to attempt checks for trained-only skills.",
    lvl: 6,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Умелый собиратель",
    descr: "Thanks to your survival skills, you can find materials to sustain and bolster your allies while guiding and feeding them by foraging in a wild environment. When you succeed at a Survival check to live off the land, you and the creatures you provide food and water for as a result of the skill check regain an additional number of Hit Points equal to your Wisdom modifier when you next recover Hit Points with a full night\’s rest (which must be no more than 24 hours after you succeed at your check).",
    lvl: 12,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Церковный сановник",
    descr: "You have reached a rank of authority in your religion. Typical lay followers of your religion have a starting attitude of helpful toward you and will often provide you with simple assistance on request due to some combination of adoration, respect, or fear (depending on your religion), and even other clergy must give your opinions due consideration in matters of disagreement. You gain a +2 bonus to Diplomacy and Intimidate checks against lay followers and lowerranking clergy.",
    lvl: 5,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Часть образа",
    descr: "Your name is synonymous with your gladiatorial persona and outfit. As long as your gear is in good condition, you don\’t take any circumstantial penalties for wearing light armor or heavy armor in social situations (such as wearing golemforged plate to a formal event). You can use Intimidate or Profession (gladiator; Charisma) to “hide” up to two smaller weapons (such as a small arm or one-handed melee weapon with light bulk) or one larger melee weapon on your body, though you do not conceal the weapon so much as convince others to accept your carrying it without any objections. You can draw these weapons as normal; you do not need to spend a standard action as you would to draw a hidden weapon. Otherwise, this functions as the hide object task of Sleight of Hand. At the GM\’s discretion, areas with especially high security may not allow you to carry weapons at all, no matter your reputation.",
    lvl: 12,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Чутьё на ловушки",
    descr: "You often encounter ancient, exotic traps and security devices, varying from mechanical defenses to magical wards. You have honed your senses to pick out warning signs of traps of any kind. When you come within 10 feet of a trap, you can immediately attempt a Perception check to notice the trap, which should be rolled in secret by the GM.",
    lvl: 6,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Широкие познания",
    descr: "In your many travels, you have accumulated a wide base of knowledge about all manner of subjects. You can always take 10 on skill checks to recall knowledge, no matter the circumstances. In addition, once per day when attempting a skill check with a skill you have no ranks in, you can roll twice and take the better result.",
    lvl: 12,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС "
},
{
    name: "Danger Sense",
    descr: "Being forewarned is half the battle. Through continuous training and work in the field against a variety of enemies, you\’ve opened the pathways of your mind and developed a deep sensitivity to the presence of opponents, no matter where they may hide. You develop blindsense (hostile thought) with a range of 30 feet. The hostility need not be aimed at you.",
    lvl: 12,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-23"
},
{
    name: "Psychic Coordination",
    descr: "Being able to communicate with your squad is of utmost importance. When in the field, you need to stay in touch, coordinate attacks, or revise battle plans in light of new information. Fortunately, your extensive training in psychic lore has awakened your own latent psychic gifts, or expanded upon talents that were already there. You gain limited telepathy with a range of 30 feet. If your species already grants you any sort of telepathy, you instead increase the range of that telepathy by 30 feet.",
    lvl: 6,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-23"
},
{
    name: "Tactician",
    descr: "When you make plans with your squad, your determination increases. Once per day, when you spend 10 minutes reviewing a battle plan with a team member against a significant foe, you recover 1 Resolve Point. Doing so doesn\’t count as resting to regain Stamina Points. In addition, once per day, if you successfully carry out such a tactical plan, you recover 1 Resolve Point.",
    lvl: 18,
    type: "Тема",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-23"
},
{
    name: "Баррикадирование",
    descr: "You are adept at creating quick, temporary cover.\nBenefit: As a move action, you can stack and reinforce objects that are too small or too fragile to provide cover into a single square of adjacent cover. The GM has discretion over whether enough such objects are nearby to allow you to use this ability, but most urban and wilderness settings not specifically described as empty or barren have enough such material to allow at least one such temporary barricade to be built. The barricade grants partial cover against attacks with line of effect that pass through it. If the barricade is in a square that already granted partial cover, it instead grants normal cover.\nThe barricade is temporary and not particularly durable. When determining its hardness and Hit Points, treat it as a piece of equipment with an item level equal to half your total ranks in Engineering (minimum 1st level). Additionally, once it or a creature adjacent to it is hit by an attack, the barricade collapses at the beginning of your turn in 1d4 rounds (unless the barricade is destroyed completely by the attack). There isn\’t normally enough material for you to build a second barricade in exactly the same space unless you are in a particularly crowded area (as determined by the GM).",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: "Инженерное дело (1 пункт)",
    source: "ОКП"
},
{
    name: "Ближний бой",
    descr: "When you are attacking a foe in melee, you know how to maneuver to make it more difficult for other foes to target you.\nПреимущество: When you hit an adjacent foe with a melee attack, as long as you are adjacent to that target, you gain a +2 circumstance bonus to your AC against attacks from other creatures that are not adjacent to you until the beginning of your next turn.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: "БМА +1",
    source: "МС"
},
{
    name: "Боевая магия",
    descr: "You leave fewer openings when casting a spell.\nBenefit: You gain a +2 bonus to your Armor Class and saving throws against attacks of opportunity you provoked by casting a spell and against readied actions triggered by your spellcasting.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: "Способность творить заклинания 2 круга",
    source: "ОКП"
},
{
    name: "Боевая смекалка",
    descr: "You can adjust your fighting style to match specific conditions during combat.\nBenefit: Select three combat feats that you do not have but whose prerequisites you meet. Once per day as a move action, you can gain the benefit of one of these feats for 1 minute. Each time you gain a level, you can replace one of these three selected feats with a different feat that you don\’t have but meet the prerequisites for.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: "Три или более боевые черты",
    source: "ОКП"
},
{
    name: "Боевой манёвр+",
    descr: "You are particularly skilled with a specific combat maneuver.\nBenefit: Choose one combat maneuver (bull rush, dirty trick, disarm, grapple, reposition, sunder, or trip). You gain a +4 bonus to your attack roll to resolve that combat maneuver.\nSpecial: You can take Improved Combat Maneuver multiple times. The effects don\’t stack. Each time you take the feat, it applies to a new combat maneuver.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая, Черта дрона",
    category: null,
    requirement: "БМА +1",
    source: "ОКП"
},
{
    name: "Божественное благославление (Абадар)",
    descr: "Преимущество: When you make an attack as a standard action against a chaotic fey or chaotic outsider, your attack ignores any one form of DR, resistance, or immunity to damage the target has (your choice).\nПримечание: если вы начнёте поклоняться другому божеству, эта черта не даёт вам преимуществ, пока вы не получите следующий уровень персонажа. После этого вы получите соответствующее выбранному божеству преимущество, если его мировоззрение отличается от вашего не более чем на один шаг.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "Ваше мировоззрение отличается от принципиально-нейтрального не более, чем на один шаг",
    source: "МС"
},
{
    name: "Божественное благославление  (Бесмара)",
    descr: "Преимущество: You can attempt a disarm combat maneuver against an opponent to remove any item of 1 bulk or less that the target could draw as a move or swift action. \nПримечание: если вы начнёте поклоняться другому божеству, эта черта не даёт вам преимуществ, пока вы не получите следующий уровень персонажа. После этого вы получите соответствующее выбранному божеству преимущество, если его мировоззрение отличается от вашего не более чем на один шаг.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "Ваше мировоззрение отличается от хаотично-нейтрального не более, чем на один шаг",
    source: "МС"
},
{
    name: "Божественное благославление (Вейдан)",
    descr: "Преимущество: Whenever you first arrive on a new planet, you can select an appearance for yourself when you are on that planet. This becomes your natural appearance when on that planet (though you can use Disguise to alter this new appearance normally). This new appearance must be of the same type and subtype as your race, but you can change any other details. Anyone attempting to recognize you based on some other appearance must succeed at a Perception check with a DC equal to 20 + 1-1/2 × your character level. \nПримечание: если вы начнёте поклоняться другому божеству, эта черта не даёт вам преимуществ, пока вы не получите следующий уровень персонажа. После этого вы получите соответствующее выбранному божеству преимущество, если его мировоззрение отличается от вашего не более чем на один шаг.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "Ваше мировоззрение отличается от хаотично-доброго не более, чем на один шаг",
    source: "МС"
},
{
    name: "Божественное благославление (Даморитош)",
    descr: "Преимущество: When you score a critical hit with a doshko that doesn\’t have the wound or severe wound critical hit effect, you can replace any critical hit effect it normally has with the wound critical hit effect. If you score a critical hit with a doshko that normally has the wound or severe wound critical hit effect, you also apply the knockdown critical hit effect to the target. \nПримечание: если вы начнёте поклоняться другому божеству, эта черта не даёт вам преимуществ, пока вы не получите следующий уровень персонажа. После этого вы получите соответствующее выбранному божеству преимущество, если его мировоззрение отличается от вашего не более чем на один шаг.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "Ваше мировоззрение отличается от принципиально-злого не более, чем на один шаг",
    source: "МС"
},
{
    name: "Божественное благославление (Дезна)",
    descr: "Преимущество: Your deity sometimes grants you bursts of luck. Once per day, you can reroll any one failed skill check. \nПримечание: если вы начнёте поклоняться другому божеству, эта черта не даёт вам преимуществ, пока вы не получите следующий уровень персонажа. После этого вы получите соответствующее выбранному божеству преимущество, если его мировоззрение отличается от вашего не более чем на один шаг.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "Ваше мировоззрение отличается от хаотично-доброго не более, чем на один шаг",
    source: "МС"
},
{
    name: "Божественное благославление (Зон-Кутон)",
    descr: "Преимущество: When you cast a spell or make an attack that deals damage, you can grant that spell or attack the pain descriptor. When you damage a creature with a pain effect, as a reaction, you can cause it to become flat-footed for 1 round. Once you use this ability, you can\’t use it again until you spend 1 Resolve Point during a 10-minute rest to regain Stamina Points.\nПримечание: если вы начнёте поклоняться другому божеству, эта черта не даёт вам преимуществ, пока вы не получите следующий уровень персонажа. После этого вы получите соответствующее выбранному божеству преимущество, если его мировоззрение отличается от вашего не более чем на один шаг.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "Ваше мировоззрение отличается от принципиально-злого не более, чем на один шаг",
    source: "МС"
},
{
    name: "Божественное благославление (Ибра)",
    descr: "Преимущество: When you attempt a skill check to recall knowledge about a very difficult question, you receive a +2 divine bonus to your check. \nПримечание: если вы начнёте поклоняться другому божеству, эта черта не даёт вам преимуществ, пока вы не получите следующий уровень персонажа. После этого вы получите соответствующее выбранному божеству преимущество, если его мировоззрение отличается от вашего не более чем на один шаг.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "Ваше мировоззрение отличается от нейтрального не более, чем на один шаг",
    source: "МС"
},
{
    name: "Божественное благославление (Иомедэй)",
    descr: "Преимущество: When you make an attack as a standard action against an evil dragon or evil outsider, your attack ignores any one form of DR, resistance, or immunity to damage the target has (your choice). \nПримечание: если вы начнёте поклоняться другому божеству, эта черта не даёт вам преимуществ, пока вы не получите следующий уровень персонажа. После этого вы получите соответствующее выбранному божеству преимущество, если его мировоззрение отличается от вашего не более чем на один шаг.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "Ваше мировоззрение отличается от принципиально доброго не более, чем на один шаг",
    source: "МС"
},
{
    name: "Божественное благославление (Лао Шу По)",
    descr: "Преимущество: When you attack a flat-footed target in the surprise round of combat, if your attack hits, it deals 1d6 additional damage of the same type as its normal damage to a single target affected by the attack.\nПримечание: если вы начнёте поклоняться другому божеству, эта черта не даёт вам преимуществ, пока вы не получите следующий уровень персонажа. После этого вы получите соответствующее выбранному божеству преимущество, если его мировоззрение отличается от вашего не более чем на один шаг.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "Ваше мировоззрение отличается от нейтрально-злого не более, чем на один шаг",
    source: "МС"
},
{
    name: "Божественное благославление (Ньярлатхотеп)",
    descr: "Преимущество: Once per day when an attack, effect, or spell imposes a condition on you, as a reaction you can delay that condition so it takes effect on you 1 round later. The condition then lasts 1d4 rounds longer than it would have if you had not delayed it.\nПримечание: если вы начнёте поклоняться другому божеству, эта черта не даёт вам преимуществ, пока вы не получите следующий уровень персонажа. После этого вы получите соответствующее выбранному божеству преимущество, если его мировоззрение отличается от вашего не более чем на один шаг.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "Ваше мировоззрение отличается от хаотично-злого не более, чем на один шаг",
    source: "МС"
},
{
    name: "Божественное благославление (Орас)",
    descr: "Преимущество: Select three feats that you do not have but whose prerequisites you meet. Once per day as a move action, you can gain the benefit of one of these feats for 1 minute. Each time you gain a level, you can replace one of these three selected feats with a different feat that you don\’t have but whose prerequisites you meet. \nПримечание: если вы начнёте поклоняться другому божеству, эта черта не даёт вам преимуществ, пока вы не получите следующий уровень персонажа. После этого вы получите соответствующее выбранному божеству преимущество, если его мировоззрение отличается от вашего не более чем на один шаг.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "Ваше мировоззрение отличается от хаотично-нейтрального не более, чем на один шаг",
    source: "МС"
},
{
    name: "Божественное благославление (Пожиратель)",
    descr: "Преимущество: If you are knocked unconscious or killed by a creature that is a legal target for a weapon you are wielding, as a reaction you can make a single attack against the creature. You can make this single attack despite being unconscious or dead. \nПримечание: если вы начнёте поклоняться другому божеству, эта черта не даёт вам преимуществ, пока вы не получите следующий уровень персонажа. После этого вы получите соответствующее выбранному божеству преимущество, если его мировоззрение отличается от вашего не более чем на один шаг.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "Ваше мировоззрение отличается от хаотично-злого не более, чем на один шаг",
    source: "МС"
},
{
    name: "Божественное благославление (Саренрэй)",
    descr: "Преимущество: The first time you deal fire damage each round, you can convert half the fire damage into holy energy damage. Fire resistance or immunity does not apply to the holy energy portion of the damage. \nПримечание: если вы начнёте поклоняться другому божеству, эта черта не даёт вам преимуществ, пока вы не получите следующий уровень персонажа. После этого вы получите соответствующее выбранному божеству преимущество, если его мировоззрение отличается от вашего не более чем на один шаг.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "Ваше мировоззрение отличается от нейтрально-доброго не более, чем на один шаг",
    source: "МС"
},
{
    name: "Божественное благославление (Талавет)",
    descr: "Преимущество: As a move action, you can grant yourself a bonus as if an ally had succeeded at an aid another check or successfully used cover fire against a foe of your choice. This doesn\’t stack with any use of those options. Once you have used this ability, you can\’t use it again until you spend 1 Resolve Point during a 10-minute rest to regain Stamina Points. \nПримечание: если вы начнёте поклоняться другому божеству, эта черта не даёт вам преимуществ, пока вы не получите следующий уровень персонажа. После этого вы получите соответствующее выбранному божеству преимущество, если его мировоззрение отличается от вашего не более чем на один шаг.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "Ваше мировоззрение отличается от принципиально-нейтрального не более, чем на один шаг",
    source: "МС"
},
{
    name: "Божественное благославление (Триединый)",
    descr: "Преимущество: You can use a computer without having a user interface or hacking kit simply by touching it. You must still succeed at a Computers check to hack it if you do not have authorized access. Additionally, you have limited telepathy that functions only with constructs with the technological subtype.\nПримечание: если вы начнёте поклоняться другому божеству, эта черта не даёт вам преимуществ, пока вы не получите следующий уровень персонажа. После этого вы получите соответствующее выбранному божеству преимущество, если его мировоззрение отличается от вашего не более чем на один шаг.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "Ваше мировоззрение отличается от нейтрального не более, чем на один шаг",
    source: "МС"
},
{
    name: "Божественное благославление (Ургатоа)",
    descr: "Преимущество: Once per day as a swift action, you can force a creature of your choice within 60 feet that is subject to a disease to immediately attempt a save against that disease as if enough time had passed to fulfill its frequency. The subject suffers the normal consequences of a failed save against the disease, but a successful save does not count toward a number of successful saves needed to end the disease.\nПримечание: если вы начнёте поклоняться другому божеству, эта черта не даёт вам преимуществ, пока вы не получите следующий уровень персонажа. После этого вы получите соответствующее выбранному божеству преимущество, если его мировоззрение отличается от вашего не более чем на один шаг.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "Ваше мировоззрение отличается от нейтрально-злого не более, чем на один шаг",
    source: "МС"
},
{
    name: "Божественное благославление (Фаразма)",
    descr: "Преимущество: When you make an attack as a standard action against an undead creature, your attack ignores any one form of DR, resistance, or immunity to damage the target has (your choice).\nПримечание: если вы начнёте поклоняться другому божеству, эта черта не даёт вам преимуществ, пока вы не получите следующий уровень персонажа. После этого вы получите соответствующее выбранному божеству преимущество, если его мировоззрение отличается от вашего не более чем на один шаг.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "Ваше мировоззрение отличается от нейтрального не более, чем на один шаг",
    source: "МС"
},
{
    name: "Божественное благославление (Хайлакс)",
    descr: "Преимущество: You gain limited telepathy, as per the shirren racial ability. If you already have limited telepathy, you gain the ability to treat any creature that has a friendly or helpful attitude toward you as if it shared a language with you when determining whether you can use limited telepathy to communicate with it. \nПримечание: если вы начнёте поклоняться другому божеству, эта черта не даёт вам преимуществ, пока вы не получите следующий уровень персонажа. После этого вы получите соответствующее выбранному божеству преимущество, если его мировоззрение отличается от вашего не более чем на один шаг.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "Ваше мировоззрение отличается от принципиально-доброго не более, чем на один шаг",
    source: "МС"
},
{
    name: "Божественное благославление (Элориту)",
    descr: "Преимущество: Once per day you can cast identify as a spell-like ability, attempting a caster level check (use your character level as your caster level: 1d20 + your character level), in place of the normal Engineering or Mysticism check (though you still receive identify\’s +10 bonus).\nПримечание: если вы начнёте поклоняться другому божеству, эта черта не даёт вам преимуществ, пока вы не получите следующий уровень персонажа. После этого вы получите соответствующее выбранному божеству преимущество, если его мировоззрение отличается от вашего не более чем на один шаг.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "Ваше мировоззрение отличается от нейтрального не более, чем на один шаг",
    source: "МС"
},
{
    name: "Божественное благославление (Яраиса)",
    descr: "Преимущество: You can roll a skill check to recall knowledge twice and take the better of the two results. Once you have used this ability, you can\’t use it again until you spend 1 Resolve Point during a 10-minute rest to regain Stamina Points. \nПримечание: если вы начнёте поклоняться другому божеству, эта черта не даёт вам преимуществ, пока вы не получите следующий уровень персонажа. После этого вы получите соответствующее выбранному божеству преимущество, если его мировоззрение отличается от вашего не более чем на один шаг.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "Ваше мировоззрение отличается от нейтрально-доброго не более, чем на один шаг",
    source: "МС"
},
{
    name: "Бой вслепую",
    descr: "You are skilled at attacking opponents you can\’t clearly see.\nBenefit: In melee, every time you miss because of concealment, you can reroll your miss chance percentile roll one time to see if you actually hit.\nYou aren\’t flat-footed against melee attacks from creatures you can\’t see, and you can withdraw from creatures you can\’t perceive. You don\’t need to attempt Acrobatics checks to move at full speed while blinded.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая, Черта дрона",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Бойня",
    descr: "Преимущества: В качестве основного действия вы можете один раз атаковать противника в зоне досягаемости. Если вы попадаете, то наносите обычный урон и можете совершить дополнительную атаку в ближнем бою (с полным БМА) по противнику, стоящему на соседней клетке с первым и также находящемуся в вашей зоне досягаемости. Вы можете таким образом предпринять только одну дополнительную атаку в раунд. Применив эту черту, вы получаете -2 к КБ до начала вашего хода.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая, Черта дрона",
    category: null,
    requirement: "СИЛ 13, БМА +1",
    source: "ОКП"
},
{
    name: "Бойня+",
    descr: "Вы можете одним махом поразить несколько врагов вокруг себя.\nПреимущества: когда при использовании черты Бойня вы успешно атакуете второго противника, вы можете потратить 1 ПР, чтобы продолжать атаковать противников, стоящих на соседних клетках с предыдущими и находящихся в вашей зоне досягаемости. Следующего противника можно атаковать только в случае, если вы попали по предыдущему. При этом нельзя атаковать каждого противника больше одного раза в ходе этого действия.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая, Черта дрона",
    category: null,
    requirement: "СИЛ 13, БМА +4, Бойня",
    source: "ОКП"
},
{
    name: "Болтун",
    descr: "You can baffle a foe with chatter to disguise the start of battle.\nBenefit: You can distract a creature with a confusing barrage of words, causing it to be surprised at the beginning of combat. You can use this ability only on a creature you are able to converse with (it must be able to see or hear you and understand your words) prior to the beginning of combat, and you must continue to converse with it until combat begins. You can\’t use this ability if you are the one to instigate combat or if you are unaware at the start of combat.\nWhen the GM declares that combat has begun, but before initiative is rolled, you can spend 1 Resolve Point to attempt a Bluff check against a single creature that this ability can affect. The DC is equal to 15 + the target\’s total Perception skill bonus, or 20 + 1-1/2 × the target\’s CR, whichever is higher. If your check is successful, the target creature is considered unaware at the start of combat, allowing other creatures (including yourself) to act in a surprise round. Once you have attempted to use this ability on a creature, whether or not you succeed, it is immune to this ability for 24 hours.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "Блеф (5 пунктов)",
    source: "ОКП"
},
{
    name: "Быстрое выхватывание",
    descr: "Вы умеете быстро выхватывать оружие.\nПреимущества: выхватывания оружия для вас – быстрое действие. Когда вы совершаете действие атаки или полной атаки метательным оружием, выхватывание оружия считается частью атаки. В качестве сопутствующего действия вы можете выхватить спрятанное оружие.\nБез черты: выхватывание оружия является сопутствующим действием или (если у вас БМА +1 или выше) его частью. Выхватить спрятанное оружие – основное действие.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: "БМА +1",
    source: "ОКП"
},
{
    name: "Быстроногий",
    descr: "You are faster than most.\nBenefit: While you are wearing light or no armor, your land speed increases by 10 feet. When you are encumbered, your land speed instead increases by only 5 feet. When you are overburdened, your speed is reduced to 10 feet.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Великая сценическая магия",
    descr: "You wield illusions that misdirect, deceive, or entertain an audience.\nПреимущество: Select one of the following 2nd-level spells: holographic image, invisibility, or mirror image. You can cast this spell once per day as a spell-like ability, using your character level as your caster level. The key ability score for this spell is Charisma. If you select holographic image with this feat and you have already selected holographic image with the Stage Magic feat, you can replace the spell selected with Stage Magic with another spell listed in the Stage Magic feat. ",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "ХАР 15, Малая сценическая магия, Сценическая магия, уровень персонажа 7",
    source: "МС"
},
{
    name: "Великая экстрасенсорная сила",
    descr: "You have a significant natural psychic ability.\nBenefit: Select one of the following 2nd-level spells: augury or status. You can cast this spell once per day as a spell-like ability, using your character level as your caster level.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "ХАР 15, Малая экстрасенсорная сила, Экстрасенсорная сила, уровень персонажа 7",
    source: "ОКП"
},
{
    name: "Вёрткий стрелок",
    descr: "You leave fewer openings when making a ranged attack.\nBenefit: You gain a +3 bonus to your Armor Class against attacks of opportunity you provoke by making a ranged attack.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая, Черта дрона",
    category: null,
    requirement: "ЛВК 15, БМА +6",
    source: "ОКП"
},
{
    name: "Взаимодополняющие навыки",
    descr: "You understand how two skills work well together.\nBenefit: Choose two skills. These skills become class skills for you. If one or both were already class skills, you gain a +2 insight bonus to those skill checks instead.\nSpecial: You can take this feat multiple times. Its effects don\’t stack. Each time you take it, it applies to two different skills.",
    lvl: null,
    type: "Черта",
    subtype: "Черта дрона",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Внушительная стойкость",
    descr: "У вас повышенная сопротивляемость ядам, болезням и иным недомоганиям.\nПреимущества: вы получаете +2 к испытаниям Стойкости.",
    lvl: null,
    type: "Черта",
    subtype: "Черта дрона",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Внушительная стойкость+",
    descr: "You are more resistant to diseases, poisons, and dangers.\nBenefit: You can spend 1 RP to reroll a failed Fortitude save",
    lvl: null,
    type: "Черта",
    subtype: "Черта дрона",
    category: null,
    requirement: "Внушительная стойкость, уровень персонажа 5",
    source: "ОКП"
},
{
    name: "Волшебный удар",
    descr: "Your magical power flows into your weapons.\nBenefit: Your melee and ranged attacks count as magic for the purposes of bypassing damage reduction and other situations, such as attacking incorporeal creatures.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: "Способность творить заклинания",
    source: "ОКП"
},
{
    name: "Выдёргивание чеки",
    descr: "You can activate a foe\’s grenade.\nBenefit: When you make a successful disarm combat maneuver against a foe that you know has grenades, rather than disarming the foe of a weapon, you can activate one grenade in the foe\’s possession. You can activate only a grenade that is ready to be drawn and thrown (not, for example, a grenade stowed away within an equipment pack). The grenade explodes at the end of your current turn, unless it has a delayed fuse that causes it to go off 1 round or more after it is activated.\nThe foe takes a –2 penalty to the saving throw against this grenade, and the grenade\’s explosion has half its normal area.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: "Боевой манёвр+ (разоружение)",
    source: "ОКП"
},
{
    name: "Выпад",
    descr: "Вы умеете дотягиваться до противников за пределами вашей зоны досягаемости.\nПреимущества: вы можете увеличить зону досягаемости своих атак в ближнем бою на 5 футов до конца своего хода, получив штраф -2 к КБ до начала своего следующего хода. Вы должны объявить, что применяте эту способность, до того, как примените любую атаку.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая, Черта дрона",
    category: null,
    requirement: "БМА +6",
    source: "ОКП"
},
{
    name: "Выстрел на бегу",
    descr: "You can move, make a ranged attack, and move again before your foes can react.\nBenefit: As a full action, you can move up to your speed and make a single ranged attack at any point during your movement. If you have the trick attack class feature, you can take your movement from trick attack at any time during a trick attack with a ranged weapon (instead of only before).\nNormal: You can move only before or after making a ranged attack, not both.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая, Черта дрона",
    category: null,
    requirement: "ЛВК 15, БМА +4, Подвижность",
    source: "ОКП"
},
{
    name: "Дальний выстрел",
    descr: "You remain accurate at longer ranges.\nBenefit: You take only a –1 penalty per full range increment between you and your target when using a ranged weapon.\nNormal: You take a –2 penalty per full range increment between you and your target.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая, Черта дрона",
    category: null,
    requirement: "БМА +1",
    source: "ОКП"
},
{
    name: "Двужильный",
    descr: "You have enhanced physical resilience, and harsh conditions or long exertions don\’t easily tire you.\nBenefit: For every character level you have (and whenever you gain a new level), you gain 1 Stamina Point. In addition, you gain a +4 bonus to Constitution checks to continue running, to avoid damage from a forced march, to hold your breath, and to avoid damage from starvation or thirst. You also gain a +4 bonus to Fortitude saving throws to avoid taking damage from hot or cold environments, to withstand the harmful effects of thick and thin atmospheres, to avoid choking when breathing in heavy smoke, and to avoid fatigue caused by sleep deprivation.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Железная решимость",
    descr: "Your resolve is stronger than most.\nBenefit: You have 2 additional Resolve Points in your pool.",
    lvl: null,
    type: "Черта",
    subtype: "Черта дрона",
    category: null,
    requirement: "Уровень персонажа 5",
    source: "ОКП"
},
{
    name: "Живой щит",
    descr: "You put yourself in danger\’s path to save your allies.\nBenefit: When an attack hits an ally whose Armor Class you have increased with the Bodyguard feat, you can intercept the attack. You take all damage and associated effects from that attack, and once you intercept the attack, no other ability can redirect it. This ability takes no action, but you can intercept only one attack in this way each round.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: "Телохранитель",
    source: "ОКП"
},
{
    name: "Завуалированная угроза",
    descr: "You can be so subtle not even the people you threaten are entirely sure you threatened them.\nBenefit: When you successfully use the Intimidate skill to bully a creature, after the duration of its helpful attitude ends, its attitude toward you becomes indifferent rather than hostile.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "ХАР 15, Запугивание (1 пункт)",
    source: "ОКП"
},
{
    name: "Задержание",
    descr: "You can stop foes that try to move past you.\nBenefit: When a foe provokes an attack of opportunity by leaving a square you threaten, you can attempt a melee attack as a reaction against that foe\’s Kinetic Armor Class + 8. If you\’re successful, the enemy cannot take any further movement for the rest of its turn. The enemy can still take the rest of its actions, but cannot leave that square.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Задержание+",
    descr: "You are particularly skilled at stopping foes in their tracks.\nBenefit: You gain a +4 bonus to your melee attack roll for Stand Still.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: "Задержание",
    source: "ОКП"
},
{
    name: "Заклинатель-эксперт",
    descr: "Through careful study, you have developed methods to make your spells harder to resist.\nBenefit: The DC of spells you cast increases by 1. At 11th level, the DC of your spells instead increases by 2, and at 17th level, the DC of spells you cast instead increases by 3. This bonus does not apply to spell-like abilities.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "Способность творить заклинания, уровень персонажа 3.",
    source: "ОКП"
},
{
    name: "Касатский боевой танец",
    descr: "You are a student of the battle dances of kasathan legends. You weave in and out of a fray with grace, moving your arms and body in a flowing motion that confounds your foes.\nПреимущество: When you take the withdraw action and have at least two hands free, none of the squares you move through are considered threatened by any opponent whose location you are aware of (see The Four States of Awareness on page 261 of the Starfinder Core Rulebook).\nNormal: When you withdraw, the square you start out in is not considered threatened by opponents you can see, but squares you subsequently move through may be.\nSpecial: A solarian with a solar weapon treats the hand holding the solar weapon as being free for purposes of using this feat.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: "ЛВК 13, Подвижность или обманная атака",
    source: "МС"
},
{
    name: "Крепкий орешек",
    descr: "You are especially hard to kill. Your wounds quickly stabilize when you\’re grievously wounded.\nBenefit: When you are dying, you can spend the required Resolve Points to stabilize and 1 Resolve Point to stay in the fight (regaining 1 Hit Point) in the same round.\nNormal: You must use Resolve Points to stabilize and to stay in the fight in separate rounds.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Крупица дарованной силы",
    descr: "You gain a hint of mystic power.\nBenefit: Choose two 0-level mystic spells and one 1st-level mystic spell. You can cast the 0-level spells at will and the 1st-level spell once per day for every 3 character levels you have. For these spells, your caster level is equal to your character level and the key ability score is Wisdom. If you later gain levels in mystic, you lose the benefits of this feat and can replace it with either Spell Focus or Spell Penetration.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "МДР 15, уровень персонажа 5, отсутствие уровней в классе мистика.",
    source: "ОКП"
},
{
    name: "Лёгкая поступь",
    descr: "You can move across a single obstacle with ease.\nBenefit: You can move through up to 20 feet of difficult terrain each round as if it were normal terrain. This feat allows you to take a guarded step into difficult terrain.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая, Черта дрона",
    category: null,
    requirement: "ЛВК 15",
    source: "ОКП"
},
{
    name: "Лихой пилот",
    descr: "You can get the most out of flying technology.\nBenefit: When you\’re using a device to fly (including magic items, but not spells or natural flight), your fly speed increases by 10 feet. If you are operating a flying vehicle, its fly speed increases by 10 (though this has no impact on its full speed or overland movement speed). When you are in the pilot role of starship combat, your starship\’s speed increases by 1.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "Пилотирование (5 пунктов)",
    source: "ОКП"
},
{
    name: "Магоборец",
    descr: "Ваши тело и разум устойчивы к магии.\nПреимущества: вы получаете бонус +2 (интуитивный) к испытаниям против заклинаний и псевдозаклинаний. Если впоследствии вы получаете возможность применять заклинания или псевдозаклинания, вы лишаетесь указанных преимуществ, но сможете заменить эту черту либо Внушительной стойкостью, либо Молниеносной реакцией, либо Стальной волей, либо улучшенной версией любой из этих черт (например, Стальная воля+), если вы соответствуете её требованиям.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "Отсутствие возможности творить заклинания или псевдозаклинания",
    source: "ОКП"
},
{
    name: "Малая сценическая магия",
    descr: "Entertainers and icons from entertainment houses such as the Hamisfore Theatorium on Absalom Station to Eox\’s Halls of the Living understand the importance of showmanship. From a famous mentor or through your own inventiveness, you have developed a minor magical trick to entertain or distract.\nПреимущество: Select one of the following 0-level spells: dancing lights, ghost sound, or token spell. You can cast this spell three times per day as a spell-like ability, using your character level as your caster level. The key ability score for this spell is Charisma.\nSpecial: You can select this feat more than once. Each time you do, you must choose a different spell from the list.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "ХАР 11",
    source: "МС"
},
{
    name: "Малая экстрасенсорная сила",
    descr: "You have a minor natural psychic ability.\nBenefit: Select one of the following 0-level spells: dancing lights, psychokinetic hand, telekinetic projectile, or telepathic message. You can cast this spell three times per day as a spell-like ability, using your character level as your caster level.\nSpecial: You can select this feat more than once. Each time you do, you must choose a different spell from the list.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "ХАР 11",
    source: "ОКП"
},
{
    name: "Мастер боевых искусств",
    descr: "You have trained to make your unarmed strikes lethal and strike with kicks, head-butts, and similar attacks.\nBenefit: Your unarmed strike damage increases to 1d6 at 4th level, 2d6 at 8th level, 3d6 at 12th level, 5d6 at 15th level, and 7d6 at 20th level. Your unarmed strikes don\’t count as archaic and can deal lethal damage. You threaten squares within your natural reach with your unarmed strikes even when you do not have a hand free for an unarmed strike. If you are immobilized, entangled, or unable to use both legs (or whatever appendages you have in place of legs, where appropriate), you lose the ability to make unarmed strikes without your hands. When making an unarmed strike without your hands, you can\’t use such attacks for combat maneuvers or similar abilities—only to deal damage.\nNormal: You don\’t threaten any squares with unarmed strikes, and you must have a hand free to make an unarmed strike.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Мастер-ремесленник",
    descr: "You can construct things more quickly than most.\nBenefit: Choose one skill that allows you to craft items in which you have the required number of ranks. When you craft items using that skill, it takes half the normal time.\nSpecial: You can take Master Crafter multiple times. Each time you do, it applies to a different skill that meets the prerequisite number of ranks.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "Биологические науки, инженерное дело, Компьютеры, Мистицизм, соответствующая профессия или Физические науки (5 пунктов)",
    source: "ОКП"
},
{
    name: "Многорукий боец",
    descr: "You know how to fight with several lighter weapons at once and how to take advantage of your multiple attacks.\nBenefit: When you make a full attack with two or more small arms or with two or more operative melee weapons, reduce the penalty for making a full attack by 1.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая, Черта дрона",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Молниеносная реакция",
    descr: "You have faster reflexes than normal.\nBenefit: You gain a +2 bonus to Reflex saving throws.",
    lvl: null,
    type: "Черта",
    subtype: "Черта дрона",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Молниеносная реакция+",
    descr: "You have a knack for avoiding the dangers all around you.\nBenefit: You can spend 1 RP to reroll a failed Reflex save",
    lvl: null,
    type: "Черта",
    subtype: "Черта дрона",
    category: null,
    requirement: "Молниеносная реакция, уровень персонажа 5",
    source: "ОКП"
},
{
    name: "Неваляшка",
    descr: "You can stand up from prone in a hurry.\nBenefit: You can stand from prone as a swift action, rather than a move action.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая, Черта дрона",
    category: null,
    requirement: "Акробатика (1 пункт)",
    source: "ОКП"
},
{
    name: "Ношение лёгкой брони",
    descr: "You know how to use light armor.\nBenefit: You gain proficiency with light armor.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Ношение силовой брони",
    descr: "You know how to use powered armor.\nBenefit: You gain proficiency with powered armor",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: "СИЛ 13, БМА +5, Ношение лёгкой брони, ношение тяжёлой брони",
    source: "ОКП"
},
{
    name: "Ношение тяжёлой брони",
    descr: "You know how to use heavy armor.\nBenefit: You gain proficiency with heavy armor",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: "СИЛ 13, Ношение лёгкой брони",
    source: "ОКП"
},
{
    name: "Обращение с высокотехнологичным оружием ближнего боя",
    descr: "You know how to use advanced melee weapons.\nBenefit: You gain proficiency with advanced melee weapons.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: "Обращение с простым оружием ближнего боя",
    source: "ОКП"
},
{
    name: "Обращение с гранатами",
    descr: "You know how to use grenades.\nBenefit: You gain proficiency in grenades.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Обращение с длинноствольным оружием",
    descr: "You know how to use longarms.\nBenefit: You gain proficiency with longarms.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: "Обращение с короткоствольным оружием",
    source: "ОКП"
},
{
    name: "Обращение с короткоствольным оружием",
    descr: "You know how to use small arms.\nBenefit: You gain proficiency in small arms.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Обращение с особым оружием",
    descr: "You know how to use a special weapon.\nBenefit: You gain proficiency with a single special weapon of your choice. If the special weapon you choose is a melee special weapon, you must have proficiency with basic melee weapons. If the special weapon you choose is a ranged weapon, you must have proficiency with small arms. If a set of special weapons are all different models of the same weapon, proficiency with one such weapon grants proficiency with all weapons in the set.\nSpecial: You can take this feat multiple times. Each time you do, select a different special weapon.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: "Обращение с короткоствольным оружием или Обращение с простым оружием ближнего боя (см. описание)",
    source: "ОКП"
},
{
    name: "Обращение с простым оружием ближнего боя",
    descr: "You know how to use basic melee weapons.\nBenefit: You gain proficiency with basic melee weapons.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Обращение с тяжёлым оружием",
    descr: "You know how to use heavy weapons.\nBenefit: You gain proficiency with heavy weapons.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: "СИЛ 13, Обращение с длинноствольным оружием, обращение с короткоствольным оружием.",
    source: "ОКП"
},
{
    name: "Обращение со снайперским оружием",
    descr: "You know how to use sniper weapons.\nBenefit: You gain proficiency in sniper weapons.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Обстрел",
    descr: "You use your numerous limbs to lay down a hail of fire.\nBenefit: As a full attack when you are wielding four or more identical small arms, you can fire them all simultaneously to duplicate the effects of an automatic weapon. You use all of the ammunition in all the small arms used, and you treat this as an attack in automatic mode. Add all the ammunition expended from all of your small arms when determining the maximum number of creatures you can hit.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: "БМА +1, четыре и более руки",
    source: "ОКП"
},
{
    name: "Огонь по своим",
    descr: "You can trick foes into firing at an unintended target.\nBenefit: As a reaction when an attacker makes a ranged attack against you and misses, you can attempt a Bluff check to redirect the attack toward a different target. The new target must be adjacent to you and within line of sight and line of effect of the original attacker. The DC for this check is equal to either 10 + the attacker\’s total Sense Motive skill bonus, or 15 + 1-1/2 × the attacker\’s CR, whichever is greater. You can\’t take 10 on this check. If you succeed, the original attacker rerolls the attack roll with the same bonuses against the appropriate Armor Class of the new target.\nOnce a creature has observed you use this feat, even if that creature is neither the attacker nor the new target, you can\’t use this feat to attempt to redirect attacks from that creature for 24 hours.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: "Блеф (5 пунктов)",
    source: "ОКП"
},
{
    name: "Опытный медик",
    descr: "You are an expert at medical science and caring for the ill.\nBenefit: You can use the Medicine skill in conjunction with a medpatch or sprayflesh to treat deadly wounds as a full action (DC 25). If you have an ability that enables you to treat deadly wounds more often but with a longer time frame (such as the envoy\’s surgeon expertise talent), you cannot use this feat to use that ability more quickly. When used in this way, the medpatch or sprayflesh does not perform any of its normal functions. You can also use the Medicine skill to provide long-term care with just a medkit.\nNormal: It takes 1 minute to treat deadly wounds, and longterm care requires a medical bay or medical lab.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "Биологические науки (1 пункт), Медицина (1 пункт), Физические науки (1 пункт)",
    source: "ОКП"
},
{
    name: "Ответный удар",
    descr: "You can strike at foes that attack you using their superior reach by targeting their limbs or weapons as they come at you.\nBenefit: You can ready an action to make a melee attack against a foe that attacks you with a melee weapon, even if that foe isn\’t within your reach.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая, Черта дрона",
    category: null,
    requirement: "БМА +1",
    source: "ОКП"
},
{
    name: "Отклонение снарядов",
    descr: "You can use your melee weapon to deflect attacks.\nBenefit: When you would be hit by a ranged attack from a weapon or spell that deals energy or kinetic damage, you can spend 1 Resolve Point as a reaction to make an attack roll with a nonarchaic melee weapon that deals the same general category of damage (energy or kinetic) with a +5 bonus. If your attack roll is higher than the attack roll that hit you, you deflect the attack with your weapon, and it misses. This doesn\’t work against area attacks, even against area attacks that have attack rolls like blast weapons, and you can\’t use this reaction if you aren\’t capable of making an attack with an appropriate weapon.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: "БМА +8",
    source: "ОКП"
},
{
    name: "Отражение снарядов",
    descr: "You can use your melee weapon to redirect attacks.\nBenefit: When you successfully deflect an attack with the Deflect Projectiles feat, you can spend 1 additional Resolve Point to redirect the attack at a target within 60 feet to which you have line of effect. Make a ranged attack at a –4 penalty against the appropriate Armor Class of the new target. If your attack succeeds, the target is damaged as if it had been the target of the original attack.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: "БМА +16, Отклонение снарядов",
    source: "ОКП"
},
{
    name: "Повышенная устойчивость",
    descr: "Ваше тело менее восприимчиво к одному из типов урона.\nПреимущества: выберите либо один из типов кинетического урона (дробящий, колющий или режущий), либо один из типов энергетического (звук, кислота, огонь, холод или электричество). Выбрав кинетический урон, вы игнорируете урон этого типа в количестве, равном вашему БМА (это не суммируется с СУ). При выборе одного из типов энергии вы получаете устойчивость к этому типу энергии, равную вашему БМА.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "БМА+4",
    source: "ОКП"
},
{
    name: "Подавляющий огонь",
    descr: "You can use automatic weapons to create a cone of covering fire or harrying fire.\nBenefit: As a full action, you can use a ranged weapon with the automatic weapon property to provide covering fire or harrying fire in a cone with a range equal to half the weapon\’s range increment. You must expend 10 charges or rounds of ammunition to use this ability. Decide if you are providing covering fire or harrying fire. Make a single ranged attack roll with a +4 bonus, and compare it to the AC of all creatures in the area. Any creature with an AC equal to or less than your attack roll is affected by the selected effect. If you select covering fire, choose a single ally that gains the benefit of the covering fire bonus to its AC.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая, Черта дрона",
    category: null,
    requirement: "БМА +1, Обращение с тяжёлым оружием",
    source: "ОКП"
},
{
    name: "Подвижное прикрытие",
    descr: "You can use covering fire to make it easier for your ally to move.\nBenefit: Instead of the usual benefits of covering fire, you can use covering fire to grant an ally a +4 bonus to her next Acrobatics check to tumble before the end of your next turn.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: "БМА +1",
    source: "ОКП"
},
{
    name: "Подвижность",
    descr: "Вы легко двигаетесь сквозь гущу сражения.\nПреимущества: вы получаете бонус +4 к КБ против внеочередных атак, которые провоцируете, когда покидаете контролируемую противником клетку.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая, Черта дрона",
    category: null,
    requirement: "ЛВК 13",
    source: "ОКП"
},
{
    name: "Подножка",
    descr: "Когда вас сбивают с ног, вы можете уронить противника вместе с собой.\nПреимущества: когда противник успешно применяет боевой манёвр, чтобы сбить вас с ног, вы в качестве ответного действия можете попытаться боевым манёвром сбить с ног противника рядом с вами.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Преграда",
    descr: "Вы можете догнать противника, пытающегося отойти от вас.\nПреимущества: когда противник на соседней клетке пытается сделать осторожный шаг рочь от вас, вы можете тут же в качестве ответного действия сделать осторожный шаг, если при этом снова окажетесь рядом с этим противником.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: "БМА +1.",
    source: "ОКП"
},
{
    name: "Преодолевающая магия",
    descr: "Your spells break through spell resistance more easily than those of other spellcasters.\nBenefit: You gain a +2 bonus to caster level checks to overcome a creature\’s spell resistance",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Преодолевающая магия+",
    descr: "Your spells break through spell resistance much more easily than most.\nBenefit: You gain a +2 bonus to caster level checks to overcome a creature\’s spell resistance. This bonus stacks with the bonus from Spell Penetration.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "Преодолевающая магия",
    source: "ОКП"
},
{
    name: "Привлечение внимания",
    descr: "You can draw attention to yourself, allowing your allies to slip away.\nBenefit: When you successfully use Bluff to create a distraction, you can allow an ally to attempt a Stealth check to hide (instead of attempting to hide yourself). You can attempt to allow multiple allies to use Stealth to hide, but you take a –5 penalty to your Bluff check for every ally after the first, and on a failed check no ally can attempt to hide.\nNormal: Using Bluff to create a distraction allows only you to attempt a Stealth check to hide.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Привычное оружие",
    descr: "You know how to get the full damage out of a weapon type your class doesn\’t normally use.\nBenefit: Choose one weapon type (small arms, longarms, heavy weapons, etc.). You gain specialization in that weapon type, which means you add your character level to damage with the selected weapon type, or half your character level for small arms or operative melee weapons. You can never have specialization in grenades.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая, Черта дрона",
    category: null,
    requirement: "Уровень персонажа 3, Обращение с выбранным типом оружия",
    source: "ОКП"
},
{
    name: "Провоцирование",
    descr: "You know how to make foes extremely angry with you.\nBenefit: As a standard action, you can antagonize a foe that can see and hear you by attempting a Diplomacy or Intimidate check (DC = 10 + your opponent\’s total Sense Motive skill bonus, or 15 + 1-1/2 × the opponent\’s CR, whichever is higher). If you succeed, the foe is off-target and takes a –2 penalty to all skill checks for 1 round plus 1 additional round for every 5 by which your result exceeds the DC, or until it makes an attack against you, forces you to attempt a saving throw, or damages you (whichever comes first). Once you have attempted to antagonize a foe, that foe is immune to this ability for 24 hours. This is a language-dependent ability.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "Дипломатия (5 пунктов), Запугивание (5 пунктов)",
    source: "ОКП"
},
{
    name: "Пронзающая атака",
    descr: "You know how to angle your attacks so that you penetrate your opponent\’s defenses.\nBenefit: Reduce your target\’s energy resistances and damage reduction by 5 against your weapon attacks.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая, Черта дрона",
    category: null,
    requirement: "БМА +12",
    source: "ОКП"
},
{
    name: "Проникающее заклинание",
    descr: "You know how to cast spells so that they penetrate your opponent\’s defenses.\nBenefit: Reduce your target\’s energy resistances and damage reduction by 5 against your spell damage.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "Способность творить заклинания 4 круга",
    source: "ОКП"
},
{
    name: "Прощальный выстрел",
    descr: "You are an expert skirmisher and are able to take a final shot as you retreat.\nBenefit: When using the withdraw action, you can make a single ranged attack at any point during your movement. If you have the trick attack class feature and are using an appropriate weapon, you can add your trick attack damage to the attack you make while withdrawing. Once you use this ability, you can\’t use it again until the next time you regain Stamina Points with a 10-minute rest.\nNormal: You can\’t attack when using the withdraw action.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: "ЛВК 15, БМА +6, Выстрел на бегу, Подвижность",
    source: "ОКП"
},
{
    name: "Прыжок в укрытие",
    descr: "Преимущества: когда вы проходите испытание Реакции против атаки или эффекта, воздействующих на область, вы можете распластаться в соседней клетке и совершить двойной бросок для испытания (применяется лучший результат). Если вашу клетку контролировал противник, это перемещение провоцирует внеочередные атаки по обычным правилам.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: "Базовый бонус реакции +2",
    source: "ОКП"
},
{
    name: "Реактивный",
    descr: "You are swift of foot and can make enormous leaps.\nBenefit: When running, you move six times your land speed. Whenever you jump, double the height and distance you can jump. While running, you don\’t gain the flat-footed condition.\nNormal: You move four times your land speed and gain the flat-footed condition while running.",
    lvl: null,
    type: "Черта",
    subtype: "Черта дрона",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Слаженный огонь",
    descr: "Ловким манёвром вы способны подвести противника прямиком под огонь ваших союзников.\nПреимущества: когда вы вооружены оружием ближнего боя и контролируете клетку противника, дистанционные атаки всех союзников по этому противнику получают бонус +1 к проверкам попадания, если вы при этом не даёте врагу укрытия, находясь на их линии видимости.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: "БМА +1",
    source: "ОКП"
},
{
    name: "Смещение",
    descr: "You can reposition yourself after a foe\’s missed swing.\nBenefit: Whenever an opponent misses you with a melee attack, you can take a guarded step as a reaction, as long as you remain within that opponent\’s threatened area. If you take this step, you can\’t take a guarded step during your next turn. If you take an action to move during your next turn, subtract 5 feet from your total movement.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: "ЛВК 15, Подвижность или классовая особенность обманная атака",
    source: "ОКП"
},
{
    name: "Смещение+",
    descr: "You keep your mobility when sidestepping foes\’ melee attacks.\nBenefit: After sidestepping an opponent\’s missed attack using the Sidestep feat, you can still take a guarded step during your next turn, or you can move up to your full speed if you take an action to move during your next turn.\nNormal: If you use the Sidestep feat, you can\’t take a guarded step during your next turn and your movement is reduced by 5 feet during your next turn.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: "ЛВК 17, Подвижность или классовая особенность обманная атака, Смещение",
    source: "ОКП"
},
{
    name: "Сосредоточенный заклинатель",
    descr: "You have learned to casually ignore wounds that would interfere with a lesser spellcaster\’s concentration.\nПреимущество: If your spell would fail as a result of you taking damage either from a successful attack or from an effect that you failed a saving throw against during the casting of the spell, as a reaction you can spend a Resolve Point to prevent the spell from failing. You suffer the effects of the attack as normal, but as long as you remain able to complete the spellcasting after the attack, you successfully cast the spell.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: "Боевая магия, способность творить заклинания 4 круга",
    source: "МС"
},
{
    name: "Сотворение на бегу",
    descr: "You can move, cast a spell, and move again before foes react.\nBenefit: As a full action, you can move up to your speed and cast a single spell with a casting time of one standard action or less at any point during your movement. If you have a supernatural ability that can be activated as a standard action or less, you can instead use that ability at any point during your movement.\nNormal: You can move only before or after casting a spell, not both.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "Ключевая характеристика 15, ЛВК 15, Подвижность, УЗ 4",
    source: "ОКП"
},
{
    name: "Стальная воля",
    descr: "You are more resistant to mental effects.\nBenefit: You gain a +2 bonus to Will saving throws.",
    lvl: null,
    type: "Черта",
    subtype: "Черта дрона",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Стальная воля+",
    descr: "Your clarity of thought allows you to resist mental attacks.\nBenefit: You can spend 1 RP to reroll a failed Will save.",
    lvl: null,
    type: "Черта",
    subtype: "Черта дрона",
    category: null,
    requirement: "Стальная воля, уровень персонажа 5",
    source: "ОКП"
},
{
    name: "Сценическая магия",
    descr: "You have learned new magical tricks to deceive or entertain.\nПреимущество: Select one of the following 1st-level spells: disguise self, holographic image, or unseen servant. You can cast this spell once per day as a spell-like ability, using your character level as your caster level. The key ability score for this spell is Charisma.\nNormal: You can select this feat more than once. Each time you do, you must choose a different spell from the list.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "ХАР 13, Малая сценическая магия, уровень персонажа 4",
    source: "МС"
},
{
    name: "Телохранитель",
    descr: "You can attempt to ward off attacks that target nearby allies.\nBenefit: As a reaction when an adjacent ally is attacked, you can grant that ally a +2 circumstance bonus to its AC against that attack. If you do so, you take a –2 penalty to your own Armor Class until the beginning of your next turn.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Техномант-любитель",
    descr: "You dabble with coding in the language of magic.\nBenefit: Choose two 0-level technomancer spells and one 1st-level technomancer spell. You can cast the 0-level spells at will and the 1st-level spell once per day for every 3 character levels you have. For these spells, your caster level is equal to your character level and the key ability score is Intelligence. If you later gain levels in technomancer, you lose the benefits of this feat and can replace it with either Spell Focus or Spell Penetration.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "Интеллект 15, уровень персонажа 5, отсутствие уровней в классе техноманта",
    source: "ОКП"
},
{
    name: "Убийственная меткость",
    descr: "You can strike your enemies\’ weak points and deal more damage.\nBenefit: When you take the attack or full attack action with weapons (including a solarian\’s solar manifestation, but not spells or other special abilities of any kind), you can take a –2 penalty to your attack rolls. If you do, those attacks deal additional damage equal to half your base attack bonus (minimum 1).",
    lvl: null,
    type: "Черта",
    subtype: "Боевая, Черта дрона",
    category: null,
    requirement: "БМА +1",
    source: "ОКП"
},
{
    name: "Уверенное владение оружием",
    descr: "Вы углублённо изучили один из типов оружия и гораздо увереннее поражаете цель.\nПреимущества: выберите один из типов оружия (короткоствольное, длинноствольное, тяжёлое и так далее). Вы получаете +1 к атакам выбранным типом оружия. Если ваш БМА ниже значения вашего уровня персонажа (или количества уровней в классе вашего механика, если вы – дрон) на 3 и более, этот бонус увеличивается до +2.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая, Черта дрона",
    category: null,
    requirement: "Обращение с выбранным типом оружия.",
    source: "ОКП"
},
{
    name: "Удар вдогонку",
    descr: "When a foe tries to move away, you can follow and make an attack of opportunity.\nBenefit: When using the Step Up feat to follow an adjacent foe, you can move up to 10 feet. You can also either make an attack of opportunity against the foe, or wait to see if the foe provokes another attack of opportunity at any point before the end of its turn. Either way, this attack of opportunity does not count toward the number of actions you can usually take each round; it is part of the Step Up reaction.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: "ЛВК 13, БМА +6, Преграда",
    source: "ОКП"
},
{
    name: "Удар на проходе",
    descr: "Вы можете быстро подскочить к врагу, ударить и отбежать, прежде чем он отреагирует.\nПреимущества: в качестве действия полного хода вы можете переместиться и совершить одиночную атаку в ближнем бою или боевой манёвр, не провоцируя внеочередных атак от того, на кого нападаете. Вы способны двигаться и до, и после своей атаки, но до атаки обязаны пройти хотя бы 10 футов, а общее пройденное расстояние не должно превышать вашу скорость.\nВы не можете применять эту черту, чтобы атаковать противника, стоящего рядом с вами в начале вашего хода. Если вы обладаете классовой особенность обманная атака, то при использовании подходящего оружия ближнего боя вы можете перемещаться в любой момент во время её применения (а не только до атаки), не провоцируя веочередных атак своей цели.\nБез черты: вы можете двигаться исключительно либо до, либо после атаки.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая, Черта дрона",
    category: null,
    requirement: "ЛВК 15, БМА +4, Подвижность",
    source: "ОКП"
},
{
    name: "Улучшенная инициатива",
    descr: "Благодаря быстрым рефлексам вы действуете одним из первых.\nПреимущества: вы получаете +4 к проверкам инициативы.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Улучшенный критический удар",
    descr: "Attacks with your chosen weapon are harder to shake off.\nBenefit: When you score a critical hit with a weapon, increase the DC to resist that weapon\’s critical effect by 2.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая, Черта дрона",
    category: null,
    requirement: "БМА +8",
    source: "ОКП"
},
{
    name: "Умелый верхолаз",
    descr: "Вы лазаете не хуже пауков и обезьян.\nПреимущества: Вы получаете скорость лазания, равную вашей наземной скорости.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "Атлетика (5 пунктов)",
    source: "ОКП"
},
{
    name: "Умелый пловец",
    descr: "You can swim as well as a fish.\nBenefit: You gain a swim speed equal to your land speed.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "Атлетика (5 пунктов)",
    source: "ОКП"
},
{
    name: "Универсальное владение оружием",
    descr: "Your accuracy applies to all weapons with which you are proficient.\nBenefit: The benefits of Weapon Focus extend to all weapons with which you are proficient.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая, Черта дрона",
    category: null,
    requirement: "Уверенное владение оружием (любым)",
    source: "ОКП"
},
{
    name: "Универсальное привычное оружие",
    descr: "You know how to get full value out of weapon types your class doesn\’t normally use.\nBenefit: You gain specialization in all weapons with which you are proficient that can be selected with Weapon Specialization.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая, Черта дрона",
    category: null,
    requirement: "Привычное оружие, уровень персонажа 3",
    source: "ОКП"
},
{
    name: "Упредительный выстрел",
    descr: "Ваш выстрел приводит врага в смятение и открывает его для атаки вблизи.\nПреимущества: всякий раз, когда во время вашего первого хода в бою вы наносите противнику урон дистанционной атакой, вы получаете бонус +2 (ситуативный) к своей следующей атаке в ближайшем бою против этого врага, если она будет совершено до конца вашего следующего хода.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая, Черта дрона",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Урон нежити",
    descr: "You can use your healing channel to harm undead.\nBenefit: When you use your healing channel as a full action, you can expend a mystic spell slot of the highest level you can cast to also deal damage equal to the amount you heal to all undead foes in the area. The undead can attempt a Will save for half damage, at your usual connection power DC.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "Проведение исцеляющей энергии (дарованная сила), 1 уровень мистика",
    source: "ОКП"
},
{
    name: "Усиленная телепатия",
    descr: "You have expanded your latent telepathic powers.\nПреимущество: Increase the range of your limited telepathy by 30 feet.\nSpecial: If you are a phrenic adept or have the Major Psychic Power feat and you also have Extended Telepathy, you can try to communicate telepathically with creatures you don\’t share a common language with, as long as the creature understands one or more languages. This requires a full action to initiate and a successful Mysticism check (DC = 15 + 1-1/2 × the creature\’s CR). On a failed check, you can\’t try to communicate telepathically with that creature again for 24 hours.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "Особенность расы \’Ограниченная телепатия\’",
    source: "МС"
},
{
    name: "Финт+",
    descr: "You are skilled at fooling your opponents in combat.\nBenefit: You can use Bluff to feint in combat as a move action.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Финт++",
    descr: "You are skilled at fooling your opponents in combat.\nBenefit: Whenever you successfully feint in combat, the foe gains the flat-footed condition until the end of your next turn.",
    lvl: null,
    type: "Черта",
    subtype: "Боевая",
    category: null,
    requirement: "БМА +6, Финт+",
    source: "ОКП"
},
{
    name: "Шумный сбой",
    descr: "You can create sudden distractions with technological devices.\nBenefit: As a standard action, you can wirelessly introduce a fast-acting virus into nearby technological devices to briefly cause them to malfunction in loud, surprising ways. You can use this ability on one target creature per character level, no two of which can be more than 30 feet apart. Each target must either be carrying technological devices or be within sight and hearing of such devices. While the locations of such devices are up to the GM, most public spaces (aside from technologically underdeveloped areas) contain enough technology for this feat to function. Your glitch causes alarms to go off, automated devices to spin and flail, readouts to flash brightly, and so on. With a successful Computers check (DC = 15 + 1 per target + 1-1/2 × the CR of the highest-CR target), all targets are shaken for 1 round, plus 1 additional round for every 5 by which your result exceeds the DC.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "Запугивание (3 пункта), Компьютеры (3 пункта)",
    source: "ОКП"
},
{
    name: "Эксперт",
    descr: "You are particularly adept at a certain skill.\nBenefit: Choose a skill. You gain a +3 insight bonus to checks involving the chosen skill.\nSpecial: You can take this feat multiple times. Its effects don\’t stack. Each time you take this feat, it applies to a new skill.",
    lvl: null,
    type: "Черта",
    subtype: "Черта дрона",
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Экстрасенсорная сила",
    descr: "You have a natural psychic ability.\nBenefit: Select one of the following 1st-level spells: comprehend languages, detect thoughts, or mindlink. You can cast this spell once per day as a spell-like ability, using your character level as your caster level.\nSpecial: You can select this feat more than once. Each time you do, you must choose a different spell from the list.",
    lvl: null,
    type: "Черта",
    subtype: null,
    category: null,
    requirement: "ХАР 13, Малая экстрасенсорная сила, уровень персонажа 4",
    source: "ОКП"
},
{
    name: "Адаптация к космосу",
    descr: "Существа с этой способностью считаются недышащими и невосприимчивы к космическому излучению и негативному влиянию вакуума.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-09"
},
{
    name: "Аморфный",
    descr: "Тело существа пластично и не имеет чётко выраженной формы. Критические удары не наносят ему двойной урон, но критические эффекты работают как обычно.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Амфибия",
    descr: "The creature has the aquatic subtype or water breathing, but it can breathe air and survive on land.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Атака стаи",
    descr: "The creature automatically deals the listed damage to each creature whose space it occupies at the end of its turn with no attack roll needed. Swarm attacks aren\’t subject to a miss chance for concealment or cover.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Аура",
    descr: "Unless an aura says otherwise, a target is affected by an aura automatically with no action required on the creature\’s part, whenever the target is within the aura\’s listed range (either when the target enters the aura on its turn or when it begins its turn in the aura, whichever comes first). If the aura deals damage, it damages a target only the first time the target is in the aura each round, regardless of how many times within the round the target enters and leaves the aura. A creature can suppress its aura for 1 round as a move action unless noted otherwise.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ПС/СВ/ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Бестелесность",
    descr: "Бестелесное существо не имеет физического тела. Оно невосприимчиво ко всем немагическим кинетическим атакам и получает только половину урона от всех энергитических и магических кинетических атак. Силовые эффекты, а также бестелесные эффекты и существа наносят ему полный урон. Небестелесные заклинания и эффекты, не наносящие урона, срабатывают лишь в 50% случаев. Бестелесные существа невосприимчивы к критическим ударам.\nАтаки бестелесных существ всегда направлены против ЭКБ противника. такие существа не могут совершать боевые манёвры и какие-либо физические действия, которые переместили бы противника или его снаряжение, но и сами к подобным действиям невосприимчивы.\nБестелесное существо может заходить в твёрдые предметы и проходить сквозь них, но при этом должно оставаться рядом с их внешней стороной и поэтому не может пройти через твёрдый предмет, занимающий большее пространство, чем само существо. Находясь внутри твёрдого предмета, бестелесное существоосведомлено о присутствии сущесьв и предметов в соседних с собой клетках, но противники считаются для него невидимыми (вероятность промаха 50%). Находясь внутри предмета, бестелесное существо имеет полное укрытие, но когда оно атакует находящегося снаружи противника, то укрытие считается обычным. Бестелесное существо не может пройти сквозь силовой эффект. Находясь в воде, вакууме и невесомости, бестелесные существа перемещаются и действуют с той же лёгкостью, что и в воздухе. они не могут упасть и получить урон от падения. У них нет веса, поэтому ловушки, реагирующие только на вес, на них не срабатывают.\nБестелесное существо перемещается абсолютно бесшумно, его нельзя услышать, пройдя проверку Внимания, если оно само этого не захочет. Такие существа прекрасно чувствуют направление и могут перемещаться на полной скорости даже в условиях отсутствия видимости. Любые пособы восприятия (включая слепозрение или слепое чутьё), опирающиеся на запах, звук или касание, неэффективны при обнаружении бестелесных существ.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Быстрое исцеление",
    descr: "Существо с этой способностью восстанавливает указанное количество ПЗ в начале своего хода. Если не указано обратное, существо не может превысить максимум своих ПЗ. Выстрое исцеление не восстанавливает ПЗ, потерянные от удушья, голода и жажды, и не позволяет заного отращивать отсутствующие части тела или приращивать их назад (если не указано обратное). быстрое исцеление работает, пока существо не умрёт, после чего эффекты быстрого исцеления медленно прекращаются.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Взгляд",
    descr: "Opponents that look at a creature with a gaze ability are in danger of being charmed, paralyzed, turned to stone, or subjected to another negative effect. Each opponent within the gaze\’s listed range must attempt a saving throw (usually Fortitude or Will) at the beginning of its turn. On a successful save, the effect is negated. An opponent can give itself an advantage against this ability in one of two ways.\nLooking Obliquely: An opponent that avoids looking directly at the creature\’s gaze (either by following the creature\’s shadow or by tracking it in a reflective surface) or that looks at the creature through a camera or heads-up display gains a +4 circumstance bonus to the saving throw. However, the creature with the gaze ability gains concealment against that opponent.\nBlocking Its Vision: By completely blocking or covering its own visual sensors, an opponent doesn\’t need to attempt a save against the gaze. However, the creature with the gaze ability gains total concealment against that opponent.\nGaze abilities can affect ethereal opponents but not opponents without visual sensors. A creature is immune to the gaze abilities of others of its kind unless otherwise noted. Allies of a creature with a gaze ability can still be affected, but they\’re always considered to be looking obliquely at the creature. The creature can also veil its eyes, thus negating its gaze ability.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Вихрь",
    descr: "A vortex ability works identically to the whirlwind ability, except the creature gains a swim speed instead of a fly speed, it can form only in a liquid (such as in water), it cannot leave a liquid medium, and it always blocks all vision within it and line of sight past it. In addition, carried creatures must have a swim speed in order to attempt a Reflex save to escape.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "СВ/ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Водоворот",
    descr: "The creature can transform into a whirlwind as a standard action. Unless otherwise specified, the creature can remain in whirlwind form for a number of rounds equal to half its CR. If the creature has a fly speed, it retains that in its whirlwind form. If it does not have a fly speed, it gains an extraordinary fly speed (with average maneuverability) equal to its base speed. A creature in whirlwind form can move freely into and through other creatures\’ spaces, and it does not provoke attacks of opportunity as a result of its movement.\nThe base of a creature in whirlwind form occupies a 5-foot square. The whirlwind is twice as wide at its top as its base and has a height equal to four times the width of its base; this doesn\’t change the size category of the creature. If a creature is Large or larger, it can vary the size of its whirlwind form up to a maximum of a base equal to its normal space as a swift or move action. A creature in whirlwind form does not threaten any spaces around it, and it cannot make its normal attacks.\nIf a creature in whirlwind form enters the space of another creature, that creature must succeed at a Fortitude save with the listed DC or take the whirlwind\’s listed damage. If the whirlwind covers all of the creature\’s space, the creature must also succeed at a Reflex save or be picked up by the whirlwind and carried along with it. A carried creature is flat.footed, grappled, and off-target, and it automatically takes the whirlwindfs damage at the beginning of its turn. If the carried creature can fly, it can attempt a Reflex save as a move action, escaping on a successful save. If a carried creature does not escape, it can attempt a Fortitude save; if it succeeds, it can take any remaining actions it has on its turn (other than movement). On a failed save, the carried creature is unable to act until its next turn or until the whirlwind releases it.\nA creature in whirlwind form can carry up to two creatures of its size, with the total number it can carry doubling for every size category the affected creatures are smaller than the whirlwind. The creature in whirlwind form can eject a carried creature at any time during its turn, dropping the carried creature in a space of its choice adjacent to its position at the time of ejection. At the GMfs discretion, if the whirlwind is in contact with dirt, gases, water, or other material that can be easily drawn into it, the whirlwind blocks all vision within it (including darkvision) and blocks line of sight through it.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "СВ/ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Встроенное оружие",
    descr: "Оружие этого сщуества встроено в его тело или корпус, он невосприимчив к разоружению.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Выслеживание",
    descr: "The creature can use the Perception skill to perform the follow tracks task of the Survival skill with the listed sense. The sense is usually related to a type of signature that most creatures leave behind, such as a scent or heat trail. The creature might gain a bonus or penalty to its Perception check to follow tracks depending on the strength of the quarry\’s signature, at the GM\’s discretion. It is possible for stronger signatures to completely mask other signatures, making following tracks with a weaker signature very difficult.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Вытягивание жизни",
    descr: "A successful energy drain attack inflicts one or more negative levels (as described in the ability). If an attack that includes an energy drain scores a critical hit, it inflicts twice the listed number of negative levels. Unless otherwise specified in the draining creature\’s description, it gains 5 temporary Hit Points for each negative level it inflicts on an opponent. These temporary Hit Points last for a maximum of 1 hour. Negative levels from energy drain remain until 24 hours have passed or until they are removed with magic or technology. If a negative level isn\’t removed before 24 hours have passed, the affected target must attempt a Fortitude saving throw (the exact DC is given in the creature\’s stat block). On a success, the negative level goes away. On a failure, the negative level becomes permanent. A separate saving throw is required for each negative level.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Губительное дыхание",
    descr: "As a standard action, the creature can exhale a cone or line of energy or another magical effect. A breath weapon attack usually deals damage, and it\’s often energy-based. A breath weapon usually allows a target to attempt a Reflex saving throw for half damage, though some breath weapons require a successful Fortitude or Will save instead. A creature is immune to its own breath weapon and the breath weapons of others of its kind unless otherwise noted. Each breath weapon also indicates how often it can be used.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Дыхание под водой",
    descr: "The creature can breathe water. It can\’t breathe air unless it has the amphibious special ability.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Естественное оружие",
    descr: "Natural weapons (and natural attacks) such as acid spit, bite, claw, or slam don\’t require ammunition and can\’t be disarmed or sundered.\nIn addition, a player character with this ability can attack with a special unarmed strike that deals lethal damage, doesn\’t count as archaic, and threatens squares. They also gain a special version of the Weapon Specialization feat with this unarmed strike at 3rd level, allowing them to add 1–1/2 × their character level to their damage rolls for this unarmed strike (instead of just adding their character level as usual).",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Зависимость",
    descr: "The creature is dependent on a substance, a sense, or something else to either survive or function normally. If the creature is dependent on something to live (such as water), it can survive without that thing for a number of minutes equal to 5 times its Constitution modifier. Beyond this limit, the creature runs the risk of negative effects, such as suffocation or death. A creature that is dependent on something to function normally (such as a creature with blindsight and no visual sense) usually gains a negative condition when it loses that thing.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Затаптывание",
    descr: "В качестве действия полного хода существо может переместиться на расстояние вплоть до значения своей скорости, проходя сквозь клетки любых существ, размер которых как минимум на одну категорию меньше. Затаптывающее существо не совершает проверок, нанося всем существам, через чьё пространство проходит. Цель затаптывания может пройти испытание Реакции с указанной СЛ, чтобы уменьшить урон вдвое; если цель решит пройти испытание, то не сможет совершить против затаптывающего внеочередную атаку, спровоцированную его перемещением. Затаптывающее существо наносит урон каждому из затоптанных только единожды за раунд.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Захват",
    descr: "Когда существо успешно проводит указанную атаку (обычно когтями или укусом), она наносит обычный урон, а если результат проверки равен или превышает ККБ цели + 4, то существо автоматически берёт её в захват (а если результат равен или превышает +13 цели, то цель вместо этого обездвиживается) без затрат действий. Существу необязательно располагать свободной конечностью – достаточно иметь возможность совершить указанную атаку (при наличии нескольких атак с захватом можно схватить сразу нескольких противников). Захват продлевается либо совершением новой атаки с захватом, либо по обычным правилам – при помощи боевого манёвра захвата.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Защита стаи",
    descr: "Урон, получаемый стаей от оружия, зависит от способа использования оружия.\nСтая невосприимчива к атакам и эффектам, нацеленным на одно существо (включая заклинания, действующие на одну цель), за исключением эффектов с дескриптором \’разум\’ (если у стаи есть значение или модификатор Интеллекта и способность, аналогичная коллективному разуму формиан).\nСтая получает в полтора раза больше урона (+50%) от эффектов, действующих на все цели в области, таких как гранаты, конусное оружие, оружие со свойством \’взрыв\’ и многие заклинания школы разрушения.\nСтая получает обычный урон от атак и эффектов, действующих на несколько целей (включая атаки по инии и полностью автоматический огонь). При использовании автоматического режима огня стая считается за пять целей: например, при использовании 12 патронов таким образом можно атаковать максимум 6 целей, поэтому стая получит обычный урон. В случае наличия ещё двух целей, расположенных ближе к стреляющему, они будут атакованы первыми, и на стаю останется только 4 атаки, поэтому урона она не получит.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Звёздная гармония",
    descr: "Существо находится в гармонии с циклами звёздных систем. Такие существа обычно наделены звёздными и наивысшими откровениями – либо те, что присущи солярионам, либо уникальными. При использовании звёздных откровений считается, что существо всегда настроено соответствующим образом. Тем не менее оно не всегда находится в полной гармонии, поэтому не всегда может использовать наивысшие откровения. При проверке инициативы существа бросьте 1d3. Выпавший результат означает количество раундов, по прошествии которых существо достигнет полной гармонии и сможет использовать наивысшие откровения. После использования такого откровения оно теряет гармонию, и 1d3 нужно бросить снова, чтобы определить время её восстановления.\nЕсли для существа указана звёздная гармония (гравитонный режим) или звёздная гармония (фотонный режим), то существо настроено только на указанный звёздный режим и только в нём может достичь гармонии при помощи вышеперечисленного способа.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Истинная речь",
    descr: "The creature can speak with any other creature that has a language. This ability is always active.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Космический полёт",
    descr: "Келликстриан может летать в космосе со стандартной для навигации и астронавигации скоростью, используя для навигации Мистицизм.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-09"
},
{
    name: "Лазание",
    descr: "Вы можете использовать сопутствующие действия, чтобы взбираться на стены, склоны и другие крутые поверхности. При этом вы не проходите проверок атлетики, если не находитесь в опасных обстоятельствах.\nВо время лазания вы не считаетесь застигнутым врасплох, а также получаете бонус +8 к проверкам Атлетики при лазании и всегда можете взять 10, даже если отвлекаетесь на внешние угрозы.\nПри лазании вы перемещаетесь с указанной скоростью, но не можете переходить на бег. Вы можете переместиться на расстояние вплоть до удвоенного значения скорости лазания, успешно пройдя проверку Атлетики для лазания со штрафом -5. Существа без скорости лазания используют для лазания навык Атлетика.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Мультиатака",
    descr: "In addition to its standard melee or ranged attack, the creature has a multiattack entry. When making a full attack, the creature can make all the attacks listed in the multiattack entry at the attack bonuses listed, rather than make two attacks. It can make the attacks in any order.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Невосприимчивости жиж",
    descr: "жижи невосприимчивы к следующим эффектам, если в их описании отдельно не указано, что они действуют на жиж:\n- Критические удары, паралич, яд, полиморфизм, сон, шок.\n- Взгляд, иллюзии, визуальные эффекты и прочие атаки, требующие, чтобы существо могло видеть.\n- жижи нельзя взять в тиски.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Невосприимчивости конструкций",
    descr: "Конструкции невосприимчивы к следующим эффектам:\n- Кровотечение, смертельные эффекты, болезни, эффекты с дескриптором \’разум\’, паралич, яд, сон, шок.\n- Урон характеристикам и их потеря, утомление, бессилие, вытягивание жизни и отрицательные уровни, несмертельный урон.\n- Любые эффекты, требующие испытания Стойкости (кроме эффектов, влияющих и на предметы, а также безвредных). \n- К эффектам некромантии.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "АИ-01"
},
{
    name: "Невосприимчивости нежити",
    descr: "Нежить невосприимчива к следующим эффектам, если в их описании не указано, что они действуют на нежить:\n- Кровотечение, смертельные эффекты, болезни, эффекты с дескриптором \’разум\’, паралич, яд, сон, шок.\n- Урон характеристикам и их потеря, утомление, бессилие, вытягивание жизни и отрицательные уровни, несмертельный урон.\n- Любые эффекты, требующие испытания Стойкости (кроме эффектов, влияющих и на предметы, а также безвредных).",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "АИ-01"
},
{
    name: "Невосприимчивости растений",
    descr: "Растения невосприимчивы к эффектам с дескриптором \’разум\’, параличу, яду, эффектам сна и шоку.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-01"
},
{
    name: "Невосприимчивости стаи",
    descr: "Стаи невосприимчивы к следующим эффектам, если в их описании отдельно не указано, что они действуют на стаи:\n- Кровотечение, критические удары, ошеломление, шок, обездвиживание, распластанность. Стаю нельзя застать врасплох или сбить с цели.\n- Боевые манёвры – стая не может быть целью боевых манёвров или их применять, если в её описании не указано иное.\n- Стаю нельзя взять в тиски.\n- При смерти – по достижении 0 ПЗ стая рассеивается и перестаёт быть единым целым, но отдельные её представители могут выжить.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Невосприимчивости элементалей",
    descr: "Elementals are immune to the following effects, unless the effect specifies that it works against elemental creatures:\n- Bleed, critical hits, paralysis, poison, sleep effects, and stunning.\n- Flanking—elementals are unflankable.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Невосприимчивость",
    descr: "Существо не получает урона от указанного источника. Существа могут быть невосприимчивы к определённым типами урона, недугам, состояниям, заклинаниям (определённой школе, кругу или типу испытания) и другим эффектам. При невосприимчивости к критическим ударам существо не получает двойной урон и не подвергается действию критических эффектов. На невосприимчивое существо указанный источник попросту не действует, равно как и вызываемые им вторичные эффекты.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "СВ/ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Недышащий",
    descr: "Существо не дышит и невосприимчиво к эффектам, требующим дыхания (например, ядам типа \’дыхание\’). Газы и облака, не требующие вдыхания, действуют на него как обычно.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Неживой",
    descr: "У существа нет модификатора Выносливости, и если его ПЗ снижаются до 0, оно немедленно уничтожается. Неживое существо не исцеляется естественным путём, но конструкцию можно починить при помощи подходящих инструментов или магии. Быстрое исцеление при этом работает как обычно. Неживым существам не требуется дышать, есть или спать, их можно воскресить или вернуть к жизни только заклинаниями чудо, желание или другим подобным эффектом, явным образом действующим на неживых существ.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Незрячий",
    descr: "Существо не использует зрение и поэтому не подвергается воздействию эффектов, требующих видеть их или цель. Как правило, незрячие существа наделены одной из форм слепозрения, которая компенсирует незрячесть, но при её отсутствии считается, что они способны действовать так же хорошо, как и существа с обычным зрением, если в их описании не указано обратное.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Нельзя взять в тиски",
    descr: "Взятие существа в тиски не даёт никаких преимуществ. Против него нельзя применять способности, предназначенные исключительно против взятых в тиски существ.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Неразумный",
    descr: "У существа нет ни значения, ни модификатора Интеллекта, оно невосприимчиво к эффектам с дескриптором \’разум\’. Любые СЛ и прочие параметры, зависящие от Интеллекта рассчитываются, как если бы его значение было равно 10 (модификатор +0).",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Ночное зрение",
    descr: "Эта способность позволяет видеть при полном отсутствии света в пределах расстояния, указанного в описании. Это зрение чёрно-белое и не позволяет различать цвета или видеть то, что нельзя было разглядеть обычным зрением: невидимые предметы и существа остаются невидимыми, а иллюзии кажутся тем, чем кажутся. Атаки взглядом действуют на персонажа как обычно. Наличие света не мешает ночному зрению.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Обнаружение мировоззрения",
    descr: "The creature can detect the alignment of another creature. This functions as detect magic, but rather than determining which creatures and objects in the area are magical, the creature can determine one other creature\’s alignment.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ПС/СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Ограниченная телепатия",
    descr: "The creature can communicate telepathically with any creatures within 30 feet with whom they share a language. Conversing telepathically with multiple creatures simultaneously is just as difficult as listening to multiple people speak.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "СВ/ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Плавание",
    descr: "Если у вас есть скорость плавания, вы можете использовать сопутствующие действия, чтобы плавать в различных жидкостях. При этом вы не проходите проверок Атлетики, если не находитесь в опасных обстоятельствах. Вы получаете бонус +8 к проверкам Атлетики при плавании и можете взять 10, даже если отвлекаетесь на внешние угрозы. Плавая, вы перемещаетесь с указанной скорость и можете переходить на без при условии, что будете двигаться по прямой. Существа без скорости плавания используют навык Атлетика. Наличие скорости плавания не означает, что вы можете дышать под водой.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Полёт",
    descr: "Вы можете использовать сопутствующие действия, чтобы летать. Существа, способные летать, получают модификатор манёвренности к проверкам акробатики для полёта. Возможны следующие типы манёвренности: скверная (-8), средняя (0), безупречная (+8). При полёте вы в начале своего хода выбираете основное направление, в котором будете двигаться в этом раунде (в том числе вверх или вниз). Вы можете перемещаться с указанной скоростью по прямой в выбранном направлении. При этом вы не проходите проверок Акробатики, если вам не мешает ветер.\nЕсли вы хотите изменить направление во время полёта, вы можете повернуть на 45 градусов, пожертвовав 5 футами перемещения. Для набора высоты требуется дополнительно потратить 5 футов.\nПри полёте в условиях пониженной гравитации или невесомости набор высоты не требует дополнительных затрат. При полёте в условиях повышенной гравитации для набора высоты требуется потратить вдвое больше дополнительных футов.\nВ описании навыка Акробатика перечислены дополнительные возможности полёта, которые летающее существо может использовать, успешно пройдя проверку Акробатики; провал приведёт к негативным последствиям. Существа со скверной манёвренностью не могут парить. Существа со средней манёвренностью могут пользоваться всеми перечисленными возможностями. Существа с безупречной манёвренностью автоматически успешно проходят проверки Акробатики при парении и мягком приземлении (если не находятся без сознания), но при желании они могут совершить проверку Акробатики, чтобы потратить на парение быстрое действие вместо сопутствующего.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Призыв союзников",
    descr: "The creature can attempt to summon creatures of the same creature type as itself as a full action. The summoned ally cannot summon its own allies, is worth 0 experience points, and returns to the place from which it came after 1 hour.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ПС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Присасывание",
    descr: "The creature can attempt a special attack against KAC as a standard action. If it succeeds, it deals no damage, but the creature adheres to its target. Once attached, the creature gains a +4 bonus to its AC (from cover) and a +2 circumstance bonus to melee attacks, but it can attack only the creature to which it\’s attached. An attached creature can\’t move on its own (though it moves with its target), take actions that require two hands, or make attacks of opportunity. An attached creature can be removed with a successful Strength check (DC = 10 + 1-1/2 × the creature\’s CR) made as a move action, or it can remove itself from its target as a move action.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Проглатывание",
    descr: "Когда существо успешно проводит указанную атаку (обычно укусом), оно наносит обычный урон, а если результат атаки равен или превышает ККБ цели +4, то существо автоматически берёт её в захват в качестве части действия атаки (а если результат равен или превышает ККБ + 13 цели, то цель вместо этого обездвиживается). Существу необязательно распологать свободной конечностью, чтобы совершить такой захват. Если не указано обратное, существо может проглотить лишь противника, который как минимум на одну категорию меньше, и в его желудке хватит места только на одно такое существо (максимальное количество существ, которых можно проглотить, удваивается за каждую дополнительную категорию разницы в размерах).\nЕсли существо схватило или обзедвижило цель и в начале следующего хода существа цель не освободилась, она автоматически получает урон от атаки этого существа. После этого существо может снова совершить проверку этой атаки. Если результат равен или превышает ККБ цели, захват или обездвиживание сохраняется. Если же результат атаки равен или превышает ККБ цели + 4, она становится проглоченной (при этом урон не наносится). Проглоченный противник в каждом раунде в начале своего хода получает указанный для проглатывания урон и считается находящимся в захвате. Проглоченный может попытаться выбраться, прорезав себе путь наружу (ЭКБ внутренностей существа равен обычному ЭКБ существа, а ККБ равен обычному ККБ - 4), нанеся урон в размере ¼ общего запаса ПЗ существа, но любые атаки с типом урона, отличающимися от режущего наносят лишь ½ обычного уровна. Если проглоченный прорезал путь наружу, проглотившее его существо не сможет использовать проглатывание, пока не исцелит полученный урон.\nПроглоченный противник может попытаться выбраться наружу. Для этого ему требуется успешно пройти проверку захвата против ККБ внутренностей сузества + 8 и проверку атлетики для лазания (СЛ = 10 + 1,5 * КО существа). Каждое из этих действий занимает полный раунд. Если обе проверки оказались успешными, противник оказывается во рту существа иможет освободиться, чтобы в результате оказаться на свободной клетке рядом с проглотившим существом.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Пугающее присутствие",
    descr: "Существо, наделённое этим свойством, внушает противнику ужас одним своим видом. Активация этой способности может совершаться только один раз за раунд, либо в качестве сопутствующего действия, либо при атаке (это считается частью действия атаки). Обычно радиус действия этой способности – 30 футов, а её длительность – 5d6 раундов, если не указано иное. Все противники в радиусе действия способности должны успешно пройти испытание Воли или быть потрясены. Противник, попавший под действие пугающего присутствия (вне зависимости от успешности испытания), невосприимчив к пугающему присутствию этого существа на 24 часа. Это способность с дескрипторами \’восприятие\’, \’разум\’, \’ужас\’ и \’эмоции\’.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "СВ/ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Растениеподобный",
    descr: "For effects targeting creatures by type, plantlike creatures count as both their type and plants (whichever type allows an ability to affect them for abilities that affect only one type, and whichever is worse for abilities that affect both types). They also receive a +2 racial bonus to saving throws against mind-affecting effects, paralysis, poison, polymorph, sleep, and stunning, unless the effect specifies that it works against plants.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Регенерация",
    descr: "Существо восстанавливает определённое количество ПЗ в начале своего хода, аналогично способности быстрое исцеление, но не может умереть до тех пор, пока регенерация актива (хотя может потерять сознание, если ПЗ опустятся до 0). Некоторые атаки (обычно наносящие урон кислотой или огнёам) останавливают регенерацию существа на1 раунд, во время которого существо не исцеляется и может умереть как обычно. В блоке параметров существа указаны типы урона, останавливающие регенерацию.\nРегенерация не восстанавливает ПЗ, потерянные от удушья, голода и жажды. Регенерация позволяет заного отращивать отсутствующие части тела или приращивать их обратно, если их приставить на место в течение 1 часа после отделения. Отделённые и не приращенные обратно части тела разлагаются и отмирают как обычно.\nРегенерация обычно бывает лишь у существ, у которых есть значение или модификатор Выносливости.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Световая слепота",
    descr: "The creature is blinded for 1 round when first exposed to bright light, such as sunlight, and it\’s dazzled for as long as it remains in an area of bright light.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Свирепость",
    descr: "Раз в день, если ПЗ существа опустились до 0, но оно не умерло, оно может продолжить сражаться ещё один раунд. Его ПЗ опускаются до 0, он оказывается при смерти (следуя обычным правилам), но может действовать как обычно до конца совего следующего хода, после чего немедленно теряет сознание. если до этого существо получит дополнительный урон, то перестаёт совершать действия и также теряет сознание.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Сжатие",
    descr: "The creature can move through an area as small as one-quarter of its space without squeezing or one-eighth its space when squeezing.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Сквозное чутьё",
    descr: "Это особая способность, позволяющая чувствовать вещи за препятствиями или преградами, ограничивающими обычные способы восприятия. Оно даёт существу возможность проходить проверки Внимания для зон, которые находятся за пределами его восприятия. Сквозное чутьё дополняет точные и вспомогательные способы восприятия, не заменяя их: например, у существа не может быть сквозного чутья, основанного на зрени, если оно слепое. Подобная способность может быть как сверхестественной силой, позволяющей обнаруживать вещи, недоступные для обычных способов восприятия, так и экстраординарной способностью, означающей улучшенное восприятие, которое может быть получено при использовании оборудования (например, лазерных микрофонов и рентгеновских визоров), естественных способностей (например, некоторые драконы способны видеть сквозь дым) и других эффектов. Сквозное чутьё действует в пределах расстояния, указанного в описании существа.\nСущество, обладающее этой способностью, обычно полагается на определённый способ восприятия, указанный в блоке параметров в скобках после сквозного чутья. например, сквозное чутьё (зрение) позволяет существу видеть сквозь преграды, которые обычно блокируют линию видимости. Если по какой-то причине существо теряет этот способ восприятия – например, если существо, полагающееся на зрение ослепло, оно лишается и соответствующего сквозного чутья. К подходящим способам восприятия относятся вибрация, жизнь, запах, зву, слух и эмоции.\nЕсли не указано иное, то считается, что существо со сквозным чутьём обладает и ночным зрением на расстоянии до 60 футов. Это позволяет существу смотреть сквозь различные вещи и материалы – броню, чумоданы и другие предметы, могущие что-то скрыватьж на практике это означает, что существо может использовать Внимание для более простого и быстрого поиска (за один раунд оно способно обыскать область 20*20 футов), но такой обыск позволит найти только те вещи, которые можно обнаружить при помощи этого способа восприятия. Если потайная дверь скрыта за материалом, который блокирует эту способность (см. ниже), быстрый поиск с использованием сквозного чутья (зрение) не позволит его обнаружить.\nСквозное чутьё может позволить существу игнорировать только какие-то определённые материалы, они указываются в блоке параметров в квадратных скобках после связанного со сквозным чутьём способа восприятия. например, сквозное чутьё (зрение [только дым]) позволяет существу смотреть сквозь дым, как если бы его не было вовсе, но все остальные препятствия ограничивают зрение существа как обычно. Сквозное чутьё, игнорирующее только определённый материал, в остальном работает так же, как и связанное с ним восприятие, в том числе и в случае совершения проверок Внимания, чтобы заметить что-то.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ОКП-01"
},
{
    name: "Скольжение сквозь твердь",
    descr: "When the creature burrows, it can pass through dirt, stone, or almost any other sort of earth except metal as easily as a fish swims through water. If protected against fire damage, it can even glide through lava. Its burrowing leaves behind no tunnel or hole, nor does it create any ripple or other sign of its presence.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Слепое чутьё",
    descr: "Этим термином обозначается точный способ восприятия, отличный от зрения, или сочетание таких способов, позволяющее обходиться без зрения. Слепое чутьё действует в пределах расстояния, указанного в описании существа.\nСущество, облрадающее этой способностью, обычно полагается на определённый способ восприятия, указанный в блоке параметров в скобках после слепого чутья. Если по какой-то причине существо теряет этот способ восприятия (например, если существо, ориентирующееся на слух, оглохло), оно лишается и слепого чутья. К особым способам восприятия относятся вибрация, жизнь, запах, звук, мысли и эмоции.\nЕсли вы обладаете слепым чутьём и успешно прошли проверку Внимания, чтобы заметить невидимое существо, вы определяете его местоположение. Слепое чутьё отменяет бонусы к Скрытности благодаря невидимости, но сущуство со слепым чутьём по-прежнему не видит невидимок (вероятность промаха сохранятеся) и считается застигнутым врасплох для их атак.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Слепозрение",
    descr: "Этим термином обозначается точный способ восприятия, отличный от зрения, или сочетание таких способов, которое, по сути, является улучшенной версией слепого чутья. Слепозрение действует в пределах определённой дистанции, указанной в описании существа. Существо, обладающее этой способностью, обычно полагается на особый вид восприятия, указанный в скобках после слепозрения. Если по какой-то причине существо теряет этот способ восприятия (например, если существо, в качестве слепозрения ориентирующееся по запаху, потеряло нюх), оно лишается слепозрения. К особым способам восприятия относятся вибрация, жизнь, запах, звук, мысли и эмоции.\nЕсли вы обладаете слепозрением и успешно прошли проверку Внимания, чтобы заметить невидимое существо, вы обнаруживаете его. Существо со слепозрением нельзя ослепить, на него не действуют атаки взглядом, плохая видимость, марево, невидимость, магическая тьма и подобные эффекты, но видеть эфирных существ оно не может.\nПо сравнению с обычным зрением эта способность имеет яд ограничений. Слепозрение не позволяет различать цвета и контраст, но в зависимости от способа может давать иную информацию. Существо со слепозрением не может читать написанный текст, но способно воспринимать информацию тактильно. Слепозрение работает под водой, в тумане и дыму, но не в вакууме (хотя это зависит от его природы – слепозрение, основанное на считывании эмоций, будет работать и там).",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Смена формы",
    descr: "The creature has the ability to assume the appearance of a specific creature or type of creature, but it retains most of its own physical qualities. If the form assumed has any of the following abilities, the creature gains them while in that form: blindsight (scent), darkvision, low-light vision, and swim 30 feet. The creature can retain its own breathing ability, or it can assume the ability to breathe in any environment the assumed shape can breathe in (including the no breath ability, which enables it to survive in the vacuum of space). If the ability doesn\’t specify what the creature can change shape into, it can assume the form of any creature of the humanoid type, but it can\’t mimic a specific humanoid. Change shape grants a +10 bonus to Disguise checks to appear as a creature of the type and subtype of the new form, and the DC of the creature\’s Disguise check isn\’t modified as a result of altering major features or disguising itself as a different race or creature type.\nA creature can assume a form that\’s one size category smaller or larger than its original form and become that size. Unless otherwise stated, it can remain in an alternate form indefinitely. Some creatures can transform into unique forms with special modifiers and abilities. These creatures adjust their ability scores, as noted in their description.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Снижение урона",
    descr: "Существо с этим свойством способно моментально исцеляться или вовсе не получать вреда от ударов – это и называется снижением урона. Снижение уровня (СУ) применяется к кинетическому урону (дробящему, колющему или режущему), который получает существо, если у атаки не указан тип урона или если он отличается от перечисленных выше (сюда относится урон звуком, кислотой, огнём, холодом или электричеством – от него защищает устойчивость к энергии.\nВ описании указано, сколько именно дробящего, колющего или режущего урона от каждой атаки существо игнорирует. СУ зачастую может быть преодолено оружием из особых материалов, магическим оружием (любым оружием с сопряжением), а также оружием, настроенным на определённое мировоззрение. Эта информация пишется через косую черту после значения СУ. Например, запись СУ5/холодное железо означает, что вы получаете на 5 пунктов урона меньше от каждой атаки оружием, изготовленным не из холодного железа, СУ 5/магия означает, что вы получаете на 5 меньше урона от оружия, не являющегося магическим. Если за косой чертой следует прочерк (\’СУ 5/-\’), то СУ применяется ко всему дробящему, колющему или режущему урону от любого оружия, хотя ряд атак способен преодолевать СУ.\nБоеприпасы, выпущенные из огнестрельного оружия с магическим сопряжением или мировоззрением, при преодолении СУ считаются либо магическими, либо имеющими соответствующее мировоззрение.\nИногда после значения СУ указывается сразу несколько материалов или мировоззрений – в этом случае СУ может быть преодолено любым из перечисленных способов, либо требует какого-то определённого сочитания. Например, СУ 5/магия или принципиальность означает, что СУ преодолевается любым магическим или принципиальным оружием, а СУ 5/магия и принципиальность означает, что СУ можно преодолеть только оружием, которое и магическое, и принципиальное.\nЕсли СУ обнуляет урон, то оно отменяет и большинство дополнительных эффектов от попадания, которые могли вступить в силу, – например, калечащий приём оперативника, болезнь, яд, передающиеся при ранении. СУ не предотвращает урон характеристикам, их потерю, энергетический урон, нанесённый во время атаки, а также получение отрицательных уровней. оно также не защищает от ядов или болезней, которые воздействуют на существо через дыхание, пищу или контакт. атаки, которые не причиняют урон из-за СУ существа, не прерывают сотворение заклинаний.\nЕсли у вас есть СУ от более чем одного источника, то разные формы этого свойства не складываются, если в их описании не указано обратное. Вместо этого вы используете тот вид и значение СУ, которое вам выгоднее в текущий момент. В редких случаях эффект может увеличивать уже наличествующее СУ существа.\nИногда СУ происходит за счёт мгновенного залечивания ранений, иногда – от особо прочной шкуры, но в любом случае вы видите, что така не производит должного эффекта.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Сокрушение",
    descr: "When ending a flying or jumping movement, the creature can land on targets that are at least three size categories smaller than itself. Targets are automatically knocked prone, take the listed damage, and are pinned. Each crushed target can attempt to escape the pin normally on its turn, and the pin ends automatically if the crushing creature moves out of the target\’s square. A crushed target does not take damage from the crush more than once, unless the crushing creature moves fully off that creature and then back onto it.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Сотворение тьмы",
    descr: "As a standard action, the creature can create a 20-foot-radius area of darkness centered on itself, which negates the effects of all nonmagical light sources in that area. This darkness lasts for a number of minutes equal to the creature\’s CR, and the creature can dismiss the effect as a standard action. The darkness doesn\’t move with the creature. Unless otherwise noted, any magic source of light can increase the light level in the area as normal.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Сумеречное зрение",
    descr: "Существа с сумеречным зрением видят при низком уровне освещённости так же хорошо, как и при среднем.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Телепатия",
    descr: "Существо может мысленно общаться с любым другим понимающим какой-либо язык существом в пределах определённой дистанции, которая указана в описании существа (обычно это 100 футов). Телепатически можно общаться сразу с несколькими существами, но это так же сложно, как и одновременно разговаривать сразу с несколькими собеседниками.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОКП"
},
{
    name: "Темновидение",
    descr: "The creature can see out to the listed range with no light source at all.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Тошнотворность",
    descr: "Когда существо с этой способностью наносит урон противнику, оно вызывает у него тошноту. Любое существо, получившее такой урон, на 1 раунд становится мучимым тошнотой. Эффект можно отменить, успешно пройдя испытание стойкости с указанной СЛ.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Устойчивость к магии",
    descr: "Устойчивость к магии (УкМ) – особая способность, защищающая от заклинаний и псевдозаклинаний, являясь своего рода КБ против магических атак. Чтобы подействовать на существо с УкМ, заклинателю надо успешно пройти проверку УЗ (d20 + уровень заклинателя), получив результат равный или больший, чем УкМ существа. Если заклинатель провалит проверку, то заклинание на существо не подействует. Самому существу при этом ничего делать не надо, даже знать об угрозе необязательно.\nУкМ не мешает обладателю использовать собственные заклинания, предметы или способности. В качестве основного действия существо может добровольно приостановить действие УкМ до своего следующего хода, в начале которого УкМ снова возобновит своё действие, если существо не продолжит его подавлять (потратив основное действие).\nУкМ применяется, когда существо с УкМ является непосредственной целью заклинания или находится в области его действия. Если под действие заклинания попадают сразу несколько существ с УкМ, заклинатель совершает проверку УЗ для каждого из них отдельно. УкМ может отменить только ту часть заклинания, которая направлена на конкретное существо: если у заклинателя только одна цель, оно отменяется полностью, если целей несколько – защищается только существо с УкМ, на остальные цели заклинание действует как обычно. Встречаются заклинания, игнорирующие УкМ, – это указывается в их описании.\nУкМ защищает и от уже сотворённых заклинаний – например, когда существо входит в область с активным эффектом. Совершайте проверку УЗ, когда существо впервые попадает под действие эффекта заклинания. Для каждого конкретного сотворённого заклинания можно попытаться преодолеть УкМ существа только один раз: если заклинание сработало, оно будет и дальше срабатывать каждый раз, когда существо сталкивается с его действием, например, если оно заходит в область действия снова и снова. Если же сотворённое заклинание не сработало, оно не будет срабатывать для этого существа и дальше. При следующем сотворении  того же заклинания потребуется новая проверка УЗ. Если существо добровольно снижало свою УкМ и при этом подверглось воздействию заклинания, то одну попытку сопротивления оно получит, когда его УкМ восстановится.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: null,
    requirement: null,
    source: "ОПК"
},
{
    name: "Устойчивость к энергии",
    descr: "Существо с этим свойством способно игнорировать часть энергетического урона определённого типа (звук, кислота, огонь, холод или электричество) от каждой атаки. Каждая подобная способность определяет тип энергии и величину игнорируемого урона. Источник урона, будь он магический или обычный, при этом значения не имеет. Если атака наносит одновременно и кинетический, и энергетический урон (например, 3d6 дробящего урона и 1d6 урона огнём), то из-за устойчивости снижается только энергетический урон, а кинетический остаётся неизменным.\nЕсли устойчивость обнуляет урон, то она отменяет и большинство дополнительных эффектов от попадания, которые могли вступить в силу, – например, калечащий приём оперативника, болезнь, яд, передающиеся при ранении. Устойчивость не предотвращает урон характеристикам, их потерю, энергетический урон, нанесённый во время атаки, а также получение отрицательных уровней. Она также не защищает от ядов или болезней, которые воздействуют на существо через дыхание, пищу или контакт. Атаки, которые не причиняют урон из-за устойчивости существа, не прерывают сотворение заклинаний.\nЕсли у вас есть устойчивость к одному и тому же типу энергии от более чем одного источника, то разные формы этого свойства не складываются, если в их описании не указано обратное. Вместо этого вы используете тот вид и значение СУ, которое вам выгоднее в текущий момент. В редких случаях эффект может увеличивать уже наличествующую у существа устойчивость к энергии.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Уязвимость",
    descr: "Существо с уязвимостью получает в полтора раза больше урона (+50%), когда он относится к определённому типу. Существа, уязвимость которых не связана с наносящими урон эффектами, вместо этого получают -4 к испытаниями против заклинаний и эффектов, вызывающих или использующих указанную уязвимость (например, заклинаниям обольщения). Некоторые существа могут получать дополнительные эффекты, указанные в их блоке параметров.",
    lvl: null,
    type: "Особая",
    subtype: null,
    category: "СВ/ЭКС",
    requirement: null,
    source: "ИА-01\nстр.157"
},
{
    name: "Боевые узы",
    descr: "You can train together with an ally whose Intelligence score is at least 1, forming a combat bond between you and the target creature. This training process takes 1 hour, and you can have only one bonded ally at a time. If you form a new combat bond with a creature, any previously formed combat bond is lost. No creature can be the bonded ally of two centurions.\nAt 10th level, you can spend 1 Resolve Point to form a combat bond with an ally who can see or hear you as a standard action.\nWhenever you gain a bonus from covering fire or harrying fire provided by your bonded ally (or vice versa), the bonus increases to +4. When you are the captain of a ship and successfully use the encourage action on your bonded ally (or vice versa), the bonus granted increases to +4.",
    lvl: 4,
    type: "Архетип",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "МС"
},
{
    name: "Божественная сила",
    descr: "Your divine connection continues to grow, allowing you to use more powerful magic. Once per day, you can cast the 3rd- or 4th-level spell of your chosen connection as a spell-like ability. At 16th level, you can use this ability twice per day, and at 20th level, you can use this ability three times per day. The save DC of these spells is equal to 10 + the spell\’s level + your key ability score modifier.",
    lvl: 12,
    type: "Архетип",
    subtype: null,
    category: "ПС",
    requirement: null,
    source: "МС"
},
{
    name: "Божественное правосудие",
    descr: "Choose chaos, evil, good, or law; your choice must correspond to a portion of your or your deity\’s alignment (or both, if possible). If both you and your deity are neutral, you can choose any one of the four.\nAs a move action, you can spend 1 Resolve Point to pronounce a creature you can see an enemy of your faith. Until the target is dead or the next time you take a full 8-hour rest, all your weapon attacks bypass that target\’s DR and ignore its energy resistances as though your weapons had the fusion corresponding to your chosen alignment (even if the target isn\’t a dragon or outsider): anarchic (chaos), axiomatic (law), holy (good), or unholy (evil).",
    lvl: 4,
    type: "Архетип",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "МС"
},
{
    name: "Божественное пробуждение",
    descr: "Choose a deity whose alignment is within one step of your own. If you have other abilities that require you to choose a deity (such as the priest theme), you must choose the same deity.\nYou are divinely protected, gaining a +1 enhancement bonus to saving throws with your lowest base saving throw bonus; if two or three of your base saving throw bonuses are tied for the lowest value, choose one of those categories to gain this bonus. This functions as and doesn\’t stack with the bonus provided by a ring of resistance, except the effect cannot be dispelled. At 6th level and every 4 levels thereafter, the bonus increases by 1.",
    lvl: 2,
    type: "Архетип",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "МС"
},
{
    name: "Быстрая выборка",
    descr: "Whenever you have access to an infosphere or downloaded data set, you can use the Computers skill for any skill check to recall knowledge. Furthermore, you dabble in scientific study and have a thirst for knowledge in fields beyond your own, and your ability to create simulations and process data allows you to emulate skills that would normally be beyond your grasp. Select Culture, Engineering, Life Science, Medicine, Mysticism, Physical Science, or Profession (any one); whenever you attempt a skill check with that skill, you can treat half your ranks in Computers as your ranks in that skill for the check, if that would be better. You are considered trained in the skill for the purposes of this check. If you spend 1 Resolve Point as part of the check, you can treat your full ranks in Computers as your ranks in that skill for the check. At 8th, 14th, and 20th levels, you can select an additional skill to use with this ability. Additionally, if you gain a number of ranks equal to or greater than half your ranks in Computers in a skill you have selected with this ability, you can immediately swap out that skill and select a new skill from the list to use with this ability.",
    lvl: 2,
    type: "Архетип",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "МС"
},
{
    name: "Во имя Преисподней",
    descr: "Hellknights of any order can choose the in Hell\’s name alternate class feature. As a standard action, you can pronounce a judgment against all nonlawful creatures within 20 feet of you. Each target that can hear you must succeed at a Will saving throw (DC = 10 + half your character level + your key ability score modifier) or be staggered for 1d4 rounds. This is a mind-affecting, sense-dependent effect. You can use this ability once per day, plus one additional time per day at 18th level.",
    lvl: 12,
    type: "Архетип",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "МС"
},
{
    name: "Военная подготовка [Офицер блюстителей]",
    descr: "You gain one of the following feats as a bonus feat (you must meet all the prerequisites of the chosen feat): Advanced Melee Weapon Proficiency, Improved Unarmed Strike, or Longarm Proficiency. At 6th level, if you chose Improved Unarmed Strike at 4th level, you gain Improved Combat Maneuver. Otherwise, you gain the Weapon Specialization feat as a bonus feat for the same weapon type to which the bonus feat you gained at 4th level applies. If you already have all the listed feats, you can choose a bonus combat feat instead.",
    lvl: 4,
    type: "Архетип",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "МС"
},
{
    name: "Военная подготовка [Резидент блюстителей]",
    descr: "You gain one of the following feats as a bonus feat, provided you meet all the prerequisites of the chosen feat: Advanced Melee Weapon Proficiency, Improved Unarmed Strike, or Longarm Proficiency. If you already have all the listed feats, you can choose a bonus combat feat instead. At 6th level, if you chose Improved Unarmed Strike at 4th level, you gain Improved Combat Maneuver. Otherwise, you gain the Weapon Specialization feat as a bonus feat for the same weapon type to which the bonus feat you gained at 4th level applies.",
    lvl: 4,
    type: "Архетип",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-09"
},
{
    name: "Выдержка резидента",
    descr: "Once per day, as a reaction when you\’re subjected to a condition, you can delay the onset of that condition for 1 round. This ability can be used to delay only the following conditions: asleep, confused, cowering, fascinated, fatigued, frightened, nauseated, panicked, paralyzed, shaken, sickened, staggered, and stunned. When a round of delay ends, you can spend 1 Resolve Point to extend the delay by 1 round. Time spent delaying counts against the condition\’s duration, and if another effect ends the condition before the delay ends, the condition doesn\’t affect you further.",
    lvl: 6,
    type: "Архетип",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-09"
},
{
    name: "Вызов",
    descr: "As a champion of a knightly order, you can focus your fury and attention on a single foe, forcing it to face your wrath. As a full action, you can move up to your speed and make a single attack against a foe able to see and hear you. If you have the trick attack class feature and the weapon you use qualifies for a trick attack, you can make this attack as a trick attack. Whether or not you move or make an attack, you can attempt to demoralize that foe, as per the Intimidate skill task. If your base attack bonus is greater than your total Intimidate skill bonus, you can use your base attack bonus in place of your total Intimidate bonus for this skill check. If you succeed at this check, for the duration of the shaken effect, the target is also off-target for any attack it makes that does not include you as a target. Once you use this ability against a foe, regardless of the result of your demoralize attempt, you can\’t use it on that target again for 24 hours.",
    lvl: 4,
    type: "Архетип",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС"
},
{
    name: "Высшая божественная сила",
    descr: "Your divine connection becomes immensely powerful. Once per day, you can cast the 5th- or 6th-level spell of your chosen connection as a spell-like ability. The save DC of these spells is equal to 10 + the spell\’s level + your key ability score modifier.",
    lvl: 18,
    type: "Архетип",
    subtype: null,
    category: "ПС",
    requirement: null,
    source: "МС"
},
{
    name: "Высшая псионическая сила",
    descr: "Your psychic powers have grown to grant you potent mental abilities. Once per day you can use one of the following abilities. The save DC of these abilities is equal to 10 + half your class level + your key ability score modifier.\n- Mass Synesthesia: As a standard action, you can scramble the senses of creatures, causing their sensory input to be processed by the wrong senses, such that noises trigger bursts of color, smells are perceived as sounds, and so on. You can target one creature per 2 class levels, no two of which can be more than 30 feet apart and all of which must be within 100 feet of you. Each target must succeed at a Will save or be staggered and forced to treat all creatures as having concealment for 1 round per class level you have. Abilities that negate or reduce the effects of concealment have no effect on mass synesthesia. This is a mind-affecting ability.\n- Psychic Crush: As a standard action, you can invade the mind of a single creature within 60 feet of you. You deal 15d8 nonlethal damage and cause the target to be sickened for 1 round per class level you have. If the target succeeds at a Fortitude save, it takes half damage and is not sickened. This is a pain effect.\n- Thought Shield: As a move action, you can grant yourself a +5 enhancement bonus to saving throws against mind-affecting effects for 1 round per class level you have. For this duration, you are also immune to spells and effects that allow creatures to read your thoughts.",
    lvl: 18,
    type: "Архетип",
    subtype: null,
    category: "ПС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Готовность к неприятностям",
    descr: "You gain Culture and Survival as class skills. For each of these skills that is already a class skill for you (or becomes a class skill) from a source other than this archetype, once per day you can choose to roll a check with that skill twice and take the best result.\nYou can attempt Engineering, Life Science, and Mysticism skill checks to identify creatures even if you are not trained in those skills. You can attempt Survival skill checks to endure severe weather while moving at your full overland speed and receive the bonus you would normally receive for moving at half your overland speed. You can also attempt Survival checks to live off the land while moving at your full overland speed.",
    lvl: 2,
    type: "Архетип",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Готовность ко всему",
    descr: "As an advance scout and planner for larger expeditions, you have trained yourself to be ready for nearly anything. This experience and expertise at planning gives you a number of abilities.\nWhen you are able to act in the surprise round of a combat, you gain a +2 bonus to your initiative check for that combat.\nWhen you successfully identify a creature with a skill check, you learn one more useful piece of information than normal. When you reach 11th level in the class with which you took this archetype, you instead learn two more pieces of useful information than normal.\nWhen you attempt a Culture check to decipher writing, there is no chance you will misconstrue the message (though you might still be unable to translate it), and you can take 20 on Culture checks to decipher writing even if you are not trained in Computers and don\’t have access to a computer or downloaded dataset.",
    lvl: 4,
    type: "Архетип",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Дипломатическое обучение",
    descr: "You gain Culture and Diplomacy as class skills. For each of these skills that is already a class skill for you (or becomes a class skill) from a source other than this archetype, you learn to speak and read a new language.\nIn addition, you can use your Diplomacy skill for Intimidate checks to demoralize a target and your Culture skill for Life Science checks to identify humanoids and monstrous humanoids. When you fail a Diplomacy check to change a creature\’s attitude, the creature\’s attitude worsens only if you fail the check by 10 or more.",
    lvl: 2,
    type: "Архетип",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-09"
},
{
    name: "Защищённая атака",
    descr: "You have learned to use the strong plates and defensive abilities of your heavy armor to protect your weapon. When wearing heavy armor or powered armor, you gain a +4 bonus to your KAC against disarm and sunder combat maneuvers. You lose this bonus whenever you make a full attack, as it is impossible to protect your weapons while doing so.",
    lvl: 6,
    type: "Архетип",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "МС"
},
{
    name: "Исследователь магических предметов",
    descr: "As an Arcanamirium sage, you have an almost instinctual grasp over magic and hybrid items. You gain an insight bonus equal to half your class level to Engineering and Mysticism checks to identify and repair hybrid and magic items, and you don\’t need detect magic to determine whether an object is a magic item or to identify a magic item. You can also decipher magical inscriptions that would otherwise be unintelligible or, as a full action, identify any spells encoded in a spell gem, even if you aren\’t a spellcaster.\nYou gain access to the spell identify. If you have the spells class feature, you add identify to your list of spells known, and treat it as a spell on your class spell list. If you already have identify as a spell known, you instead gain an additional 1st-level spell known of your choice from your class spell list. If you do not have a class spell list or spells known, you gain identify as a spell-like ability you can cast twice per day.\nAdditionally, in typical settlements, you can find and purchase any hybrid or magic item with an item level up to your character level + 2. As normal, the GM can restrict access to some items regardless of their level.",
    lvl: 2,
    type: "Архетип",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "МС"
},
{
    name: "Компьютерный гуру",
    descr: "Whenever you use Computers to attempt to destroy or repair a system module, detect a fake shell, disable or manipulate a countermeasure or module, gain root access, or hack a computer system, and the target computer\’s tier is no higher than half your level, you can roll twice and take the higher result.",
    lvl: 6,
    type: "Архетип",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "МС"
},
{
    name: "Концентрированный огонь",
    descr: "When you and your bonded ally both ready an action to attack the same target and choose the same condition for the readied action, when you and your bonded ally make those attacks, use the highest of the two attack rolls (each attacker applies her own modifiers to the roll). If you and your bonded ally both hit the target, total the damage for both attacks before applying the target\’s DR or energy resistances.\nIn starship combat, when you and your bonded ally both attack the same opponent in the same round with a direct-fire weapon, use the highest of the two attack rolls (each attacker applies her own modifiers to the roll). If you and your bonded ally both hit the target, total the damage for both attacks for the purpose of determining how the target\’s Damage Threshold affects the damage.",
    lvl: 9,
    type: "Архетип",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "МС"
},
{
    name: "Магическая настроенность",
    descr: "You can wear up to three hybrid or magic items at a time and have them all function normally.\nYou also gain access to arcane sight, using the same rules as for gaining access to identify in magic item scholar.",
    lvl: 9,
    type: "Архетип",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "МС"
},
{
    name: "Магическая настроенность+",
    descr: "You can wear up to four hybrid or magic items at a time and have them all function normally.",
    lvl: 18,
    type: "Архетип",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "МС"
},
{
    name: "Манипуляции с камнями чар",
    descr: "Once per day, while holding a spell gem in your hand, you can cast the spell encoded within the gem using a spell slot of the same level or higher, just as though you were casting one of your spells known. The spell must be on your class\’s spell list and cannot require expensive materials as part of its casting. If the spell normally requires an expenditure of Resolve Points to cast, you must expend the same number of Resolve Points to use this ability. Using a spell gem this way doesn\’t expend the magic encoded within the gem. If you aren\’t a spellcaster, once per day you can instead cast a spell from a spell gem as though you were a spellcaster (expending the magic normally), as long as the spell gem\’s item level isn\’t higher than your character level.\nYou also gain access to augury, using the same rules as for gaining access to identify in the magic item scholar alternate class feature.",
    lvl: 6,
    type: "Архетип",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "МС"
},
{
    name: "Мастер пики",
    descr: "A Hellknight of the Order of the Pike can choose the pike mastery alternate class feature. As a standard action, you can grant a melee weapon you wield the reach special property. Alternatively, you can combine a melee weapon that already has the reach special property with a ranged weapon you are proficient with, allowing the conglomeration to act both as a melee weapon with reach and as a ranged weapon. Whichever option you select, it lasts until the weapon becomes unattended, the weapon is wielded by another creature, you choose to dismiss the effect, or you take a 10-minute rest to regain Stamina Points. You can use this ability once per day, plus one additional time per day at 12th level and at 18th level.",
    lvl: 6,
    type: "Архетип",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "МС"
},
{
    name: "Место истины",
    descr: "A Hellknight of the Order of the Scourge can choose the zone of truth alternate class feature. As a standard action, you can cast zone of truth as a spell-like ability. You can use this ability once per day, plus one additional time per day at 10th level and every 4 levels thereafter. The save DC is equal to 12 + your key ability score modifier.",
    lvl: 6,
    type: "Архетип",
    subtype: null,
    category: "ПС",
    requirement: null,
    source: "МС"
},
{
    name: "Низшая божественная сила",
    descr: "Choose a connection (as per the mystic class feature) that fits within your deity\’s ethos (subject to the GM\’s discretion). Your bond with your deity has grown strong enough for you to duplicate the effects of some of the connection spells, though you don\’t actually gain any connection abilities.\nOnce per day, you can cast the 1st- or 2nd-level spell of your chosen connection as a spell-like ability. At 10th level, you can use this ability twice per day, and at 14th level, you can use this ability three times per day. The save DC of these spells is equal to 10 + the spell\’s level + your key ability score modifier.",
    lvl: 6,
    type: "Архетип",
    subtype: null,
    category: "ПС",
    requirement: null,
    source: "МС"
},
{
    name: "Низшая псионическая сила",
    descr: "Your psychic abilities have grown strong enough to allow you to duplicate the effects of a few specific spells. Once per day, you can cast a spell from the following list as a spell-like ability: charm monster, clairaudience/clairvoyance, and psychokinetic strangulation. At 13th level, you can use this ability twice per day, and at 17th level, you can use this ability three times per day. The save DC of these spells is equal to 10 + the spell level + your key ability score modifier.",
    lvl: 9,
    type: "Архетип",
    subtype: null,
    category: "ПС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Передача мастерства",
    descr: "With just a few words, you can share your training with a bonded ally. As a move action, you can grant your bonded ally a single combat feat you have for 10 rounds, provided your bonded ally can see or hear you. The bonded ally must fulfill the feat\’s prerequisites and be able to use the feat. For example, a mechanic\’s drone can benefit only from feats that a drone can normally gain. If you have already granted your bonded ally a feat using this ability, the previous feat is lost.",
    lvl: 6,
    type: "Архетип",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "МС"
},
{
    name: "Перезарядка магических предметов",
    descr: "Once per day, you can expend 1 Resolve Point to refresh a magic item\’s daily charges, even if the magic item has already refreshed its charges for that day. The item level of this magic item can\’t be higher than your character level. This doesn\’t affect magic items that don\’t have charges that refresh each day.",
    lvl: 12,
    type: "Архетип",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "МС"
},
{
    name: "Подготовка лазутчика",
    descr: "You gain Bluff and Disguise as class skills. For each of these skills that is already a class skill for you (or becomes a class skill) from a source other than this archetype, you can learn to speak and read a new language. Alternatively, instead of learning a language this way, you can gain +2 insight bonus to one skill this archetype normally grants as a class skill.\nIn addition, you know how to establish a cover identity, obfuscating your Stewards connections. Your cover identity is of a single individual of your size and creature type, with a fake but established background. When using Disguise to take on the appearance of your cover identity, or when lying using Bluff to protect or supplement your cover identity, you treat the DC as 5 lower. People who meet you in your cover identity believe you to be that person until they learn otherwise. You can have only one cover identity at a time. Establishing or changing your cover identity takes 1 week.",
    lvl: 4,
    type: "Архетип",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-09"
},
{
    name: "Полевой ремонт",
    descr: "You\’ve spent enough time in strange lands, far from the safety of known civilization, to learn to patch up technology and vehicles—and even yourself and fellow travelers—using whatever is at hand. Once per day as a standard action, you can spend 1 Resolve Point to regain a number of Stamina Points equal to your class level (up to your maximum). Alternatively, you can take 10 minutes and spend 1 Resolve Point to restore Hit Points equal to your class level to one vehicle, piece of equipment, or creature. It is assumed you have gathered whatever materials you need to perform this action in your normal activities.",
    lvl: 6,
    type: "Архетип",
    subtype: null,
    category: "ПС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Призыв",
    descr: "A Hellknight of the Order of the Gate can choose the summon alternate class feature. As a standard action, you can cast summon creature as a spell-like ability with a spell level equal to one-third your class level. You can select only a single lawful creature to summon with this spell. You can use this ability once per day.",
    lvl: 6,
    type: "Архетип",
    subtype: null,
    category: "ПС",
    requirement: null,
    source: "МС"
},
{
    name: "Приказ",
    descr: "A Hellknight of the Order of the Nail can choose the command alternate class feature. As a standard action, you can cast command as a spell-like ability. You can use this ability once per day, plus one additional time per day at 9th level and every 3 levels thereafter. The save DC is equal to 11 + your key ability score modifier.",
    lvl: 6,
    type: "Архетип",
    subtype: null,
    category: "ПС",
    requirement: null,
    source: "МС"
},
{
    name: "Псионическая защита",
    descr: "Your psychic powers give you additional defenses against mental attacks. The first time you fail a saving throw against a spell or effect with the emotion, fear, mind-affecting, or pain descriptor, you can spend 1 Resolve Point as a reaction to immediately reroll the failed saving throw.\nEven if the second saving throw fails, your stronger defenses might reduce the effect of the spell or ability. If the spell or ability deals damage, reduce the damage done by an amount equal to your class level. If the spell or ability has a duration of 2 rounds or longer, reduce its duration by half.",
    lvl: 4,
    type: "Архетип",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Псионическая сила",
    descr: "Your psychic abilities have significantly strengthened, allowing you to duplicate the effects of specific higher-level spells. Once per day, you can cast a spell from the following list as a spelllike ability: confusion, mind probe, and telepathic bond. At 16th level, you can use this ability twice per day, and at 20th level, you can use this ability three times per day. The save DC of these spells is equal to 10 + the spell level + your key ability score\’s modifier.",
    lvl: 12,
    type: "Архетип",
    subtype: null,
    category: "ПС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Псионическое восприятие",
    descr: "You gain the power to sense mental abilities and the creatures who have them. As a standard action, you can spend 1 Resolve Point to activate your phrenic senses. This acts as the spell arcane sight, except you see only magic sources with the emotion, fear, mind-affecting, or pain descriptor. If you succeed at a Mysticism check to determine a source\’s school of magic, you also learn which of these descriptors apply to it. If you concentrate on a specific creature within 120 feet of you as a standard action to determine whether it has any spellcasting or spell-like abilities, you learn only that it does if at least one of those abilities has one of these descriptors, and you learn the caster level of only the most powerful of these abilities.\nWhile your phrenic senses are active, you also gain blindsense (emotion) with a range of 30 feet.",
    lvl: 6,
    type: "Архетип",
    subtype: null,
    category: "ПС",
    requirement: null,
    source: "ОКП"
},
{
    name: "Псионическое пробуждение",
    descr: "You gain limited telepathy, as per the lashunta racial trait. If your race already grants you limited telepathy (such as with the lashunta and shirren races), you instead increase the range of your limited telepathy by 60 feet.\nYou can also select two additional languages to act as languages that you can use only to communicate telepathically with creatures that know the language. If you learn the full version of a language in which you can only communicate telepathically through other means (such as investing ranks in the Culture skill), you can select a new language to be able to communicate telepathically in at the same time.\nAdditionally, you no longer need to meet the minimum Charisma requirement of the feat Minor Psychic Power or of any feat that has Minor Psychic Power as a prerequisite.",
    lvl: 2,
    type: "Архетип",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ОКП"
},
{
    name: "Пылающая атака",
    descr: "A Hellknight of the Order of the Furnace can choose the blazing attack alternate class feature. This acts as the anchoring attack alternate class feature, but it grants the flaming weapon fusion as a standard action to a single weapon of 2nd level or higher that the knight wields.",
    lvl: 6,
    type: "Архетип",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "МС"
},
{
    name: "Самоотдача",
    descr: "You can perform the first aid task of the Medicine skill as a move action on your bonded ally.\nIn addition, when you are adjacent to your bonded ally and your bonded ally is stable but not yet conscious, you can spend 1 Resolve Point as a full action to restore 1 Hit Point to your bonded ally. Your bonded ally can take actions as normal on her next turn, but you are staggered until the end of your next turn. To use this ability, your bonded ally must have fewer than one-quarter her maximum Resolve Points. You can use this ability if your bonded ally normally has no Resolve Points. You can\’t use this ability on the same bonded ally again until you have recovered your Resolve Points after an 8-hour rest or its equivalent, but if you change the target of your combat bond ability before that, you can use this ability on the new bonded ally, provided you have Resolve Points to spend.",
    lvl: 12,
    type: "Архетип",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "МС"
},
{
    name: "Священная атака",
    descr: "A Knight of Golarion can choose the holy attack alternate class feature. This acts as the anchoring attack alternate class feature, but it grants the holy weapon fusion as a standard action to any weapon of 2nd level or higher that the knight wields.",
    lvl: 6,
    type: "Архетип",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "МС"
},
{
    name: "Сила воли",
    descr: "Your dedication to your order and your advanced training has strengthened your mind against certain effects. Once per day, when targeted by a mind-affecting effect that requires a saving throw, you can roll twice and take the better result.",
    lvl: 12,
    type: "Архетип",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "МС"
},
{
    name: "Сотворение тьмы [Звёздный рыцарь]",
    descr: "A Hellknight of the Order of the Eclipse can choose the create darkness alternate class feature. As a standard action, you can create a 20-foot-radius zone of darkness centered within 20 feet of you. The zone negates the effects of all nonmagical light sources in its area and lasts for 1 minute. You can see as normal within the zone, and you can dismiss the effect as a standard action. Unless otherwise noted, any magic source of light can increase the light level in the area as normal. You can use this ability once per day, plus one additional time per day at 12th level and at 18th level.",
    lvl: 6,
    type: "Архетип",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "МС"
},
{
    name: "Тактический анализ",
    descr: "As a move action, you can analyze a creature\’s movement and defenses, trying to find a weakness. Attempt a skill check using the same skill you would use if you were trying to identify the creature (Engineering, Life Science, or Mysticism). You cannot take 10 or take 20 on this check, even if an ability would allow you to do so in combat. The DC for this check is equal to 15 + the creature\’s CR. If you succeed, you gain a +1 circumstance bonus to attack rolls against that creature until the end of your turn, and any weapon or spell attacks you make until the end of your turn ignore 5 points of the target\’s DR and energy resistances. Alternatively, you can spend a second move action to relay this information to your allies; until the beginning of your next turn, your allies\’ weapon and spell attacks can ignore 5 points of the target\’s DR and energy resistances, but allies do not gain a bonus to attack rolls.",
    lvl: 9,
    type: "Архетип",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "МС"
},
{
    name: "Требование капитуляции",
    descr: "As a full action, you can ready an action to attack a foe if it takes any actions other than the following: change grips (from two-handed to one-handed), combat banter, drop an item, drop prone, sheathe a weapon, or total defense; purely mental actions such as a lashunta\’s limited telepathy ability also do not trigger the attack. As part of the full action, you can attempt to demoralize that foe; if you successfully demoralize the foe, you also gain a +1 morale bonus to your attack roll if the readied action is triggered. If one of your allies attacks that foe before the readied action is triggered, you lose your readied action and your initiative count changes to the current initiative count for the remainder of the combat, as if the readied action had been triggered. Your allies can, however, also ready an action to attack your target without causing you to lose your readied action, provided that they choose the same trigger. If they do so and you have successfully demoralized the target, they also gain the +1 morale bonus to their attack rolls.\nAt 14th level, you can use this ability as a standard action. Alternatively, you can use this ability as a full action, readying a full attack and an attempt to demoralize the target as part of the action.",
    lvl: 9,
    type: "Архетип",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "МС"
},
{
    name: "Упорство резидента",
    descr: "When you take damage from a significant enemy while you still have Stamina Points, as a reaction you can reduce the damage you take by an amount equal to your level plus your key ability modifier. You can\’t use this feature if you\’re unaware of the enemy when the attack hits you or if you\’re flat-footed against the attack at the time. Once you benefit from this feature, you can\’t benefit from it again until you take a 10-minute rest to recover Stamina Points.",
    lvl: 12,
    type: "Архетип",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-09"
},
{
    name: "Хитрости лазутчика",
    descr: "You can gain either Improved Feint as a bonus feat or improved demoralize from this feature. If you choose Improved Feint and later gain that feat from another source, you can switch this feature to grant you improved demoralize. Improved demoralize allows you to attempt to demoralize as a move action.\nIn addition, while in your cover identity, you can reveal your Stewards identity as part of an attempt to demoralize or feint against creatures unaware of that identity. This application of infiltrator guile is language dependent, and creatures that suddenly learn your Stewards identity must have reason to avoid, dislike, or fear the Stewards. As a full action, during which you can draw a weapon, you attempt to feint against or demoralize all foes within 60 feet of you who can see and hear you. If you do, roll once against a DC equal to the highest DC required to affect any one of those foes. If you feint and have the Greater Feint feat, you can apply its benefit to only one affected foe.\nRevealing your Stewards identity carries risks. A creature who witnesses your Stewards identity can communicate it to others, compromising your cover. The GM can create consequences for having blown your cover identity. Further, creatures who know your Stewards identity can\’t be fooled by your cover identity.",
    lvl: 6,
    type: "Архетип",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-09"
},
{
    name: "Хранитель знаний",
    descr: "You can treat your full ranks in Computers as your ranks in all skills you have selected with the fast retrieval ability, and you don\’t need to spend Resolve Points to do so.",
    lvl: 18,
    type: "Архетип",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "МС"
},
{
    name: "Щит для другого",
    descr: "A Knight of Golarion can choose the shield other alternate class feature. As a standard action, you can cast shield other as a spell-like ability without having to spend a Resolve Point. You can use this ability twice per day, plus one additional time per day at 15th level and at 18th level.",
    lvl: 12,
    type: "Архетип",
    subtype: null,
    category: "ПС",
    requirement: null,
    source: "МС"
},
{
    name: "Эксперт маскировки",
    descr: "You can use the Disguise skill to make an impromptu disguise in 1d3 minutes, which can include programming a holoskin to aid you. These quick disguises don\’t stand up well to direct scrutiny, so someone who takes a move action to pierce your disguise treats the DC as 5 lower. In addition, you can use Disguise, taking the normal amount of time, to disguise yourself as a specific person.",
    lvl: 12,
    type: "Архетип",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-09"
},
{
    name: "Эксперт по броне",
    descr: "You gain proficiency with light armor. If you are already proficient with light armor, you instead gain proficiency with heavy armor. If you are already proficient with heavy armor, you instead gain a fortification ability when wearing heavy armor or powered armor. Your fortification gives you a 20% chance that a critical hit is treated as a normal attack, dealing normal damage and not applying any critical effect. You roll your fortification percentage chance before the critical hit\’s damage is rolled. If you have a fortification ability from another source (such as a force field), you instead increase the chance of a critical hit being created as a normal attack by 20% (to a maximum of 100%).",
    lvl: 2,
    type: "Архетип",
    subtype: null,
    category: null,
    requirement: null,
    source: "МС"
},
{
    name: "Якорная атака",
    descr: "A Hellknight of the Order of the Chain can choose the anchoring attack alternate class feature. As a standard action, you can apply the anchoring weapon fusion to any weapon you wield. You can use this ability once per day, plus one additional time per day at 9th level and every 3 levels thereafter. The weapon fusion remains active until the weapon becomes unattended or is wielded by another creature, or until you take a 10-minute rest to regain Stamina Points. This weapon fusion does not count toward the maximum number of levels of weapons fusions a weapon can have at once.",
    lvl: 6,
    type: "Архетип",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "МС"
},
{
    name: "Сокрушительный обстрел [Ависса]",
    descr: "Каждое существо, которому Ависса нанесла урон, ведя автоматический огонь из пулемёта, должно пройти испытание Воли со СЛ 12 и при провале потрясено на 1d3 раунда.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-02"
},
{
    name: "Глухой [Аката]",
    descr: "Акаты не могут совершать проверок Внимания, требующих слуха, и невосприимчивы к эффектам, требующим слуха.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-01"
},
{
    name: "Пустотная смерть [Аката]",
    descr: "Способ передачи: ранение. Испытание: Стойкости со СЛ 10. Трек: соматическая болезнь; Частота: 1 в день. Лечение: 2 испытания подряд.\nЭффект: нет латентной стадии, заражённое существо после смерти через 2d4 часа превращается в пустотного зомби.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "Болезнь",
    requirement: null,
    source: "СП-01"
},
{
    name: "Спячка [Аката]",
    descr: "В условиях нехватки еды акаты могут впать в долгую спячку. Когда акаты не есть в течение 3 и более дней, она может начать выделять волокнистый материал, который со временем затвердевает и превращается в кокон из звёздного металла нокваля. У кокона 30 ПЗ и твёрдость 30, он невосприимчив к огню и дробящему урону. Пока кокон цел, находящяяся внутри аката не получает повреждений. Аката остаётся в спячке, пока кокон не попадёт в условия невыносимой жары или пока в области действия слепого чутья не окажется живое существо – в таких случаях аката выбирается из кокона за 1d4 минуты, раскалывая его на части.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-01"
},
{
    name: "Уязвимость к солёной воде [Аката]",
    descr: "Брызги солёной воды наносят акате 1d6 урона, а полное погружение в солёную воду – 4d6 урона за раунд.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-01"
},
{
    name: "Сдавливание [Акрохор]",
    descr: "Когда акрохор успешно продлевает захват или обездвиживание противника, он автоматически наносит этому существу 3d4+12 дробящего урона.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-04"
},
{
    name: "Зависимость от солнечного света [Анацит]",
    descr: "Anacites are solar-powered constructs, although they can function at reduced capacity away from light. In areas of darkness, they gain the sickened condition.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Радиоволны [Анацит]",
    descr: "An anacite can communicate wirelessly. This acts as telepathy, but only with other creatures with this ability or constructs with the technological subtype.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Дребезг [Анацит-крылобот]",
    descr: "An anacite wingbot can create a shrill trilling noise as a standard action. Any creature within 30 feet, other than anacite wingbots, must succeed at a DC 9 Fortitude saving throw or be sickened for 1d3 rounds. Whether successful or not, a creature can\’t be affected by the same anacite wingbot\’s trill for 24 hours.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Реконфигурация [Анацит-рабочий]",
    descr: "Anacite laborers are capable of adapting and improving their designs. An anacite laborer has a number of built-in abilities equal to its CR divided by 3 (minimum 1), chosen from the list below. An anacite laborer can change these abilities by spending 1 uninterrupted hour for each ability it wants to change. The anacite laborer must also have access to an appropriate workspace for the duration. An ability can be gained only once unless stated otherwise. In addition, modifications other than those listed here might exist.\n- A sensor that grants blindsight (vibration) 120 feet.\n- Elongated arms that extend its reach by 5 feet.\n- A modified chassis that grants a burrow, climb, or swim speed equal to its base speed. This ability can be taken multiple times. Its effects do not stack. Each time it is taken, it applies to a new movement type.\n- Reinforced systems granting resistance 10 against a single energy type (acid, cold, electricity, fire, or sonic). This ability can be taken multiple times. Its effects do not stack. Each time it is taken, it applies to a new energy type.\n- Specialized plating that increases its AC by 2.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Защитная аура [Ангел, Барахий]",
    descr: "Any creature within 20 feet of a barachius (including the angel itself) gains a +2 divine bonus to its AC against attacks made by evil creatures and a +4 divine bonus to saving throws against effects created by evil creatures.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Стена огня [Ангел, Барахий]",
    descr: "A barachius can summon a wall of digitally empowered divine fury within 30 feet as a standard action. This wall takes the shape of a line 10 feet high and 20 feet long; though it doesn\’t need to emanate from the angel, the angel must be able to see every square the wall passes through. The wall lasts until the beginning of the angel\’s next turn. An evil creature caught within or that enters one of the wall\’s squares takes 2d6 damage (Will DC 17 half). An evil creature with the technological subtype takes twice this amount of damage.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Улучшение [Ангел, Барахий]",
    descr: "As a standard action, a barachius can touch a willing ally who is wielding a technological weapon or wearing technological armor. That creature receives a +1 divine bonus to attack rolls or to its AC (target\’s choice). This bonus last for 3 rounds and cannot be dispelled.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Нанитный клинок [Анхамут]",
    descr: "Меч анхамута состоит из тех же нанороботов, что и он сам, и считается, что на него установлены праведное и нанитнное сопряжения.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Неотвратимый натиск [Анхамут]",
    descr: "При совершении полной атаки анхамут может предпринять до трёх атак в ближнем бою вместо двух, но со штрафом -6 (вместо обычного -4).",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Разъединение [Анхамут]",
    descr: "В качестве основного действия нанороботы, составляющие тело анхамута, могут разъединяться, превращаясь в стаю миниатюрных существ. Обратное соединение также требует основного действия. Находясь в разъединённом состоянии, анхамут не может использовать нанитный клинок, но получает невосприимчивости стаи и полёт. Кроме того, в этой форме анхамут может напрямую взаимодействовать со многими технологическими устройствами и совершать проверки навыка Компьютер, как если бы у него был хакерский набор. Его общий бонус Скрытности в этой форме увеличивается до +24.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Электрический разряд [Анхамут]",
    descr: "В качестве основного действия анхамут может создать мощный электрический разряд на своём клинке (или между отдельными нанороботами, если находится в разъединённом состоянии) и выпустить его в цель в пределах 60 футов, совершив дистанционную атаку против её ЭКБ.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Изменчивость [Апари]",
    descr: "Virtually every part of an apari\’s internal physiology can be effectively repaired or replaced at a moment\’s notice as constituents rush to fill the needed role. An apari is immune to critical hits, and when an apari would take ability damage or drain to a particular ability score, it can instead distribute that ability damage or drain as it wishes across all of its ability scores (though it must take at least 1 point in the targeted ability score).",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Порождение составляющих [Апари]",
    descr: "Most aparis retain a force of combat-ready constituents waiting on call to defend the hive—or in dire circumstances, to sacrifice themselves to give the apari a better chance of escape. As a move action, an apari can spend 1 Resolve Point and lose 20 Hit Points to spawn a constituent in an empty adjacent square. An apari can use this ability only if it has 40 or more Hit Points.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Аура угрозы [Архон, энергетический]",
    descr: "Any creature hostile to the power archon within its aura of menace must attempt a Will saving throw. A creature that fails the save takes a –2 penalty to AC, attack rolls, and saving throws for 24 hours or until it deals damage to the archon. When the effect ends for a creature, that creature can\’t be affected again by the same archon\’s aura for 24 hours.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-09"
},
{
    name: "Удалённый доступ [Архон, энергетический]",
    descr: "A power archon can attempt Computers and Engineering checks at a range of 30 feet. A creature targeted by the archon or a creature attending or observing the archon\’s target can discern what the archon is doing with a successful DC 15 Perception check.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-09"
},
{
    name: "Электрический заряд [Архон, энергетический]",
    descr: "The power archon can unleash an electric bolt as a melee attack or ranged attack. Both versions can be used to deal nonlethal damage without penalty. The ranged attack has a range increment of 30 feet.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-09"
},
{
    name: "Прилипала [Астерай]",
    descr: "By touching a starship, an asteray can bond to the energy wake it leaves as it travels. This allows the fey to match speeds with the starship and ride along with it, treating the ship as if it were the “ground” so long as it remains within 100 feet. If the starship enters the Drift, the asteray can choose to accompany the ship into the Drift, or it can disengage as a reaction and remain behind.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Сенсорная песнь [Астерай]",
    descr: "An asteray can “sing” electronic signals that mask or mimic sensor readings. As a standard action, an asteray can create a false image of an object as if it had cast the 4th-level version of the spell holographic image (CL 12th). This false reading affects only electronic sensors. Multiple asterays can sing together, increasing the caster level by 1 for each asteray beyond the first singer for the purposes of determining the spell\’s range and area affected.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Негативные боеприпасы [Байкок]",
    descr: "В качестве части атаки или полной атаки огнестрельным оружием байкок может создать костяной снаряд или снаряды, заряженные негативной энергией. Боеприпасы появляются непосредственно в огнестрельном оружии байкока. Байкок неспособен создавать боеприпасы достаточно быстро для ведения автоматического огня. Половина наносимого этими боеприпасами урона – урон негативной энергией, и существо, поражённое такой атакой, должно пройти испытание Стойкости со СЛ 16, при провале оно парализовано на 1d3 раунда. При желании байкок может вести огонь обычными боеприпасами, но при этом не получает описанных преимуществ.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-06"
},
{
    name: "Поглощение души [Байкок]",
    descr: "В качестве основного действия байкок может поглотить душу мёртвого существа или существа при смерти рядом с собой. Существо при смерти может избежать этой атаки, успешно пройдя испытание стойкости со СЛ 18. При провале существо немедленно погибает. В случае если существо уже мертво, оно не может проходить но при этом с момента его смерти должно пройти не более 1 часа. Жертва этой способности не может быть воскрешена при помощи мистического исцеления 4 или более высокого круга (хотя возвращение к жизни и более мощные эффекты работают как обычно). Когда байкоку удаётся поглотить душу, он восстанавливает ПЗ в количестве, равном [2d10 + его КО], и на 4 раунда получает ускорение (аналогично одноимённому заклинанию). Это эффект с дескриптором \’смерть\’.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-06"
},
{
    name: "Ужасный вой [Байкок]",
    descr: "Один раз в день в качестве основного действия байкок может издать ужасный вой. Все живые существа в области взрыва радиусом30 футов должны пройти испытание Стойкости со СЛ16, при провале они парализованы ужасом на 1 раунд. При успехе существо вместо этого становится потрясено на 1 раунд. Это эффект дескриптором \’восприятие\’ и \’ужас\’.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-06"
},
{
    name: "Адаптация [Барату]",
    descr: "Тело взрослого барату крайне изменчиво и может адаптироваться практически к любой ситуации. Один раз за раунд в качестве быстрого действия барату может изменить своё тело и биохимию, чтобы получить одно из следующих свойств. Одновременно можно задействовать лишь одну адаптацию, каждая последующая заменяет собой предыдущую. барату способны и на гораздо более сложные изменения (на усмотрение ведущего), но процесс адаптации в этом случае может занять несколько дней.\n- Барату наносит атаками в ближнем бою дополнительный урон, равный удвоенному модификатору его Силы.\n- Бонус +4 (раса) к КБ.\n- Крепкие нижние конечности дают базовую скорость 20 футов.\n- Жёсткие пластины дают СУ 2/-\n- Дистанционная атака с параметрами, зависящими от КО барату: низкий модификатор атаки (+10 для большинства барату), дробящий урон ([1d6+5] для большинства барату) и шаг дистанции 60 футов.\n- Изменения на молекулярном уровне дают устойчивость 5 к одному типу энергии (звуку, кислоте, холоду или электричеству).\n- Зона досягаемости увеличивается до 15 футов.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Слияние [Барату]",
    descr: "Барату могут сливаться воедино и работать сообща как части большого организма. В качестве быстрого действия барату может слиться с другим находящимся рядом барату, образуя одно существо, занимающее пространство обоих барату, образуя одно существо, занимающее пространсво обоих барату. Слившийся барату теряет возможность совершать самостоятельные действия и добавляет текущее значение своих ПЗ к общим ПЗ объединённого существо. За каждых четырёх барату в составе объединённого существа его размер возрастает на одну категорию. В этот момент оно также выбирает одну адаптацию. Объединённое существо получает эту адаптацию и не может изменить её, пока не применит способность адаптация.Слиться может любое число барату, но каждую адаптацию можно выбрать лишь единожды (но в ом числе и получить устойчивость к нескольким типам энергии). Объединённое существо сохраняет способность заменить одну адаптацию один раз за раунд (а не один раз за каждого барату в его составе). В качестве действия полного хода объединённое существо может разделиться на составляющие, поровну разделяя между ними ПЗ. Для эффектов, зависящих от КО, КО объединённого существа равен наивысшему КО среди составляющих его существ.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Попутчик [Барату, молодой]",
    descr: "Early stage barathus are not experienced enough to helpfully combine with mature barathus but can still physically merge with them for protection. An early stage barathu can combine with a mature barathu via the latter\’s combine ability. Early stage barathus that are part of a combined creature contribute their Hit Points but not adaptations.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Выстрел незнакомца [Бледный незнакомец]",
    descr: "Пока бледный незнакомец использует короткоствольное оружие (даже сломанное или архаичное), он может совершать дистанционные атаки, не провоцируя внеочередных атак и не расходуя боеприпасов. При атаке бледный незнакомец может выбрать, будет он стрелять пулями (нанося колющий урон), электрическими разрядами (нанося урон электричеством) или лазерными лучами (нанося урон огнём), вне зависимости от используемого короткоствольного оружия и наносимого им урона. Подобные атаки не считаются архаичными и всегда совершаются против ККБ цели, даже если наносят энергитический урон. Кроме этого, если бледный незнакомец потратит быстрое действие, чтобы прицелиться, его следующая дистанционная атака в этом раунде игорирует плохую видимость и укрытие (в том числе и полное) и при попадании дополнительно наносит 1d6 урона.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-06"
},
{
    name: "Ацлантское ПО [Боевой робот Ацланти]",
    descr: "An Azlanti battle robot\’s programming is so meticulous that it is incapable of attacking an Azlanti human. However, its sensors aren\’t foolproof and a creature can deceive the robot with a successful Disguise check.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-09"
},
{
    name: "Дезинтеграционный луч [Боевой робот Ацланти]",
    descr: "An Azlanti battle robot has a disintegrator beam as a natural weapon built into one of its arms. This beam has a range increment of 30 feet and prevents the robot from wielding any other weapon that requires two hands.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-09"
},
{
    name: "Закреплённый камень вечных [Боевой робот Ацланти]",
    descr: "As a full action, an aeon stone can be slotted into (or removed from) an Azlanti battle robot\’s forehead while the robot is helpless, pinned, or willing. The robot gains the benefit of a slotted aeon stone provided the stone\’s item level is no greater than the robot\’s CR + 1.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-09"
},
{
    name: "Самоуничтожение [Боевой робот Ацланти]",
    descr: "When an Azlanti battle robot\’s Hit Points are reduced to 10 or fewer, it explodes on its next turn in a 10-foot-radius burst, even if it has already been destroyed. Creatures within range take 3d6 piercing damage (Reflex DC 14 half). As a full action that provokes attacks of opportunity, a creature adjacent to the robot can attempt a DC 24 Engineering check to disarm the self-destruct mechanism before it detonates.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-09"
},
{
    name: "Опрокидывающий разбег [Бородатая ренкрода]",
    descr: "Бородатая ренкрода не получает штрафов к проверке попадания при атаке с разбега и при попадании может немедленно (и без затрат действий совершить боевой манёвр сбивание с ног.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-02"
},
{
    name: "Рык [Бородатая ренкрода]",
    descr: "В качестве основного действия бородатая реинкрода может издать яростный рык, в результате чего все противники в радиусе 60 футов от неё потрясены на 1d4+1 раунда (испытание Воли со СЛ 13 отменяет эффект). Если реикрода совершает успешную атаку хвостом, то может использовать эту способность в качестве сопутствующего действия. Прорычав, реинкрода должна выждать 1d6 раундов, прежде чем сможет прорычать повторно. Это эффект с дескрипторами \’восприятие\’, \’разум\’ и \’ужас\’.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-02"
},
{
    name: "Луч света [Бриврат]",
    descr: "As an attack, a bryrvath can unleash a focused ray of light that can burn a target like the beam of a powerful laser rifle. This ray has a range increment of 120 feet, but it doesn\’t function in areas of bright light.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Невозможная аура [Бриврат]",
    descr: "Once per hour as a swift action, a bryrvath can emit an aura of colors that could not possibly exist; these inconceivable hues ravage the sanity of any creature that stands within them. This aura has a range of 15 feet and lasts for 5 rounds. A creature that begins its turn within or enters the aura must attempt a DC 23 Will saving throw. On a failure, the creature takes 1d4 Intelligence and Wisdom damage; a success means the creature takes 2d6 damage and is sickened until the beginning of its next turn. This is a mind-affecting, sense-dependent effect.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Поглощение света [Бриврат]",
    descr: "When a bryrvath is within 10 feet of any light source, it can absorb a portion of the light into its body as a move action. The bryrvath attempts a caster level check (DC = 11 + the item level if the source is an item, or the spell\’s caster level if the light comes from a spell); on a success, the light emitted from the target source is lowered by one step for 1 hour and the bryrvath regains 5 Hit Points.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Спектрорез [Бриврат]",
    descr: "In an area illuminated by dim light or brighter, a bryrvath can slash its claws through the air in a square adjacent to it, rending the spectrum into tatters. This produces a stationary anomaly of twisting and roiling, half-seen, non-Euclidean shapes that persists for 1d4 rounds. A creature that can see this anomaly at the start of its turn can attempt a DC 23 Will saving throw. If it fails, it is confused for 1 round; if it succeeds, it is instead dazzled for 1 round. This is a mind-affecting, sense-dependent effect.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Пустотный взгляд [Веолиск]",
    descr: "Веолиск служит живым воплощением темноты, давящего страха и безмерного одиночества глубокого космоса, и один его взгляд может передать частицу этой всепоглощающей пустоты. существо, провалившее испытание Воли со СЛ 16 против взгляда веолиска, приходит в замешательство до начала своего хода. Это эффект с дескриптором \’разум\’.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-03"
},
{
    name: "Силовой снаряд [Вичвард]",
    descr: "As a standard action, a witchwyrd can throw a magic missile (as per the spell of the same name; 1d4+1 force damage) from each free hand or hand that has absorbed a magic missile with the absorb force ability, to a maximum of two missiles per round. The witchwyrd can throw an additional force bolt from each hand that has absorbed a magic missile (maximum of two additional bolts per round), expending the absorbed energy.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Скользкий разум [Войоко]",
    descr: "The first time a woioko fails her saving throw against an enchantment spell or effect, she can attempt a second saving throw 1 round later.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-02"
},
{
    name: "Заражение волнистой плесенью [Волнистая плесень]",
    descr: "Способ передачи: ранение. Испытание: Стойкости со СЛ 16. Трек: соматическая болезнь; Частота: 1 в день. Лечение: 2 испытания подряд. \nЭффект: если жертва умирает от этой болезни, из её трупа немедленно появляется новая волнистая плесень, которая нападает на находящихся рядом существ.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "Болезнь",
    requirement: null,
    source: "СП-04"
},
{
    name: "Встроенные улучшения [Вратолом]",
    descr: "Вратолом может установить в своё тяжелобронированное тело до трёх улучшений брони (уровень предмета каждого из улучшений не может превышать КО враталома), при этом считается, что он носит тяжёлую или силовую броню. Установленные таким образом улучшения нельзя повредить или извлечь – это возможно лишь в случае, когда вратолом уничтожен и его тело уцелело.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-06"
},
{
    name: "Неумолимый разрушитель [Вратолом]",
    descr: "Вратолом может без штрафа использовать двуручное оружие, держа его одной рукой, и, будучи вооружён двумя подобными оружиями, может в качестве полной атаки совершиь одну атаку каждым оружием (получая при этом -6 к проверке каждой атаки и СЛ испытаний против особых свойств и критических эффектов оружия), даже если оно громоздкое. Кроме этого, вратолом может без штрафов использовать любое оружие, предназначенное для существразмером на одну категорию больше или меньше его собственного.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-06"
},
{
    name: "Парализующий запах [Врацинея]",
    descr: "Врацинея постоянно источает сладковатый аромат, который можно учуять в радиусе 15 футов от неё. Каждое живое существо, способное ощущать запахи, которое начало свой ход в области действия запаха или переместилось в неё, должно пройти испытание Стойкости со СЛ 13 и при провале парализовано на 1 раунд. Существо, успешно прошедшее испытание, невосприимчево к парализующему запаху этой врацинеи на 24 часа. Это эффект яда типа \’дыхание\’.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-01"
},
{
    name: "Приманка [Врацинея]",
    descr: "Любое живое существо, находящееся в пределах 120 футов от врацинеи и способное видеть её фиолетовые цветы, должно каждый раунд в начале своего хода проходить испытание Воли со СЛ 13 и при провале приближается к растению. Провалившая испытание цель должна в каждом раунде использовать 2 сопутствующих действия, чтобы на полной скорости перемещаться к врацинее, при этом держа её на линии видимости. Если единственный путь к врацинее идёт через опасную местность (например, поток лавы или заросли колючего кустарника), то непосредственно перед опасной областью существо получает возможность пройти повторное испытание, чтобы отменить эффект. оказавшись на расстоянии 5 футов от врацинеи, существо не совершает действий и не сопротивляется её атакам. Существо, успешно прошедшее испытание, невосприимчиво к приманке этой врацинеи на 24 часа. Это эффект с дескрипторами \’восприятие\’ и \’разум\’.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-01"
},
{
    name: "Высасывание жизни [Гараггакал]",
    descr: "В качестве основного действия гараггакал может потратить 1 ПР, чтобы высосать жизнь из одной цели, находящейся в пределах 30 футов. Цель получает 3d6 урона (испытание Стойкости со СЛ 13 снижает урон вдвое), а гараггакал – такое же количество временных ПЗ.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-01"
},
{
    name: "Фазовый переход [Гараггакал]",
    descr: "Гараггакал способен на мгновение сдвинуть по фазе своё физическое тело. В качестве действия полного хода он может потратить 1 ПР, чтобы пройти 15 или менее футов твёрдого материала. Если толщина препятствия больше, попытка заканчивается неудачей, но ПР и действия всё равно тратятся. Гараггакал не может использовать эту способность для продаления силовых эффектов, например силовых полей.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-01"
},
{
    name: "Мутирующее прикосновение [Геспер]",
    descr: "A hesper can deliver an enormous dose of radiation with a touch, triggering sudden mutations and pain in living creatures. With a successful attack against a living creature\’s KAC, a hesper causes the target to sprout tumors that erupt at the beginning of its next turn, causing a random mutation (roll 1d20 on the table below) that persists for 24 hours. An affected creature can negate this transformation with a successful DC 13 Fortitude saving throw. Once a creature has been affected by a hesper\’s mutating touch, it becomes immune to that particular fey\’s mutating touch for 24 hours.\nMutations:\n1 – Additional eyes: Target gains light blindness and a +4 bonus to sight-based Perception checks\n2–3 – Autonomous parasite: Target takes 1d6 slashing damage as a parasite emerges\n4–5 – Bioelectric cells: Technological items held by the target gain the broken condition for as long as the target holds them\n6–7 – Claws, spines, or teeth on one limb: Target gains a natural melee attack that deals 1d3+Str piercing damage for Medium creatures, but it takes a –2 penalty to attacks with two-handed weapons\n8–9 – Glowing tumors: Target sheds light as a lantern and takes a –5 penalty to Stealth checks\n10 – Gills: Target gains the amphibious ability, but takes a –2 penalty to Fortitude saving throws\n11 – Hypertrichosis: Target gains a +1 bonus to its AC, but the max Dex bonus of armor it wears decreases by 1\n12–13 – Musk gland: Target gains a 30-foot aura that nauseates living creatures within it (Fortitude DC = 10 + half the target\’s level or CR + the target\’s Con modifier)\n14–15 – Secondary ears: Target gains vulnerability to sonic damage and a +4 bonus to hearing-based Perception checks\n16–17 – Vestigial limb: Target grows a useless extra limb that imparts a –2 penalty to Dexterity-based skill checks\n18–19 – Weeping sores: Target takes a –2 penalty to Charisma-based skill checks\n20 – Wracking pain: Target is sickened",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Реакторная фея [Геспер]",
    descr: "If a hesper spends 1 hour in close contact with a starship\’s power core or another large power source (such as a fusion reactor), it can form a long-term bond. A hesper can merge with its bonded reactor, gaining fast healing 5 while it remains merged. A merged hesper is aware of what happens in the reactor\’s immediate vicinity, but if the reactor is broken or suffers the wrecked critical damage condition, the hesper is immediately expelled and takes 3d6 damage. If the reactor is destroyed while the hesper is merged with it, the hesper is slain instantly (Fortitude DC 15 negates). A hesper can bond with only one reactor at a time, and forming a new bond severs its previous bond. ",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Наскок [Гнилокост]",
    descr: "В качестве основного действия гнилокост может прыгнуть на расстояние до 15 футов, приземляясь в любой свободной клетке и провоцируя внеочередные атаки согласно обычным правилам. Каждое существо рядом с клеткой, в которой оказался гнилокост в конце перемещения, должно пройти испытание Реакции со СЛ 15 и при провале становится сбито с цели на 1 раунд, а при провале на 10 и более ещё и распластывается. Гнилокост может исключить из целей этой способности союзников в количестве равном модификатору его Интеллекта (2 для большинства подобных существ).",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-03"
},
{
    name: "Трупная адаптация [Гнилокостное поганище]",
    descr: "A carrion dreg gains additional abilities based on the body parts it has scavenged. Roll 1d6 and consult the table below to add one of these abilities randomly, or pick one.\nAbility:\n1 – Grasping Arms: The carrion dreg gains a climb speed of 20 feet. \n2 – Leathery Wings: The carrion dreg gains an extraordinary fly speed of 20 feet with clumsy maneuverability.\n3 – Rotting Fins: The carrion dreg gains a swim speed of 30 feet.\n4 – Rough Hide: The carrion dreg gains a +1 bonus to its KAC.\n5 – Sharp Fangs: The carrion dreg\’s bite attack deals an additional amount of damage equal to half the dreg\’s Strength modifier.\n6 – Solid Thews: The carrion dreg gains 10% additional Hit Points.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-07"
},
{
    name: "Парализующий взгляд [Горный угорь]",
    descr: "Один лишь взгляд фасетчатых глаз горного угря заставляет большинство живых существ застыть в оцепенении. Живое существо, начавшее ход в пределах 60 футов от горного угря и способное его видеть, должно пройти испытание Стойкости со СЛ 13 и при провале парализовано на 1 раунд. Существо, успешно прошедшее испытание, невосприимчиво к парализующему взгляду этого горного угря на 24 часа. На незрячих существ и других горных угрей эта способность не действует.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Двойственность [Двойная душа]",
    descr: "A twinsoul exists simultaneously on the Ethereal and Material Planes, occupying both planes at the same time. These two forms are always coterminous with one another, and if the twinsoul is reduced to 0 Hit Points on either plane, it dies. Because of its dual existence, as a move action a twinsoul can grant itself the benefit of flanking one target within its reach until the start of its next turn.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-09"
},
{
    name: "Планарное слияние [Двойная душа]",
    descr: "Once per day as a standard action, a twinsoul can meld its two forms until the start of its next turn, phasing slightly out of existence. While melded, a twinsoul has concealment and can pass through solid objects (excluding force effects such as force fields) on the Material Plane as long as it ends this movement outside any object. When the twinsoul returns to normal, it regains 8d6 Hit Points.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-09"
},
{
    name: "Эфирная уязвимость [Двойная душа]",
    descr: "A twinsoul takes half again as much damage (+50%) from kinetic attacks against its ethereal form originating on the Ethereal Plane. It also takes half again as much damage from force effects.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-09"
},
{
    name: "Пустотный разряд [Двойное эхо]",
    descr: "Двойное Эхо окружён клубящейся дымкой, из которой может выпускать энергетические разряды. Шаг дистанции этой атаки составляет 50 футов.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-06"
},
{
    name: "Разрушительные речи [Двойное эхо]",
    descr: "Один раз в день в качестве быстрого действия многочисленные рты лютого начинают говорить о всеобщем уничтожении. На протяжении следующих трёх раундов любой хаотичный злой последователь Пожирателя в радиусе 120 футов добавляет всем своим атакам критический эффект \’серьёзное ранение\’ (дополнительно к уже существующим критическим эффектам), если у атаки уже есть такой критический эффект, она вместо его СЛ увеличивается на 2. Если в течение этих трёх раундов лютый получает урон, эффект разрушительных речей сразу же завершается.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-06"
},
{
    name: "Разрывающий вихрь [Двойное эхо]",
    descr: "Когда Двойное Эхо в течение одного хода дважды успешно атакует одно и то же существо крушащим ударом или пустотным разрядом, он в качестве ответного действия может создать космический вихрь с центром на цели (испытание Реакции со СЛ 24). Двойное Эхо невосприичив к этому эффекту. После использования этой способности лютый может применить её повторно только через 1d4 раунда.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-06"
},
{
    name: "Желчь доминиона [Де-ноло]",
    descr: "Type poison (injury); Save Fortitude DC 22\nTrack Constitution (special); Frequency 1/round for 6 rounds\nEffect progression track is Healthy—Weakened—Debilitated—Dead\nCure 2 consecutive saves",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "Яд",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Зависимость от мозгов [Де-ноло]",
    descr: "A deh-nolo that has fewer than four collected brains gains 1 negative level for each missing brain. A deh-nolo\’s caster level is reduced by 2 for each negative level it gains from missing brains, and a deh-nolo with no collected brains can\’t cast any of its spells. These negative levels never become permanent, and they can be removed only by adding brains to the deh-nolo\’s collection. The statistics presented here assume a deh-nolo with a full collection.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Открытые нервы [Де-ноло]",
    descr: "When a deh-nolo takes more than 20 damage from a single attack, each creature adjacent to that deh-nolo must succeed at a DC 22 Reflex save or be sprayed with a foul poison as the pustules all over the deh-nolo\’s body erupt. Creatures hit by this spray are exposed to dominion bile.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Сбор мозгов [Де-ноло]",
    descr: "A deh-nolo can store up to four brains of Small or Medium creatures and use them to enhance its knowledge and power, learning a single language known by the former owner of each stored brain. A deh-nolo can extract a brain from a helpless opponent with a coup de grace action that kills the opponent, or it can do so as a standard action from a body that has been dead no longer than 1 minute.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Ситезированный снаряд [Де-ноло]",
    descr: "Once per round as a standard action, a deh-nolo can concentrate the crystallized, metallic discharge it produces and expel it through a tear in its flesh. This attack deals 1d4 damage to the deh-nolo. A deh-nolo can fire the projectile at a target up to 60 feet away as a ranged attack that deals 4d8+14 piercing damage. A deh-nolo can augment the projectile in one of two ways. It can coat the projectile in dominion bile (see below) to poison its target, or it can sacrifice a spell slot to charge the projectile with energy. A projectile charged in this way deals an additional 1d6 acid, cold, electricity, or fire damage (deh-nolo\’s choice) for each level of the spell slot sacrificed in this way.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Двойной укус [Джабснат]",
    descr: "Если при атаке укусом джабснат промахнулся, он может в качестве сопутствующего действия совершить повторную атаку другим ртом, но со штрафом -4.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-05"
},
{
    name: "Ледолаз [Дракон, белый]",
    descr: "A white dragon can move across icy surfaces without penalty and doesn\’t need to attempt Acrobatics checks to run or charge on ice. In addition, a white dragon can climb icy surfaces as if under the effect of spider climb.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "В лесу как дома [Дракон, зелёный]",
    descr: "A green dragon can move through natural foliage at full speed without taking damage or suffering impairment. Areas of foliage that have been magically altered affect it normally.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Звукоподражание [Дракон, синий]",
    descr: "A blue dragon can mimic any voice or sound it has heard by succeeding at a Bluff check opposed by a listener\’s Sense Motive check.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "В трясине как дома [Дракон, чёрный]",
    descr: "A black dragon can move through bogs and quicksand without penalty at its normal speed.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Подсвечивающее сияние [Дроу-оружейник, высокорождённый]",
    descr: "As a standard action, a drow noble can cause all creatures and objects in a 5-foot-radius burst to shed a pale glow. Creatures outlined by the limning light take a –20 penalty to Stealth checks and don\’t benefit from the concealment usually provided by darkness. If an affected creature is benefiting from an effect such as invisibility, all others within line of sight of it become aware of its location. This effect lasts for a number of minutes equal to the drow level. This ability has a range of 100 feet.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Тёмная материя [Дрэлик]",
    descr: "This functions as the solarian stellar revelation of the same name. As a move action, the draelik can gain DR 2/— until he leaves graviton mode.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Тёмная сверхновая [Дрэлик]",
    descr: "As a standard action, a draelik who is fully graviton-attuned can deal 2d6 negative energy damage to all creatures within 10 feet. A creature that succeeds at a DC 13 Reflex saving throw takes half damage. In addition, the light level of the affected area is reduced by one step for 1 round. After a draelik uses this ability, he immediately becomes unattuned.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Взор Преисподней [Дьявол, вестник погибели]",
    descr: "As an attack, a dhalochar can shoot hellfire from its eyes at a single target. This attack has a range increment of 120 feet. The glare acts as if it had the unholy fusion.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Грузовая полость [Дьявол, вестник погибели]",
    descr: "A dhalochar has a sizable cavity within its body. This space can comfortably fit eight Large or smaller creatures (or four Huge creatures). Any creature inside is protected from the external environment, no matter how hostile, and can breathe as normal. A dhalochar has control over what enters and what leaves its cargo cavity. Entering or leaving a willing dhalochar requires a full action, during which the dhalochar cannot move. Creatures cannot enter an uncooperative dhalochar, but they can try to escape from inside as if they were attempting to escape being grappled.\nAlternatively, some dhalochars have this cavity replaced with a device capable of generating minor passages to Hell. This grants them the ability to cast 6th-level planar binding as a spell-like ability once per hour (to a maximum number of times per day equal to the dhalochar\’s Constitution modifier—nine times per day for most dhalochars), except they can call only devils. Called devils aren\’t trapped by this ability, and they aren\’t forced to do the dhalochar\’s bidding, though they are usually friendly to the dhalochar.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Облик конструкции [Дьявол, вестник погибели]",
    descr: "Despite being true devils, dhalochars have a number of immunities common to constructs. They are immune to ability damage, ability drain, death effects, disease, energy drain, exhaustion, fatigue, necromancy effects, negative levels, nonlethal damage, paralysis, sleep, and stunning.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Возрождение [Живая голограмма]",
    descr: "Полностью уничтожить живую голограмму в бою весьма затруднительно – когда её ПЗ снижаются до 0, она исчезает, но неисправный проектор восстанавливает её за 1d4 часа. Единственный способ избавиться от живой голограммы навсегда – найти её проектор и либо уничтожить его, либо починить. Живые голограмммы осознают, что их существование зависит от проектора, и будут защищать его любой ценой.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-04"
},
{
    name: "Неподвижность [Живая голограмма]",
    descr: "Живая голограмма может застыть, становять неотличимой от обычной голограммы. Она может взять 20 для проверок Скрытности, чтобы спрятаться у всех на виду, притворившись голограммой (как правило, среди других голограмм).",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-04"
},
{
    name: "Привязка [Живая голограмма]",
    descr: "Живая голограмма не может удаляться от своего проектора дальше, чем на 100 футов. Если это всё же произойдёт, голограмма немедленно уничтожается, хоть и не надолго (см. Возрождение).",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-04"
},
{
    name: "Световой удар [Живая голограмма]",
    descr: "В качестве атаки живая голограмма может на время сделать свой кулак (или оружие ближнего боя, если создатель решил снабдить её таковым) материальным – он считается естественным оружием и наносит дробящий урон. В случае критического удара атака создаёт яркую вспышку, и цель должна пройти испытание Реакции со СЛ 18, при провале становясь растерянной на 1 раунд.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-04"
},
{
    name: "Огромная пасть [Заарб]",
    descr: "A xaarb can use its swallow whole ability on creatures up to its own size.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-08"
},
{
    name: "Адаптивная стойкость [Изтептар]",
    descr: "Whenever an iztheptar succeeds at a Fortitude saving throw against a disease, an environmental hazard, or a poison, it receives a +2 insight bonus to Fortitude saving throws against the same disease, environmental hazard, or poison for the next 24 hours. This bonus also applies to Constitution checks for long-term stability and can stack up to +10. If an iztheptar survives exposure to a disease, environmental hazard, or poison for 3 days, it adapts and no longer needs to attempt saving throws against that specific affliction or hazard. If an iztheptar adapts to an affliction that can be cured without magic, the affliction is cured. An iztheptar loses this benefit if it spends more than 30 days without exposure to the affliction or hazard.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-08"
},
{
    name: "Адаптивное исцеление [Изтептар]",
    descr: "An iztheptar recovers quickly. The DC of Medicine checks to treat an iztheptar is 5 lower than normal. An iztheptar recovers Hit Points and ability damage at twice the normal rate and recovers from poison and disease in half the normal time. When an iztheptar regains all its Hit Points, it also regrows any lost limbs or organs associated with that Hit Point loss.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-08"
},
{
    name: "Биотехнологическая адаптация [Изтептар]",
    descr: "An iztheptar can install one additional biotech augmentation into one system that already has a biotech augmentation.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-08"
},
{
    name: "Прирождённый биоинженер [Изтептар]",
    descr: "An iztheptar is intuitively adept at Life Science and Medicine. It can use Life Science to craft, identify, and repair biotech.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-08"
},
{
    name: "Отскок [Каукарик]",
    descr: "Когда по каукарики попадают внеочередной атакой, он может в качестве ответного действия совершить проверку Акробатики. Если результат проверки равен или превысил результат проверки атаки противника, эта внеочередная атака промахивается, а каукарики получает бонус +1 (боевой дух) к проверкам атаки и урона до конца хода.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-02"
},
{
    name: "Яд каукарики [Каукарик]",
    descr: "Способ передачи: ранение. Испытание: Стойкости 11. Трек: Ловкость; Частота: 1 в раунд до 6 раундов. Лечение: 1 испытание.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "Яд",
    requirement: null,
    source: "СП-02"
},
{
    name: "Челюстные придатки [Кейпин]",
    descr: "Instead of a lower jaw, a caypin has a mass of writhing eyestalks that grant the creature sight and also chew its food with tiny, lamprey-like mouths. As a move action, a caypin can detach these appendages (or reattach any adjacent appendages), which are capable of ambulating on their own and transmitting visual data back to the caypin. An appendage that moves farther than 100 feet from the caypin\’s body immediately dies.\nWhile caypin appendages are harmless individually, they become more formidable in groups. A caypin has enough appendages to form up to two such groups at once. While detached, the appendages share a single set of actions with the caypin and act on the caypin\’s initiative count. Each group of appendages has the aquatic subtype and is amphibious as per the universal creature rule; darkvision to a range of 60 feet and low-light vision; 18 Hit Points; and a base speed of 20 feet and a swim speed of 15 feet. A group of appendages takes up 5 feet of space and has a 5-foot reach. When applicable, a group of appendages uses the caypin\’s Armor Class, saving throw bonuses, skill check bonuses, and other qualities.\nAs a standard action, a group of appendages can enter an adjacent creature\’s square without provoking an attack of opportunity from that creature. When in another creature\’s square, the appendages can attack that creature as a swift action (using the caypin\’s bite attack bonus and damage). Multiple groups of caypin feeding appendages cannot share a space with the same creature at once. Other than this ability to swarm an opponent, a group of appendages cannot attack.\nIf all of a caypin\’s appendages are detached, the creature can see only what its detached appendages see. If all of a caypin\’s appendages are destroyed but the caypin still lives, the creature has the blinded condition for 3 days, after which it grows new appendages that function as normal.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Бессмертный [Келликстриан]",
    descr: "Драконы времени взрослеют, но умереть от старости не могут.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-09"
},
{
    name: "Чужеродное присутствие [Келликстриан]",
    descr: "Аналогично пугающему присутствию, но накладывает ошеломление на 2d4 раунда.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-09"
},
{
    name: "Самоликвидация [Кибернетический зомби]",
    descr: "A cybernetic zombie self-destructs when it is reduced to 0 HP, dealing an amount of electricity damage equal to 1d6 + the zombie\’s CR to all creatures in a 10-foot-radius burst. A creature can attempt a Reflex saving throw to reduce this damage by half. This ability destroys any cybernetic or technological components that could have been salvaged from the zombie.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Прицельный выстрел [Клара-247]",
    descr: "При совершении дистанционных атак игнорируйте бонусы цели к КБ от укрытия или частичного укрытия (но не от надёжного или полного укрытия).",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-01"
},
{
    name: "Леденая корона [Коменид]",
    descr: "While a comanide wears its icy crown, the fey emanates a glowing cloud of frigid plasma in a spherical radius of 30 feet. This aura casts normal light in a 30-foot radius, and dim light for an additional 30 feet. While within the aura, the comanide has fire resistance 10. Creatures other than comanides that end their turns in the aura take 3d6 cold damage (Fortitude DC 17 half). A comanide can apply or remove its crown as a move action. The crown can be sundered (hardness 2, HP 35), and it can be taken from the comanide with a successful disarm combat maneuver or when a foe successfully renews a grapple. A non-comanide wearing the crown emits light and gains cold resistance 10 so long as the comanide lives.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-09"
},
{
    name: "Облик кометы [Коменид]",
    descr: "As a full action, a comanide can fly up to 240 feet in a straight line, trailing a dazzling jet of plasma. This movement doesn\’t provoke attacks of opportunity, and the comanide can make one claw attack against each creature it can reach during this movement, taking a –4 penalty to each attack roll. A creature within 30 feet of the comanide that can see it during this movement must succeed at a DC 17 Will saving throw or become fascinated for 1 round. Once the comanide uses this ability, it can\’t use it again until after it rests for 10 minutes.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-09"
},
{
    name: "Нестабильный хламолазер [Космогоблин]",
    descr: "Лазерный пистолет космогоблина представляет собой мешанину из сломанных кусков пластика, подтекающих энергоячеек и тому подобного мусора. В остальном хламолазер аналогичен лазерному пистолету \’Азимут\’, но его шаг дистанции всего 60 футов. Если при проверке атаке хламолазером выпадет натуральная 1, атакующий должен немедленно совершить проверку Инженерного дела со СЛ 18. При успехе хламолазер ломается. При провале оружие взрывается через [1d3 - 1] раунда, аналогично осколочной гранате I (взрыв [1d6 Ко, 15 футов]), испытание Реакции со СЛ13 снижает урон вдвое); результат в 0 раундов означает, что хламолазер взрывается сразу же, - случайным образом определите угол клетки владельца, который станет центром взрыва. При метании шаг дистанции хламолазера аналогичен таковому у гранаты (20 футов).",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Нюх на кости [Костоед]",
    descr: "A crest-eater\’s sense of smell is keenly attuned to the minerals it needs to survive. It can sniff out natural deposits of calcium, and it gains blindsense (scent) against creatures that have taken Constitution damage from its attacks in the past hour.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Растворение костей [Костоед]",
    descr: "A crest-eater\’s bite delivers a magical venom that dissolves certain minerals in its victim\’s body, liquefying that creature\’s bones. Each bite attack that deals damage also deals 1 Constitution damage. A target can negate this damage with a successful DC 13 Fortitude save.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Растворяющий плевок [Костоед]",
    descr: "As a standard action, a crest-eater can make a ranged attack against the KAC of a single target within 30 feet, spitting its bone-liquefying venom. If struck, the target must succeed at a DC 13 Fortitude save or take 1 Constitution damage.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Грудная клетка [Кровник]",
    descr: "If a bloodbrother begins its turn grappling a creature that is Large or smaller, it can attempt a grapple combat maneuver as a standard action to transfer the creature into its rib cage prison. A creature in a bloodbrother\’s rib cage prison has the grappled condition. As a reaction, a bloodbrother can force a creature in its rib cage prison to attempt a DC 15 Fortitude saving throw; on a failed save, the creature takes 1 point of Constitution damage. Any round that a creature in its rib cage prison takes this Constitution damage, the bloodbrother gains fast healing 5 for that round only; the above statistics assume a bloodbrother has a Small animal with a current Constitution score of 5 (its maximum Constitution score is 10) trapped in its rib cage prison at the beginning of combat. A bloodbrother can have only one creature in its rib cage prison at a time; if it imprisons a new creature, it must release the creature currently in its rib cage. Releasing a creature does not require an action.\nDescription",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Холод [Кровник]",
    descr: "A bloodbrother\’s body generates intense cold, dealing 1d6 cold damage to any creature that hits it with a natural weapon or unarmed strike and to any creature the bloodbrother hits with its slam attack. A creature that begins its turn grappled by a bloodbrother also takes this damage.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Кислотный плевок [Ксарик]",
    descr: "В качестве основного действия ксарик может один раз за каждые 1d4 раунда выплюнуть сгусток кислоты в цель в пределах 60 футов.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Трупные споры [Ксарик]",
    descr: "Способ передачи: ранение. Испытание: Стойкости со СЛ 13. Трек: соматическая болезнь; Частота: 1 в день. Лечение: 2 испытания подряд.\nЭффект: когда заражённое существо достигает стадии \’в коме\’, из его плоти выбираются и уползают прочь 1d10 + 10 миниатюрных ростков ксарика. После этого болезнь прекращается, а жертва получает по 1 колющему урону за каждый росток.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "Болезнь",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Усвоение адаптации [Ксарик]",
    descr: "Каждый раз, когда ксарик наносит урон живому существу щупальцем, он перенимает часть его генетического кода и псионических волн, чтобы временно перестроить своё тело и разум по его образу и подобию. Это позволяет ксарику на 1 минуту получить одну из следующих способностей (если она есть у цели): дыхание под водой, ночное зрение (до 60 футов), слепое чутьё (до 60 футов), слепозрение (до 60 футов), скорость плавания (до 40 футов), полёта (до 40 футов и манёвренность вплоть до средней) или рытья (до 40 футов), СУ (до 5/-) или устойчивость к одному типу энергии (не более 20). Также ксарик вместо этого может получить способность понимать до трёх известных цели языков (но не говорить на них), умения цели обращаться с оружием (ксарик может использовать двуручное оружие, держа его щупальцами) или заменить тип урона кислотного плевка на любой из типов энергетического урона сверхъестественной атаки цели. Ксарик может поддерживать не более одной адаптации одновременно, при получении новой адаптации предыдущая перестаёт действовать. Ксарик может потратить 1 ПР, чтобы увеличить длительность действия продолжительной адаптации на 8 часов, а также потратить 1 ПР, чтобы получить вторую адаптацию и поддерживать две адаптации одновременно.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Шип-дротик [Ксарик]",
    descr: "Ксарик может совершить дистанционную атаку, выстрелив одним из своих шипов. Шаг дистанции атаки - 100 футов, она наносит колющий урон и подвергает цель воздействию трупных спор.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Энтропийная рана [Культист пожирателя]",
    descr: "Культисты Пожирателя могут придать своим атакам частицу ненависти своего божества ко всему живому. Любое оружие ближнего боя, используемое культистом Пожирателя, получает дополнительный критический эффект \’кровопускание 1d4\’. Если у оружия уже есть критический эффект, то при нанесении критического удара культист сам решает, какой эффект применяется - оружия или энтропийной раны.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-02"
},
{
    name: "Искусный лжец [Культист-послушник]",
    descr: "Когда существо впервые успешно проходитпроверку Проницательности, чтобы раскусить ложь культиста-послушника, считается, что в результате выпала натуральная 1.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "МС"
},
{
    name: "Погибель мудреца [Куробозу]",
    descr: "Один раз в день, когда куробозу наносит противнику урон атакой в ближнем бою, он может в качестве ответного действия затуманить его разум. Цель проходит испытание Стойкости со СЛ 18 и при провале на 1d4 минуты становится застигнута врасплох, сбита с цели, а также лишается возможности каким-либо образом общаться и применять навыки, зависящие от Мудрости.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-06"
},
{
    name: "Чёрная гипоксия [Куробозу]",
    descr: "В качестве основного действия куробозу может вызвать у существ в 30-футовом конусе удушье, от которого не защищают даже системы жизнеобеспечения брони. Все цели проходят испытание Стойкости со СЛ 18 и при провале становятся утомлены на 1d4 минуты. Данная способность не действует на существ, которым не требуется дышать.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-06"
},
{
    name: "Очарование жертв [Кьёкор]",
    descr: "The force with which a kyokor destroys structures is laced with strange, ancient psychic energy. When a kyokor attacks a structure, all creatures within 100 feet with an Intelligence modifier of –3 or higher must succeed at a DC 25 Will saving throw or be stunned for as long as the kyokor is attacking a structure or any other creature within 100 feet. Each time the kyokor attacks a creature that a stunned victim can see, that victim can attempt a new saving throw. If a kyokor attacks a stunned creature, the stunned effect immediately ends. This is a mind-affecting fear effect.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Разрушение строений [Кьёкор]",
    descr: "A kyokor has an exoskeleton that is harder than most metals, and it can therefore use its body against urban structures with deadly effect. A kyokor\’s natural weapons ignore the hardness of all structures not made of adamantine alloy or a harder material. Against structures made of such materials, a kyokor\’s natural weapons ignore half of the structure\’s hardness.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Чутьё на толпы [Кьёкор]",
    descr: "Large concentrations of sentient creatures are like beacons of light that call to kyokors. A kyokor can sense groups of 2,000 or more intelligent creatures gathered together in a single settlement out to 5 miles. This ability does not allow a kyokor to know exactly how many creatures are in a given location, but it does allow it to pinpoint pockets of intelligent life and know which pockets are the most populous.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Разрушительные речи [Лютый]",
    descr: "Один раз в день в качестве быстрого действия многочисленные рты лютого начинают говорить о всеобщем уничтожении. На протяжении следующих трёх раундов любой хаотичный злой последователь Пожирателя в радиусе 60 футов добавляет всем своим атакам критический эффект \’ранение\’ (дополнительно к уже существующим критическим эффектам), если у атаки уже есть такой критический эффект, она вместо этого получает критический эффект \’серьёзное ранение\’. Если в течение этих трёх раундов лютый получает урон, эффект разрушительных речей сразу же завершается.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-04"
},
{
    name: "Парализующий взгляд [Молодой горный угорь]",
    descr: "Один лишь взгляд фасетчатых глаз горного угря заставляет большинство живых существ застыть в оцепенении. Живое существо, начавшее ход в пределах 60 футов от горного угря и способное его видеть, должно пройти испытание Стойкости со СЛ 13 и при провале парализовано на 1 раунд. Существо, успешно прошедшее испытание, невосприимчиво к парализующему взгляду этого горного угря на 24 часа. На незрячих существ и других горных угрей эта способность не действует.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-02"
},
{
    name: "Парализующее прикосновение [Морг]",
    descr: "A mohrg uses its clawed tongue to make its first melee attack each round. If a target is struck and damaged by this attack, it must succeed at a DC 18 Fortitude save or be paralyzed for 1d4 minutes.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-06"
},
{
    name: "Создание отродья [Морг]",
    descr: "A living humanoid creature slain by a mohrg\’s slam attack rises immediately as an occult zombie of a CR equal to the victim\’s CR or level. This zombie is permanently under the mohrg\’s control. The mohrg recovers 1d8+4 Hit Points from the surge of negative energy created by the spawning process.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-06"
},
{
    name: "Инфицированная телепатия [Наксикриот]",
    descr: "Способность аналогична телепатии, но Наксикриот может общаться с её помощью только с существами с шаблоном спорулянта.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-06"
},
{
    name: "Плевок [Наксикриот]",
    descr: "Шаг дистанции плевка Наксикриота составляет 30 футов.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-06"
},
{
    name: "Разъединение [Наксикриот]",
    descr: "В качестве основного действия Наксикриот может рассыпаться облаком спор, превращаясь в стаю миниатюрных существ. находясь в разъединённом состоянии, Наксириот получает защиту стаи, невосприимчивость стаи, тошнотворность (СЛ 24), атаку стаи (3d8+23 К и споры души) и скорость полёта 40 футов (Экс, средняя манёвренность), но не может использовать остальные атаки. Если наксикриот потеряет сознание или умрёт, он принимает истинную форму; в остальных случаях для возвращения в истинную форму ему требуется сопутствующее действие.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-06"
},
{
    name: "Споры души [Наксикриот]",
    descr: "Способ передачи: контакт. Испытание: Стойкости СЛ 24. Трек: Психическая болезнь; Частота: 1 в час, до 6 часов. \nЭффект: трек прогрессии Здоров – Ослаблен – Измотан – Сбит с толку – Порабощён; порабощённая жертва получает базовый шаблон спорулянта (см. ниже) и выполняет указания Наксикриота, как если бы находилась под действие заклинания приворот (чудовище); \’Порабощён\’ - конечная стадия.\nЛечение: 2 испытания подряд",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "Болезнь",
    requirement: null,
    source: "СП-06"
},
{
    name: "Воздушный камуфляж [Неболов]",
    descr: "В качестве быстрого действия неболов может сделать своё тело прозрачным. Если он находится в воздухе, когда применяет эту способность, то становится ошеломлён, но получает бонус +10 (раса) к проверкам Скрытности и может совершать их даже вне укрытий и областей плохой видимости.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-02"
},
{
    name: "Лассо [Неболов]",
    descr: "Неболов может плести и выпускать тонкие липкие нити, совершая дистанционную атаку против ККБ цели (шаг дистанции 50 футов), максимальная дальнобойность - 250 футов). Цель, в которую попала одна из этих нитей, получает указанный несмертельный Д урон и становится опутанной на 1 минуту. Опутанная цель не может удалиться от неболова далее того места, где она начала ход. В качестве сопутствующего действия неболов может пройти проверку боевого манёвра, используя модификатор атаки лассо +8, чтобы совершить перестановку цели, но при этом может перемещать её только ближе к себе; таким образом неболов может поднять в воздух цель среднего или меньшего размера. Существо может прекратить состояние опутывания при помощи успешной проверки Акробатики для освобождения со СЛ 23 или разорвать нить, нанеся ей как минимум 10 урона огнём или режущего урона (КБ нити равен КБ неболова). В качестве быстрого действия неболов может отбросить нить или натянуть её; одновременно неболов может поддерживать до трёх нитей.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-02"
},
{
    name: "Яд неболова [Неболов]",
    descr: "Способ передачи: ранение. Испытание: Стойкости 13. Трек: Сила; Частота: 1 в раунд до 6 раундов. Лечение: 1 испытание.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "Яд",
    requirement: null,
    source: "СП-02"
},
{
    name: "Повелитель воды [Небольшой элементаль воды]",
    descr: "Находящиеся в воде существа, атакующие элементаля воды, получают -1 к проверкам атаки и урона.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-07"
},
{
    name: "Тушение [Небольшой элементаль воды]",
    descr: "Прикосновение элементаля гасит немагическое пламя площадью не более 10x10 футов. Существо может рассеять прикосновением и магический огонь, аналогично заклинанию рассеивание магии (УЗ равен КО элементаля).",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-07"
},
{
    name: "Аура утомления [Некровит]",
    descr: "Любое существо, оказавшееся в пределах 30 футов от некровита, должно пройти испытание Стойкости со СЛ 21 и при провале становится утомлённым. Если существо уже утомлено, его состояние не изменяется. Существо, успешно прошедшее испытание, невосприимчиво к ауре этого некровита на 24 часа.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Повелитель нежити [Некровит]",
    descr: "В качестве основного действия некровит может подчинить себе одно существо-нежить в пределах 50 футов, аналогично заклинанию власть над нежитью (испытание Воли со СЛ 21 отменяет эффект). Если нежить неразумна, она остаётся под контролем некровита навсегда, разумная нежить, у которой есть значение Интеллекта, может каждый день проходить испытание повторно, чтобы освободиться. Существо, успешно прошедшее испытание, невосприимчиво к этой способности данного некровита на 24 часа. Суммарный КО подчинённой нежити не может превышать КО некровита более чем в два раза (26 для большинства некровитов).",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Гравитационный колодец [Нигиль]",
    descr: "Нигиль создаёт гравитационное поле в 5-футовой ауре вокруг себя, направляющее вектор силы тяжести в сторону ног нигиля. Этот эффект действует постоянно и для нигиля аналогичен заклинанию паучьи лапы. Любое существо, попавшее из невесомости в область действия ауры, должно пройти испытание Реакции со СЛ 15 и при провале распластывается.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Декомпрессионный взгляд [Нигиль]",
    descr: "Взгляд мёртвых глаз нигиля заставляет окружающих пережить некое подобие его смерти, ощущая как сжимаются их лёгкие. Когда живое существо, способное видеть и дышать, начинает свой ход в пределах 15 футов от нигиля, оно должно пройти испытание Стойкости со СЛ 15 и при провале получает 1d4 + 3 дробящего урона.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Отслеживание цели [НПС-механик]",
    descr: "В качестве сопутствующего действия этот персонаж ведущего может выбрать для отслеживания одного противника, получая при этом бонус +2 к проверкам атаки против этой цели. Этот же бонус используется для двухпоточного и четырёхпотокового отслеживания.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01\nстр.137"
},
{
    name: "Нокдаун [Нюар-головорез]",
    descr: "When a nuar enforcer scores a critical hit with a melee weapon that has no other critical effects, the attack gains the knockdown critical effect.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Вёрткий [Одео]",
    descr: "When a creature attempts a melee or ranged attack against an odheo and misses, the odheo can take a guarded step as a reaction.\nDescription",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-08"
},
{
    name: "Кровавый взрыв [Одео]",
    descr: "When an odheo dies, it pops in a mess of ingested blood and viscous slime. A creature adjacent to the odheo must succeed at a DC 10 Fortitude saving throw or become sickened for 1d4 rounds, after which that creature takes a –2 penalty to saving throws against disease for the next 24 hours. A creature that is already sickened when it fails this saving throw becomes nauseated for 1d4 rounds instead. Odheos are immune to the effects of this ability.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-08"
},
{
    name: "Электризованная пила [Ожившие механизированные инструменты]",
    descr: "В качестве действия полного хода инструменты могут совершить особый боевой манёвр против существа, которое они взяли в захват или обездвижили. Инструменты совершают проверку атаки ближнего боя против ККБ цели +4 и в случае успеха поддерживают захват, перемещают цель в пространство рядом с собой (перемещение не провоцирует внеочередных атак) и бьют электризованной пилой, нанося 1d6 + урона (режущий урон и урон электричеством). Пила обладает критическим эффектом кровопускание 1d4.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-09"
},
{
    name: "Шаткая походка [Оккультный зомби]",
    descr: "An occult zombie is always considered staggered and can never take more than a single move or standard action in a round. It can\’t take full actions.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Кавантина [Ома]",
    descr: "Once per day as a move action, an oma can sing a telepathic song that either encourages its friends or dispirits its foes. The oma can grant a +2 morale bonus to ability checks, attack rolls, and skill checks to all allies within 60 feet. Alternatively, the oma can cause all enemies within 60 feet who fail DC 24 Will saving throws to take a –2 penalty to ability checks, attack rolls, and skill checks. This bonus or penalty lasts for 8 rounds.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Электрический разряд [Ома]",
    descr: "An oma can strike foes with a blast of electrical energy that has a range increment of 120 feet. When an oma scores a critical hit with its electric discharge, the target must succeed at a DC 24 Reflex save or technological items held by the target are unusable and do not provide any benefit to their wielder for 1 minute.\nDescription",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Галлюциноген [Орокоран]",
    descr: "An orocoran\’s stomach fluids are laced with the narcotic black ichor of Aucturn. A creature hit with the orocoran\’s projectile vomit must succeed at a DC 16 Will save or be confused (as per confusion) for 1d4 rounds.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Рвотная струя [Орокоран]",
    descr: "As a standard action, an orocoran can spew a thin stream of vomit at a target within 30 feet. In addition to taking damage, a creature hit with this spray is subject to the orocoran\’s hallucinate ability.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Овотономия [Острокрыл]",
    descr: "Яйцо острокрыла покрыто теми же \’глазами\’, что и тело взрослой особи. любой из родителей, сконцентрировавшись, может смотреть через эти глаза, как через свои собственные, что позволяет во время охоты периодически проверять, не грозит ли яйцу опасность. Когда острокрыл концентрируется на яйце, он перестаёт следить за обстановкой вокруг себя самого. Органы восприятия также позволяют яйцу реагировать на события. Если оставленное яйцо замечает приближение угрозы (чаще всего любого существа, помимо острокрылов), оно выпускает несколько коротких лапок и пытается уползти в безопасное место со скоростью 10 футов в раунд. любой из родителей может самостоятельно направлять яйцо, используя ту же необычную связь, что позволяет смотреть его глазами.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Трёхмерная тактика [Охотник на акул]",
    descr: "Kalo sharkhunters are trained to fight in three dimensions. Whenever a kalo sharkhunter is fighting underwater, in zero-g, while flying, or in other situations where she isn\’t restricted to a single plane of movement, she gains a +1 bonus to attack rolls in any round in which she has moved, even if it\’s just a guarded step.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Перегрузка оружия [Охранный робот]",
    descr: "Один раз в день в качестве быстрого действия охранный робот может повысить напряжение, подаваемое на встроенную дуговую винтовку. Следующая дистанционная атака из этой винтовки получает бонус +2 (ситуативный) к проверке атаки и бонус к урону, равный КО робота (7 для большинства подобных роботов). При критическом ударе критический эффект дуга дополнительно наносит 1d6 урона электричеством.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-06"
},
{
    name: "Кратковременный разгон [Охранный робот класса \’Наблюдатель\’]",
    descr: "An observer-class security robot can expend a large store of energy to temporarily increase its processing power and attempt to avoid an attack. Once per day, it can reroll a failed Reflex saving throw with a +10 circumstance bonus.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Импульсный дротик [Панеллиар]",
    descr: "В качестве основного действия Панеллиар может выпустить в противника дротик из звёздной энергии, совершив дистанционную атаку (максимальная дальнобойность 60 футов) против ЭКБ цели. При попадании дротик наносит 1d10 + 6 урона огнём и обладает критическим эффектом \’поджигание 1d6\’.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-02"
},
{
    name: "Слепота из-за силовых полей [Паралит]",
    descr: "Force fields interfere with a paralith\’s perception. A paralith takes a –4 penalty to attack rolls and Perception checks against a creature that has an active force field armor upgrade or energy shield gained from the mechanic trick of the same name.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-08"
},
{
    name: "Ультрафиолетовая инфекция [Паралит]",
    descr: "A creature struck by a paralith\’s melee attack must attempt a DC 13 Fortitude save. Failure means the wound becomes infected by ultraviolet light for 24 hours. An infected wound glows, dealing a –4 penalty (that doesn\’t stack) to the victim\’s Stealth checks. If another creature restores Hit Points to the infected victim using the Medicine skill, the creature administering the healing takes an amount of untyped damage equal to the number of Hit Points restored.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-08"
},
{
    name: "Отключение жизнеобеспечения [Покинутый]",
    descr: "Покинутый получает бонус +5 к проверкам Инженерного дела для отключения систем жизнеобеспечения и аналогичных устройств.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Удушение [Покинутый]",
    descr: "Когда покинутый успешно совершает боевой манёвр захвата, цель должна пройти испытание Стойкости со СЛ 18. При провале цель получает 1d12+10 дробящего урона и 1d4 урона Выносливости. при успехе цель уменьшает дробящий урон вдвое и не получает урона Выносливости.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Нерабочие конечности [Преображённый]",
    descr: "Преображённые не могут использовать ни оружие, ни предметы, для активации которых требуется действие.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-04"
},
{
    name: "Зашифрованная болтовня [Пустозвон]",
    descr: "Пустозвон прекрасно умеет передавать зашифрованные сообщения, встраивая их в свои бредни. Когда существо проходит проверку Проницательности, чтобы расшифровать переданное им секретное сообщение, оно совершает двойной бросок и берёт худший результат.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-05"
},
{
    name: "Звёздное одеяние [Пустотная карга]",
    descr: "Three times per day as a standard action, a void hag can release the energies of the cosmos stored within her robes. Creatures within 30 feet of the void hag each take 2d6+10 force damage and are outlined in glowing motes of stellar energy for 2d4 rounds. An outlined creature takes a -20 penalty to Stealth checks and doesn\’t benefit from the concealment normally provided by displacement, invisibility, or similar effects. A target that succeeds at a DC 19 Reflex saving throw halves this damage and negates the outlining effect. Other void hags are immune to this ability.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Гравитационная пустота [Пустотная пальма]",
    descr: "Once per day as a full action, a void palm can create a dark, zero-gravity area in a 20-foot-radius sphere centered on itself, negating the effects of gravity and nonmagical light sources in that area. Magical light sources in the area work normally. When the void palm uses this ability, each other creature in the area must succeed at a DC 17 Reflex saving throw or become off-kilter. The effect doesn\’t move with the void palm and lasts for 10 minutes.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-08"
},
{
    name: "Пустотные ветви [Пустотная пальма]",
    descr: "When seen in black and white, such as with darkvision in darkness, the pattern on a void palmfs fronds resembles a dim and distant field of stars. The effect is disorienting. As long as the void palm is in an area of darkness, it has concealment against creatures observing it with darkvision, and such creatures are flat-footed against the palm\’s attacks.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-08"
},
{
    name: "Внутреннее облучение [Радиационный дрейк]",
    descr: "A creature that takes Hit Point damage from the radiation drake\’s attacks is exposed to medium radiation. This radiation bypasses armor environmental protections.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-08"
},
{
    name: "Впивание [Раужант]",
    descr: "A rauzhant that hits with a bite attack automatically initiates a grapple combat maneuver against its target (this does not take an action). If successful, the rauzhant remains attached to the target until the end of the dragon\’s next turn, unless it succeeds at another grapple combat maneuver (with a +4 bonus) during its next turn. The target can break the clutch with a successful DC 30 Acrobatics check to escape. The rauzhant can\’t use its bite attack while it is clutching a target, and the target can\’t regain Stamina Points while a rauzhant is clutching it.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-01"
},
{
    name: "Зависимость от амосферы [Раужант]",
    descr: "A rauzhant depends on an atmosphere rich in hydrogen and helium for its flight. In any other kind of atmosphere, it must hold its breath and its fly speed is reduced to 30 feet (clumsy maneuverability).",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-01"
},
{
    name: "Зависимость от слепозрения [Раужант]",
    descr: "A rauzhant that loses its blindsight ability gains the blinded condition.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-01"
},
{
    name: "Полосование [Раужант]",
    descr: "When a rauzhant succeeds at a grapple combat maneuver while clutching a target, it can make two claw attacks against that target as a move action.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-01"
},
{
    name: "Крепление камня вечных [Робот-адъютант]",
    descr: "The body of every Azlanti adjutant robot contains a slot to house a single aeon stone, usually in the center of its faceplate. A slotted aeon stone doesn\’t provide its usual bonus, but instead gives the robot a bonus equal to half the aeon stone\’s level (minimum +1) to saving throws against effects that deal energy damage and effects that specifically target constructs or electronic systems. As a standard action, the robot can burn out the slotted aeon stone to recover a number of Hit Points equal to 5 times the aeon stone\’s level. An aeon stone burned out in this way is forever nonmagical and does not provide this or any other robot with any bonus to saving throws. Removing or slotting an aeon stone into an Azlanti adjutant robot is a full action.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-07"
},
{
    name: "Дуговой разряд [Робот-патрульный]",
    descr: "В качестве основного действия каждые 1d4 раунда робот-патрульный может выпустить разряд электричества, поражающий до 4 существ в пределах 40 футов (все в пределах 30 футов друг от друга). он наносит 1d8 урона электричеством каждой цели (испытание реакции со СЛ 13 уменьшает урон вдвое).",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Ремонтные наноботы [Робот-патрульный]",
    descr: "Робот-патрульный оснащён ремонтными нанороботами, которые каждый час восстанавливают ему ПЗ в количестве, равном его КО (4 ПЗ для большинства подобных роботов). Один раз за день в качестве действия полного хода робот-патрульный может восстановить 3d8 ПЗ себе или конструкции с подтипом \’технологический\’, которой он коснётся.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Разум Роя [Рой]",
    descr: "Все члены Роя связаны воедино при помощи феромонов, малозаметных движений усиков и конечностей, электростатических полей или телепатического общения. Существа Роя, находящиеся в пределах 30 футов друг от друга, постоянно общаются между собой, и если кто-то узнаёт о присутствии врага, об этом узнают и все остальные (причём подобное знание может распространятся по цепочке и в определённых обстоятельствах дойдёт даже до достаточно удалённых существ). Кроме этого, когда в пределах 30 футов от существа Роя находится другое существо Роя, оно один раз в раунд может совершить двойной бросок при испытании против эффекта с дескриптором \’разум\’ и взять лучший результат.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Кислотная пушка [Рой, корровокс]",
    descr: "A corrovox has an organic acid cannon grafted onto its forearm that can fire blobs of organic acid at a range increment of 40 feet. This weapon can\’t be disarmed and produces its own ammunition, so it never runs out.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Телепатический штурм [Рой, корровокс]",
    descr: "A corrovox can unleash a burst of harmful mental chatter at a target within 30 feet as a standard action. The target takes an amount of damage equal to 1d4 × the corrovox\’s CR (3d4 damage for most corrovoxes). A successful DC 12 Will save halves this damage.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Коса [Рой, косильщик]",
    descr: "A thresher lord has massive blades grafted onto its forearms, replacing its normal hands. A thresher lord can\’t wield any other weapons, but neither can it be disarmed.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Шквал клинков [Рой, косильщик]",
    descr: "При совершении полной атаки с использованием только ближнего боя косильщик получает штраф -3 к каждой атаке (вместо обычного -4). Кроме этого при совершенииполной атаки косильщик может предпринять до трёх атак вместо двух, при этом каждая атака получает штраф -5 вместо обычного.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Землепроходец [Саласк]",
    descr: "При определении скорости стратегического перемещения Саласк бездорожье считается для Саласк тропой, а тропа - шоссе.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-02"
},
{
    name: "Опытный снайпер [Саласк]",
    descr: "Саласк умеет оставаться спрятанной при стрельбе по удалённым целям. При совершении проверки Скрытности для выстрела из засады существа, находящиеся от неё на расстоянии 50 и более футов, получают -10 к проверкам Внимания при попытке её заметить. Штраф увеличивается до -20, если существо находится на расстоянии 150 и более футов.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-02"
},
{
    name: "Полёт в вакууме [Саркезианин]",
    descr: "Саркезианин может не дышать в течение 1 часа и не подвержен негативному воздействию вакуума. Потратив 1 ПР, саркезианин может увеличить длительность этого эффекта на 1 час за 1 КО, а потратив 2 ПР – на 2 часа за 1 КО. В вакууме саркезиане автоматически выпускают энергетические крылья, получая скорость полёта 120 футов (Св, средняя манёвренность). Крылья позволяют летать только в вакууме.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Демонтаж [Сборочная жижа]",
    descr: "As a full action, an assembly ooze can engulf an unattended piece of technological gear of no more than 5 bulk and with an item level no greater than its CR + 2 (3 for most assembly oozes) within reach of its pseudopod. Unless the object succeeds at a DC 12 Fortitude saving throw, the ooze moves into that object\’s space and deconstructs it into its component parts. The assembly ooze gains a number of virtual UPBs equal to the gear\’s price in credits. An assembly ooze can hold a maximum number of virtual UPBs equal to 100 × its Constitution modifier (400 for most assembly oozes). In addition, if an assembly ooze succeeds at a grapple combat maneuver against a creature with the technological subtype, that creature takes 1d6+1 acid damage. The assembly ooze gains 1 virtual UPB for every point of damage it deals in this way.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Монтаж [Сборочная жижа]",
    descr: "In a process that takes 1 uninterrupted minute, an assembly ooze can craft a random piece of technological gear using its store of virtual UPBs (see disassemble). An assembly ooze can craft a piece of technological gear of no more than 5 bulk with a cost equal to the number of virtual UPBs it spends, but with an item level no greater than its CR + 2 (3 for most assembly oozes). There is a 25% chance that a piece of gear an assembly ooze crafts has the broken condition. Roll 1d8 on the table below to determine what kind of gear the assembly ooze creates.\nGear:\n1 – Basic or advanced melee weapon\n2 – Small arm or longarm\n3 – Heavy weapon or sniper weapon\n4 – Grenade\n5 – Ammunition\n6 – Light or heavy armor\n7 – Armor upgrade\n8 – Technological item",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Зондирование [Серый пришелец]",
    descr: "A gray creates powerful psychic connections to creatures it touches, transferring information and sensations at terrifying speeds. A creature struck by a gray\’s touch (a melee attack targeting KAC) is staggered by sensory overload for 1d4 rounds unless it succeeds at a DC 15 Will save.\nAlternatively, if the creature it touches is conscious, intelligent, and paralyzed, a gray can instead use a standard action to probe the creature\’s mind. It can search for the answer to a simple question (such as, “What is your starship\’s point of origin?”) or seek information on one general topic known to the subject. The target can resist this probing with a successful DC 15 Will save. The gray can probe a single creature in this way only once per minute, but if it remains in contact with the subject for at least 1 minute, it can choose one Intelligence-based skill the subject has at least 1 rank in and attempt checks using the subject\’s skill modifier instead of its own for the next 24 hours.\nA gray can\’t employ this ability in both ways simultaneously, and using this ability to overload a target\’s senses interrupts its efforts to probe for information.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Сонный паралич [Серый пришелец]",
    descr: "As a standard action, a gray can paralyze a sleeping creature within 30 feet that it can see. A target that succeeds at a DC 15 Will save remains asleep and is immune to the same gray\’s sleep paralysis ability for 24 hours. A creature that fails the save awakens but is paralyzed for 1d6 minutes. Any attack or hostile action other than a gray\’s ability to probe for information ends this paralysis. If the paralysis is not interrupted and its duration ends, the victim falls back asleep and has no memory of the event, as if its memory were eliminated by modify memory. The victim can attempt a DC 15 Will save against the memory erasure; if it succeeds, it remembers the paralysis and probing but with imperfect clarity.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Фазовое смещение [Серый пришелец]",
    descr: "Grays exist slightly out of phase with the Material Plane. A gray can pass through walls or material objects (but not corporeal creatures) as long as it begins and ends its turn outside of any wall or obstacle. In addition, a gray always benefits from a 20% miss chance against attacks and effects targeting it directly and takes only half damage from area effects. Force effects, however, function normally against a gray.\nAs a standard action, a gray can paralyze a sleeping creature within 30 feet that it can see. A target that succeeds at a DC 15 Will save remains asleep and is immune to the same gray\’s sleep paralysis ability for 24 hours. A creature that fails the save awakens but is paralyzed for 1d6 minutes. Any attack or hostile action other than a gray\’s ability to probe for information ends this paralysis. If the paralysis is not interrupted and its duration ends, the victim falls back asleep and has no memory of the event, as if its memory were eliminated by modify memory. The victim can attempt a DC 15 Will save against the memory erasure; if it succeeds, it remembers the paralysis and probing but with imperfect clarity.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Телекинетический вихрь [Сеть камней вечных]",
    descr: "Once per day as a standard action, an aeon stone network can spiral around a Large or smaller creature or object that is completely in its space, negating gravity for that target while it\’s inside the vortex. The network can remain in this form for 4 rounds, but it can return to its normal form as a move action at any time. The target creature or object moves with the aeon stone network. A creature caught in the telekinetic whirlwind is off-target and must attempt a DC 17 Reflex saving throw at the end of each of its turns. On a failed save, the creature becomes off-kilter until the end of its next turn or until it leaves the aeon stone network\’s space, whichever comes first. A creature can leave the aeon stone network\’s space if it has some way to move itself in zero gravity or if, as a standard action, it succeeds at an Acrobatics skill check (DC = 10 + the network\’s KAC). On a success, the target moves to a square adjacent to the aeon stone network.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-08"
},
{
    name: "Удалённый взлом [Сеть камней вечных]",
    descr: "An aeon stone network has the remote hack feature as if it were a mechanic of a level equal to its CR.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-08"
},
{
    name: "Улучшение вечных [Сеть камней вечных]",
    descr: "An aeon stone network benefits from one aeon stone with an item level of its CR or lower.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-08"
},
{
    name: "Симбиоз [Симбрид]",
    descr: "As a full action, a symbiend that begins its turn attached to a living aberration, animal, dragon, humanoid, magical beast, or monstrous humanoid can connect to that creature\’s nervous system, granting it the abilities of the symbiend\’s template graft (see below). The two creatures effectively become one until the host is killed, the symbiend chooses to detach itself, or the symbiend is removed with a medical procedure (usually requiring a successful DC 25 Medicine check). An unwilling host can prevent this connection with a successful DC 15 Will save.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Синаптическая паутина [Синаптический червь]",
    descr: "Once every 1d4 rounds as a standard action, a synapse worm can regurgitate a viscous fluid in a 15-foot cone that expands on contact into sticky webbing along the ground and nearby walls. A creature that touches the webbing takes 2d6 acid damage and is dazed for 1 round. A successful DC 11 Reflex saving throw halves this damage and negates the dazed condition.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-07"
},
{
    name: "Присасывание [Скиттермандер-детёныш]",
    descr: "A skittermander whelp that hits with a bite attack automatically initiates a special combat maneuver against its target (this does not take an action) with a +4 racial bonus. If successful, the skittermander whelp moves into the target\’s space without provoking an attack of opportunity and attaches to the target. The whelp gains partial cover, (though not against attacks made by the target) as well as a +2 circumstance bonus to melee attacks and damage rolls, but it can attack only the creature to which it is attached. The target (or an ally adjacent to the target) can remove an attached skittermander whelp with a successful DC 10 Strength check as a move action.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Сплочённость [Скрилинг]",
    descr: "Скрилинги рождаются небольшими выводками и взрослеют бок о бок, поэтому привыкли действовать в бою совместно с другими скрилингами, обычно своим родичами. Когда два или более скрилинга берут одно существо в тиски, каждый из атакующих это существо скрилингов получает бонус +1 (ситуативный) к проверкам атаки против этой цели и при попадании наносит 1 урон кровотечением. такой урон складывается с аналогичным уроном других скрилингов, но не сам с собой (например, если два скрилинга взяли существо в тиски, то каждый из них сможет нанести по 1 урону кровотечением в каждом раунде, когда успешно атакует, но каждый скрилинг не может нанести больше 1 урона кровотечением в раунд).",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-03"
},
{
    name: "Камуфляж [Скрисир]",
    descr: "Бугристая кожа скрисиров помогает им сливаться с каменистой местностью холмов и гор, где они обычно обитают. Помимо обычного расового бонуса к Скрытности, скрисир, сохраняющий полную неподвижность в каменистой местности в течение 1 раунда, получает +10 (ситуативный) к проверкам Скрытности (эффект не складывается с невидимостью и подобными эффектами). если скрисир совершает любое действие, то теряет бонус, пока снова не проведёт 1 раунд в полной неподвижности.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-03"
},
{
    name: "Очарование [Скрисир]",
    descr: "Могучая воля скрисиров позволяет им изменять ход мыслей разумных существ. три раза в день в качестве основного действия скрисир может вторгнуться в сознание разумного существа. Цель слышит громкий телепатический визг, проходит испытание Воли со СЛ 17 и при провале попадает под эффект, аналогичный внушению. Существо, прошедшее испытание (вне зависимости от успеха), невосприимчиво к очарованию этого скрисира на следующие 24 часа. Это эффект с дескриптором \’разум\’. ",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-03"
},
{
    name: "Камуфляжная дымка [Слизистое облако]",
    descr: "Mucilaginous clouds are translucent, but their skin interacts with the environment to produce a camouflaging haze that matches the color of the surrounding atmosphere. While camouflaged, a mucilaginous cloud appears to be merely a patch of fog or a cloud. This camouflage provides a +10 bonus to Stealth checks while in fog, smoke, or clouds, and it allows a mucilaginous cloud to attempt a Stealth check even when lacking cover or concealment. Once a creature succeeds at a Perception check to realize a mucilaginous cloud is more than it appears, the ooze loses the benefit of this camouflage against that creature until the creature can no longer see the ooze. Once a mucilaginous cloud has swallowed a victim whole, that ooze can\’t use its camouflaging haze until the victim is digested (in 2 to 6 hours) or escapes.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-07"
},
{
    name: "Летучесть [Слизистое облако]",
    descr: "A mucilaginous cloud is naturally buoyant. It can hover as part of any action it takes without needing to roll a check. If unable to take actions, it naturally floats in the air, moving with air currents.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-07"
},
{
    name: "Монтёр [Слизь-мародёр]",
    descr: "Несмотря на неразумность, слизь-мародёр интуитивно разбирается в технологиях и способах их применения и ремонта. Слизь-мародёр получает бонус +22 к проверкам Инженерного дела для починки механических и технологических предметов, а её тело способно принимать форму любого необходимого для этих работ инструмента.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Мусорная раковина [Слизь-мародёр]",
    descr: "Слизь-мародёр окрывает себя оболочкой из смолы и найденного хлама, в которую встраивает отремонтированные элементы всевозможных технологических предметов. Раковина даёт жиже СУ5/адамантин и устойчивость 10 к случайному типу энергии, зависящему от встроенных в раковину устройств. Кроме этого, в раковине есть система жизнеобеспечения, похожая на аналогичные системы обычной брони и позволяющая жиже выживать в вакууме. Слизь-мародёр может встраивать в раковинувооружение: одно тяжёлое оружие с уровнем, не превышающим КО слизи (как правило, 9), и либо два длинноствольных, либо три короткоствольных оружия; уровень каждого из этих предметов не может превышать [КО слизи - 1]. Слизь получает умение обращаться со встроенным вооружением и производит боеприпасы для него внутри своего тела. такое оружие можно разрушить при помощи боевого манёвра разрушения, как если бы это был предмет с уровнем, равным КО слизи.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: null,
    requirement: null,
    source: "ИА-01"
},
{
    name: "Взаимозаменяемость [Составляющая апари]",
    descr: "An apari constituent can change its physiology to take advantage of its opponent\’s weaknesses. As a move action, it can alter the type of kinetic damage it deals with its claw attack (bludgeoning, piercing, or slashing).",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Воссоединение [Составляющая апари]",
    descr: "As a standard action, an apari constituent adjacent to an apari can become part of the hive once again. The constituent\’s current Hit Points are added to the apari\’s, and the constituent is removed from play.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Зависимость от улья [Составляющая апари]",
    descr: "An apari constituent can\’t voluntarily travel more than 200 feet from the apari that spawned it. If taken beyond that range against its will, it gains the sickened condition and becomes single-minded in its focus on returning to its apari. An apari constituent can survive for only 1 hour after the apari that spawned it dies (unless it finds another apari).",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Кислотные шипы [Сурнох]",
    descr: "В начале своего хода существо, захваченное сурнохом получает 3d6+9 урона (колющий и кислота) от сочащихся кислотой шипов.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Струя кислоты [Сурнох]",
    descr: "В качестве основного действия сурнох может выпустить струю кислоты через один из своих шипов. Эта атака обладает особым свойством \’линейное\’ и шагом дистанции 60 футов.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Туннелирование [Сурнох]",
    descr: "Когда сурнох передвигается в туннеле, выкопанном им самим или другим сурнохом, его скорость увеличивается в пять раз и он не считается застигнутым врасплох при беге. Кроме этого, сурнох может без труда перемещаться по туннелю до трёх часов в день (вместо одного).",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Пустотный прыжок [Тень забвения]",
    descr: "Тень забвения способна проходить сквозь материальные предметы, размер которых больше занимаемого ей пространства, но не превышает расстояние, которое тень способна преодалеть за одно сопутствующее действие.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-05"
},
{
    name: "Создание отродья [Тень забвения]",
    descr: "Живые гумоноиды, убитые бестелесным касанием тени забвения, перед смертью должны пройти испытание Воли со СЛ 18. При провале они через 1d4 раунда провращаются в отродье тени забвения, попадая под полный контроль породившей их тени. Как правило, КО отродья на 3 ниже КО создавшей его тени забвения.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: null,
    requirement: null,
    source: "СП-05"
},
{
    name: "Извержение шлака [Терматрол]",
    descr: "As a full action, a thermatrod can spray a portion of its core at a grid intersection within 60 feet. All creatures within 10 feet of this intersection take 2d6 fire damage and gain the staggered condition as the spray of molten stone and metal hardens. A target can attempt a DC 14 Reflex save to halve the damage and negate the staggered condition. Otherwise, the staggered condition lasts for 1 minute unless the target or an adjacent creature uses a full action to peel off enough rock and stone for the target to be able to move.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-07"
},
{
    name: "Расплавляющая аура [Терматрол]",
    descr: "A creature that begins its turn within 5 feet of a thermatrod takes 1d4 fire damage from the creature\’s intense internal temperature.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-07"
},
{
    name: "Полупроводник [Урог]",
    descr: "Urogs can alter their silicon-based composition to increase or decrease their electric conductivity. As a move action, an urog can spend 1 Resolve Point and lose its natural resistance to electricity for 1 round to gain a bonus to the damage it deals with its electrical discharge ranged attack equal to its Constitution modifier. These effects last until the beginning of its next turn.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Электрический разряд [Урог]",
    descr: "An urog can release a small bolt of electricity at a single foe as a ranged attack with a range increment of 40 feet.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Коллективный разум [Формианин]",
    descr: "Formians operate from a shared hive intelligence that allows them to communicate nearly instantaneously. While within telepathic range of at least one other formian with this ability, a formian gains a +4 bonus to initiative and Perception checks. If one formian is aware of a combatant, all members of the hive mind within range are aware of it, and a member of the hive mind cannot be surprised unless all members within range are surprised. If one member of the hive mind succeeds at a Will save to disbelieve an illusion effect, all members of that hive mind within telepathic range also disbelieve the effect.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Смертельная схватка [Формианин-воин]",
    descr: "When a formian warrior succeeds at a combat maneuver to maintain a grapple, it can make a melee attack with its stinger as a move action.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Формианский токсин [Формианин-воин]",
    descr: "Type poison (injury)\nSave Fortitude DC 12; Track Dexterity\nFrequency 1/round for 6 rounds; Cure 1 save",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "Яд",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Непровзойдённый носильщик [Формианин-рабочий]",
    descr: "Formian workers are bred for heavy labor. A formian worker can carry 5 additional bulk beyond the normal limits for its Strength before becoming encumbered or overburdened.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Умелый помощник [Формианин-рабочий]",
    descr: "When supporting an ally within range of its limited telepathy through covering fire, harrying fire, or the aid another action, a formian worker provides a +4 bonus to its ally\’s AC, attack roll, or skill check instead of the normal +2 bonus.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Абсолютная гравитация [Фружай]",
    descr: "A frujai colony is able to control its apparent mass through a combination of organelles and psychic commands. It gains a +4 bonus to its KAC against bull rush, reposition, and trip combat maneuvers. Furthermore, it can ignore the effect of supernatural gravity effects such as control gravity and can always behave as though natural gravity conditions were up to two steps stronger or weaker.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Гравитационный якорь [Фружай-солдат]",
    descr: "A frujai soldier can create violent fluctuations in gravity as a ranged attack against EAC with a 150-foot range and no range increment. If the attack hits, the soldier can attempt either a reposition or a trip combat maneuver against the target as a free action, using its gravity anchor\’s attack bonus of +4 to perform the maneuver. When repositioning a creature in this way, the frujai soldier can move the target up to 10 feet from its original position.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Страж колонии [Фружай-солдат]",
    descr: "Whenever a frujai colony takes damage, all frujai soldiers within 300 feet gain a +4 morale bonus to attack rolls and a 10-foot bonus to their base speed for 1 round.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Порождение защитника [Фружай, колония]",
    descr: "A frujai colony can sprout frujai soldiers (see below) naturally in a process that takes several weeks, but as a full action, a colony can expend 1 Resolve Point to create a temporary frujai soldier in an adjacent space; the soldier can act immediately. A temporary soldier remains animate for 1 hour before crumbling.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Управление гравитацией [Фружай, колония]",
    descr: "A frujai colony can control gravity in a variety of ways. At the beginning of its turn, a colony selects two of the following five abilities that it can use before the beginning of its next turn. By spending 1 Resolve Point, a colony can select three of the abilities that round instead. If a colony has a sustained ability active (such as flight or gravity field) and does not select that as one of its abilities for the turn, that effect ends immediately.\nFlight: As a free action, the frujai colony gains an extraordinary fly speed of 40 feet (poor maneuverability). When this ability ends, the colony descends gently at a rate of 60 feet per round and takes no damage when it lands.\nGravity Field: The frujai colony can create a zone of abnormal gravity as a standard action, as per control gravity (CL 19th). A colony can maintain only one such effect at a time, and the abnormal gravity field ends if it uses this ability again.\nGravity Shield: The frujai colony combines levitating improvised shields with pulses of gravity to deflect attacks, gaining a +4 bonus to its AC.\nGravity Thrust: The frujai colony can use its gravity thrust attack. This is a ranged attack against EAC with a maximum range of 200 feet and no range increment.\nGravity Wave: As a standard action, the frujai colony can unleash a wave of force in a 60-foot cone that deals 8d6+17 bludgeoning damage to each creature in the area and pushes affected creatures 10 feet away from the colony. A target can attempt a DC 24 Reflex save to halve the damage and negate the movement.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Выброс огня [Хаан]",
    descr: "As a standard action, a haan can spray its flammable lifting gases and light them with sparks, creating a 30-foot cone of flame. All creatures within the cone take 3d6 fire damage (Reflex DC 14 half).",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Шар [Хаан]",
    descr: "A haan can create and inflate a web balloon and attach it to an adjacent enemy with a successful melee attack against KAC. If the attack hits, the target immediately rises 30 feet off the ground in a straight line, and it continues to rise at a speed of 30 feet each round on the haan\’s turn. Every round after the balloon is attached, the target can attempt a DC 14 Reflex save to cut or break free of the web balloon. If freeing itself from the balloon causes the creature to fall, it takes falling damage as normal. This ability does not function in a vacuum or zero gravity.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Выброс энергии [Халладжин]",
    descr: "A hallajin can concentrate its glowing form into deadly flaming energy to make either melee or ranged attacks. Its ranged energy surge attack has a range increment of 100 feet.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Обжигающий разум [Халладжин]",
    descr: "The mind and spirit of a hallajin is so convoluted and energetic that direct contact with it via abilities like detect thoughts, mind link, or other spells or abilities that charm or dominate causes feedback of psychic energy. The creature contacting the hallajin\’s mind takes 4d8+8 psychic damage (Will DC 24 half). This damage occurs each round a creature remains in contact with the hallajin\’s mind. A hallajin using its telepathy on a creature doesn\’t affect it in this way.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Световой прыжок [Халладжин]",
    descr: "As a full action, a hallajin can teleport (as per teleport), except it can\’t leave or enter an area enclosed by barriers of electrical energy.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Сияющее тело [Халладжин]",
    descr: "A hallajin sheds light as per a beacon.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Улучшенные невосприимчивости [Халладжин]",
    descr: "Hallajins are immune to bleed, disease, mind-affecting effects, paralysis, poison, sleep, and stunning. They are also immune to ability damage, ability drain, exhaustion, fatigue, negative levels, and nonlethal damage.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Инфразвуковой гул [Хищный кристалл]",
    descr: "A carnivorous crystal emits infrasonic vibrations that act like static for any sense that relies on vibration, rendering it useless, although carnivorous crystals are immune to this effect. In addition, any creature that can hear must succeed at a DC 18 Fortitude saving throw within the aura or become dazed for 1 round. A creature that successfully saves or becomes dazed by the aura can\’t be dazed by any carnivorous crystal\’s infrasonic hum for 24 hours.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-09"
},
{
    name: "Кристаллизация [Хищный кристалл]",
    descr: "A creature made of flesh that ends its turn grappled by a carnivorous crystal must succeed at a DC 18 Fortitude save or become staggered. If a creature already staggered from this ability fails this save, it becomes paralyzed. A creature staggered or paralyzed by this ability but not grabbed by a carnivorous crystal recovers completely at the end of its next turn.\nA creature that remains grabbed while paralyzed by this ability must attempt a third saving throw; on a failure, it becomes an amalgam of crystal and flesh, unconscious but alive. A creature in this crystallized state must succeed at a DC 18 Fortitude saving throw each day or die. If receiving successful long-term care, the creature gains a +4 bonus to this saving throw and needs to attempt it only once every 3 days. The crystallization is cured after two successful saving throws. Remove affliction allows a creature to automatically succeed at the saving throw, but an affected creature can benefit from this spell only once every 24 hours. Flesh to stone reverses this effect immediately.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-09"
},
{
    name: "Электрический луч [Хобгар]",
    descr: "A hobgar can discharge a ray of electricity at a single target as a standard action. This attack has a maximum range of 20 feet.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-07"
},
{
    name: "Зачарованые удары [Хранитель знаний]",
    descr: "Крушащие удары хранителя знаний и атаки, которые он совершает при помощи аналогового оружия считаются магическими для преодоления СУ и нанесения урона бестелесным существам.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-02"
},
{
    name: "Расовая традиция [Хранитель знаний]",
    descr: "Каждый народ создаёт хранителя знаний по своему образу и подобию и наделяет его характерными особенностями поведения. Для эффектов, действующих на определённые типы и подтипы существ (например, сопряжения убийцы), хранитель знаний считается и конструкцией и, и членом создавшей его расы. Кроме этого, он понимает один из языков своих создателей, но не может на нём говорить.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-02"
},
{
    name: "Телепортационный бросок [Хранитель знаний]",
    descr: "Один раз в день после совершения дистанционной атаки аналоговым оружием хранитель знаний в качестве быстрого действия может применить особый эффект телепортации, позволяющий либо телепортировать дистанционное оружие обратно в руки конструкции, либо телепортировать к оружию саму конструкцию (но не далее 100 футов). Во втором случае хранитель знаний появляется с оружием в руках рядом с целью (если оружие попало в цель) или в случайно выбранной клетке рядом (в случае промаха).",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-02"
},
{
    name: "Животворящее свечение [Хулса]",
    descr: "A hulsa can spend 1 Resolve Point to heal living creatures within their bright light. They can heal themself or one other living creature as a standard action, or themself and other creatures of their choice in their bright light as a full action. Each target regains 8d8 Hit Points. When using this ability as a full action, the hulsa can spend 1 additional Resolve Point to also harm undead in the area, dealing 8d8 electricity and fire damage to each one (Fortitude DC 19 half).",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-09"
},
{
    name: "Калейдоскопическое свечение [Хулса]",
    descr: "A hulsa is supernaturally luminous, shining bright light out to a range of 30 feet, normal light for another 30 feet, and dim light for another 30 feet. A magical effect can reduce the light in this area only if its source has a higher level or CR than the hulsa. A hulsa can extinguish or relight their light as a move action.\nIn addition, the hulsa can spend 1 Resolve Point to oscillate the bright light from this ability for as long as the fey maintains concentration. Creatures within 90 feet of the hulsa that can see this light become fascinated while the effect lasts and for 1 round after it ends (Will DC 19 negates). The hulsa can instead focus the glow on one creature, which works like the hypnotic glow stellar revelation of a 10th‑level solarian (DC 19, 10 rounds). Hulsas are immune to this ability. This is a mind-affecting effect.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-09"
},
{
    name: "Луч света [Хулса]",
    descr: "A hulsa\’s light ray has a range increment of 90 feet and the bright special property.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-09"
},
{
    name: "Электромагнитная коммуникация [Хулса]",
    descr: "A hulsa can communicate with other creatures within the same star system. With other hulsas, this ability functions as telepathy. Otherwise, the hulsa mentally broadcasts to technological comm units.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-09"
},
{
    name: "Вытягивание ци [Цзян-ши]",
    descr: "Когда цзян-ши успешно совершил боевой манёвр захвата, он может вытянуть из жертвы ци (жизненную энергию), выпив её дыхание. Жертва должна пройти  испытание Стойкости со СЛ 16 и при провале получает ошеломление на 1d4 раунда и 1 отрицательный уровень.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-03"
},
{
    name: "Ловкие когти [Цзян-ши]",
    descr: "Удар когтями цзян-ши обладает особой способностью захват и особым свойством оружия \’оперативное\’.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-03"
},
{
    name: "Молитвенный свиток [Цзян-ши]",
    descr: "Голографический молитвенный свиток, закреплённый на лбу цзян-ши, даёт ему полную невосприимчивость к любым эффектам, произведённым с помощью камней чар или аналогичных предметов, способных хранить заклинания, как если бы у цзян-ни была непреодолимая УкМ. Свиток также дарует цзян-ши быстрое исцеление 5 и защищает его от уничтожения. В случае смерти ели ПЗ цзян-ши снижаются до 0, он рассыпается в прах, но через 1 минуту восстаёт в ближайшем незанятом пространстве с 1 ПЗ. Чтобы навсегда уничтожить цзян-ши, надо смешать его прах с рисом и уксусом или развеять его по ветру, пока вампир не восстановился.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-03"
},
{
    name: "Скачущая походка [Цзян-ши]",
    descr: "Цзян-ши передвигается скачкам, и потому его наземная скорость на 10 футов ниже, чем у базового существа, но он игнорирует пересечённую местность, и его нельзя сбить с ног. На все прочие скорости (например, полёта или плавания) эта способность не влияет.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-03"
},
{
    name: "Уязвимости цзян-ши [Цзян-ши]",
    descr: "Цзян-ши не выносит вида варёного риса, зеркал и звон колокольчика. он не способен подойти к этим предметам ближе чем на 5 футов, а также не может коснуться или атаковать держащее их существо в ближнем бою. Удерживание цзян-ши на расстоянии требует основного действия. Через 1 раунд удержания он сможет пройти испытание Воли со СЛ 20 в начале своего хода, чтобы при успехе действовать как обычно.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-03"
},
{
    name: "Комплект сенсоров [ШТАР]",
    descr: "As a full action, an AHAV can gain one of the following benefits for 1 minute: blindsight (life), blindsight (vibration), sense through (vision), or a +10 enhancement bonus to Perception checks. It can change which benefit it receives as a full action. At the GM\’s discretion, an AHAV might have access to more options, such as blindsight (emotion) or blindsight (thought).",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "МОДУЛЬ [ШТАР]",
    descr: "An AHAV is created with one of the Mission Dependent Loadouts, or MODELs, listed below. MODELs are intended to allow AHAVs to serve in a variety of roles. This list is not exhaustive; the GM is free to design other MODELs at her discretion.\nAdvanced Maneuverability: The AHAV has an extraordinary fly speed of 60 feet (perfect maneuverability) and the Spring Attack feat.\nAutoloader: When the AHAV makes a full attack with its medium machine gun, it can make up to three attacks instead of two attacks. It takes a –5 penalty to these attacks instead of a –4 penalty.\nCamouflage Plating: The AHAV gains a +20 enhancement bonus to Stealth checks.\nHarrying Arms: The AHAV has numerous pistols or other small arms mounted to its chassis. As a full action, the AHAV automatically succeeds at the harrying fire action against every enemy within 60 feet.\nRam: The AHAV gains a slam attack with a +23 attack bonus that deals 6d4+17 bludgeoning damage. If the AHAV hits with this attack after a charge, the target is also knocked back 30 feet. If the target is blocked from moving the full distance, it takes an additional 1d6 bludgeoning damage per 10 feet it can\’t move.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Кража электричества [Электрофаг]",
    descr: "Whenever an electrovore scores a critical hit against a living creature, a construct with the technological subtype, or a technological piece of gear, it siphons off a portion of the target\’s electrical energy. This restores 1 Resolve Point (up to its maximum of 3).",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Электрический разряд [Электрофаг]",
    descr: "As a standard action, an electrovore can spend 1 Resolve Point to discharge some of its stored electrical energy as a powerful attack. All creatures within 10 feet of the electrovore take 1d6+2 electricity damage and are staggered for 1 round. A target can attempt a DC 13 Reflex save to take half this damage and negate the staggered effect.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Повелитель воды [Элементаль воды]",
    descr: "Waterborne creatures take a -1 penalty to attack and damage rolls against a water elemental.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Тушение [Элементаль воды]",
    descr: "A water elemental\’s touch douses Large or smaller nonmagical flames. The outsider can dispel magical fire it touches as per dispel magic (caster level = the elemental\’s CR). ",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Повелитель воздуха [Элементаль воздуха]",
    descr: "Airborne creatures take a -1 penalty to attack and damage rolls against an air elemental.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Повелитель земли [Элементаль земли]",
    descr: "An earth elemental gains a +1 bonus to attack and damage rolls if both it and its foe are touching the solid surface of a planet or an asteroid. If an opponent is airborne or waterborne, the elemental takes a -2 penalty to attack and damage rolls. These modifiers apply to initiating or resisting bull rush combat maneuvers.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Пламенные удары [Элементаль огня]",
    descr: "A fire elemental\’s slams deal half fire damage and half bludgeoning damage. In addition, on a critical hit, the fire elemental\’s strikes deal an amount of burn damage based on the creature\’s CR, as listed in the table below:\nDamage: 1-5 – 1d4; 6-10 – 2d4; 11-15 – 3d4; 16+  – 4d4.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Аура радиации [Элликот]",
    descr: "Из-за условий окружающей среды элликоты вынужденно поглащают огромное количество радиации и приспособились запасать и перенаправлять её без вреда для себя. Элликот излучает радиацию среднего уровня на 15 футов и низкого уровня ещё на 15 футов.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Вытягивание души [Элликот]",
    descr: "В качестве основного действия элликот может ударить хоботами одно живое существо или нежить в зоне досягаемости, совершая атаку против ККБ цели. При попадании она получает 3d6+9 дробящего урона и становится ошеломлена на 1 раунд; цель может пройти испытание стойкости со СЛ 16, чтобы уменьшить урон вдвое и отменить состояние ошеломления. Элликот восстанавливает ПЗ в количестве, равном урон, который нанесён ПЗ цели (вплоть до максимума).",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "ИА-01"
},
{
    name: "Кислотный плевок [Энтропийный слизень]",
    descr: "An entropy slug can spit acid as a ranged attack with a range increment of 30 feet.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-09"
},
{
    name: "Окисление контактов [Энтропийный слизень]",
    descr: "When an entropy slug deals a critical hit with its slam attack, the target must succeed at a DC 13 Reflex saving throw or all its hybrid and technological weapons, armor, and gear gain the broken condition for 1d4 rounds. Items with the analog property are unaffected.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "СВ",
    requirement: null,
    source: "СП-09"
},
{
    name: "Уязвимость к соли [Энтропийный слизень]",
    descr: "A handful or more of salt or a splash of salt water deals 1d6 damage to an entropy slug, and full immersion in salt water deals 4d6 damage per round.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-09"
},
{
    name: "Энтропийная слизь [Энтропийный слизень]",
    descr: "When an entropy slug hits with a slam attack or moves, it leaves behind mucus on the creature it hit or in every square the slug moved through. A creature hit by the slug\’s slam attack or that enters a square covered in entropic mucus must succeed at a DC 13 Reflex save or each battery in the creature\’s possession loses 1d4 charges. This mucus remains active until it forces one such saving throw or 1 minute has passed, whichever comes first.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-09"
},
{
    name: "Наскок [Эох]",
    descr: "В качестве дйствия полного хода эохи может переместиться вплоть до значения своей скорости и в конце перемещения совершить полную атаку; при этом каждая атака получает штраф -5 (вместо обычного -4).",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-04"
},
{
    name: "Неджейское бешенство [Эох]",
    descr: "Способ передачи: контакт. Испытание: Стойкости 16. Трек: Соматическая болезнь; Частота: 1 в неделю. Эффект: на стадии \’истощён\’ жертва также впадает в замешательство.\nЛечение: 2 испытания подряд",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "Болезнь",
    requirement: null,
    source: "СП-04"
},
{
    name: "Движение напролом [Ярук]",
    descr: "When a yaruk uses its trample ability, it ignores difficult terrain created by plants. Each inanimate obstacle in its path takes twice the yaruk\’s trample damage (inanimate plants take quadruple damage), and if this would reduce the obstacle to half its Hit Points or fewer, the yaruk can move through the obstacle as though it were difficult terrain.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-02"
},
{
    name: "Затаптывание [Ярук]",
    descr: "As a full action, a yaruk can move up to its speed and through the space of any creatures that are at least one size smaller than itself. The yaruk does not need to make an attack roll; each creature whose space it moves through takes 3d4+14 bludgeoning damage. A target of a trample can attempt a DC 16 Reflex save to take half damage; if it does, it can\’t make an attack of opportunity against the yaruk due to the yaruk\’s movement. A yaruk can deal trample damage to the same creature only once per round.",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-02"
},
{
    name: "Трубный рёв [Ярук]",
    descr: "A yaruk\’s vocalizations are audible up to 3 miles away in typical outdoor conditions. As a standard action once per 1d6 rounds, a yaruk can blare loudly in a 60-foot cone, dealing 2d8+8 sonic damage and inflicting both the deafened condition and the off-target condition for 1d4 rounds (a successful DC 16 Fortitude save halves the damage and negates these conditions).",
    lvl: null,
    type: "НПС",
    subtype: null,
    category: "ЭКС",
    requirement: null,
    source: "СП-02"
}
];