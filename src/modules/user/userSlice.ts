import Inspiration_1 from "../../assets/images/Inspiration_1.webp";
import Inspiration_2 from "../../assets/images/Inspiration_2.webp";
import {
 createSlice,
 PayloadAction,
} from "@reduxjs/toolkit";
import {
 ChangeProfileFormValues,
 InitialStateUserType,
} from "./types/userSliceType";
import { changeProfileThunk } from "./changeProfileThunk";
import {
 genreBD,
 groupeOptions,
} from "../authorization/service/BD";

//const initialState: InitialStateUserType =
// tempDataOtherUserProfile[3];
const initialState: InitialStateUserType = {
 id_user: "ulia",
 name: "Юлия Андреевна",
 email: "vova_test@mail.ru",
 sity: { value: "magadan", label: "Магадан" },
 age: 952078480000,
 img_upload: "",
 gender: { value: "male", label: "Мужской" },
 type_account: {
  value: "rehearsal-point",
  label: "Репетиционная точка",
 },
 skills: {
  tool: [
   groupeOptions[0].options[2],
   groupeOptions[0].options[3],
   groupeOptions[1].options[2],
   groupeOptions[2].options[2],
  ],
  genre: [
   genreBD[3],
   genreBD[5],
   genreBD[6],
   genreBD[8],
   genreBD[11],
  ],
  workExperience:
   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis risus, neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus, neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus, neque cursus risus.",
  master: { value: "newbie", label: "Новичок" },
  education: "Российская Академия музыки им. Гнесеных",
  inspiration: [
   Inspiration_1,
   Inspiration_2,
   Inspiration_1,
  ],
 },
 private_settings: {
  value: "public-questionnaire",
  label: "Публичная анкета",
 },
};

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
