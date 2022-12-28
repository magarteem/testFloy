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
 console.log(data);
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
       <CardsNewsItemPreview itemDataNews={x} key={x.id} />
      ))}
      {/*{data.timeLineData?.map((x) => (
       <div className={s.cardsItemWrapp} key={x.id}>
        <div className={s.customStyleA}>
         <HeaderCardsNews
          author={x.author}
          date={x.date}
          timeLinePost={x.timeLinePost}
         />
        </div>
        <BodyCards
         timeLinePost={x.timeLinePost}
         id_news={x.id}
         date={x.date}
        />
       </div>
      ))}*/}
     </RibbonLayout>
    )}
   </StylesFullScreen>

   <PopUpNavigateGradient />
  </>
 );
};
