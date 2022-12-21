import { Controller } from "react-hook-form";
import { SelectToolsElementMui } from "../../../common/mui-element/selectToolsElementMui/SelectToolsElementMui";
import { groupeOptions } from "../../authorization/service/BD";
import s from "../style/createFormVacancy.module.scss";

export interface InputFormToolsType {
 control: any;
 typeVacancy: string;
}

export const InputFormTools = ({
 control,
 typeVacancy,
}: InputFormToolsType) => {
 return (
  <div className={s.selectFieldCustomHeight}>
   <Controller
    name="tool"
    control={control}
    rules={{
     required:
      typeVacancy === "Коллектив"
       ? false
       : "Обязательное поле",
    }}
    render={({
     field: { onChange, value, ref, ...field },
     formState: { errors },
    }) => (
     //<CustomReactSelectToolsMui
     <SelectToolsElementMui
      ItemRef={ref}
      value={value}
      placeholder="Инструмент (род деятельности)"
      required={typeVacancy !== "Коллектив" && true}
      options={groupeOptions}
      // required={typeVacancy !== "Коллектив" && true}
      onChange={onChange}
      errors={errors.tool}
      {...field}
     />
    )}
   />
  </div>
 );
};
