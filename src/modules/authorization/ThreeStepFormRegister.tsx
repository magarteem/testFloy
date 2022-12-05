import {
 Controller,
 useFormContext,
} from "react-hook-form";
import { InputLabel } from "../../common/ui-elements/Input/InputLabel";

import { BtnInFormSaveCancel } from "../../common/components/navigateButton/BtnInFormSaveCancel";
import s from "./style/threeStepFormRegister.module.scss";
import { Input } from "../../common/ui-elements/Input/Input";

import { FormLayout } from "../../common/layout/formLayout/FormLayout";
import { UploadPhoto } from "../../common/components/signIn/uploadPhoto/UploadPhoto";
import { ReactSelectElement } from "../../common/ui-elements/react-select/ReactSelectElement";
import {
 genderBD,
 genreBD,
 groupeOptions,
 profilePrivacySettings,
 sityBD,
 skillBD,
} from "./service/BD";
import { SelectElementMui } from "../../common/mui-element/SelectElementMui";
import { ReactDatePickerElement } from "../../common/ui-elements/reactDatePicker/ReactDatePicker";
import { CustomReactSelectToolsMui } from "../../common/mui-element/CustomReactSelectToolsMui";
import { SelectCheckedElementMui } from "../../common/mui-element/SelectCheckedElementMui";
import { BtnInGroupeSaveCancelMui } from "../../common/components/navigateButton/BtnInGroupeSaveCancelMui";
import TextFieldTextareaElementMui from "../../common/mui-element/TextFieldTextareaElementMui";
import TextFieldElementMui from "../../common/mui-element/TextFieldElementMui";
import { DatePickerMui } from "../../common/mui-element/DatePickerMui";

export const ThreeStepFormRegister = () => {
 const {
  register,
  watch,
  control,

  formState: { errors, isValid },
 } = useFormContext();

 console.log(watch("sity"));

 return (
  <FormLayout textLabel="Регистрация">
   <div className={s.main}>
    <div className={s.styleInput}>
     <Controller
      name="name_field"
      control={control}
      rules={{
       required: "Обязательное поле",
       minLength: {
        value: 3,
        message: "Не менее 3х символов",
       },
      }}
      render={({ field: { onChange, ref, ...field } }) => (
       <div className={s.sizeInput}>
        <TextFieldElementMui
         ItemRef={ref}
         placeholder="Ваше имя"
         required={true}
         onChange={onChange}
         helperText="Обязательное поле"
         errors={
          errors.name_field && errors.name_field.message
         }
         {...field}
        />
       </div>
      )}
     />
    </div>

    <div className={s.selectField}>
     <Controller
      name="img_upload"
      control={control}
      render={({ field: { onChange, ...field } }) => (
       <UploadPhoto register={register} />
      )}
     />
    </div>

    <div className={s.selectField}>
     <Controller
      name="sity"
      control={control}
      rules={{
       required: "Обязательное поле",
      }}
      render={({
       field: { onChange, value, ref, ...field },
       fieldState: { error },
      }) => (
       <SelectElementMui
        ItemRef={ref}
        value={value}
        placeholder="Город"
        required={true}
        options={sityBD}
        //onChange={onChange}
        //@ts-ignore
        onChange={(e) =>
         onChange({
          value: e.target.value,
          label: e.target.value,
         })
        }
        errors={errors.sity}
        {...field}
       />
      )}
     />
    </div>

    <div className={s.selectField}>
     <Controller
      name="gender"
      control={control}
      rules={{
       required: "Обязательное поле",
      }}
      render={({
       field: { onChange, value, ref, ...field },
      }) => (
       <SelectElementMui
        ItemRef={ref}
        value={value}
        placeholder="Пол"
        required={true}
        options={genderBD}
        //@ts-ignore
        onChange={(e) =>
         onChange({
          value: e.target.value,
          label: e.target.value,
         })
        }
        errors={errors.gender}
        {...field}
       />
      )}
     />
    </div>

    <div className={s.styleInput}>
     <Controller
      name="age"
      control={control}
      rules={{
       required: "Обязательное поле",
      }}
      render={({
       field: { onChange, value, ref, ...field },
      }) => (
       <div className={s.sizeInput}>
        <DatePickerMui
         placeholder="Возраст"
         required={true}
         value={value}
         onChange={(date) =>
          onChange(new Date(date).getTime())
         }
         errors={errors.age}
         helperText="Обязательное поле"
         {...field}
        />
       </div>
      )}
     />
    </div>

    {/*<div className={s.selectField}>
     <Controller
      name="age"
      control={control}
      rules={{
       required: "Обязательное поле",
      }}
      render={({
       field: { onChange, value, ref, ...field },
      }) => (
       <ReactDatePickerElement
        ItemRef={ref}
        placeholder="Возраст"
        value={value}
        onChange={(date) =>
         onChange(new Date(date).getTime())
        }
        errors={errors.age}
        {...field}
       />
      )}
     />
    </div>*/}

    <div className={s.selectFieldCustomHeight}>
     <Controller
      name="tool"
      control={control}
      rules={{
       required: "Обязательное поле",
      }}
      render={({
       field: { onChange, value, ref, ...field },
      }) => (
       <CustomReactSelectToolsMui
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

    <div className={s.selectFieldCustomHeight}>
     <Controller
      name="genre"
      control={control}
      rules={{
       required: "Обязательное поле",
      }}
      render={({
       field: { onChange, value, ref, ...field },
      }) => (
       <SelectCheckedElementMui
        ItemRef={ref}
        value={value}
        placeholder="Жанр"
        required={true}
        options={genreBD}
        onChange={onChange}
        //@ts-ignore
        // onChange={(e) =>
        //  onChange({
        //   value: e.target.value,
        //   label: e.target.value,
        //  })
        // }
        errors={errors.genre}
        {...field}
       />
      )}
     />
    </div>

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

    <div className={s.styleInput}>
     <Controller
      name="work_experience"
      control={control}
      render={({ field: { onChange, ref, ...field } }) => (
       <div className={s.sizeInput}>
        <TextFieldTextareaElementMui
         ItemRef={ref}
         placeholder="Опыт работы/выступлений"
         onChange={onChange}
         multiline={true}
         helperText="Опишите ваш опыт"
         {...field}
        />
       </div>
      )}
     />
    </div>

    <div className={s.styleInput}>
     <Controller
      name="education"
      control={control}
      render={({ field: { onChange, ref, ...field } }) => (
       <div className={s.sizeInput}>
        <TextFieldTextareaElementMui
         ItemRef={ref}
         placeholder="Образование"
         onChange={onChange}
         multiline={true}
         helperText="Опишите ваше образование"
         {...field}
        />
       </div>
      )}
     />
    </div>

    <div className={s.selectField}>
     <Controller
      name="private_settings"
      control={control}
      rules={{
       required: "Обязательное поле",
      }}
      render={({
       field: { onChange, value, ref, ...field },
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
   </div>

   <div className={s.btnFormWrapper}>
    <BtnInGroupeSaveCancelMui
     textCancelButton="Назад"
     textButton="Создать анкету"
     isValidInButton={!isValid}
    />
   </div>
   {/*<div className={s.btnFormWrapper}>
    <BtnInFormSaveCancel
     textCancelButton="Назад"
     textButton="Создать анкету"
    />
   </div>*/}
  </FormLayout>
 );
};
