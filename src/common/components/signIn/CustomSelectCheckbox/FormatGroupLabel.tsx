import arrowSelect from "../../../../assets/icons/arrowSelect.webp";
import s from "./formatGroupLabel.module.scss";

export const FormatGroupLabel = (data: any) => {
  const isOpenListGroup = () => {
    console.log("333");
  };

  return (
    <div onClick={isOpenListGroup} className={s.formatGroupLabel}>
      <div className={s.arrowSelectImg}>
        <img src={arrowSelect} alt={arrowSelect} />
      </div>
      <span>{data.label}</span>
    </div>
  );
};
