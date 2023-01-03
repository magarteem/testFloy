import { Controller } from "react-hook-form";
import { SelectToolsElementMui } from "../../../common/mui-element/selectToolsElementMui/SelectToolsElementMui";
import { groupeOptions } from "../../authorization/service/BD";
import s from "./formFieldsRegister.module.scss";

export interface InputFormToolsType {
 control: any;
 typeAccount: string;
 name: string;
}

export const InputFormTools = ({
 control,
 typeAccount,
 name,
}: InputFormToolsType) => {
 return (
  <div className={s.selectFieldCustomHeight}>
   <Controller
    name={name}
    control={control}
    rules={{
     required: "Обязательное поле",
    }}
    render={({
     field: { onChange, value, ref, ...field },
     formState: { errors },
    }) => (
     <SelectToolsElementMui
      ItemRef={ref}
      value={value}
      placeholder={
       typeAccount === "group-collective"
        ? "Состав"
        : "Инструмент (род деятельности)"
      }
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
