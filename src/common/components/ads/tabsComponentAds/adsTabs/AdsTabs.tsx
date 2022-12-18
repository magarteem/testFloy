import React from "react";
import { useOutletContext } from "react-router-dom";
import { InitialStateAdsType } from "../../../../../modules/ads/types/adsSliceType";
import { AnnouncementFeed } from "../../announcementFeed/AnnouncementFeed";

export const AdsTabs = () => {
 const data: InitialStateAdsType = useOutletContext();

 return <AnnouncementFeed adsList={data.adsList} />;
};
