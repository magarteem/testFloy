import { Controller } from "react-hook-form";
import { SelectElementMui } from "../../../common/mui-element/SelectElementMui";
import { cityBD } from "../../authorization/service/BD";
import s from "../style/createFormVacancy.module.scss";

export interface InputFormCityType {
 control: any;
}

export const InputFormCity = ({
 control,
}: InputFormCityType) => {
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
    }) => (
     <SelectElementMui
      ItemRef={ref}
      value={value}
      placeholder="Город"
      required={true}
      options={cityBD}
      //onChange={onChange}
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
    )}
   />
  </div>
 );
};
