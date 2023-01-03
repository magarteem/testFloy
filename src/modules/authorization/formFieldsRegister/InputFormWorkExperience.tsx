import { Controller } from "react-hook-form";
import TextFieldTextareaElementMui from "../../../common/mui-element/textFieldElementMui/textAreaInput/TextFieldTextareaElementMui";
import s from "./formFieldsRegister.module.scss";

export interface InputFormWorkExperienceType {
 control: any;
 name: string;
}

export const InputFormWorkExperience = ({
 control,
 name,
}: InputFormWorkExperienceType) => {
 return (
  <div className={s.styleInput}>
   <Controller
    name={name}
    control={control}
    render={({ field: { onChange, ref, ...field } }) => (
     <div className={s.sizeInput}>
      <TextFieldTextareaElementMui
       ItemRef={ref}
       placeholder="Опыт работы/выступлений"
       onChange={onChange}
       multiline={true}
       helperText="Опишите требуемый опыт"
       {...field}
      />
     </div>
    )}
   />
  </div>
 );
};
