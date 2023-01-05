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
 const ageFu =
  new Date().getFullYear() - new Date(age).getFullYear();
 // переделать функцию ageFu
 console.log(new Date().getFullYear());
 console.log(new Date(age).getFullYear());
 console.log(ageFu);
 return (
  <div className={s.nameProfile}>
   <h2>{name}</h2>
   <span>
    {age && `${formatter.format(ageFu)}, ${city}`}
   </span>
  </div>
 );
};
