const ABISCORES = Object.freeze(
    {
        "STR": 'СИЛ',
        "AGI": 'ЛВК',
        "CON": 'ВЫН',
        "INT": 'ИНТ',
        "WIS": 'МДР',
        "CHA": 'ХАР'
    }
);

const CLASSES = Object.freeze(
    {
        "MECHANIC": 'Механик',
        "MYSTIC": 'Мистик',
        "OPERATIVE": 'Оперативник',
        "ENVOY": 'Посланник',
        "SOLDIER": 'Солдат',
        "SOLARION": 'Солярион',
        "TECHNOMANCER": 'Техномант'
    }
);

const POPUP_FILTER_TYPES = Object.freeze(
    {
        "FIND": 0,
        "RANGE": 1,
        "SELECT": 2
    }
);

const WEAPON_TYPES = Object.freeze(
    {
        "MELEE_SIMPLE": 'Простое ближнего боя',
        "MELEE_ADVANCED": 'Высокотехнологичное ближнего боя',
        "RANGED_SMALL": 'Короткоствольное',
        "RANGED_LONG": 'Длинноствольное',
        "RANGED_SNIPER": 'Снайперское',
        "RANGED_HEAVY": 'Тяжёлое',
        "MELEE_SPECIAL": 'Особое ближнего боя',
        "RANGED_SPECIAL": 'Особое дальнего боя',
        "GRENADE": 'Граната',
        "UNKNOWN": 'Неизвестно'
    }
);

const WEAPON_MODIFIER = Object.freeze(
    {
        "NONE": 'Нет',
        "MELEE": 'Ближняя',
        "OPERATIVE": 'Оперативная',
        "RANGED": 'Дальняя',
        "THROWN": 'Метательная'
    }
);

const ARMOR_TYPES = Object.freeze(
    {
        "NONE": 'Без брони',
        "LIGHT": 'Лёгкая',
        "HEAVY": 'Тяжёлая',
        "POWER": 'Силовая',
        "UNKNOWN": 'Неизвестно'
    }
);

const SKILLS = Object.freeze(
    {
        "ACROBATICS": 'Акробатика',
        "ATHLETICS": 'Атлетика',
        "LIFE_SCIENCE": 'Биологические науки',
        "BLUFF": 'Блеф',
        "PERCEPTION": 'Внимание',
        "SURVIVAL": 'Выживание',
        "DIPLOMACY": 'Дипломатия',
        "INTIMIDATE": 'Запугивание',
        "ENGINEERING": 'Инженерное дело',
        "COMPUTERS": 'Компьютеры',
        "CULTURE": 'Культура',
        "SLEIGHT_OF_HAND": 'Ловкость рук',
        "DISGUISE": 'Маскировка',
        "MEDICINE": 'Медицина',
        "MYSTICISM": 'Мистицизм',
        "PILOTING": 'Пилотирование',
        "SENSE_MOTIVE": 'Проницательность',
        "STEALTH": 'Скрытность',
        "PHYSICAL_SCIENCE": 'Физические науки'
    }
);