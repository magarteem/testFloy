import s from "./skillsLayout.module.scss";

interface InspirationType {
 inspiration: string[];
 skillsCategoryTitle: string;
}

export const InspirationUser = ({
 skillsCategoryTitle,
 inspiration,
}: InspirationType) => {
 return (
  <div className={s.skills}>
   <div className={s.profileDataFields}>
    <h2>{skillsCategoryTitle}</h2>

    <div className={s.skills_item}>
     <div className={s.containerImg}>
      {inspiration.map((x, index) => (
       <div key={index} className={s.img}>
        <img src={x} alt={x} />
       </div>
      ))}
     </div>
    </div>
   </div>
  </div>
 );
};
