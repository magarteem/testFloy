import { Controller } from "react-hook-form";
import TextFieldElementMui from "../../../common/mui-element/textFieldElementMui/textField/TextFieldElementMui";
import s from "./formFieldsRegister.module.scss";

export interface InputRegFormFieldNameType {
 control: any;
 name: string;
 placeholder: string;
 required: boolean;
}

export const InputRegFormFieldName = ({
 control,
 name,
 placeholder,
 required,
}: InputRegFormFieldNameType) => {
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
      <TextFieldElementMui
       ItemRef={ref}
       placeholder={placeholder}
       required={required}
       onChange={onChange}
       errors={errors[name]}
       {...field}
      />
     </div>
    )}
   />
  </div>
 );
};
