import dayjs from "dayjs";
import { Controller } from "react-hook-form";
import { TimePickerMui } from "../../../common/mui-element/timePicker/TimePicker";
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
     name="from_opening_hours"
     control={control}
     // rules={{
     //  required: "Обязательное поле",
     // }}
     render={({
      field: { onChange, value, ref, ...field },
      formState: { errors },
     }) => (
      <div className={s.sizeInput}>
       <TimePickerMui
        minTime={dayjs("2023-03-01T08:00")}
        placeholder="Часы работы с"
        value={value}
        onChange={onChange}
        errors={errors.fromAge}
        {...field}
       />
      </div>
     )}
    />
   </div>

   <div className={s.styleInput}>
    <Controller
     name="to_opening_hours"
     control={control}
     // rules={{
     //  required: "Обязательное поле",
     // }}
     render={({
      field: { onChange, value, ref, ...field },
      formState: { errors },
     }) => (
      <div className={s.sizeInput}>
       <TimePickerMui
        maxTime={dayjs("2023-03-01T21:00")}
        watch={watch("from_opening_hours")}
        placeholder="До"
        value={value}
        onChange={onChange}
        errors={errors.toAge}
        {...field}
       />
      </div>
     )}
    />
   </div>
  </div>
 );
};
