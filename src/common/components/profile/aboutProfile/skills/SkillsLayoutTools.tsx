import cn from "classnames";
import { memo, useState } from "react";
import { ToolsSliceType } from "../../../../../modules/user/types/userSliceType";
import s from "./skillsLayoutTools.module.scss";

interface SkillsLayoutType {
  skillsDataItem: ToolsSliceType[];
  skillsCategoryTitle: string;
}

export const SkillsLayoutTools = memo(({ skillsDataItem, skillsCategoryTitle }: SkillsLayoutType) => {
  const [showMore, setShowMore] = useState(true);
  const [maxShowChips, setMaxShowChips] = useState(5);

  const toggle = (num: number) => {
    setShowMore((prev) => !prev);
    setMaxShowChips(num);
  };

  return (
    <div className={s.skills}>
      <div className={s.profileDataFields}>
        <h2>{skillsCategoryTitle}</h2>

        <div className={s.skills_item}>
          {skillsDataItem.slice(0, maxShowChips).map((item, index) => (
            <div className={s.item} key={item.label}>
              <img src={item.imgIcons} alt={item.label} />
              {item.label}
            </div>
          ))}

          {skillsDataItem.length > maxShowChips && (
            <div onClick={() => toggle(skillsDataItem.length)} className={cn(s.item, s.itemHidden)}>
              Ещё {skillsDataItem.length - maxShowChips}
            </div>
          )}

          {!showMore && (
            <div onClick={() => toggle(5)} className={cn(s.item, s.itemHidden)}>
              Скрыть
            </div>
          )}
        </div>
      </div>
    </div>
  );
});
