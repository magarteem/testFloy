import { InitialStateTeamLineType } from "../../../../modules/timeLine/types/timlineSliceType";
import { BodyCards } from "../bodyCards/BodyCards";
import { HeaderCardsNews } from "../headerCards/HeaderCardsNews";
import s from "./cardsNewsItemPreview.module.scss";

export interface CardsNewsItemPreviewType {
 itemDataNews: InitialStateTeamLineType;
}

export const CardsNewsItemPreview = ({
 itemDataNews,
}: CardsNewsItemPreviewType) => {
 return (
  <div className={s.cardsItemWrapp} key={itemDataNews.id}>
   <div className={s.customStyleA}>
    <HeaderCardsNews
     author={itemDataNews.author}
     date={itemDataNews.date}
     timeLinePost={itemDataNews.timeLinePost}
    />
   </div>
   <BodyCards
    timeLinePost={itemDataNews.timeLinePost}
    id_news={itemDataNews.id}
    date={itemDataNews.date}
   />
  </div>
 );
};
