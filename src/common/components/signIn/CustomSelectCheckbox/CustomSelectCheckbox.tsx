import arrowSelect from "../../../../assets/icons/arrowSelect.webp";
import Select, { components } from "react-select";
import { FormatGroupLabel } from "./FormatGroupLabel";
import { groupeOptions } from "../../../../modules/authorization/service/BD";
import { useRef, useState } from "react";
import s from "./formatGroupLabel.module.scss";
import "./customSelectCheckbox.scss";

const CustomSelectCheckboxLabel = ({ data }: any) => {
  console.log(data);
  const ref = useRef<any>(null);
  const [listGroupe, setListGroupe] = useState(data.isOpen);

  const showList = () => {
    setListGroupe((prev: boolean) => !prev);
    let parent = ref.current.parentElement;
    parent.classList.toggle("menuListGroupeOpen");
  };

  return (
    <div onClick={showList} ref={ref} className={s.formatGroupLabel}>
      <div className={s.arrowSelectImg}>
        <img src={arrowSelect} alt={arrowSelect} />
      </div>
      <span>{data.label}</span>
    </div>
  );
};

export const Temp = (data: any) => <CustomSelectCheckboxLabel data={data} />;

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
    container: (provided: any) =>
      errors && {
        ...provided,
        border: `1.5px solid #E95050`,
      },
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
        components={{ Option }}
        isMulti
        styles={customStyles}
        onChange={(e: any) => onChange(e)}
        hideSelectedOptions={false}
        formatGroupLabel={(data) => Temp(data)}
        // menuIsOpen
        {...props}
      />
      {errors && <span className="error">{errors.message}</span>}
    </div>
  );
};
