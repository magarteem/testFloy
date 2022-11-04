import { createSlice } from "@reduxjs/toolkit";
import { InitialStateUserType } from "../../core/redux/types/userSliceType";

const initialState: InitialStateUserType = {
  skillsData: [
    {
      title: "Инструменты",
      item: ["Гитара", "Укулеле", "Саксофон"],
    },
    {
      title: "Жанр",
      item: [
        "Джаз",
        "Поп-музыка",
        "Кантри",
        "Блюз",
        "Фолк-музыка",
        "Ритм-н-блюз ",
      ],
    },
    {
      title: "Опыт работы",
      item: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis risus, neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus, neque cursus risus. Eget dictumst vitae enim, felis morbi. Quis risus, neque cursus risus.",
    },
    {
      title: "Образование",
      item: "Российская Академия музыки им. Гнесеных",
    },
  ],
};

const userSlice = createSlice({
  name: "authSlice",
  initialState,

  reducers: {},
});

//export const { } = userSlice.actions;
export default userSlice.reducer;
