import { useState, useEffect } from "react";
import { PopUpNavigateGradient } from "../common/components/navigateButton/PopUpNavigateGradient";
import addIcons from "../assets/icons/addIcons.svg";
import filterIconsNew from "../assets/icons/filterIconsNew.svg";
import { StylesFullScreen } from "../common/layout/stylesFullScreen/StylesFullScreen";
import { HeaderStylesWrapper } from "../common/layout/headerStylesWrapper/HeaderStylesWrapper";
import { useOutletContext } from "react-router-dom";
import { InitialStateType } from "../modules/timeLine/types/timlineSliceType";
import { RibbonLayout } from "../common/layout/ribbonLayout/RibbonLayout";
import { RouteNames } from "../core/router/RouteNames";
import { CardsNewsItemPreview } from "../common/components/timeLine/cardsNewsItemPreview/CardsNewsItemPreview";
import { FilterModalLayout } from "../common/layout/filterModalLayout/FilterModalLayout";
import { FilterFormsTimeLine } from "../modules/timeLine/FilterFormsTimeLine";

const add = {
 img: addIcons,
 action: RouteNames.ADD_NEW_NEWS,
};
const filter = {
 img: filterIconsNew,
 action: "",
};

export const NewsAll = () => {
 const data: InitialStateType = useOutletContext();

 const [open, setOpen] = useState(false);
 const handleClickOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);

 useEffect(() => {
  const elem = document.body;
  open && elem.classList.add("cssGlobalHTML");
  //@ts-ignore
  open && elem.parentNode.classList.add("cssGlobalHTML");

  return () => {
   elem.classList.remove("cssGlobalHTML");
   //@ts-ignore
   elem.parentNode.classList.remove("cssGlobalHTML");
  };
 }, [open]);

 return (
  <>
   <StylesFullScreen>
    <HeaderStylesWrapper
     textLabel="Лента"
     anyIconsFirst={add}
     anyIconsSecond={filter}
     onClickAnyIconsSecond={handleClickOpen}
    />

    {data.isLoading ? (
     <h1>Loading....</h1>
    ) : (
     <RibbonLayout>
      {data.timeLineData?.map((x) => (
       <CardsNewsItemPreview itemDataNews={x} key={x.id} />
      ))}
     </RibbonLayout>
    )}
   </StylesFullScreen>

   <FilterModalLayout
    style={{
     "& .MuiDialog-container": {
      alignItems: "flex-end",
      overscrollBehavior: "contain",

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
    <FilterFormsTimeLine handleClose={handleClose} />
   </FilterModalLayout>

   <PopUpNavigateGradient />
  </>
 );
};
