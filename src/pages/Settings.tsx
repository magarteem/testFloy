import { Link } from "react-router-dom";
import { useAppDispatch } from "../core/redux/app/hooks";
import { logout } from "../modules/authorization/authSlice";
import { InButton } from "../common/ui-elements/button/InButton";
import { RouteNames } from "../core/router/RouteNames";
import { ButtonInstallPwa } from "../modules/pwa/ButtonInstallPwa";
import { PopUpNavigateGradient } from "../common/components/navigateButton/PopUpNavigateGradient";
import s from "./styles/settings.module.scss";

export const Settings = () => {
  const dispatch = useAppDispatch();
  const logoutHandle = () => dispatch(logout());

  return (
    <>
      <div className={s.settings}>
        <Link className={s.styleBtn} onClick={logoutHandle} to={RouteNames.LOGIN}>
          <InButton textButton="Выход" />
        </Link>
        <Link className={s.styleBtn} to={RouteNames.USER}>
          <InButton textButton="Назад" />
        </Link>
        <ButtonInstallPwa />
      </div>
      <PopUpNavigateGradient />
    </>
  );
};
