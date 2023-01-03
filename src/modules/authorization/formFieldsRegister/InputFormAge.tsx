import { Controller } from "react-hook-form";
import { DatePickerMui } from "../../../common/mui-element/datePicker/DatePickerMui";
import s from "./formFieldsRegister.module.scss";

export interface InputFormAgeType {
 control: any;
 name: string;
}

export const InputFormAge = ({
 control,
 name,
}: InputFormAgeType) => {
 return (
  <div className={s.styleInput}>
   <Controller
    name={name}
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
       required={true}
       value={value}
       onChange={(date) =>
        onChange(new Date(date).getTime())
       }
       errors={errors.age}
       {...field}
      />
     </div>
    )}
   />
  </div>
 );
};
