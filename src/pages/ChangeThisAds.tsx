import cancelImgIcon from "../assets/icons/arrowReturnWhite.webp";
import { useNavigate, useParams } from "react-router-dom";
import { FormLayoutCreateADS } from "../common/layout/formLayoutCreateADS/FormLayoutCreateADS";
import {
 useAppDispatch,
 useAppSelector,
} from "../core/redux/app/hooks";
import { TimelineCards } from "../modules/ads/types/adsSliceType";
import { CreateFormVacancy } from "../modules/vacancy/CreateFormVacancy";
import { CreateFormADS } from "../modules/vacancy/CreateFormADS";
import { FormProvider, useForm } from "react-hook-form";
import s from "./styles/changeThisAds.module.scss";
import { updateDataAdsThunk } from "../modules/vacancy/updateDataAdsThunk";

export const ChangeThisAds = () => {
 const { change_id_ads } = useParams();
 const navigate = useNavigate();
 const dispatch = useAppDispatch();
 const myProfile = useAppSelector(
  (state) => state.userSliceReducer.profileData
 );

 const dataAds: TimelineCards[] = useAppSelector(
  (state) => state.adsSliceReducer.adsList
 );

 const changeDataADS = dataAds.find(
  (x) => `${x.id}` === change_id_ads
 );

 const methodVacancy = useForm<any>({
  mode: "onBlur",
  defaultValues: {
   required: changeDataADS?.required,
   tool: changeDataADS?.tool,
   genre: changeDataADS?.genre,
   city: changeDataADS?.city,
   gender: changeDataADS?.gender,
   fromAge: changeDataADS?.fromAge,
   toAge: changeDataADS?.toAge,
   work_experience: changeDataADS?.work_experience,
   master: changeDataADS?.master,
   commit: changeDataADS?.commit,
   payment: changeDataADS?.payment,
   workingConditions: changeDataADS?.workingConditions,
   commitAbout: changeDataADS?.commitAbout,
   phone: changeDataADS?.phone,
   email: changeDataADS?.email,
   web_site: changeDataADS?.web_site,
  },
 });

 const onSubmitVacancy = (data: any) => {
  console.log(data);
  const changeData = {
   ...data,
   typeVacancyOrAds: changeDataADS?.typeVacancyOrAds,
   id: changeDataADS?.id,
   publicationDate: changeDataADS?.publicationDate,
   author: {
    avatar: myProfile?.avatar,
    city: myProfile?.city?.label,
    id_user: myProfile?.id_user,
    name: myProfile?.name,
    private_settings: myProfile?.private_settings,
   },
   waitingForResponse: changeDataADS?.waitingForResponse,
  };

  dispatch(updateDataAdsThunk(changeData));
  navigate(-1);
 };

 const methodAds = useForm<any>({
  mode: "onBlur",
  defaultValues: {
   required: changeDataADS?.required,
   typeOfInstitution: changeDataADS?.typeOfInstitution,
   tool: changeDataADS?.tool,
   genre: changeDataADS?.genre,
   city: changeDataADS?.city,
   gender: changeDataADS?.gender,
   fromAge: changeDataADS?.fromAge,
   toAge: changeDataADS?.toAge,
   work_experience: changeDataADS?.work_experience,
   master: changeDataADS?.master,
   commit: changeDataADS?.commit,
   payment: changeDataADS?.payment,
   workingConditions: changeDataADS?.workingConditions,
   commitAbout: changeDataADS?.commitAbout,
   phone: changeDataADS?.phone,
   email: changeDataADS?.email,
   web_site: changeDataADS?.web_site,
  },
 });

 const onSubmitAds = (data: any) => {
  console.log(data);
  const changeData = {
   ...data,
   typeVacancyOrAds: changeDataADS?.typeVacancyOrAds,
   id: changeDataADS?.id,
   publicationDate: changeDataADS?.publicationDate,
   author: {
    avatar: myProfile?.avatar,
    city: myProfile?.city?.label,
    id_user: myProfile?.id_user,
    name: myProfile?.name,
    private_settings: myProfile?.private_settings,
   },
   waitingForResponse: changeDataADS?.waitingForResponse,
  };
  dispatch(updateDataAdsThunk(changeData));
  navigate(-1);
 };

 if (!changeDataADS) return <h1>Not Found this ADS ...</h1>;

 return (
  <FormLayoutCreateADS
   textLabel="Редактировать"
   arrowCanselImgIcon={cancelImgIcon}
  >
   {changeDataADS.typeVacancyOrAds === "vacancy" ? (
    <FormProvider {...methodVacancy}>
     <form
      noValidate
      className={s.formVacancy}
      onSubmit={methodVacancy.handleSubmit(onSubmitVacancy)}
     >
      <CreateFormVacancy buttonSubbmitText="Редактировать вакансию" />
     </form>
    </FormProvider>
   ) : (
    <FormProvider {...methodAds}>
     <form
      noValidate
      className={s.formVacancy}
      onSubmit={methodAds.handleSubmit(onSubmitAds)}
     >
      <CreateFormADS buttonSubbmitText="Редактировать объявление" />
     </form>
    </FormProvider>
   )}
  </FormLayoutCreateADS>
 );
};
