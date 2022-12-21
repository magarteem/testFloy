import { Controller } from "react-hook-form";
import { SelectElementMui } from "../../../common/mui-element/SelectElementMui";
import { genderBD } from "../../authorization/service/BD";
import s from "../style/createFormVacancy.module.scss";

export interface InputFormGenderType {
 control: any;
}

export const InputFormGender = ({
 control,
}: InputFormGenderType) => {
 return (
  <div className={s.selectField}>
   <Controller
    name="gender"
    control={control}
    render={({
     field: { onChange, value, ref, ...field },
     formState: { errors },
    }) => (
     <SelectElementMui
      ItemRef={ref}
      value={value}
      placeholder="Пол"
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
