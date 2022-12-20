import {
 createSlice,
 PayloadAction,
} from "@reduxjs/toolkit";
import { setDataAdsThunk } from "../vacancy/setDataAdsThunk";
import { getDataAdsThunk } from "./getDataAdsThunk";
import {
 InitialStateAdsType,
 TimelineCards,
 WaitingForResponseType,
} from "./types/adsSliceType";

const initialState: InitialStateAdsType = {
 adsList: [],
 isLoading: false,
 error: null,
};

const adsSlice = createSlice({
 name: "adsSlice",
 initialState,
 reducers: {
  updateStatusAds(
   state: InitialStateAdsType,
   action: PayloadAction<any>
  ) {
   state.adsList = state.adsList.map((x) => {
    if (x.id === action.payload.idAds) {
     return {
      ...x,
      waitingForResponse: {
       userId: action.payload.userId,
       status: action.payload.status,
      },
     };
    } else {
     return { ...x };
    }
   });
  },
 },

 extraReducers: (builder) => {
  builder
   .addCase(
    getDataAdsThunk.pending.type,
    (state: InitialStateAdsType) => {
     state.isLoading = true;
    }
   )
   .addCase(
    getDataAdsThunk.fulfilled.type,
    (
     state: InitialStateAdsType,
     actions: PayloadAction<TimelineCards[]>
    ) => {
     state.adsList = actions.payload;
     state.isLoading = false;
    }
   )
   .addCase(
    getDataAdsThunk.rejected.type,
    (
     state: InitialStateAdsType,
     actions: PayloadAction<string>
    ) => {}
   )
   //
   .addCase(
    setDataAdsThunk.pending.type,
    (state: InitialStateAdsType) => {
     state.isLoading = true;
    }
   )
   .addCase(
    setDataAdsThunk.fulfilled.type,
    (
     state: InitialStateAdsType,
     actions: PayloadAction<TimelineCards>
    ) => {
     state.adsList.unshift(actions.payload);
     state.isLoading = false;
    }
   )
   .addCase(
    setDataAdsThunk.rejected.type,
    (
     state: InitialStateAdsType,
     actions: PayloadAction<string>
    ) => {}
   );
 },
});

export const { updateStatusAds } = adsSlice.actions;
export default adsSlice.reducer;
