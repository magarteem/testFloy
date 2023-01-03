import { Controller } from "react-hook-form";
import TextFieldTextareaElementMui from "../../../common/mui-element/textFieldElementMui/textAreaInput/TextFieldTextareaElementMui";
import s from "./formFieldsRegister.module.scss";

export interface InputFormEducationType {
 control: any;
 name: string;
}

export const InputFormEducation = ({
 control,
 name,
}: InputFormEducationType) => {
 return (
  <div className={s.styleInput}>
   <Controller
    name={name}
    control={control}
    render={({ field: { onChange, ref, ...field } }) => (
     <div className={s.sizeInput}>
      <TextFieldTextareaElementMui
       ItemRef={ref}
       placeholder="Образование"
       onChange={onChange}
       multiline={true}
       helperText="Опишите ваше образование"
       {...field}
      />
     </div>
    )}
   />
  </div>
 );
};
