import { Controller } from "react-hook-form";
import TextFieldTextareaElementMui from "../../../common/mui-element/textFieldElementMui/textAreaInput/TextFieldTextareaElementMui";
import s from "../style/createFormVacancy.module.scss";

export interface InputFormCommitType {
 control: any;
 typeAds?: string;
}

export const InputFormCommit = ({
 control,
 typeAds,
}: InputFormCommitType) => {
 return (
  <div className={s.styleInput}>
   <Controller
    name="commit"
    control={control}
    render={({ field: { onChange, ref, ...field } }) => (
     <div className={s.sizeInput}>
      <TextFieldTextareaElementMui
       ItemRef={ref}
       placeholder={
        typeAds === "Работу" ? "О себе" : "Комментарий"
       }
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
