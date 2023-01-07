import { useState } from "react";
import { Controller } from "react-hook-form";
import { DatePickerMobileTextFieldTEST } from "../../../common/ui-elements/datePickerMobile/DatePickerMobileTextFieldTEST";
import s from "../style/createFormVacancy.module.scss";

export interface InputFormFromAgeTextFieldTESTType {
 control: any;
 watch: any;
}

export const InputFormFromAgeTextFieldTEST = ({
 control,
 watch,
}: InputFormFromAgeTextFieldTESTType) => {
 const [valid, setValid] = useState<Date>(new Date());

 return (
  <div className={s.ageRange}>
   <div className={s.styleInput}>
    <Controller
     name="fromAge"
     control={control}
     rules={{
      required: "Обязательное поле",
     }}
     render={({
      field: { onChange, value, ref, ...field },
     }) => (
      <div className={s.sizeInput}>
       <DatePickerMobileTextFieldTEST
        InputLabelProps={value && { shrink: true }}
        typePicker="age"
        customHeader={`От ${value || ""}`}
        placeholder="Возраст от"
        value={value}
        onChange={(date) => {
         setValid(new Date(date));
         return onChange(new Date(date).getMinutes());
        }}
        {...field}
       />
      </div>
     )}
    />
   </div>

   <div className={s.styleInput}>
    <Controller
     name="toAge"
     control={control}
     rules={{
      required: "Обязательное поле",
     }}
     render={({
      field: { onChange, value, ref, ...field },
     }) => (
      <div className={s.sizeInput}>
       <DatePickerMobileTextFieldTEST
        InputLabelProps={value && { shrink: true }}
        typePicker="age"
        customHeader={`До ${value || ""}`}
        min={new Date(valid)}
        //max={r.setMinutes(10)}
        placeholder="До"
        value={value}
        onChange={(date) =>
         onChange(new Date(date).getMinutes())
        }
        {...field}
       />
      </div>
     )}
    />
   </div>
  </div>
 );
};
