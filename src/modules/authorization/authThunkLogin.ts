import { createAsyncThunk } from "@reduxjs/toolkit";
import { ISignInFormValues } from "./types/authType";

export const authThunkLogin = createAsyncThunk<
 string,
 ISignInFormValues,
 { rejectValue: string }
>(
 `authorization/sign-In`,
 async function (data, { rejectWithValue }) {
  try {
   return JSON.stringify(data);
  } catch (error) {
   return rejectWithValue(`#any string ??? ${error}`);
  }
 }
);

//export const authThunkLogin = createAsyncThunk(
//  `authorization/sign-In`,
//  async function (data, { rejectWithValue }) {
//   try {
//    return JSON.stringify(data);
//   } catch (error) {
//    return rejectWithValue(error);
//   }
//  }
// );
