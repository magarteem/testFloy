import { Controller } from "react-hook-form";
import TextFieldTextareaElementMui from "../../../common/mui-element/textFieldElementMui/textAreaInput/TextFieldTextareaElementMui";
import s from "../style/createFormVacancy.module.scss";

export interface InputFormCommitAboutType {
 control: any;
}

export const InputFormCommitAbout = ({
 control,
}: InputFormCommitAboutType) => {
 return (
  <div className={s.styleInput}>
   <Controller
    name="commitAbout"
    control={control}
    render={({ field: { onChange, ref, ...field } }) => (
     <div className={s.sizeInput}>
      <TextFieldTextareaElementMui
       ItemRef={ref}
       placeholder="Комментарий"
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
