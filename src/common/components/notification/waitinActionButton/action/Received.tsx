import lockOpen from "../../../../../assets/icons/lockOpen.svg";
import { Link } from "react-router-dom";
import { ButtonSubmitMui } from "../../../../mui-element/ButtonSubmitMui";
import s from "./received.module.scss";
import { RouteNames } from "../../../../../core/router/RouteNames";

interface ReceivedType {
  status: { userId: string; status: number };
}

export const Received = ({ status }: ReceivedType) => {
  return (
    <div className={s.received}>
      <div className={s.status}>
        <img src={lockOpen} alt="lockOpen" />
        <span>Принята</span>
      </div>

      <Link to={`${RouteNames.OTHER_PROFILE_USER}/${status.userId}`} className={s.showAuthor}>
        <div className={s.btnWrapper}>
          <ButtonSubmitMui textButton="Посмотреть анкету" isValidInButton={false} />
        </div>
      </Link>
    </div>
  );
};
