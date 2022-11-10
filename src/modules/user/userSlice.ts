import Inspiration_1 from "../../assets/images/Inspiration_1.webp";
import Inspiration_2 from "../../assets/images/Inspiration_2.webp";
import { createSlice } from "@reduxjs/toolkit";
import { InitialStateUserType } from "./types/userSliceType";

const initialState: InitialStateUserType = {
 id_user: "ulia",
 name: "Юлия Андреевна",
 email: "vova_test@mail.ru",
 sity: "Москва, Орёл",
 age: "32",
 img_upload: "",
 gender: "",
 type_account: "",
 skills: {
  tool: ["Гитара", "Укулеле", "Саксофон"],
  genre: [
   "Джаз",
   "Поп-музыка",
   "Кантри",
   "Блюз",
   "Фолк-музыка",
   "Ритм-н-блюз",
  ],
  workExperience:
   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis risus, neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus, neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus, neque cursus risus.",
  master: "",
  education: "Российская Академия музыки им. Гнесеных",
  inspiration: [
   Inspiration_1,
   Inspiration_2,
   Inspiration_1,
  ],
 },
 private_settings: "",
};

const userSlice = createSlice({
 name: "authSlice",
 initialState,
 reducers: {},
});

//export const { } = userSlice.actions;
export default userSlice.reducer;
