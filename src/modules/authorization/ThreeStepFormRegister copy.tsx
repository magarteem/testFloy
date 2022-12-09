import arrowReturnBlack from "../../assets/icons/arrowReturnBlack.webp";
import {
 Controller,
 useFormContext,
} from "react-hook-form";
import { UploadPhoto } from "../../common/components/signIn/uploadPhoto/UploadPhoto";
import { InputLabel } from "../../common/ui-elements/Input/InputLabel";
import { ReactSelectElement } from "../../common/ui-elements/react-select/ReactSelectElement";
import {
 genderBD,
 genreBD,
 groupeOptions,
 profilePrivacySettings,
 cityBD,
 skillBD,
} from "./service/BD";
import { TextAreaElement } from "../../common/ui-elements/textarea/TextAreaElement";
import { BtnInFormSaveCancel } from "../../common/components/navigateButton/BtnInFormSaveCancel";
import { ArrowBtnStepsBack } from "../../common/components/navigateButton/ArrowBtnStepsBack";
import s from "./style/threeStepFormRegister.module.scss";
import { ReactDatePickerElement } from "../../common/ui-elements/reactDatePicker/ReactDatePicker";
import { Input } from "../../common/ui-elements/Input/Input";
import { CustomReactSelectGenre } from "../../common/components/signIn/customReactSelectGenre/CustomReactSelectGenre";
import { CustomReactSelectTools } from "../../common/components/signIn/customReactSelectTools/CustomReactSelectTools";

export const ThreeStepFormRegister = () => {
 const {
  register,
  control,
  formState: { errors },
 } = useFormContext();

 return (
  <div className={s.threeStepFormRegister}>
   <div className={s.title}>
    <ArrowBtnStepsBack cancelImgIcon={arrowReturnBlack} />
    <h1>Создание анкеты</h1>
   </div>

   <div className={s.main}>
    <div className={s.styleInput}>
     <InputLabel titleSelect="Имя" required />
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
        <Input
         ItemRef={ref}
         placeholder="Ваше имя"
         onChange={onChange}
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
     <InputLabel titleSelect="Фотография" required />
     <Controller
      name="img_upload"
      control={control}
      render={({ field: { onChange, ...field } }) => (
       <UploadPhoto register={register} />
      )}
     />
    </div>

    <div className={s.selectField}>
     <InputLabel titleSelect="Город" required />
     <Controller
      name="city"
      control={control}
      rules={{
       required: "Обязательное поле",
      }}
      render={({
       field: { onChange, value, ref, ...field },
       fieldState: { error },
      }) => (
       <ReactSelectElement
        ItemRef={ref}
        value={value}
        placeholder="Выбрать"
        options={cityBD}
        onChange={onChange}
        errors={errors.city}
        {...field}
       />
      )}
     />
    </div>

    <div className={s.selectField}>
     <InputLabel titleSelect="Пол" required />
     <Controller
      name="gender"
      control={control}
      rules={{
       required: "Обязательное поле",
      }}
      render={({ field: { onChange, ref, ...field } }) => (
       <ReactSelectElement
        ItemRef={ref}
        placeholder="Выбрать"
        options={genderBD}
        onChange={onChange}
        errors={errors.gender}
        {...field}
       />
      )}
     />
    </div>

    <div className={s.selectField}>
     <InputLabel titleSelect="Возраст" required />
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
        placeholder="Дата рождения"
        value={value}
        //onChange={onChange}
        onChange={(date) =>
         onChange(new Date(date).getTime())
        }
        errors={errors.age}
        {...field}
       />
      )}
     />
    </div>

    <div className={s.selectField}>
     <InputLabel
      titleSelect="Инструмент (род деятельности)"
      required
     />
     <Controller
      name="tool"
      control={control}
      rules={{
       required: "Обязательное поле",
      }}
      render={({ field: { onChange, ref, ...field } }) => (
       <CustomReactSelectTools
        ItemRef={ref}
        placeholder="Выбрать"
        options={groupeOptions}
        onChange={onChange}
        errors={errors.tool}
        {...field}
       />
      )}
     />
    </div>

    <div className={s.selectField}>
     <InputLabel titleSelect="Жанр" required />
     <Controller
      name="genre"
      control={control}
      rules={{
       required: "Обязательное поле",
      }}
      render={({ field: { onChange, ref, ...field } }) => (
       <CustomReactSelectGenre
        ItemRef={ref}
        placeholder="Выбрать"
        options={genreBD}
        onChange={onChange}
        errors={errors.genre}
        {...field}
       />
      )}
     />
    </div>

    <div className={s.styleInput}>
     <InputLabel titleSelect="Опыт работы/выступлений" />
     <Controller
      name="work_experience"
      control={control}
      render={({ field: { onChange, ref, ...field } }) => (
       <div className={s.textarea}>
        <TextAreaElement
         ItemRef={ref}
         onChange={onChange}
         placeholderValue="Указать"
         {...field}
        />
        <span className={s.notes}>Опишите ваш опыт</span>
       </div>
      )}
     />
    </div>

    <div className={s.selectField}>
     <InputLabel titleSelect="Мастерство" />
     <Controller
      name="master"
      control={control}
      render={({ field: { onChange, ref, ...field } }) => (
       <ReactSelectElement
        ItemRef={ref}
        placeholder="Выбрать"
        options={skillBD}
        onChange={onChange}
        {...field}
       />
      )}
     />
    </div>

    <div className={s.styleInput}>
     <InputLabel titleSelect="Образование" />
     <Controller
      name="education"
      control={control}
      render={({ field: { onChange, ref, ...field } }) => (
       <div className={s.textarea}>
        <TextAreaElement
         ItemRef={ref}
         onChange={onChange}
         placeholderValue="Указать"
         {...field}
        />
       </div>
      )}
     />
    </div>

    <div className={s.selectField}>
     <InputLabel
      required
      titleSelect="Настройки приватности анкеты"
     />
     <Controller
      name="private_settings"
      control={control}
      rules={{
       required: "Обязательное поле",
      }}
      render={({ field: { onChange, ref, ...field } }) => (
       <ReactSelectElement
        ItemRef={ref}
        placeholder="Выбрать"
        options={profilePrivacySettings}
        errors={errors.private_settings}
        onChange={onChange}
        {...field}
       />
      )}
     />
    </div>
   </div>

   <div className={s.btnFormWrapper}>
    <BtnInFormSaveCancel
     textCancelButton="Назад"
     textButton="Создать анкету"
    />
   </div>
  </div>
 );
};
