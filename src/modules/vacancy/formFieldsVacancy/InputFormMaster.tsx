import { Controller } from "react-hook-form";
import { SelectElementMui } from "../../../common/mui-element/SelectElementMui";
import { skillBD } from "../../authorization/service/BD";
import s from "../style/createFormVacancy.module.scss";

export interface InputFormMasterType {
 control: any;
}

export const InputFormMaster = ({
 control,
}: InputFormMasterType) => {
 return (
  <div className={s.selectField}>
   <Controller
    name="master"
    control={control}
    render={({ field: { onChange, ref, ...field } }) => (
     <SelectElementMui
      ItemRef={ref}
      placeholder="Мастерство"
      options={skillBD}
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
