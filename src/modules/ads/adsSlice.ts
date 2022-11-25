import { createSlice } from '@reduxjs/toolkit';
import { adsCardsData, swiperData } from './service/BD_ads';
import { InitialStateAdsType } from './types/adsSliceType';

const initialState: InitialStateAdsType = {
  isAuth: false,
  swiperData: swiperData,
  adsCards: adsCardsData,
  error: null,
};

const adsSlice = createSlice({
  name: 'adsSlice',
  initialState,
  reducers: {},
});

//export const { } = adsSlice.actions;
export default adsSlice.reducer;
