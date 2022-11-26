import s from "./nameProfile.module.scss";

interface NameProfileType {
 age: Date | number | null;
 name: string;
 sity: string;
}

const formatter = new Intl.NumberFormat("ru", {
 style: "unit",
 unit: "year",
 unitDisplay: "long",
});

export const NameProfile = ({
 age,
 name,
 sity,
}: NameProfileType) => {
 const ageFu = (age: Date | number) =>
  new Date().getFullYear() - new Date(age).getFullYear();
 // переделать функцию ageFu
 return (
  <div className={s.nameProfile}>
   <h2>{name}</h2>
   <span>
    {age && `${formatter.format(ageFu(age))}, ${sity}`}
   </span>
  </div>
 );
};
