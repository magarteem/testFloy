import { Controller } from "react-hook-form";
import TextFieldPhoneElementMui from "../../../common/mui-element/textFieldElementMui/phoneInput/TextFieldPhoneElementMui";
import s from "../style/createFormVacancy.module.scss";

export interface InputFormPhoneType {
 control: any;
}

export const InputFormPhone = ({
 control,
}: InputFormPhoneType) => {
 return (
  <div className={s.styleInput}>
   <Controller
    name="phone"
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
