import arrow_back from "../assets/icons/arrow_back.svg";
import shareIcons from "../assets/icons/shareIcons.svg";
import avatar_1 from "../assets/images/avatar_1.webp";
import {
 useOutletContext,
 useParams,
} from "react-router-dom";
import { HeaderStylesWrapper } from "../common/layout/headerStylesWrapper/HeaderStylesWrapper";
import { LongMenu } from "../common/mui-element/LongMenu";
import { InitialStateAdsType } from "../modules/ads/types/adsSliceType";
import cn from "classnames";
import s from "./styles/incomingNotificationPageOne.module.scss";
import { HeaderAds } from "../common/components/ads/headerAds/HeaderAds";
import { EducationeCards } from "../common/components/profile/aboutProfile/skills/EducationeCards";
import { SkillsLayoutTools } from "../common/components/profile/aboutProfile/skills/SkillsLayoutTools";
import { SkillsLayoutGenre } from "../common/components/profile/aboutProfile/skills/SkillsLayoutGenre";
import { ButtonSubmitMui } from "../common/mui-element/ButtonSubmitMui";

export const IncomingNotificationPageOne = () => {
 const data: InitialStateAdsType = useOutletContext();

 const { id_inComingNotification } = useParams();
 const dataOneNews = data.adsList?.find(
  (x) => `${x.id}` === id_inComingNotification
 );

 if (!dataOneNews) return <h1>Loading ...</h1>;

 const looking = ["Музыкант", "Коллектив"].indexOf(
  dataOneNews.required.label
 );

 const calculateAge = (value: Date | number) =>
  `${
   new Date().getFullYear() - new Date(value).getFullYear()
  }`;
 return (
  <div className={s.incomingNotificationPageOne}>
   <HeaderStylesWrapper
    cancelImgIcon={arrow_back}
    textLabel="Обявления"
    anyIconsFirst={{ img: shareIcons, action: "" }}
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

    <div className={s.about}>{dataOneNews.commitAbout}</div>

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

    <div className={s.respond}>
     <ButtonSubmitMui
      isValidInButton={false}
      textButton="Откликнуться11111111"
     />
    </div>
   </section>
  </div>
 );
};
