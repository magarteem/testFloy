import { useFormContext } from "react-hook-form";

import s from "./style/createFormADS.module.scss";
import { InputFormRequiredAds } from "./formFieldsVacancy/InputFormRequiredAds";
import { InputFormTypeOfInstitution } from "./formFieldsVacancy/InputFormTypeOfInstitution";
import { InputFormFromAndToAge } from "./formFieldsVacancy/InputFormFromAge";
import { InputFormWorkExperience } from "./formFieldsVacancy/InputFormWorkExperience";
import { InputFormMaster } from "./formFieldsVacancy/InputFormMaster";
import { InputFormCommit } from "./formFieldsVacancy/InputFormCommit";
import { InputFormPayment } from "./formFieldsVacancy/InputFormPayment";
import { InputFormWorkingConditions } from "./formFieldsVacancy/InputFormWorkingConditions";
import { InputFormCommitAbout } from "./formFieldsVacancy/InputFormCommitAbout";
import { InputFormPhone } from "./formFieldsVacancy/InputFormPhone";
import { InputFormEmail } from "./formFieldsVacancy/InputFormEmail";
import { InputFormWebSite } from "./formFieldsVacancy/InputFormWebSite";
import { InputFormGenre } from "./formFieldsVacancy/InputFormGenre";
import { InputFormGender } from "./formFieldsVacancy/InputFormGender";
import { InputFormCity } from "./formFieldsVacancy/InputFormCity";
import { InputFormTools } from "./formFieldsVacancy/InputFormTools";
import { BtnInGroupeSaveCancelMui } from "../../common/components/navigateButton/BtnInGroupeSaveCancelMui";
import { InputFormWorkingConditionsTextFields } from "./formFieldsVacancy/InputFormWorkingConditionsTextFields";

export const CreateFormADS = () => {
 const { control, watch } = useFormContext();
 const typeAds = watch("required")?.value;

 return (
  <>
   <InputFormRequiredAds control={control} />
   {!!typeAds && (
    <>
     {typeAds === "Работу" && (
      <InputFormTypeOfInstitution control={control} />
     )}
     <InputFormTools
      control={control}
      typeVacancy={typeAds}
     />
     <InputFormGenre control={control} />
     <InputFormCity control={control} />
     {typeAds === "Музыканта" && (
      <>
       <InputFormGender control={control} />
       <InputFormFromAndToAge
        control={control}
        watch={watch}
       />
      </>
     )}

     <div className={s.requirements}>
      {typeAds === "Работу" ? (
       <h2>О себе</h2>
      ) : (
       <h2>Требования</h2>
      )}
     </div>

     <InputFormWorkExperience control={control} />
     {typeAds !== "Коллектив" && (
      <InputFormMaster control={control} />
     )}
     <InputFormCommit control={control} typeAds={typeAds} />

     <div className={s.requirements}>
      {typeAds === "Работу" ? (
       <h2>О работе</h2>
      ) : (
       <h2>О сотрудничестве</h2>
      )}
     </div>

     {typeAds === "Работу" && (
      <InputFormPayment control={control} />
     )}

     {typeAds === "Работу" ? (
      <InputFormWorkingConditions control={control} />
     ) : (
      <InputFormWorkingConditionsTextFields
       control={control}
      />
     )}

     {typeAds === "Работу" && (
      <InputFormCommitAbout control={control} />
     )}

     <div className={s.requirements}>
      <h2>Контакты</h2>
     </div>

     <InputFormPhone control={control} />
     <InputFormEmail control={control} />
     <InputFormWebSite control={control} />

     <div className={s.btnFormWrapper}>
      <BtnInGroupeSaveCancelMui
       textCancelButton="Назад"
       textButton="Создать обявление"
      />
     </div>
    </>
   )}
  </>
 );
};
