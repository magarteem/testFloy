import { Controller } from "react-hook-form";
import { SelectToolsElementMui } from "../../../common/mui-element/selectToolsElementMui/SelectToolsElementMui";
import { groupeOptions } from "../../authorization/service/BD";
import s from "../style/filterFieldsFormAds.module.scss";

export interface InputFormToolsType {
 control: any;
}

export const InputFormTools = ({
 control,
}: InputFormToolsType) => {
 return (
  <div className={s.selectFieldCustomHeight}>
   <Controller
    name="tool"
    control={control}
    //rules={{
    // required: "Обязательное поле",
    //}}
    render={({
     field: { onChange, value, ref, ...field },
     formState: { errors },
    }) => (
     //<CustomReactSelectToolsMui
     <SelectToolsElementMui
      ItemRef={ref}
      value={value}
      placeholder="Инструмент (род деятельности)"
      //required={true}
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
