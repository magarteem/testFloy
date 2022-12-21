import { Controller } from "react-hook-form";
import { SelectGenreElementMui } from "../../../common/mui-element/selectGenreElementMui/SelectGenreElementMui";
import { typeOfInstitution } from "../service/createVacancyBD";
import s from "../style/createFormVacancy.module.scss";

export interface InputFormTypeOfInstitutionType {
 control: any;
}

export const InputFormTypeOfInstitution = ({
 control,
}: InputFormTypeOfInstitutionType) => {
 return (
  <div className={s.selectFieldCustomHeight}>
   <Controller
    name="typeOfInstitution"
    control={control}
    rules={{
     required: "Обязательное поле",
    }}
    render={({
     field: { onChange, value, ref, ...field },
     formState: { errors },
    }) => (
     <SelectGenreElementMui
      ItemRef={ref}
      value={value}
      placeholder="Место работы"
      required={true}
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
