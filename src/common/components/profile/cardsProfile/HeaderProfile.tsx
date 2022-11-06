import backgroundProfileHeader from "../../../../assets/images/backgroundProfileHeader.webp";
import { Link } from "react-router-dom";
import pencil from "../../../../assets/icons/Pencil.webp";
import settings from "../../../../assets/icons/settings.webp";
import { RouteNames } from "../../../variables/RouteNames";
import s from "./headerProfile.module.scss";
import { ArrowBtnStepsBack } from "../../navigateButton/ArrowBtnStepsBack";

export const HeaderProfile = () => {
  return (
    <div className={s.headerProfile}>
      <div className={s.title}>
        <div className={s.titleNavigation}>
          <ArrowBtnStepsBack darkArrow={false} />
          <p>@kovalchuk</p>
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

      <div className={s.infoAccount}>
        <div className={s.photo}>
          <div className={s.wrapperPhoto}>
            <img src={backgroundProfileHeader} alt={backgroundProfileHeader} />
          </div>
        </div>
      </div>
    </div>
  );
};
