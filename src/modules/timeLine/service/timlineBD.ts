import avatart_11 from "../../../assets/images/avatart_11.webp";
import avatart_22 from "../../../assets/images/avatart_22.webp";
import avatart_33 from "../../../assets/images/avatart_33.webp";
import avatart_44 from "../../../assets/images/avatart_44.webp";
import avatart_55 from "../../../assets/images/avatart_55.webp";
import cardsItem_1 from "../../../assets/images/cardsItem_1.webp";
import cardsItem_2 from "../../../assets/images/cardsItem_2.webp";
import imgTest10 from "../../../assets/images/imgTest10.webp";
import imgTest1 from "../../../assets/images/imgTest1.webp";
import { InitialStateTeamLineType } from "../types/timlineSliceType";
import { groupeOptions } from "../../authorization/service/BD";

// Лента новостей (кнопка домик)
export const timeLineBD: InitialStateTeamLineType[] = [
 {
  id: 1,
  author: {
   id_user: "kirill",
   name: "Кирилл Белоусов",
   city: { value: "lyubertsy", label: "Люберцы" },
   avatar: "",
  },
  date: 1671668793000,
  timeLinePost: {
   city: { value: "magadan", label: "Магадан" },
   photo: [cardsItem_1],
   text:
    "Рок-группа «Сияние нС» после пятилетнего отпуска воскресла! С обновленным составом уже выступает и радует зрителей города. В новом составе собрались харизматичные музыканты в образах ангела, эльфа, друида, воинов, так что будет не только интересно слушать, но и приятно смотреть. Стиль музыки электро-лирик рок. Драйв, бунтарство, глубокие чувства и переживания заденут струны души. В концертной программе взяты лучшие песни и инструментальные композиции за всю эпоху группы, а так же порадуют слушателя и новыми произведениями. На концерте зрители погрузятся в сюжет, основанный на мифах и легендах, а также всех ожидает множество сюрпризов: светошоу, каскадеры и многое другое на сцене ДК «Современник» 3 декабря в 17.00.",
   typeCategory: { value: "poster", label: "Афиша" },
   tools: [
    groupeOptions[1].options[2],
    groupeOptions[2].options[1],
    groupeOptions[2].options[3],
    groupeOptions[3].options[4],
   ],
   genre: [
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
   ],
  },
 },
 {
  id: 2,
  author: {
   id_user: "iana",
   name: "Яна Калинина",
   city: { value: "magadan", label: "Магадан" },
   avatar: avatart_44,
  },
  date: 1671512640000,
  timeLinePost: {
   city: { value: "maykop", label: "Майкоп" },
   photo: [],
   text:
    "Ру́сская Википе́дия — русскоязычный раздел Википедии, основанный 11 мая 2001 года. Входит в десятку самых крупных языковых разделов Википедии по всем основным показателям ",
   typeCategory: {
    value: "world_of_music",
    label: "В мире музыки",
   },
   tools: [
    groupeOptions[1].options[2],
    groupeOptions[2].options[1],
    groupeOptions[2].options[3],
    groupeOptions[3].options[4],
   ],
   genre: [
    {
     value: "country",
     label: "Кантри",
     hexColor: "#F05A4F",
    },
    { value: "blues", label: "Блюз", hexColor: "#FFC633" },
    {
     value: "garage blues",
     label: "Гаражный блюз",
     hexColor: "#000",
    },
   ],
  },
 },

 {
  id: 3,
  author: {
   id_user: "kirill",
   name: "Кирилл Белоусов",
   city: { value: "lobnya", label: "Лобня" },
   avatar: "",
  },
  date: 1671491793000,
  timeLinePost: {
   city: { value: "mezhdurechensk", label: "Междуреченск" },
   photo: [imgTest10],
   text:
    "Рок-группа «Сияние нС» после пятилетнего отпуска воскресла! С обновленным составом уже выступает и радует зрителей города. В новом составе собрались харизматичные музыканты в образах ангела, эльфа, друида, воинов, так что будет не только интересно слушать, но и приятно смотреть. Стиль музыки электро-лирик рок. Драйв, бунтарство, глубокие чувства и переживания заденут струны души. В концертной программе взяты лучшие песни и инструментальные композиции за всю эпоху группы, а так же порадуют слушателя и новыми произведениями. На концерте зрители погрузятся в сюжет, основанный на мифах и легендах, а также всех ожидает множество сюрпризов: светошоу, каскадеры и многое другое на сцене ДК «Современник» 3 декабря в 17.00.",
   typeCategory: {
    value: "technical_questions",
    label: "Технические вопросы",
   },
   tools: [
    groupeOptions[1].options[2],
    groupeOptions[2].options[1],
    groupeOptions[2].options[3],
    groupeOptions[3].options[4],
   ],
   genre: [
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
   ],
  },
 },
 {
  id: 4,
  author: {
   id_user: "ulia",
   name: "Юлия Андреевна",
   city: { value: "lyubertsy", label: "Люберцы" },
   avatar: avatart_22,
  },
  date: 1671138660000,
  timeLinePost: {
   city: { value: "magadan", label: "Магадан" },
   photo: [],
   text:
    "Ру́сская Википе́дия — русскоязычный раздел Википедии, основанный 11 мая 2001 года. Входит в десятку самых крупных языковых разделов Википедии по всем основным показателям. Используется MediaWiki с рядом расширений. Включает в себя 1 867 178 статей, а также служебные страницы. ",
   typeCategory: { value: "memology", label: "Мемология" },
   tools: [
    groupeOptions[1].options[2],
    groupeOptions[2].options[1],
    groupeOptions[2].options[3],
    groupeOptions[3].options[4],
   ],
   genre: [
    { value: "jazz", label: "Джаз", hexColor: "#C4764A" },
    {
     value: "chanson",
     label: "Шансон",
     hexColor: "#7E7E7D",
    },
    {
     value: "hip-hop",
     label: "Хип-хоп",
     hexColor: "#404D5C",
    },
   ],
  },
 },
 {
  id: 5,
  author: {
   id_user: "iana",
   name: "Яна Калинина",
   city: { value: "magadan", label: "Магадан" },
   avatar: avatart_44,
  },
  date: 1639929600000,
  timeLinePost: {
   city: { value: "lobnya", label: "Лобня" },
   photo: [cardsItem_2],
   text:
    "Рок-группа «Сияние нС» после пятилетнего отпуска воскресла! С обновленным составом уже выступает и радует зрителей города. В новом составе собрались харизматичные музыканты в образах ангела, эльфа, друида, воинов, так что будет не только интересно слушать, но и приятно смотреть. Стиль музыки электро-лирик рок. Драйв, бунтарство, глубокие чувства и переживания заденут струны души. В концертной программе взяты лучшие песни и инструментальные композиции за всю эпоху группы, а так же порадуют слушателя и новыми произведениями. На концерте зрители погрузятся в сюжет, основанный на мифах и легендах, а также всех ожидает множество сюрпризов: светошоу, каскадеры и многое другое на сцене ДК «Современник» 3 декабря в 17.00.",
   typeCategory: { value: "advertising", label: "Реклама" },
   tools: [
    groupeOptions[0].options[0],
    groupeOptions[1].options[0],
    groupeOptions[2].options[2],
    groupeOptions[3].options[1],
    groupeOptions[0].options[3],
    groupeOptions[1].options[2],
    groupeOptions[2].options[1],
   ],
   genre: [
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
   ],
  },
 },
 {
  id: 6,
  author: {
   id_user: "masha",
   name: "Маша Андреевна",
   city: { value: "makhachkala", label: "Махачкала" },
   avatar: avatart_33,
  },
  date: 1608375420000,
  timeLinePost: {
   city: { value: "maykop", label: "Майкоп" },
   photo: [imgTest1],
   text:
    "Рок-группа «Сияние нС» после пятилетнего отпуска воскресла! С обновленным составом уже выступает и радует зрителей города. В новом составе собрались харизматичные музыканты в образах ангела, эльфа, друида, воинов, так что будет не только интересно слушать, но и приятно смотреть. Стиль музыки электро-лирик рок. Драйв, бунтарство, глубокие чувства и переживания заденут струны души. В концертной программе взяты лучшие песни и инструментальные композиции за всю эпоху группы, а так же порадуют слушателя и новыми произведениями. На концерте зрители погрузятся в сюжет, основанный на мифах и легендах, а также всех ожидает множество сюрпризов: светошоу, каскадеры и многое другое на сцене ДК «Современник» 3 декабря в 17.00.",
   typeCategory: { value: "poster", label: "Афиша" },
   tools: [
    groupeOptions[0].options[0],
    groupeOptions[1].options[0],
   ],
   genre: [
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
   ],
  },
 },
 {
  id: 7,
  author: {
   id_user: "eugenia",
   name: "Евгения Матвеева",
   city: { value: "makhachkala", label: "Махачкала" },
   avatar: avatart_55,
  },
  date: 1608258550000,
  timeLinePost: {
   city: { value: "lobnya", label: "Лобня" },
   photo: [cardsItem_2],
   text:
    "Рок-группа «Сияние нС» после пятилетнего отпуска воскресла! С обновленным составом уже выступает и радует зрителей города. В новом составе собрались харизматичные музыканты в образах ангела, эльфа, друида, воинов, так что будет не только интересно слушать, но и приятно смотреть. Стиль музыки электро-лирик рок. Драйв, бунтарство, глубокие чувства и переживания заденут струны души. В концертной программе взяты лучшие песни и инструментальные композиции за всю эпоху группы, а так же порадуют слушателя и новыми произведениями. На концерте зрители погрузятся в сюжет, основанный на мифах и легендах, а также всех ожидает множество сюрпризов: светошоу, каскадеры и многое другое на сцене ДК «Современник» 3 декабря в 17.00.",
   typeCategory: {
    value: "world_of_music",
    label: "В мире музыки",
   },
   tools: [
    groupeOptions[0].options[0],
    groupeOptions[1].options[0],
   ],
   genre: [
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
   ],
  },
 },
];
