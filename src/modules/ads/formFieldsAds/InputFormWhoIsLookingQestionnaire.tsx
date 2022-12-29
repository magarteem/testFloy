import { Controller } from "react-hook-form";
import { SelectElementMui } from "../../../common/mui-element/SelectElementMui";
import { optionsTypeAccount } from "../../authorization/service/BD";
import { OptionSelectType } from "../../authorization/types/authType";
import s from "../style/filterFieldsFormAds.module.scss";

export interface InputFormWhoIsLookingQestionnaireType {
 control: any;
 placeholder: string;
 name: string;
 options: OptionSelectType[];
}

export const InputFormWhoIsLookingQestionnaire = ({
 control,
 placeholder,
 name,
 options,
}: InputFormWhoIsLookingQestionnaireType) => {
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
      ItemRef={ref}
      value={value || ""}
      placeholder={placeholder}
      options={options}
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
