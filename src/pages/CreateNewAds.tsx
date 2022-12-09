import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { BtnInGroupeSaveCancelMui } from "../common/components/navigateButton/BtnInGroupeSaveCancelMui";
import { FormLayoutCreateADS } from "../common/layout/formLayoutCreateADS/FormLayoutCreateADS";
import { ButtonGroupe } from "../common/mui-element/ButtonGroupe";
import { CreateFormADS } from "../modules/vacancy/CreateFormADS";
import { CreateFormVacancy } from "../modules/vacancy/CreateFormVacancy";
import s from "./styles/createNewAds.module.scss";

export const CreateNewAds = () => {
 const [checked, setCheckedButtom] = useState(true);
 const showVacancyButton = () => setCheckedButtom(true);
 const showAdsButton = () => setCheckedButtom(false);

 const methodVacancy = useForm<any>({
  mode: "onBlur",
  defaultValues: {
   required: null,
   tool: [],
   genre: [],
   city: null,
   gender: null,
   fromAge: null,
   toAge: null,
   work_experience: "",
   master: null,
   commit: "",
   payment: "",
   workingConditions: null,
   commitAbout: "",
   phone: "",
   email: "",
   web_site: "",
  },
 });
 const validVacancy = methodVacancy.formState.isValid;
 const onSubmitVacancy = (data: any) => {
  console.log("onSubmitVacancy = ", data);
 };

 const methodAds = useForm<any>({
  mode: "onBlur",
  defaultValues: {
   required: null,
   typeOfInstitution: [],

   tool: [],
   genre: [],
   city: null,
   gender: null,
   fromAge: null,
   toAge: null,
   work_experience: "",
   master: null,
   commit: "",
   payment: "",
   workingConditions: null,
   commitAbout: "",
   phone: "",
   email: "",
   web_site: "",
  },
 });
 const validAds = methodAds.formState.isValid;
 const onSubmitAds = (data: any) => {
  console.log("onSubmitAds = ", data);
 };

 return (
  <FormLayoutCreateADS
   textLabel="Создать обявление"
   closed={true}
  >
   <ButtonGroupe
    checked={checked}
    showVacancyButton={showVacancyButton}
    showAdsButton={showAdsButton}
   />

   {checked ? (
    <FormProvider {...methodVacancy}>
     <form
      className={s.formVacancy}
      onSubmit={methodVacancy.handleSubmit(onSubmitVacancy)}
     >
      <CreateFormVacancy />
      <div className={s.btnFormWrapper}>
       <BtnInGroupeSaveCancelMui
        textCancelButton="Назад"
        textButton="Создать вакансию"
        isValidInButton={!validVacancy}
       />
      </div>
     </form>
    </FormProvider>
   ) : (
    <FormProvider {...methodAds}>
     <form
      className={s.formVacancy}
      onSubmit={methodAds.handleSubmit(onSubmitAds)}
     >
      <CreateFormADS />
      <div className={s.btnFormWrapper}>
       <BtnInGroupeSaveCancelMui
        textCancelButton="Назад"
        textButton="Создать обявление"
        isValidInButton={!validAds}
       />
      </div>
     </form>
    </FormProvider>
   )}
  </FormLayoutCreateADS>
 );
};
