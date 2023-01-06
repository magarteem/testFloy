import noAvatar from "../../../../assets/icons/noAvatar.svg";
import { ReactComponent as ArrowCanselImgIcon } from "../../../../assets/icons/clearIcon.svg";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import { RouteNames } from "../../../../core/router/RouteNames";
import { InitialStateUserType } from "../../../../modules/user/types/userSliceType";
import s from "./questionnaireCards.module.scss";
import { GroupeToolsAndGenreChips } from "../groupeToolsAndGenreChips/GroupeToolsAndGenreChips";
import { SkillsLayoutGenre } from "../../profile/aboutProfile/skills/SkillsLayoutGenre";
import { calculateAge } from "../../../../helpers/calculateAge";

const formatter = new Intl.NumberFormat("ru", {
 style: "unit",
 unit: "year",
 unitDisplay: "long",
});

interface QuestionnaireCardsType {
 otherUserProfile: InitialStateUserType;
}

export const QuestionnaireCards = ({
 otherUserProfile,
}: QuestionnaireCardsType) => {
 const typeMusicians =
  otherUserProfile.type_account.value === "musician";
 const typeGroupe =
  otherUserProfile.type_account.value ===
  "group-collective";

 return (
  <div className={s.questionnaireCards}>
   <div className={s.headerQuestionnaireCards}>
    <Link
     to={`${RouteNames.OTHER_PROFILE_USER}/${otherUserProfile.id_user}`}
     className={s.author}
    >
     <div className={s.avatar}>
      <Avatar
       alt="Remy Sharp"
       src={
        otherUserProfile?.avatar
         ? otherUserProfile.avatar
         : noAvatar
       }
      />
     </div>
     <div className={s.infoAuthor}>
      <h2 className={s.name}>{otherUserProfile?.name}</h2>

      <span className={s.visit}>
       {`${otherUserProfile.city.label},        
       ${
        typeMusicians
         ? formatter.format(
            +calculateAge(otherUserProfile.age || 0)
           )
         : otherUserProfile.type_account.label
       }
       `}
      </span>
     </div>
    </Link>

    <div className={s.buttonAction}>
     <ArrowCanselImgIcon />
    </div>
   </div>

   {typeMusicians && (
    <div className={s.mainQuestionnaireCards}>
     <GroupeToolsAndGenreChips
      tools={otherUserProfile.skills.tool}
      genre={otherUserProfile.skills.genre}
     />
    </div>
   )}

   {typeGroupe && (
    <div className={s.reStyleImportant}>
     <SkillsLayoutGenre
      skillsDataItem={otherUserProfile.skills.genre}
      skillsCategoryTitle=""
     />
    </div>
   )}
  </div>
 );
};
