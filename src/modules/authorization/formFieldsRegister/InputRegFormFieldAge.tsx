import { Controller } from "react-hook-form";
import { DatePickerMobile } from "../../../common/ui-elements/datePickerMobile/DatePickerMobile";
import s from "./formFieldsRegister.module.scss";

export interface InputRegFormFieldAgeType {
 control: any;
 name: string;
}

export const InputRegFormFieldAge = ({
 control,
 name,
}: InputRegFormFieldAgeType) => {
 return (
  <div className={s.styleInput}>
   <Controller
    name={name}
    control={control}
    render={({
     field: { onChange, ref, value, ...field },
     formState: { errors },
    }) => (
     <div className={s.sizeInput}>
      <DatePickerMobile
       value={value}
       placeholder="Возраст"
       onChange={onChange}
       {...field}
      />
     </div>
    )}
   />
  </div>
 );
};
