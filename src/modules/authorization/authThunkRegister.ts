import { createAsyncThunk } from "@reduxjs/toolkit";
import { ISignUpFormValues } from "./types/authType";

export const authThunkRegister = createAsyncThunk<
  string,
  ISignUpFormValues,
  { rejectValue: string }
>(
  `authorization/sign-Up`,
  async function (data, { rejectWithValue }) {
    try {
      return JSON.stringify(data)
    } catch (error) {
      return rejectWithValue("error");
    }
  }
);
