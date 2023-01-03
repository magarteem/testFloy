import { Controller } from "react-hook-form";
import { DatePickerMui } from "../../../common/mui-element/datePicker/DatePickerMui";
import { SelectElementMui } from "../../../common/mui-element/SelectElementMui";
import { cityBD, genderBD, skillBD } from "../service/BD";
import s from "./formFieldsRegister.module.scss";

export interface InputFormMasterType {
 control: any;
 name: string;
}

export const InputFormMaster = ({
 control,
 name,
}: InputFormMasterType) => {
 return (
  <div className={s.selectField}>
   <Controller
    name={name}
    control={control}
    render={({ field: { onChange, ref, ...field } }) => (
     <SelectElementMui
      ItemRef={ref}
      placeholder="Мастерство"
      options={skillBD}
      //@ts-ignore
      onChange={(e) =>
       onChange({
        value: e.target.value,
        label: e.target.value,
       })
      }
      {...field}
     />
    )}
   />
  </div>
 );
};
