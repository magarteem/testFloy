import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppDispatch } from "../core/redux/app/hooks";
import { getDataProfileThunk } from "../modules/user/getDataProfileThunk";
import { tempDataOtherUserProfile } from "../modules/user/service/tempDataOtherUserProfile";
import s from "./styles/mainScreenPage.module.scss";

export const MainScreen = () => {
 const dispatch = useAppDispatch();

 useEffect(() => {
  dispatch(
   getDataProfileThunk(tempDataOtherUserProfile[3])
  );
 }, [dispatch]);

 return (
  <div className={s.mainScreen}>
   <Outlet />
  </div>
 );
};
