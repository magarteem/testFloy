import { Controller } from "react-hook-form";
import TextFieldElementMui from "../../../common/mui-element/textFieldElementMui/textField/TextFieldElementMui";
import s from "./formFields.module.scss";

export interface InputFormWebSiteType {
 control: any;
}

export const InputFormWebSite = ({
 control,
}: InputFormWebSiteType) => {
 return (
  <div className={s.styleInput}>
   <Controller
    name="webSite"
    control={control}
    render={({
     field: { onChange, value, ref, ...field },
    }) => (
     <div className={s.wrapperBlockInput}>
      <TextFieldElementMui
       ItemRef={ref}
       placeholder="Вебсайт"
       onChange={onChange}
       inputValue={value}
       {...field}
      />
     </div>
    )}
   />
  </div>
 );
};
