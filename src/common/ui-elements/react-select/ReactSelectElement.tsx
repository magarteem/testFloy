import Select from "react-select";
import {
  AgeNumberType,
  GroupOptionsType,
  OptionSelectType,
} from "../../../modules/authorization/types/type";
import "./reactSelectElement.scss";

interface ReactSelectElementType {
  placeholder: string;
  options: OptionSelectType[] | GroupOptionsType[] | AgeNumberType[];
  onChange: (data: string) => void;
  isMulti?: boolean;
  menuIsOpen?: boolean;
}

export const ReactSelectElement = ({
  placeholder,
  options,
  isMulti = false,
  menuIsOpen = false,
  onChange,
}: ReactSelectElementType) => {
  return (
    <Select
      className="custom_style_container_typeAccount_reg"
      placeholder={placeholder}
      isSearchable={false}
      onChange={(e: any) => onChange(e.value)}
      options={options}
      classNamePrefix="custom_style_list_typeAccount_reg"
      isMulti={isMulti}
      // menuIsOpen={menuIsOpen}
    />
  );
};
