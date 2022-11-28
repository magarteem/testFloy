import { memo } from "react";
import skillsIcon from "./../../../../../assets/icons/skillsIcon.webp";
import s from "./skillsLayoutMaster.module.scss";

interface SkillsLayoutType {
  skillsDataItem: string;
  skillsCategoryTitle: string;
}

export const SkillsLayoutMaster = memo(({ skillsDataItem, skillsCategoryTitle }: SkillsLayoutType) => {
  if (skillsDataItem === "") return null;

  return (
    <div className={s.skills}>
      <div className={s.profileDataFields}>
        <h2>{skillsCategoryTitle}</h2>

        <div className={s.skills_item}>
          <div className={s.wrapperMasterInfo}>
            <div className={s.iconContainer}>
              <img src={skillsIcon} alt={skillsIcon} />
            </div>
            <span className={s.textNotes}>{skillsDataItem}</span>
          </div>
        </div>
      </div>
    </div>
  );
});
