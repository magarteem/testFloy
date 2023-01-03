import { Controller } from "react-hook-form";
import TextFieldTextareaElementMui from "../../../common/mui-element/textFieldElementMui/textAreaInput/TextFieldTextareaElementMui";
import s from "./formFieldsRegister.module.scss";

export interface InputFormEstablishmentDescriptionType {
 control: any;
 name: string;
}

export const InputFormEstablishmentDescription = ({
 control,
 name,
}: InputFormEstablishmentDescriptionType) => {
 return (
  <div className={s.styleInput}>
   <Controller
    name={name}
    control={control}
    render={({ field: { onChange, ref, ...field } }) => (
     <div className={s.sizeInput}>
      <TextFieldTextareaElementMui
       ItemRef={ref}
       placeholder="Описание"
       onChange={onChange}
       multiline={true}
       helperText="Опишите ваше заведение"
       {...field}
      />
     </div>
    )}
   />
  </div>
 );
};
