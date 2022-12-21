import { Controller } from "react-hook-form";
import { SelectElementMui } from "../../../common/mui-element/SelectElementMui";
import { requiredVacancy } from "../service/createVacancyBD";
import s from "../style/createFormVacancy.module.scss";

export interface InputVacancyRequiredType {
 control: any;
}

export const InputVacancyRequired = ({
 control,
}: InputVacancyRequiredType) => {
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
      placeholder="Требуется"
      required={true}
      options={requiredVacancy}
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
