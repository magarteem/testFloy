import { Controller } from "react-hook-form";
import { DatePickerMui } from "../../../common/mui-element/datePicker/DatePickerMui";
import s from "./formFieldsRegister.module.scss";

export interface InputFormOpeningHoursType {
 control: any;
 watch?: any;
}

export const InputFormOpeningHours = ({
 control,
 watch,
}: InputFormOpeningHoursType) => {
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
      formState: { errors },
     }) => (
      <div className={s.sizeInput}>
       <DatePickerMui
        views={["year"]}
        placeholder="Возраст от"
        required={true}
        value={value}
        onChange={(date) =>
         onChange(new Date(date).getTime())
        }
        errors={errors.fromAge}
        helperText="Обязательное поле"
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
      formState: { errors },
     }) => (
      <div className={s.sizeInput}>
       <DatePickerMui
        views={["year"]}
        minDate={watch("fromAge")}
        placeholder="До"
        required={true}
        value={value}
        onChange={(date) =>
         onChange(new Date(date).getTime())
        }
        errors={errors.toAge}
        helperText="Обязательное поле"
        {...field}
       />
      </div>
     )}
    />
   </div>
  </div>
 );
};
