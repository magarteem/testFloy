import arrowSelect from "../../../../assets/icons/arrowSelect.webp";
import Select, { components } from "react-select";
import { FormatGroupLabel } from "./FormatGroupLabel";
import { groupeOptions } from "../../../../modules/authorization/service/BD";
import { useRef } from "react";
import s from "./formatGroupLabel.module.scss";
import "./customSelectCheckbox.scss";

interface CustomSelectCheckboxType {
  onChange: (data: string) => void;
  errors: any;
}
export const CustomSelectCheckbox = ({
  onChange,
  errors,
  ...props
}: CustomSelectCheckboxType) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const isOpenListGroup = () => {
    console.log("333");
  };

  const Option = (props: any) => {
    return (
      <div className="test" ref={ref}>
        <components.Option {...props}>
          <div className="customCheckBoxStyle">
            <input checked={props.isSelected} type="checkbox" />
            <span className="check"></span>
            <label className="customLabel">{props.label}</label>
          </div>
        </components.Option>
      </div>
    );
  };

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
        className={`customs_select_container ${errors && "styleError"}`}
        classNamePrefix="customs_select_list_prefix"
        placeholder="Выбрать"
        isSearchable={false}
        options={groupeOptions}
        closeMenuOnSelect={false}
        components={{ Option }}
        isMulti
        styles={errors && customStyles}
        onChange={(e: any) => onChange(e)}
        hideSelectedOptions={false}
        formatGroupLabel={(data) => (
          <div onClick={isOpenListGroup} className={s.formatGroupLabel}>
            <div className={s.arrowSelectImg}>
              <img src={arrowSelect} alt={arrowSelect} />
            </div>
            <span>{data.label}</span>
          </div>
        )}
        // formatGroupLabel={(FormatGroupLabel) => (
        //   <p onClick={isOpenListGroup}>{FormatGroupLabel.label}111</p>
        // )}
        // formatGroupLabel={FormatGroupLabel}
        // menuIsOpen
        {...props}
      />
      {errors && <span className="error">{errors.message}</span>}
    </div>
  );
};
