import { Link } from "react-router-dom";
import { NavigateButtonWidthAddBtn } from "../common/components/navigateButton/NavigateButtonWidthAddBtn";
import { PopUpNavigateGradient } from "../common/components/navigateButton/PopUpNavigateGradient";
import { RouteNames } from "../core/router/RouteNames";
import s from "./styles/tempStyle.module.scss";

export const Notification = () => {
 return (
  <>
   <div
    className={s.tempStyle}
    style={{ display: "flex", flexDirection: "column" }}
   >
    <div>
     Notification
     <br /> (в разработке)
    </div>
    <br />
    <br />
    <div>
     <h1>Просмотр чужых профилей</h1>
     <Link
      to={`${RouteNames.OTHER_PROFILE_USER}/masha`}
      style={{ margin: "10px" }}
     >
      Маша
     </Link>
     <Link
      to={`${RouteNames.OTHER_PROFILE_USER}/ulia`}
      style={{ margin: "10px" }}
     >
      Юлия
     </Link>
     <Link
      to={`${RouteNames.OTHER_PROFILE_USER}/iana`}
      style={{ margin: "10px" }}
     >
      Яна
     </Link>
    </div>
   </div>

   {/*<NavigateButtonWidthAddBtn />*/}
   <PopUpNavigateGradient />
  </>
 );
};
