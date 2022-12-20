import Inspiration_1 from "../../../assets/images/Inspiration_1.webp";
import Inspiration_2 from "../../../assets/images/Inspiration_2.webp";
import avatar_1 from "../../../assets/images/avatar_1.webp";
import avatar_2 from "../../../assets/images/avatar_2.webp";
import avatar_3 from "../../../assets/images/avatar_3.webp";
import avatart_11 from "../../../assets/images/avatart_11.webp";
import avatart_22 from "../../../assets/images/avatart_22.webp";
import avatart_33 from "../../../assets/images/avatart_33.webp";
import avatart_44 from "../../../assets/images/avatart_44.webp";
import avatart_55 from "../../../assets/images/avatart_55.webp";
import { InitialStateUserType } from "../types/userSliceType";
import {
 genreBD,
 groupeOptions,
} from "../../authorization/service/BD";

export const tempDataOtherUserProfile: InitialStateUserType[] =
 [
  {
   id_user: "masha",
   name: "Маша Андреевна",
   email: "masha@mail.ru",
   phone: "8 (982) 555 26 05",
   city: { value: "magadan", label: "Магадан" },
   age: 1290163404000,
   avatar: avatart_33,
   gender: { value: "female", label: "Женский" },
   type_account: {
    value: "rehearsal-point",
    label: "Репетиционная точка",
   },
   skills: {
    tool: [
     groupeOptions[2].options[1],
     groupeOptions[3].options[0],
     groupeOptions[3].options[6],
     groupeOptions[2].options[2],
    ],
    genre: [
     genreBD[14],
     genreBD[3],
     genreBD[5],
     genreBD[6],
     genreBD[9],
     genreBD[8],
    ],
    workExperience:
     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis risus, neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus, neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus, neque cursus risus.",
    master: { value: "newbie", label: "Новичок" },
    education: "Российская Академия музыки им. Гнесеных",
    inspiration: [
     Inspiration_1,
     Inspiration_2,
     Inspiration_1,
    ],
   },
   private_settings: {
    value: "public-questionnaire",
    label: "Публичная анкета",
   },
  },
  {
   id_user: "kirill",
   name: "Кирилл Белоусов",
   email: "kirill_test@mail.ru",
   phone: "8 (982) 555 26 05",
   city: { value: "lobnya", label: "Лобня" },
   age: 26736204000,
   avatar: "",
   gender: { value: "male", label: "Мужской" },
   type_account: { value: "musician", label: "Музыкант" },
   skills: {
    tool: [
     groupeOptions[1].options[2],
     groupeOptions[2].options[1],
     groupeOptions[2].options[3],
     groupeOptions[3].options[4],
    ],
    genre: [
     genreBD[3],
     genreBD[5],
     genreBD[10],
     genreBD[6],
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
    master: { value: "master", label: "Мастер" },
    education:
     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis risus, neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus, neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus, neque cursus risus.",
    inspiration: [Inspiration_1, Inspiration_2],
   },
   private_settings: {
    value: "closed-profile",
    label: "Закрытая анкета ",
   },
  },
  {
   id_user: "ulia",
   name: "Юлия Андреевна",
   email: "ulia_test@mail.ru",
   phone: "8 (982) 555 26 05",
   city: { value: "lyubertsy", label: "Люберцы" },
   age: 342441804000,
   avatar: avatart_22,
   gender: { value: "female", label: "Женский" },
   type_account: {
    value: "rehearsal-point",
    label: "Репетиционная точка",
   },
   skills: {
    tool: [
     groupeOptions[0].options[0],
     groupeOptions[1].options[0],
     groupeOptions[2].options[2],
     groupeOptions[3].options[1],
     groupeOptions[0].options[3],
     groupeOptions[1].options[2],
     groupeOptions[2].options[1],
    ],
    genre: [
     genreBD[0],
     genreBD[2],
     genreBD[4],
     genreBD[8],
     genreBD[9],
    ],
    workExperience:
     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis risus, neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus, neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus, neque cursus risus.",
    master: { value: "teacher", label: "Преподаватель" },
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
   private_settings: {
    value: "partially-open-questionnaire",
    label: "Частично открытая анкета",
   },
  },
  {
   id_user: "iana",
   name: "Яна Калинина",
   email: "iana_test@mail.ru",
   phone: "8 (982) 555 26 05",
   city: { value: "makhachkala", label: "Махачкала" },
   age: 720960204000,
   avatar: avatart_44,
   gender: { value: "female", label: "Женский" },
   type_account: {
    value: "sound-engineer",
    label: "Звукорежиссёр",
   },

   skills: {
    tool: [
     groupeOptions[1].options[2],
     groupeOptions[2].options[1],
     groupeOptions[2].options[2],
     groupeOptions[3].options[0],
     groupeOptions[3].options[2],
     groupeOptions[3].options[4],
     groupeOptions[3].options[6],
    ],
    genre: [
     genreBD[14],
     genreBD[3],
     genreBD[5],
     genreBD[6],
     genreBD[9],
     genreBD[8],
    ],
    workExperience: "Бар “Джаз”  2010-2021",
    //workExperience: [
    // {
    //  img: avatar_1,
    //  institution: "Бар “Джаз”",
    //  period: "2010-2021",
    // },
    // {
    //  img: avatar_2,
    //  institution: "Ресторан “Гармония”",
    //  period: "2016-2020",
    // },
    // {
    //  img: avatar_3,
    //  institution: "Бар “Джаз”",
    //  period: "2011-2021",
    // },
    //],
    master: { value: "newbie", label: "Новичок" },
    education:
     "Российская Академия музыки им. Гнесеных 2018-2019, Национальная Академия музыки им. Шевченко 206-2018",
    //education: [
    // {
    //  img: avatar_3,
    //  institution:
    //   "Российская Академия музыки им. Гнесеных",
    //  period: "2018-2019",
    // },
    // {
    //  img: avatar_2,
    //  institution:
    //   "Национальная Академия музыки им. Шевченко",
    //  period: "206-2018",
    // },
    // {
    //  img: avatar_1,
    //  institution:
    //   "Российская Академия музыки им. Гнесеных",
    //  period: "2016-2019",
    // },
    //],
    inspiration: "Шикарый гитарист",
   },
   private_settings: {
    value: "public-questionnaire",
    label: "Публичная анкета",
   },
  },
  {
   id_user: "eugenia",
   name: "Евгения Матвеева",
   email: "eugenia_test@mail.ru",
   phone: "8 (982) 555 26 05",
   city: { value: "magadan", label: "Магадан" },
   age: 952078480000,
   avatar: avatart_55,
   gender: { value: "male", label: "Мужской" },
   type_account: {
    value: "rehearsal-point",
    label: "Репетиционная точка",
   },
   skills: {
    tool: [
     groupeOptions[0].options[2],
     groupeOptions[0].options[3],
     groupeOptions[1].options[2],
     groupeOptions[2].options[3],
     groupeOptions[3].options[3],
     groupeOptions[2].options[1],
     groupeOptions[1].options[1],
    ],
    genre: [
     genreBD[3],
     genreBD[5],
     genreBD[6],
     genreBD[8],
     genreBD[2],
     genreBD[4],
     genreBD[7],
     genreBD[9],
     genreBD[10],
     genreBD[15],
     genreBD[12],
    ],
    workExperience:
     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis risus, neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus, neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus, neque cursus risus.",
    master: { value: "newbie", label: "Новичок" },
    education: "Российская Академия музыки им. Гнесеных",
    inspiration: [
     Inspiration_1,
     Inspiration_2,
     Inspiration_1,
    ],
   },
   private_settings: {
    value: "public-questionnaire",
    label: "Публичная анкета",
   },
  },
 ];
