import s from "./headerStylesWrapper.module.scss";
import cn from "classnames";
import { ArrowBtnStepsBack } from "../../components/navigateButton/ArrowBtnStepsBack";
import { Link } from "react-router-dom";
import { RouteNames } from "../../../core/router/RouteNames";

interface HeaderStylesWrapperType {
 textLabel: string;
 cancelImgIcon?: string;
 change?: boolean;
 filterIcons?: string;
 settings?: boolean;
 addIcons?: string;
}

export const HeaderStylesWrapper = ({
 textLabel,
 cancelImgIcon,
 change = false,
 filterIcons,
 addIcons,
}: HeaderStylesWrapperType) => {
 return (
  <section className={s.headerStylesWrapper}>
   <div className={s.titleNavigation}>
    {cancelImgIcon && (
     <ArrowBtnStepsBack cancelImgIcon={cancelImgIcon} />
    )}
    <p>{textLabel}</p>
   </div>

   <div className={s.titleSettings}>
    {addIcons && (
     <Link to={RouteNames.CHANGE_PROFILE}>
      <img src={addIcons} alt={addIcons} />
     </Link>
    )}
    {
     <Link to={RouteNames.SETTINGS}>
      <img src={filterIcons} alt={filterIcons} />
     </Link>
    }
   </div>
  </section>
 );
};
