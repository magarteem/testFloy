import s from "./nameProfile.module.scss";

interface NameProfileType {
  age: number;
  name: string;
  sity: string;
}

const formatter = new Intl.NumberFormat("ru", {
  style: "unit",
  unit: "year",
  unitDisplay: "long",
});

export const NameProfile = ({ age, name, sity }: NameProfileType) => {
  const ageFu = new Date().getFullYear() - new Date(age).getFullYear();
  // переделать функцию ageFu
  return (
    <div className={s.nameProfile}>
      <h2>{name}</h2>
      <span>{age && `${formatter.format(ageFu)}, ${sity}`}</span>
    </div>
  );
};
