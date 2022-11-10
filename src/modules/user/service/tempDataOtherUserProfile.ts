import Inspiration_1 from "../../../assets/images/Inspiration_1.webp";
import Inspiration_2 from "../../../assets/images/Inspiration_2.webp";
import avatar_1 from "../../../assets/images/avatar_1.webp";
import avatar_2 from "../../../assets/images/avatar_2.webp";
import avatar_3 from "../../../assets/images/avatar_3.webp";
import { InitialStateUserType } from "../types/userSliceType";

export const tempDataOtherUserProfile: InitialStateUserType[] =
 [
  {
   id_user: "initialProfile",
   name: "Юлия Андреевна",
   email: "i-am-mail_test@mail.ru",
   sity: "Москва, Орёл",
   age: "32",
   img_upload: "",
   gender: "",
   type_account: "",
   skills: {
    tool: ["Гитара", "Укулеле", "Саксофон"],
    genre: [
     "Джаз",
     "Поп-музыка",
     "Кантри",
     "Блюз",
     "Фолк-музыка",
     "Ритм-н-блюз",
    ],
    workExperience:
     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis risus, neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus, neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus, neque cursus risus.",
    master: "",
    education: "Российская Академия музыки им. Гнесеных",
    inspiration: [
     Inspiration_1,
     Inspiration_2,
     Inspiration_1,
    ],
   },
   private_settings: "",
  },
  {
   id_user: "vova",
   name: "Вова Петров",
   email: "vova_test@mail.ru",
   sity: "Москва, Петербург",
   age: "24",
   img_upload: "",
   gender: "",
   type_account: "",
   skills: {
    tool: ["Гитара", "Укулеле", "Саксофон"],
    genre: [
     "Джаз",
     "Поп-музыка",
     "Кантри",
     "Блюз",
     "Фолк-музыка",
     "Ритм-н-блюз",
    ],
    workExperience: [
     {
      img: avatar_1,
      institution: "Бар “Джаз”",
      period: "2020-2021",
     },
     {
      img: avatar_2,
      institution: "Ресторан “Гармония”",
      period: "2016-2020",
     },
    ],
    master: "",
    education:
     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis risus, neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus, neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus, neque cursus risus.",
    inspiration: [Inspiration_1, Inspiration_2],
   },
   private_settings: "",
  },
  {
   id_user: "ulia",
   name: "Юлия Андреевна",
   email: "ulia_test@mail.ru",
   sity: "Москва, Орёл",
   age: "32",
   img_upload: "",
   gender: "",
   type_account: "",
   skills: {
    tool: ["Гитара", "Саксофон"],
    genre: ["Джаз", "Поп-музыка", "Кантри", "Ритм-н-блюз"],
    workExperience:
     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis risus, neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus, neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus, neque cursus risus.",
    master: "Мастер на все руки",
    education: [
     {
      img: avatar_1,
      institution:
       "Российская Академия музыки им. Гнесеных",
      period: "2017-2019",
     },
     {
      img: avatar_2,
      institution:
       "Национальная Академия музыки им. Шевченко",
      period: "206-2018",
     },
     {
      img: avatar_3,
      institution:
       "Российская Академия музыки им. Гнесеных",
      period: "2016-2019",
     },
    ],
    inspiration: [
     Inspiration_1,
     Inspiration_2,
     Inspiration_1,
    ],
   },
   private_settings: "",
  },
  {
   id_user: "masha",
   name: "Мария Афанасьевна",
   email: "masha_test@mail.ru",
   sity: "Москва, Омск",
   age: "58",
   img_upload: "",
   gender: "",
   type_account: "",
   skills: {
    tool: ["Гитара", "Саксофон"],
    genre: ["Кантри", "Блюз", "Фолк-музыка", "Ритм-н-блюз"],
    workExperience: [
     {
      img: avatar_1,
      institution: "Бар “Джаз”",
      period: "2010-2021",
     },
     {
      img: avatar_2,
      institution: "Ресторан “Гармония”",
      period: "2016-2020",
     },
     {
      img: avatar_3,
      institution: "Бар “Джаз”",
      period: "2011-2021",
     },
    ],
    master: "",
    education: [
     {
      img: avatar_3,
      institution:
       "Российская Академия музыки им. Гнесеных",
      period: "2018-2019",
     },
     {
      img: avatar_2,
      institution:
       "Национальная Академия музыки им. Шевченко",
      period: "206-2018",
     },
     {
      img: avatar_1,
      institution:
       "Российская Академия музыки им. Гнесеных",
      period: "2016-2019",
     },
    ],
    inspiration: [],
   },
   private_settings: "",
  },
 ];
