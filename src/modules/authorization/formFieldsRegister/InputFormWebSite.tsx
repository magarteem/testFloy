import { Controller } from "react-hook-form";
import TextFieldElementMui from "../../../common/mui-element/textFieldElementMui/textField/TextFieldElementMui";
import s from "./formFieldsRegister.module.scss";

export interface InputFormWebSiteType {
 control: any;
 name: string;
}

export const InputFormWebSite = ({
 control,
 name,
}: InputFormWebSiteType) => {
 return (
  <div className={s.styleInput}>
   <Controller
    name={name}
    control={control}
    rules={{
     minLength: {
      value: 3,
      message: "Не менее 3х символов",
     },
    }}
    render={({
     field: { onChange, ref, ...field },
     formState: { errors },
    }) => (
     <div className={s.sizeInput}>
      <TextFieldElementMui
       ItemRef={ref}
       placeholder="Вебсайт"
       onChange={onChange}
       helperText="Обязательное поле"
       errors={errors.web_site && errors.web_site}
       {...field}
      />
     </div>
    )}
   />
  </div>
 );
};
