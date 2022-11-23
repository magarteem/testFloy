import Select, { StylesConfig } from "react-select";
import {
 GroupOptionsType,
 OptionSelectType,
} from "../../../modules/authorization/types/type";
import "./reactSelectElement.scss";
import cn from "classnames";

interface ReactSelectElementType {
 placeholder: string;
 value?: any;
 options: OptionSelectType[] | GroupOptionsType[];
 onChange: () => void;
 customStyles?: StylesConfig;
 isMulti?: boolean;
 errors?: any;
 ItemRef: any;
}

export const ReactSelectElement = ({
 placeholder,
 value,
 options,
 isMulti = false,
 onChange,
 customStyles,
 errors,
 ItemRef,
 ...props
}: ReactSelectElementType) => {
 return (
  <div className="wrapperSelect">
   <Select
    className={cn(
     `custom_style_container_typeAccount_reg`,
     { styleError: errors }
    )}
    classNamePrefix="custom_style_list_typeAccount_reg"
    placeholder={placeholder}
    isSearchable={false}
    onChange={onChange}
    options={options}
    isMulti={isMulti}
    styles={customStyles}
    value={value}
    ref={ItemRef}
    {...props}
   />
   {errors && (
    <span className="error">{errors.message}</span>
   )}
  </div>
 );
};
