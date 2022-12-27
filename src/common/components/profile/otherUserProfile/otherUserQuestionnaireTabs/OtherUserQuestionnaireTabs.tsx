import { useOutletContext } from "react-router-dom";
import { InitialStateAdsType } from "../../../../../modules/ads/types/adsSliceType";
import { InitialStateTeamLineType } from "../../../../../modules/timeLine/types/timlineSliceType";
import { tempDataOtherUserProfile } from "../../../../../modules/user/service/tempDataOtherUserProfile";
import { InitialStateUserType } from "../../../../../modules/user/types/userSliceType";
import { QuestionnaireCards } from "../../../ads/questionnaireCards/QuestionnaireCards";

export const OtherUserQuestionnaireTabs = () => {
 const [adsNews, dataAdsList, profile, id_user]: [
  InitialStateTeamLineType,
  InitialStateAdsType,
  InitialStateUserType,
  string
 ] = useOutletContext();

 const thisOtherUsetAllProfile =
  tempDataOtherUserProfile.find(
   (x) => x.id_user === id_user
  );
 if (!thisOtherUsetAllProfile) return null;

 return (
  <QuestionnaireCards
   otherUserProfile={thisOtherUsetAllProfile}
  />
 );
};
