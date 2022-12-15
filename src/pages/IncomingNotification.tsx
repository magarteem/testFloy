import React from "react";
import { useOutletContext } from "react-router-dom";
import { HeaderCards } from "../common/components/timeLine/headerCards/HeaderCards";
import { CardsLayoutItem } from "../common/layout/cardsLayoutItem/CardsLayoutItem";
import { useAppSelector } from "../core/redux/app/hooks";
import { InitialStateAdsType } from "../modules/ads/types/adsSliceType";

export const IncomingNotification = () => {
 const adsData = useAppSelector(
  (state) => state.adsSliceReducer
 );

 console.log(!adsData);

 if (adsData.isLoading) return <h1>Loading.....</h1>;
 if (adsData.error) return <h1>Error</h1>;

 if (!adsData) return null;

 return (
  <>
   dddd
   {/*AdsLayoutItem  =  дубликат?*/}
   {adsData.adsList.map((x) => {
    <HeaderCards
     key={x.id}
     author={x.author}
     date={x.publicationDate}
    />;
   })}
  </>
 );
};
