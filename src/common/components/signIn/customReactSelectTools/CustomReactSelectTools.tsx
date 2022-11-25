import { useState } from "react";
import Select, {
 components,
 OptionProps,
 MultiValueGenericProps,
} from "react-select";
import { FormatGroupLabel } from "./FormatGroupLabel";
import "./customReactSelectTools.scss";
import cn from "classnames";
import { ToolsType } from "../../../../modules/authorization/types/authType";
import { GroupOptionsType } from "../../../../modules/authorization/types/selectOptionsType";

export const Temp = (data: any) => (
 <FormatGroupLabel data={data} />
);

const MultiValue = (props: any) => {
 const Mval = components.MultiValue;
 const [showChips, setShowChips] = useState(false);
 const toogleShow = () => {
  setShowChips((prev) => !prev);
  console.log(showChips);
 };
 const overflow = props
  .getValue()
  .slice(6)
  .map((x: any) => x.label);

 if (showChips)
  return (
   <Mval {...props}>
    <img
     src={props.data.imgIcons}
     alt={props.data.imgIcons}
    />
    {props.children}
   </Mval>
  );

 if (props.index < 5) {
  return (
   <Mval {...props}>
    <img
     src={props.data.imgIcons}
     alt={props.data.imgIcons}
    />
    {props.children}
   </Mval>
  );
 } else if (props.index === 5) {
  return (
   // <span onClick={toogleShow}>
   <Mval className="moreTools" {...props}>
    Ещё {overflow.length + 1}
   </Mval>
   // </span>
  );
 } else return null;
};

const MultiValueLabel = (
 props: MultiValueGenericProps<GroupOptionsType[]>
) => {
 const Mval = components.MultiValueLabel;
 //let obj = props.selectProps.value;
 //const lastItemObj = obj[obj.length - 1].value;
 //const count = props.data.value;
 console.log(props);
 return (
  <Mval {...props}>
   {/*<img
    src={props.data.imgIcons}
    alt={props.data.imgIcons}
   />*/}

   {props.children}
   {/*<span>{lastItemObj !== count && ","}</span>*/}
  </Mval>
 );
};

const Option = (props: OptionProps<ToolsType>) => {
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
    <img src={props?.data.imgIcons} alt={props.label} />
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

interface CustomReactSelectToolsType {
 placeholder: string;
 value?: any;
 options: GroupOptionsType[];
 onChange: () => void;
 errors: any;
 ItemRef: any;
}
export const CustomReactSelectTools = ({
 placeholder,
 value,
 options,
 onChange,
 errors,
 ItemRef,
 ...props
}: CustomReactSelectToolsType) => {
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
     // MultiValueLabel,
     MultiValue,
     Group,
    }}
    isMulti
    styles={customStyles}
    onChange={onChange}
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
