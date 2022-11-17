import Select, {
 MultiValueProps,
 components,
 ValueContainerProps,
 OptionProps,
} from "react-select";
import { FormatGroupLabel } from "./FormatGroupLabel";
import "./customSelectCheckboxTool.scss";
import cn from "classnames";
import { useState } from "react";
import { GroupOptionsType } from "../../../../modules/authorization/types/type";

export const Temp = (data: any) => {
 return <FormatGroupLabel data={data} />;
};

const MultiValue = (props: MultiValueProps) => {
 return (
  //<div style={{ backgroundColor: "red" }}>
  <components.MultiValue {...props} />
  //</div>
 );
};

const ValueContainer = ({
 children,
 ...props
}: ValueContainerProps) => {
 const { getValue } = props;
 const VCo = components.ValueContainer;
 return (
  <VCo {...props}>
   {children}
   {getValue().length !== 0 && (
    <p>Выбрано ({getValue().length})</p>
   )}
  </VCo>
 );
};

const Option = (props: OptionProps) => {
 const [check, setCheck] = useState(props.isSelected);
 const checkCh = () => setCheck((prev) => !prev);
 const Co = components.Option;

 return (
  <Co {...props}>
   <div className="customCheckBoxStyle" onClick={checkCh}>
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

const Group = (props: any) => {
 let show = props.selectProps.options[0].label;
 let label = props.data.label;

 return (
  <div
   className={cn({
    ["menuListGroupeOpen"]: show === label,
   })}
  >
   <components.Group {...props} />
  </div>
 );
};

interface CustomSelectCheckboxToolsType {
 placeholder: string;
 value?: any;
 options: GroupOptionsType[];
 onChange: () => void;
 // onChange: (data: string) => void;
 errors: any;
 ItemRef: any;
}
export const CustomSelectCheckboxTools = ({
 placeholder,
 value,
 options,
 onChange,
 errors,
 ItemRef,
 ...props
}: CustomSelectCheckboxToolsType) => {
 const customStyles = {
  container: (provided: any) =>
   errors && {
    ...provided,
    border: `1.5px solid #E95050`,
   },
  multiValue: (provided: any) => ({
   ...provided,
   background: "inherit",
   fontWeight: 500,
   fotnSize: "16px",
  }),
  //group: (provided: any) => ({
  // ...provided,
  // height: ttt ? "auto" : "0",
  // overflow: "hidden",
  //}),
 };

 return (
  <div className="wrapperSelect">
   <Select
    className={cn("customs_select_container", {
     styleError: errors,
    })}
    classNamePrefix="customs_select_list_prefix"
    placeholder={placeholder}
    value={value}
    isSearchable={false}
    options={options}
    components={{
     Option,
     ValueContainer,
     MultiValue,
     Group,
    }}
    isMulti
    styles={customStyles}
    onChange={onChange}
    //onChange={(e: any) => onChange(e)}
    hideSelectedOptions={false}
    formatGroupLabel={(data) => Temp(data)}
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
