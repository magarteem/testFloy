import { Controller } from "react-hook-form";
import TextFieldPhoneElementMui from "../../../common/mui-element/textFieldElementMui/phoneInput/TextFieldPhoneElementMui";
import s from "./formFieldsRegister.module.scss";

export interface InputFormPhoneType {
 control: any;
 name: string;
}

export const InputFormPhone = ({
 control,
 name,
}: InputFormPhoneType) => {
 return (
  <div className={s.styleInput}>
   <Controller
    name={name}
    control={control}
    render={({ field: { onChange, ref, ...field } }) => (
     <div className={s.sizeInput}>
      <TextFieldPhoneElementMui
       ItemRef={ref}
       placeholder="Телефон"
       onChange={onChange}
       type="phone"
       {...field}
      />
     </div>
    )}
   />
  </div>
 );
};
