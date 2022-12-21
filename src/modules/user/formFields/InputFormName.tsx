import React from "react";
import { Controller } from "react-hook-form";
import TextFieldElementMui from "../../../common/mui-element/textFieldElementMui/textField/TextFieldElementMui";
import s from "./formFields.module.scss";

export interface InputFormNameType {
 control: any;
}

export const InputFormName = ({
 control,
}: InputFormNameType) => {
 return (
  <div className={s.styleInput}>
   <Controller
    name="name_field"
    control={control}
    rules={{
     required: "Обязательное поле",
     minLength: {
      value: 3,
      message: "Не менее 3х символов",
     },
    }}
    render={({
     field: { onChange, value, ref, ...field },
     formState: { errors },
    }) => (
     <div className={s.wrapperBlockInput}>
      <TextFieldElementMui
       ItemRef={ref}
       placeholder="Имя"
       required={true}
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
