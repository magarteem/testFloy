import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { onShare } from "../../../modules/pwa/onShare";
import { ArrowBtnStepsBack } from "../../components/navigateButton/ArrowBtnStepsBack";
import s from "./headerStylesWrapper.module.scss";

interface HeaderStylesWrapperType {
 textLabel?: string;
 cancelImgIcon?: string | ReactNode;
 anyIconsFirst?: { img: string; action: string };
 anyIconsSecond?: { img: string; action: string };
 tsxElement?: any;
 children?: ReactNode;
 share?: string;
}

export const HeaderStylesWrapper = ({
 textLabel,
 cancelImgIcon,
 anyIconsFirst,
 anyIconsSecond,
 tsxElement,
 children,
 share,
}: HeaderStylesWrapperType) => {
 return (
  <section className={s.headerStylesWrapper}>
   <div className={s.titleNavigation}>
    {children}
    {cancelImgIcon && (
     <ArrowBtnStepsBack cancelImgIcon={cancelImgIcon} />
    )}
    <p>{textLabel}</p>
   </div>

   <div className={s.titleSettings}>
    {!!share && (
     <img src={share} alt={share} onClick={onShare} />
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
