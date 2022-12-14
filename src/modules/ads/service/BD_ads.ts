import {
 genreBD,
 groupeOptions,
} from "../../authorization/service/BD";
import { TimelineCards } from "../types/adsSliceType";

export const adsListData: TimelineCards[] = [
 {
  id: 1,
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
 },

 {
  id: 2,
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
 },

 {
  id: 3,
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
 },
];
