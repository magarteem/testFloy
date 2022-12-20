import { useAppDispatch } from "../../../../core/redux/app/hooks";
import { updateStatusAds } from "../../../../modules/ads/adsSlice";
import { TimelineCards } from "../../../../modules/ads/types/adsSliceType";
import { setDataNotificationThunk } from "../../../../modules/notification/setDataNotificationThunk";
import { InitialStateUserType } from "../../../../modules/user/types/userSliceType";
import { ButtonSubmitMui } from "../../../mui-element/ButtonSubmitMui";
import s from "./respondButton.module.scss";

interface RespondButtonType {
 respondAdsData: TimelineCards;
 profile: InitialStateUserType;
}

export const RespondButton = ({
 respondAdsData,
 profile,
}: RespondButtonType) => {
 const dispatch = useAppDispatch();

 const respondAds = (adsItem: TimelineCards) => {
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
  <div className={s.respond}>
   <ButtonSubmitMui
    onClick={() => respondAds(respondAdsData)}
    isValidInButton={false}
    textButton="Откликнуться"
   />
  </div>
 );
};
