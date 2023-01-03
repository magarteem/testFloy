import arrow_back from "../assets/icons/arrow_back.svg";
import shareIcons from "../assets/icons/shareIcons.svg";
import moreButtonCircle from "../assets/icons/more-button-circle.svg";
import {
 Link,
 Navigate,
 useOutletContext,
 useParams,
} from "react-router-dom";
import { HeaderStylesWrapper } from "../common/layout/headerStylesWrapper/HeaderStylesWrapper";
import { LongMenu } from "../common/mui-element/LongMenu";
import { InitialStateAdsType } from "../modules/ads/types/adsSliceType";
import { SkillsLayoutTools } from "../common/components/profile/aboutProfile/skills/SkillsLayoutTools";
import { SkillsLayoutGenre } from "../common/components/profile/aboutProfile/skills/SkillsLayoutGenre";
import { useAppDispatch } from "../core/redux/app/hooks";
import { StylesFullScreen } from "../common/layout/stylesFullScreen/StylesFullScreen";
import { InitialStateUserType } from "../modules/user/types/userSliceType";
import { Received } from "../common/components/notification/waitinActionButton/action/Received";
import { Pending } from "../common/components/notification/waitinActionButton/action/Pending";
import { Rejected } from "../common/components/notification/waitinActionButton/action/Rejected";
import { RespondButton } from "../common/components/ads/respondButton/RespondButton";
import { RouteNames } from "../core/router/RouteNames";
import { OptionLongMenuType } from "../modules/timeLine/types/timlineSliceType";
import { deleteAdsThunk } from "../modules/ads/deleteAdsThunk";
import { getThisPageURL } from "../helpers/getThisPageURL";
import { calculateAge } from "../helpers/calculateAge";
import Avatar from "@mui/material/Avatar";
import cn from "classnames";
import s from "./styles/adsPageOne.module.scss";

export const AdsPageOne = () => {
 const dispatch = useAppDispatch();
 const [dataAdsList, profile]: [
  InitialStateAdsType,
  InitialStateUserType
 ] = useOutletContext();

 const { id_ads } = useParams();
 const dataOneNews = dataAdsList.adsList?.find(
  (x) => `${x.id}` === id_ads
 );

 if (!dataOneNews) return <h1>Loading ...</h1>;

 const looking = [
  "Музыкант",
  "Коллектив",
  "Звукорежиссёр",
 ].indexOf(dataOneNews.required.label);

 // const respondAds = (adsItem: TimelineCards) => {
 //  dispatch(setDataNotificationThunk(adsItem));
 //  dispatch(
 //   updateStatusAds({
 //    idAds: adsItem.id,
 //    userId: profile.id_user,
 //    status: 0,
 //   })
 //  );
 // };

 const changeThisNews = () => {
  <Navigate to={RouteNames.CHANGE_THIS_NEWS} />;
 };

 const deleteThisADS = () =>
  id_ads && dispatch(deleteAdsThunk(+id_ads));

 // вынести в useOptionsLongMenu
 const options: OptionLongMenuType[] = [
  {
   label: "Редактировать",
   link: `${RouteNames.ADS}/${RouteNames.ADS_CHANGE_THIS_ADS}/${id_ads}`,
   action: changeThisNews,
  },
  { label: "Архивировать", link: "", action: () => {} },
  {
   label: "Скопировать ссылку",
   link: "",
   action: () => getThisPageURL(),
  },
  {
   label: "Удалить",
   link: RouteNames.ADS,
   action: deleteThisADS,
  },
 ];

 return (
  <StylesFullScreen>
   <div className={s.adsPageOne}>
    <HeaderStylesWrapper
     cancelImgIcon={arrow_back}
     textLabel="Обявления"
     share={shareIcons}
     tsxElement={
      <LongMenu
       moreButtonCircle={moreButtonCircle}
       options={options}
      />
     }
    />

    <section className={s.bodyAdsPageOne}>
     <div className={s.headerAds}>
      <div className={s.title}>
       <h2>
        {`${looking > -1 ? "Требуется" : "Ищу"}
     ${dataOneNews.required.label.toLowerCase()}`}
       </h2>
       {dataOneNews.payment ? (
        <p>{dataOneNews.payment}</p>
       ) : (
        <p>Не коммерческое</p>
       )}

       {dataOneNews.workingConditions && (
        <p>{dataOneNews.workingConditions.label}</p>
       )}
      </div>
     </div>

     <div className={s.about}>
      {dataOneNews.commitAbout}
     </div>

     {dataOneNews.gender && (
      <div className={s.styleAbout}>
       <span className={s.titleSpan}>Пол:</span>
       {dataOneNews.gender.label}
      </div>
     )}

     <div className={s.styleAbout}>
      <span className={s.titleSpan}>Возраст:</span>
      {` ${calculateAge(dataOneNews.toAge)}-${calculateAge(
       dataOneNews.fromAge
      )}`}
     </div>

     {dataOneNews.work_experience && (
      <div className={s.styleAbout}>
       <span className={s.titleSpan}>
        Опыт работы/выступлений:
       </span>
       {typeof dataOneNews.work_experience == "string" && (
        <span>{dataOneNews.work_experience}</span>
       )}
      </div>
     )}

     {dataOneNews.master && (
      <div className={s.styleAbout}>
       <span className={s.titleSpan}>Мастерство:</span>
       {dataOneNews.master.label}
      </div>
     )}

     {dataOneNews.commit && (
      <div className={s.styleAbout}>
       <span className={s.titleSpan}>Комментарий:</span>
       {dataOneNews.commit}
      </div>
     )}

     <Link
      to={
       dataOneNews.author.private_settings.value !==
       "closed-profile"
        ? `${RouteNames.OTHER_PROFILE_USER}/${dataOneNews.author.id_user}`
        : "#"
      }
      className={s.educatione}
     >
      <div className={s.itemImg}>
       <Avatar
        alt="Remy Sharp"
        src={dataOneNews.author.avatar}
       />
      </div>
      <div className={s.text}>
       <p>{dataOneNews.author.name}</p>
       <p>{dataOneNews.author.city.label}</p>
      </div>
     </Link>

     <div className={cn(s.reStyleImportant, s.border)}>
      <SkillsLayoutTools
       skillsDataItem={dataOneNews.tool}
       skillsCategoryTitle="Инструменты"
      />
     </div>

     <div className={s.reStyleImportant}>
      <SkillsLayoutGenre
       skillsDataItem={dataOneNews.genre}
       skillsCategoryTitle="Жанр"
      />
     </div>

     {/*// мой профиль = profile.id_use
      // автор поста = dataOneNews?.author?.id_user*/}

     {profile.id_user !== dataOneNews?.author?.id_user &&
      profile.id_user !==
       dataOneNews.waitingForResponse.userId && (
       <RespondButton
        respondAdsData={dataOneNews}
        profile={profile}
       />
      )}

     {profile.id_user ===
      dataOneNews.waitingForResponse.userId && (
      <div className={s.pending}>
       {dataOneNews.waitingForResponse.status === 0 && (
        <Pending />
       )}
       {dataOneNews.waitingForResponse.status === 1 && (
        <Received status={dataOneNews.waitingForResponse} />
       )}
       {dataOneNews.waitingForResponse.status === 2 && (
        <Rejected />
       )}
      </div>
     )}
    </section>
   </div>
  </StylesFullScreen>
 );
};
