import {
 createSlice,
 PayloadAction,
} from "@reduxjs/toolkit";
import { getDataTimeLineThunk } from "./getDataTimeLineThunk";
import {
 InitialStateTeamLineType,
 InitialStateType,
} from "./types/timlineSliceType";

const initialState: InitialStateType = {
 timeLineData: null,
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
     console.log("getDataTimeLineThunk = fulfilled");
     console.log(actions.payload);
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
   );
 },
});

//export const { } = userSlice.actions;
export default timeLineSlice.reducer;
