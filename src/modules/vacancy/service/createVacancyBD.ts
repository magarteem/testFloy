import { OptionSelectType } from "../types/vacancyTypes";

//!         Vacancy
export const requiredVacancy: OptionSelectType[] = [
 { value: "musician", label: "Музыкант" },
 { value: "group-collective", label: "Коллектив" },
 { value: "soundEngineer", label: "Звукорежиссёр" },
];

//          тип коллектива
export const teamTypeADS: OptionSelectType[] = [
 { value: "ensemble", label: "Ансамбль" },
 { value: "group", label: "Группа" },
 { value: "orchestra", label: "Оркестр" },
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
 { value: "bar", label: "Бар" },
 { value: "restaurant", label: "Ресторан" },
 { value: "cafe", label: "кафе" },
 { value: "club", label: "Клуб" },
 { value: "pub", label: "Паб" },
 { value: "hall", label: "Зал" },
 { value: "room", label: "помещение" },
 { value: "theater", label: "театр" },
 { value: "playground", label: "площадка" },
 { value: "music-shop", label: "Музыкальный магазин" },
 { value: "group", label: "Группа" },
 { value: "other", label: "другое" },
];

//!         ADS
export const requiredADS: OptionSelectType[] = [
 { value: "work", label: "Работу" },
 { value: "musician", label: "Музыканта" },
 { value: "group-collective", label: "Коллектив" },
];
