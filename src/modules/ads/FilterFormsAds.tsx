import React, { useEffect } from "react";
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
import { optionsTypeAccountWhoos } from "./service/selectFilterOptionsBD";
import { optionsTypeAccount } from "../authorization/service/BD";
import { requiredADS } from "../vacancy/service/createVacancyBD";
import { InputFormFromAndToAge } from "./formFieldsAds/InputFormFromAge";
import { InputFormGender } from "./formFieldsAds/InputFormGender";
import { InputFormWhoIsLookingAds } from "./formFieldsAds/InputFormWhoIsLookingAds";
import { InputFormWhoIsLookingQestionnarie } from "./formFieldsAds/InputFormWhoIsLookingQestionnarie";

const defaultValues = {
 city: {},
 tool: [],
 genre: [],
 typeOfInstitution: [],
 who_is_looking_vacancy: {},
 who_is_looking_vacancy_partner: {},
 who_is_looking_ads: {},
 who_is_looking_qestionnarie: {},
 type_account: null,
 fromAge: null,
 toAge: null,
};

interface FilterFormsAdsType {
 handleClose: () => void;
}
export const FilterFormsAds = ({
 handleClose,
}: FilterFormsAdsType) => {
 let location = useLocation();
 const locationTabs = location.pathname;

 const { control, handleSubmit, watch, reset, setValue } =
  useForm<any>({
   mode: "onBlur",
   defaultValues,
  });
 console.log(watch("who_is_looking_ads").value);
 const onSubmit = (data: FormsFilterType) => {
  console.log("onSubmitAds = ", data);
  handleClose();
 };

 const who_is_looking_vacancy = watch(
  "who_is_looking_vacancy"
 ).value;

 const t = () => {
  reset();
 };
 // const t = () => {
 //  reset({
 //   ...defaultValues,
 //  });
 // };
 // const t = () => {
 //  setValue([
 //   { city: { value: "", label: "" } },
 //   { who_is_looking_vacancy: { value: "", label: "" } },
 //  ]);
 // };
 // const t = () => {
 //  setValue([
 //   { city: {} },
 //   { tool: [] },
 //   { genre: [] },
 //   { typeOfInstitution: [] },
 //   { who_is_looking_vacancy: {} },
 //   { who_is_looking_vacancy_partner: {} },
 //   { who_is_looking_ads: {} },
 //   { who_is_looking_qestionnarie: {} },
 //   { type_account: null },
 //   { fromAge: null },
 //   { toAge: null },
 //  ]);
 // };

 //
 // setValue([
 //            { name: userData.name },
 //            { phone: userData.phone }
 //        ]);
 //
 return (
  <div className={s.filterForAds}>
   <div className={s.toutchLine} />

   <form noValidate onSubmit={handleSubmit(onSubmit)}>
    <div className={s.headerForms}>
     <h1>Фильтр</h1>
     <h5 onClick={t}>Очистить</h5>
    </div>

    <div className={s.gawField}>
     <InputFormCity control={control} />
     <InputFormTools control={control} />
     <InputFormGenre control={control} />

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
      <InputFormWhoIsLookingQestionnarie
       control={control}
       placeholder="Тип аккаунта"
       name="who_is_looking_qestionnarie"
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
         options={optionsTypeAccountWhoos}
        />
       </>
      )}

     {locationTabs !== "/ads" &&
      locationTabs === "/ads/ads-list" &&
      watch("who_is_looking_ads").label === "Музыканта" && (
       <>
        <InputFormGender control={control} />
        <InputFormFromAndToAge
         watch={watch}
         control={control}
        />
       </>
      )}

     {locationTabs !== "/ads" &&
      locationTabs === "/ads/questionnaire-list" &&
      watch("who_is_looking_qestionnarie").label ===
       "Музыкант" && (
       <>
        <InputFormGender control={control} />
        <InputFormFromAndToAge
         watch={watch}
         control={control}
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
