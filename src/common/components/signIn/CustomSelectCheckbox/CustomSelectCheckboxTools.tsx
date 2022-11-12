import Select, {
 components,
 ValueContainerProps,
} from "react-select";
import { FormatGroupLabel } from "./FormatGroupLabel";
import "./customSelectCheckboxTool.scss";
import cn from "classnames";

export const Temp = (data: any) => (
 <FormatGroupLabel data={data} />
);

const MultiValue = (props: any) => {
 return (
  <div>
   <components.MultiValue {...props} />
  </div>
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

const Option = (props: any) => {
 const Co = components.Option;
 return (
  // <div className="test" ref={ref}>
  <Co {...props}>
   <div className="customCheckBoxStyle">
    <input checked={props.isSelected} type="checkbox" />
    <span className="check"></span>
    <label className="customLabel">{props.label}</label>
   </div>
  </Co>
  // </div>
 );
};

interface CustomSelectCheckboxToolsType {
 placeholder: string;
 value?: any;
 options: any;
 onChange: (data: string) => void;
 errors: any;
}
export const CustomSelectCheckboxTools = ({
 placeholder,
 value,
 options,
 onChange,
 errors,
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
    }}
    isMulti
    styles={customStyles}
    onChange={(e: any) => onChange(e)}
    hideSelectedOptions={false}
    formatGroupLabel={(data) => Temp(data)}
    closeMenuOnSelect={false}
    isClearable={false}
    theme={(theme) => ({
     ...theme,
     colors: {
      ...theme.colors,
      primary25: "#ffffff",
      primary: "#47c7a921",
     },
    })}
    // menuIsOpen

    {...props}
   />
   {errors && (
    <span className="error">{errors.message}</span>
   )}
  </div>
 );
};
