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

 return (
  <>
   <StylesFullScreen>
    <HeaderStylesWrapper
     textLabel="Лента"
     anyIconsFirst={add}
     anyIconsSecond={filter}
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

   <PopUpNavigateGradient />
  </>
 );
};
