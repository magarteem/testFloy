import TextField from "@mui/material/TextField";
import filterIconsNew from "../assets/icons/filterIconsNew.svg";
import searchIcon from "../assets/icons/searchIcon.svg";
import { useOutletContext } from "react-router-dom";
import { AnnouncementFeed } from "../common/components/ads/announcementFeed/AnnouncementFeed";
import { HeaderStylesWrapper } from "../common/layout/headerStylesWrapper/HeaderStylesWrapper";
import { InitialStateAdsType } from "../modules/ads/types/adsSliceType";
import s from "./styles/adsAll.module.scss";

export const AdsAll = () => {
  const data: InitialStateAdsType = useOutletContext();

  return (
    <>
      <HeaderStylesWrapper filterIcons={filterIconsNew}>
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

      <AnnouncementFeed adsList={data.adsList} />
    </>
  );
};
