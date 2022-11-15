import Select from "react-select";
import { optionsTypeAccount } from "../../../../modules/authorization/service/BD";
import "./reactSelect.scss";

interface ReactSelectType {
 onChange: (e: string) => void;
 errors: any;
 valueData: any;
 itemRef: any;
}

export const ReactSelect = ({
 errors,
 valueData,
 itemRef,
 onChange,
 ...props
}: ReactSelectType) => {
 const val = optionsTypeAccount.filter(
  (x) => x.value === valueData
 );

 return (
  <Select
   options={optionsTypeAccount}
   value={val}
   className="custom_style_container_reg"
   placeholder="Выбрать"
   isSearchable={false}
   onChange={(e: any) => onChange(e.value)}
   classNamePrefix="custom_style_list_reg"
   // menuIsOpen
   ref={itemRef}
   {...props}
  />
 );
};
