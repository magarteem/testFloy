import { EducationType } from "../../../modules/user/types/typeTempDataOtherUserProfile";
import s from "./workEducationeCards.module.scss";

interface WorkExperiencEducationeCardsType {
  workEducationeData: string | EducationType[];
  skillsCategoryTitle: string;
}

export const WorkEducationeCards = ({
  workEducationeData,
  skillsCategoryTitle,
}: WorkExperiencEducationeCardsType) => {
  return (
    <div className={s.skills}>
      <div className={s.profileData}>
        <h2>{skillsCategoryTitle}</h2>

        <div className={s.skills_item}>
          {Array.isArray(workEducationeData)
            ? workEducationeData.map((item) => {
                return (
                  <div key={item.period} className={s.workEducationeData}>
                    <div className={s.itemImg}>
                      <img src={item.img} alt={item.img} />
                    </div>
                    <div className={s.text}>
                      <p>{item.institution}</p>
                      <p>{item.period}</p>
                    </div>
                  </div>
                );
              })
            : workEducationeData !== "" && (
                <span className={s.textNotes}>{workEducationeData}</span>
              )}
        </div>
      </div>
    </div>
  );
};
