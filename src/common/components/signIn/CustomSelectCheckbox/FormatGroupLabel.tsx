import arrowSelect from "../../../../assets/icons/arrowSelect.webp";
import s from "./formatGroupLabel.module.scss";

export const FormatGroupLabel = (data: any, click: any) => {
  console.log("- ", data);
  const isOpenListGroup = () => {
    console.log("333");
  };

  return (
    <div onClick={click} className={s.formatGroupLabel}>
      <div className={s.arrowSelectImg}>
        <img src={arrowSelect} alt={arrowSelect} />
      </div>
      <span onClick={click}>{data.label}</span>
    </div>
  );
};
