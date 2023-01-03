import { Controller } from "react-hook-form";
import { SelectElementMui } from "../../../common/mui-element/SelectElementMui";
import { genderBD } from "../service/BD";
import s from "./formFieldsRegister.module.scss";

export interface InputFormGenderType {
 control: any;
 name: string;
}

export const InputFormGender = ({
 control,
 name,
}: InputFormGenderType) => {
 return (
  <div className={s.selectField}>
   <Controller
    name={name}
    control={control}
    rules={{
     required: "Обязательное поле",
    }}
    render={({
     field: { onChange, value, ref, ...field },
     formState: { errors },
    }) => (
     <SelectElementMui
      ItemRef={ref}
      value={value}
      placeholder="Пол"
      required={true}
      options={genderBD}
      //@ts-ignore
      onChange={(e) =>
       onChange({
        value: e.target.value,
        label: e.target.value,
       })
      }
      errors={errors.gender}
      {...field}
     />
    )}
   />
  </div>
 );
};
