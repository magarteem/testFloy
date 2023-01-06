import { Controller } from "react-hook-form";
import { DatePickerMobile } from "../../../common/ui-elements/datePickerMobile/DatePickerMobile";
import cn from "classnames";
import s from "./formFieldsRegister.module.scss";
import { dateConfig } from "../../../common/ui-elements/datePickerMobile/dateTime";

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
     <div className={cn(s.sizeInput, s.wrappPicker)}>
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
