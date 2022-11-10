import backgroundProfileHeader from "../../../../assets/images/backgroundProfileHeader.webp";
import { Link } from "react-router-dom";
import pencil from "../../../../assets/icons/Pencil.webp";
import settings from "../../../../assets/icons/settings.webp";
import { RouteNames } from "../../../variables/RouteNames";
import s from "./headerProfile.module.scss";
import { ArrowBtnStepsBack } from "../../navigateButton/ArrowBtnStepsBack";
import { AvatarPhoto } from "../avatarIcons/AvatarPhoto";

interface HeaderProfileType {
 emainUsers: string;
}

export const HeaderProfile = ({
 emainUsers,
}: HeaderProfileType) => {
 return (
  <div className={s.headerProfile}>
   <div className={s.title}>
    <div className={s.titleNavigation}>
     <ArrowBtnStepsBack darkArrow={false} />
     <p>{emainUsers}</p>
    </div>

    <div className={s.titleSettings}>
     <Link to={RouteNames.CHANGE_PROFILE}>
      <img src={pencil} alt={pencil} />
     </Link>
     <Link to={RouteNames.SETTINGS}>
      <img src={settings} alt={settings} />
     </Link>
    </div>
   </div>

   <AvatarPhoto avatarPhoto={backgroundProfileHeader} />
  </div>
 );
};
