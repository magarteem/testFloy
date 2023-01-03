import { Controller } from "react-hook-form";
import TextFieldTextareaElementMui from "../../../common/mui-element/textFieldElementMui/textAreaInput/TextFieldTextareaElementMui";
import s from "./formFieldsRegister.module.scss";

export interface InputFormAboutMeType {
 control: any;
 name: string;
}

export const InputFormAboutMe = ({
 control,
 name,
}: InputFormAboutMeType) => {
 return (
  <div className={s.styleInput}>
   <Controller
    name={name}
    control={control}
    render={({ field: { onChange, ref, ...field } }) => (
     <div className={s.sizeInput}>
      <TextFieldTextareaElementMui
       ItemRef={ref}
       placeholder="О себе"
       onChange={onChange}
       multiline={true}
       {...field}
      />
     </div>
    )}
   />
  </div>
 );
};
