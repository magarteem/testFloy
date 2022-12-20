import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../../core/redux/app/hooks";
import { RouteNames } from "../../../../core/router/RouteNames";
import { updateStatusAds } from "../../../../modules/ads/adsSlice";
import { TimelineCards } from "../../../../modules/ads/types/adsSliceType";
import { setDataNotificationThunk } from "../../../../modules/notification/setDataNotificationThunk";
import { InitialStateUserType } from "../../../../modules/user/types/userSliceType";
import { AdsLayoutItem } from "../../../layout/adsLayoutItem/AdsLayoutItem";
import { RibbonLayout } from "../../../layout/ribbonLayout/RibbonLayout";
import { ButtonSubmitMui } from "../../../mui-element/ButtonSubmitMui";
import { Pending } from "../../notification/waitinActionButton/action/Pending";
import { Received } from "../../notification/waitinActionButton/action/Received";
import { Rejected } from "../../notification/waitinActionButton/action/Rejected";
import { AnnouncementCard } from "../announcementCard/AnnouncementCard";
import { RespondButton } from "../respondButton/RespondButton";
import s from "./announcementFeed.module.scss";

interface AnnouncementFeedType {
 adsList: TimelineCards[];
 profile: InitialStateUserType;
}

export const AnnouncementFeed = ({
 adsList,
 profile,
}: AnnouncementFeedType) => {
 const dispatch = useAppDispatch();

 const respondAds = (adsItem: TimelineCards) => {
  console.log(adsItem);
  dispatch(setDataNotificationThunk(adsItem));
  dispatch(
   updateStatusAds({
    idAds: adsItem.id,
    userId: profile.id_user,
    status: 0,
   })
  );
 };

 return (
  <RibbonLayout>
   {adsList.map((x) => {
    return (
     <div className={s.listAds} key={x.id}>
      {/* s.listAds уместит  в лайоут */}
      <AdsLayoutItem>
       <Link to={`${RouteNames.ADS}/${x.id}`}>
        <AnnouncementCard x={x} />
       </Link>

       {/*// мой профиль = profile.id_user
          // автор поста = x.author.id_user*/}

       {profile.id_user !== x.author.id_user &&
        profile.id_user !== x.waitingForResponse.userId && (
         <div className={s.respond}>
          <ButtonSubmitMui
           onClick={() => respondAds(x)}
           isValidInButton={false}
           textButton="Откликнуться"
          />
          {/*<RespondButton
           respondAdsData={x}
           profile={profile}
          />*/}
         </div>
        )}

       {profile.id_user === x.waitingForResponse.userId && (
        <div className={s.pending}>
         {x.waitingForResponse.status === 0 && <Pending />}
         {x.waitingForResponse.status === 1 && (
          <Received status={x.waitingForResponse} />
         )}
         {x.waitingForResponse.status === 2 && <Rejected />}
        </div>
       )}
      </AdsLayoutItem>
     </div>
    );
   })}
  </RibbonLayout>
 );
};
