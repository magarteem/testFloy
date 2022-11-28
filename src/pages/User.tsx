import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppDispatch } from "../core/redux/app/hooks";
import { getDataProfileThunk } from "../modules/user/getDataProfileThunk";

export const User = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDataProfileThunk());
  }, []);

  return <Outlet />;
};
