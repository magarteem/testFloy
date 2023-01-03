import { useOutletContext } from "react-router-dom";
import { InitialStateAdsType } from "../../../../../modules/ads/types/adsSliceType";
import { InitialStateTeamLineType } from "../../../../../modules/timeLine/types/timlineSliceType";
import { InitialStateUserType } from "../../../../../modules/user/types/userSliceType";
import { RibbonLayout } from "../../../../layout/ribbonLayout/RibbonLayout";
import { AnnouncementFeedInNotification } from "../../../notification/announcementFeedInNotification/AnnouncementFeedInNotification";

export const OtherUserVacancyTabs = () => {
 const [adsNews, dataAdsList, profile, id_user]: [
  InitialStateTeamLineType,
  InitialStateAdsType,
  InitialStateUserType,
  string
 ] = useOutletContext();

 const filterForVacancy = dataAdsList.adsList.filter(
  (x) =>
   x.typeVacancyOrAds === "vacancy" &&
   x.author.id_user === id_user
 );

 return (
  <RibbonLayout>
   {filterForVacancy.map((x) => (
    <AnnouncementFeedInNotification
     key={x.id}
     x={x}
     profile={profile}
    />
   ))}
  </RibbonLayout>
 );
};
