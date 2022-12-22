import { PopUpNavigateGradient } from "../common/components/navigateButton/PopUpNavigateGradient";
import addIcons from "../assets/icons/addIcons.svg";
import filterIconsNew from "../assets/icons/filterIconsNew.svg";
import { StylesFullScreen } from "../common/layout/stylesFullScreen/StylesFullScreen";
import { HeaderStylesWrapper } from "../common/layout/headerStylesWrapper/HeaderStylesWrapper";
import { useOutletContext } from "react-router-dom";
import { InitialStateType } from "../modules/timeLine/types/timlineSliceType";
import { RibbonLayout } from "../common/layout/ribbonLayout/RibbonLayout";
import { BodyCards } from "../common/components/timeLine/bodyCards/BodyCards";
import s from "./styles/newsAll.module.scss";
import { HeaderCardsNews } from "../common/components/timeLine/headerCards/HeaderCardsNews";

const add = { img: addIcons, action: "" };
const filter = { img: filterIconsNew, action: "" };

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
     // <TimeLine timeLineData={data.timeLineData} />
     <RibbonLayout>
      {data.timeLineData?.map((x) => (
       <div className={s.cardsItemWrapp} key={x.id}>
        <div className={s.customStyleA}>
         <HeaderCardsNews
          author={x.author}
          date={x.date}
          theme={x.timeLinePost.theme}
         />
        </div>
        <BodyCards
         timeLinePost={x.timeLinePost}
         id_news={x.id}
        />
       </div>
      ))}
     </RibbonLayout>
    )}
   </StylesFullScreen>

   <PopUpNavigateGradient />
  </>
 );
};
