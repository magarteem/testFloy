import {
 createSlice,
 PayloadAction,
} from "@reduxjs/toolkit";
import { deleteNewsTimeLineThunk } from "./deleteNewsTimeLineThunk";
import { getDataTimeLineThunk } from "./getDataTimeLineThunk";
import { setNewNewsTimeLineThunk } from "./setNewNewsTimeLineThunk";
import {
 InitialStateTeamLineType,
 InitialStateType,
} from "./types/timlineSliceType";

const initialState: InitialStateType = {
 timeLineData: [],
 error: null,
 isLoading: false,
};

const timeLineSlice = createSlice({
 name: "timeLineSlice",
 initialState,
 reducers: {},

 extraReducers: (builder) => {
  builder
   .addCase(
    getDataTimeLineThunk.pending.type,
    (state: InitialStateType) => {
     state.isLoading = true;
    }
   )
   .addCase(
    getDataTimeLineThunk.fulfilled.type,
    (
     state: InitialStateType,
     actions: PayloadAction<InitialStateTeamLineType[]>
    ) => {
     state.isLoading = false;
     state.timeLineData = actions.payload;
    }
   )
   .addCase(
    getDataTimeLineThunk.rejected.type,
    (
     state: InitialStateType,
     actions: PayloadAction<string>
    ) => {
     console.log("getDataTimeLineThunk");
    }
   )
   //
   .addCase(
    setNewNewsTimeLineThunk.pending.type,
    (state: InitialStateType) => {
     state.isLoading = true;
    }
   )
   .addCase(
    setNewNewsTimeLineThunk.fulfilled.type,
    (
     state: InitialStateType,
     actions: PayloadAction<InitialStateTeamLineType>
    ) => {
     state.isLoading = false;
     state.timeLineData.unshift(actions.payload);
    }
   )
   .addCase(
    setNewNewsTimeLineThunk.rejected.type,
    (
     state: InitialStateType,
     actions: PayloadAction<string>
    ) => {
     console.log("setNewNewsTimeLineThunk");
    }
   )
   //
   .addCase(
    deleteNewsTimeLineThunk.pending.type,
    (state: InitialStateType) => {
     state.isLoading = true;
    }
   )
   .addCase(
    deleteNewsTimeLineThunk.fulfilled.type,
    (
     state: InitialStateType,
     actions: PayloadAction<number>
    ) => {
     state.isLoading = false;
     state.timeLineData = state.timeLineData.filter(
      (x) => x.id !== actions.payload
     );
    }
   )
   .addCase(
    deleteNewsTimeLineThunk.rejected.type,
    (
     state: InitialStateType,
     actions: PayloadAction<string>
    ) => {
     console.log("setNewNewsTimeLineThunk");
    }
   );
 },
});

//export const { } = userSlice.actions;
export default timeLineSlice.reducer;
