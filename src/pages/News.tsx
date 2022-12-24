import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import {
 useAppDispatch,
 useAppSelector,
} from "../core/redux/app/hooks";
import { getDataTimeLineThunk } from "../modules/timeLine/getDataTimeLineThunk";
import { timeLineBD } from "../modules/timeLine/service/timlineBD";

export const News = () => {
 const dispatch = useAppDispatch();
 const newsDate = useAppSelector(
  (state) => state.timeLineSliceReducer
 );

 useEffect(() => {
  dispatch(getDataTimeLineThunk(timeLineBD));
 }, []);

 if (!newsDate) return null;

 return <Outlet context={newsDate} />;
};
