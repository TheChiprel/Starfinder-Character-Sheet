const THEME_DATABASE = [ 
{
    name: "Агент корпорации",
    descr: "Corporations control much of the modern world, from the food each person eats to the weapons a soldier deploys on the field of battle. You are an agent of one such corporation, which relies on your negotiation, deal-making, and your natural cunning to advance its agendas. Whether you are making proposals to agents of other corporations to split the mining rights for a valuable asteroid or establishing your corporation\’s presence on a newly discovered world, you are the company\’s eyes, ears, and hands.",
    abiscore: "ХАР",
    abilities: ["Тематическая эрудиция [Агент корпорации]", "Полезные связи", "Силовые методы", "По рукам"],
    source: "МС"
},
{
    name: "Ас",
    descr: "You are most comfortable at the controls of a vehicle, whether it\’s a starship racing through the inky void of space or a ground vehicle zooming between trees, around boulders, and across dusty badlands. You might be a member of an elite military force, the recipient of intense courses of training. Alternatively, you might be a total amateur with innate skills that make you a much-admired hotshot.",
    abiscore: "ЛВК",
    abilities: ["Тематическая эрудиция [Ас]", "Одинокий волк", "Жажда Скорости", "Первоклассный пилот"],
    source: "ОКП"
},
{
    name: "Без темы",
    descr: "If you decide that none of the themes fit your particular character concept, you can choose not to have a theme. You then gain the following benefits at the listed levels. A themeless character is considerably less powerful than a character with a theme, so choose this option with care.",
    abiscore: "Любая",
    abilities: ["Общая эрудиция", "Определённость", "Углублённое изучение", "Несгибаемое упорство"],
    source: "ОКП"
},
{
    name: "Биотехник",
    descr: "You are a biotech researcher or avid user of such tech, constantly seeking out or developing new biotechnologies and combining existing augmentations with advancements in other fields. You might be a member of the Augmented, a researcher in one of Bretheda\’s cutting-edge biotech corporations, a spellcasting genetomancer blending biotechnology with magic, or even a voluntary test subject for new augmentations. Either way, you have taken a strong hand in your own evolution.",
    abiscore: "ИНТ",
    abilities: ["Тематическая эрудиция [Биотехник]", "Связи в отрасли", "Подопытный", "Адаптивные биоимпланты"],
    source: "МС"
},
{
    name: "Гладиатор",
    descr: "You are a veteran of the public blood sport industry—a survivor of countless battles to earn a shiny credstick of winnings, the adulation of your fans, or both. You might be a veteran of Akiton\’s fighting pits, a student of the ritualized styles of Triaxus\’s battleflowers, or the sort of masochist who can\’t help but return to Eox\’s Halls of the Living. You\’re likely to die before your habits do, though, as you find few things more exciting than the rush of battle and the pounding cheers of a thousand fans.",
    abiscore: "ВЫН",
    abilities: ["Тематическая эрудиция [Гладиатор]", "Знаменитый боец", "Часть образа", "Любимец толпы"],
    source: "МС"
},
{
    name: "Драконокровый",
    descr: "You can feel draconic magic pulsing through your veins, and the guttural roar of dragons invigorates you. Whether you\’re from an area with deep ties to dragons or have simply spent your life studying the magnificent beasts, you understand how dragons\’ categorization (metallic or chromatic and specific colors) affects their moods, outlooks, and even ultimate goals. You can harness the power of dragons, and you sing the creatures\’ praises wherever you go.",
    abiscore: "ХАР",
    abilities: ["Тематическая эрудиция [Драконокровый]", "Драконьи повадки", "Драконья шкура", "Драконьи сокровища"],
    source: "МС"
},
{
    name: "Закалённый пилигрим",
    descr: "In their adolescence, kasathas undertake a yearlong walkabout known as the Tempering, in which they are encouraged to experience other cultures. You have examined this practice (or perhaps undergone it yourself) and have concluded that a year is not enough time to learn from the countless other civilizations. In any case, you don\’t need to be a kasatha to consider yourself a student of the universe. Many tempered pilgrims are also followers of the philosophy of the Cycle.",
    abiscore: "ХАР",
    abilities: ["Тематическая эрудиция [Закалённый пилигрим]", "Убедительные доводы", "Широкие познания", "Разносторонний опыт"],
    source: "МС"
},
{
    name: "Киберорождённый",
    descr: "You\’ve had some form of cybernetic augmentation since you were very young, and you see further augmentation as a path to self-improvement. You might be a verthani from the Augmented caste, a steelskin orc seeking to distinguish yourself from mainstream society, or anyone else inspired by the possibilities technology offers. Either way, you strive to master your current cybernetics and seek to further upgrade yourself whenever the opportunity presents itself.",
    abiscore: "ИНТ",
    abilities: ["Тематическая эрудиция [Киберорождённый]", "Боди-хакер", "Защищённые системы", "Профессиональный модификатор"],
    source: "МС"
},
{
    name: "Колонист",
    descr: "You have an unquenchable trailblazer\’s spirit, matched with the training and fortitude you\’ll need to carve out a new life for yourself and others in the wilderness. Although you might be the sort to go it alone on the frontier, you\’re more likely part of a small group of settlers. You might be preparing for your first voyage, or you might be a grizzled veteran who has already helped found several successful colonies.",
    abiscore: "ВЫН",
    abilities: ["Тематическая эрудиция [Колонист]", "Добытчик", "Стойкость первопроходца", "Взгляд в будущее"],
    source: "СП-07"
},
{
    name: "Космический пират",
    descr: "You are a free-ranging corsair within the wild and unpredictable fringes of galactic civilization and live by your own code, or a code shared with other like-minded individuals. You tend to view personal property as a laughable concept, unless it is your gear. You might be a freebooter on your own ship, a member of a space-bound gang of raiders, or even a member of the Free Captains of the Diaspora. Alternatively, you might be a new recruit to the piratical lifestyle, just learning the ropes under a more seasoned crew.",
    abiscore: "ЛВК",
    abilities: ["Тематическая эрудиция [Космический пират]", "Контрабандист", "Меч и пистолет", "Благославление Бесмары"],
    source: "МС"
},
{
    name: "Ксеноархеолог",
    descr: "You are driven to explore the ruins of bygone civilizations, whether they are millennia old or recently collapsed. You might seek to explore the interior of Apostae or travel the galaxy to discover lost settlements, and your motives might be purely academic or simply profiteering. You often employ modern technology to aid in your explorations, but you are no stranger to unusual and ancient machinery, sometimes using them in the field when in a pinch.",
    abiscore: "ИНТ",
    abilities: ["Тематическая эрудиция [Ксеноархеолог]", "Чутьё на ловушки", "Профессиональный переводчик", "Археологическое открытие"],
    source: "МС"
},
{
    name: "Ксеноискатель",
    descr: "The thought of meeting alien life-forms excites you. The more different their appearances and customs are from yours, the better! You either believe they have much to teach you or you want to prove you are better than them. Of course, the only way to accomplish your goal is to leave the Pact Worlds and travel to the Vast, where a virtually endless number of aliens await.",
    abiscore: "ХАР",
    abilities: ["Тематическая эрудиция [Ксеноискатель]", "Пиджин", "Первый контакт", "Выдающееся открытие"],
    source: "ОКП"
},
{
    name: "Культист",
    descr: "You served as a hooded, faceless adherent to a religion or organization that remains hidden from public view—usually because its aims are illegal or immoral. Although your time in a cult is most likely behind you—or, at least, that\’s what you insist whenever the subject arises—you remain keenly aware of signs of cult activity and inured to physical hardship by exposure to mind-expanding substances combined with sleepless nights of unending ritual.",
    abiscore: "ВЫН",
    abilities: ["Тематическая эрудиция [Культист]", "Культист под прикрытием", "Резистентность", "Воспоминания о пережитом"],
    source: "МС"
},
{
    name: "Кумир",
    descr: "Thanks to interstellar transmissions and Drift travel, the galaxy is smaller than ever, and this connectivity has facilitated your ascension to celebrity status. You might be a famous performer or a celebrated scientist, but either way, you get recognized on the Pact Worlds and in associated systems. Your reason for traveling to unknown worlds might be to further spread your acclaim or to escape the limelight.",
    abiscore: "ХАР",
    abilities: ["Тематическая эрудиция [Кумир]", "Знаменитость", "Суперзнаменитость", "Профессиональный кумир"],
    source: "ОКП"
},
{
    name: "Наёмник",
    descr: "Whether you take jobs that match your ethical beliefs or you fight for anyone who can afford your services, you are a hired gun. You might take pride in your past accomplishments, proudly displaying trophies of your kills, or you might be laden with guilt over being the sole survivor of a mission gone terribly wrong. You most likely work with other mercenaries and are familiar with the methodologies of military actions all across the galaxy.",
    abiscore: "СИЛ",
    abilities: ["Тематическая эрудиция [Наёмник]", "Пехотинец", "Командир отделения", "Командующий"],
    source: "ОКП"
},
{
    name: "Отмеченный смертью",
    descr: "You have been affected by the energies of death and negative energy. You are not undead, but you have an affinity for the dead and undead that is inexplicable to most living creatures. You may have suffered an attack from an undead creature when very young, or you may have been exposed to strange radiation, dimensional rifts, or magic that caused a weak but permanent link between you and the Negative Energy Plane. You survived this formative experience, but not without some change.",
    abiscore: "ВЫН",
    abilities: ["Тематическая эрудиция [Отмеченный смертью]", "Мертвенная стойкость", "Мертвецкая закалка", "Пожиратель жизни"],
    source: "МС"
},
{
    name: "Охотник за головами",
    descr: "You track people down for money. It is a dangerous profession, as most of your targets understandably don\’t wish to be caught. You wouldn\’t have it any other way. You might have a code of ethics, never taking jobs that, say, target children or members of your own race. You might hunt down only escaped criminals. Or you might be completely amoral, taking any job that comes along—for the right price.",
    abiscore: "ВЫН",
    abilities: ["Тематическая эрудиция [Охотник за головами]", "Быстрый охотник", "Неумолимый", "Первоклассный охотник"],
    source: "ОКП"
},
{
    name: "Покоритель космоса",
    descr: "Your longing to journey among the stars can\’t be sated. You yearn for the adventure of stepping onto a distant world and exploring its secrets. You tend to greet every new opportunity with bravery and fortitude, confident that your multitude of skills will pull you through. Perhaps you simply find joy in the act of traveling with your companions, or perhaps you are just out to line your pockets with all sorts of alien loot!",
    abiscore: "ВЫН",
    abilities: ["Тематическая эрудиция [Покоритель космоса]", "Умелый любитель", "Мастер на все руки", "Профессиональный исследователь"],
    source: "ОКП"
},
{
    name: "Послушник солнца",
    descr: "The sun is the source of all life in the system, and though you may not worship it directly, you seek to honor this precious gift. From a distance, the sun is a serenely glowing light, but in actuality, it is a churning mass of plasma that reaches temperatures of millions of degrees. By meditating on this contradiction, you attempt to achieve inner peace and greater selfcontrol. Whether you\’re a devotee of Sarenrae or simply a resident of the Burning Archipelago, the sun looms large in your life, figuratively and literally.",
    abiscore: "МДР",
    abilities: ["Тематическая эрудиция [Послушник солнца]", "Ментальная гравитация", "Теплопередача", "Солнечная медитация"],
    source: "МС"
},
{
    name: "Преступник",
    descr: "Due to the sins of your past or your current unlawful behavior, you are a wanted individual somewhere in the Pact Worlds. You might not even be guilty and are striving to clear your good name. Or you might fully admit to being a criminal but believe the laws you break are unjust. Whatever the case, boarding a starship headed to the Vast might be just the thing you need until the heat dies down—or until you\’re dragged off to prison.",
    abiscore: "ЛВК",
    abilities: ["Тематическая эрудиция [Преступник]", "Коррупционные связи", "Связи на чёрном рынке", "Профессиональный преступник"],
    source: "ОКП"
},
{
    name: "Роботехник",
    descr: "You are fascinated by the internal workings of machines, whether they\’re intelligent constructs or technological equipment. You might be someone who enjoys tinkering in a garage, or you might be a worker at a factory that specializes in building robots or weaponry. You\’re likely interested in exploring and figuring out the innovations of other organizations and species on distant worlds. Regardless of your specific motivation, there\’s always a gadget that needs tinkering with.",
    abiscore: "ИНТ",
    abilities: ["Тематическая эрудиция [Роботехник]", "Самоделкин", "Прирождённый механик", "Профессиональный роботехник"],
    source: "МС"
},
{
    name: "Священник",
    descr: "You are a member of an organized religion or similar association. Your belief, whether it has been a part of you since childhood or it came to you later in life, is an integral part of your character. You might travel the stars proselytizing your deity, or your church might have sent you out on a specific holy (or unholy) mission. No matter what obstacles life puts in your way, you always have the conviction of your beliefs to fall back on.",
    abiscore: "МДР",
    abilities: ["Тематическая эрудиция [Священник]", "Церковный сановник", "Божественный дар", "Истинная сопричастность"],
    source: "ОКП"
},
{
    name: "Толкователь снов",
    descr: "You were drawn to Liavara by the Dreamers\’ songs, which awoke in you a resonance with these enlightened beings. Now you see the world around you in a new light, and you have a transcendent, innate understanding of the mystical power suffusing the universe. You don\’t command this energy; the most you can do is accept it and absorb it—and when you become utterly in sync with those psychic reverberations encapsulated in the Dreamers\’ songs, you gain oracular glimpses of things yet to come.",
    abiscore: "МДР",
    abilities: ["Тематическая эрудиция [Толкователь снов]", "Вспышка озарения", "Сны о грядущем", "Грёзы"],
    source: "МС"
},
{
    name: "Учёный",
    descr: "You are an erudite intellectual, pitting your brain against problems and puzzles that others would find daunting. You might be an instructor of a specific topic at a large university or a dabbler in a number of fields of study. You could be exploring the galaxy in search of ancient artifacts or new scientific phenomena. Whatever your motivation, you are sure that the answers you seek are out there.",
    abiscore: "ИНТ",
    abilities: ["Тематическая эрудиция [Учёный]", "На кончике языка", "Изыскатель", "Профессиональный учёный"],
    source: "ОКП"
},
{
    name: "Хранитель природы",
    descr: "You believe that the trappings of civilization have made others soft, so you eschew them to live in the wilds, such as the jungles of Castrovel. You don\’t necessarily avoid technology, as it can help you survive in some of the harsher, more extreme environments, but you tend to adorn your equipment with furs and leaves. This might make you seem like a backwards primitive to some people, but you know that nature—in all its forms—will be around long after all societies have collapsed and turned to dust.",
    abiscore: "МДР",
    abilities: ["Тематическая эрудиция [Хранитель природы]", "Защитник животных", "Умелый собиратель", "Единение с природой"],
    source: "МС"
},
{
    name: "Esper",
    descr: "Monsters are out there. They seek to invade your mind and destroy all that lies within. Some might quail at that thought, but not you. You hunt these monsters down wherever they may hide. You have trained with an elite psionic squad or a specialist unit dealing with psychic threats, or served as the psionics officer for a military task force or law enforcement group. Even if you were born without psychic gifts of your own, the exposure you\’ve had working with these units has helped you unlock some of your latent potential.",
    abiscore: "ХАР",
    abilities: ["Тематическая эрудиция [Esper]", "Psychic Coordination", "Danger Sense", "Tactician"],
    source: "СП-23"
}
];