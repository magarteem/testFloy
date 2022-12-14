import { createAsyncThunk } from "@reduxjs/toolkit";
import { tempDataOtherUserProfile } from "./service/tempDataOtherUserProfile";
import { InitialStateUserType } from "./types/userSliceType";

export const getDataProfileThunk = createAsyncThunk<
  InitialStateUserType
>(
  `getDataProfileThunk/user`,
  async function (_, { rejectWithValue }) {
    try {
      //return await new Promise(resolve => setTimeout(resolve, 1000));
      return tempDataOtherUserProfile[4]
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//ts createAsyncThunk (тип возращаемых данных(undefined если не передаём), тип входящих параметров, тип возвращ. ошибки )
//await axios.get<AxiosResponse<AttendanceResponseType[]>>(`${env_baseUrl}`)
