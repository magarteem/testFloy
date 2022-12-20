import React from "react";
import { useOutletContext } from "react-router-dom";
import { InitialStateAdsType } from "../../../../../modules/ads/types/adsSliceType";
import { InitialStateUserType } from "../../../../../modules/user/types/userSliceType";
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
  <AnnouncementFeed
   adsList={filterForAds}
   profile={profile}
  />
 );
};
