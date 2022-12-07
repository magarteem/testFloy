import s from "./headerStylesWrapper.module.scss";
import { ArrowBtnStepsBack } from "../../components/navigateButton/ArrowBtnStepsBack";
import { Link } from "react-router-dom";
import { RouteNames } from "../../../core/router/RouteNames";

interface HeaderStylesWrapperType {
 textLabel: string;
 cancelImgIcon?: string;
 filterIcons?: string;
 settings?: boolean;
 addIcons?: string;
 anyIconsFirst?: { img: string; action: string };
 anyIconsSecond?: { img: string; action: string };
 tsxElement?: any;
}

export const HeaderStylesWrapper = ({
 textLabel,
 cancelImgIcon,
 settings,
 filterIcons,
 addIcons,
 anyIconsFirst,
 anyIconsSecond,
 tsxElement,
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
    {filterIcons && (
     <Link to={RouteNames.SETTINGS}>
      <img src={filterIcons} alt={filterIcons} />
     </Link>
    )}
    {anyIconsFirst && (
     <Link to={anyIconsFirst.action}>
      <img
       src={anyIconsFirst.img}
       alt={anyIconsFirst.img}
      />
     </Link>
    )}
    {anyIconsSecond && (
     <Link to={anyIconsSecond.action}>
      <img
       src={anyIconsSecond.img}
       alt={anyIconsSecond.img}
      />
     </Link>
    )}
    {tsxElement && tsxElement}
   </div>
  </section>
 );
};
