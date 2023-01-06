import { calculateAge } from "../../../../helpers/calculateAge";
import s from "./nameProfile.module.scss";

interface NameProfileType {
 age: number;
 name: string;
 city: string;
}

const formatter = new Intl.NumberFormat("ru", {
 style: "unit",
 unit: "year",
 unitDisplay: "long",
});

export const NameProfile = ({
 age,
 name,
 city,
}: NameProfileType) => {
 return (
  <div className={s.nameProfile}>
   <h2>{name}</h2>
   <span>
    {age &&
     `${formatter.format(+calculateAge(age))}, ${city}`}
   </span>
  </div>
 );
};
