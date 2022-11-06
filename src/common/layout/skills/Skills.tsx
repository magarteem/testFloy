import { memo } from "react";
import { SkillsDataType } from "../../../modules/user/types/userSliceType";
import s from "./skills.module.scss";

interface SkillsType {
  skillsDataItem: SkillsDataType;
}

export const Skills = memo(({ skillsDataItem }: SkillsType) => {
  return (
    <div className={s.skills}>
      <div className={s.profileData}>
        <h2>{skillsDataItem.title}</h2>
        <div className={s.skills_item}>
          {Array.isArray(skillsDataItem.item) ? (
            skillsDataItem.item.map((item) => (
              <div className={s.item} key={item}>
                {item}
              </div>
            ))
          ) : (
            <span className={s.textNotes}>{skillsDataItem.item}</span>
          )}
        </div>
      </div>
    </div>
  );
});
