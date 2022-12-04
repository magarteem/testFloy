import {
 GenreType,
 OptionSelectType,
} from "../types/authType";
import vocals from "../../../assets/icons/iconsTools/vocals.svg";
import classical_guitar from "../../../assets/icons/iconsTools/classical_guitar.svg";
import ukulele from "../../../assets/icons/iconsTools/ukulele.svg";
import violin from "../../../assets/icons/iconsTools/violin.svg";
import alto from "../../../assets/icons/iconsTools/alto.svg";
import double_bass from "../../../assets/icons/iconsTools/double_bass.svg";
import cello from "../../../assets/icons/iconsTools/cello.svg";
import djembe from "../../../assets/icons/iconsTools/djembe.svg";
import balalaika from "../../../assets/icons/iconsTools/balalaika.svg";
import saxophone from "../../../assets/icons/iconsTools/saxophone.svg";
import tuba from "../../../assets/icons/iconsTools/tuba.svg";
import trombone from "../../../assets/icons/iconsTools/trombone.svg";
import horn from "../../../assets/icons/iconsTools/horn.svg";
import xylophone from "../../../assets/icons/iconsTools/xylophone.svg";
import accordion from "../../../assets/icons/iconsTools/accordion.svg";
import organ from "../../../assets/icons/iconsTools/organ.svg";
import bagpipes from "../../../assets/icons/iconsTools/bagpipes.svg";
import piano from "../../../assets/icons/iconsTools/piano.svg";
import synthesizer from "../../../assets/icons/iconsTools/synthesizer.svg";
import { GroupOptionsType } from "../types/selectOptionsType";

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
export const sityBD1: any = [
 { value: "lobnya", name: "Лобня" },
 { value: "lysva", name: "Лысьва" },
 { value: "lytkarino", name: "Лыткарино" },
 { value: "lyubertsy", name: "Люберцы" },
 { value: "magadan", name: "Магадан" },
 { value: "magnitogorsk", name: "Магнитогорск" },
 { value: "maykop", name: "Майкоп" },
 { value: "makhachkala", name: "Махачкала" },
 { value: "mezhdurechensk", name: "Междуреченск" },
 { value: "meleuz", name: "Мелеуз" },
];

export const genderBD: OptionSelectType[] = [
 { value: "male", label: "Мужской" },
 { value: "female", label: "Женский" },
 { value: "other", label: "Другое" },
];

export const genderBD1: any = [
 { value: "male", name: "Мужской" },
 { value: "female", name: "Женский" },
 { value: "other", name: "Другое" },
];

export const groupeOptions1: any = [
 {
  label: "Вокал",
  hexColor: "#000",
  options: [
   { label: "Тенор", value: "value_1", imgIcons: vocals },
   { label: "Баритон", value: "value_2", imgIcons: vocals },
   { label: "Бас", value: "value_23", imgIcons: vocals },
   {
    label: "Сопрано",
    value: "value_42",
    imgIcons: vocals,
   },
   {
    label: "Меццо-сопрано",
    value: "value_52",
    imgIcons: vocals,
   },
   {
    label: "Контральто",
    value: "value_26",
    imgIcons: vocals,
   },
  ],
 },
 {
  label: "Клавишные",
  hexColor: "#f3a00a",
  options: [
   {
    label: "Аккордеон",
    value: "аккордеон",
    imgIcons: accordion,
   },
   {
    label: "Ксилофон",
    value: "xylophone",
    imgIcons: xylophone,
   },
   { label: "Орган", value: "organ", imgIcons: organ },
   { label: "Фортепиано", value: "piano", imgIcons: piano },
   {
    label: "Синтезатор",
    value: "synthesizer",
    imgIcons: synthesizer,
   },
  ],
 },
 {
  label: "Духовые",
  hexColor: "#35ed4d",
  options: [
   {
    label: "Саксофон",
    value: "saxophone",
    imgIcons: saxophone,
   },
   {
    label: "Труба",
    value: "pipe",
    imgIcons: tuba,
   },
   {
    label: "Тромбон",
    value: "trombone",
    imgIcons: trombone,
   },
   {
    label: "Валторна",
    value: "french_horn",
    imgIcons: horn,
   },
   {
    label: "Туба",
    value: "tuba",
    imgIcons: tuba,
   },
   {
    label: "Геликон",
    value: "helicon",
    imgIcons: xylophone,
   },
   {
    label: "Сузафон",
    value: "sousaphone",
    imgIcons: xylophone,
   },
   {
    label: "Волынка",
    value: "bagpipes",
    imgIcons: bagpipes,
   },
   {
    label: "Саксофон",
    value: "saxophone",
    imgIcons: saxophone,
   },
  ],
 },
 {
  label: "Струнные",
  hexColor: "#4a2fff",
  options: [
   {
    label: "Классическая гитара",
    value: "classical_guitar",
    imgIcons: classical_guitar,
   },
   {
    label: "Укулеле",
    value: "ukulele",
    imgIcons: ukulele,
   },
   {
    label: "Скрипка",
    value: "violins",
    imgIcons: violin,
   },
   {
    label: "Альта",
    value: "violas",
    imgIcons: alto,
   },
   {
    label: "Контрабас",
    value: "вouble_basses",
    imgIcons: double_bass,
   },
   {
    label: "Виолончели",
    value: "cellos",
    imgIcons: cello,
   },
   {
    label: "Домра",
    value: "domry",
    imgIcons: djembe,
   },
   {
    label: "Балалайка",
    value: "balalaikas",
    imgIcons: balalaika,
   },
   {
    label: "Гусли",
    value: "gusli",
    imgIcons: saxophone,
   },
  ],
 },
];

export const groupeOptions: GroupOptionsType[] = [
 {
  label: "Вокал",
  hexColor: "#000",
  options: [
   { label: "Тенор", value: "value_1", imgIcons: vocals },
   { label: "Баритон", value: "value_2", imgIcons: vocals },
   { label: "Бас", value: "value_23", imgIcons: vocals },
   {
    label: "Сопрано",
    value: "value_42",
    imgIcons: vocals,
   },
   {
    label: "Меццо-сопрано",
    value: "value_52",
    imgIcons: vocals,
   },
   {
    label: "Контральто",
    value: "value_26",
    imgIcons: vocals,
   },
  ],
 },
 {
  label: "Клавишные",
  hexColor: "#f3a00a",
  options: [
   {
    label: "Аккордеон",
    value: "аккордеон",
    imgIcons: accordion,
   },
   {
    label: "Ксилофон",
    value: "xylophone",
    imgIcons: xylophone,
   },
   { label: "Орган", value: "organ", imgIcons: organ },
   { label: "Фортепиано", value: "piano", imgIcons: piano },
   {
    label: "Синтезатор",
    value: "synthesizer",
    imgIcons: synthesizer,
   },
  ],
 },
 {
  label: "Духовые",
  hexColor: "#35ed4d",
  options: [
   {
    label: "Саксофон",
    value: "saxophone",
    imgIcons: saxophone,
   },
   {
    label: "Труба",
    value: "pipe",
    imgIcons: tuba,
   },
   {
    label: "Тромбон",
    value: "trombone",
    imgIcons: trombone,
   },
   {
    label: "Валторна",
    value: "french_horn",
    imgIcons: horn,
   },
   {
    label: "Туба",
    value: "tuba",
    imgIcons: tuba,
   },
   {
    label: "Геликон",
    value: "helicon",
    imgIcons: xylophone,
   },
   {
    label: "Сузафон",
    value: "sousaphone",
    imgIcons: xylophone,
   },
   {
    label: "Волынка",
    value: "bagpipes",
    imgIcons: bagpipes,
   },
   {
    label: "Саксофон",
    value: "saxophone",
    imgIcons: saxophone,
   },
  ],
 },
 {
  label: "Струнные",
  hexColor: "#4a2fff",
  options: [
   {
    label: "Классическая гитара",
    value: "classical_guitar",
    imgIcons: classical_guitar,
   },
   {
    label: "Укулеле",
    value: "ukulele",
    imgIcons: ukulele,
   },
   {
    label: "Скрипка",
    value: "violins",
    imgIcons: violin,
   },
   {
    label: "Альта",
    value: "violas",
    imgIcons: alto,
   },
   {
    label: "Контрабас",
    value: "вouble_basses",
    imgIcons: double_bass,
   },
   {
    label: "Виолончели",
    value: "cellos",
    imgIcons: cello,
   },
   {
    label: "Домра",
    value: "domry",
    imgIcons: djembe,
   },
   {
    label: "Балалайка",
    value: "balalaikas",
    imgIcons: balalaika,
   },
   {
    label: "Гусли",
    value: "gusli",
    imgIcons: saxophone,
   },
  ],
 },
];

export const genreBD: GenreType[] = [
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
