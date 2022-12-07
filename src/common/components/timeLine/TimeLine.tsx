import { InitialStateTeamLineType } from "../../../modules/timeLine/types/timlineSliceType";
import { CardsLayoutItem } from "../../layout/cardsLayoutItem/CardsLayoutItem";
import { HeaderCards } from "./headerCards/HeaderCards";
import { BodyCards } from "./bodyCards/BodyCards";
import s from "./timeLine.module.scss";

interface TimeLineType {
 timeLineData: InitialStateTeamLineType[] | null;
}

export const TimeLine = ({
 timeLineData,
}: TimeLineType) => {
 return (
  <section className={s.timeline}>
   {timeLineData?.map((x) => (
    <CardsLayoutItem key={x.id}>
     <HeaderCards author={x.author} date={x.date} />
     <BodyCards
      timeLinePost={x.timeLinePost}
      id_news={x.id}
     />
    </CardsLayoutItem>
   ))}
  </section>
 );
};
