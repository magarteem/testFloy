import { NavigateButtonWidthAddBtn } from "../common/components/navigateButton/NavigateButtonWidthAddBtn";
import { PopUpNavigateGradient } from "../common/components/navigateButton/PopUpNavigateGradient";
import s from "./styles/tempStyle.module.scss";

export const Home = () => {
 return (
  <div className={s.tempStyle}>
   Home
   <br /> (в разработке)
   {/*<NavigateButtonWidthAddBtn />*/}
   <PopUpNavigateGradient />
  </div>
 );
};
