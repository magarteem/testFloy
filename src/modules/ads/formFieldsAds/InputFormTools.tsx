import { Controller } from "react-hook-form";
import { SelectToolsElementMui } from "../../../common/mui-element/selectToolsElementMui/SelectToolsElementMui";
import { groupeOptions } from "../../authorization/service/BD";
import s from "../style/filterFieldsFormAds.module.scss";

export interface InputFormToolsType {
 control: any;
 name: string;
}

export const InputFormTools = ({
 control,
 name,
}: InputFormToolsType) => {
 return (
  <div className={s.selectFieldCustomHeight}>
   <Controller
    name={name}
    control={control}
    render={({
     field: { onChange, value, ref, ...field },
     formState: { errors },
    }) => (
     //<CustomReactSelectToolsMui
     <SelectToolsElementMui
      ItemRef={ref}
      value={value}
      placeholder="Инструмент (род деятельности)"
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
