import Select, {
 components,
 MultiValueGenericProps,
} from "react-select";
import "./customSelectCheckboxGenre.scss";
import cn from "classnames";

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

const Option = (props: any) => {
 const Co = components.Option;
 return (
  <Co {...props}>
   <div className="customCheckBoxStyleGenre">
    <input checked={props.isSelected} type="checkbox" />
    <span className="check"></span>
    <label className="customLabel">{props.label}</label>
   </div>
  </Co>
 );
};

interface CustomSelectCheckboxGenreType {
 placeholder: string;
 options: any;
 onChange: (data: string) => void;
 errors: any;
}
export const CustomSelectCheckboxGenre = ({
 placeholder,
 options,
 onChange,
 errors,
 ...props
}: CustomSelectCheckboxGenreType) => {
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
    className={cn("customs_select_container_genre", {
     styleError: errors,
    })}
    classNamePrefix="customs_select_list_prefix_genre"
    placeholder={placeholder}
    isSearchable={false}
    options={options}
    components={{
     Option,
     MultiValueLabel,
    }}
    isMulti
    styles={customStyles}
    onChange={(e: any) => onChange(e)}
    hideSelectedOptions={false}
    closeMenuOnSelect={false}
    isClearable={false}
    theme={(theme) => ({
     ...theme,
     colors: {
      ...theme.colors,
      primary25: "#ffffff",
      primary: "#616161",
     },
    })}
    //menuIsOpen
    {...props}
   />
   {errors && (
    <span className="error">{errors.message}</span>
   )}
  </div>
 );
};
