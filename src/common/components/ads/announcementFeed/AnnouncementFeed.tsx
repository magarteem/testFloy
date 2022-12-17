import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../../core/redux/app/hooks";
import { RouteNames } from "../../../../core/router/RouteNames";
import { TimelineCards } from "../../../../modules/ads/types/adsSliceType";
import { setDataNotificationThunk } from "../../../../modules/notification/setDataNotificationThunk";
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
 const dispatch = useAppDispatch();

 const respondAds = (adsList: TimelineCards) => {
  dispatch(setDataNotificationThunk(adsList));
 };

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
         onClick={() => respondAds(x)}
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
