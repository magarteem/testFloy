import { createAsyncThunk } from "@reduxjs/toolkit";
import { ChangeProfileFormValues } from "./types/userSliceType";

export const changeProfileThunk = createAsyncThunk<
  ChangeProfileFormValues,
  ChangeProfileFormValues
>(
  `changeProfile/user`,
  async function (data, { rejectWithValue }) {
    try {
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//ts createAsyncThunk (тип возращаемых данных(undefined если не передаём), тип входящих параметров, тип возвращ. ошибки )
//await axios.get<AxiosResponse<AttendanceResponseType[]>>(`${env_baseUrl}`)
