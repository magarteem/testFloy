import s from "./nameProfile.module.scss";

interface NameProfileType {
  age: string;
  name: string;
  sity: string;
}

export const NameProfile = ({ age, name, sity }: NameProfileType) => {
  return (
    <div className={s.nameProfile}>
      <h2>{name}</h2>
      <span>{`${age} года, ${sity}`}</span>
    </div>
  );
};
