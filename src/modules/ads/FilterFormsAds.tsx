import { useForm } from "react-hook-form";
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
 teamTypeADS,
} from "../vacancy/service/createVacancyBD";
import { InputFormFromAndToAge } from "./formFieldsAds/InputFormFromAge";
import { InputFormGender } from "./formFieldsAds/InputFormGender";
import { InputFormWhoIsLookingAds } from "./formFieldsAds/InputFormWhoIsLookingAds";
import { InputFormWhoIsLookingQestionnaire } from "./formFieldsAds/InputFormWhoIsLookingQestionnaire";
import s from "./style/filterFormsAds.module.scss";
import { InputFormMaster } from "./formFieldsAds/InputFormMaster";
import { FilterLayoutWrapper } from "../../common/layout/filterLayoutWraper/FilterLayoutWrapper";
import { InputFormFromAgeTextFieldTEST } from "./formFieldsAds/InputFormFromAgeTextFieldTEST";

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
    fromAge: null,
    toAge: null,
    master: null,
   },
  });

 const watch_vacancy_partner = watch(
  "who_is_looking_vacancy_partner"
 )?.label;
 const watch_looking_ads = watch(
  "who_is_looking_ads"
 )?.label;
 const watch_questionnaire = watch(
  "who_is_looking_questionnaire"
 )?.label;

 const resetFormFields = () => reset();
 const onSubmit = (data: FormsFilterType) => {
  console.log("onSubmitAds = ", data);
  handleClose();
 };

 return (
  <FilterLayoutWrapper handleClose={handleClose}>
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
       required={true}
       control={control}
       placeholder="Тип аккаунта"
       name="who_is_looking_questionnaire"
       options={optionsTypeAccount}
      />
     )}

     {locationTabs === "/ads" && (
      <>
       <InputFormWhoIsLookingVacancy
        control={control}
        placeholder="Кого ищет?"
        name="who_is_looking_vacancy_partner"
        options={requiredVacancy}
       />
      </>
     )}

     {locationTabs === "/ads" &&
      (watch_vacancy_partner === "Коллектив" ? (
       <InputFormWhoIsLookingVacancy
        control={control}
        placeholder="Вид коллектива"
        name="typeOfInstitution"
        options={teamTypeADS}
       />
      ) : (
       watch_vacancy_partner === "Музыкант" && (
        <WatchMusician control={control} watch={watch} />
       )
      ))}

     {locationTabs === "/ads/ads-list" &&
      (watch_looking_ads === "Коллектив" ? (
       <InputFormWhoIsLookingVacancy
        control={control}
        placeholder="Вид коллектива"
        name="typeOfInstitution"
        options={teamTypeADS}
       />
      ) : watch_looking_ads === "Музыканта" ? (
       <WatchMusician control={control} watch={watch} />
      ) : watch_looking_ads === "Работу" ? (
       <InputFormTypeOfInstitution
        control={control}
        placeholder="Место работы"
       />
      ) : null)}

     {locationTabs === "/ads/questionnaire-list" &&
      (watch_questionnaire === "Музыкант" ? (
       <WatchMusician control={control} watch={watch} />
      ) : watch_questionnaire === "Группа / Коллектив" ? (
       <InputFormWhoIsLookingVacancy
        control={control}
        placeholder="Вид коллектива"
        name="typeOfInstitution"
        options={teamTypeADS}
       />
      ) : watch_questionnaire ===
        "Заведение / Площадка для выступлений" ? (
       <InputFormTypeOfInstitution
        control={control}
        placeholder="Тип заведения"
       />
      ) : null)}
    </div>

    <div className={s.btnWrapper}>
     <ButtonSubmitMui
      isValidInButton={false}
      textButton="Показать результаты"
     />
    </div>
   </form>
  </FilterLayoutWrapper>
 );
};

interface WatchMusicianType {
 watch: any;
 control: any;
}

const WatchMusician = ({
 watch,
 control,
}: WatchMusicianType) => {
 return (
  <>
   <InputFormGender control={control} name="gender" />
   {/*<InputFormFromAndToAge
    watch={watch}
    control={control}
    nameFromAge="fromAge"
    toAge="toAge"
   />*/}
   <InputFormFromAgeTextFieldTEST
    control={control}
    watch={watch}
   />
   <InputFormMaster control={control} />
  </>
 );
};
