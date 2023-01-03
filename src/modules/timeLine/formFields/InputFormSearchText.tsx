import React from "react";
import { Controller } from "react-hook-form";
import TextFieldElementMui from "../../../common/mui-element/textFieldElementMui/textField/TextFieldElementMui";
import s from "./filterFieldsFormNews.module.scss";

export interface InputFormNameType {
 control: any;
 name: string;
}

export const InputFormSearchText = ({
 control,
 name,
}: InputFormNameType) => {
 return (
  <div className={s.styleInput}>
   <Controller
    name={name}
    control={control}
    render={({
     field: { onChange, value, ref, ...field },
     formState: { errors },
    }) => (
     <div className={s.wrapperBlockInput}>
      <TextFieldElementMui
       ItemRef={ref}
       placeholder="Поиск по содержимому"
       onChange={onChange}
       inputValue={value}
       errors={errors.name_field}
       {...field}
      />
     </div>
    )}
   />
  </div>
 );
};
