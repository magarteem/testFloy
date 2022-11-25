import {
 createSlice,
 PayloadAction,
} from "@reduxjs/toolkit";
import {
 ChangeProfileFormValues,
 InitialStateUserType,
} from "./types/userSliceType";
import { changeProfileThunk } from "./changeProfileThunk";
import { tempDataOtherUserProfile } from "./service/tempDataOtherUserProfile";

const initialState: InitialStateUserType =
 tempDataOtherUserProfile[4];

const userSlice = createSlice({
 name: "authSlice",
 initialState,
 reducers: {},

 extraReducers: (builder) => {
  builder
   .addCase(
    changeProfileThunk.pending.type,
    (state: InitialStateUserType) => {}
   )
   .addCase(
    changeProfileThunk.fulfilled.type,
    (
     state: InitialStateUserType,
     actions: PayloadAction<ChangeProfileFormValues>
    ) => {
     state.name = actions.payload.name_field;
     state.age = actions.payload.age;
     state.sity = actions.payload.sity;
     state.gender = actions.payload.gender;
     state.skills.tool = actions.payload.tool;
     state.skills.genre = actions.payload.genre;
     state.skills.workExperience =
      actions.payload.work_experience;
     state.skills.education = actions.payload.education;
     state.skills.master = actions.payload.master;
     state.private_settings =
      actions.payload.private_settings;
    }
   )
   .addCase(
    changeProfileThunk.rejected.type,
    (
     state: InitialStateUserType,
     actions: PayloadAction<string>
    ) => {
     console.log("changeProfileThunk");
    }
   );
 },
});

//export const { } = userSlice.actions;
export default userSlice.reducer;
