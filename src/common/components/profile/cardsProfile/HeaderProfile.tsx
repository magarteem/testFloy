import { ReactNode } from "react";
import { Link } from "react-router-dom";
import pencil from "../../../../assets/icons/Pencil.webp";
import settingsIcon from "../../../../assets/icons/settings.webp";
import { RouteNames } from "../../../../core/router/RouteNames";
import s from "./headerProfile.module.scss";
import { ArrowBtnStepsBack } from "../../navigateButton/ArrowBtnStepsBack";
import { AvatarPhoto } from "../avatarIcons/AvatarPhoto";
import { IconButton } from "@mui/material";

interface HeaderProfileType {
 textLabel: string;
 cancelImgIcon?: string;
 avatar?: string;
 change?: boolean;
 settings?: boolean;
 share?: ReactNode;
}

export const HeaderProfile = ({
 textLabel,
 cancelImgIcon,
 avatar,
 change = false,
 settings = false,
 share,
}: HeaderProfileType) => {
 return (
  <div className={s.headerProfile}>
   <div className={s.title}>
    <div className={s.titleNavigation}>
     {cancelImgIcon && (
      <ArrowBtnStepsBack cancelImgIcon={cancelImgIcon} />
     )}
     <p>{textLabel}</p>
    </div>

    <div className={s.titleSettings}>
     {change && (
      <Link to={RouteNames.CHANGE_PROFILE}>
       <IconButton>
        <img src={pencil} alt={pencil} />
       </IconButton>
      </Link>
     )}
     {settings && (
      <Link to={RouteNames.SETTINGS}>
       <IconButton>
        <img src={settingsIcon} alt={settingsIcon} />
       </IconButton>
      </Link>
     )}

     {!!share && <IconButton>{share}</IconButton>}
    </div>
   </div>

   <AvatarPhoto avatarPhoto={avatar} />
  </div>
 );
};
