import { Outlet } from "react-router-dom";
import s from "./styles/mainScreenPage.module.scss";

export const MainScreen = () => {
 return (
  <div className={s.mainScreen}>
   <Outlet />
  </div>
 );
};
