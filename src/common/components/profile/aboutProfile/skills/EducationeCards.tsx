import { EducationType } from "../../../../../modules/user/types/userSliceType";
import { ExperienceEducationLayout } from "../../../../layout/experienceEducationLayout/ExperienceEducationLayout";
import s from "./educationeCards.module.scss";

interface EducationeCardsType {
  workEducationeData: string | EducationType[];
  skillsCategoryTitle: string;
}

export const EducationeCards = ({ workEducationeData, skillsCategoryTitle }: EducationeCardsType) => {
  return (
    <ExperienceEducationLayout skillsCategoryTitle={skillsCategoryTitle}>
      {Array.isArray(workEducationeData) ? (
        workEducationeData.map((item) => {
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
      ) : !!workEducationeData ? (
        <span className={s.textNotes}>{workEducationeData}</span>
      ) : (
        <span className={s.textNotes}>Не указан</span>
      )}
    </ExperienceEducationLayout>
  );
};
