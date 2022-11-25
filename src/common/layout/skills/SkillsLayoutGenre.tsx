import { memo } from "react";
import { GenreSliceType } from "../../../modules/user/types/userSliceType";
import s from "./skillsLayoutGenre.module.scss";

interface SkillsLayoutType {
  skillsDataItem: GenreSliceType[];
  skillsCategoryTitle: string;
}

export const SkillsLayoutGenre = memo(({ skillsDataItem, skillsCategoryTitle }: SkillsLayoutType) => {
  return (
    <div className={s.skills}>
      <div className={s.profileDataFields}>
        <h2>{skillsCategoryTitle}</h2>

        <div className={s.skills_item}>
          {skillsDataItem.map((item) => {
            return (
              <div style={{ backgroundColor: item.hexColor }} className={s.item} key={item.label}>
                {item.label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});
