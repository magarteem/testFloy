import { useState } from "react";
import Select, {
 components,
 MultiValueGenericProps,
 OptionProps,
 StylesConfig,
} from "react-select";
import "./customSelectCheckboxGenre.scss";
import cn from "classnames";
import { OptionSelectType } from "../../../../modules/authorization/types/type";
import { hexToRGB } from "../../../../modules/authorization/helpers/convertHexToRgb";

const MultiValueLabel = (props: MultiValueGenericProps) => {
 const Mval = components.MultiValueLabel;
 let obj = props.selectProps.value;
 //@ts-ignore
 const lastItemObj = obj[obj.length - 1].value;
 const count = props.data.value;

 return (
  <Mval {...props}>
   {props.children}
   <span>{lastItemObj !== count && ","}</span>
  </Mval>
 );
};

const Option = (props: OptionProps) => {
 const [check, setCheck] = useState(props.isSelected);
 const checkCh = () => setCheck((prev) => !prev);

 const Co = components.Option;
 return (
  <Co {...props}>
   <div
    className="customCheckBoxStyleGenre"
    onClick={checkCh}
   >
    <input
     checked={check}
     type="checkbox"
     onChange={() => {}}
    />
    <span className="check"></span>
    <label className="customLabel">{props.label}</label>
   </div>
  </Co>
 );
};

interface CustomSelectCheckboxGenreType {
 value?: any;
 placeholder: string;
 options: OptionSelectType[];
 onChange: (data: string) => void;
 errors: any;
 ItemRef: any;
}
export const CustomSelectCheckboxGenre = ({
 value,
 placeholder,
 options,
 onChange,
 errors,
 ItemRef,
 ...props
}: CustomSelectCheckboxGenreType) => {
 const customStyles: StylesConfig<OptionSelectType, true> =
  {
   container: (provided) =>
    errors && {
     ...provided,
     border: `1.5px solid #E95050`,
    },
   multiValue: (
    provided,
    { data, isDisabled, isFocused }
   ) => ({
    ...provided,
    background: "inherit",
    fontWeight: 500,
    backgroundColor: `${hexToRGB(
     data.hexColor,
     "100%"
    )} !important`,
    borderRadius: "30px",
    padding: "5px 6px !important",
   }),
   multiValueLabel: (
    provided,
    { data, isDisabled, isFocused }
   ) => {
    return {
     ...provided,
     color: "white",
     // backgroundColor: `${hexToRGB(data.hexColor, "40%")}`,
    };
   },
  };

 return (
  <div className="wrapperSelect">
   <Select
    className={cn("customs_select_container_genre", {
     styleError: errors,
    })}
    classNamePrefix="customs_select_list_prefix_genre"
    placeholder={placeholder}
    //isSearchable={false}
    options={options}
    value={value}
    components={{
     Option,
     // MultiValueLabel,
    }}
    isMulti
    styles={customStyles}
    onChange={(e: any) => onChange(e)}
    hideSelectedOptions={false}
    closeMenuOnSelect={false}
    blurInputOnSelect={false}
    isClearable={false}
    theme={(theme) => ({
     ...theme,
     colors: {
      ...theme.colors,
      primary25: "#ffffff",
      primary: "#47c7a921",
     },
    })}
    //menuIsOpen
    ref={ItemRef}
    {...props}
   />
   {errors && (
    <span className="error">{errors.message}</span>
   )}
  </div>
 );
};
