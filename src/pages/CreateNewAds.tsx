import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { BtnInGroupeSaveCancelMui } from "../common/components/navigateButton/BtnInGroupeSaveCancelMui";
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
 console.log("11111111");
 console.log("myProfile = ", myProfile);
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

 const validAds = methodAds.formState.isValid;

 const onSubmitAds = (data: any) => {
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
   },
   waitingForResponse: {
    status: 0,
    userId: "",
   },
  };

  dispatch(setDataAdsThunk(changeData));
  console.log("onSubmitAds = ", data);
  navigate(-1);
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
