import { useForm } from "react-hook-form";
import s from "./style/filterFormsAds.module.scss";
import { InputFormCity } from "./formFieldsAds/InputFormCity";
import { InputFormGenre } from "./formFieldsAds/InputFormGenre";
import { InputFormTools } from "./formFieldsAds/InputFormTools";
import { ButtonSubmitMui } from "../../common/mui-element/ButtonSubmitMui";
import { InputFormWhoIsLookingVacancy } from "./formFieldsAds/InputFormWhoIsLookingVacancy";
import { InputFormTypeOfInstitution } from "./formFieldsAds/InputFormTypeOfInstitution";
import { FormsFilterType } from "./types/formsFilterType";
import { useLocation } from "react-router-dom";
import { IconButton } from "@mui/material";
import { optionsTypeAccount } from "../authorization/service/BD";
import {
 requiredADS,
 requiredVacancy,
} from "../vacancy/service/createVacancyBD";
import { InputFormFromAndToAge } from "./formFieldsAds/InputFormFromAge";
import { InputFormGender } from "./formFieldsAds/InputFormGender";
import { InputFormWhoIsLookingAds } from "./formFieldsAds/InputFormWhoIsLookingAds";
import { InputFormWhoIsLookingQestionnaire } from "./formFieldsAds/InputFormWhoIsLookingQestionnaire";
import { SelectElementMui } from "../../common/mui-element/SelectElementMui";

interface FilterFormsAdsType {
 handleClose: () => void;
}

export const FilterFormsAds = ({
 handleClose,
}: FilterFormsAdsType) => {
 let location = useLocation();
 const locationTabs = location.pathname;

 const { control, handleSubmit, watch, reset, setValue } =
  useForm<FormsFilterType>({
   mode: "onBlur",
   defaultValues: {
    city: null,
    tool: [],
    genre: [],
    gender: null,
    typeOfInstitution: [],
    who_is_looking_vacancy: null,
    who_is_looking_vacancy_partner: null,
    who_is_looking_ads: null,
    who_is_looking_questionnaire: null,
    type_account: null,
    fromAge: null,
    toAge: null,
   },
  });

 const resetFormFields = () => reset();
 const onSubmit = (data: FormsFilterType) => {
  console.log("onSubmitAds = ", data);
  handleClose();
 };

 const who_is_looking_vacancy = watch(
  "who_is_looking_vacancy"
 )?.value;

 return (
  <div className={s.filterForAds}>
   <div className={s.toutchLine} />

   <form noValidate onSubmit={handleSubmit(onSubmit)}>
    <div className={s.headerForms}>
     <h1>Фильтр</h1>
     <IconButton
      sx={{
       borderRadius: "10px",
       padding: "13px",
      }}
     >
      <h5 onClick={resetFormFields}>Очистить</h5>
     </IconButton>
    </div>

    <div className={s.gawField}>
     <InputFormCity control={control} name="city" />
     <InputFormTools control={control} name="tool" />
     <InputFormGenre control={control} name="genre" />

     <h2 className={s.filterForVacancy}>
      {locationTabs === "/ads"
       ? "Фильтр по вакансиям"
       : locationTabs === "/ads/ads-list"
       ? "Фильтр по объявлениям"
       : "Фильтр по анкетам"}
     </h2>

     {locationTabs === "/ads" ? (
      <InputFormWhoIsLookingVacancy
       control={control}
       placeholder="Кто ищет?"
       name="who_is_looking_vacancy"
       options={optionsTypeAccount}
      />
     ) : locationTabs === "/ads/ads-list" ? (
      <InputFormWhoIsLookingAds
       control={control}
       placeholder="Что/кого ищут?"
       name="who_is_looking_ads"
       options={requiredADS}
      />
     ) : (
      <InputFormWhoIsLookingQestionnaire
       control={control}
       placeholder="Тип аккаунта"
       name="who_is_looking_questionnaire"
       options={optionsTypeAccount}
      />
     )}

     {locationTabs === "/ads" &&
      who_is_looking_vacancy ===
       "Заведение / Площадка для выступлений" && (
       <>
        <InputFormTypeOfInstitution control={control} />
        <InputFormWhoIsLookingVacancy
         control={control}
         placeholder="Кого ищет?"
         name="who_is_looking_vacancy_partner"
         options={requiredVacancy}
         //options={optionsTypeAccountWhoos}
        />
       </>
      )}

     {locationTabs !== "/ads" &&
      locationTabs === "/ads/ads-list" &&
      watch("who_is_looking_ads")?.label ===
       "Музыканта" && (
       <>
        <InputFormGender control={control} name="gender" />
        <InputFormFromAndToAge
         watch={watch}
         control={control}
         nameFromAge="fromAge"
         toAge="toAge"
        />
       </>
      )}

     {locationTabs !== "/ads" &&
      locationTabs === "/ads/questionnaire-list" &&
      watch("who_is_looking_questionnaire")?.label ===
       "Музыкант" && (
       <>
        <InputFormGender control={control} name="gender" />
        <InputFormFromAndToAge
         watch={watch}
         control={control}
         nameFromAge="fromAge"
         toAge="toAge"
        />
       </>
      )}
    </div>

    <div className={s.btnWrapper}>
     <ButtonSubmitMui
      isValidInButton={false}
      textButton="Показать результаты"
     />
    </div>
   </form>
  </div>
 );
};
