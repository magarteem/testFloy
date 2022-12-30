import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import filterIconsNew from "../assets/icons/filterIconsNew.svg";
import searchIcon from "../assets/icons/searchIcon.svg";
import { Outlet } from "react-router-dom";
import { HeaderStylesWrapper } from "../common/layout/headerStylesWrapper/HeaderStylesWrapper";
import { TabsComponentAds } from "../common/components/ads/tabsComponentAds/TabsComponentAds";
import s from "./styles/adsAll.module.scss";
import { getDataAdsThunk } from "../modules/ads/getDataAdsThunk";
import {
 useAppDispatch,
 useAppSelector,
} from "../core/redux/app/hooks";
import { adsListData } from "../modules/ads/service/BD_ads";
import { StylesFullScreen } from "../common/layout/stylesFullScreen/StylesFullScreen";
import { FilterModalLayout } from "../common/layout/filterModalLayout/FilterModalLayout";
import { FilterFormsAds } from "../modules/ads/FilterFormsAds";

const filter = { img: filterIconsNew, action: "" };

export const AdsAll = () => {
 const dispatch = useAppDispatch();
 const adsData = useAppSelector(
  (state) => state.adsSliceReducer
 );
 const myProfile = useAppSelector(
  (state) => state.userSliceReducer.profileData
 );

 const [open, setOpen] = useState(false);
 const handleClickOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);

 useEffect(() => {
  adsData.adsList.length === 0 &&
   dispatch(getDataAdsThunk(adsListData));
 }, []);

 if (adsData.isLoading) return <h1>Loading.....</h1>;
 if (adsData.error) return <h1>Error</h1>;

 return (
  <>
   <StylesFullScreen>
    <div className={s.customAddPadding}>
     <HeaderStylesWrapper
      anyIconsFirst={filter}
      onClickAnyIconsFirst={handleClickOpen}
     >
      <div className={s.styleInput}>
       <div className={s.sizeInput}>
        <TextField
         placeholder="Поиск"
         sx={{
          width: "100% !important",
          fontWeight: "700  !important",
          fontSize: "16px",
          color: "#242424 ",
          fontFamily: `Mulish_Regular, sans-serif !important`,
          padding: "0",
          height: "100% !important",

          "& .Mui-focused": {
           color: "#1A1C18 !important",
          },

          "& .MuiInputBase-root": {
           height: "100%",
           borderRadius: "12px",
           backgroundColor: "#E9F0DA",

           "& input": {
            color: "#1A1C18",
            padding: "0 14px 0 48px  !important",
            fontFamily: `Mulish_Regular, sans-serif !important`,
            fontSize: "16px !important",
            fontWeight: "600 !important",
           },

           "& .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #C6D1B8",
            borderRadius: "8px",
           },
          },
         }}
        />
       </div>
       <img src={searchIcon} alt="search" />
      </div>
     </HeaderStylesWrapper>
    </div>
   </StylesFullScreen>

   <TabsComponentAds />

   <StylesFullScreen>
    <Outlet context={[adsData, myProfile]} />

    <FilterModalLayout
     style={{
      "& .MuiDialog-container": {
       alignItems: "flex-end",

       "& .MuiPaper-root": {
        background: "#FDFDF5",
        borderRadius: "28px 28px 0px 0px",
        width: "100%",
        margin: 0,
        padding: "16px",
       },
      },
     }}
     modalOpen={open}
     handleClose={handleClose}
    >
     <FilterFormsAds handleClose={handleClose} />
    </FilterModalLayout>
   </StylesFullScreen>
  </>
 );
};
