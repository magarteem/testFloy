import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialStateAdsType, TimelineCards } from "../ads/types/adsSliceType";
import { getDataNotificationThunk } from "./getDataNotificationThunk";

const initialState: InitialStateAdsType = {
  adsList: [],
  isLoading: false,
  error: null,
};

const notificationSlice = createSlice({
  name: "adsSlice",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(
        getDataNotificationThunk.pending.type,
        (state: InitialStateAdsType) => {
          state.isLoading = true;
        }
      )
      .addCase(
        getDataNotificationThunk.fulfilled.type,
        (
          state: InitialStateAdsType,
          actions: PayloadAction<TimelineCards[]>
        ) => {
          state.adsList = actions.payload;
          state.isLoading = false;
        }
      )
      .addCase(
        getDataNotificationThunk.rejected.type,
        (state: InitialStateAdsType, actions: PayloadAction<string>) => {
          console.log("full1111");
        }
      );
  },
});

//export const { } = adsSlice.actions;
export default notificationSlice.reducer;
