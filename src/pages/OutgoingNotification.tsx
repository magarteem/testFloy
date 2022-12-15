import hourIcons from "../assets/icons/hourIcons.svg";
import lockOpen from "../assets/icons/lockOpen.svg";
import lockClosed from "../assets/icons/lockClosed.svg";
import { Link, useOutletContext } from "react-router-dom";
import { AnnouncementCard } from "../common/components/ads/announcementCard/AnnouncementCard";
import { AnnouncementFeed } from "../common/components/ads/announcementFeed/AnnouncementFeed";
import { AdsLayoutItem } from "../common/layout/adsLayoutItem/AdsLayoutItem";
import { RibbonLayout } from "../common/layout/ribbonLayout/RibbonLayout";
import { RouteNames } from "../core/router/RouteNames";
import { InitialStateAdsType } from "../modules/ads/types/adsSliceType";
import { ButtonSubmitMui } from "../common/mui-element/ButtonSubmitMui";
import s from "./styles/outgoingNotification.module.scss";

export const OutgoingNotification = () => {
 const data: InitialStateAdsType = useOutletContext();

 return (
  <>
   {data.adsList.map((x) => {
    return (
     <AdsLayoutItem key={x.id}>
      <Link
       to={`${RouteNames.OUT_GOING_NOTIFICATION}/${x.id}`}
      >
       <AnnouncementCard x={x} />
      </Link>

      <div className={s.pending}>
       {x.waitingForResponse.status === 0 && (
        <div className={s.process}>
         <img src={hourIcons} alt="hourIcons" />
         <span>В ожидании ответа</span>
        </div>
       )}

       {x.waitingForResponse.status === 1 && (
        <div className={s.received}>
         <div className={s.status}>
          <img src={lockOpen} alt="lockOpen" />
          <span>Принята</span>
         </div>

         <Link to="" className={s.showAuthor}>
          <ButtonSubmitMui
           textButton="Посмотреть анкету"
           isValidInButton={false}
          />
         </Link>
        </div>
       )}

       {x.waitingForResponse.status === 2 && (
        <div className={s.rejected}>
         <img src={lockClosed} alt="lockClosed" />
         <span>Отклонена</span>
        </div>
       )}
      </div>
     </AdsLayoutItem>
    );
   })}
  </>
 );
};
