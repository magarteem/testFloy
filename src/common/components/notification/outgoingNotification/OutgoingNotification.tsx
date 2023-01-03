import { useOutletContext } from "react-router-dom";
import { AnnouncementCard } from "../../ads/announcementCard/AnnouncementCard";
import { AdsLayoutItem } from "../../../layout/adsLayoutItem/AdsLayoutItem";
import { RouteNames } from "../../../../core/router/RouteNames";
import { InitialStateAdsType } from "../../../../modules/ads/types/adsSliceType";
import { Pending } from "../waitinActionButton/action/Pending";
import { Received } from "../waitinActionButton/action/Received";
import { Rejected } from "../waitinActionButton/action/Rejected";
import s from "./outgoingNotification.module.scss";

export const OutgoingNotification = () => {
 const data: InitialStateAdsType = useOutletContext();

 return (
  <>
   {data.adsList.map((x) => {
    return (
     <AdsLayoutItem key={x.id}>
      <AnnouncementCard
       x={x}
       link={`${RouteNames.NOTIFICATION}/${x.id}`}
      />

      <div className={s.pending}>
       {x.waitingForResponse.status === 0 && <Pending />}
       {x.waitingForResponse.status === 1 && (
        <Received status={x.waitingForResponse} />
       )}
       {x.waitingForResponse.status === 2 && <Rejected />}
      </div>
     </AdsLayoutItem>
    );
   })}
  </>
 );
};
