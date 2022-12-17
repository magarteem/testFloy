import avatart_11 from "../../../assets/images/avatart_11.webp";
import avatart_22 from "../../../assets/images/avatart_22.webp";
import avatart_33 from "../../../assets/images/avatart_33.webp";
import { TimelineCards } from "../../ads/types/adsSliceType";
import {
 genreBD,
 groupeOptions,
} from "../../authorization/service/BD";

export const OutgoingNotificationData: TimelineCards[] = [
 {
  id: 1,
  author: {
   id_user: "kirill",
   name: "Кирилл Белоусов",
   city: "Москва",
   avatar: avatart_11,
  },
  publicationDate: 1607786743153,
  required: {
   value: "Работу",
   label: "Работу",
  },
  typeOfInstitution: [
   {
    value: "bar",
    label: "Бар",
   },
   {
    value: "club",
    label: "Клуб",
   },
  ],
  tool: [
   groupeOptions[1].options[2],
   groupeOptions[2].options[1],
   groupeOptions[2].options[3],
   groupeOptions[3].options[4],
  ],
  genre: [genreBD[3], genreBD[5], genreBD[10], genreBD[6]],
  city: {
   value: "Лысьва",
   label: "Лысьва",
  },
  gender: {
   value: "Мужской",
   label: "Мужской",
  },
  fromAge: 1449933940779,
  toAge: 1607786743153,
  work_experience: "Хоть раз нюхал гитару.",
  master: {
   value: "Мастер",
   label: "Мастер",
  },
  commit:
   "Участие в гастрольной  деятельности проекта по Москве и области.",
  payment: "1200 р./час",
  workingConditions: {
   value: "Полная занятость",
   label: "Полная занятость",
  },
  commitAbout:
   "Нам нужна ЗВЕЗДА! Мы ищем самого музыкального, самого талантливого, самого творческого сотрудника ВОКАЛИСТА в арт-группу караоке-бара «ОГУРЦЫ».",
  phone: "7777777777777777777",
  email: "trtrtrt@ewe.wewewe",
  web_site: "rerererer",
  waitingForResponse: {
   userId: "",
   status: 0,
  },
 },

 {
  id: 2,
  author: {
   id_user: "iana",
   name: "Яна Калинина",
   city: "Ростов",
   avatar: avatart_22,
  },
  publicationDate: 1449933940779,
  required: {
   value: "Музыканта",
   label: "Музыканта",
  },
  typeOfInstitution: [
   {
    value: "bar",
    label: "Бар",
   },
   {
    value: "club",
    label: "Клуб",
   },
  ],
  tool: [
   groupeOptions[0].options[0],
   groupeOptions[1].options[0],
   groupeOptions[2].options[2],
   groupeOptions[3].options[1],
   groupeOptions[0].options[3],
   groupeOptions[1].options[2],
   groupeOptions[2].options[1],
  ],
  genre: [genreBD[8], genreBD[9]],
  city: {
   value: "Лысьва",
   label: "Лысьва",
  },
  gender: {
   value: "Мужской",
   label: "Мужской",
  },
  fromAge: 1449933940779,
  toAge: 1607786743153,
  work_experience:
   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis risus, neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus, neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus, neque cursus risus.",
  master: {
   value: "Мастер",
   label: "Мастер",
  },
  commit:
   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis risus, neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus, neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus, neque cursus risus.",
  payment: "Цена договорная",
  workingConditions: {
   value: "Полная занятость",
   label: "Полная занятость",
  },
  commitAbout:
   "Условия  работы - график работы (5/2, 2/2 и тд). Где-то что-то надо делать. Свободное поле для заполнения длинное об...",
  phone: "7777777777777777777",
  email: "trtrtrt@ewe.wewewe",
  web_site: "rerererer",
  waitingForResponse: {
   userId: "masha",
   status: 1,
  },
 },

 {
  id: 3,
  author: {
   id_user: "ulia",
   name: "Юлия Андреевна",
   city: "Петербург",
   avatar: avatart_22,
  },
  publicationDate: 1607786743153,
  required: { value: "Музыкант", label: "Музыкант" },
  typeOfInstitution: [
   {
    value: "bar",
    label: "Бар",
   },
   {
    value: "club",
    label: "Клуб",
   },
  ],
  tool: [
   groupeOptions[0].options[0],
   groupeOptions[1].options[0],
  ],
  genre: [
   genreBD[0],
   genreBD[2],
   genreBD[4],
   genreBD[8],
   genreBD[9],
  ],
  city: {
   value: "Лысьва",
   label: "Лысьва",
  },
  gender: {
   value: "Мужской",
   label: "Мужской",
  },
  fromAge: 1449933940779,
  toAge: 1607786743153,
  work_experience:
   "Ищу группу для совместного времяпрепровождения, играть народную музыку, сочинять частушки и петь их под чай",
  master: {
   value: "Мастер",
   label: "Мастер",
  },
  commit:
   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis risus, neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus, neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus, neque cursus risus.",
  payment: "",
  workingConditions: {
   value: "Полная занятость",
   label: "Полная занятость",
  },
  commitAbout:
   "Ищу группу для совместного времяпрепровождения, играть народную музыку, сочинять частушки и петь их под чай",
  phone: "7777777777777777777",
  email: "trtrtrt@ewe.wewewe",
  web_site: "rerererer",
  waitingForResponse: {
   userId: "",
   status: 2,
  },
 },
 {
  id: 4,
  author: {
   id_user: "masha",
   name: "Маша Андреевна",
   city: "Москва",
   avatar: avatart_11,
  },
  publicationDate: 1607786743153,
  required: { value: "Музыкант", label: "Музыкант" },
  typeOfInstitution: [
   {
    value: "bar",
    label: "Бар",
   },
  ],
  tool: [
   groupeOptions[0].options[0],
   groupeOptions[1].options[0],
  ],
  genre: [genreBD[0], genreBD[2], genreBD[9]],
  city: {
   value: "Лысьва",
   label: "Лысьва",
  },
  gender: {
   value: "Мужской",
   label: "Мужской",
  },
  fromAge: 1449933940779,
  toAge: 1607786743153,
  work_experience:
   "Ищу группу для совместного времяпрепровождения, играть народную музыку, сочинять частушки и петь их под чай",
  master: {
   value: "Мастер",
   label: "Мастер",
  },
  commit:
   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis risus, neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus, neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus, neque cursus risus.",
  payment: "",
  workingConditions: {
   value: "Полная занятость",
   label: "Полная занятость",
  },
  commitAbout:
   "Ищу группу для совместного времяпрепровождения, играть народную музыку, сочинять частушки и петь их под чай",
  phone: "7777777777777777777",
  email: "trtrtrt@ewe.wewewe",
  web_site: "rerererer",
  waitingForResponse: {
   userId: "ulia",
   status: 1,
  },
 },
];
