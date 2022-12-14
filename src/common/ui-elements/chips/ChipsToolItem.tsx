import s from "./chipsToolItem.module.scss";

interface ChipsToolItemType {
 itemLabel: any;
}

export const ChipsToolItem = ({
 itemLabel,
}: ChipsToolItemType) => {
 return (
  <div className={s.item} key={itemLabel.label}>
   <img src={itemLabel.imgIcons} alt={itemLabel.label} />
   {itemLabel.label}
  </div>
 );
};
