import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppDispatch } from "../core/redux/app/hooks";
import { getDataProfileThunk } from "../modules/user/getDataProfileThunk";
import { tempDataOtherUserProfile } from "../modules/user/service/tempDataOtherUserProfile";

export const User = () => {
 const dispatch = useAppDispatch();

 useEffect(() => {
  dispatch(
   getDataProfileThunk(tempDataOtherUserProfile[4])
  );
 }, []);

 return <Outlet />;
};
