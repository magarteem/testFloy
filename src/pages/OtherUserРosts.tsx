import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import arrow_back from "../assets/icons/arrow_back.svg";
import { PopUpNavigateGradient } from "../common/components/navigateButton/PopUpNavigateGradient";
import { TabsComponentOtherProfilePosts } from "../common/components/profile/otherUserProfile/TabsComponentOtherProfilePosts";
import { HeaderStylesWrapper } from "../common/layout/headerStylesWrapper/HeaderStylesWrapper";
import { StylesFullScreen } from "../common/layout/stylesFullScreen/StylesFullScreen";
import {
 useAppDispatch,
 useAppSelector,
} from "../core/redux/app/hooks";
import { getDataAdsThunk } from "../modules/ads/getDataAdsThunk";
import { adsListData } from "../modules/ads/service/BD_ads";
import { getDataTimeLineThunk } from "../modules/timeLine/getDataTimeLineThunk";
import { timeLineBD } from "../modules/timeLine/service/timlineBD";
import { tempDataOtherUserProfile } from "../modules/user/service/tempDataOtherUserProfile";

export const OtherUserРosts = () => {
 const dispatch = useAppDispatch();
 const { id_user } = useParams();

 useEffect(() => {
  dispatch(getDataTimeLineThunk(timeLineBD));
  dispatch(getDataAdsThunk(adsListData));
 }, []);

 const adsNews = useAppSelector(
  (state) => state.timeLineSliceReducer.timeLineData
 );
 const adsData = useAppSelector(
  (state) => state.adsSliceReducer
 );
 const myProfile = useAppSelector(
  (state) => state.userSliceReducer.profileData
 );

 const thisOtherUsetAllProfile =
  tempDataOtherUserProfile.find(
   (x) => x.id_user === id_user
  );

 if (adsData.isLoading) return <h1>Loading.....</h1>;
 if (adsData.error) return <h1>Error</h1>;

 return (
  <>
   <StylesFullScreen>
    <HeaderStylesWrapper
     cancelImgIcon={arrow_back}
     textLabel={`Публикации ${
      thisOtherUsetAllProfile?.name.split(" ")[0]
     }`}
     // textLabel="Публикации Александра"
    />
   </StylesFullScreen>

   <TabsComponentOtherProfilePosts />

   <StylesFullScreen>
    <Outlet
     context={[adsNews, adsData, myProfile, id_user]}
    />
   </StylesFullScreen>

   <PopUpNavigateGradient />
  </>
 );
};
