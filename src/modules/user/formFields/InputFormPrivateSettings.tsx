import { Controller } from "react-hook-form";
import { SelectElementMui } from "../../../common/mui-element/SelectElementMui";
import { profilePrivacySettings } from "../../authorization/service/BD";
import s from "./formFields.module.scss";

export interface InputFormPrivateSettingsType {
 control: any;
}

export const InputFormPrivateSettings = ({
 control,
}: InputFormPrivateSettingsType) => {
 return (
  <div className={s.selectField}>
   <Controller
    name="private_settings"
    control={control}
    rules={{
     required: "Обязательное поле",
    }}
    render={({
     field: { onChange, value, ref, ...field },
     formState: { errors },
    }) => (
     <div className={s.wrapperBlockInput}>
      <SelectElementMui
       ItemRef={ref}
       value={value}
       required={true}
       placeholder="Настройки приватности анкеты"
       options={profilePrivacySettings}
       errors={errors.private_settings}
       //@ts-ignore
       onChange={(e) =>
        onChange({
         value: e.target.value,
         label: e.target.value,
        })
       }
       {...field}
      />
     </div>
    )}
   />
  </div>
 );
};
