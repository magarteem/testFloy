import { Controller } from "react-hook-form";
import { SelectGenreElementMui } from "../../../common/mui-element/selectGenreElementMui/SelectGenreElementMui";
import { typeOfInstitution } from "../../vacancy/service/createVacancyBD";

import s from "../style/filterFieldsFormAds.module.scss";

export interface InputFormTypeOfInstitutionType {
 control: any;
 placeholder: string;
}

export const InputFormTypeOfInstitution = ({
 control,
 placeholder,
}: InputFormTypeOfInstitutionType) => {
 return (
  <div className={s.selectFieldCustomHeight}>
   <Controller
    name="typeOfInstitution"
    control={control}
    render={({
     field: { onChange, value, ref, ...field },
     formState: { errors },
    }) => (
     <SelectGenreElementMui
      ItemRef={ref}
      value={value}
      placeholder={placeholder}
      options={typeOfInstitution}
      onChange={onChange}
      errors={errors.typeOfInstitution}
      {...field}
     />
    )}
   />
  </div>
 );
};
