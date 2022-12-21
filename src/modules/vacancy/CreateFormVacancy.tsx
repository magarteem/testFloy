import { useFormContext } from "react-hook-form";
import { InputVacancyRequired } from "./formFieldsVacancy/InputFormRequired";
import { InputFormTools } from "./formFieldsVacancy/InputFormTools";
import { InputFormGenre } from "./formFieldsVacancy/InputFormGenre";
import { InputFormCity } from "./formFieldsVacancy/InputFormCity";
import { InputFormGender } from "./formFieldsVacancy/InputFormGender";
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
import s from "./style/createFormVacancy.module.scss";
import { BtnInGroupeSaveCancelMui } from "../../common/components/navigateButton/BtnInGroupeSaveCancelMui";

export const CreateFormVacancy = () => {
 const { control, watch } = useFormContext();

 const typeVacancy = watch("required")?.value;

 return (
  <>
   <InputVacancyRequired control={control} />
   {!!typeVacancy && (
    <>
     <InputFormTools
      control={control}
      typeVacancy={typeVacancy}
     />
     <InputFormGenre control={control} />
     <InputFormCity control={control} />

     {typeVacancy === "Музыкант" && (
      <>
       <InputFormGender control={control} />
       <InputFormFromAndToAge
        control={control}
        watch={watch}
       />
      </>
     )}

     <div className={s.requirements}>
      <h2>Требования</h2>
     </div>

     <InputFormWorkExperience control={control} />
     {typeVacancy === "Музыкант" && (
      <InputFormMaster control={control} />
     )}
     <InputFormCommit control={control} />

     <div className={s.requirements}>
      <h2>О работе</h2>
     </div>

     <InputFormPayment control={control} />
     <InputFormWorkingConditions control={control} />
     <InputFormCommitAbout control={control} />

     <div className={s.requirements}>
      <h2>Контакты</h2>
     </div>

     <InputFormPhone control={control} />
     <InputFormEmail control={control} />
     <InputFormWebSite control={control} />

     <div className={s.btnFormWrapper}>
      <BtnInGroupeSaveCancelMui
       textCancelButton="Назад"
       textButton="Создать вакансию"
      />
     </div>
    </>
   )}
  </>
 );
};
