import {
 useOutletContext,
 useParams,
} from "react-router-dom";
import { InitialStateAdsType } from "../../../../../modules/ads/types/adsSliceType";
import { InitialStateTeamLineType } from "../../../../../modules/timeLine/types/timlineSliceType";
import { InitialStateUserType } from "../../../../../modules/user/types/userSliceType";
import { RibbonLayout } from "../../../../layout/ribbonLayout/RibbonLayout";
import { BodyCards } from "../../../timeLine/bodyCards/BodyCards";
import { CardsNewsItemPreview } from "../../../timeLine/cardsNewsItemPreview/CardsNewsItemPreview";
import { HeaderCardsNews } from "../../../timeLine/headerCards/HeaderCardsNews";

export const OtherUserNewsTabs = () => {
 const [adsNews, dataAdsList, profile, id_user]: [
  InitialStateTeamLineType[],
  InitialStateAdsType,
  InitialStateUserType,
  string
 ] = useOutletContext();

 const filterForNewsThisUther = adsNews.filter(
  (x) => x.author.id_user === id_user
 );

 return (
  <RibbonLayout>
   {filterForNewsThisUther.map((x) => (
    <CardsNewsItemPreview itemDataNews={x} key={x.id} />
   ))}
  </RibbonLayout>
 );
};
