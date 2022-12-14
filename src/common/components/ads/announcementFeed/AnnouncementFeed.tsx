import { Link } from "react-router-dom";
import { RouteNames } from "../../../../core/router/RouteNames";
import { TimelineCards } from "../../../../modules/ads/types/adsSliceType";
import { AdsLayoutItem } from "../../../layout/adsLayoutItem/AdsLayoutItem";
import { RibbonLayout } from "../../../layout/ribbonLayout/RibbonLayout";
import { ButtonSubmitMui } from "../../../mui-element/ButtonSubmitMui";
import { AnnouncementCard } from "../announcementCard/AnnouncementCard";
import { BodyAds } from "../bodyAds/BodyAds";
import { HeaderAds } from "../headerAds/HeaderAds";
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
      <AdsLayoutItem>
       {/*<Link to={`${RouteNames.ADS}/${x.id}`}>
        <HeaderAds
         required={x.required.label}
         payment={x.payment}
        />
        <BodyAds
         city={x.city.label}
         commitAbout={x.commitAbout}
         genre={x.genre}
         publicationDate={x.publicationDate}
         tools={x.tool}
         typeOfInstitution={x.typeOfInstitution}
        />
       </Link>*/}

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
