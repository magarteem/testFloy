import { tempDataOtherUserProfile } from "../../../../../modules/user/service/tempDataOtherUserProfile";
import { InitialStateUserType } from "../../../../../modules/user/types/userSliceType";
import { RibbonLayout } from "../../../../layout/ribbonLayout/RibbonLayout";
import { QuestionnaireCards } from "../../questionnaireCards/QuestionnaireCards";
import s from "./questionnaireTabs.module.scss";

export const QuestionnaireTabs = () => {
 const otherUserProfile: InitialStateUserType[] =
  tempDataOtherUserProfile;

 return (
  <RibbonLayout>
   <h2 className={s.recommendations}>Рекомендации</h2>
   <div className={s.mainQuestionnaire}>
    {otherUserProfile.map((x) => (
     <QuestionnaireCards
      key={x.id_user}
      otherUserProfile={x}
     />
    ))}
   </div>
  </RibbonLayout>
 );
};
