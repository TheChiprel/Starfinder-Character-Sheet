const ITEMS_DATABASE = [ 
{
    name: "Астрокомпас",
    type: "Гибридный предмет",
    lvl: 1,
    price: 3,
    descr: "This small, clockwork navigational device hones in on mystical signals emitted by the Starstone resting at the heart of Absalom Station, calculating the compass\’s precise distance from and direction relative to the enigmatic font. While you are in the Pact Worlds system, this device lets you automatically know which direction Absalom Station is in relation to your current location, and it grants you a +2 insight bonus to Piloting checks when astrogating throughout the Pact Worlds system.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Пылезащитные очки",
    type: "Гибридный предмет",
    lvl: 1,
    price: 120,
    descr: "These goggles of smoked glass are used by membrane ghibranis of Elytrio to protect their eyes during the frequent dust storms in the wastes of their ravaged planet. When you wear a pair of dust goggles, the penalty to Perception checks from storms is removed and your visibility range isn\’t reduced. In addition, you reduce your miss chance due to concealment from smoke and fog (including that produced by a smoke grenade or an effect such as fog cloud) by 10% (to a minimum of 0%); this reduction doesn\’t stack with any other ability that reduces miss chance due to concealment.\nDust goggles can also be installed in armor (or an android\’s armor upgrade slot) as an armor upgrade. This has no effect on weight or cost, but when installed in this way, they do not count toward a character\’s limit of two worn magic or hybrid items at once.",
    weight: "-",
    source: "СП-05"
},
{
    name: "Амулет защиты от растений",
    type: "Гибридный предмет",
    lvl: 1,
    price: 300,
    descr: "A plant shield amulet creates an energy field around you, resonating with magic frequencies that repel plants. You can move through undergrowth that acts as difficult terrain (such as bushes, fungal blooms, roots, and vines) at your normal speed and without taking damage from thorns or similar elements of the plant life. Plant creatures\’ attacks and abilities, as well as spells and other magical effects such as the xenodruid\’s grasping vines mystic connection power, affect you normally.",
    weight: "-",
    source: "СП-05"
},
{
    name: "Малый посох теней",
    type: "Гибридный предмет",
    lvl: 2,
    price: 500,
    descr: "A lesser shadowstaff is covered with fell symbols and crackles with dark energy. As a basic two-handed melee weapon, a lesser shadowstaff deals 1d4 bludgeoning, slashing, or piercing damage (your choice) as it manifests blades or spikes at will, and it has the block weapon special property. When used as a small arm, a lesser shadowstaff has a range increment of 30 feet, and a single shot consumes 1 charge from its 40-charge capacity and deals 1d4 cold damage. Switching a lesser shadowstaff from melee functionality to ranged functionality (or vice versa) is a swift action.",
    weight: "1",
    source: "ИА-01"
},
{
    name: "Телепатический обруч (тип 1)",
    type: "Гибридный предмет",
    lvl: 2,
    price: 1600,
    descr: "Although items with powers similar to those of the mindlink circlet have existed in the Pact Worlds for thousands of years, the technological components of the this useful item were an innovation that made its powers readily available. The effects of a mindlink circlet depend upon its model, as described below.\nYou can telepathically communicate with any creatures within 30 feet with which you share a language. This functions like a shirren\’s limited telepathy racial trait.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Дублирующий ремень",
    type: "Гибридный предмет",
    lvl: 3,
    price: 1200,
    descr: "These devices were originally created by ilthisarian travelers early in their exploration of worlds beyond their native Arshalin. Most are wide mesh belts with entwined serpentine patterns, though redundancy belts made beyond Arshalin have a wider variety of appearances. After being worn for at least 24 hours, the belt creates duplicates of your existing vital organs that last as long as you wear the belt, magically and temporarily rearranging your internal anatomy to create space for them. You gain a +4 resistance bonus to Fortitude saving throws against poison, to withstand the harmful effects of thick and thin atmospheres, and to avoid choking when breathing in heavy smoke. You can hold your breath for a number of rounds equal to four times your Constitution score, and you always take minimum damage from falls (as though rolling a 1 for each die of damage).",
    weight: "Л",
    source: "СП-05"
},
{
    name: "Значок обнаружения движения",
    type: "Гибридный предмет",
    lvl: 3,
    price: 1350,
    descr: "This hexagon-shaped adornment can be activated or deactivated as a move action. A motion-detection badge has 4 charges, which refresh daily, and an hour of activation uses 1 charge. While active, as long as you haven\’t moved for at least 1 round, the badge emits a quick flash of red light whenever a Small or larger corporeal creature approaches within 60 feet, although creatures undetectable to normal vision (such as an invisible creature) don\’t trigger the flash. This flash is sufficient to alert you, but doesn\’t otherwise affect your vision or your actions. Reduce this distance by 20 feet for each interposing closed door or substantial barrier (such as a wall at least 1 inch thick). You can attune the badge to a creature by touching it with the item, which takes a full action; you can attune the badge to up to 10 different creatures. When you are within 60 feet of one of these creatures, regardless of whether you have moved in the past round, the badge emits a yellow flash to let you know an ally is near. Attempting to attune an eleventh creature causes the badge to lose its attunement to the earliest attuned creature. Note that in certain environments, such as a crowded shopping center, the badge flashes so frequently as to be practically useless for detecting approaching threats.",
    weight: "Л",
    source: "СП-07"
},
{
    name: "Абляционная изоляция (тип 1)",
    type: "Гибридный предмет",
    lvl: 4,
    price: 350,
    descr: "Civilization on Verces exists on the thin line between fiery heat and frozen desolation. Verthani\’s unique perspective on the elements led them to develop temperature-sensitive compounds with remarkable properties. Ablative insulation comes in a single-use canister containing enchanted fullerene-based powder. In a process that takes 1 minute, you can spray the contents on a creature to thoroughly coat it with the powder (though it automatically avoids orifices and sensory organs such as the eyes, mouth, and nose). The creature coated gains energy resistance to all energy types (which doesn\’t stack with any other source of energy resistance), and the ablative insulation wears away as it prevents damage. The coating lasts for 1 hour if not ablated away sooner. Multiple coatings don\’t offer any additional benefit (ignore all but the highest-level coating). Each canister contains enough material to fully cover a single Medium or smaller creature, with any excess wasted. When applied to a Large creature, the insulation provides only half the energy resistance (rounded down) and total points of absorption unless a second canister is used. If applied to a Huge or larger creature, the insulation is wasted without effect.\nMk 1: The creature receives energy resistance 5 to all energy types. The coating lasts for 1 hour or until it prevents a total of 20 damage, whichever comes first.",
    weight: "Л",
    source: "МС"
},
{
    name: "Живой набор капканщика",
    type: "Гибридный предмет",
    lvl: 4,
    price: 2000,
    descr: "When you whisper a command word to these otherwise normal trapsmith\’s tools, they begin to move on their own. You can use these tools to arm explosives or disarm a trap at a distance of 10 feet, using your total skill bonus in the appropriate skill (though the circumstance bonus provided by the tools is decreased to +2 when used in this way).",
    weight: "Л",
    source: "СП-04"
},
{
    name: "Пси-усилитель",
    type: "Гибридный предмет",
    lvl: 4,
    price: 2000,
    descr: "Пси-усилитель – лашунтское изобретение, которое закрепляется на лбу и вокруг усиков (если они есть) и усиливает врождённые экстрасенсорные способности. Если вы обладаете телепатией, дистанция её применения удваивается: например, если у вас ограниченная телепатия в пределах 30 футов, то её дистанция увеличивается с 30 до 60 футов.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Очки предвидения (тип 1)",
    type: "Гибридный предмет",
    lvl: 4,
    price: 2150,
    descr: "Prescient lenses blend quantum computing and divination magic to model, extrapolate, and display events happening in the next few seconds as translucent holograms. A pair of lenses has one charge, which is refreshed each day, and a creature can benefit from a single use of prescient lenses each day (with any subsequent attempt showing the same few seconds of time as the first daily use). Prescient lenses were originally as optical enhancements for the robotic anacites of Aballon and can be integrated into a robot for the listed price. Alternatively, they can be installed as a cybernetic eye augmentation for 1,000 additional credits.\nВы можете потратить заряд очков следующим образом:\nТип 1: В качестве сопутствующего действия вы можете изучить изображения в линзах, чтобы получить бонус +1 (интуитивный) к одной проверке атаки, характеристики или навыка, совершаемой до начала вашего хода.",
    weight: "-",
    source: "МС"
},
{
    name: "Гравимодулятор",
    type: "Гибридный предмет",
    lvl: 4,
    price: 2200,
    descr: "Gravitic-modulator technology was developed on Silselrik, derived from the selamids\’ innate ability to withstand the stresses of changing gravity. Originally designed by the selamids for their own use when venturing away from the safety of their megadoplexes, these devices see common use among offworlders visiting Silselrik for commerce, research, or work in the diamond mines. While a selamid simply absorbs the device into its protoplasm, most humanoids wear the gravitic modulator as a backpack due to its size and weight.\nWhile wearing a gravitic modulator, you are shielded from some of the effects of rapidly changing gravity. You gain a +2 enhancement bonus to saving throws to resist gravity-based effects, such as a control gravity spell or a solarian\’s black hole revelation. In addition, whenever you would take damage from extreme gravity, you take 5 less damage (minimum 0 damage).",
    weight: "1",
    source: "СП-05"
},
{
    name: "Мнемонический редактор (тип 1)",
    type: "Гибридный предмет",
    lvl: 5,
    price: 500,
    descr: "A mnemonic editor consists of a complex series of brain implant injectors, digital harrow deck autoreaders, illusion runes, and virtual-reality programs, all controlled by an enchanted analysis computer and attached to a mobile surgical bed. The network of magic and technology is capable of removing experiences from a patient strapped to the bed over the course of a single 24-hour session. Skills and knowledge can be excised, lessons unlearned and muscle memory altered. Memories are not lost entirely; the patient still recalls what it did during its life, whom it met, and how it felt about the moments it experienced, but the impact of those experiences is subtly altered. The device then creates a new set of experiences—clearly artificial but no less effective—by leaving impressions and implanting new knacks, muscle memory, reflexes, and skills.\nIf you use a mnemonic editor, you can undo 2 character levels\’ worth of decisions about which class levels you took, which feats you selected, how you applied any level-based increases to ability scores, how you assigned new skill ranks, and so on. All decisions you made as a result of advancing over the previous 2 character levels you gained are undone. You then make new selections, including new class levels, feats, skills, and the like, as if you had regained the 2 missing character levels. Go through the normal process of advancing your character through each of these 2 levels.\nEach mnemonic editor works only once—the strain on its technology and the consequences of rewriting your past to even this small degree cause it to break down into valueless junk after a single session. Additionally, the alterations made to you render it more difficult for such extraordinary procedures to be effective in the future. A mk 1 mnemonic editor cannot be used on you if you have already benefited from one in the past. However, it is possible to use a more advanced mk 2 model that functions in the same manner, even if you have already used a mk 1 mnemonic editor. Of course, you can only benefit from a mk 2 mnemonic editor once. There exist even more advanced mk 3 and mk 4 models, and each can be used on you once even after you have used a lower-level mnemonic editor, but they are so expensive that they are usually produced only upon request.",
    weight: "10",
    source: "ОКП"
},
{
    name: "Нуль-пространственная камера (тип 1)",
    type: "Гибридный предмет",
    lvl: 5,
    price: 3050,
    descr: "A null-space chamber is a circular device often designed to be strapped to an arm or backpack. When you press a button on the side, the device creates a circular extradimensional rift to a pocket space, the size of which is determined by the null-space chamber\’s model. You can close it by pressing the button again, causing the entrance to the space to disappear. Anything stored within the space remains, however, traveling with the item. The null-space chamber can be opened and closed only from the outside.\n\nThe only air within the pocket space is that which enters when you open the entrance. The device does not accumulate bulk even as its pocket space is filled. Each null-space chamber is associated with its own particular extradimensional space. Each null-space chamber can carry a set amount of bulk, after which it can no longer be closed (even if it has room left for more material). Spells and items that contain or create extradimensional spaces, such as other null-space chambers, do not function within a null-space chamber\’s pocket dimension.\n\nA readout on a null-space chamber automatically catalogs all items within it, and if the chamber is open, you can call up any such item and have it placed in your hand as a full action.\nYou can close up to 25 bulk in this device\’s pocket space, a 3-foot cube. It can hold enough air for one Medium creature or two Small creatures for 10 minutes.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Цифровая колода Харо",
    type: "Гибридный предмет",
    lvl: 5,
    price: 3500,
    descr: "A digital harrow deck is a modernization of an archaic means of fortune-telling whose roots trace back to vanished Golarion. Once per day, you can activate the deck as a full action. It projects holograms of 54 cards, which buzz around you. To begin the reading, you ask a question aloud to the harrow deck, causing all of the cards to come together as a deck; then, the deck uses hundreds of advanced pseudomystical calculations to deal a three-by-three array of cards for you, which it then uses to vocally interpret the circumstances surrounding your question. This works as the augury spell, with a spell level equal to the deck\’s item level.\nAdditionally, a mystic who has a digital harrow deck and who also knows augury can ignore the spell\’s requirement that a Resolve Point be spent to cast it. A mystic can do this a number of times per day equal to his Wisdom bonus.\nA technomancer can designate a digital harrow deck as her spell cache. If she does, the deck\’s AI integrates with her own consciousness, providing her with a +1 bonus to her caster level for divination spells and effects. Additionally, she can spend 1 Resolve Point as a swift action when she casts a technomancer spell to draw upon the algorithms that allow the deck to function, adding a +1 insight bonus to the spell\’s save DC.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Тактокинетические перчатки",
    type: "Гибридный предмет",
    lvl: 6,
    price: 4450,
    descr: "Tactokinesis gloves use an array of magical and magnetic sensors to extend and amplify the wearer\’s sense of touch. They were first developed in the Diaspora to allow miners to locate veins of metal by touch through the material of their space suits. It soon found applications for thieves and explorers alike. Using the gloves, you can perceive and manipulate objects close at hand without actually touching them, and you can even sense details hidden just below the surface.\nWhile wearing a pair of tactokinesis gloves, you can use the Perception and Physical Science skills to examine a metal or technological construct or object within your reach, whether or not you can perceive the object with other senses. In addition, the gloves provide a +2 circumstance bonus to Engineering checks to assess stability or disable a device, and they count as necessary tools for such purposes. You can attempt such checks without directly touching the target, as well as use similar abilities that manipulate technology by touch, such as the overload mechanic class feature. In a zero-gravity environment, you can use the limited telekinesis provided by the gloves to pick up and move objects of up to 1 bulk without actually touching them. As a standard action, you can use the gloves to deliver a disruptive pulse to an android, drone, robot, or creature with the technological subtype. If the creature fails a Will saving throw (DC = 13 + your Dexterity modifier), it is dazed for 1 round. Once a creature has attempted a saving throw against this ability (regardless of the result), it is immune to this ability for 24 hours.\nThe range of this telekinesis is limited to your reach, as you must be almost touching the target to manipulate it. Tactokinesis gloves do not function through a force field.",
    weight: "Л",
    source: "МС"
},
{
    name: "Мотосферы (комплект из 4)",
    type: "Гибридный предмет",
    lvl: 7,
    price: 5600,
    descr: "Sold in blister packs of four (the price and bulk listed are for a set of four), motospheres are metal orbs that are each the size of a grenade and traced with glyphs. As a standard action, you can deploy one to four motospheres from the same set; each rolls into its own square within 15 feet of you and instantly transforms into a vehicle similar to a basic enercycle with the changes noted below. If a creature or object occupies a square a vehicle formed from a motosphere would occupy, the motosphere doesn\’t transform. You choose each vehicle\’s initial heading as it transforms. After being deployed, a vehicle turns back into a motosphere after 1 hour, or as a move action you can turn it back into a motosphere by entering a series of commands on the vehicle\’s controls. A single motosphere takes 24 hours to recharge before it can be used again.\nA vehicle formed out of a motosphere has a hardness of 7, and its hover jets allow it travel over both land and water (though not underwater). The vehicle has 14 Hit Points and becomes broken when it is reduced to 7 Hit Points or fewer. A vehicle that is reduced to 0 Hit Points turns back into a motosphere and can\’t be used until it is repaired (treat it as if it were broken).\nMotospheres can be sold back only in their original pack of four for the normal 10% of the set\’s purchase price; a set that is missing even one motosphere (or containing one that is broken) can be sold back for 2% of the set\’s purchase price.",
    weight: "Л",
    source: "МС"
},
{
    name: "Абляционная изоляция (тип 2)",
    type: "Гибридный предмет",
    lvl: 8,
    price: 1500,
    descr: "Civilization on Verces exists on the thin line between fiery heat and frozen desolation. Verthani\’s unique perspective on the elements led them to develop temperature-sensitive compounds with remarkable properties. Ablative insulation comes in a single-use canister containing enchanted fullerene-based powder. In a process that takes 1 minute, you can spray the contents on a creature to thoroughly coat it with the powder (though it automatically avoids orifices and sensory organs such as the eyes, mouth, and nose). The creature coated gains energy resistance to all energy types (which doesn\’t stack with any other source of energy resistance), and the ablative insulation wears away as it prevents damage. The coating lasts for 1 hour if not ablated away sooner. Multiple coatings don\’t offer any additional benefit (ignore all but the highest-level coating). Each canister contains enough material to fully cover a single Medium or smaller creature, with any excess wasted. When applied to a Large creature, the insulation provides only half the energy resistance (rounded down) and total points of absorption unless a second canister is used. If applied to a Huge or larger creature, the insulation is wasted without effect.\nMk 2: The creature receives energy resistance 10 to all energy types. The coating lasts for 1 hour or until it prevents a total of 40 damage, whichever comes first.",
    weight: "Л",
    source: "МС"
},
{
    name: "Планарные кандалы",
    type: "Гибридный предмет",
    lvl: 8,
    price: 9200,
    descr: "These manacles are crafted from a special hardened ceramic etched with mystic symbols. They are opened with a security code. A creature restrained by dimensional fetters that attempts to use a teleportation effect or spell fails unless it succeeds at a DC 30 Will saving throw.",
    weight: "1",
    source: "СП-04"
},
{
    name: "Посох теней",
    type: "Гибридный предмет",
    lvl: 8,
    price: 10000,
    descr: "A shadowstaff is covered with fell symbols and is often surrounded by a dark nimbus of shadowy energy. As a basic two-handed melee weapon, a shadowstaff deals 2d6 bludgeoning, slashing, or piercing damage (your choice) as it manifests blades or spikes at will, and it has the block weapon special property. When a shadowstaff is used as a small arm, it has a range increment of 60 feet, and a single shot consumes 2 charges from its 40-charge capacity and deals 2d4 cold damage. Switching a shadowstaff from melee functionality to ranged functionality (or vice versa) is a swift action. Additionally, you can use a shadowstaff to create darkness, as per the universal creature rule, once per day.",
    weight: "1",
    source: "ИА-01"
},
{
    name: "Телепатический обруч (тип 2)",
    type: "Гибридный предмет",
    lvl: 8,
    price: 11000,
    descr: "Although items with powers similar to those of the mindlink circlet have existed in the Pact Worlds for thousands of years, the technological components of the this useful item were an innovation that made its powers readily available. The effects of a mindlink circlet depend upon its model, as described below.\nYou can telepathically communicate with any creatures within 100 feet with which you share a language. This otherwise functions like a shirren\’s limited telepathy racial trait.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Нуль-пространственная камера (тип 2)",
    type: "Гибридный предмет",
    lvl: 9,
    price: 12250,
    descr: "A null-space chamber is a circular device often designed to be strapped to an arm or backpack. When you press a button on the side, the device creates a circular extradimensional rift to a pocket space, the size of which is determined by the null-space chamber\’s model. You can close it by pressing the button again, causing the entrance to the space to disappear. Anything stored within the space remains, however, traveling with the item. The null-space chamber can be opened and closed only from the outside.\nThe only air within the pocket space is that which enters when you open the entrance. The device does not accumulate bulk even as its pocket space is filled. Each null-space chamber is associated with its own particular extradimensional space. Each null-space chamber can carry a set amount of bulk, after which it can no longer be closed (even if it has room left for more material). Spells and items that contain or create extradimensional spaces, such as other null-space chambers, do not function within a null-space chamber\’s pocket dimension.\nA readout on a null-space chamber automatically catalogs all items within it, and if the chamber is open, you can call up any such item and have it placed in your hand as a full action.\nYou can close up to 50 bulk in this device\’s pocket space, a 6-foot cube. It can hold enough air for one Medium creature or two Small creatures for 2 hours.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Очки предвидения (тип 2)",
    type: "Гибридный предмет",
    lvl: 9,
    price: 13900,
    descr: "Prescient lenses blend quantum computing and divination magic to model, extrapolate, and display events happening in the next few seconds as translucent holograms. A pair of lenses has one charge, which is refreshed each day, and a creature can benefit from a single use of prescient lenses each day (with any subsequent attempt showing the same few seconds of time as the first daily use). Prescient lenses were originally as optical enhancements for the robotic anacites of Aballon and can be integrated into a robot for the listed price. Alternatively, they can be installed as a cybernetic eye augmentation for 1,000 additional credits.\nВы можете потратить заряд очков следующим образом:\nТип 2: \n- В качестве сопутствующего действия вы можете изучить изображения в линзах, чтобы получить бонус +1 (интуитивный) к одной проверке атаки, характеристики или навыка, совершаемой до начала вашего хода.\n- В качестве сопутствующего действия вы можете изучить изображения в линзах, чтобы получить в проверке атаки, характеристики или навыка, совершаемой до начала вашего хода, совершить двойной бросок и взять лучший результат.",
    weight: "-",
    source: "МС"
},
{
    name: "Мнемонический редактор (тип 2)",
    type: "Гибридный предмет",
    lvl: 10,
    price: 3000,
    descr: "A mnemonic editor consists of a complex series of brain implant injectors, digital harrow deck autoreaders, illusion runes, and virtual-reality programs, all controlled by an enchanted analysis computer and attached to a mobile surgical bed. The network of magic and technology is capable of removing experiences from a patient strapped to the bed over the course of a single 24-hour session. Skills and knowledge can be excised, lessons unlearned and muscle memory altered. Memories are not lost entirely; the patient still recalls what it did during its life, whom it met, and how it felt about the moments it experienced, but the impact of those experiences is subtly altered. The device then creates a new set of experiences—clearly artificial but no less effective—by leaving impressions and implanting new knacks, muscle memory, reflexes, and skills.\nIf you use a mnemonic editor, you can undo 2 character levels\’ worth of decisions about which class levels you took, which feats you selected, how you applied any level-based increases to ability scores, how you assigned new skill ranks, and so on. All decisions you made as a result of advancing over the previous 2 character levels you gained are undone. You then make new selections, including new class levels, feats, skills, and the like, as if you had regained the 2 missing character levels. Go through the normal process of advancing your character through each of these 2 levels.\nEach mnemonic editor works only once—the strain on its technology and the consequences of rewriting your past to even this small degree cause it to break down into valueless junk after a single session. Additionally, the alterations made to you render it more difficult for such extraordinary procedures to be effective in the future. A mk 1 mnemonic editor cannot be used on you if you have already benefited from one in the past. However, it is possible to use a more advanced mk 2 model that functions in the same manner, even if you have already used a mk 1 mnemonic editor. Of course, you can only benefit from a mk 2 mnemonic editor once. There exist even more advanced mk 3 and mk 4 models, and each can be used on you once even after you have used a lower-level mnemonic editor, but they are so expensive that they are usually produced only upon request.",
    weight: "10",
    source: "ОКП"
},
{
    name: "Некротическая мантия",
    type: "Гибридный предмет",
    lvl: 10,
    price: 17000,
    descr: "Used by the commanders of the Corpse Fleet to conceal their unliving agents, a necrotic mantle is woven of bioactive fibers that mask the necromantic energies of an undead wearer and convert positive energy into something less harmful to that undead. While wearing a necrotic mantle, if you are undead, you have the aura of a living creature instead of an undead for the purposes of magic or technology that can detect undead. You receive a +4 divine bonus to saves against any spell or effect that targets undead, such as control undead. In addition, if you are undead and fail a saving throw against a spell that both affects only undead creatures and has an ongoing effect (such as control undead), you can attempt a second saving throw after 1 round with the same DC as the first. If you succeed, you gain the same reduction in effect as if your initial saving throw had been successful. Additionally, any effort to determine whether a necrotic mantle you are wearing is a magic or technological item requires the creature making the determination to succeed at a Will save (DC = 15 + your key ability modifier).\nIf you are undead and are by or in the area of an effect that restores Hit Points only to living creatures, you regain half the number of Hit Points instead of none. If that effect also damages undead creatures, you take no damage; this does not apply to effects that harm undead without healing living creatures.",
    weight: "Л",
    source: "МС"
},
{
    name: "Дистанционный наблюдатель",
    type: "Гибридный предмет",
    lvl: 10,
    price: 18000,
    descr: "Forbidden from venturing to the Sepres VI\’s surface due both to the cultural taboo against doing so and the very real risks associated with it, seprevois—especially members and sympathizers of the Returners—created these handheld devices to remotely explore their planet\’s surface. The surveyor features a small dish that transmits and receives a signal to the target, as well as a view screen and speaker that relay the device\’s findings to you. The device allows you to employ both the audio and visual versions of clairaudience/clairvoyance simultaneously at a planetary range once per day, for a maximum duration of 10 minutes.",
    weight: "Л",
    source: "СП-05"
},
{
    name: "Тушитель",
    type: "Гибридный предмет",
    lvl: 10,
    price: 18000,
    descr: "A queller looks like a simple fire extinguisher and is constantly covered with a thin layer of frost. Three times per day as a standard action, you can use a queller to spray a burst of freezing chemicals in a 15-foot cone that deals 5d8 cold damage to each creature in the area (Reflex DC 15 half) and extinguishes all nonmagical fires in the cone (this ends any burning conditions). Kishalee researchers used similar devices to contain incursions from the Elemental Planes; at the GM\’s discretion, other quellers that deal different types of energy damage might exist (though they don\’t extinguish fires).",
    weight: "1",
    source: "СП-04"
},
{
    name: "Абляционная изоляция (тип 3)",
    type: "Гибридный предмет",
    lvl: 12,
    price: 5500,
    descr: "Civilization on Verces exists on the thin line between fiery heat and frozen desolation. Verthani\’s unique perspective on the elements led them to develop temperature-sensitive compounds with remarkable properties. Ablative insulation comes in a single-use canister containing enchanted fullerene-based powder. In a process that takes 1 minute, you can spray the contents on a creature to thoroughly coat it with the powder (though it automatically avoids orifices and sensory organs such as the eyes, mouth, and nose). The creature coated gains energy resistance to all energy types (which doesn\’t stack with any other source of energy resistance), and the ablative insulation wears away as it prevents damage. The coating lasts for 1 hour if not ablated away sooner. Multiple coatings don\’t offer any additional benefit (ignore all but the highest-level coating). Each canister contains enough material to fully cover a single Medium or smaller creature, with any excess wasted. When applied to a Large creature, the insulation provides only half the energy resistance (rounded down) and total points of absorption unless a second canister is used. If applied to a Huge or larger creature, the insulation is wasted without effect.\nMk 3: The creature receives energy resistance 15 to all energy types. The coating lasts for 1 hour or until it prevents a total of 60 damage, whichever comes first.",
    weight: "Л",
    source: "МС"
},
{
    name: "Защитник разума",
    type: "Гибридный предмет",
    lvl: 12,
    price: 36000,
    descr: "The microcircuitry contained within this adamantine ring records and magically reinforces your core personality. Once per day when you first come under the control of a mind-affecting effect, such as charm monster or dominate person, you can act normally for the first round of the effect, after which you are staggered for 1d4 rounds and affected by the mind-affecting effect as normal.\nYou must wear a mind guardian at least 12 hours a day for 7 consecutive days before you can use its ability. After this, if the ring is not worn for 24 hours or longer, the mental patterns collapse and must be reestablished.\nThe lashuntas of Castrovel devised the mind guardians to protect the less mentally adept against outside control. Android engineers particularly skilled in the construction of self-aware neural networks assisted in the design. While most commonly found as a ring, a mind guardian can take the form of any compact piece of jewelry or personal adornment, but it functions only when in direct contact with the body.",
    weight: "-",
    source: "МС"
},
{
    name: "Руночервь",
    type: "Гибридный предмет",
    lvl: 12,
    price: 37000,
    descr: "Currently interlaced with the skull and spine of one of Serovox\’s defeated foes, this hybrid item appears to be a 24-inch-long metallic centipede covered in runes. When it is placed near your ear (or a similar orifice), it animates and enters your body. Once inside you, the runeworm intertwines with your internal anatomy and releases an arcane virus that rewrites and improves some part of your body\’s function. It functions as a mk 2 synergizing symbiote, which is able to increase an ability score by 4. However, it is so advanced that it can instead upgrade any mk 2 personal upgrade already in your system to a mk 3 personal upgrade, increasing the ability score bonus from +4 to +6.",
    weight: "-",
    source: "СП-06"
},
{
    name: "Эоксийский терзающий посох",
    type: "Гибридный предмет",
    lvl: 13,
    price: 48500,
    descr: "Consisting of a long metallic shaft capped with a two-pronged head, an Eoxian wrackstaff is a two-handed basic melee weapon that deals 6d4 bludgeoning damage and has the block weapon special property. On a critical hit, the target is affected by inflict pain (CL 13th). Undead creatures are immune to this critical hit effect.",
    weight: "1",
    source: "ИА-01"
},
{
    name: "Нуль-пространственная камера (тип 3)",
    type: "Гибридный предмет",
    lvl: 13,
    price: 50000,
    descr: "A null-space chamber is a circular device often designed to be strapped to an arm or backpack. When you press a button on the side, the device creates a circular extradimensional rift to a pocket space, the size of which is determined by the null-space chamber\’s model. You can close it by pressing the button again, causing the entrance to the space to disappear. Anything stored within the space remains, however, traveling with the item. The null-space chamber can be opened and closed only from the outside.\nThe only air within the pocket space is that which enters when you open the entrance. The device does not accumulate bulk even as its pocket space is filled. Each null-space chamber is associated with its own particular extradimensional space. Each null-space chamber can carry a set amount of bulk, after which it can no longer be closed (even if it has room left for more material). Spells and items that contain or create extradimensional spaces, such as other null-space chambers, do not function within a null-space chamber\’s pocket dimension.\nA readout on a null-space chamber automatically catalogs all items within it, and if the chamber is open, you can call up any such item and have it placed in your hand as a full action.\nYou can close up to 100 bulk in this device\’s pocket space, a 9-foot cube. It can hold enough air for one Medium creature or two Small creatures for 2 days.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Глаза Реан",
    type: "Гибридный предмет",
    lvl: 13,
    price: 55000,
    descr: "Serovox pried this pair of pale sapphire gems from the head of an inevitable they destroyed in a duel. When you hold one of the eyes in one hand, you can control the other as a spy drone that can\’t be upgraded. You see what the flying eye sees through the eye you hold. However, if you place the gems over your own eyes, they burrow into your skull and replace two of your eyes (destroying the optic nerves of any additional eyes if you have more than two eyes), functioning as a long-range darkvision capacitors augmentation. You can still send out one eye as a spy drone, during which time the eyes do not grant you darkvision. When the eyes aren\’t embedded in a skull and aren\’t in use, a reddish mist slowly coalesces around them.",
    weight: "Л",
    source: "СП-06"
},
{
    name: "Очки предвидения (тип 3)",
    type: "Гибридный предмет",
    lvl: 14,
    price: 77000,
    descr: "Prescient lenses blend quantum computing and divination magic to model, extrapolate, and display events happening in the next few seconds as translucent holograms. A pair of lenses has one charge, which is refreshed each day, and a creature can benefit from a single use of prescient lenses each day (with any subsequent attempt showing the same few seconds of time as the first daily use). Prescient lenses were originally as optical enhancements for the robotic anacites of Aballon and can be integrated into a robot for the listed price. Alternatively, they can be installed as a cybernetic eye augmentation for 1,000 additional credits.\nВы можете потратить заряд очков следующим образом:\nТип 3: \n- В качестве сопутствующего действия вы можете изучить изображения в линзах, чтобы получить бонус +1 (интуитивный) к одной проверке атаки, характеристики или навыка, совершаемой до начала вашего хода.\n- В качестве сопутствующего действия вы можете изучить изображения в линзах, чтобы получить в проверке атаки, характеристики или навыка, совершаемой до начала вашего хода, совершить двойной бросок и взять лучший результат.\n- В качестве ответного действия перебросить проваленную проверку атаки, характеристики или навыка.",
    weight: "-",
    source: "МС"
},
{
    name: "Телепатический обруч (тип 3)",
    type: "Гибридный предмет",
    lvl: 14,
    price: 78000,
    descr: "Although items with powers similar to those of the mindlink circlet have existed in the Pact Worlds for thousands of years, the technological components of the this useful item were an innovation that made its powers readily available. The effects of a mindlink circlet depend upon its model, as described below.\nYou can telepathically communicate with any creatures within 100 feet that are capable of understanding language, including languages you do not understand. This otherwise functions like a shirren\’s limited telepathy racial trait.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Мнемонический редактор (тип 3)",
    type: "Гибридный предмет",
    lvl: 15,
    price: 20000,
    descr: "A mnemonic editor consists of a complex series of brain implant injectors, digital harrow deck autoreaders, illusion runes, and virtual-reality programs, all controlled by an enchanted analysis computer and attached to a mobile surgical bed. The network of magic and technology is capable of removing experiences from a patient strapped to the bed over the course of a single 24-hour session. Skills and knowledge can be excised, lessons unlearned and muscle memory altered. Memories are not lost entirely; the patient still recalls what it did during its life, whom it met, and how it felt about the moments it experienced, but the impact of those experiences is subtly altered. The device then creates a new set of experiences—clearly artificial but no less effective—by leaving impressions and implanting new knacks, muscle memory, reflexes, and skills.\nIf you use a mnemonic editor, you can undo 2 character levels\’ worth of decisions about which class levels you took, which feats you selected, how you applied any level-based increases to ability scores, how you assigned new skill ranks, and so on. All decisions you made as a result of advancing over the previous 2 character levels you gained are undone. You then make new selections, including new class levels, feats, skills, and the like, as if you had regained the 2 missing character levels. Go through the normal process of advancing your character through each of these 2 levels.\nEach mnemonic editor works only once—the strain on its technology and the consequences of rewriting your past to even this small degree cause it to break down into valueless junk after a single session. Additionally, the alterations made to you render it more difficult for such extraordinary procedures to be effective in the future. A mk 1 mnemonic editor cannot be used on you if you have already benefited from one in the past. However, it is possible to use a more advanced mk 2 model that functions in the same manner, even if you have already used a mk 1 mnemonic editor. Of course, you can only benefit from a mk 2 mnemonic editor once. There exist even more advanced mk 3 and mk 4 models, and each can be used on you once even after you have used a lower-level mnemonic editor, but they are so expensive that they are usually produced only upon request.",
    weight: "10",
    source: "ОКП"
},
{
    name: "Нуль-пространственная камера (тип 4)",
    type: "Гибридный предмет",
    lvl: 17,
    price: 250000,
    descr: "A null-space chamber is a circular device often designed to be strapped to an arm or backpack. When you press a button on the side, the device creates a circular extradimensional rift to a pocket space, the size of which is determined by the null-space chamber\’s model. You can close it by pressing the button again, causing the entrance to the space to disappear. Anything stored within the space remains, however, traveling with the item. The null-space chamber can be opened and closed only from the outside.\nThe only air within the pocket space is that which enters when you open the entrance. The device does not accumulate bulk even as its pocket space is filled. Each null-space chamber is associated with its own particular extradimensional space. Each null-space chamber can carry a set amount of bulk, after which it can no longer be closed (even if it has room left for more material). Spells and items that contain or create extradimensional spaces, such as other null-space chambers, do not function within a null-space chamber\’s pocket dimension.\nA readout on a null-space chamber automatically catalogs all items within it, and if the chamber is open, you can call up any such item and have it placed in your hand as a full action.\nYou can close up to 200 bulk in this device\’s pocket space, a 12-foot cube. It can hold enough air for one Medium creature or two Small creatures for 1 week.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Мнемонический редактор (тип 4)",
    type: "Гибридный предмет",
    lvl: 20,
    price: 125000,
    descr: "A mnemonic editor consists of a complex series of brain implant injectors, digital harrow deck autoreaders, illusion runes, and virtual-reality programs, all controlled by an enchanted analysis computer and attached to a mobile surgical bed. The network of magic and technology is capable of removing experiences from a patient strapped to the bed over the course of a single 24-hour session. Skills and knowledge can be excised, lessons unlearned and muscle memory altered. Memories are not lost entirely; the patient still recalls what it did during its life, whom it met, and how it felt about the moments it experienced, but the impact of those experiences is subtly altered. The device then creates a new set of experiences—clearly artificial but no less effective—by leaving impressions and implanting new knacks, muscle memory, reflexes, and skills.\nIf you use a mnemonic editor, you can undo 2 character levels\’ worth of decisions about which class levels you took, which feats you selected, how you applied any level-based increases to ability scores, how you assigned new skill ranks, and so on. All decisions you made as a result of advancing over the previous 2 character levels you gained are undone. You then make new selections, including new class levels, feats, skills, and the like, as if you had regained the 2 missing character levels. Go through the normal process of advancing your character through each of these 2 levels.\nEach mnemonic editor works only once—the strain on its technology and the consequences of rewriting your past to even this small degree cause it to break down into valueless junk after a single session. Additionally, the alterations made to you render it more difficult for such extraordinary procedures to be effective in the future. A mk 1 mnemonic editor cannot be used on you if you have already benefited from one in the past. However, it is possible to use a more advanced mk 2 model that functions in the same manner, even if you have already used a mk 1 mnemonic editor. Of course, you can only benefit from a mk 2 mnemonic editor once. There exist even more advanced mk 3 and mk 4 models, and each can be used on you once even after you have used a lower-level mnemonic editor, but they are so expensive that they are usually produced only upon request.",
    weight: "10",
    source: "ОКП"
},
{
    name: "Удобный патронташ",
    type: "Гибридный предмет (надеваемый)",
    lvl: 4,
    price: 2000,
    descr: "Этот патронаш прекрасно подходит для любого существа средних размеров. У него пять отделений, о одному на каждый тип оружия: длинноствольное, короткоствольное и тяжёлое оружие, оружие ближнего боя и взрывные устройства. Каждое отделение открывается во межпространственный карман, предназначенный для хранения боеприпасов и аккумуляторов общим весом не более 1 (для этих целей считайте, что каждые 10 аккумуляторов или 10 единиц боеприпасов незначительного веса имеют лёгкий вес). Патронаш не меняет вес, даже если все его отделения набиты битком.\nКаждый удобны патронаш оснащён ИИ, который управляет работизированным компонентами. В качестве быстрого действия вы можете приказать ему достать боеприпасы или аккумуляторы общим весом не более 1 – они сразу окажутся в одной из ваших рук.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Интоксикант, слабый",
    type: "Интоксикант",
    lvl: "-",
    price: 1,
    descr: "The price and bulk listed here is of a single serving of an intoxicating beverage or inhaled substance, which in the Pact Worlds is most often alcohol or tobacco. An intoxicant\’s potency can be minor or superior. A minor intoxicant might be beer or wine, which takes a few servings to cause any physiological effects. A superior intoxicant is usually a strong spirit, such as whiskey, that can start producing effects after a single serving. Unlike drugs, intoxicants are usually not addictive, although a GM might rule that a PC who partakes of too much of an intoxicant on a regular basis might begin to suffer the effects of an addictive drug",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Интоксикант, сильный",
    type: "Интоксикант",
    lvl: "-",
    price: "От 10",
    descr: "The price and bulk listed here is of a single serving of an intoxicating beverage or inhaled substance, which in the Pact Worlds is most often alcohol or tobacco. An intoxicant\’s potency can be minor or superior. A minor intoxicant might be beer or wine, which takes a few servings to cause any physiological effects. A superior intoxicant is usually a strong spirit, such as whiskey, that can start producing effects after a single serving. Unlike drugs, intoxicants are usually not addictive, although a GM might rule that a PC who partakes of too much of an intoxicant on a regular basis might begin to suffer the effects of an addictive drug.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Анальгетик, ранг 1",
    type: "Лекарство",
    lvl: 1,
    price: 75,
    descr: "An analgesic deadens sensory input and is used by medical professionals to reduce sensations of pain. If you take or are injected with an analgesic, you are flat-footed for 1 round per tier of the medicinal. You also gain a bonus (equal to the analgesic\’s tier) to saving throws against pain effects for 10 minutes per tier of the medicinal.",
    weight: "-",
    source: "ОКП"
},
{
    name: "Антитоксин, ранг 1",
    type: "Лекарство",
    lvl: 1,
    price: 75,
    descr: "An antitoxin is a broad-spectrum medicinal designed to weaken all poisons in your system. When you take or are injected with an antitoxin, you gain a bonus (equal to 3 + the medicinal\’s tier) to saving throws against poison for a number of hours equal to its tier.",
    weight: "-",
    source: "ОКП"
},
{
    name: "Транквилизатор, ранг 1",
    type: "Лекарство",
    lvl: 1,
    price: 75,
    descr: "Non-lethal damage: 1d4\nNumerous mild sedatives commonly available for purchase have legitimate medical uses, but they are also popular among some bounty hunters to help capture their quarries alive. If you take or are injected with a sedative, you take nonlethal damage. When suffering from an emotion or fear effect that allows a saving throw to negate it, you can take or be injected with a sedative that permits you to immediately attempt a new saving throw with a bonus equal to the sedative\’s tier to end the effect, as long as it\’s not a permanent or instantaneous effect.",
    weight: "-",
    source: "ОКП"
},
{
    name: "Анальгетик, ранг 2",
    type: "Лекарство",
    lvl: 5,
    price: 450,
    descr: "An analgesic deadens sensory input and is used by medical professionals to reduce sensations of pain. If you take or are injected with an analgesic, you are flat-footed for 1 round per tier of the medicinal. You also gain a bonus (equal to the analgesic\’s tier) to saving throws against pain effects for 10 minutes per tier of the medicinal.",
    weight: "-",
    source: "ОКП"
},
{
    name: "Антитоксин, ранг 2",
    type: "Лекарство",
    lvl: 5,
    price: 450,
    descr: "An antitoxin is a broad-spectrum medicinal designed to weaken all poisons in your system. When you take or are injected with an antitoxin, you gain a bonus (equal to 3 + the medicinal\’s tier) to saving throws against poison for a number of hours equal to its tier.",
    weight: "-",
    source: "ОКП"
},
{
    name: "Транквилизатор, ранг 2",
    type: "Лекарство",
    lvl: 5,
    price: 450,
    descr: "Non-lethal damage: 2d4\nNumerous mild sedatives commonly available for purchase have legitimate medical uses, but they are also popular among some bounty hunters to help capture their quarries alive. If you take or are injected with a sedative, you take nonlethal damage. When suffering from an emotion or fear effect that allows a saving throw to negate it, you can take or be injected with a sedative that permits you to immediately attempt a new saving throw with a bonus equal to the sedative\’s tier to end the effect, as long as it\’s not a permanent or instantaneous effect.",
    weight: "-",
    source: "ОКП"
},
{
    name: "Анальгетик, ранг 3",
    type: "Лекарство",
    lvl: 10,
    price: 2700,
    descr: "An analgesic deadens sensory input and is used by medical professionals to reduce sensations of pain. If you take or are injected with an analgesic, you are flat-footed for 1 round per tier of the medicinal. You also gain a bonus (equal to the analgesic\’s tier) to saving throws against pain effects for 10 minutes per tier of the medicinal.",
    weight: "-",
    source: "ОКП"
},
{
    name: "Антитоксин, ранг 3",
    type: "Лекарство",
    lvl: 10,
    price: 2700,
    descr: "An antitoxin is a broad-spectrum medicinal designed to weaken all poisons in your system. When you take or are injected with an antitoxin, you gain a bonus (equal to 3 + the medicinal\’s tier) to saving throws against poison for a number of hours equal to its tier.",
    weight: "-",
    source: "ОКП"
},
{
    name: "Транквилизатор, ранг 3",
    type: "Лекарство",
    lvl: 10,
    price: 2700,
    descr: "Non-lethal damage: 4d4\nNumerous mild sedatives commonly available for purchase have legitimate medical uses, but they are also popular among some bounty hunters to help capture their quarries alive. If you take or are injected with a sedative, you take nonlethal damage. When suffering from an emotion or fear effect that allows a saving throw to negate it, you can take or be injected with a sedative that permits you to immediately attempt a new saving throw with a bonus equal to the sedative\’s tier to end the effect, as long as it\’s not a permanent or instantaneous effect.",
    weight: "-",
    source: "ОКП"
},
{
    name: "Анальгетик, ранг 4",
    type: "Лекарство",
    lvl: 15,
    price: 16200,
    descr: "An analgesic deadens sensory input and is used by medical professionals to reduce sensations of pain. If you take or are injected with an analgesic, you are flat-footed for 1 round per tier of the medicinal. You also gain a bonus (equal to the analgesic\’s tier) to saving throws against pain effects for 10 minutes per tier of the medicinal.",
    weight: "-",
    source: "ОКП"
},
{
    name: "Антитоксин, ранг 4",
    type: "Лекарство",
    lvl: 15,
    price: 16200,
    descr: "An antitoxin is a broad-spectrum medicinal designed to weaken all poisons in your system. When you take or are injected with an antitoxin, you gain a bonus (equal to 3 + the medicinal\’s tier) to saving throws against poison for a number of hours equal to its tier.",
    weight: "-",
    source: "ОКП"
},
{
    name: "Транквилизатор, ранг 4",
    type: "Лекарство",
    lvl: 15,
    price: 16200,
    descr: "Non-lethal damage: 8d4\nNumerous mild sedatives commonly available for purchase have legitimate medical uses, but they are also popular among some bounty hunters to help capture their quarries alive. If you take or are injected with a sedative, you take nonlethal damage. When suffering from an emotion or fear effect that allows a saving throw to negate it, you can take or be injected with a sedative that permits you to immediately attempt a new saving throw with a bonus equal to the sedative\’s tier to end the effect, as long as it\’s not a permanent or instantaneous effect.",
    weight: "-",
    source: "ОКП"
},
{
    name: "Камень чар, 0 круг",
    type: "Магический предмет",
    lvl: 1,
    price: 50,
    descr: "Consisting of one or more lattices of carefully arranged lines of rare metal and bits of precious stone in a silicon casing, each lattice in a spell gem is encoded with magical writings equivalent to the casting of a single, specific spell. Holding a spell gem in your hand unlocks little-used portions of your mind, granting you the ability to temporarily cast the spell encoded within the gem without using up your daily spell slots. You must hold the spell gem in your hand throughout the spell\’s casting time and must spend at least a standard action using the spell gem, even if the spell\’s casting time is shorter. Each spell stored within a spell gem can be cast only once, after which the magic encoded within the spell gem\’s lattice is forever expended.\nOnly spellcasters are capable of using spell gems—if you aren\’t a spellcaster, you\’re unable to make use of the knowledge that the gem unlocks. You don\’t need to know the spell within a spell gem to use it, but the spell must be on your class\’s spell list (or have otherwise been added to your spell list) and you must have a high enough key ability score to cast it. If the spell gem\’s item level is higher than your caster level, once you\’ve spent the full casting time of the spell, you must succeed at a caster level check with a DC equal to the spell gem\’s item level + 1 or you fail to cast the spell. If you fail to cast a spell from a spell gem, the spell remains within the gem and you can attempt to use it again.\nTo craft a spell gem, you have to know the spell you\’re encoding into the gem. If a spell requires expensive materials as part of its casting (such as raise dead), you must provide those while crafting the gem, and the gem\’s price is increased by the price of the components. You can create larger, compound spell gems with multiple spells in multiple lattices, with a price equal to the total price of all spells stored within it. Such spell gems can be used to cast only one spell at a time.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Криптографическая татуировка агента",
    type: "Магический предмет",
    lvl: 1,
    price: 50,
    descr: "The secretive members of the Android Abolitionist Front identify each other with invisible magical tattoos. When you are within 60 feet of a being with another encryption tattoo and activate your encryption tattoo with a code word as a move action, your tattoo becomes visible for 1 minute and glows faintly. The tattoo closely resembles the glowing circuit patterns prevalent on android skin, and is therefore particularly obvious on non-androids. The agent encryption tattoo is the standard type of encryption tattoo. \nЕhere is no limit on the number of times you can cause your encryption tattoo to appear.\nAn encryption tattoo doesn\’t count as a worn magic item, and it can\’t be disarmed or sundered. In addition, it can be installed in an android\’s racial armor upgrade slot.",
    weight: "-",
    source: "МС"
},
{
    name: "Сыворотка исцеления (тип 1)",
    type: "Магический предмет",
    lvl: 1,
    price: 75,
    descr: "Этот медицинский эликсир практически моментально сращивает кости и исцеляет урон. Живое существо, выпившее его, восстанавливает 1d8 ПЗ.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Сыворотка преображения",
    type: "Магический предмет",
    lvl: 1,
    price: 75,
    descr: "Upon drinking this elixir, your coloration and the general form of your features instantly and permanently changes. Within the range that is normal for your race and sex, you can select any skin tone, hair and eye color, and alter the nature of such things as the shape or your nose or chin, the length of your fingers, broadness of your frame, and so on. You are still recognizable as yourself unless you attempt a Disguise check to alter your features enough to conceal your identity (comparing the result of this Disguise check to any effort to determine if you are the same person as your original appearance). In no case can you take on the exact appearance of another creature (even with a Disguise check; the level of control is not that fine).",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Плащ заряда",
    type: "Магический предмет",
    lvl: 1,
    price: 200,
    descr: "A charge cloak can power devices that depend on electrical charges as if it were a battery. The cloak produces 4 charges each day, but they must be used as a single unit. Thus you could power a single attack from a yellow star plasma sword, which has a usage of 4, but you could also make only a single attack with a sub zero pistol, which has a usage of 1. The item must be one which uses charges or a battery, rather than petrol, rockets, rounds, or other forms of ammunition or power. You must be wearing or touching the item to be charged. You cannot use this item to recharge a battery or item; it can only be used to directly power an item for a single usage.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Хрустальное веретено",
    type: "Магический предмет",
    lvl: 1,
    price: 245,
    descr: "Камни вечных – магические самоцветы, которые вращаются по арбите вокруг вашей головы (или его ближайшего аналога для безголовых существ) и даруют вам постоянный магический эффект, пока там находятся. они не учитываются при определении максимального количества надеваемых магических предметов – одновременно можно использовать сколько угодно таких камней. Чаще всего подобные камни встречаются в звёздной империи Ацланти, где их применяют особым образом, но самые распространённые виды камней вечных можно найти и в магических лавках во многих крупных поселениях.\nДля того, чтобы выпустить камень вечных на орбиту вокруг вашей головы, требуется основное действие, а для того, чтобы его оттуда снять – сопутствующее. орбита может проходить на расстоянии от 3 дюймов до 3 футов от головы (на ваш выбор), но всегда за пределами вашего шлема или брони. КБ находящегося на орбите камня вечных равен вашему уровню персонажа + 12, его могут атаковать или даже захватить (совершив успешную проверку захвата, атакующих выхватывает камень с орбиты, взяв его в руку).\nПочти все камни вечных способны светиться ярким светом. В качестве основного действия вы можете зажечь или погасить камень вечных, чьё свечение улучшает освещённость на вашей клетке на одну ступень.\nУ каждого камня есть как минимум одно дополнительное свойство, действующее, пока он на орбите вокруг вас.\nХрустальное веретено поддерживает вас, позволяя обходиться без воды и пищи.",
    weight: "-",
    source: "ОКП"
},
{
    name: "Перчатки безрассудства",
    type: "Магический предмет",
    lvl: 1,
    price: 250,
    descr: "These thick leather gloves are often worn by aggressive vehicle pilots. Increase the collision DC of any vehicle you are driving by 2, and gain a +2 circumstance bonus to your Piloting checks when taking the ram and run over actions.",
    weight: "Л",
    source: "ИА-01"
},
{
    name: "Кольцо шёпота",
    type: "Магический предмет",
    lvl: 1,
    price: 300,
    descr: "This simple gold band helps you hear when specific names are spoken. The ring can be attuned to recognize up to five proper names known to you, such as specific people, places, or things. The ring cannot be attuned to words that are not used as proper names. Attuning a ring of whispers to a new name takes 10 minutes, and if the new name exceeds the five-name limit, the oldest attuned name ceases to be attuned.\nThe ring grants you a +5 insight bonus to hearing-based Perception checks and sense through (hearing) with a range of 60 feet, but both abilities apply only to allow you to hear one of the attuned names being spoken. This allows you to potentially hear a name being spoken a room away or even through soundproof glass, but not any other sounds or conversations.",
    weight: "-",
    source: "ОКП"
},
{
    name: "Камень чар, 1 круг",
    type: "Магический предмет",
    lvl: 2,
    price: 140,
    descr: "Consisting of one or more lattices of carefully arranged lines of rare metal and bits of precious stone in a silicon casing, each lattice in a spell gem is encoded with magical writings equivalent to the casting of a single, specific spell. Holding a spell gem in your hand unlocks little-used portions of your mind, granting you the ability to temporarily cast the spell encoded within the gem without using up your daily spell slots. You must hold the spell gem in your hand throughout the spell\’s casting time and must spend at least a standard action using the spell gem, even if the spell\’s casting time is shorter. Each spell stored within a spell gem can be cast only once, after which the magic encoded within the spell gem\’s lattice is forever expended.\nOnly spellcasters are capable of using spell gems—if you aren\’t a spellcaster, you\’re unable to make use of the knowledge that the gem unlocks. You don\’t need to know the spell within a spell gem to use it, but the spell must be on your class\’s spell list (or have otherwise been added to your spell list) and you must have a high enough key ability score to cast it. If the spell gem\’s item level is higher than your caster level, once you\’ve spent the full casting time of the spell, you must succeed at a caster level check with a DC equal to the spell gem\’s item level + 1 or you fail to cast the spell. If you fail to cast a spell from a spell gem, the spell remains within the gem and you can attempt to use it again.\nTo craft a spell gem, you have to know the spell you\’re encoding into the gem. If a spell requires expensive materials as part of its casting (such as raise dead), you must provide those while crafting the gem, and the gem\’s price is increased by the price of the components. You can create larger, compound spell gems with multiple spells in multiple lattices, with a price equal to the total price of all spells stored within it. Such spell gems can be used to cast only one spell at a time.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Магическая ампула, 0 круг",
    type: "Магический предмет",
    lvl: 2,
    price: 200,
    descr: "Магические ампулы содержат в себе жидкий конденсат магической энергии заклинания, предназначенный для инъекции. Часто такие одноразовые магические инъекции называют \’шприц-чарами\’. они воспроизводят заклинание с положительным эффектом (такое, у которого в разделах \’Испытание\’ или \’Устойчивость к магии\’ в описании указано \’безвредно\’), кроме заклинаний школы прорицания или тех, что создают любого рода связь между заклинателем и целью. Кроме этого, круг заклинания не может быть выше 3, время сотворения должно быть не больше 1 минуты, а целью такого заклинания должно быть одно или несколько существ (но не только сам заклинатель). Если заклинание действует и на существ, и на предметы, то в форме ампулы оно оказывает эффект только на существ. Если для сотворения заклинания требуется потратить 1 ПР, то при использовании его в виде ампулы вам также придётся потратить 1 ПР. Если вы не хотите тратить ПР или у вас их нет, заклинание не срабатывает.\nУровень и УЗ магической ампулы всегда равен утроенному кругу заклинания, которое оно воспроизводит (в случае заклинаний 0 круга уровень и УЗ ампулы равны 2). Для создания ампулы необходимо выполнения тех же требований, что и при создании камней чар.\nВы можете овершить инъекцию магической ампулы только себе, существу-добровольцу или находящемуся без сознания. Для применения на себя или добровольца требуется основное действие, а для инъекции сузеству без сознания – действие полного хода. Эффект магической ампулы аналогичен эффекту заключенного в ней заклинания, вы принимаете все решеня относительно эффекта заклинания, как если бы сотворили его: вы одновременно считаетесь и целью, и заклинателем.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Мертвецкая лампа",
    type: "Магический предмет",
    lvl: 2,
    price: 500,
    descr: "Руки: 1\nОбласть действия: радиус 10 футов.\nThis portable light source functions as a lantern that never requires a battery, though the light it gives off is an unsettling pale green. Once per day as a standard action, you can touch an arcane rune on the lantern\’s base to cause all corpses within the 10-foot radius of its light to speak, as per grave words.",
    weight: "Л",
    source: "СП-04"
},
{
    name: "Прочный китель",
    type: "Магический предмет",
    lvl: 2,
    price: 600,
    descr: "This waterproof leather jacket functions as a travel outfit. Once per day as a reaction, you can reroll a failed Fortitude saving throw",
    weight: "Л",
    source: "ИА-01"
},
{
    name: "Кольцо сопротивляемости (тип 1)",
    type: "Магический предмет",
    lvl: 2,
    price: 735,
    descr: "Магия этого кольца защищает вас от тех атак и эффектов, к которым вы особенно уязвимы. Вы получаете бонус +1 усиления к испытанию с наименьшим базовым модификатором. Если таких испытаний несколько, вы выбираете, какое из них получит бонус, надевая кольцо впервые. Этот выбор нельзя изменить до тех пор, пока наименьшим не станет базовый модификатор другого испытания. Величина бонуса зависит от модели кольца сопротивляемости.",
    weight: "-",
    source: "ОКП"
},
{
    name: "Кольцо сопротивляемости, тип 1",
    type: "Магический предмет",
    lvl: 2,
    price: 735,
    descr: "Магия этого кольца защищает вас от тех атак и эффектов, к которым вы особенно уязвимы. Вы получаете бонус усиления к испытанию с наименьшим базовым модификатором. Если таких испытаний несколько, вы выбираете, какое из них получит бонус, надевая кольцо впервые. Этот выбор нельзя изменитьдо тех пор, пока наименьшим не станет базовый модификатор другого испытания. Величина бонуса зависит от модели кольца сопротивляемости.\nБонус: +1",
    weight: "-",
    source: "ОКП"
},
{
    name: "Иридирующее веретено",
    type: "Магический предмет",
    lvl: 2,
    price: 740,
    descr: "Камни вечных – магические самоцветы, которые вращаются по арбите вокруг вашей головы (или его ближайшего аналога для безголовых существ) и даруют вам постоянный магический эффект, пока там находятся. они не учитываются при определении максимального количества надеваемых магических предметов – одновременно можно использовать сколько угодно таких камней. Чаще всего подобные камни встречаются в звёздной империи Ацланти, где их применяют особым образом, но самые распространённые виды камней вечных можно найти и в магических лавках во многих крупных поселениях.\nДля того, чтобы выпустить камень вечных на орбиту вокруг вашей головы, требуется основное действие, а для того, чтобы его оттуда снять – сопутствующее. орбита может проходить на расстоянии от 3 дюймов до 3 футов от головы (на ваш выбор), но всегда за пределами вашего шлема или брони. КБ находящегося на орбите камня вечных равен вашему уровню персонажа + 12, его могут атаковать или даже захватить (совершив успешную проверку захвата, атакующих выхватывает камень с орбиты, взяв его в руку).\nПочти все камни вечных способны светиться ярким светом. В качестве основного действия вы можете зажечь или погасить камень вечных, чьё свечение улучшает освещённость на вашей клетке на одну ступень.\nУ каждого камня есть как минимум одно дополнительное свойство, действующее, пока он на орбите вокруг вас.\nThis aeon stone sustains you by negating the need to breathe.",
    weight: "-",
    source: "ОКП"
},
{
    name: "Магическая ампула, 1 круг",
    type: "Магический предмет",
    lvl: 3,
    price: 300,
    descr: "Магические ампулы содержат в себе жидкий конденсат магической энергии заклинания, предназначенный для инъекции. Часто такие одноразовые магические инъекции называют \’шприц-чарами\’. они воспроизводят заклинание с положительным эффектом (такое, у которого в разделах \’Испытание\’ или \’Устойчивость к магии\’ в описании указано \’безвредно\’), кроме заклинаний школы прорицания или тех, что создают любого рода связь между заклинателем и целью. Кроме этого, круг заклинания не может быть выше 3, время сотворения должно быть не больше 1 минуты, а целью такого заклинания должно быть одно или несколько существ (но не только сам заклинатель). Если заклинание действует и на существ, и на предметы, то в форме ампулы оно оказывает эффект только на существ. Если для сотворения заклинания требуется потратить 1 ПР, то при использовании его в виде ампулы вам также придётся потратить 1 ПР. Если вы не хотите тратить ПР или у вас их нет, заклинание не срабатывает.\nУровень и УЗ магической ампулы всегда равен утроенному кругу заклинания, которое оно воспроизводит (в случае заклинаний 0 круга уровень и УЗ ампулы равны 2). Для создания ампулы необходимо выполнения тех же требований, что и при создании камней чар.\nВы можете овершить инъекцию магической ампулы только себе, существу-добровольцу или находящемуся без сознания. Для применения на себя или добровольца требуется основное действие, а для инъекции сузеству без сознания – действие полного хода. Эффект магической ампулы аналогичен эффекту заключенного в ней заклинания, вы принимаете все решеня относительно эффекта заклинания, как если бы сотворили его: вы одновременно считаетесь и целью, и заклинателем.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Кольцо клыков",
    type: "Магический предмет",
    lvl: 3,
    price: 315,
    descr: "When you wear this ring, your teeth become long and sharp, giving you a powerful bite attack. You can choose to have your unarmed attacks deal lethal piercing damage, and if you are 3rd level or higher, you automatically gain a special version of the Weapon Specialization feat that adds double your level to the damage of these unarmed attacks (rather than adding your level).",
    weight: "Л",
    source: "СП-02"
},
{
    name: "Сыворотка смены пола",
    type: "Магический предмет",
    lvl: 3,
    price: 350,
    descr: "Mass production has rendered this once-rare serum easy and inexpensive to obtain among the Pact Worlds. Upon drinking this elixir, your biology instantly transforms to take on a set of sexual characteristics of your choice, changing both your appearance and physiology accordingly. You have some mild control over the details of this change, but you retain a strong “family resemblance” to your former appearance.\nThe elixir\’s magic functions instantaneously and cannot be dispelled. Your new anatomy is as healthy and functional as your previous body\’s, potentially allowing you to conceive, carry, or bear children (depending on your species\’ biology). Drinking a second elixir of sex shift either reverts you back to a former form or allows you to adopt other sexual characteristics, as you choose. The elixir has no effect if you are unwilling, and the presence of certain sex-specific biological processes, such as gestation, may prevent this serum from taking effect.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Законоуказатель",
    type: "Магический предмет",
    lvl: 3,
    price: 1200,
    descr: "This archaic, ornate compass is a holy trinket sacred to AbadarCorp, and its needle is shaped like a thin golden key. A lawfinder\’s needle always points toward the nearest settlement of at least 1,000 people; within such a settlement, the needle points to the primary center of government or civil administration for the settlement. This item can\’t detect a settlement more than 100 miles away, except for settlements with the bureaucratic quality, which a lawfinder can detect up to 1,000 miles away. If no such settlements are within range, the lawfinder\’s needle spins slowly.\nAs long as the lawfinder\’s needle points to a settlement or civil center, it grants you a +2 insight bonus to Survival checks to avoid getting lost.",
    weight: "Л",
    source: "МС"
},
{
    name: "Болт Брай",
    type: "Магический предмет",
    lvl: 3,
    price: 1300,
    descr: "This simple, shiny metal bolt is the size of a thumbnail and has an image of a tiny gear on its head. As a full action, you can affix a Brigh\’s bolt to a broken suit of armor, tool, vehicle, or weapon to negate the penalties of the broken condition for as long as the bolt is affixed. The bolt does not repair any damage sustained by the object and the object is still visibly damaged, so its resale value is reduced as normal for a broken item. If the item is repaired so as to no longer have the broken condition, the Brigh\’s bolt falls off; otherwise, it can be removed as a full action. If an item to which a Brigh\’s bolt is attached is destroyed, the bolt is also destroyed.",
    weight: "-",
    source: "МС"
},
{
    name: "Мутно-синий ромбоид",
    type: "Магический предмет",
    lvl: 3,
    price: 1300,
    descr: "Камни вечных – магические самоцветы, которые вращаются по арбите вокруг вашей головы (или его ближайшего аналога для безголовых существ) и даруют вам постоянный магический эффект, пока там находятся. они не учитываются при определении максимального количества надеваемых магических предметов – одновременно можно использовать сколько угодно таких камней. Чаще всего подобные камни встречаются в звёздной империи Ацланти, где их применяют особым образом, но самые распространённые виды камней вечных можно найти и в магических лавках во многих крупных поселениях.\nДля того, чтобы выпустить камень вечных на орбиту вокруг вашей головы, требуется основное действие, а для того, чтобы его оттуда снять – сопутствующее. орбита может проходить на расстоянии от 3 дюймов до 3 футов от головы (на ваш выбор), но всегда за пределами вашего шлема или брони. КБ находящегося на орбите камня вечных равен вашему уровню персонажа + 12, его могут атаковать или даже захватить (совершив успешную проверку захвата, атакующих выхватывает камень с орбиты, взяв его в руку).\nПочти все камни вечных способны светиться ярким светом. В качестве основного действия вы можете зажечь или погасить камень вечных, чьё свечение улучшает освещённость на вашей клетке на одну ступень.\nУ каждого камня есть как минимум одно дополнительное свойство, действующее, пока он на орбите вокруг вас.\nWhile this aeon stone orbits you, as a reaction while falling, you can cast flight (1st level), targeting only yourself (caster level 3rd). This aeon stone can be activated once per day.",
    weight: "-",
    source: "СП-08"
},
{
    name: "Амулет камуфляжа",
    type: "Магический предмет",
    lvl: 3,
    price: 1400,
    descr: "This modest amulet projects a simple pattern over your outer layers of armor, clothing, and equipment, which helps you blend into the background. When in an environment with a maximum distance at which Perception checks can be attempted, rolls to see at what range other creatures can attempt Perception checks against you are rolled twice, and the lower result applies. See Chapter 11 for more information on the Perception ranges of different environments. The amulet\’s magic isn\’t powerful enough to make you invisible or grant a bonus to Stealth checks. You can activate or deactivate this camouflage as a standard action.",
    weight: "-",
    source: "ОКП"
},
{
    name: "Инстинктивный стабилизатор",
    type: "Магический предмет",
    lvl: 3,
    price: 1400,
    descr: "Kish shamans imbued this handheld scanner with mystical power to help heal the dying. When you use an instinctive stabilizer, you can use the Medicine skill untrained to attempt the long-term stability task. If you are trained in Medicine, you automatically succeed at this check. In addition, when you use this device, the DC for the first aid task of the Medicine skill is only 10.",
    weight: "Л",
    source: "СП-04"
},
{
    name: "Опалесцирующая белая пирамида",
    type: "Магический предмет",
    lvl: 3,
    price: 1400,
    descr: "Камни вечных – магические самоцветы, которые вращаются по арбите вокруг вашей головы (или его ближайшего аналога для безголовых существ) и даруют вам постоянный магический эффект, пока там находятся. они не учитываются при определении максимального количества надеваемых магических предметов – одновременно можно использовать сколько угодно таких камней. Чаще всего подобные камни встречаются в звёздной империи Ацланти, где их применяют особым образом, но самые распространённые виды камней вечных можно найти и в магических лавках во многих крупных поселениях.\nДля того, чтобы выпустить камень вечных на орбиту вокруг вашей головы, требуется основное действие, а для того, чтобы его оттуда снять – сопутствующее. орбита может проходить на расстоянии от 3 дюймов до 3 футов от головы (на ваш выбор), но всегда за пределами вашего шлема или брони. КБ находящегося на орбите камня вечных равен вашему уровню персонажа + 12, его могут атаковать или даже захватить (совершив успешную проверку захвата, атакующих выхватывает камень с орбиты, взяв его в руку).\nПочти все камни вечных способны светиться ярким светом. В качестве основного действия вы можете зажечь или погасить камень вечных, чьё свечение улучшает освещённость на вашей клетке на одну ступень.\nУ каждого камня есть как минимум одно дополнительное свойство, действующее, пока он на орбите вокруг вас.\nWhile this aeon stone orbits you, you have proficiency with one kind of weapon (laser pistol, plasma doshko, zero pistol, and so on) at all item levels. Each stone of this type is keyed to a particular kind of weapon when it is created. Changing the type of weapon an existing opalescent white pyramid aeon stone is keyed to requires time and 3 ranks in Mysticism, as if you were crafting the aeon stone, but this alteration has no cost.",
    weight: "-",
    source: "СП-08"
},
{
    name: "Адаптивная сыворотка, тип 1",
    type: "Магический предмет",
    lvl: 4,
    price: 350,
    descr: "A dose of adaptive serum consists of a small piece of ksarik flesh (usually the tip of one of its tentacles) floating in a slightly alcoholic tincture. For an hour after you consume an adaptive serum, the first time you take energy damage, you gain resistance against that type of damage for that attack and for the remainder of the hour or until you rest 10 minutes to regain Stamina Points, whichever comes first. The amount of energy resistance you receive depends on the level of the serum. A mk 1 adaptive serum grants energy resistance 5.",
    weight: "-",
    source: "ИА-01"
},
{
    name: "Усилитель истины",
    type: "Магический предмет",
    lvl: 4,
    price: 2000,
    descr: "This parabolic microphone is shaped like a pistol with a plastic cone for a barrel, and Kish shamans have imbued it with mystical power. To use a truth amplifier, point it at a sentient creature within 30 feet and pull the trigger (as a standard action). The target must then succeed a DC 14 Will save, or it can\’t deliberately lie for 5 minutes. Affected creatures are aware of this enchantment and can avoid answering questions they would normally respond to with a lie, being evasive as long as they remain within the boundaries of the truth. A truth amplifier can be used once per day.",
    weight: "Л",
    source: "СП-04"
},
{
    name: "Ярко-жёлтый кабошон",
    type: "Магический предмет",
    lvl: 4,
    price: 2000,
    descr: "Камни вечных – магические самоцветы, которые вращаются по арбите вокруг вашей головы (или его ближайшего аналога для безголовых существ) и даруют вам постоянный магический эффект, пока там находятся. они не учитываются при определении максимального количества надеваемых магических предметов – одновременно можно использовать сколько угодно таких камней. Чаще всего подобные камни встречаются в звёздной империи Ацланти, где их применяют особым образом, но самые распространённые виды камней вечных можно найти и в магических лавках во многих крупных поселениях.\nДля того, чтобы выпустить камень вечных на орбиту вокруг вашей головы, требуется основное действие, а для того, чтобы его оттуда снять – сопутствующее. орбита может проходить на расстоянии от 3 дюймов до 3 футов от головы (на ваш выбор), но всегда за пределами вашего шлема или брони. КБ находящегося на орбите камня вечных равен вашему уровню персонажа + 12, его могут атаковать или даже захватить (совершив успешную проверку захвата, атакующих выхватывает камень с орбиты, взяв его в руку).\nПочти все камни вечных способны светиться ярким светом. В качестве основного действия вы можете зажечь или погасить камень вечных, чьё свечение улучшает освещённость на вашей клетке на одну ступень.\nУ каждого камня есть как минимум одно дополнительное свойство, действующее, пока он на орбите вокруг вас.\nWhile this aeon stone orbits you, you gain a +4 insight bonus to Culture checks to decipher exotic, intricate, or very old writing. In addition, once per day as a standard action, this aeon stone can be activated to cast comprehend languages as a 1st-level spell (caster level 4th).",
    weight: "-",
    source: "СП-08"
},
{
    name: "Шлем крестоносца Иомедэй",
    type: "Магический предмет",
    lvl: 4,
    price: 2100,
    descr: "Originally created before the Gap for holy champions of Iomedae crusading in the Worldwound—a demon-haunted wasteland created by an Abyssal incursion on Golarion— Iomedaean crusader helms have been in constant production by the church of Iomedae for thousands of years. While only ancient pre-Gap helmets are considered relics, the magical properties of modern Iomedaean crusader helms match their archaic precursors. An Iomedaean crusader helm replaces a suit of armor\’s normal helmet (if any) and is incorporated into the armor\’s normal environmental protections; these protections do not function if the helm is removed. If the armor has an available upgrade slot, an Iomedaean crusader helm takes up one upgrade slot; otherwise, the helm counts as one of your two worn magic items.\nWhile wearing an Iomedaean crusader helm, the first time each day that you attempt a saving throw against an enchantment or illusion effect created by an evil outsider, roll the saving throw twice and take the best result. You cannot gain the effects of more than one Iomedaean crusader helm each day.",
    weight: "Л",
    source: "СП-01"
},
{
    name: "Топчущие сапоги",
    type: "Магический предмет",
    lvl: 4,
    price: 2500,
    descr: "These rugged boots are made from the finest mountain eel hide. You can ignore difficult terrain, but only in hilly and mountainous environments. In addition, once per day as a full action, you can move up to your speed through other creatures\’ spaces (as long as those creatures aren\’t larger than you are). Each creature in your path automatically takes 2d6+4 bludgeoning damage. A target of this trample ability can make an attack of opportunity against you as you pass through its space, but at a -4 penalty. A target can forgo this attack of opportunity to instead attempt a DC 16 Reflex save to take half damage.",
    weight: "Л",
    source: "ИА-01"
},
{
    name: "Сыворотка исцеления (тип 2)",
    type: "Магический предмет",
    lvl: 5,
    price: 425,
    descr: "Этот медицинский эликсир практически моментально сращивает кости и исцеляет урон. Живое существо, выпившее его, восстанавливает 3d8 ПЗ.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Камень чар, 2 круг",
    type: "Магический предмет",
    lvl: 5,
    price: 450,
    descr: "Consisting of one or more lattices of carefully arranged lines of rare metal and bits of precious stone in a silicon casing, each lattice in a spell gem is encoded with magical writings equivalent to the casting of a single, specific spell. Holding a spell gem in your hand unlocks little-used portions of your mind, granting you the ability to temporarily cast the spell encoded within the gem without using up your daily spell slots. You must hold the spell gem in your hand throughout the spell\’s casting time and must spend at least a standard action using the spell gem, even if the spell\’s casting time is shorter. Each spell stored within a spell gem can be cast only once, after which the magic encoded within the spell gem\’s lattice is forever expended.\nOnly spellcasters are capable of using spell gems—if you aren\’t a spellcaster, you\’re unable to make use of the knowledge that the gem unlocks. You don\’t need to know the spell within a spell gem to use it, but the spell must be on your class\’s spell list (or have otherwise been added to your spell list) and you must have a high enough key ability score to cast it. If the spell gem\’s item level is higher than your caster level, once you\’ve spent the full casting time of the spell, you must succeed at a caster level check with a DC equal to the spell gem\’s item level + 1 or you fail to cast the spell. If you fail to cast a spell from a spell gem, the spell remains within the gem and you can attempt to use it again.\nTo craft a spell gem, you have to know the spell you\’re encoding into the gem. If a spell requires expensive materials as part of its casting (such as raise dead), you must provide those while crafting the gem, and the gem\’s price is increased by the price of the components. You can create larger, compound spell gems with multiple spells in multiple lattices, with a price equal to the total price of all spells stored within it. Such spell gems can be used to cast only one spell at a time.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Сыворотка Миров Соглашения, абаллонская искра",
    type: "Магический предмет",
    lvl: 5,
    price: 475,
    descr: "This cool, sparkling fluid grants you a +2 insight bonus to Computers checks, and you can attempt checks with this skill untrained. Once while this serum is in effect, you can be healed by make whole or mending as though you were a construct.",
    weight: "Л",
    source: "МС"
},
{
    name: "Сыворотка Миров Соглашения, авессаломское радушие",
    type: "Магический предмет",
    lvl: 5,
    price: 475,
    descr: "When you imbibe this clear, syrupy fluid, you gain a +2 insight bonus to Diplomacy and Disguise checks. If you begin an attempt to gather information while under the effects of this serum, the attempt takes only 1 hour.",
    weight: "Л",
    source: "МС"
},
{
    name: "Сыворотка Миров Соглашения, акитонский ржавстер",
    type: "Магический предмет",
    lvl: 5,
    price: 475,
    descr: "Upon consumption, this bitter, rust-red fluid grants you a +2 insight bonus to Athletics and Survival checks, and you do not take a penalty to Survival checks when riding a creature bareback. This serum turns a regular drinker\’s teeth and lips rust-red in color—a side effect that Eppro Enterprises can\’t quite overcome.",
    weight: "Л",
    source: "МС"
},
{
    name: "Сыворотка Миров Соглашения, бреседская бурливость",
    type: "Магический предмет",
    lvl: 5,
    price: 475,
    descr: "When you drink this sweet, bubbling, yellow fluid, you find your memory expanded; you gain a +2 insight bonus to recall knowledge with the Culture, Life Science, Mysticism, Physical Science, and Profession skills and can attempt checks to recall knowledge untrained with these skills.",
    weight: "Л",
    source: "МС"
},
{
    name: "Сыворотка Миров Соглашения, верчитское сияние",
    type: "Магический предмет",
    lvl: 5,
    price: 475,
    descr: "Eppro Enterprises markets this sparkling, white fluid as a favored drink of athletes. You gain a +3 insight bonus to Athletics checks. While under the effects of this serum, you must fail an Athletics check by 10 or more to fall, fall prone, or sink (as applicable), rather than fail by 5 or more.",
    weight: "Л",
    source: "МС"
},
{
    name: "Сыворотка Миров Соглашения, диаспорийский сорвиголова",
    type: "Магический предмет",
    lvl: 5,
    price: 475,
    descr: "Popular with pilots throughout the Pact Worlds, this serum is bright orange with tiny dark specks whirling within it. It grants you a +2 insight bonus to Piloting checks and to Computers checks when piloting a vehicle or when acting as captain, pilot, or science officer of a starship.",
    weight: "Л",
    source: "МС"
},
{
    name: "Сыворотка Миров Соглашения, идарийское золото",
    type: "Магический предмет",
    lvl: 5,
    price: 475,
    descr: "Imbibing this translucent, golden fluid grants physical and mental grace. You gain a +3 insight bonus to Acrobatics and Sense Motive checks.",
    weight: "Л",
    source: "МС"
},
{
    name: "Сыворотка Миров Соглашения, кастровельское цветение",
    type: "Магический предмет",
    lvl: 5,
    price: 475,
    descr: "This green, floral-smelling concoction grants you a +2 insight bonus to Life Science and Survival checks, and you can attempt Life Science checks and Survival checks to rear a wild animal untrained. While this serum is in effect, you always know which direction is magnetic north from your current location, if applicable (such as on most planets).",
    weight: "Л",
    source: "МС"
},
{
    name: "Сыворотка Миров Соглашения, триаксийский драконий взор",
    type: "Магический предмет",
    lvl: 5,
    price: 475,
    descr: "This warm, fiery-red fluid grants you a +2 insight bonus to Perception checks, and you can ignore concealment caused by dim light (as if you had low-light vision or darkvision).",
    weight: "Л",
    source: "МС"
},
{
    name: "Сыворотка Миров Соглашения, эоксийское разложение",
    type: "Магический предмет",
    lvl: 5,
    price: 475,
    descr: "Eppro Enterprises doesn\’t include this serum in its public catalogs, but the serum\’s existence is an open secret. This shadowy fluid grants you a +2 insight bonus to Mysticism checks, and you can attempt checks with this skill untrained. While this serum is in effect, you can take a standard action to stop any bleed effect affecting you.",
    weight: "Л",
    source: "МС"
},
{
    name: "Сыворотка улучшения, боец",
    type: "Магический предмет",
    lvl: 5,
    price: 475,
    descr: "This vial of performance-enhancing serum unlocks or enhances aspects of your body and mind. Imbibing this serum grants a living creature bonuses based upon the type of serum imbibed, as described below. The effects of a serum of enhancement last 1 hour.\nThe creature gains a +2 insight bonus to Intimidate and Sense Motive checks, and whenever it successfully demoralizes an opponent, it increases the number of rounds that the opponent is shaken by 1.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Сыворотка улучшения, диверсант",
    type: "Магический предмет",
    lvl: 5,
    price: 475,
    descr: "This vial of performance-enhancing serum unlocks or enhances aspects of your body and mind. Imbibing this serum grants a living creature bonuses based upon the type of serum imbibed, as described below. The effects of a serum of enhancement last 1 hour.\nThe creature gains a +2 insight bonus to Acrobatics and Athletics checks, and it gains temporary Hit Points equal to half its level. If lost, these temporary Hit Points cannot be restored, and they do not stack with any other source of temporary Hit Points.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Сыворотка улучшения, дипломат",
    type: "Магический предмет",
    lvl: 5,
    price: 475,
    descr: "This vial of performance-enhancing serum unlocks or enhances aspects of your body and mind. Imbibing this serum grants a living creature bonuses based upon the type of serum imbibed, as described below. The effects of a serum of enhancement last 1 hour.\nThe creature gains a +2 insight bonus to Bluff and Diplomacy checks. Creatures with an Intelligence of 3 or greater also gain the ability to comprehend, speak, and understand one language that it has heard in the last 10 minutes.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Сыворотка улучшения, карманник",
    type: "Магический предмет",
    lvl: 5,
    price: 475,
    descr: "This vial of performance-enhancing serum unlocks or enhances aspects of your body and mind. Imbibing this serum grants a living creature bonuses based upon the type of serum imbibed, as described below. The effects of a serum of enhancement last 1 hour.\nThe creature gains a +2 insight bonus to Sleight of Hand and Stealth checks and can attempt checks with both skills untrained.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Сыворотка улучшения, сенсат",
    type: "Магический предмет",
    lvl: 5,
    price: 475,
    descr: "This vial of performance-enhancing serum unlocks or enhances aspects of your body and mind. Imbibing this serum grants a living creature bonuses based upon the type of serum imbibed, as described below. The effects of a serum of enhancement last 1 hour.\nThe creature gains a +2 insight bonus to Life Science and Mysticism checks and can attempt checks with both skills untrained.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Сыворотка улучшения, учёный",
    type: "Магический предмет",
    lvl: 5,
    price: 475,
    descr: "This vial of performance-enhancing serum unlocks or enhances aspects of your body and mind. Imbibing this serum grants a living creature bonuses based upon the type of serum imbibed, as described below. The effects of a serum of enhancement last 1 hour.\nThe creature gains a +2 insight bonus to Computers, Engineering, and Physical Science checks and can attempt checks with all three skills untrained.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Сыровотка кровника",
    type: "Магический предмет",
    lvl: 5,
    price: 500,
    descr: "Bloodbrother serum is made from rare alchemical reagents and the vital fluids of the eponymous beast. When the serum is consumed, you gain cold resistance 5 and regain 2 Hit Points per round for 5 rounds.",
    weight: "-",
    source: "ИА-01"
},
{
    name: "Кольцо сытости",
    type: "Магический предмет",
    lvl: 5,
    price: 2925,
    descr: "This ring provides you with life-sustaining nourishment, negating the need for food or drink while the ring is worn. Additionally, the ring\’s magic refreshes your body and mind while worn, so you need only 2 hours of sleep each day to gain the benefits of 8 hours of rest. If you cast spells, you can regain your daily spell slots after only 2 hours of rest, but you still can\’t do so more than once per day. The ring must be worn for a full week before its magic takes effect, and if removed you must wear it for another week to reattune it to you.",
    weight: "-",
    source: "ОКП"
},
{
    name: "Небесная перевязь",
    type: "Магический предмет",
    lvl: 5,
    price: 3000,
    descr: "This long, thin scarf is usually marked with an alternating pattern of light and dark shapes. While wearing a celestial stole, you gain cold resistance 5 or fire resistance 5 (your choice when you first don the stole); you can alter the type of energy resistance (choosing between cold and fire) once per day after 8 hours of rest. If you have cold or fire resistance from the solarian\’s solar armor solar manifestation, increase that resistance by 5.",
    weight: "-",
    source: "СП-04"
},
{
    name: "Соколиные сапоги",
    type: "Магический предмет",
    lvl: 5,
    price: 3000,
    descr: "Falcon boots were originally armored steel boots with integrated knee protection etched with falcons across the front. They were most commonly employed by a group called the Steel Falcons, a branch of the Eagle Knights of the Golarion nation of Andoran, and they were apparently designed for use specifically on sailing ships.\nAs a move action while wearing falcon boots, you can set your own personal, local gravity to be perpendicular to any adjacent surface able to support your weight under normal gravity conditions. This personal gravity effect only functions in normal gravity or lower. While this personal gravity is active, you gain a climb speed equal to your land speed, and if knocked prone, you fall in accordance with your personal gravity (thus falling prone in your space, even if that is on a wall or ceiling, rather than falling toward the ground as defined by the environment\’s normal gravity conditions). If you drop an item while your falcon boots are active, it also falls in your space. If you move from that square before picking up a dropped item, the item becomes subject to normal gravity.\nIf you are not adjacent to a surface able to support your weight, your falcon boots cease to function and you are subject to normal gravity. You can also deactivate falcon boots as a move action. There is no limit to how long falcon boots can function as long as you remain on a surface able to support your weight.",
    weight: "1",
    source: "СП-01"
},
{
    name: "Шлем Барахия",
    type: "Магический предмет",
    lvl: 5,
    price: 3000,
    descr: "This helm replaces a suit of armor\’s normal helmet (if any) and is incorporated into the armor\’s normal environmental protections; these protections do not function if the helm is removed. If the armor has an available upgrade slot, a barachius helm takes up one upgrade slot; otherwise, the helm counts as one of your two worn magic items.\nWhile wearing a barachius helm, once per day as a standard action, you can activate its ability to detect evil in your environment. Any creature you can see within 60 feet that has the evil subtype (such as a devil or an evil dragon) appears to have an obvious glowing outline visible only to you. Evil magic weapons (such as a rifle with the unholy weapon fusion) and other forms of evil technology gain a similar glowing outline. This doesn\’t not increase your visual range or allow you to see invisible creatures.\nIn addition, once per day, the wearer of a barachius helm can use the barachius\’s firewall supernatural ability: \’A barachius can summon a wall of digitally empowered divine fury within 30 feet as a standard action. This wall takes the shape of a line 10 feet high and 20 feet long; though it doesn\’t need to emanate from the angel, the angel must be able to see every square the wall passes through. The wall lasts until the beginning of the angel\’s next turn. An evil creature caught within or that enters one of the wall\’s squares takes 2d6 damage (Will DC 17 half). An evil creature with the technological subtype takes twice this amount of damage.\’.",
    weight: "Л",
    source: "ИА-01"
},
{
    name: "Посох мистического исцеления",
    type: "Магический предмет",
    lvl: 5,
    price: 3700,
    descr: "Available in a variety of shapes and sizes, a staff of mystic healing usually takes the form of an archaic shepherd\’s crook, carved with pre-Gap runes of origin denoting prosperity and long life. If you have the healing touch class feature, you can use that ability one additional time per day while holding the staff. You cannot use more than one staff of mystic healing each day to gain more than one additional use of healing touch, and a staff of mystic healing works only once per day.",
    weight: "1",
    source: "ОКП"
},
{
    name: "Магическая ампула, 2 круг",
    type: "Магический предмет",
    lvl: 6,
    price: 700,
    descr: "Магические ампулы содержат в себе жидкий конденсат магической энергии заклинания, предназначенный для инъекции. Часто такие одноразовые магические инъекции называют \’шприц-чарами\’. они воспроизводят заклинание с положительным эффектом (такое, у которого в разделах \’Испытание\’ или \’Устойчивость к магии\’ в описании указано \’безвредно\’), кроме заклинаний школы прорицания или тех, что создают любого рода связь между заклинателем и целью. Кроме этого, круг заклинания не может быть выше 3, время сотворения должно быть не больше 1 минуты, а целью такого заклинания должно быть одно или несколько существ (но не только сам заклинатель). Если заклинание действует и на существ, и на предметы, то в форме ампулы оно оказывает эффект только на существ. Если для сотворения заклинания требуется потратить 1 ПР, то при использовании его в виде ампулы вам также придётся потратить 1 ПР. Если вы не хотите тратить ПР или у вас их нет, заклинание не срабатывает.\nУровень и УЗ магической ампулы всегда равен утроенному кругу заклинания, которое оно воспроизводит (в случае заклинаний 0 круга уровень и УЗ ампулы равны 2). Для создания ампулы необходимо выполнения тех же требований, что и при создании камней чар.\nВы можете овершить инъекцию магической ампулы только себе, существу-добровольцу или находящемуся без сознания. Для применения на себя или добровольца требуется основное действие, а для инъекции сузеству без сознания – действие полного хода. Эффект магической ампулы аналогичен эффекту заключенного в ней заклинания, вы принимаете все решеня относительно эффекта заклинания, как если бы сотворили его: вы одновременно считаетесь и целью, и заклинателем.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Рубиновая сфера",
    type: "Магический предмет",
    lvl: 6,
    price: 3850,
    descr: "Камни вечных – магические самоцветы, которые вращаются по арбите вокруг вашей головы (или его ближайшего аналога для безголовых существ) и даруют вам постоянный магический эффект, пока там находятся. они не учитываются при определении максимального количества надеваемых магических предметов – одновременно можно использовать сколько угодно таких камней. Чаще всего подобные камни встречаются в звёздной империи Ацланти, где их применяют особым образом, но самые распространённые виды камней вечных можно найти и в магических лавках во многих крупных поселениях.\nДля того, чтобы выпустить камень вечных на орбиту вокруг вашей головы, требуется основное действие, а для того, чтобы его оттуда снять – сопутствующее. орбита может проходить на расстоянии от 3 дюймов до 3 футов от головы (на ваш выбор), но всегда за пределами вашего шлема или брони. КБ находящегося на орбите камня вечных равен вашему уровню персонажа + 12, его могут атаковать или даже захватить (совершив успешную проверку захвата, атакующих выхватывает камень с орбиты, взяв его в руку).\nПочти все камни вечных способны светиться ярким светом. В качестве основного действия вы можете зажечь или погасить камень вечных, чьё свечение улучшает освещённость на вашей клетке на одну ступень.\nУ каждого камня есть как минимум одно дополнительное свойство, действующее, пока он на орбите вокруг вас.\nWhile this aeon stone orbits you, it functions as a comm unit and a tier 3 computer with an artificial personality upgrade that you can access directly through your nervous system without needing a user interface. While the stone orbits you, you are aware of any attempt to connect to it and can grant access if you wish. This computer can be upgraded as normal, and the upgrades are all magical. The stone is magically powered, so the computer doesn\’t need a power source.",
    weight: "-",
    source: "СП-08"
},
{
    name: "Кольцо сопротивляемости (тип 2)",
    type: "Магический предмет",
    lvl: 6,
    price: 4200,
    descr: "Магия этого кольца защищает вас от тех атак и эффектов, к которым вы особенно уязвимы. Вы получаете бонус +2 усиления к испытанию с наименьшим базовым модификатором. Если таких испытаний несколько, вы выбираете, какое из них получит бонус, надевая кольцо впервые. Этот выбор нельзя изменить до тех пор, пока наименьшим не станет базовый модификатор другого испытания. Величина бонуса зависит от модели кольца сопротивляемости.",
    weight: "-",
    source: "ОКП"
},
{
    name: "Кольцо сопротивляемости, тип 2",
    type: "Магический предмет",
    lvl: 6,
    price: 4200,
    descr: "Магия этого кольца защищает вас от тех атак и эффектов, к которым вы особенно уязвимы. Вы получаете бонус усиления к испытанию с наименьшим базовым модификатором. Если таких испытаний несколько, вы выбираете, какое из них получит бонус, надевая кольцо впервые. Этот выбор нельзя изменитьдо тех пор, пока наименьшим не станет базовый модификатор другого испытания. Величина бонуса зависит от модели кольца сопротивляемости.\nБонус: +2",
    weight: "-",
    source: "ОКП"
},
{
    name: "Сапоги из эохи",
    type: "Магический предмет",
    lvl: 6,
    price: 4200,
    descr: "The insides of these simple-looking gray boots are lined with eohi fur (see page 57). Once per day as a full action, you can move up to your speed and make a full attack with melee weapons only. The penalty on each attack is –6 instead of –4, and you take a –2 penalty to your AC until the beginning of your next turn.",
    weight: "Л",
    source: "СП-04"
},
{
    name: "Вместительная перчатка",
    type: "Магический предмет",
    lvl: 6,
    price: 4600,
    descr: "This simple glove is surprisingly smooth to the touch. While holding an item no larger than 2 bulk in the hand wearing it, you can command a glove of storing to shrink the held item to microscopic size and negligible bulk, and merge it with the palm of the glove. Returning the item to its original scale requires a mere snap of the fingers wearing the glove. You can store or retrieve an item within a glove of storing as a swift or move action. A glove of storing can store only one item at a time, and if the glove\’s effect is suppressed or dispelled, any stored item immediately returns to its original size.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Фиолетовая сфера",
    type: "Магический предмет",
    lvl: 7,
    price: 7500,
    descr: "Камни вечных – магические самоцветы, которые вращаются по арбите вокруг вашей головы (или его ближайшего аналога для безголовых существ) и даруют вам постоянный магический эффект, пока там находятся. они не учитываются при определении максимального количества надеваемых магических предметов – одновременно можно использовать сколько угодно таких камней. Чаще всего подобные камни встречаются в звёздной империи Ацланти, где их применяют особым образом, но самые распространённые виды камней вечных можно найти и в магических лавках во многих крупных поселениях.\nДля того, чтобы выпустить камень вечных на орбиту вокруг вашей головы, требуется основное действие, а для того, чтобы его оттуда снять – сопутствующее. орбита может проходить на расстоянии от 3 дюймов до 3 футов от головы (на ваш выбор), но всегда за пределами вашего шлема или брони. КБ находящегося на орбите камня вечных равен вашему уровню персонажа + 12, его могут атаковать или даже захватить (совершив успешную проверку захвата, атакующих выхватывает камень с орбиты, взяв его в руку).\nПочти все камни вечных способны светиться ярким светом. В качестве основного действия вы можете зажечь или погасить камень вечных, чьё свечение улучшает освещённость на вашей клетке на одну ступень.\nУ каждого камня есть как минимум одно дополнительное свойство, действующее, пока он на орбите вокруг вас.\nЭтот камень вечных создаёт вокруг носителя невидимое силовое поле, аналогичное фиолетовому силовому полю. У камня 10 зарядов, которые полностью восстанавливаются каждые 24 часа.",
    weight: "-",
    source: "ИА-01"
},
{
    name: "Фиолетовая сфера",
    type: "Магический предмет",
    lvl: 7,
    price: 7500,
    descr: "Камни вечных – магические самоцветы, которые вращаются по арбите вокруг вашей головы (или его ближайшего аналога для безголовых существ) и даруют вам постоянный магический эффект, пока там находятся. они не учитываются при определении максимального количества надеваемых магических предметов – одновременно можно использовать сколько угодно таких камней. Чаще всего подобные камни встречаются в звёздной империи Ацланти, где их применяют особым образом, но самые распространённые виды камней вечных можно найти и в магических лавках во многих крупных поселениях.\nДля того, чтобы выпустить камень вечных на орбиту вокруг вашей головы, требуется основное действие, а для того, чтобы его оттуда снять – сопутствующее. орбита может проходить на расстоянии от 3 дюймов до 3 футов от головы (на ваш выбор), но всегда за пределами вашего шлема или брони. КБ находящегося на орбите камня вечных равен вашему уровню персонажа + 12, его могут атаковать или даже захватить (совершив успешную проверку захвата, атакующих выхватывает камень с орбиты, взяв его в руку).\nПочти все камни вечных способны светиться ярким светом. В качестве основного действия вы можете зажечь или погасить камень вечных, чьё свечение улучшает освещённость на вашей клетке на одну ступень.\nУ каждого камня есть как минимум одно дополнительное свойство, действующее, пока он на орбите вокруг вас.\nThis aeon stone creates an invisible force field around you that functions as a purple force field. The stone has a daily capacity of 10 charges and fully recharges itself every 24 hours.",
    weight: "-",
    source: "ИА-01"
},
{
    name: "Камень чар, 3 круг",
    type: "Магический предмет",
    lvl: 8,
    price: 1400,
    descr: "Consisting of one or more lattices of carefully arranged lines of rare metal and bits of precious stone in a silicon casing, each lattice in a spell gem is encoded with magical writings equivalent to the casting of a single, specific spell. Holding a spell gem in your hand unlocks little-used portions of your mind, granting you the ability to temporarily cast the spell encoded within the gem without using up your daily spell slots. You must hold the spell gem in your hand throughout the spell\’s casting time and must spend at least a standard action using the spell gem, even if the spell\’s casting time is shorter. Each spell stored within a spell gem can be cast only once, after which the magic encoded within the spell gem\’s lattice is forever expended.\nOnly spellcasters are capable of using spell gems—if you aren\’t a spellcaster, you\’re unable to make use of the knowledge that the gem unlocks. You don\’t need to know the spell within a spell gem to use it, but the spell must be on your class\’s spell list (or have otherwise been added to your spell list) and you must have a high enough key ability score to cast it. If the spell gem\’s item level is higher than your caster level, once you\’ve spent the full casting time of the spell, you must succeed at a caster level check with a DC equal to the spell gem\’s item level + 1 or you fail to cast the spell. If you fail to cast a spell from a spell gem, the spell remains within the gem and you can attempt to use it again.\nTo craft a spell gem, you have to know the spell you\’re encoding into the gem. If a spell requires expensive materials as part of its casting (such as raise dead), you must provide those while crafting the gem, and the gem\’s price is increased by the price of the components. You can create larger, compound spell gems with multiple spells in multiple lattices, with a price equal to the total price of all spells stored within it. Such spell gems can be used to cast only one spell at a time.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Адаптивная сыворотка, тип 2",
    type: "Магический предмет",
    lvl: 8,
    price: 1500,
    descr: "A dose of adaptive serum consists of a small piece of ksarik flesh (usually the tip of one of its tentacles) floating in a slightly alcoholic tincture. For an hour after you consume an adaptive serum, the first time you take energy damage, you gain resistance against that type of damage for that attack and for the remainder of the hour or until you rest 10 minutes to regain Stamina Points, whichever comes first. The amount of energy resistance you receive depends on the level of the serum. A mk 2 adaptive serum grants energy resistance 10.",
    weight: "-",
    source: "ИА-01"
},
{
    name: "Маска богомола",
    type: "Магический предмет",
    lvl: 8,
    price: 8400,
    descr: "Once the traditional headgear for an ancient cabal of Golarion assassins called the Red Mantis, the mask of the mantis is now a relic sought by scholars of the missing planet, especially those seeking evidence that the Swarm visited Golarion at some time in the distant past. A mask of the mantis is a helmet that fully covers the head and face and has the appearance of a red insectile head with large compound eyes and long, backward-curving antennae. A mask of the mantis replaces a suit of armor\’s normal helmet (if any) and is incorporated into the armor\’s normal environmental protections; these protections do not function if the helm is removed. If the armor has an available upgrade slot, a mask of the mantis takes up one upgrade slot; otherwise, the mask counts as one of your two worn magic items.\nWhile wearing a mask of the mantis, you gain darkvision with a range of 60 feet. In addition, a mask of the mantis has 2 daily charges. As a standard action, you can expend 1 charge to gain either the effects of see invisibility (as per the spell) for 30 minutes or a +3 insight bonus to Perception checks for 30 minutes. Both of these effects can be active simultaneously, and each charge is replenished 24 hours after being used.",
    weight: "Л",
    source: "СП-01"
},
{
    name: "Криптографическая татуировка оперативника",
    type: "Магический предмет",
    lvl: 8,
    price: 8900,
    descr: "The secretive members of the Android Abolitionist Front identify each other with invisible magical tattoos. When you are within 60 feet of a being with another encryption tattoo and activate your encryption tattoo with a code word as a move action, your tattoo becomes visible for 1 minute and glows faintly. The tattoo closely resembles the glowing circuit patterns prevalent on android skin, and is therefore particularly obvious on non-androids. The agent encryption tattoo is the standard type of encryption tattoo. Certain encryption tattoos, when activated with a different code word, also grant you damage reduction: operative encryption tattoos provide DR 5/—. This damage reduction doesn\’t stack with any damage reduction you already have. The damage reduction lasts for the 1 minute your tattoo is visible.\nAlthough there is no limit on the number of times you can cause your encryption tattoo to appear, you can activate its power to gain DR only once per day.\nAn encryption tattoo doesn\’t count as a worn magic item, and it can\’t be disarmed or sundered. In addition, it can be installed in an android\’s racial armor upgrade slot.",
    weight: "-",
    source: "МС"
},
{
    name: "Аура-визор",
    type: "Магический предмет",
    lvl: 8,
    price: 9000,
    descr: "While wearing these goggles, you gain a +4 circumstance bonus to saving throws against sense-dependent effects that target vision (such as gaze abilities or a bryrvath\’s impossible aura). In addition, once per day, you can cast arcane sight as a spell-like ability (CL 8th).",
    weight: "Л",
    source: "ИА-01"
},
{
    name: "Сыворотка исцеления (тип 3)",
    type: "Магический предмет",
    lvl: 9,
    price: 1950,
    descr: "Этот медицинский эликсир практически моментально сращивает кости и исцеляет урон. Живое существо, выпившее его, восстанавливает 6d8 ПЗ.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Скипетр отмены",
    type: "Магический предмет",
    lvl: 9,
    price: 2100,
    descr: "This device pulses with strange powers that drain items of all magical properties. When you touch a hybrid or magic item with a rod of cancellation, the item must succeed at a Will saving throw (DC = 10 + half your level + your Charisma bonus) or lose all magic abilities, becoming a mundane item of its type. If the touched item is being held or worn by a character, the item can use its bearer\’s Will save bonus in place of its own, if better. Upon draining an item, the rod itself becomes nonmagical and cannot be used again. Drained items can be restored only with wish or miracle.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Наковальная Торага",
    type: "Магический предмет",
    lvl: 9,
    price: 12000,
    descr: "Anvils of Torag are extremely rare and highly valued relics that are believed to have come from the Five Kings Mountains of lost Golarion. Each anvil consists of a heavy iron block anchored to a 5-foot-diameter stone base engraved with magical runes and symbols. Anvils of Torag are much prized by dwarf collectors and the crafting guilds of dwarven star citadels, as the anvils are seen as a tangible link to Torag, the patron god of the dwarves, who disappeared during the Gap. While non-dwarf collectors often consider an anvil of Torag too precious to use, most dwarves think it\’s ridiculous to have a crafting relic and not actually use it.\nAn anvil of Torag aids in crafting equipment and magic items. If you use an anvil of Torag while crafting an item, you are considered to have 2 additional ranks in the appropriate crafting skill, allowing you to craft items of higher level than you would normally be able to create. A given anvil of Torag can be used to craft only one item per day.\nDue its bulk and size, an anvil of Torag is generally not portable and must be properly anchored before use. An anvil of Torag can be installed on a starship in an arcane laboratory, a cargo hold, or a tech workshop, or it can be placed anywhere with room to store a Large vehicle.",
    weight: "50",
    source: "СП-01"
},
{
    name: "Крысолюдский ремень",
    type: "Магический предмет",
    lvl: 9,
    price: 12250,
    descr: "Ysoki are skilled at negotiating the cramped corridors of a starship or the access tunnels in a sprawling metropolis, but even the smallest ysoki sometimes encounter openings too small to enter. While wearing a ratfolk belt, you can move through an area as small as one-quarter your space without squeezing or one-eighth your space when squeezing. A ratfolk belt is made of stretchable nylon webbing, and it often includes clips for tools or weapons.",
    weight: "-",
    source: "МС"
},
{
    name: "Плащ из сонного шёлка",
    type: "Магический предмет",
    lvl: 9,
    price: 13400,
    descr: "The original dreamsilk cloaks were woven from the purple silk of dozens of dream spiders, arachnids native to the vast Golarion jungle known as the Mwangi Expanse. Before the Gap, it was common for soothsayers and explorers to depend on the cloaks for the visions of the future that came to them in their sleep. Modern artificers have learned to make such cloaks by imbuing artificial fabrics with oils derived from transdimensional pesh.\nWhile wearing a dreamsilk cloak, you can see details in hallucinations and illusions that others overlook. This does not give you any bonus to saving throws against illusions, but if you successfully disbelieve an illusion and convey the fact that it is an illusion to others, they gain a +6 bonus to their saving throws to disbelieve, rather than the normal +4. Additionally, if you wear a dreamsilk cloak for an uninterrupted period of at least 16 hours and then sleep for at least 8 additional hours while still wearing it, you have a vivid, prophetic dream. Although the meaning of the dream isn\’t immediately obvious when you wake up, you can learn more as the day progresses. Once during the next 24 hours, you can cast augury as a spell-like ability, using your character level as your caster level.",
    weight: "Л",
    source: "СП-01"
},
{
    name: "Ярко-зелёная призма",
    type: "Магический предмет",
    lvl: 9,
    price: 14000,
    descr: "Камни вечных – магические самоцветы, которые вращаются по арбите вокруг вашей головы (или его ближайшего аналога для безголовых существ) и даруют вам постоянный магический эффект, пока там находятся. они не учитываются при определении максимального количества надеваемых магических предметов – одновременно можно использовать сколько угодно таких камней. Чаще всего подобные камни встречаются в звёздной империи Ацланти, где их применяют особым образом, но самые распространённые виды камней вечных можно найти и в магических лавках во многих крупных поселениях.\nДля того, чтобы выпустить камень вечных на орбиту вокруг вашей головы, требуется основное действие, а для того, чтобы его оттуда снять – сопутствующее. орбита может проходить на расстоянии от 3 дюймов до 3 футов от головы (на ваш выбор), но всегда за пределами вашего шлема или брони. КБ находящегося на орбите камня вечных равен вашему уровню персонажа + 12, его могут атаковать или даже захватить (совершив успешную проверку захвата, атакующих выхватывает камень с орбиты, взяв его в руку).\nПочти все камни вечных способны светиться ярким светом. В качестве основного действия вы можете зажечь или погасить камень вечных, чьё свечение улучшает освещённость на вашей клетке на одну ступень.\nУ каждого камня есть как минимум одно дополнительное свойство, действующее, пока он на орбите вокруг вас.\nHighly prized by Azlanti pilots and astrogators, a vibrant green prism aeon stone is linked directly to the Aeon Throne on New Thespera. If you plot a course to New Thespera and succeed at the required Piloting check while this aeon stone orbits you, you can travel through the Drift from anywhere in the galaxy to New Thespera in only 1d6 days.",
    weight: "-",
    source: "СП-08"
},
{
    name: "Скипетр верховного владыки (тип 1)",
    type: "Магический предмет",
    lvl: 9,
    price: 14500,
    descr: "An Arclord\’s rod is a scepter-like device roughly 3 feet long, made of copper and capped with smoke-colored silver. These rods were used on pre-Gap Golarion by powerful spellcasters known as the Arclords of Nex, who hailed from the Golarion nation of that name.\nAn Arclord\’s rod is a magic weapon that can be used to make either melee or ranged attacks, but it can be used only for a single attack each round. A mk 1 Arclord\’s rod functions as a static shock truncheon for melee attacks and as a pulsecaster pistol for ranged attacks. An Arclord\’s rod has an unlimited capacity (it never runs out of charges) and has the analog and unwieldy special properties. Proficiency with both advanced melee weapons and small arms is necessary to use an Arclord\’s rod without penalty for melee and ranged attacks, respectively.\nOnce per day when you cast a spell with the electricity descriptor while wielding an Arclord\’s rod, you can add a thunderclap effect (which makes half of the spell\’s damage sonic damage) and a rain squall effect (which creates a fog cloud, as per the spell of the same name, centered on the target or the center of the spell\’s area and lasting for 10 minutes) to the spell.",
    weight: "Л",
    source: "СП-01"
},
{
    name: "Сфера теней",
    type: "Магический предмет",
    lvl: 10,
    price: 2850,
    descr: "While you hold this small orb of black glass, it puts forth tendrils of darkness that capture nearby light. The light level within a 20-foot radius of you decreases by one step. Lasers fired at you are bent toward the orb. This gives laser attacks against you a +1 circumstance bonus to hit, but also grants you fire resistance 5 against laser attacks.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Магическая ампула, 3 круг",
    type: "Магический предмет",
    lvl: 10,
    price: 3000,
    descr: "Магические ампулы содержат в себе жидкий конденсат магической энергии заклинания, предназначенный для инъекции. Часто такие одноразовые магические инъекции называют \’шприц-чарами\’. они воспроизводят заклинание с положительным эффектом (такое, у которого в разделах \’Испытание\’ или \’Устойчивость к магии\’ в описании указано \’безвредно\’), кроме заклинаний школы прорицания или тех, что создают любого рода связь между заклинателем и целью. Кроме этого, круг заклинания не может быть выше 3, время сотворения должно быть не больше 1 минуты, а целью такого заклинания должно быть одно или несколько существ (но не только сам заклинатель). Если заклинание действует и на существ, и на предметы, то в форме ампулы оно оказывает эффект только на существ. Если для сотворения заклинания требуется потратить 1 ПР, то при использовании его в виде ампулы вам также придётся потратить 1 ПР. Если вы не хотите тратить ПР или у вас их нет, заклинание не срабатывает.\nУровень и УЗ магической ампулы всегда равен утроенному кругу заклинания, которое оно воспроизводит (в случае заклинаний 0 круга уровень и УЗ ампулы равны 2). Для создания ампулы необходимо выполнения тех же требований, что и при создании камней чар.\nВы можете овершить инъекцию магической ампулы только себе, существу-добровольцу или находящемуся без сознания. Для применения на себя или добровольца требуется основное действие, а для инъекции сузеству без сознания – действие полного хода. Эффект магической ампулы аналогичен эффекту заключенного в ней заклинания, вы принимаете все решеня относительно эффекта заклинания, как если бы сотворили его: вы одновременно считаетесь и целью, и заклинателем.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Синий ромбоид",
    type: "Магический предмет",
    lvl: 10,
    price: 18000,
    descr: "Камни вечных – магические самоцветы, которые вращаются по арбите вокруг вашей головы (или его ближайшего аналога для безголовых существ) и даруют вам постоянный магический эффект, пока там находятся. они не учитываются при определении максимального количества надеваемых магических предметов – одновременно можно использовать сколько угодно таких камней. Чаще всего подобные камни встречаются в звёздной империи Ацланти, где их применяют особым образом, но самые распространённые виды камней вечных можно найти и в магических лавках во многих крупных поселениях.\nДля того, чтобы выпустить камень вечных на орбиту вокруг вашей головы, требуется основное действие, а для того, чтобы его оттуда снять – сопутствующее. орбита может проходить на расстоянии от 3 дюймов до 3 футов от головы (на ваш выбор), но всегда за пределами вашего шлема или брони. КБ находящегося на орбите камня вечных равен вашему уровню персонажа + 12, его могут атаковать или даже захватить (совершив успешную проверку захвата, атакующих выхватывает камень с орбиты, взяв его в руку).\nПочти все камни вечных способны светиться ярким светом. В качестве основного действия вы можете зажечь или погасить камень вечных, чьё свечение улучшает освещённость на вашей клетке на одну ступень.\nУ каждого камня есть как минимум одно дополнительное свойство, действующее, пока он на орбите вокруг вас.\nWhile this aeon stone orbits you, as a reaction while falling, you can cast flight (1st level), targeting only yourself (caster level 3rd). This aeon stone can be activated once per day.",
    weight: "-",
    source: "ОКП"
},
{
    name: "Кольцо сопротивляемости (тип 3)",
    type: "Магический предмет",
    lvl: 10,
    price: 18100,
    descr: "Магия этого кольца защищает вас от тех атак и эффектов, к которым вы особенно уязвимы. Вы получаете бонус +3 усиления к испытанию с наименьшим базовым модификатором. Если таких испытаний несколько, вы выбираете, какое из них получит бонус, надевая кольцо впервые. Этот выбор нельзя изменить до тех пор, пока наименьшим не станет базовый модификатор другого испытания. Величина бонуса зависит от модели кольца сопротивляемости.",
    weight: "-",
    source: "ОКП"
},
{
    name: "Кольцо сопротивляемости, тип 3",
    type: "Магический предмет",
    lvl: 10,
    price: 18100,
    descr: "Магия этого кольца защищает вас от тех атак и эффектов, к которым вы особенно уязвимы. Вы получаете бонус усиления к испытанию с наименьшим базовым модификатором. Если таких испытаний несколько, вы выбираете, какое из них получит бонус, надевая кольцо впервые. Этот выбор нельзя изменитьдо тех пор, пока наименьшим не станет базовый модификатор другого испытания. Величина бонуса зависит от модели кольца сопротивляемости.\nБонус: +3",
    weight: "-",
    source: "ОКП"
},
{
    name: "Камень чар, 4 круг",
    type: "Магический предмет",
    lvl: 11,
    price: 3700,
    descr: "Consisting of one or more lattices of carefully arranged lines of rare metal and bits of precious stone in a silicon casing, each lattice in a spell gem is encoded with magical writings equivalent to the casting of a single, specific spell. Holding a spell gem in your hand unlocks little-used portions of your mind, granting you the ability to temporarily cast the spell encoded within the gem without using up your daily spell slots. You must hold the spell gem in your hand throughout the spell\’s casting time and must spend at least a standard action using the spell gem, even if the spell\’s casting time is shorter. Each spell stored within a spell gem can be cast only once, after which the magic encoded within the spell gem\’s lattice is forever expended.\nOnly spellcasters are capable of using spell gems—if you aren\’t a spellcaster, you\’re unable to make use of the knowledge that the gem unlocks. You don\’t need to know the spell within a spell gem to use it, but the spell must be on your class\’s spell list (or have otherwise been added to your spell list) and you must have a high enough key ability score to cast it. If the spell gem\’s item level is higher than your caster level, once you\’ve spent the full casting time of the spell, you must succeed at a caster level check with a DC equal to the spell gem\’s item level + 1 or you fail to cast the spell. If you fail to cast a spell from a spell gem, the spell remains within the gem and you can attempt to use it again.\nTo craft a spell gem, you have to know the spell you\’re encoding into the gem. If a spell requires expensive materials as part of its casting (such as raise dead), you must provide those while crafting the gem, and the gem\’s price is increased by the price of the components. You can create larger, compound spell gems with multiple spells in multiple lattices, with a price equal to the total price of all spells stored within it. Such spell gems can be used to cast only one spell at a time.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Коробка абаллонских дронов",
    type: "Магический предмет",
    lvl: 11,
    price: 24500,
    descr: "This item consists of six 1-foot-square circuit boards soldered together at their edges to form a box. One of the sides is hinged, forming a lid. Although the box appears empty, it rattles occasionally, as if something inside is seeking to escape. While anacites across Aballon create these items, Those Who Wait prefer to stockpile them for future use, but Those Who Become send as many of these boxes into the galaxy as possible for unspoken reasons.\nWhen you speak a command word and open the lid of the box as a standard action, a collection of fist-sized microbots swarms out of the box and circles you, granting you concealment against all attacks for 5 rounds before they collapse into 1 bulk of inert scrap. This function can be used once per day.\nThe scrap can be used as the target of any spell with the word “junkbot” in the name, and the duration of such a spell increases by 1 round. The refuse left over at the end of the spell magically returns to the box, as does the scrap if it remains unused 4 hours after being created.",
    weight: "1",
    source: "МС"
},
{
    name: "Кольцо космической перенастройки",
    type: "Магический предмет",
    lvl: 11,
    price: 25000,
    descr: "This majestic ring is forged from twin bands of mithral and adamantine. If you have the stellar mode class feature, whenever you start a turn of combat attuned to a stellar mode and choose to become unattuned, you can immediately gain 1 attunement point for the stellar mode that opposes the mode you began your turn in. For instance, if you began the turn in photon mode and choose to become unattuned, you can use the ring to gain 1 graviton attunement point. Using this ability is a swift action.",
    weight: "-",
    source: "ОКП"
},
{
    name: "Перламутровое веретено",
    type: "Магический предмет",
    lvl: 11,
    price: 25000,
    descr: "Камни вечных – магические самоцветы, которые вращаются по арбите вокруг вашей головы (или его ближайшего аналога для безголовых существ) и даруют вам постоянный магический эффект, пока там находятся. они не учитываются при определении максимального количества надеваемых магических предметов – одновременно можно использовать сколько угодно таких камней. Чаще всего подобные камни встречаются в звёздной империи Ацланти, где их применяют особым образом, но самые распространённые виды камней вечных можно найти и в магических лавках во многих крупных поселениях.\nДля того, чтобы выпустить камень вечных на орбиту вокруг вашей головы, требуется основное действие, а для того, чтобы его оттуда снять – сопутствующее. орбита может проходить на расстоянии от 3 дюймов до 3 футов от головы (на ваш выбор), но всегда за пределами вашего шлема или брони. КБ находящегося на орбите камня вечных равен вашему уровню персонажа + 12, его могут атаковать или даже захватить (совершив успешную проверку захвата, атакующих выхватывает камень с орбиты, взяв его в руку).\nПочти все камни вечных способны светиться ярким светом. В качестве основного действия вы можете зажечь или погасить камень вечных, чьё свечение улучшает освещённость на вашей клетке на одну ступень.\nУ каждого камня есть как минимум одно дополнительное свойство, действующее, пока он на орбите вокруг вас.\nThis aeon stone increases your caster level by 1. This affects only calculations that directly refer to your caster level, such as caster level checks and spells with a duration of 1 round/level. It does not affect your spells known or spells per day. If you do not normally have a caster level, this does not give you any ability to know or cast spells.",
    weight: "-",
    source: "ОКП"
},
{
    name: "Адаптивная сыворотка, тип 3",
    type: "Магический предмет",
    lvl: 12,
    price: 5500,
    descr: "A dose of adaptive serum consists of a small piece of ksarik flesh (usually the tip of one of its tentacles) floating in a slightly alcoholic tincture. For an hour after you consume an adaptive serum, the first time you take energy damage, you gain resistance against that type of damage for that attack and for the remainder of the hour or until you rest 10 minutes to regain Stamina Points, whichever comes first. The amount of energy resistance you receive depends on the level of the serum. A mk 3 adaptive serum grants energy resistance 15.",
    weight: "-",
    source: "ИА-01"
},
{
    name: "Иридирующий триллион",
    type: "Магический предмет",
    lvl: 12,
    price: 32000,
    descr: "Камни вечных – магические самоцветы, которые вращаются по арбите вокруг вашей головы (или его ближайшего аналога для безголовых существ) и даруют вам постоянный магический эффект, пока там находятся. они не учитываются при определении максимального количества надеваемых магических предметов – одновременно можно использовать сколько угодно таких камней. Чаще всего подобные камни встречаются в звёздной империи Ацланти, где их применяют особым образом, но самые распространённые виды камней вечных можно найти и в магических лавках во многих крупных поселениях.\nДля того, чтобы выпустить камень вечных на орбиту вокруг вашей головы, требуется основное действие, а для того, чтобы его оттуда снять – сопутствующее. орбита может проходить на расстоянии от 3 дюймов до 3 футов от головы (на ваш выбор), но всегда за пределами вашего шлема или брони. КБ находящегося на орбите камня вечных равен вашему уровню персонажа + 12, его могут атаковать или даже захватить (совершив успешную проверку захвата, атакующих выхватывает камень с орбиты, взяв его в руку).\nПочти все камни вечных способны светиться ярким светом. В качестве основного действия вы можете зажечь или погасить камень вечных, чьё свечение улучшает освещённость на вашей клетке на одну ступень.\nУ каждого камня есть как минимум одно дополнительное свойство, действующее, пока он на орбите вокруг вас.\nWhile this aeon stone orbits you, when you are hit by a ranged attack, you can spend 1 Resolve Point as a reaction to attempt a Reflex saving throw with a +6 enhancement bonus. If your saving throw result equals or exceeds the result of the attack roll that hit you, the aeon stone deflects the attack, and it deals you no damage or other effect. This deflection doesn\’t work against area attacks.",
    weight: "-",
    source: "СП-08"
},
{
    name: "Скипетр верховного владыки (тип 2)",
    type: "Магический предмет",
    lvl: 12,
    price: 38500,
    descr: "An Arclord\’s rod is a scepter-like device roughly 3 feet long, made of copper and capped with smoke-colored silver. These rods were used on pre-Gap Golarion by powerful spellcasters known as the Arclords of Nex, who hailed from the Golarion nation of that name.\nAn Arclord\’s rod is a magic weapon that can be used to make either melee or ranged attacks, but it can be used only for a single attack each round. A mk 2 Arclord\’s rod functions as an aurora shock truncheon and a static arc pistol. An Arclord\’s rod has an unlimited capacity (it never runs out of charges) and has the analog and unwieldy special properties. Proficiency with both advanced melee weapons and small arms is necessary to use an Arclord\’s rod without penalty for melee and ranged attacks, respectively.\nOnce per day when you cast a spell with the electricity descriptor while wielding an Arclord\’s rod, you can add a thunderclap effect (which makes half of the spell\’s damage sonic damage) and a rain squall effect (which creates a fog cloud, as per the spell of the same name, centered on the target or the center of the spell\’s area and lasting for 10 minutes) to the spell.",
    weight: "Л",
    source: "СП-01"
},
{
    name: "Криптографическая татуировка провокатора",
    type: "Магический предмет",
    lvl: 13,
    price: 48000,
    descr: "The secretive members of the Android Abolitionist Front identify each other with invisible magical tattoos. When you are within 60 feet of a being with another encryption tattoo and activate your encryption tattoo with a code word as a move action, your tattoo becomes visible for 1 minute and glows faintly. The tattoo closely resembles the glowing circuit patterns prevalent on android skin, and is therefore particularly obvious on non-androids. The agent encryption tattoo is the standard type of encryption tattoo. Certain encryption tattoos, when activated with a different code word, also grant you damage reduction: provocateur encryption tattoos provide DR 10/—. This damage reduction doesn\’t stack with any damage reduction you already have. The damage reduction lasts for the 1 minute your tattoo is visible.\nAlthough there is no limit on the number of times you can cause your encryption tattoo to appear, you can activate its power to gain DR only once per day.\nAn encryption tattoo doesn\’t count as a worn magic item, and it can\’t be disarmed or sundered. In addition, it can be installed in an android\’s racial armor upgrade slot.",
    weight: "-",
    source: "МС"
},
{
    name: "Камень чар, 5 круг",
    type: "Магический предмет",
    lvl: 14,
    price: 10600,
    descr: "Consisting of one or more lattices of carefully arranged lines of rare metal and bits of precious stone in a silicon casing, each lattice in a spell gem is encoded with magical writings equivalent to the casting of a single, specific spell. Holding a spell gem in your hand unlocks little-used portions of your mind, granting you the ability to temporarily cast the spell encoded within the gem without using up your daily spell slots. You must hold the spell gem in your hand throughout the spell\’s casting time and must spend at least a standard action using the spell gem, even if the spell\’s casting time is shorter. Each spell stored within a spell gem can be cast only once, after which the magic encoded within the spell gem\’s lattice is forever expended.\nOnly spellcasters are capable of using spell gems—if you aren\’t a spellcaster, you\’re unable to make use of the knowledge that the gem unlocks. You don\’t need to know the spell within a spell gem to use it, but the spell must be on your class\’s spell list (or have otherwise been added to your spell list) and you must have a high enough key ability score to cast it. If the spell gem\’s item level is higher than your caster level, once you\’ve spent the full casting time of the spell, you must succeed at a caster level check with a DC equal to the spell gem\’s item level + 1 or you fail to cast the spell. If you fail to cast a spell from a spell gem, the spell remains within the gem and you can attempt to use it again.\nTo craft a spell gem, you have to know the spell you\’re encoding into the gem. If a spell requires expensive materials as part of its casting (such as raise dead), you must provide those while crafting the gem, and the gem\’s price is increased by the price of the components. You can create larger, compound spell gems with multiple spells in multiple lattices, with a price equal to the total price of all spells stored within it. Such spell gems can be used to cast only one spell at a time.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Тиара транслокации, тип 1",
    type: "Магический предмет",
    lvl: 14,
    price: 11750,
    descr: "Дистанция: Any point within 200 miles\nThis shimmering circlet is crafted from rare metals and seems to bend and distort light around it, creating an eerie halo of light around your brow. Once per day, a tiara of translocation allows you to teleport yourself and up to 5 additional creatures, functioning as a teleport spell. Unlike the spell, the range at which you can use this item varies based upon its model, as described below. You cannot use a tiara of translocation to travel between the planes, and it refuses to function at all while in the Drift.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Строгий костюм",
    type: "Магический предмет",
    lvl: 14,
    price: 62500,
    descr: "This elegant tailored suit resembles a platinum AbadarCorp travel suit and has the same statistics as that armor. In addition, sigils of divination woven into the fabric of the suit subtly alert you to lies. When wearing a suit of boardroom attire, roll twice when attempting Sense Motive checks to detect deception and use the higher result. In addition, you never think a truthful statement contains deceptions, even if you fail your check by 5 or more.",
    weight: "Л",
    source: "МС"
},
{
    name: "Кольцо сопротивляемости (тип 4)",
    type: "Магический предмет",
    lvl: 14,
    price: 70000,
    descr: "Магия этого кольца защищает вас от тех атак и эффектов, к которым вы особенно уязвимы. Вы получаете бонус +4 усиления к испытанию с наименьшим базовым модификатором. Если таких испытаний несколько, вы выбираете, какое из них получит бонус, надевая кольцо впервые. Этот выбор нельзя изменить до тех пор, пока наименьшим не станет базовый модификатор другого испытания. Величина бонуса зависит от модели кольца сопротивляемости.",
    weight: "-",
    source: "ОКП"
},
{
    name: "Кольцо сопротивляемости, тип 4",
    type: "Магический предмет",
    lvl: 14,
    price: 70000,
    descr: "Магия этого кольца защищает вас от тех атак и эффектов, к которым вы особенно уязвимы. Вы получаете бонус усиления к испытанию с наименьшим базовым модификатором. Если таких испытаний несколько, вы выбираете, какое из них получит бонус, надевая кольцо впервые. Этот выбор нельзя изменитьдо тех пор, пока наименьшим не станет базовый модификатор другого испытания. Величина бонуса зависит от модели кольца сопротивляемости.\nБонус: +4",
    weight: "-",
    source: "ОКП"
},
{
    name: "Камень полководца",
    type: "Магический предмет",
    lvl: 14,
    price: 75000,
    descr: "This stone holds the collected memories, philosophies, and tactics of an ancient alien warlord, and is currently set in the palm of its original owner. This mk 3 ability crystal can increase any one ability score by 6 if you spend 1 hour communing with the item, as fragments of the ancient alien warlord\’s psyche flood your mind and body. Its magic is then forever spent.",
    weight: "-",
    source: "СП-06"
},
{
    name: "Тиара транслокации, тип 2",
    type: "Магический предмет",
    lvl: 16,
    price: 185000,
    descr: "Дистанция: Any point within 200 miles\nThis shimmering circlet is crafted from rare metals and seems to bend and distort light around it, creating an eerie halo of light around your brow. Once per day, a tiara of translocation allows you to teleport yourself and up to 5 additional creatures, functioning as a teleport spell. Unlike the spell, the range at which you can use this item varies based upon its model, as described below. You cannot use a tiara of translocation to travel between the planes, and it refuses to function at all while in the Drift.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Камень чар, 6 круг",
    type: "Магический предмет",
    lvl: 17,
    price: 36650,
    descr: "Consisting of one or more lattices of carefully arranged lines of rare metal and bits of precious stone in a silicon casing, each lattice in a spell gem is encoded with magical writings equivalent to the casting of a single, specific spell. Holding a spell gem in your hand unlocks little-used portions of your mind, granting you the ability to temporarily cast the spell encoded within the gem without using up your daily spell slots. You must hold the spell gem in your hand throughout the spell\’s casting time and must spend at least a standard action using the spell gem, even if the spell\’s casting time is shorter. Each spell stored within a spell gem can be cast only once, after which the magic encoded within the spell gem\’s lattice is forever expended.\nOnly spellcasters are capable of using spell gems—if you aren\’t a spellcaster, you\’re unable to make use of the knowledge that the gem unlocks. You don\’t need to know the spell within a spell gem to use it, but the spell must be on your class\’s spell list (or have otherwise been added to your spell list) and you must have a high enough key ability score to cast it. If the spell gem\’s item level is higher than your caster level, once you\’ve spent the full casting time of the spell, you must succeed at a caster level check with a DC equal to the spell gem\’s item level + 1 or you fail to cast the spell. If you fail to cast a spell from a spell gem, the spell remains within the gem and you can attempt to use it again.\nTo craft a spell gem, you have to know the spell you\’re encoding into the gem. If a spell requires expensive materials as part of its casting (such as raise dead), you must provide those while crafting the gem, and the gem\’s price is increased by the price of the components. You can create larger, compound spell gems with multiple spells in multiple lattices, with a price equal to the total price of all spells stored within it. Such spell gems can be used to cast only one spell at a time.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Скипетр верховного владыки (тип 3)",
    type: "Магический предмет",
    lvl: 17,
    price: 275000,
    descr: "An Arclord\’s rod is a scepter-like device roughly 3 feet long, made of copper and capped with smoke-colored silver. These rods were used on pre-Gap Golarion by powerful spellcasters known as the Arclords of Nex, who hailed from the Golarion nation of that name.\nAn Arclord\’s rod is a magic weapon that can be used to make either melee or ranged attacks, but it can be used only for a single attack each round. A mk 3 Arclord\’s rod functions as a storm shock truncheon and an aurora arc pistol. An Arclord\’s rod has an unlimited capacity (it never runs out of charges) and has the analog and unwieldy special properties. Proficiency with both advanced melee weapons and small arms is necessary to use an Arclord\’s rod without penalty for melee and ranged attacks, respectively.\nOnce per day when you cast a spell with the electricity descriptor while wielding an Arclord\’s rod, you can add a thunderclap effect (which makes half of the spell\’s damage sonic damage) and a rain squall effect (which creates a fog cloud, as per the spell of the same name, centered on the target or the center of the spell\’s area and lasting for 10 minutes) to the spell.",
    weight: "Л",
    source: "СП-01"
},
{
    name: "Криптографическая татуировка мастера",
    type: "Магический предмет",
    lvl: 18,
    price: 360000,
    descr: "The secretive members of the Android Abolitionist Front identify each other with invisible magical tattoos. When you are within 60 feet of a being with another encryption tattoo and activate your encryption tattoo with a code word as a move action, your tattoo becomes visible for 1 minute and glows faintly. The tattoo closely resembles the glowing circuit patterns prevalent on android skin, and is therefore particularly obvious on non-androids. The agent encryption tattoo is the standard type of encryption tattoo. Certain encryption tattoos, when activated with a different code word, also grant you damage reduction: master encryption tattoos provide DR 15/—. This damage reduction doesn\’t stack with any damage reduction you already have. The damage reduction lasts for the 1 minute your tattoo is visible.\nAlthough there is no limit on the number of times you can cause your encryption tattoo to appear, you can activate its power to gain DR only once per day.\nAn encryption tattoo doesn\’t count as a worn magic item, and it can\’t be disarmed or sundered. In addition, it can be installed in an android\’s racial armor upgrade slot.",
    weight: "-",
    source: "МС"
},
{
    name: "Кольцо сопротивляемости (тип 5)",
    type: "Магический предмет",
    lvl: 18,
    price: 361500,
    descr: "Магия этого кольца защищает вас от тех атак и эффектов, к которым вы особенно уязвимы. Вы получаете бонус +5 усиления к испытанию с наименьшим базовым модификатором. Если таких испытаний несколько, вы выбираете, какое из них получит бонус, надевая кольцо впервые. Этот выбор нельзя изменить до тех пор, пока наименьшим не станет базовый модификатор другого испытания. Величина бонуса зависит от модели кольца сопротивляемости.",
    weight: "-",
    source: "ОКП"
},
{
    name: "Кольцо сопротивляемости, тип 5",
    type: "Магический предмет",
    lvl: 18,
    price: 361500,
    descr: "Магия этого кольца защищает вас от тех атак и эффектов, к которым вы особенно уязвимы. Вы получаете бонус усиления к испытанию с наименьшим базовым модификатором. Если таких испытаний несколько, вы выбираете, какое из них получит бонус, надевая кольцо впервые. Этот выбор нельзя изменитьдо тех пор, пока наименьшим не станет базовый модификатор другого испытания. Величина бонуса зависит от модели кольца сопротивляемости.\nБонус: +5",
    weight: "-",
    source: "ОКП"
},
{
    name: "Тиара транслокации, тип 3",
    type: "Магический предмет",
    lvl: 18,
    price: 410000,
    descr: "Дистанция: Any point within the same star system\nThis shimmering circlet is crafted from rare metals and seems to bend and distort light around it, creating an eerie halo of light around your brow. Once per day, a tiara of translocation allows you to teleport yourself and up to 5 additional creatures, functioning as a teleport spell. Unlike the spell, the range at which you can use this item varies based upon its model, as described below. You cannot use a tiara of translocation to travel between the planes, and it refuses to function at all while in the Drift.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Тиара транслокации, тип 4",
    type: "Магический предмет",
    lvl: 20,
    price: 875000,
    descr: "Дистанция: Any point within the same galaxy\nThis shimmering circlet is crafted from rare metals and seems to bend and distort light around it, creating an eerie halo of light around your brow. Once per day, a tiara of translocation allows you to teleport yourself and up to 5 additional creatures, functioning as a teleport spell. Unlike the spell, the range at which you can use this item varies based upon its model, as described below. You cannot use a tiara of translocation to travel between the planes, and it refuses to function at all while in the Drift.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Скипетр верховного владыки (тип 4)",
    type: "Магический предмет",
    lvl: 20,
    price: 950000,
    descr: "An Arclord\’s rod is a scepter-like device roughly 3 feet long, made of copper and capped with smoke-colored silver. These rods were used on pre-Gap Golarion by powerful spellcasters known as the Arclords of Nex, who hailed from the Golarion nation of that name.\nAn Arclord\’s rod is a magic weapon that can be used to make either melee or ranged attacks, but it can be used only for a single attack each round. A mk 4 Arclord\’s rod functions as a tempest shock truncheon and a storm arc pistol. An Arclord\’s rod has an unlimited capacity (it never runs out of charges) and has the analog and unwieldy special properties. Proficiency with both advanced melee weapons and small arms is necessary to use an Arclord\’s rod without penalty for melee and ranged attacks, respectively.\nOnce per day when you cast a spell with the electricity descriptor while wielding an Arclord\’s rod, you can add a thunderclap effect (which makes half of the spell\’s damage sonic damage) and a rain squall effect (which creates a fog cloud, as per the spell of the same name, centered on the target or the center of the spell\’s area and lasting for 10 minutes) to the spell.",
    weight: "Л",
    source: "СП-01"
},
{
    name: "Унгарато",
    type: "Магический предмет",
    lvl: 20,
    price: "Бесценно",
    descr: "Ungarato is one of the most powerful known relics of lost Golarion, though even greater artifacts have occasionally appeared throughout Absalom Station\’s history. Ungarato, also called the All-Consuming Killer or the Gun of Gluttony, is known to be one of the Alara\’hai, seven weapons of nearly divine magical power that were also referred to as the Seven Blades of Conviction or the Seven Swords of Sin. Although the fates of the other six Alara\’hai remain unknown, these epithets imply that Ungarato was once a sword of some kind, though when, how, and why this blade was reforged into a powerful machine gun with a bayonet is one of the relic\’s greatest mysteries.\nMuch of Ungarato\’s history is lost, though scholars have shown that the weapon was created in its original form thousands of years before the Gap. The Arcanamirium\’s most learned esotericists agree that Ungarato\’s origin lies in ancient Thassilon, an empire ruled by spellcasting tyrants called runelords, which collapsed at the beginning of the period of Golarion\’s history known as the Age of Darkness. It is also generally agreed that the weapon\’s intended wielder was the Runelord of Gluttony, but a ferocious warrior stole the blade before it ever reached the runelord\’s hands. This barbarian warlord later became the champion of the runelord\’s successor, and it is believed that Ungarato took its name from this champion. Nothing definitive is known of Ungarato\’s fate after the fall of Thassilon.\nUngarato has a distinct appearance that is unlike any other specific model of longarm. It has a misty, spectral quality, but the weapon is as solid as any other. Ungarato functions as a paragon X-gen gun, and its bayonet is a molecular rift dueling sword, both of which have the ghost killer fusion. Two hands are required to wield Ungarato, and proficiency with basic melee weapons and heavy weapons is necessary to use the weapon without penalty for melee and ranged attacks, respectively.\n\nUngarato glows with a bright, sickly green color whenever there is a creature of the undead type within 50 feet of its wielder, though the weapon gives no indication of the direction or number of undead within that range. Each time its wielder suffers the full effects of a critical hit (when damage reduction, energy resistance, or some other effect does not reduce the damage dealt or prevent any critical hit effect), Ungarato gains 1 point of viciousness. Whenever Ungarato scores a critical hit, it automatically spends 1 point of viciousness (if it has any) and adds the severe wound critical hit effect to the critical damage dealt. Any unused points of viciousness fade at the rate of 1 per hour. Ungarato also restores 10 Hit Points to its wielder (functioning as per mystic cure) each time it scores a critical hit (whether or not it has any points of viciousness).\n\nUngarato is a unique artifact of extreme power and legendary reputation; as such, the weapon is effectively priceless and cannot simply be purchased. Indeed, its current owner and whereabouts are unknown, though Ungarato is widely believed to have resurfaced recently somewhere on Absalom Station. Legend claims that Ungarato was once sentient and held great powers that only functioned in the hands of a Thassilonian runelord, but there\’s no modern evidence to support either claim. Similarly, it is believed that only the rightful Runelord of Gluttony can break the weapon; Ungarato is otherwise impervious to damage or destruction.",
    weight: "2",
    source: "СП-01"
},
{
    name: "Гиперлист",
    type: "Наркотики",
    lvl: 1,
    price: 95,
    descr: "Type drug (ingested or inhaled); Save Fortitude DC 12; Addiction DC 12 (physical)\nTrack Strength; Effect +2 morale bonus to saves against mind-affecting effects for 1 hour.",
    weight: "-",
    source: "ОКП"
},
{
    name: "Сонная дрожь",
    type: "Наркотики",
    lvl: 5,
    price: 2500,
    descr: "Type drug (ingested or injury); Save Fortitude DC 18; Addiction DC 18 (mental and physical)\nTrack Constitution; Effect 50% chance of falling unconscious (as per the Constitution poison track state) for 1d4 hours or +8 morale bonus to saves against fear for 1d20 minutes.",
    weight: "-",
    source: "ОКП"
},
{
    name: "Межпространственный пеш",
    type: "Наркотики",
    lvl: 10,
    price: 14000,
    descr: "Type drug (ingested or inhaled); Save Fortitude DC 20; Addiction DC 20 (physical)\nTrack Dexterity and Wisdom; Effect +2 morale bonus to saves against fear for 1 hour and gain 2 Stamina Points per level. (Any Stamina Points exceeding the user\’s maximum are lost first and can\’t be recovered; any remaining are lost the next time the user rests to recover Stamina.)",
    weight: "-",
    source: "ОКП"
},
{
    name: "Мегаопиат",
    type: "Наркотики",
    lvl: 12,
    price: 22000,
    descr: "Type drug (ingested, inhaled, or injury); Save Fortitude DC 20; Addiction DC 20 (mental and physical)\nTrack Strength; Effect +4 morale bonus to saves against pain effects and gain DR 5/— for 1 hour.",
    weight: "-",
    source: "ОКП"
},
{
    name: "Одежда, повседневная",
    type: "Одежда",
    lvl: 1,
    price: 1,
    descr: "Одежда производится в мирах Соглашения повсеместно, жители системы никогда не испытывают в ней недостатка. Одежду носят и под бронёй и поверх её, её эффекты применяются практически всегда. Для различных ситуаций предусмотрены разные типы одежды.\nПовседневная одежда предназначена для ежедневного ношения и выпускается в ослепительном многообразии цветов и стилей, многие из которых создавались с учётом предпочтений отдельных культур или планет. Большинство персонажей выбирают повседневную одежду, исходя из личного вкуса.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Одежда, официальная",
    type: "Одежда",
    lvl: 1,
    price: 5,
    descr: "Одежда производится в мирах Соглашения повсеместно, жители системы никогда не испытывают в ней недостатка. Одежду носят и под бронёй и поверх её, её эффекты применяются практически всегда. Для различных ситуаций предусмотрены разные типы одежды.\nFormal wear is designed for a specific social function, such as a wedding or funeral, and commonly differs from planet to planet and even from culture to culture. Lacking the proper formal wear at a social event can cause you to take a penalty of up to –4 to Bluff, Diplomacy, and Disguise checks at the function, as determined by the GM.",
    weight: "1",
    source: "ОКП"
},
{
    name: "Одежда, профессиональная",
    type: "Одежда",
    lvl: 1,
    price: 5,
    descr: "Одежда производится в мирах Соглашения повсеместно, жители системы никогда не испытывают в ней недостатка. Одежду носят и под бронёй и поверх её, её эффекты применяются практически всегда. Для различных ситуаций предусмотрены разные типы одежды.\nКомплект такой одежды разработан с учётом потребностей конкретной профессии и не только фукционален, но и всем своим видом демонстрирует опыт и профессионализм владельца. Если вы одеты в такую одежду, то получаете бонус +1 (ситуативный) к проверкам соответствующей профессии, чтобы заработать на жизнь.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Одежда, климатическая",
    type: "Одежда",
    lvl: 1,
    price: 10,
    descr: "Одежда производится в мирах Соглашения повсеместно, жители системы никогда не испытывают в ней недостатка. Одежду носят и под бронёй и поверх её, её эффекты применяются практически всегда. Для различных ситуаций предусмотрены разные типы одежды.\nEach environmental outfit is designed with a specific climate in mind, and wearing such an outfit in an extreme environmental condition it is tailored for grants a benefit as follows: cold climates (+2 circumstance bonus to Fortitude saves against environmental cold dangers), dust storms (reduce damage from dust storms with windstorm-magnitude winds by 1), extreme gravity (reduce damage from extreme gravity environments by 1), heat climates (+2 circumstance bonus to Fortitude saves against environmental heat dangers), radiation (+1 circumstance bonus to saving throws against radiation effects), and zero gravity (+2 circumstance bonus to Acrobatics or Athletics checks to stop movement or climb along handholds in zero-g). See Chapter 11 for more information on environmental dangers.\nThe benefit of an environmental outfit can be added to another type of clothing (including a different environmental outfit) by doubling and adding together the price of both types of clothing.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Одежда, походная",
    type: "Одежда",
    lvl: 1,
    price: 10,
    descr: "Одежда производится в мирах Соглашения повсеместно, жители системы никогда не испытывают в ней недостатка. Одежду носят и под бронёй и поверх её, её эффекты применяются практически всегда. Для различных ситуаций предусмотрены разные типы одежды.\nA travel outfit offers additional comfort and support during overland travel. You add 2 miles per 8-hour day of overland movement while wearing a traveling outfit. You also gain a +1 circumstance bonus to Constitution checks to avoid taking nonlethal damage resulting from a forced march.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Палатка, обычная",
    type: "Палатка",
    lvl: 1,
    price: 2,
    descr: "A mass-produced tent is insulated, sturdy, and capable of ventilating to prevent overheating or stuffiness without sacrificing protection. It allows characters within to treat extreme cold weather as severe cold weather, treat severe cold weather as typical cold weather, and ignore the effects of typical cold weather. It adjusts the severity of hot weather in a similar fashion. A mass-produced tent does not protect against smoke, catching on fire, lava, radiation, or other environmental hazards.",
    weight: "1",
    source: "ОКП"
},
{
    name: "Дом-палатка",
    type: "Палатка",
    lvl: 1,
    price: 50,
    descr: "Tents known as mobile hoteliers are advanced and include systems that provide their occupants the same environmental protections as armor while active. A mobile hotelier requires a 20-charge battery to provide this protection, uses 1 charge every 8 hours, and is considered a technological item for effects and abilities that target or disable technology. Even if this protection is removed, the tent can still be used as a mass-produced tent.",
    weight: "1",
    source: "ОКП"
},
{
    name: "ИРП",
    type: "Пища",
    lvl: "-",
    price: 1,
    descr: "These self-contained “Ready-to-Eat” pouches contain a day\’s worth of nourishing entrees and side dishes, plus a portable snack or dessert. Each R2E also includes disposable utensils, a single-use flameless ration heater, and an accessory pack containing breath freshener, a disposable cup, a napkin, seasonings, and drink powder. Each R2E has a shelf life of one century, and the pouch is made of a durable, easy-seal material.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Пища, дешёвая",
    type: "Пища",
    lvl: "-",
    price: 1,
    descr: "A meal is usually purchased close to the time it is consumed, often at a restaurant or from a street vendor. Most such meals are mass produced in the Pact Worlds, and it is relatively cheap and easy to get food in just about any remotely civilized area. Poor-quality meals are either nutritious but bland, or tasty but unhealthy. Common-quality meals are both tasty and nourishing. Good meals are gourmet in taste and offer higherquality nutrition.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Сухой паёк (недельный запас)",
    type: "Пища",
    lvl: "-",
    price: 1,
    descr: "Сухой паёк – расфасованная еда, содержащая всё необходимое для насыщения, но бесвкусная и неприглядная на вид. Сухие пайки обычно представляют собой достаточно плотные коричневатые кубики питательных веществ, содержащие достаточно влаги, чтобы покрыть суточную потребность в воде. На сухих пайках можно прожить несколько недель, но это не очень-то приятно.",
    weight: "1",
    source: "ОКП"
},
{
    name: "Пища, обычная",
    type: "Пища",
    lvl: "-",
    price: 3,
    descr: "A meal is usually purchased close to the time it is consumed, often at a restaurant or from a street vendor. Most such meals are mass produced in the Pact Worlds, and it is relatively cheap and easy to get food in just about any remotely civilized area. Poor-quality meals are either nutritious but bland, or tasty but unhealthy. Common-quality meals are both tasty and nourishing. Good meals are gourmet in taste and offer higherquality nutrition.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Пища, дорогая",
    type: "Пища",
    lvl: "-",
    price: 5,
    descr: "A meal is usually purchased close to the time it is consumed, often at a restaurant or from a street vendor. Most such meals are mass produced in the Pact Worlds, and it is relatively cheap and easy to get food in just about any remotely civilized area. Poor-quality meals are either nutritious but bland, or tasty but unhealthy. Common-quality meals are both tasty and nourishing. Good meals are gourmet in taste and offer higherquality nutrition.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Гигиенический набор",
    type: "Прочее",
    lvl: 1,
    price: 3,
    descr: "Этот комплект содержит все инструменты и предметы, необходимые для поддержания гигиены и ухода за собой. Наборы, предназначенные для определённых рас, включают в себя ряд принадлежностей, которые малополезны для других существ (напрмер, средства ухода за чешуёй весков либо усиками ширренов или лашунт.",
    weight: "1",
    source: "ОКП"
},
{
    name: "Кислородная свеча",
    type: "Прочее",
    lvl: 1,
    price: 20,
    descr: "Руки: 1\nIncluded in almost every emergency kit scattered around Absalom Station\’s corridors, oxygen candles are chemical oxygen generators that smolder when ignited. When used in an enclosed space measuring 10 cubic feet, an oxygen candle releases enough oxygen for a single Medium creature to breathe for 10 hours (as opposed to 6 hours) or a Small creature to breathe for 20 hours. The candle provides proportionally more or less oxygen in smaller or larger enclosed spaces respectively. Additional creatures proportionally reduce the time the oxygen lasts. An oxygen candle is consumed upon use.",
    weight: "Л",
    source: "МС"
},
{
    name: "Космический скафандр",
    type: "Прочее",
    lvl: 1,
    price: 25,
    descr: "Although this high-tech suit offers little protection against attack, it does provide all the same environmental protections as a suit of armor. Unlike armor, a space suit is not designed for the rigors of combat. Whenever you take damage while wearing a space suit, you must succeed at a Reflex saving throw (DC equal to the damage dealt) or the space suit\’s life systems suffer catastrophic failure, gaining the broken condition and losing all environmental protections in 1d6 hours unless the suit is repaired. If you fail such a saving throw while the suit already has the broken condition, you lose all environmental protections in 1d6 minutes unless the suit is repaired. You can\’t wear a space suit while also wearing any type of armor, even if that armor is broken.",
    weight: "1",
    source: "ОКП"
},
{
    name: "Бинокль",
    type: "Прочее",
    lvl: 1,
    price: 50,
    descr: "Руки: 2\nOften used by Starfinders and other explorers or scouts, this advanced optical device allows you to view distant objects. While using binoculars, you gain a +1 circumstance bonus to vision-based Perception checks against objects 30 feet or farther from you. In order to gain this benefit, you must continually adjust the binoculars\’ magnification settings, which requires using two hands and a move action each round.",
    weight: "Л",
    source: "МС"
},
{
    name: "Держатель для снаряжения",
    type: "Прочее",
    lvl: 1,
    price: 100,
    descr: "A gear clamp is designed to place a piece of equipment into an easily accessible position. This is often on a belt or the exterior of a suit of armor, but it can also place equipment in convenient locations when you are lurking in a tree or working in a zero-g environment. Affixing a gear clamp in place is a full action, but any object easily and conveniently held in one hand can be added to or removed from a gear clamp as easily as drawing or sheathing a weapon. Gear clamps are designed to have a trick release, with thousands of models each using a unique combination of clicks, spins, tugs, and twists to release attached gear. If you are not familiar with a specific clamps trick (by reading the instructions when you buy the clamp, having it demonstrated, or owning it and periodically testing its function), adding or removing equipment takes a full action. A successful DC 25 Strength check is required to separate material attached by a clamp.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Эпоксидный клей",
    type: "Прочее",
    lvl: 1,
    price: 400,
    descr: "Bonding epoxy is a two-part adhesive plastic kept in a handheld dispenser that automatically mixes the components as they are dispensed. A single dispenser can be used five times. The dispensers cannot be reloaded, and a new dispenser must be purchased if additional epoxy is desired.\nAs a full action you can coat up to a 1-square-foot area with the epoxy. Anything held against the area bonds to it over 1d4 rounds as the epoxy dries. This requires a full action each round to maintain contact between the objects, and anything resisting (such as a creature) must be pinned or helpless to be held in place during this drying period. Dispensed epoxy that is not used within 1 minute hardens and loses its ability to bond objects together.\nPulling apart objects bonded together with this epoxy requires a successful DC 20 Strength check. If the objects are carefully fitted together (requiring 1 minute and a successful DC 20 Engineering check), the Strength DC to separate them increases to 25.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Библиотечный чип",
    type: "Прочее",
    lvl: 3,
    price: 250,
    descr: "Widely used by the Arcanamirium, the Starfinder Society, and other scholarly organizations, library chips are portable storage devices that contain a digital library of information on a particular subject (Culture, Engineering, Life Science, Mysticism, or Physical Science). You gain a +4 circumstance bonus to skill checks to recall knowledge with that skill when using a library chip in conjunction with a tier-0 computer (such as a comm unit) or better. A library chip counts as a downloaded data set for the purposes of using the skill that the library chip pertains to. While using a library chip, you can attempt untrained skill checks to recall knowledge on that subject if the DC is 20 or less.",
    weight: "-",
    source: "МС"
},
{
    name: "Скользкий гель",
    type: "Прочее",
    lvl: 5,
    price: 450,
    descr: "Sold in plastic tubes, this clear gel is a suspension of millions of microscopic spherical beads that reduce friction between objects. As a standard action, you can apply a dose of frictionless gel to your body to grant yourself a +4 circumstance bonus to Acrobatics checks to use the escape task. You must have at least one hand free to open the tube and apply the gel. A tube contains 5 uses of frictionless gel, and a single use lasts for 1 minute.",
    weight: "Л",
    source: "МС"
},
{
    name: "Кредиты",
    type: "Прочее",
    lvl: "-",
    price: null,
    descr: "Требуется описание",
    weight: "-",
    source: null
},
{
    name: "УПО",
    type: "Прочее",
    lvl: "-",
    price: null,
    descr: "A universal polymer base, or UPB, is the basis for most technology in the Pact Worlds, the Veskarium, and many other systems. Each UPB is a tiny multifunction component, not much larger than a grain of rice, capable of being configured to act as a brace, capacitor, circuit, diode, fastener, insulator, lens, modulator, pipe, resistor, and dozens of other constituent parts. UPBs can even be spun out into fabric, broken down into component chemicals, reconstituted into new chemicals, or supplemented with base materials (such as dirt or sand) to form massive braces or walls. The right combination of hundreds or even thousands of UPBs can create everything from a comm unit to a laser weapon to powered armor. In their raw form, UPBs have a bulk of 1 per 1,000 UPBs, though when aligned and configured they can easily take up less bulk, and when configured for a specific purpose that calls for a minimum size and bracing (possibly combining them with inert materials), they can have a higher bulk.\nUPBs are so ubiquitous that they are usable as currency in many major settlements and trade hubs. While credsticks are a more convenient and secure way to carry value, UPBs have the advantage of direct utility and untraceability. They are a popular way to pay smugglers and criminals, but they are also useful for trade missions to systems with UPB technology that don\’t use credits as currency. The value of the Pact Worlds\’ credit is based on the economic utility of a single UPB.",
    weight: "-",
    source: null
},
{
    name: "Вместительные одеяния",
    type: "Реликвия (Технологический предмет)",
    lvl: 4,
    price: 2000,
    descr: "Though this ivory-white frock is tailored for kishalee physiology, most humanoids can wear it with little to no discomfort. A holdall raiment features a dozen pockets, each of which can access a series of linked extradimensional pockets. Each pocket can hold a single item that weighs up to 1 bulk, though any item stored within the raiment can be retrieved from any pocket as a move action, but only by the wearer of the raiment. The stored items cannot be detected by anyone searching or frisking you.",
    weight: "Л",
    source: "СП-05"
},
{
    name: "Акклиматизационный обруч",
    type: "Реликвия (Технологический предмет)",
    lvl: 5,
    price: 2700,
    descr: "This simple metal band attaches to the collar area of your space suit, suit of armor, or other set of clothes. When activated as a standard action, an acclimation torc places your respiratory system and your digestive system in a form of temporal stasis, while still keeping you alive. Essentially, your need to eat, drink, and breathe is temporarily “paused” while the acclimation torc continues to hold a charge. You can breathe normally in vacuums, clouds of smoke, water, and thick, thin, and toxic atmospheres, though you aren\’t protected against the damage of a corrosive atmosphere. In addition, you don\’t need to worry about starvation or thirst while your acclimation torc is active. Unlike the normal protections provided by most suits of armor, an acclimation torc doesn\’t grant you protection against low levels of radiation or conditions of cold and heat. An acclimation torc holds 50 charges and uses 1 charge per hour. You can replenish these charges the same way you recharge the duration of a suit of armor\’s environmental protections.",
    weight: "Л",
    source: "СП-05"
},
{
    name: "Пространственный коммуникатор",
    type: "Реликвия (Технологический предмет)",
    lvl: 6,
    price: 4500,
    descr: "These devices are handheld and circular in shape and have a very high-resolution screen and simple controls. Dimensional comm units are a kishalee version of the comm units commonly found in the Pact Worlds, but they function using the remnants of the vast demiplane network utilized by the now extinct kishalee civilization. The advantage of dimensional comm units is that their text and verbal communications are instantaneous, whether in the same system or through interstellar space, but because of the degraded state of the kishalee dimensional network, they work only sporadically. Prior to use, a dimensional comm unit must be linked with at least one other unit—a process that takes only a minute when all units to be linked are on the same planet. Dimensional comm units nearly always work when used on the same planet to reach other linked devices. Over greater distances, each time a dimensional comm is used, there is a 50% chance that it will function properly if used in the same system or a 25% chance if the communication is interstellar (this is rolled in secret by the GM), but only with linked dimensional comm units. If two linked dimensional comm units make a connection, they retain that connection for 24 hours. If the dimensional comm units don\’t manage to connect, the users can try again after 24 hours. Dimensional comm units do not function within the Drift or on other planes.",
    weight: "-",
    source: "СП-05"
},
{
    name: "Щит \’Горизонт\’",
    type: "Реликвия (Технологический предмет)",
    lvl: 7,
    price: 6500,
    descr: "A horizon shield slips over one hand much like a set of brass knuckles with a touch-sensitive control pad resting in your palm. Activating or deactivating a horizon shield is a move action. When activated, a horizon shield forms a nearly invisible barrier that warps space around you, making you more difficult to hit with ranged attacks. Any ranged attack targeting you treats you as if are 60 feet farther away than you actually are. This might impart a range increment penalty to the attack roll or even make the attack impossible altogether. You must be aware of the attacker and can\’t be holding anything else in the hand equipped with the horizon shield. This effect doesn\’t stack with effects from other horizon shields. A horizon shield has a capacity of 20 and uses 1 charge per round that it is active.",
    weight: "1",
    source: "СП-05"
},
{
    name: "Шлем \’Диктатор\’",
    type: "Реликвия (Технологический предмет)",
    lvl: 9,
    price: 14975,
    descr: "This strange silvery helm features a glowing band of greenish energy. Four metal clasps attached to long, sharp appendages poke out from the crown of the helm. When the apparatus is held over the head of a Small or Medium living creature for 1 minute, the band of energy pulsates wildly, and at the end of that time, the clasps slap down and start to painlessly burrow into the creature\’s cranium. After another full minute, the appendages become fully embedded, and the sovereign helm begins the 24-hour process of rewriting the neural pathways of the subject\’s brain. If the helm is removed at any time during this period and then placed back onto the same subject, the 24 hours begin anew. Once this process is complete, the sovereign helm grants the wearer some control over constructs with the technological subtype.\nWhile a sovereign helm has a different method of installation than most augmentations, it acts as a brain system augmentation in all other ways. You can\’t wear and make use of a sovereign helm if you have preexisting brain system implantation, nor can you install a brain system implantation while a sovereign helm\’s apparatuses are burrowed into your cranium.\nOnce the sovereign helm has fully rewritten your neural pathways, it allows you to spend a standard action in an attempt to assert some amount of control over a single construct with the technological subtype that you can see within 60 feet of you. A targeted construct must attempt a Will saving throw (DC = 10 + half your level + your key ability score modifier); on a failure, it must stop what is doing and can do only what you command (using only the following commands) until the end of your next turn. If the construct succeeds at its saving throw, it is immune to your sovereign helm\’s control for 24 hours.\nFull Stop: The construct cannot do anything until the end of your next turn.\nMove: On the construct\’s next turn, you can decide how it spends its move action.\nAttack: On the construct\’s next turn, you can decide how it attacks.\nAfter the first round a construct has failed its save, you can attempt to maintain your control over it with a move action each round, but the construct can attempt another saving throw. If the construct succeeds, you lose control and the construct is immune to your sovereign helm\’s effects for 24 hours. If the construct fails, your control over it continues until the end of your next turn, and you can choose the same or a different command from the list. A sovereign helm allows you to control only one construct at a time.",
    weight: "Л",
    source: "СП-05"
},
{
    name: "Рюкзак, обычный",
    type: "Рюкзак",
    lvl: 1,
    price: 3,
    descr: "У рюкзака множество отделений, куда можно положить всё, что пригодится во время приключений, и крайне прочные петли, к которым можно прикрепить дополнительные предметы, чтобы всегда иметь их под рукой. Для равномерного распределения веса рюкзак закрепляется на груди и талии мягкими разгрузочными ремнями. В рюкзак можно сложить предметы общим весом около 2. Когда рюкзак надет и закреплён должным образом, вес самого рюкзака не учитывается при определении переносимого веса (если, конечно, вы не несёте его в руках), а вес положенных в него предметов учитывается как обычно.\nКогда на вас правильно надет обычный рюкзак, при определении нагрузки значение вашей Силы считается на 1 выше, чем обычно. Эффекты рюкзаков не складываются.",
    weight: "1",
    source: "ОКП"
},
{
    name: "Рюкзак, станковый",
    type: "Рюкзак",
    lvl: 1,
    price: 25,
    descr: "У рюкзака множество отделений, куда можно положить всё, что пригодится во время приключений, и крайне прочные петли, к которым можно прикрепить дополнительные предметы, чтобы всегда иметь их под рукой. Для равномерного распределения веса рюкзак закрепляется на груди и талии мягкими разгрузочными ремнями. В рюкзак можно сложить предметы общим весом около 2. Когда рюкзак надет и закреплён должным образом, вес самого рюкзака не учитывается при определении переносимого веса (если, конечно, вы не несёте его в руках), а вес положенных в него предметов учитывается как обычно.\nКогда на вас правильно надет станковый рюкзак, при определении нагрузки значение вашей Силы считается на 2 выше, чем обычно. Эффекты рюкзаков не складываются.",
    weight: "1",
    source: "ОКП"
},
{
    name: "Лампа",
    type: "Технологический предмет",
    lvl: 1,
    price: 1,
    descr: "Руки: 1 | Ёмкость: 10 | Расход: 1 в час\nОбласть действия: радиус 10 футов.\nПереносными источниками света (или реже, электрическими фонарями) называют ряд устройств, создающих свет и использующих для работы аккумуляторы. Переносной источник света на одну ступень улучшает уровень освещённости в области свеого действия, которая зависит от устройства.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Фонарь",
    type: "Технологический предмет",
    lvl: 1,
    price: 1,
    descr: "Руки: 1 | Ёмкость: 10 | Расход: 1 в час\nОбласть действия: 20-футовый конус.\nПереносными источниками света (или реже, электрическими фонарями) называют ряд устройств, создающих свет и использующих для работы аккумуляторы. Переносной источник света на одну ступень улучшает уровень освещённости в области свеого действия, которая зависит от устройства.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Стяжка",
    type: "Технологический предмет",
    lvl: 1,
    price: 5,
    descr: "Binders are simple, single-use, resin-cord restraints that can be placed only on helpless, pinned, or willing creatures (a standard action). A pair of binders immobilizes two limbs of your choice. A creature can escape binders with a successful Acrobatics check (DC = 20 + 1-1/2 × your level).",
    weight: "-",
    source: "ОКП"
},
{
    name: "Трос, титановый сплав (10 футов)",
    type: "Технологический предмет",
    lvl: 1,
    price: 5,
    descr: "Промышленный трос чаще всего сплетают из сотен высокопрочных пластиковых нитей, покрытых для надёжности металлом, обычно титановым или адамантиновым.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Коммуникатор, персональный",
    type: "Технологический предмет",
    lvl: 1,
    price: 7,
    descr: "Ёмкость: 80 | Расход: 1 в час.\nПерсональный коммуникатор - карманное устройство, совмещающее в себе небольшой переносной компьютер (0 ранга без улучшений и модулей) и средство сотовой связи, обеспечивающее в пределах планеты беспроводное соединение с другими коммуникаторами, которое позволяет как голосовую связь, так и передачу текстовых сообщений. Кроме этого в персональный коммуникатор встроен калькулятор, фонарик (улучшающий уровень освещенности на одну ступень в 15-футовом конусе) и несколько развлекательных приложений (например, игры или средства доступа к местной инфосфере). Вы можете добавить ему функции других устройств (например, сканера или полноценного компьютера), если дополнительно заплатите 110% цены добавляемого устройства. Внутрисистемные коммуникаторы и коммуникаторы с неограниченной дальностью обычно не отличаются мобильностью, ведь в них встраивается полноценный генератор, питающий их энергией. В большинстве крупных поселений вы можете кратковременно воспользоваться такими устройствами за деньги.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Огнетушитель",
    type: "Технологический предмет",
    lvl: 1,
    price: 15,
    descr: "В качестве основного действия вы можете применить огнетушитель, чтобы потушить одно говорящее существо или предмет размером не более среднего. Для тушения крупного существа или предмета требуется 2 раунда. Необходимое для тушения время удваивается для каждой категории размера после крупного. заряда огнетушителя хватает на 20 раундов (необязательно идущих друг за другом). Впоследствии его можно перезаправить за 10% закупочной стоимости.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Набор инструментов",
    type: "Технологический предмет",
    lvl: 1,
    price: 20,
    descr: "В набор инструментов входят инструменты и устройства, которые дополняют друг друга и требуются для выполнения определённых задач или позволяют получить ситуативный бонус к проверкам определённых навыков. Существуют следующие виды наборов: \n- Инженерный набор: в случае его отсутствия проверки Инженерного дела получают штраф -2;\n- Маскировочный набор: необходим при проверках Маскировки для изменения внешности;\n- Набор всадника: бонус +4 к проверкам Выживания для верховой езды; \n- Набор капканщика: бонус +4 к проверкам Инженерного дела или Мистицизма при установке или обезвреживании ловушек; \n- Навигационные инструменты: бонус +4 к проверкам выживания при ориентировании;\n- Профессиональные инструменты: бонус +4 к проверкам одной профессии;\n- Хакерский набор: требуется для большинства проверок Компьютеров.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Прожектор",
    type: "Технологический предмет",
    lvl: 1,
    price: 25,
    descr: "Руки: 2 | Ёмкость: 10 | Расход: 1 в час\nОбласть действия: 100-футовый конус.\nПереносными источниками света (или реже, электрическими фонарями) называют ряд устройств, создающих свет и использующих для работы аккумуляторы. Переносной источник света на одну ступень улучшает уровень освещённости в области свеого действия, которая зависит от устройства.",
    weight: "1",
    source: "ОКП"
},
{
    name: "Светильник",
    type: "Технологический предмет",
    lvl: 1,
    price: 25,
    descr: "Руки: 2 | Ёмкость: 10 | Расход: 1 в час\nОбласть действия: радиус 50 футов.\nПереносными источниками света (или реже, электрическими фонарями) называют ряд устройств, создающих свет и использующих для работы аккумуляторы. Переносной источник света на одну ступень улучшает уровень освещённости в области свеого действия, которая зависит от устройства.",
    weight: "1",
    source: "ОКП"
},
{
    name: "Медпластырь",
    type: "Технологический предмет",
    lvl: 1,
    price: 50,
    descr: "Медпластырь – простое одноразовое, но многофункциональное медицинское устройство, приклеиваемое на рну или поражённую область (например, явно болезненную или отравленную часть тела), которое не требует особых умений.\nПри спользовании медпластыря вы можете совершить проверку Медицины без изучения и с бонусом +10 (ситуацтивным), но только при первой помощи, продолжительной стабилизации, лечении болезней и нейтрализации действия ядов и наркотиков.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Аптечка, простая",
    type: "Технологический предмет",
    lvl: 1,
    price: 100,
    descr: "The basic medkit has spray antiseptic, bandages, and handheld instruments designed to examine, explore, and treat common ailments. The basic medkit allows you to attempt DC 25 Medicine checks to treat deadly wounds.",
    weight: "1",
    source: "ОКП"
},
{
    name: "Замок, простой",
    type: "Технологический предмет",
    lvl: 1,
    price: 100,
    descr: "СЛ проверки Инженерного дела: 20\nLocks are extremely advanced reusable devices, able to secure any fastening or closure by bonding with its surface and then holding fast. Locks usually open with a code, security chip, or voice command. Successful Engineering checks can disable locks. Locks come in four levels of quality—simple, average, good, and superior—which determine the DC of Engineering checks to open them without the proper key or code. A lock takes two hands to secure or open with a security chip. For more information on locks, including the Engineering DCs to open them",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Радиационный значок",
    type: "Технологический предмет",
    lvl: 1,
    price: 100,
    descr: "Because the invisible danger of radiation can lurk anywhere, dwarven mining consortiums often issue these small apparatuses to those exploring uncharted asteroids. When you are about to enter a square containing any level of radiation and you are wearing a radiation badge, the badge beeps audibly to warn you. A radiation badge is always on and functions for 7 days before it needs to be recharged (much like the environmental protections of a suit of armor with an item level of 1).",
    weight: "Л",
    source: "МС"
},
{
    name: "Детонатор",
    type: "Технологический предмет",
    lvl: 1,
    price: 150,
    descr: "Ёмкость: 5 | Расход: 1 за использование.\nЭто устройство конической формы предназначено для взведения и детонации взрывных устройств (в том числе гранат) одним нажатием кнопки. Настройка детонатора для определённого взрывного устройства занимает одну минуту, после чего его можно активировать одним из нескольких способов. детонация может быть осуществлена простым нажатием на кнопку (не требует действия), вводом четырёхзначного кода (в качестве сопутствующего действия) или путём более сложных манипуляций, например, сканирования сетчатки или отпечатка пальца (требует действия полного хода). Выбор способа детонации производится во время приведения детонатора в боевую готовность. Для использования детонатор должен находиться в пределах 500 футов от взрывного устройства. некоторые детонаторы позволяют применить средства усиления сигнала, но при этом становятся уязвимы к системам радиоактивной защиты (вроде генераторов помех) и другим подобным эффектам. Взрывные устройства обладают теми же параметрами (ценой эффектом и весом), что и гранаты. Когда вы успешно приводите в боевую готовность взрывное устройство на неподвижном предмете при помощи детонатора и навыка Инженерное дело, урон от взрыва игнорирует половину твёрдости этого предмета.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Набор инструментов \’Хинти холдингс\’",
    type: "Технологический предмет",
    lvl: 1,
    price: 200,
    descr: "Xhinti Holdings, which has corporate offices on Salomo Station and factories on Akiton, produces a line of specialty tool kits that supplement those presented on page 221 of the Starfinder Core Rulebook. Xhinti tool kits include the following: a climbing kit (grants a +4 bonus to Athletics checks when climbing), demolitionist\’s kit (grants a +4 bonus to Engineering checks when arming and disarming explosives), linguist\’s kit (grants a +4 bonus to Culture checks when deciphering writing), portable weather station (grants a +4 bonus to Survival checks when predicting the weather), starship repair kit (grants a +4 bonus to Engineering checks when repairing the hull of a starship), and survivalist\’s kit (grants a +4 bonus to Survival checks when enduring severe weather or living off the land). When using a demolitionist\’s kit or starship repair kit for its specialized purpose, you don\’t take the –2 penalty to Engineering checks if you don\’t have an engineering kit.",
    weight: "Л",
    source: "МС"
},
{
    name: "Набор инструментов, специализированный инженерный",
    type: "Технологический предмет",
    lvl: 2,
    price: 445,
    descr: "These kits each provide a +2 circumstance bonus to a specific use of the Engineering skill. Using an armorcrafter kit gives you a +2 bonus to repair, resize, or upgrade armor. A weaponsmithing kit gives you a +2 bonus to repair weapons.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Голографическая кожа",
    type: "Технологический предмет",
    lvl: 2,
    price: 500,
    descr: "Ёмкость: 20 | Расход: 1 в 10 минут.\nThis holographic projector is generally mounted to a belt or arm strap. It can be programmed using the Disguise skill to project a different appearance. When you use a holoskin, you can disguise major features, race, or creature type without the DC of your Disguise check increasing, except against Perception checks that involve physical examination.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Трос, адамантиновый сплав (10 футов)",
    type: "Технологический предмет",
    lvl: 2,
    price: 500,
    descr: "Промышленный трос чаще всего сплетают из сотен высокопрочных пластиковых нитей, покрытых для надёжности металлом, обычно титановым или адамантиновым.",
    weight: "Л/2",
    source: "ОКП"
},
{
    name: "Штурмовой крюк",
    type: "Технологический предмет",
    lvl: 2,
    price: 700,
    descr: "Ёмкость: 20 | Расход: 1 в минуту.\nA grappler is a high-tech anchoring device that can be attached to a cable line as a move action. The cable line can instead be threaded through the grappler, which takes 1 minute but adds the cable line\’s hardness and HP to the hardness and HP of the grappler (and vice versa). A grappler has clamps that can slide from its base along a cable line attached to it, allowing it to be climbed as easily as a knotted rope.\nYou can attach a grappler through which a cable line is threaded to an immobile object that\’s at least 5 feet in width with a ranged attack against AC 5. If the grappler is fired at a moving object or a smaller object, you must hit that object\’s KAC + 8 to attach the grappler to the object. After it\’s attached, the grappler remains anchored until either you give a release command as a move action, the grappler is pried free with an Athletics check equal to the attack roll you made to attach it, or the grappler is destroyed. If a cable line attached to or threaded through a grappler is destroyed but the grappler itself was not damaged, the cable line is destroyed, but the grappler is unharmed. In this case, the grappler loses the excess hardness and HP that a threaded cable line added to it.\nYou can also target a creature with the grappler. This is resolved as a grapple combat maneuver, but a creature struck with the grappler can still use its hands, and its movement is only restricted to remain within range of the length of the grappler\’s cable. In addition to the normal rules for escaping a grapple, the target can pry itself loose with a successful Athletics check (DC equal to your attack roll to grapple the target). Or, it can perform a sunder combat maneuver against the grappler. Even if the combat maneuver doesn\’t destroy the attached cable, the creature escapes the grapple.\nA grappler can be thrown as a grenade or set over the muzzle of a ranged weapon that targets KAC, in which case it has half the normal range increment of the weapon, and you use any weapon proficiency and bonuses to attack you have with that weapon. A grappler can be reused.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Магнитные ботинки",
    type: "Технологический предмет",
    lvl: 2,
    price: 750,
    descr: "Ёмкость: 20 | Расход: 1 в час\nUsed by the brave souls who venture onto the exterior of Absalom Station to conduct repairs, these sturdy boots have powerful electromagnets built directly into the soles. These magnets can be activated as a move action, providing you a +5 circumstance bonus to Athletics checks made to climb metal surfaces, as well as +2 circumstance bonus to KAC against bull rush and trip combat maneuvers when you are standing on a metal surface. In areas of zero gravity, while wearing a pair of magboots, you can move your land speed across metal surfaces without having to attempt skill checks, and as long as you are adjacent to an appropriate surface, you do not automatically move at the beginning of your turn each round. Magboots function until they run out of power or until you deactivate them as a move action, whichever comes first.",
    weight: "1",
    source: "МС"
},
{
    name: "Замок, обычный",
    type: "Технологический предмет",
    lvl: 3,
    price: 1000,
    descr: "СЛ проверки Инженерного дела: 25\nLocks are extremely advanced reusable devices, able to secure any fastening or closure by bonding with its surface and then holding fast. Locks usually open with a code, security chip, or voice command. Successful Engineering checks can disable locks. Locks come in four levels of quality—simple, average, good, and superior—which determine the DC of Engineering checks to open them without the proper key or code. A lock takes two hands to secure or open with a security chip. For more information on locks, including the Engineering DCs to open them",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Наручники",
    type: "Технологический предмет",
    lvl: 4,
    price: 350,
    descr: "Manacles are reusable wrist restraints made of hardened metal or ceramics and keyed to open with a security chip, code, or voice command (determined when they are manufactured). Manacles can be placed only on helpless, pinned, or willing creatures (a standard action). Manacles prevent two arms from holding or using any object. A creature can escape manacles with a successful DC 30 Acrobatics check.",
    weight: "-",
    source: "ОКП"
},
{
    name: "Дальноскоп",
    type: "Технологический предмет",
    lvl: 4,
    price: 2000,
    descr: "Руки: 1 | Ёмкость: 20 | Расход: 1 в час\nA magniscope is a set of goggles equipped with automated magnification-adjustment algorithms. A magniscope grants the same benefit as binoculars, but using it requires only one hand and no actions.",
    weight: "Л",
    source: "МС"
},
{
    name: "Фильтрующая шайба",
    type: "Технологический предмет",
    lvl: 4,
    price: 2000,
    descr: "Руки: 1 | Ёмкость: 40 | Расход: 1 в раунд\nThis circular device resembles the sort of tiny cleaning drone seen aboard space stations and larger vessels, but it has no independent programming. Law-enforcement officers use purifying pucks to clean up areas after they deploy smoke grenades and similar effects. As a standard action, you can activate a purifying puck and slide it across the ground a maximum of 30 feet (difficult terrain reduces this distance to 15 feet, at the GM\’s discretion). The purifying puck then sucks in all smoke and vapors within a 20-foot-radius spread over the next 4 rounds, completely dispersing the effect (such as from a smoke grenade or the fog cloud spell). If the radius of an effect is smaller than 20 feet, the time it takes a purifying puck to disperse the effect is reduced proportionally. If the effect contains any toxins (such as a cloud of poisonous gas), the time is doubled. A purifying puck can\’t disperse an effect that has a radius larger than 20 feet.",
    weight: "Л",
    source: "МС"
},
{
    name: "Спрей-плоть",
    type: "Технологический предмет",
    lvl: 5,
    price: 440,
    descr: "Ёмкость: 1 | Расход: 1\nSprayflesh is an advanced biotech medical device that sprays neutral biomass into a wound or area of concern (such as a clearly diseased or poisoned section of the body). If you have ranks in Medicine, a dose of sprayflesh allows you to attempt a check to treat deadly wounds on a creature that has already received its limit of treat deadly wound benefits for the day. If you succeed at a DC 25 Medicine check, the next time such a creature rests for 10 minutes and spends a Resolve Point to regain Stamina Points, it can instead gain the benefit of your Medicine check to treat deadly wounds. If you are not trained in Medicine, a dose of sprayflesh acts as a medpatch.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Аптечка, улучшенная",
    type: "Технологический предмет",
    lvl: 5,
    price: 2700,
    descr: "The advanced medkit adds more-advanced and specialized tools to diagnose and treat ailments. The advanced medkit can be used in the same way as a basic medkit, but the DC to treat deadly wounds is only 20, and you gain a +2 insight bonus to Medicine checks to treat drugs, diseases, and poisons. Additionally, you can use an advanced medkit to set up a temporary one-patient medical lab, though this requires 10 minutes. You can then provide long-term care to a single patient using the temporary medical lab, with a DC 30 Medicine check.",
    weight: "1",
    source: "ОКП"
},
{
    name: "Лазерный микрофон",
    type: "Технологический предмет",
    lvl: 5,
    price: 2725,
    descr: "Ёмкость: 10 | Расход: 1 в минуту.\nThis handheld sensor allows you to hear through normally sound-impervious materials at great range. It grants you sense through (hearing) with a range of 120 feet, but only through materials that are 1 inch thick or thinner, and each Perception check attempted using it takes a full action, during which you are flat-footed.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Замок, надёжный",
    type: "Технологический предмет",
    lvl: 6,
    price: 3600,
    descr: "СЛ проверки Инженерного дела: 30\nLocks are extremely advanced reusable devices, able to secure any fastening or closure by bonding with its surface and then holding fast. Locks usually open with a code, security chip, or voice command. Successful Engineering checks can disable locks. Locks come in four levels of quality—simple, average, good, and superior—which determine the DC of Engineering checks to open them without the proper key or code. A lock takes two hands to secure or open with a security chip. For more information on locks, including the Engineering DCs to open them",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Коммуникатор, внутрисистемный",
    type: "Технологический предмет",
    lvl: 6,
    price: 4000,
    descr: "Персональный коммуникатор - карманное устройство, совмещающее в себе небольшой переносной компьютер (0 ранга без улучшений и модулей) и средство сотовой связи, обеспечивающее в пределах планеты беспроводное соединение с другими коммуникаторами, которое позволяет как голосовую связь, так и передачу текстовых сообщений. Кроме этого в персональный коммуникатор встроен калькулятор, фонарик (улучшающий уровень освещенности на одну ступень в 15-футовом конусе) и несколько развлекательных приложений (например, игры или средства доступа к местной инфосфере). Вы можете добавить ему функции других устройств (например, сканера или полноценного компьютера), если дополнительно заплатите 110% цены добавляемого устройства. Внутрисистемные коммуникаторы и коммуникаторы с неограниченной дальностью обычно не отличаются мобильностью, ведь в них встраивается полноценный генератор, питающий их энергией. В большинстве крупных поселений вы можете кратковременно воспользоваться такими устройствами за деньги.",
    weight: "20",
    source: "ОКП"
},
{
    name: "Следящий жучок",
    type: "Технологический предмет",
    lvl: 6,
    price: 4250,
    descr: "Ёмкость: 20 | Расход: 1 в час\nThis tiny tracking device contains a miniaturized transponder that makes it easier to follow and locate quarry. Tracking bugs are usually sold on Absalom Station to private detective agencies and suspicious family members. You can hide a tracking bug on a creature as a standard action with a successful Sleight of Hand check to pick the creature\’s pocket (this usually can\’t be done during combat). You can hide a tracking bug on a vehicle or other conveyance as a standard action with a successful Sleight of Hand check opposed by the Perception checks of anyone searching the vehicle; you gain a +4 circumstance bonus to this check due to the tracking bug\’s size.\nOnce you plant a tracking bug, you can use a custom program (included in the tracking bug\’s price) to follow the tracking bug with a successful DC 20 Computers check using a computer, a comm unit, a mechanic\’s custom rig, or any similar computing device; the GM can alter this DC to reflect environmental conditions and other factors. The tracking bug\’s transponder has a 500-foot-radius range, and you must be on the same plane as the tracking bug for the program to function. When a tracking bug runs out of power, you can no longer follow it.",
    weight: "Л",
    source: "МС"
},
{
    name: "Дрон-шпион",
    type: "Технологический предмет",
    lvl: 6,
    price: 4550,
    descr: "Ёмкость: 20 | Расход: 1 в минуту.\nA spy drone is a Tiny remote drone designed specifically to make observations at a distance. This acts as the flight drone of a 1st-level mechanic (and you control it as if you were a 1st-level mechanic, using its remote control or a computer with an added module to control the spy drone), except it cannot make any attacks and it has no weapon mounts, no feats, and no ability to add drone mods. Its skill unit is always Stealth. It cannot speak, but it does understand one language (chosen by you at the time of purchase) and allows you to attempt Perception checks using your own bonus when you directly control it (as the master control ability of a mechanic drone).\nA drone can be upgraded with any one of the following technological items by paying 125% of the item\’s price: flashlight, grappler, lantern, laser microphone, motion detector, scanner, or X-ray visor. The price of buying and installing one upgrade includes the price of replacing an old upgrade on a drone, if applicable.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Детектор движения",
    type: "Технологический предмет",
    lvl: 7,
    price: 6000,
    descr: "Ёмкость: 10 | Расход: 1 в час.\nThis handheld scanner is capable of detecting sweeping kinetic moves, such as the locomotion of creatures and vehicles. Motion detectors have blindsense (vibration) out to 30 feet, but you must take a move action each round to use the sensor.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Ангигравитационный пояс",
    type: "Технологический предмет",
    lvl: 7,
    price: 6500,
    descr: "Ёмкость: 20 | Расход: 1 в раунд\nMost commonly used by those brave enough to travel to the high-gravity world of Aucturn, this belt uses a form of graviton levitation to essentially reduce gravitational pull. You can activate the belt as a swift action, and it operates until you spend another swift action to deactivate it or until it runs out of charges. You treat areas of extreme gravity as having high gravity, areas of high gravity as having standard gravity, and areas of standard gravity as having low gravity. This belt has no effect in areas that naturally have low gravity or zero gravity.",
    weight: "Л",
    source: "МС"
},
{
    name: "Медицинская лаборатория",
    type: "Технологический предмет",
    lvl: 7,
    price: 7000,
    descr: "A full medical lab contains beds, diagnostic equipment, sensors, and tools, and even a small surgical theater. A medical lab is not generally portable unless installed in a starship or vehicle of Huge or larger size. It allows you to treat up to three patients at once, and you can use the treat deadly wounds task of the Medicine skill twice per day on each patient. It otherwise functions as an advanced medical kit.",
    weight: "50",
    source: "ОКП"
},
{
    name: "Автоклешня",
    type: "Технологический предмет",
    lvl: 8,
    price: 9000,
    descr: "Руки: 2 | Ёмкость: 40 | Расход: 1 в раунд\nThis advanced device has adjustable arms that can be folded into multiple configurations, allowing you to bend, open, and twist objects made of metal and other durable materials. Powered by electric motors, an autoclaw takes 1 minute to configure for a specific task and has an effective Strength score of 30 (a +10 bonus) for the purpose of attempting Strength checks to break down doors and similar efforts; your own Strength score doesn\’t affect checks attempted with the autoclaw.\nAutoclaws are frequently used in tasks beyond industrial uses. Free Captains and other space pirates use autoclaws to open stolen containers, while the Stewards\’ special tactical units use autoclaws to force doors open.",
    weight: "1",
    source: "МС"
},
{
    name: "Рентгеновский визор",
    type: "Технологический предмет",
    lvl: 9,
    price: 15000,
    descr: "Ёмкость: 40 | Расход: 1 в раунд\nThis sensor is worn as an adjustable viewer resting over the eyes, like goggles or thick glasses. It sends out X-rays and interprets the information gathered as an image it imposes over your normal vision. This grants sense through (vision) with a range of 60 feet, though it is blocked by materials one-fifth as dense as those that block normal sense through (2 feet of wood or plastic, 1 foot of stone, 2 inches of common metal, or 1 inch of lead or any starmetal) and limits you to black-and-white vision while in use. You don\’t gain the benefit of any other special visual senses (such as lowlight vision) while the visor is active, and you can\’t attempt sight-based Perception checks beyond 60 feet. Activating or deactivating the sensor is a move action.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Коммуникатор, неограниченной дальности",
    type: "Технологический предмет",
    lvl: 12,
    price: 32000,
    descr: "Персональный коммуникатор - карманное устройство, совмещающее в себе небольшой переносной компьютер (0 ранга без улучшений и модулей) и средство сотовой связи, обеспечивающее в пределах планеты беспроводное соединение с другими коммуникаторами, которое позволяет как голосовую связь, так и передачу текстовых сообщений. Кроме этого в персональный коммуникатор встроен калькулятор, фонарик (улучшающий уровень освещенности на одну ступень в 15-футовом конусе) и несколько развлекательных приложений (например, игры или средства доступа к местной инфосфере). Вы можете добавить ему функции других устройств (например, сканера или полноценного компьютера), если дополнительно заплатите 110% цены добавляемого устройства. Внутрисистемные коммуникаторы и коммуникаторы с неограниченной дальностью обычно не отличаются мобильностью, ведь в них встраивается полноценный генератор, питающий их энергией. В большинстве крупных поселений вы можете кратковременно воспользоваться такими устройствами за деньги.",
    weight: "40",
    source: "ОКП"
},
{
    name: "Стиратель памяти",
    type: "Технологический предмет",
    lvl: 13,
    price: 50000,
    descr: "This metal-and-glass disk is 4 inches in diameter and has a small red button along its perimeter. By presenting the disk to a creature within 10 feet and pressing the button (all a standard action), you can erase the last 5 minutes of that creature\’s memory as per modify memory by introducing a series of flashing lights into its visual sensors that directly affects the brain. The creature can attempt a DC 20 Will saving throw to negate this effect. A creature currently being threatened by you or your allies receives a +4 circumstance bonus to the save. A creature that succeeds at the save is instead dazzled for 1d4+4 rounds. This is a mind-affecting sense-dependent effect.\nA memory expunger uses a standard battery, and each use expends 5 charges.",
    weight: "Л",
    source: "ИА-01"
},
{
    name: "Копьё судеб",
    type: "Технологический предмет",
    lvl: 13,
    price: 102300,
    descr: "This unique weapon belonged to a Knight of Golarion who attempted to kill Serovox a few years before the signing of the Absalom Pact and the creation of the Corpse Fleet. It is a golden spear with a ruby blade and functions as both an inferno flame doshko and a white star plasma caster. It holds one ultra-capacity battery, which powers all uses of the weapon. Switching the weapon from melee functionality to ranged functionality (or vice versa) is a swift action.",
    weight: "2",
    source: "СП-06"
},
{
    name: "Замок, превосходный",
    type: "Технологический предмет",
    lvl: 14,
    price: 60000,
    descr: "СЛ проверки Инженерного дела: 40\nLocks are extremely advanced reusable devices, able to secure any fastening or closure by bonding with its surface and then holding fast. Locks usually open with a code, security chip, or voice command. Successful Engineering checks can disable locks. Locks come in four levels of quality—simple, average, good, and superior—which determine the DC of Engineering checks to open them without the proper key or code. A lock takes two hands to secure or open with a security chip. For more information on locks, including the Engineering DCs to open them",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Регенерационный стол",
    type: "Технологический предмет",
    lvl: 16,
    price: 45000,
    descr: "A regeneration table is a medical bed that uses the most advanced medical technology known in the Pact Worlds to restore a creature\’s body to full function from nearly any mishap or injury, including death. It does this with quantumlocked nanites held in a suspended state from which they can become nearly any form of matter, including stem cells for biological creatures or mechanical components for artificial creatures like androids or Akiton\’s anacites. The table both reads the creature\’s own genetic code (or equivalent data) and uses supercomputing predictive algorithms to determine what damage or affliction is present, then attempts to restore the subject to perfect health based on that information.\nA living creature using a regeneration table is affected as if a 6th-level mystic cure spell as well as the remove affliction and restoration spells were cast on it. A dead creature is affected as if raise dead were cast on it. A regeneration table has an effective caster level of 20th.\nAs a result of its need to perfectly attune itself to one creature suffering one exact set of ailments and the expenditure of its quantum state particles, a regeneration table functions only once and is then inert and useless.",
    weight: "20",
    source: "ОКП"
},
{
    name: "Генератор помех",
    type: "Технологический предмет",
    lvl: "Разный",
    price: "Квадрат уровня * 100",
    descr: "Ёмкость: 12 | Расход: 1 в 10 минут.\nThis handheld device, originally designed by the Stewards for military uses, is used by corporations and criminals alike. Signal jammers are available at any item level from 1 to 20 and can be purchased for a price equal to 100 credits × the square of the item level of the jammer. When activated, a signal jammer interrupts broadcast signals within 4 miles. If attached to a larger broadcasting station (such as those found aboard a starship), the range increases to 12 miles. A signal jammer blocks all communication devices from sending and receiving broadcasts. Each signal jammer is designed to affect one specific broadcasting medium (such as radio or wireless). You can attempt a Computers or Engineering check to bypass a signal jammer\’s effects or to determine the location of the jammer. The DC to bypass or locate a signal jammer is 15 + the signal jammer\’s level, and attempting this check takes 1 minute.",
    weight: "Л",
    source: "ОКП"
},
{
    name: "Мох ид",
    type: "Яд",
    lvl: 2,
    price: 140,
    descr: "Type poison (ingested); Save Fortitude DC 14\nTrack Intelligence; Onset 10 minutes; Frequency 1/minute for 6 minutes\nCure 1 save",
    weight: "-",
    source: "ОКП"
},
{
    name: "Туман безумия",
    type: "Яд",
    lvl: 4,
    price: 350,
    descr: "Type poison (inhaled); Save Fortitude DC 15\nTrack Wisdom; Frequency 1/round for 6 rounds\nCure 1 save",
    weight: "-",
    source: "ОКП"
},
{
    name: "Синие уинни",
    type: "Яд",
    lvl: 8,
    price: 1000,
    descr: "Type poison (injury); Save Fortitude DC 17\nTrack Constitution (special); Frequency 1/round for 2 rounds\nEffect progression track is Healthy—Weakened—Unconscious; no end state.\nCure 1 save",
    weight: "-",
    source: "ОКП"
},
{
    name: "Экстракт зелёного лотоса",
    type: "Яд",
    lvl: 8,
    price: 1500,
    descr: "Type poison (contact); Save Fortitude DC 18\nTrack Charisma (special); Onset 1 minute; Frequency 1/round for 6 rounds\nEffect progression track is Healthy—Weakened—Impaired—Pliable—Pliable. The second pliable functions as an end state.\nCure 1 save",
    weight: "-",
    source: "ОКП"
},
{
    name: "Пыль унгола",
    type: "Яд",
    lvl: 9,
    price: 2000,
    descr: "Type poison (inhaled); Save Fortitude DC 17\nTrack Charisma; Frequency 1/round for 4 rounds\nEffect At the impaired state, the penalties from the weakened state become permanent until the victim benefits from a restoration spell.\nCure 1 save",
    weight: "-",
    source: "ОКП"
},
{
    name: "Стебель смерти",
    type: "Яд",
    lvl: 10,
    price: 2650,
    descr: "Type poison (injury); Save Fortitude DC 23\nTrack Constitution; Frequency 1/round for 6 rounds\nCure 2 consecutive saves",
    weight: "-",
    source: "ОКП"
},
{
    name: "Эссенция тени",
    type: "Яд",
    lvl: 10,
    price: 2650,
    descr: "Type poison (injury); Save Fortitude DC 18\nTrack Strength; Frequency 1/round for 6 rounds\nEffect At the impaired state, the penalties from the weakened state become permanent until the victim benefits from a restoration spell.\nCure 1 save",
    weight: "-",
    source: "Эррата\n10.2020"
},
{
    name: "Экстракт чёрного лотоса",
    type: "Яд",
    lvl: 20,
    price: 121000,
    descr: "Type poison (contact); Save Fortitude DC 26\nTrack Constitution (special); Onset 1 minute; Frequency 1/round for 6 rounds\nEffect progression track is Healthy—Weakened—Debilitated—Dead\nCure 2 consecutive saves",
    weight: "-",
    source: "ОКП"
}
];