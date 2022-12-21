import { Controller } from "react-hook-form";
import { SelectToolsElementMui } from "../../../common/mui-element/selectToolsElementMui/SelectToolsElementMui";
import { groupeOptions } from "../../authorization/service/BD";
import s from "./formFields.module.scss";

export interface SelectFieldToolsType {
 control: any;
}

export const SelectFieldTools = ({
 control,
}: SelectFieldToolsType) => {
 return (
  <div className={s.selectField}>
   <Controller
    name="tool"
    control={control}
    rules={{
     required: "Обязательное поле",
    }}
    render={({
     field: { onChange, ref, value, ...field },
     formState: { errors },
    }) => (
     <SelectToolsElementMui
      ItemRef={ref}
      value={value}
      placeholder="Инструмент (род деятельности)"
      required={true}
      options={groupeOptions}
      onChange={onChange}
      errors={errors.tool}
      {...field}
     />
    )}
   />
  </div>
 );
};
