import { Controller } from "react-hook-form";
import { SelectElementMui } from "../../../common/mui-element/SelectElementMui";
import { optionСategoryBD } from "../service/optionСategoryBD";
import s from "./filterFieldsFormNews.module.scss";

export interface InputFormCityType {
 control: any;
 name: string;
}

export const InputFormCategoryNews = ({
 control,
 name,
}: InputFormCityType) => {
 return (
  <div className={s.selectField}>
   <Controller
    name={name}
    control={control}
    render={({
     field: { onChange, value, ref, ...field },
     formState: { errors },
    }) => (
     <SelectElementMui
      placeholder="Тип новости"
      ItemRef={ref}
      value={value || ""}
      options={optionСategoryBD}
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
