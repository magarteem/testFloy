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
  menuIsOpen?: boolean;
  isMulti?: boolean;
  errors?: any;
}

export const ReactSelectElement = ({
  placeholder,
  options,
  isMulti = false,
  onChange,
  menuIsOpen,
  errors,
  ...props
}: ReactSelectElementType) => {
  const customStyles = {
    container: (provided: any) => ({
      ...provided,
      border: `1.5px solid #E95050`,
    }),
    control: (provided: any) => ({
      ...provided,
      border: `3.5px solid #80ff00`,
    }),
  };

  return (
    <div className="wrapperSelect">
      <Select
        className={`custom_style_container_typeAccount_reg ${
          errors && "styleError"
        }`}
        classNamePrefix="custom_style_list_typeAccount_reg"
        placeholder={placeholder}
        isSearchable={false}
        // onChange={(e: any) => onChange(e.value)}
        onChange={(e: any) => onChange(e)}
        options={options}
        isMulti={isMulti}
        menuIsOpen={menuIsOpen}
        styles={errors && customStyles}
        {...props}
      />
      {errors && <span className="error">{errors.message}</span>}
    </div>
  );
};
