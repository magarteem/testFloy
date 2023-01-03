import { useOutletContext } from "react-router-dom";
import { InitialStateAdsType } from "../../../../../modules/ads/types/adsSliceType";
import { InitialStateUserType } from "../../../../../modules/user/types/userSliceType";
import { RibbonLayout } from "../../../../layout/ribbonLayout/RibbonLayout";
import { AnnouncementFeed } from "../../announcementFeed/AnnouncementFeed";

export const VacancyTabs = () => {
 const [dataAdsList, profile]: [
  InitialStateAdsType,
  InitialStateUserType
 ] = useOutletContext();

 const filterForVacancy = dataAdsList.adsList.filter(
  (x) => x.typeVacancyOrAds === "vacancy"
 );

 return (
  <RibbonLayout>
   {filterForVacancy.map((x) => (
    <AnnouncementFeed x={x} profile={profile} key={x.id} />
   ))}
  </RibbonLayout>
 );
};
