import { Controller } from "react-hook-form";
import { DatePickerMui } from "../../../common/mui-element/datePicker/DatePickerMui";
import s from "./formFields.module.scss";

export interface SelectFieldAgeType {
 control: any;
}

export const SelectFieldAge = ({
 control,
}: SelectFieldAgeType) => {
 return (
  <div className={s.styleInput}>
   <Controller
    name="age"
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
       placeholder="Возраст"
       value={value}
       required={true}
       onChange={(date) =>
        onChange(new Date(date).getTime())
       }
       errors={errors.age}
       helperText="Обязательное поле"
       {...field}
      />
     </div>
    )}
   />
  </div>
 );
};
