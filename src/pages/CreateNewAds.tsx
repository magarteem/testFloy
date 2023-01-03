import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import cancelImgIcon from "../assets/icons/arrowReturnWhite.webp";
import { FormLayoutCreateADS } from "../common/layout/formLayoutCreateADS/FormLayoutCreateADS";
import { ButtonGroupe } from "../common/mui-element/ButtonGroupe";
import {
 useAppDispatch,
 useAppSelector,
} from "../core/redux/app/hooks";
import { CreateFormADS } from "../modules/vacancy/CreateFormADS";
import { CreateFormVacancy } from "../modules/vacancy/CreateFormVacancy";
import { setDataAdsThunk } from "../modules/vacancy/setDataAdsThunk";
import s from "./styles/createNewAds.module.scss";

export const CreateNewAds = () => {
 const dispatch = useAppDispatch();
 const navigate = useNavigate();
 const myProfile = useAppSelector(
  (state) => state.userSliceReducer.profileData
 );

 const [checked, setCheckedButtom] = useState(true);
 const [titleForm, setTitleForm] = useState(
  "Создать вакансию"
 );
 const showVacancyButton = () => {
  setTitleForm("Создать вакансию");
  setCheckedButtom(true);
 };
 const showAdsButton = () => {
  setTitleForm("Создать объявление");
  setCheckedButtom(false);
 };

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

 const onSubmitVacancy = (data: any) => {
  console.log("onSubmitVacancy = ", data);
  const changeData = {
   ...data,
   typeVacancyOrAds: "vacancy",
   id: new Date().getTime(),
   publicationDate: new Date().getTime(),
   author: {
    avatar: myProfile?.avatar,
    city: myProfile?.city?.label,
    id_user: myProfile?.id_user,
    name: myProfile?.name,
    private_settings: myProfile?.private_settings,
   },
   waitingForResponse: {
    status: 0,
    userId: "",
   },
  };
  dispatch(setDataAdsThunk(changeData));
  navigate(-1);
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

 const onSubmitAds = (data: any) => {
  console.log("onSubmitAds = ", data);
  const changeData = {
   ...data,
   typeVacancyOrAds: "ads",
   id: new Date().getTime(),
   publicationDate: new Date().getTime(),
   author: {
    avatar: myProfile?.avatar,
    city: myProfile?.city?.label,
    id_user: myProfile?.id_user,
    name: myProfile?.name,
    private_settings: myProfile?.private_settings,
   },
   waitingForResponse: {
    status: 0,
    userId: "",
   },
  };

  dispatch(setDataAdsThunk(changeData));
  navigate(-1);
 };

 return (
  <FormLayoutCreateADS
   textLabel={titleForm}
   arrowCanselImgIcon={cancelImgIcon}
  >
   <ButtonGroupe
    checked={checked}
    showVacancyButton={showVacancyButton}
    showAdsButton={showAdsButton}
   />

   {checked ? (
    <FormProvider {...methodVacancy}>
     <form
      noValidate
      className={s.formVacancy}
      onSubmit={methodVacancy.handleSubmit(onSubmitVacancy)}
     >
      <CreateFormVacancy buttonSubbmitText="Создать вакансию" />
      {/*<div className={s.btnFormWrapper}>
       <BtnInGroupeSaveCancelMui
        textCancelButton="Назад"
        textButton="Создать вакансию"
        isValidInButton={!validVacancy}
       />
      </div>*/}
     </form>
    </FormProvider>
   ) : (
    <FormProvider {...methodAds}>
     <form
      noValidate
      className={s.formVacancy}
      onSubmit={methodAds.handleSubmit(onSubmitAds)}
     >
      <CreateFormADS buttonSubbmitText="Создать обявление" />
      {/*<div className={s.btnFormWrapper}>
       <BtnInGroupeSaveCancelMui
        textCancelButton="Назад"
        textButton="Создать обявление"
        isValidInButton={!validAds}
       />
      </div>*/}
     </form>
    </FormProvider>
   )}
  </FormLayoutCreateADS>
 );
};
