import { Controller } from "react-hook-form";
import { SelectElementMui } from "../../../common/mui-element/SelectElementMui";
import { requiredADS } from "../service/createVacancyBD";
import s from "../style/createFormVacancy.module.scss";

export interface InputFormRequiredAdsType {
 control: any;
}

export const InputFormRequiredAds = ({
 control,
}: InputFormRequiredAdsType) => {
 return (
  <div className={s.selectField}>
   <Controller
    name="required"
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
      placeholder="Ищу \ Ищем"
      required={true}
      options={requiredADS}
      //@ts-ignore
      onChange={(e) =>
       onChange({
        value: e.target.value,
        label: e.target.value,
       })
      }
      errors={errors.required}
      {...field}
     />
    )}
   />
  </div>
 );
};
