import { createAsyncThunk } from "@reduxjs/toolkit";
import { TimelineCards } from "../ads/types/adsSliceType";

export const updateDataAdsThunk = createAsyncThunk<
 TimelineCards,
 TimelineCards
>(
 `updateDataAdsThunk/ads-update`,
 async function (adsListData, { rejectWithValue }) {
  try {
   //return await new Promise(resolve => setTimeout(resolve, 1000));
   return adsListData;
  } catch (error) {
   return rejectWithValue(error);
  }
 }
);

//ts createAsyncThunk (тип возращаемых данных(undefined если не передаём), тип входящих параметров, тип возвращ. ошибки )
//await axios.get<AxiosResponse<AttendanceResponseType[]>>(`${env_baseUrl}`)
