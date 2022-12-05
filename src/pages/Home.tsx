import { PopUpNavigateGradient } from "../common/components/navigateButton/PopUpNavigateGradient";
import addIcons from "../assets/icons/addIcons.svg";
import filterIcons from "../assets/icons/filterIcons.svg";
import arrowReturnBlack from "../assets/icons/arrowReturnBlack.webp";
import { TimeLine } from "../common/components/timeLine/TimeLine";
import { StylesFullScreen } from "../common/layout/stylesFullScreen/StylesFullScreen";
import { WrapperFullScreen } from "../common/layout/wrapperFullScreen/WrapperFullScreen";
import s from "./styles/tempStyle.module.scss";
import { HeaderStylesWrapper } from "../common/layout/headerStylesWrapper/HeaderStylesWrapper";

export const Home = () => {
 return (
  <>
   <StylesFullScreen>
    <HeaderStylesWrapper
     textLabel="Лента"
     addIcons={addIcons}
     filterIcons={filterIcons}
    />

    <TimeLine />
   </StylesFullScreen>

   <PopUpNavigateGradient />
  </>
 );
};
