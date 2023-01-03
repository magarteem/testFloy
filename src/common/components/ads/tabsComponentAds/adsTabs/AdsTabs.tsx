import { useOutletContext } from "react-router-dom";
import { InitialStateAdsType } from "../../../../../modules/ads/types/adsSliceType";
import { InitialStateUserType } from "../../../../../modules/user/types/userSliceType";
import { RibbonLayout } from "../../../../layout/ribbonLayout/RibbonLayout";
import { AnnouncementFeed } from "../../announcementFeed/AnnouncementFeed";

export const AdsTabs = () => {
 const [dataAdsList, profile]: [
  InitialStateAdsType,
  InitialStateUserType
 ] = useOutletContext();

 const filterForAds = dataAdsList.adsList.filter(
  (x) => x.typeVacancyOrAds === "ads"
 );

 return (
  <RibbonLayout>
   {filterForAds.map((x) => (
    <AnnouncementFeed x={x} profile={profile} key={x.id} />
   ))}
  </RibbonLayout>
 );
};
