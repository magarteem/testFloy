import { useOutletContext } from "react-router-dom";
import { InitialStateAdsType } from "../../../../../modules/ads/types/adsSliceType";
import { InitialStateTeamLineType } from "../../../../../modules/timeLine/types/timlineSliceType";
import { InitialStateUserType } from "../../../../../modules/user/types/userSliceType";
import { AnnouncementFeed } from "../../../ads/announcementFeed/AnnouncementFeed";

export const OtherUserAdsTabs = () => {
 const [adsNews, dataAdsList, profile, id_user]: [
  InitialStateTeamLineType,
  InitialStateAdsType,
  InitialStateUserType,
  string
 ] = useOutletContext();

 const filterForVacancy = dataAdsList.adsList.filter(
  (x) =>
   x.typeVacancyOrAds === "ads" &&
   x.author.id_user === id_user
 );

 return (
  <AnnouncementFeed
   adsList={filterForVacancy}
   profile={profile}
  />
 );
};
