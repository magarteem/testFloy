import { memo } from "react";
import s from "./skillsLayout.module.scss";

interface SkillsLayoutType {
  skillsDataItem: string;
  skillsCategoryTitle: string;
}

export const SkillsLayout = memo(({ skillsDataItem, skillsCategoryTitle }: SkillsLayoutType) => {
  if (skillsDataItem === "") return null;

  return (
    <div className={s.skills}>
      <div className={s.profileDataFields}>
        <h2>{skillsCategoryTitle}</h2>

        <div className={s.skills_item}>
          <span className={s.textNotes}>{skillsDataItem}</span>
        </div>
      </div>
    </div>
  );
});
