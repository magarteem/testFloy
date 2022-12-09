import { PopUpNavigateGradient } from "../common/components/navigateButton/PopUpNavigateGradient";
import addIcons from "../assets/icons/addIcons.svg";
import filterIcons from "../assets/icons/filterIcons.svg";
import { StylesFullScreen } from "../common/layout/stylesFullScreen/StylesFullScreen";
import { HeaderStylesWrapper } from "../common/layout/headerStylesWrapper/HeaderStylesWrapper";
import { useOutletContext } from "react-router-dom";
import { InitialStateType } from "../modules/timeLine/types/timlineSliceType";
import { TimeLine } from "../common/components/timeLine/TimeLine";

export const NewsAll = () => {
 const data: InitialStateType = useOutletContext();

 return (
  <>
   <StylesFullScreen>
    <HeaderStylesWrapper
     textLabel="Лента"
     addIcons={addIcons}
     filterIcons={filterIcons}
    />

    {data.isLoading ? (
     <h1>Loading....</h1>
    ) : (
     <TimeLine timeLineData={data.timeLineData} />
    )}
   </StylesFullScreen>

   <PopUpNavigateGradient />
  </>
 );
};
