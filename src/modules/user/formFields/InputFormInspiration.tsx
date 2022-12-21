import { Controller } from "react-hook-form";
import TextFieldTextareaElementMui from "../../../common/mui-element/textFieldElementMui/textAreaInput/TextFieldTextareaElementMui";
import s from "./formFields.module.scss";

export interface InputFormInspirationType {
 control: any;
}

export const InputFormInspiration = ({
 control,
}: InputFormInspirationType) => {
 return (
  <div className={s.styleInput}>
   <Controller
    name="inspiration"
    control={control}
    render={({
     field: { onChange, value, ref, ...field },
    }) => (
     <div className={s.sizeInput}>
      <TextFieldTextareaElementMui
       ItemRef={ref}
       inputValue={value}
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
