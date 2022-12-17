import { HeaderCards } from "../../timeLine/headerCards/HeaderCards";
import {
 useAppDispatch,
 useAppSelector,
} from "../../../../core/redux/app/hooks";
import { CardsLayoutItem } from "../../../layout/cardsLayoutItem/CardsLayoutItem";
import { SkillsLayoutTools } from "../../profile/aboutProfile/skills/SkillsLayoutTools";
import { SkillsLayoutGenre } from "../../profile/aboutProfile/skills/SkillsLayoutGenre";
import s from "./incomingNotification.module.scss";
import Dayjs from "dayjs";
import relativeTIme from "dayjs/plugin/relativeTime";
import { getDataAdsThunk } from "../../../../modules/ads/getDataAdsThunk";
import { adsListData } from "../../../../modules/ads/service/BD_ads";
import { useEffect } from "react";
import { ButtonlActionApplication } from "../buttonlActionApplication/ButtonlActionApplication";
import { WaitingActionButton } from "../waitinActionButton/WaitingActionButton";

Dayjs.locale("ru");
Dayjs.extend(relativeTIme);

export const IncomingNotification = () => {
 const dispatch = useAppDispatch();

 const adsData = useAppSelector(
  (state) => state.notificationSliceReducer
 );
 // const adsData = useAppSelector(
 //  (state) => state.adsSliceReducer
 // );

 useEffect(() => {
  adsData.adsList.length === 0 &&
   dispatch(getDataAdsThunk(adsListData));
 }, []);

 if (!adsData) return <h1>Loading ...</h1>;

 return (
  <>
   {adsData.adsList.map((x) => (
    //<AdsLayoutItem key={x.id}>
    <CardsLayoutItem key={x.id}>
     <div className={s.addGapStyle}>
      <HeaderCards
       key={x.id}
       author={x.author}
       date={x.publicationDate}
      />

      <div className={s.reStyleImportant}>
       <SkillsLayoutTools
        skillsDataItem={x.tool}
        skillsCategoryTitle=""
       />
      </div>

      <div className={s.reStyleImportant}>
       <SkillsLayoutGenre
        skillsDataItem={x.genre}
        skillsCategoryTitle=""
       />
      </div>

      <div className={s.publicationDate}>
       {`Отправлена ${Dayjs(x.publicationDate).fromNow()}`}
      </div>

      <ButtonlActionApplication
       userId={x.author.id_user}
       id={x.id}
       status={x.waitingForResponse}
      />
     </div>
    </CardsLayoutItem>
   ))}
  </>
 );
};
