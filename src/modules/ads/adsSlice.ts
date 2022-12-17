import {
 createSlice,
 PayloadAction,
} from "@reduxjs/toolkit";
import { setDataAdsThunk } from "../vacancy/setDataAdsThunk";
import { getDataAdsThunk } from "./getDataAdsThunk";
import {
 InitialStateAdsType,
 TimelineCards,
} from "./types/adsSliceType";

const initialState: InitialStateAdsType = {
 adsList: [],
 isLoading: false,
 error: null,
};

const adsSlice = createSlice({
 name: "adsSlice",
 initialState,
 reducers: {},

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
     console.log("actions.payload = ", actions.payload);
     state.adsList = actions.payload;
     state.isLoading = false;
    }
   )
   .addCase(
    getDataAdsThunk.rejected.type,
    (
     state: InitialStateAdsType,
     actions: PayloadAction<string>
    ) => {
     console.log("full1111");
    }
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
     state.adsList.unshift({
      ...actions.payload,
      id: new Date().getTime(),
      publicationDate: new Date().getTime(),
      author: {
       avatar:
        "/static/media/avatart_22.656e2d550638bec4dc6d.webp",
       city: "Ростов",
       id_user: "iana",
       name: "Яна Калинина",
      },
      waitingForResponse: {
       status: 0,
       userId: "masha",
      },
     });
     state.isLoading = false;
    }
   )
   .addCase(
    setDataAdsThunk.rejected.type,
    (
     state: InitialStateAdsType,
     actions: PayloadAction<string>
    ) => {
     console.log("full1111");
    }
   );
 },
});

//export const { } = adsSlice.actions;
export default adsSlice.reducer;
