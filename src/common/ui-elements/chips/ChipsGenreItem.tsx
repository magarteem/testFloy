import s from "./chipsGenreItem.module.scss";

interface ChipsGenreItemType {
 itemLabel: any;
}

export const ChipsGenreItem = ({
 itemLabel,
}: ChipsGenreItemType) => {
 return (
  <div
   style={{ backgroundColor: itemLabel.hexColor }}
   className={s.item}
   key={itemLabel.label}
  >
   {itemLabel.label}
  </div>
 );
};
