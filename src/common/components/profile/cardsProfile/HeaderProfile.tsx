import arrowBack from "../../../../assets/icons/arrowBack.svg";
import backgroundProfileHeader from "../../../../assets/images/backgroundProfileHeader.webp";
import { Link } from "react-router-dom";
import pencil from "../../../../assets/icons/Pencil.webp";
import settings from "../../../../assets/icons/settings.webp";
import s from "./headerProfile.module.scss";
import { RouteNames } from "../../../variables/RouteNames";

export const HeaderProfile: React.FC = () => {
  return (
    <div className={s.headerProfile}>
      <div className={s.title}>
        <div className={s.titleNavigation}>
          <Link to={"RouteNames.back"}>
            <img src={arrowBack} alt={arrowBack} />
          </Link>
          <p>@kovalchuk</p>
        </div>

        <div className={s.titleSettings}>
          <Link to={"RouteNames.changeProfile"}>
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
