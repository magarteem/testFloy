import {
 GroupOptionsType,
 OptionSelectType,
} from "../types/type";

export const optionsTypeAccount: OptionSelectType[] = [
 { value: "musician", label: "Музыкант" },
 { value: "group-collective", label: "Группа / Коллектив" },
 {
  value: "performance-venue",
  label: "Заведение / Площадка для выступлений",
 },
 { value: "school-of-music", label: "Музыкальная школа" },
 { value: "rehearsal-point", label: "Репетиционная точка" },
 { value: "recording-studio", label: "Студия звукозаписи" },
 { value: "a-music-shop", label: "Музыкальный магазин" },
 {
  value: "Workshop-of-musical instruments",
  label: "Мастерская музыкальных инструментов",
 },
 { value: "sound-engineer", label: "Звукорежиссёр" },
];

export const sityBD: OptionSelectType[] = [
 { value: "lobnya", label: "Лобня" },
 { value: "lysva", label: "Лысьва" },
 { value: "lytkarino", label: "Лыткарино" },
 { value: "lyubertsy", label: "Люберцы" },
 { value: "magadan", label: "Магадан" },
 { value: "magnitogorsk", label: "Магнитогорск" },
 { value: "maykop", label: "Майкоп" },
 { value: "makhachkala", label: "Махачкала" },
 { value: "mezhdurechensk", label: "Междуреченск" },
 { value: "meleuz", label: "Мелеуз" },
];

export const genderBD: OptionSelectType[] = [
 { value: "male", label: "Мужской" },
 { value: "female", label: "Женский" },
 { value: "other", label: "Другое" },
];

export const groupeOptions: GroupOptionsType[] = [
 {
  label: "Вокал",
  hexColor: "#000",
  options: [
   { label: "Тенор", value: "value_1", imgIcons: "" },
   { label: "Баритон", value: "value_2", imgIcons: "" },
   { label: "Бас", value: "value_23", imgIcons: "" },
   { label: "Сопрано", value: "value_42", imgIcons: "" },
   {
    label: "Меццо-сопрано",
    value: "value_52",
    imgIcons: "",
   },
   { label: "Контральто", value: "value_26", imgIcons: "" },
  ],
 },
 {
  label: "Клавишные",
  hexColor: "#f3a00a",
  options: [
   { label: "Аккордеон", value: "accordion", imgIcons: "" },
   { label: "Ксилофон", value: "xylophone", imgIcons: "" },
   { label: "Орган", value: "organ", imgIcons: "" },
   { label: "Пианино", value: "piano", imgIcons: "" },
   { label: "Рояль", value: "rouial", imgIcons: "" },
  ],
 },
 {
  label: "Духовые",
  hexColor: "#35ed4d",
  options: [
   {
    label: "Саксофон",
    value: "saxophone",
    imgIcons: "",
   },
   {
    label: "Труба",
    value: "pipe",
    imgIcons: "",
   },
   {
    label: "Тромбон",
    value: "trombone",
    imgIcons: "",
   },
   {
    label: "Валторна",
    value: "french_horn",
    imgIcons: "",
   },
   {
    label: "Туба",
    value: "tuba",
    imgIcons: "",
   },
   {
    label: "Геликон",
    value: "helicon",
    imgIcons: "",
   },
   {
    label: "Сузафон",
    value: "sousaphone",
    imgIcons: "",
   },
   {
    label: "Флюгельгорн",
    value: "flugelhorn",
    imgIcons: "",
   },
   {
    label: "Корнет",
    value: "cornet",
    imgIcons: "",
   },
  ],
 },
 {
  label: "Струнные",
  hexColor: "#4a2fff",
  options: [
   {
    label: "Гитара",
    value: "guitar",
    imgIcons: "",
   },
   {
    label: "Укулеле",
    value: "ukulele",
    imgIcons: "",
   },
   {
    label: "Скрипка",
    value: "violins",
    imgIcons: "",
   },
   {
    label: "Альта",
    value: "violas",
    imgIcons: "",
   },
   {
    label: "Контрабас",
    value: "вouble_basses",
    imgIcons: "",
   },
   {
    label: "Виолончели",
    value: "cellos",
    imgIcons: "",
   },
   {
    label: "Домра",
    value: "domry",
    imgIcons: "",
   },
   {
    label: "Балалайка",
    value: "balalaikas",
    imgIcons: "",
   },
   {
    label: "Гусли",
    value: "gusli",
    imgIcons: "",
   },
  ],
 },
];

export const genreBD: OptionSelectType[] = [
 {
  value: "classical",
  label: "Классическая",
  hexColor: "#1E86FF",
 },
 {
  value: "folk-narod",
  label: "Народная",
  hexColor: "#FFC633",
 },
 {
  value: "spiritual",
  label: "Духовная",
  hexColor: "#F05A4F",
 },

 {
  value: "pop_music",
  label: "Поп-музыка",
  hexColor: "#E290DA",
 },

 {
  value: "folk",
  label: "Фолк",
  hexColor: "#FFC633",
 },
 { value: "country", label: "Кантри", hexColor: "#F05A4F" },
 { value: "blues", label: "Блюз", hexColor: "#FFC633" },
 {
  value: "garage blues",
  label: "Гаражный блюз",
  hexColor: "#000",
 },
 {
  value: "rhythm_and_blues",
  label: "Ритм-н-блюз",
  hexColor: "#FF6A6A",
 },
 { value: "funk", label: "Фанк", hexColor: "#7E7E7D" },

 {
  value: "helicon",
  label: "Геликон",
  hexColor: "#dd1558",
 },
 {
  value: "electron",
  label: "электронная",
  hexColor: "#45BCFF",
 },
 {
  value: "iron",
  label: "Метал",
  hexColor: "#F05A4F",
 },

 {
  value: "latin_american_music",
  label: "Латиноамериканская",
  hexColor: "#FF9B62",
 },
 { value: "jazz", label: "Джаз", hexColor: "#C4764A" },
 { value: "chanson", label: "Шансон", hexColor: "#7E7E7D" },
 {
  value: "hip-hop",
  label: "Хип-хоп",
  hexColor: "#404D5C",
 },
];

export const skillBD: OptionSelectType[] = [
 { value: "sofa", label: "Диванный" },
 { value: "newbie", label: "Новичок" },
 { value: "confident", label: "Уверенный" },
 { value: "master", label: "Мастер" },
 { value: "star", label: "Звезда" },
 { value: "teacher", label: "Преподаватель" },
];

export const profilePrivacySettings: OptionSelectType[] = [
 {
  value: "public-questionnaire",
  label: "Публичная анкета",
 },
 {
  value: "partially-open-questionnaire",
  label: "Частично открытая анкета",
 },
 { value: "closed-profile", label: "Закрытая анкета " },
];
