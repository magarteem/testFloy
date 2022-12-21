import { Controller } from "react-hook-form";
import { SelectElementMui } from "../../../common/mui-element/SelectElementMui";
import { workingConditionsBD } from "../service/createVacancyBD";
import s from "../style/createFormVacancy.module.scss";

export interface InputFormWorkingConditionsType {
 control: any;
}

export const InputFormWorkingConditions = ({
 control,
}: InputFormWorkingConditionsType) => {
 return (
  <div className={s.selectField}>
   <Controller
    name="workingConditions"
    control={control}
    render={({
     field: { onChange, value, ref, ...field },
    }) => (
     <SelectElementMui
      ItemRef={ref}
      value={value}
      placeholder="Условия работы"
      options={workingConditionsBD}
      //@ts-ignore
      onChange={(e) =>
       onChange({
        value: e.target.value,
        label: e.target.value,
       })
      }
      {...field}
     />
    )}
   />
  </div>
 );
};
