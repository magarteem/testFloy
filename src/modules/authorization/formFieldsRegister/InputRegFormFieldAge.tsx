import { Controller } from "react-hook-form";
import TextFieldElementMui from "../../../common/mui-element/textFieldElementMui/textField/TextFieldElementMui";
import { DatePickerMobile } from "../../../common/ui-elements/datePickerMobile/DatePickerMobile";
import s from "./formFieldsRegister.module.scss";

export interface InputRegFormFieldAgeType {
 control: any;
 name: string;
 required?: boolean;
}

export const InputRegFormFieldAge = ({
 control,
 name,
 required,
}: InputRegFormFieldAgeType) => {
 return (
  <div className={s.styleInput}>
   <Controller
    name={name}
    control={control}
    rules={{
     required: required ? "Обязательное поле" : false,
     minLength: {
      value: 3,
      message: "Не менее 3х символов",
     },
    }}
    render={({
     field: { onChange, ref, ...field },
     formState: { errors },
    }) => (
     <div className={s.sizeInput}>
      <DatePickerMobile
       placeholder="Возраст"
       onChange={onChange}
       {...field}
      />
      {/*<TextFieldElementMui
       ItemRef={ref}
       placeholder={placeholder}
       required={required}
       onChange={onChange}
       errors={errors[name]}
       {...field}
      />*/}
     </div>
    )}
   />
  </div>
 );
};
