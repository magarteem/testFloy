import { useEffect } from "react";
import { PopUpNavigateGradient } from "../common/components/navigateButton/PopUpNavigateGradient";
import {
 useAppDispatch,
 useAppSelector,
} from "../core/redux/app/hooks";
import { getDataAdsThunk } from "../modules/ads/getDataAdsThunk";
import { adsListData } from "../modules/ads/service/BD_ads";
import { Outlet } from "react-router-dom";

export const Ads = () => {
 const dispatch = useAppDispatch();

 const adsData = useAppSelector(
  (state) => state.adsSliceReducer
 );
 const myProfile = useAppSelector(
  (state) => state.userSliceReducer.profileData
 );

 useEffect(() => {
  adsData.adsList.length === 0 &&
   dispatch(getDataAdsThunk(adsListData));
 }, []);

 if (adsData.isLoading) return <h1>Loading.....</h1>;
 if (adsData.error) return <h1>Error</h1>;

 return (
  <>
   <Outlet context={[adsData, myProfile]} />
   <PopUpNavigateGradient />
  </>
 );
};
