import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import "./reactSelect.scss";

interface OptionType {
  value: string;
  label: string;
}
interface ReactSelectType {
  onChange: (e: string) => void;
  errors: any;
}

const options: OptionType[] = [
  { value: "musician", label: "Музыкант" },
  { value: "group-collective", label: "Группа / Коллектив" },
  { value: "performance-venue", label: "Заведение / Площадка для выступлений" },
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

export const ReactSelect = ({ onChange }: ReactSelectType) => {
  return (
    <Select
      className="custom_style_container_reg"
      placeholder="Выбрать"
      isSearchable={false}
      onChange={(e: any) => onChange(e.value)}
      options={options}
      classNamePrefix="custom_style_list_reg"
      // menuIsOpen
    />
  );
};
