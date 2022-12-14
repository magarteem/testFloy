import { LongMenu } from "../../../mui-element/LongMenu";
import s from "./headerAds.module.scss";

interface HeaderAdsType {
 required: string;
 payment: string;
}

export const HeaderAds = ({
 required,
 payment,
}: HeaderAdsType) => {
 const looking = ["Музыкант", "Коллектив"].indexOf(
  required
 );

 return (
  <div className={s.headerAds}>
   <div className={s.title}>
    <h2>
     {`${looking > -1 ? "Требуется" : "Ищу"}
     ${required.toLowerCase()}`}
    </h2>
    {payment ? <p>{payment}</p> : <p>Не коммерческое</p>}
   </div>

   <div className={s.buttonAction}>
    <LongMenu />
   </div>
  </div>
 );
};
