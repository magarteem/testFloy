import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../../core/redux/app/hooks";
import { TimelineCards } from "../../../../modules/ads/types/adsSliceType";
import { LongMenu } from "../../../mui-element/LongMenu";
import s from "./headerAds.module.scss";

interface HeaderAdsType {
 x: TimelineCards;
 link: string;
 options?: any;
}

export const HeaderAds = ({
 x,
 link,
 options,
}: HeaderAdsType) => {
 const dispatch = useAppDispatch();

 const looking = [
  "Музыкант",
  "Коллектив",
  "Звукорежиссёр",
 ].indexOf(x.required.label);

 return (
  <div className={s.headerAds}>
   <Link to={link}>
    <div className={s.title}>
     <h2>
      {`${looking > -1 ? "Требуется" : "Ищу"}
     ${x.required.label.toLowerCase()}`}
     </h2>
     {x.payment ? (
      <p>{x.payment}</p>
     ) : (
      <p>Не коммерческое</p>
     )}
    </div>
   </Link>

   <div className={s.buttonAction}>
    <LongMenu options={options} />
   </div>
  </div>
 );
};
