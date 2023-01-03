import {
 useAppDispatch,
 useAppSelector,
} from "../../../../core/redux/app/hooks";
import { CardsLayoutItem } from "../../../layout/cardsLayoutItem/CardsLayoutItem";
import { SkillsLayoutTools } from "../../profile/aboutProfile/skills/SkillsLayoutTools";
import { SkillsLayoutGenre } from "../../profile/aboutProfile/skills/SkillsLayoutGenre";
import { getDataAdsThunk } from "../../../../modules/ads/getDataAdsThunk";
import { adsListData } from "../../../../modules/ads/service/BD_ads";
import { useEffect } from "react";
import { ButtonlActionApplication } from "../buttonlActionApplication/ButtonlActionApplication";
import { dateDeclension } from "../../../../helpers/dateDeclension";
import s from "./incomingNotification.module.scss";
import { HeaderCardsIncoming } from "../headerCardsIncoming/HeaderCardsIncoming";

export const IncomingNotification = () => {
 const dispatch = useAppDispatch();
 const adsData = useAppSelector(
  (state) => state.notificationSliceReducer
 );

 useEffect(() => {
  adsData.adsList.length === 0 &&
   dispatch(getDataAdsThunk(adsListData));
 }, []);

 if (!adsData) return <h1>Loading ...</h1>;

 console.log(adsData.adsList);
 return (
  <>
   {adsData.adsList.map((x) => (
    //<AdsLayoutItem key={x.id}>
    <CardsLayoutItem key={x.id}>
     <div className={s.addGapStyle}>
      <HeaderCardsIncoming
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

      <div
       className={s.publicationDate}
      >{`Отправлена ${dateDeclension(
       x.publicationDate
      )}`}</div>

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
