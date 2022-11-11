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

//const initialState: InitialStateUserType =
// tempDataOtherUserProfile[3];
const initialState: InitialStateUserType = {
 id_user: "ulia",
 name: "Юлия Андреевна",
 email: "vova_test@mail.ru",
 sity: { value: "magadan", label: "Магадан" },
 age: "8.11.2000",
 img_upload: "",
 gender: { value: "male", label: "Мужской" },
 type_account: {
  value: "rehearsal-point",
  label: "Репетиционная точка",
 },
 skills: {
  tool: [
   {
    label: "Гитара",
    value: "guitar",
   },
   {
    label: "Саксофон",
    value: "saxophone",
   },
   {
    label: "Гусли",
    value: "gusli",
   },
  ],
  genre: [
   {
    label: "Поп-музыка",
    value: "pop_music",
   },
   {
    label: "Кантри",
    value: "country",
   },
   {
    label: "Блюз",
    value: "blues",
   },
   {
    label: "Геликон",
    value: "helicon",
   },
   {
    label: "Фолк-музыка",
    value: "folk",
   },
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
     // console.log(state);
     // console.log("actions", actions.payload);
     console.log(new Date(actions.payload.age));
     console.log(actions.payload.age);
     state.name = actions.payload.name_field;
     state.age = actions.payload.age;
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
