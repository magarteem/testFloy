import { Controller } from "react-hook-form";
import { SelectElementMui } from "../../../common/mui-element/SelectElementMui";
import { cityBD } from "../../authorization/service/BD";
import s from "./formFields.module.scss";

export interface SelectFieldCityType {
 control: any;
}

export const SelectFieldCity = ({
 control,
}: SelectFieldCityType) => {
 return (
  <div className={s.selectField}>
   <Controller
    name="city"
    control={control}
    rules={{
     required: "Обязательное поле",
    }}
    render={({
     field: { onChange, value, ref, ...field },
     formState: { errors },
    }) => {
     return (
      <div className={s.wrapperBlockInput}>
       <SelectElementMui
        ItemRef={ref}
        value={value}
        placeholder="Город"
        required={true}
        options={cityBD}
        //@ts-ignore
        onChange={(e) =>
         onChange({
          value: e.target.value,
          label: e.target.value,
         })
        }
        errors={errors.city}
        {...field}
       />
      </div>
     );
    }}
   />
  </div>
 );
};
