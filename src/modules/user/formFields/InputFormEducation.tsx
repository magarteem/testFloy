import { Controller } from "react-hook-form";
import TextFieldTextareaElementMui from "../../../common/mui-element/textFieldElementMui/textAreaInput/TextFieldTextareaElementMui";
import s from "./formFields.module.scss";

export interface InputFormEducationType {
 control: any;
}

export const InputFormEducation = ({
 control,
}: InputFormEducationType) => {
 return (
  <div className={s.styleInput}>
   <Controller
    name="education"
    control={control}
    render={({
     field: { onChange, value, ref, ...field },
    }) => (
     <div className={s.sizeInput}>
      <TextFieldTextareaElementMui
       ItemRef={ref}
       placeholder="Образование"
       multiline={true}
       onChange={onChange}
       helperText="Опишите ваше образование"
       inputValue={value}
       {...field}
      />
     </div>
    )}
   />
  </div>
 );
};
