import { Controller } from "react-hook-form";
import TextFieldTextareaElementMui from "../../../common/mui-element/textFieldElementMui/textAreaInput/TextFieldTextareaElementMui";
import s from "./formFields.module.scss";

export interface InputFormWorkExperienceType {
 control: any;
}

export const InputFormWorkExperience = ({
 control,
}: InputFormWorkExperienceType) => {
 return (
  <div className={s.styleInput}>
   <Controller
    name="work_experience"
    control={control}
    render={({
     field: { onChange, value, ref, ...field },
    }) => (
     <div className={s.sizeInput}>
      <TextFieldTextareaElementMui
       ItemRef={ref}
       inputValue={value}
       placeholder="Опыт работы/выступлений"
       onChange={onChange}
       multiline={true}
       helperText="Опишите ваш опыт"
       {...field}
      />
     </div>
    )}
   />
  </div>
 );
};
