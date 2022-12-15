import { Link } from "react-router-dom";
import { RouteNames } from "../../../../core/router/RouteNames";
import { TimelineCards } from "../../../../modules/ads/types/adsSliceType";
import { AdsLayoutItem } from "../../../layout/adsLayoutItem/AdsLayoutItem";
import { RibbonLayout } from "../../../layout/ribbonLayout/RibbonLayout";
import { ButtonSubmitMui } from "../../../mui-element/ButtonSubmitMui";
import { AnnouncementCard } from "../announcementCard/AnnouncementCard";
import s from "./announcementFeed.module.scss";

interface AnnouncementFeedType {
 adsList: TimelineCards[];
}

export const AnnouncementFeed = ({
 adsList,
}: AnnouncementFeedType) => {
 return (
  <RibbonLayout>
   {adsList.map((x) => {
    return (
     <div className={s.listAds} key={x.id}>
      {/* s.listAds уместит  в лайоут */}
      <AdsLayoutItem>
       <Link to={`${RouteNames.ADS}/${x.id}`}>
        <AnnouncementCard x={x} />
       </Link>

       <div className={s.respond}>
        <ButtonSubmitMui
         isValidInButton={false}
         textButton="Откликнуться"
        />
       </div>
      </AdsLayoutItem>
     </div>
    );
   })}
  </RibbonLayout>
 );
};
