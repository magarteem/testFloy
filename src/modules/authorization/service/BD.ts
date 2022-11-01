import {
  AgeNumberType,
  GroupOptionsType,
  OptionSelectType,
} from "../types/type";

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

export const ageBD: OptionSelectType[] = [
  { value: "male", label: "Мужской" },
  { value: "female", label: "Женский" },
  { value: "other", label: "Другое" },
];

export const ageNumber: AgeNumberType[] = Array.from(Array(100).keys()).map(
  (x) => {
    return { value: x, label: x };
  }
);

export const groupOptions: GroupOptionsType[] = [
  {
    label: "Вокал",
    options: [
      { label: "Тенор", value: "value_1" },
      { label: "Баритон", value: "value_2" },
      { label: "Бас", value: "value_2" },
      { label: "Сопрано", value: "value_2" },
      { label: "Меццо-сопрано", value: "value_2" },
      { label: "Контральто", value: "value_2" },
    ],
  },
  {
    label: "Клавишные",
    options: [
      { label: "Тенор", value: "value_1" },
      { label: "Баритон", value: "value_2" },
      { label: "Бас", value: "value_2" },
      { label: "Сопрано", value: "value_2" },
      { label: "Меццо-сопрано", value: "value_2" },
      { label: "Контральто", value: "value_2" },
    ],
  },
  {
    label: "Струнные",
    options: [
      { label: "Тенор", value: "value_1" },
      { label: "Баритон", value: "value_2" },
      { label: "Бас", value: "value_2" },
      { label: "Сопрано", value: "value_2" },
      { label: "Меццо-сопрано", value: "value_2" },
      { label: "Контральто", value: "value_2" },
    ],
  },
];

export const genreBD: OptionSelectType[] = [
  { value: "classical", label: "Классическая" },
  { value: "folk-narod", label: "Народная" },
  { value: "spiritual", label: "Духовная" },
  { value: "pop music", label: "Поп-музыка" },
  { value: "folk", label: "Фолк" },
  { value: "country", label: "Кантри" },
  { value: "blues", label: "Блюз" },
  { value: "garage blues", label: "Гаражный блюз" },
  { value: "rhythm-and-blues", label: "Ритм-н-блюз" },
  { value: "funk", label: "Фанк" },
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
  { value: "public-questionnaire", label: "Публичная анкета" },
  { value: "partially-open-questionnaire", label: "Частично открытая анкета" },
  { value: "closed-profile", label: "Закрытая анкета " },
];
