import { Controller } from "react-hook-form";
import TextFieldElementMui from "../../../common/mui-element/textFieldElementMui/textField/TextFieldElementMui";
import s from "../style/createFormVacancy.module.scss";

export interface InputFormEmailType {
 control: any;
}

export const InputFormEmail = ({
 control,
}: InputFormEmailType) => {
 return (
  <div className={s.styleInput}>
   <Controller
    name="email"
    control={control}
    rules={{
     minLength: {
      value: 3,
      message: "Не менее 3х символов",
     },
     pattern: {
      value: /\S+@\S+\.\S+/,
      message: "Это не Email",
     },
    }}
    render={({
     field: { onChange, ref, ...field },
     formState: { errors },
    }) => (
     <div className={s.sizeInput}>
      <TextFieldElementMui
       ItemRef={ref}
       placeholder="E-mail"
       onChange={onChange}
       helperText="Обязательное поле"
       errors={errors.email}
       {...field}
      />
     </div>
    )}
   />
  </div>
 );
};
