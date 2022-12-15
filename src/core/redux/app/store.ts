import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import authSlice from "../../../modules/authorization/authSlice";
import adsSlice from "../../../modules/ads/adsSlice";
import userSlice from "../../../modules/user/userSlice";
import timeLineSlice from "../../../modules/timeLine/timeLineSlice";
import notificationSlice from "../../../modules/notification/notificationSlice";

export const store = configureStore({
  reducer: {
    authSliceReducer: authSlice,
    timeLineSliceReducer: timeLineSlice,
    userSliceReducer: userSlice,
    adsSliceReducer: adsSlice,
    notificationSliceReducer: notificationSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
