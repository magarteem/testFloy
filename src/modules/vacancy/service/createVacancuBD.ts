import { OptionSelectType } from "../types/vacancyTypes";

//!         Vacancy
export const requiredVacancy: OptionSelectType[] = [
 { value: "musician", label: "Музыкант" },
 { value: "team", label: "Коллектив" },
];

export const workingConditionsBD: OptionSelectType[] = [
 {
  value: "part-time-employment",
  label: "Частичная занятость",
 },
 { value: "full-time", label: "Полная занятость" },
 { value: "free-time", label: "В свободное время" },
 { value: "tense-timetable", label: "Напряженный график" },
];

export const typeOfInstitution: OptionSelectType[] = [
 {
  value: "restaurant",
  label: "Ресторан",
 },
 { value: "bar", label: "Бар" },
 { value: "club", label: "Клуб" },
 { value: "music-shop", label: "Музыкальный магазин" },
 { value: "group", label: "Группа" },
];

//!         ADS
export const requiredADS: OptionSelectType[] = [
 { value: "work", label: "Работу" },
 { value: "musician", label: "Музыканта" },
 { value: "team", label: "Коллектив" },
];
