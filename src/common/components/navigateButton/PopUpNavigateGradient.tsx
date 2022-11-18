import cn from "classnames";
import { NavLink, useLocation } from "react-router-dom";
import { RouteNames } from "../../variables/RouteNames";
import { ReactComponent as Home } from "../../../assets/icons/Home.svg";
import { ReactComponent as Notification } from "../../../assets/icons/Notification.svg";
import { ReactComponent as Ads } from "../../../assets/icons/Ads.svg";
import { ReactComponent as User } from "../../../assets/icons/User.svg";
import s from "./popUpNavigateGradient.module.scss";

interface LinkActiveType {
 isActive: boolean;
}

export const PopUpNavigateGradient = () => {
 let { pathname } = useLocation();
 const location = pathname.includes("/other-user-profile");

 const setActive = ({ isActive }: LinkActiveType) =>
  cn({ [s.active]: isActive });

 return (
  <div className={cn(s.widthAddButton)}>
   <img />
  </div>
 );
};
