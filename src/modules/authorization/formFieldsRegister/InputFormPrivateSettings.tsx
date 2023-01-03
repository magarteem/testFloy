import { Controller } from "react-hook-form";
import { SelectElementMui } from "../../../common/mui-element/SelectElementMui";
import { profilePrivacySettings } from "../service/BD";
import s from "./formFieldsRegister.module.scss";

export interface InputFormPrivateSettingsType {
 control: any;
 name: string;
}

export const InputFormPrivateSettings = ({
 control,
 name,
}: InputFormPrivateSettingsType) => {
 return (
  <div className={s.selectField}>
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
     <SelectElementMui
      ItemRef={ref}
      value={value}
      placeholder="Настройки приватности анкеты"
      required={true}
      options={profilePrivacySettings}
      //@ts-ignore
      onChange={(e) =>
       onChange({
        value: e.target.value,
        label: e.target.value,
       })
      }
      errors={errors.private_settings}
      {...field}
     />
    )}
   />
  </div>
 );
};
