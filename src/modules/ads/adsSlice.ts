import {
 createSlice,
 PayloadAction,
} from "@reduxjs/toolkit";
import { setDataAdsThunk } from "../vacancy/setDataAdsThunk";
import { updateDataAdsThunk } from "../vacancy/updateDataAdsThunk";
import { deleteAdsThunk } from "./deleteAdsThunk";
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
   )
   //
   .addCase(
    updateDataAdsThunk.pending.type,
    (state: InitialStateAdsType) => {
     state.isLoading = true;
    }
   )
   .addCase(
    updateDataAdsThunk.fulfilled.type,
    (
     state: InitialStateAdsType,
     actions: PayloadAction<TimelineCards>
    ) => {
     state.adsList = state.adsList.map((x) => {
      if (x.id === actions.payload.id) {
       return {
        ...x,
        required: actions.payload.required,
        tool: actions.payload.tool,
        genre: actions.payload.genre,
        city: actions.payload.city,
        gender: actions.payload.gender,
        fromAge: actions.payload.fromAge,
        toAge: actions.payload.toAge,
        work_experience: actions.payload.work_experience,
        master: actions.payload.master,
        commit: actions.payload.commit,
        payment: actions.payload.payment,
        workingConditions:
         actions.payload.workingConditions,
        commitAbout: actions.payload.commitAbout,
        phone: actions.payload.phone,
        email: actions.payload.email,
        web_site: actions.payload.web_site,
        typeOfInstitution:
         actions.payload.typeOfInstitution || {},
       };
      } else return { ...x };
     });

     console.log(actions.payload.typeOfInstitution);

     state.isLoading = false;
    }
   )
   .addCase(
    updateDataAdsThunk.rejected.type,
    (
     state: InitialStateAdsType,
     actions: PayloadAction<string>
    ) => {}
   )
   //
   .addCase(
    deleteAdsThunk.pending.type,
    (state: InitialStateAdsType) => {
     state.isLoading = true;
    }
   )
   .addCase(
    deleteAdsThunk.fulfilled.type,
    (
     state: InitialStateAdsType,
     actions: PayloadAction<number>
    ) => {
     console.log("333");
     state.isLoading = false;
     state.adsList = state.adsList.filter(
      (x) => x.id !== actions.payload
     );
    }
   )
   .addCase(
    deleteAdsThunk.rejected.type,
    (
     state: InitialStateAdsType,
     actions: PayloadAction<string>
    ) => {
     console.log("setNewNewsTimeLineThunk");
    }
   );
 },
});

export const { updateStatusAds } = adsSlice.actions;
export default adsSlice.reducer;
