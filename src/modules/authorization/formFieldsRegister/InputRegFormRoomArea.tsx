import { Controller } from "react-hook-form";
import TextFieldElementMui from "../../../common/mui-element/textFieldElementMui/textField/TextFieldElementMui";
import s from "./formFieldsRegister.module.scss";

export interface InputRegFormRoomAreaType {
 control: any;
 name: string;
}

export const InputRegFormRoomArea = ({
 control,
 name,
}: InputRegFormRoomAreaType) => {
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
       placeholder="Площадь помещения (м. кв.)"
       onChange={onChange}
       errors={errors[name]}
       {...field}
      />
     </div>
    )}
   />
  </div>
 );
};
