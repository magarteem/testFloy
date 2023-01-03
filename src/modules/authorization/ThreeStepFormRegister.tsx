import { useFormContext } from "react-hook-form";
import { FormLayout } from "../../common/layout/formLayout/FormLayout";
import { BtnInGroupeSaveCancelMui } from "../../common/components/navigateButton/BtnInGroupeSaveCancelMui";
import { InputRegFormFieldName } from "./formFieldsRegister/InputRegFormFieldName";
import { InputFormTypeCollective } from "./formFieldsRegister/InputFormTypeCollective";
import { teamTypeADS } from "../vacancy/service/createVacancyBD";
import { InputFormTypeOfInstitution } from "./formFieldsRegister/InputFormTypeOfInstitution";
import { InputFormCity } from "./formFieldsRegister/InputFormCity";
import { InputFormImgUpload } from "./formFieldsRegister/InputFormImgUpload";
import { InputFormGender } from "./formFieldsRegister/InputFormGender";
import { InputFormAge } from "./formFieldsRegister/InputFormAge";
import { InputFormGenre } from "./formFieldsRegister/InputFormGenre";
import { InputFormTools } from "./formFieldsRegister/InputFormTools";
import { InputFormMaster } from "./formFieldsRegister/InputFormMaster";
import { InputFormWorkExperience } from "./formFieldsRegister/InputFormWorkExperience";
import { InputFormEducation } from "./formFieldsRegister/InputFormEducation";
import { InputFormPrivateSettings } from "./formFieldsRegister/InputFormPrivateSettings";
import s from "./style/threeStepFormRegister.module.scss";
import { InputFormAboutMe } from "./formFieldsRegister/InputFormAboutMe";
import { InputFormPhone } from "./formFieldsRegister/InputFormPhone";
import { InputFormEmail } from "./formFieldsRegister/InputFormEmail";
import { InputFormWebSite } from "./formFieldsRegister/InputFormWebSite";
import { InputFormEstablishmentDescription } from "./formFieldsRegister/InputFormEstablishmentDescription";
import { InputRegFormRoomArea } from "./formFieldsRegister/InputRegFormRoomArea";
import { InputFormOpeningHours } from "./formFieldsRegister/InputFormOpeningHours";

export const ThreeStepFormRegister = () => {
 const {
  watch,
  register,
  control,
  formState: { isValid },
 } = useFormContext();

 const watchFieldName =
  watch("type_account").value === "musician";

 const watchFieldType = watch("type_account").value;
 console.log(watch("type_account").value);

 return (
  <FormLayout textLabel="Регистрация">
   <div className={s.main}>
    {watchFieldType === "group-collective" && (
     <InputFormTypeCollective
      control={control}
      name="type_collective"
      placeholder="Вид коллектива"
      options={teamTypeADS}
     />
    )}

    {watchFieldType === "performance-venue" && (
     <InputFormTypeOfInstitution control={control} />
    )}

    <InputRegFormFieldName
     control={control}
     name="name_field"
     placeholder={watchFieldName ? "Ваше имя" : "Название"}
     required={true}
    />

    <InputFormImgUpload
     register={register}
     control={control}
     name="img_upload"
    />

    <InputFormCity control={control} name="city" />

    {watchFieldName && (
     <>
      <InputFormGender control={control} name="gender" />
      <InputFormAge control={control} name="age" />
     </>
    )}

    <InputFormTools
     control={control}
     name="tool"
     typeAccount={watchFieldType}
    />

    <InputFormGenre control={control} name="genre" />

    {watchFieldName && (
     <InputFormMaster control={control} name="master" />
    )}

    {(watchFieldType === "musician" ||
     watchFieldType === "group-collective") && (
     <InputFormWorkExperience
      control={control}
      name="work_experience"
     />
    )}

    {watchFieldName && (
     <InputFormEducation
      control={control}
      name="education"
     />
    )}

    {(watchFieldType === "musician" ||
     watchFieldType === "group-collective") && (
     <InputFormPrivateSettings
      control={control}
      name="private_settings"
     />
    )}

    <div className={s.requirements}>
     <h2>Портфолио</h2>
    </div>

    <InputFormImgUpload
     register={register}
     control={control}
     name="portfolio_photo"
    />

    {(watchFieldType === "musician" ||
     watchFieldType === "group-collective") && (
     <InputFormAboutMe control={control} name="about_me" />
    )}

    <div className={s.requirements}>
     <h2>Контакты</h2>
    </div>

    <InputFormPhone control={control} name="phone" />
    <InputFormEmail
     control={control}
     name="email_contact"
    />
    <InputFormWebSite control={control} name="web_site" />

    {watchFieldType !== "musician" &&
     watchFieldType !== "group-collective" && (
      <>
       <div className={s.requirements}>
        <h2>Описание</h2>
       </div>

       {/*<InputFormOpeningHours control={control} />*/}

       {watchFieldType === "performance-venue" && (
        <InputRegFormRoomArea
         control={control}
         name="room_area"
        />
       )}
       <InputFormEstablishmentDescription
        control={control}
        name="establishment_description"
       />
      </>
     )}
   </div>

   <div className={s.btnFormWrapper}>
    <BtnInGroupeSaveCancelMui
     textCancelButton="Назад"
     textButton="Создать анкету"
     isValidInButton={!isValid}
    />
   </div>
  </FormLayout>
 );
};
