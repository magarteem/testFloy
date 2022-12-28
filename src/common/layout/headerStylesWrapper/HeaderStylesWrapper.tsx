import { IconButton } from "@mui/material";
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
 onClickAnyIconsFirst?: () => void;
}

export const HeaderStylesWrapper = ({
 textLabel,
 cancelImgIcon,
 anyIconsFirst,
 anyIconsSecond,
 tsxElement,
 children,
 share,
 onClickAnyIconsFirst,
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
     <IconButton onClick={onShare}>
      <img src={share} alt={share} />
     </IconButton>
    )}

    {anyIconsFirst && (
     <IconButton onClick={onClickAnyIconsFirst}>
      <img
       src={anyIconsFirst.img}
       alt={anyIconsFirst.img}
      />
     </IconButton>
     // <Link
     //  to={anyIconsFirst.action}
     //  onClick={onClickAnyIconsSecond}
     // >
     //  <img
     //   src={anyIconsFirst.img}
     //   alt={anyIconsFirst.img}
     //  />
     // </Link>
    )}

    {anyIconsSecond && (
     // <Link to={anyIconsSecond.action}>
     <IconButton>
      <img
       src={anyIconsSecond.img}
       alt={anyIconsSecond.img}
      />
     </IconButton>
     // </Link>
    )}

    {tsxElement && tsxElement}
   </div>
  </section>
 );
};
