import arrow_back from "../assets/icons/arrow_back.svg";
import shareIcons from "../assets/icons/shareIcons.svg";
import avatar_1 from "../assets/images/avatar_1.webp";
import {
 useOutletContext,
 useParams,
} from "react-router-dom";
import { HeaderStylesWrapper } from "../common/layout/headerStylesWrapper/HeaderStylesWrapper";
import { LongMenu } from "../common/mui-element/LongMenu";
import {
 InitialStateAdsType,
 TimelineCards,
} from "../modules/ads/types/adsSliceType";
import { SkillsLayoutTools } from "../common/components/profile/aboutProfile/skills/SkillsLayoutTools";
import { SkillsLayoutGenre } from "../common/components/profile/aboutProfile/skills/SkillsLayoutGenre";
import { ButtonSubmitMui } from "../common/mui-element/ButtonSubmitMui";
import { useAppDispatch } from "../core/redux/app/hooks";
import { setDataNotificationThunk } from "../modules/notification/setDataNotificationThunk";
import { calculateAge } from "../helpers/calculateAge";
import { StylesFullScreen } from "../common/layout/stylesFullScreen/StylesFullScreen";
import cn from "classnames";
import s from "./styles/adsPageOne.module.scss";
import { InitialStateUserType } from "../modules/user/types/userSliceType";
import { Received } from "../common/components/notification/waitinActionButton/action/Received";
import { Pending } from "../common/components/notification/waitinActionButton/action/Pending";
import { Rejected } from "../common/components/notification/waitinActionButton/action/Rejected";
import { RespondButton } from "../common/components/ads/respondButton/RespondButton";
import { updateStatusAds } from "../modules/ads/adsSlice";

export const AdsPageOne = () => {
 // const dispatch = useAppDispatch();
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

 return (
  <StylesFullScreen>
   <div className={s.adsPageOne}>
    <HeaderStylesWrapper
     cancelImgIcon={arrow_back}
     textLabel="Обявления"
     // anyIconsFirst={share}
     share={shareIcons}
     tsxElement={<LongMenu />}
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

     <div className={s.educatione}>
      <div className={s.itemImg}>
       <img src={avatar_1} alt={avatar_1} />
      </div>
      <div className={s.text}>
       <p>Караоке-бар "Огурцы"</p>
       <p>Омск, ул. Крапоткинская, 21</p>
      </div>
     </div>

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
     {
      //if(dataOneNews?.author?.id_user === profile.id_user) return null
      //else {
      //  if (dataOneNews.waitingForResponse.userId !== profile.id_use) return <RespondButton />
      //else if (dataOneNews.waitingForResponse.status === 0 ) return  <Pending />
      //else if (dataOneNews.waitingForResponse.status === 1 ) return  <Received status={dataOneNews.waitingForResponse} />
      //else if (dataOneNews.waitingForResponse.status === 2 ) return  <Rejected />
      //}
     }

     {profile.id_user !== dataOneNews?.author?.id_user &&
      profile.id_user !==
       dataOneNews.waitingForResponse.userId && (
       <RespondButton
        respondAdsData={dataOneNews}
        profile={profile}
       />
       //{/*<ButtonSubmitMui
       // onClick={() => respondAds(dataOneNews)}
       // isValidInButton={false}
       // textButton="Откликнуться"
       ///>*/}
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
