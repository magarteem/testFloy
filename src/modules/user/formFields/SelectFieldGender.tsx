import { Controller } from "react-hook-form";
import { SelectElementMui } from "../../../common/mui-element/SelectElementMui";
import { genderBD } from "../../authorization/service/BD";
import s from "./formFields.module.scss";

export interface SelectFieldGenderType {
 control: any;
}

export const SelectFieldGender = ({
 control,
}: SelectFieldGenderType) => {
 return (
  <div className={s.selectField}>
   <Controller
    name="gender"
    control={control}
    rules={{
     required: "Обязательное поле",
    }}
    render={({
     field: { onChange, value, ref, ...field },
     formState: { errors },
    }) => (
     <div className={s.wrapperBlockInput}>
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
     </div>
    )}
   />
  </div>
 );
};
