import { Controller } from "react-hook-form";
import TextFieldElementMui from "../../../common/mui-element/textFieldElementMui/textField/TextFieldElementMui";
import s from "./formFields.module.scss";

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
    render={({
     field: { onChange, value, ref, ...field },
    }) => (
     <div className={s.wrapperBlockInput}>
      <TextFieldElementMui
       ItemRef={ref}
       placeholder="E-mail"
       onChange={onChange}
       inputValue={value}
       {...field}
      />
     </div>
    )}
   />
  </div>
 );
};
