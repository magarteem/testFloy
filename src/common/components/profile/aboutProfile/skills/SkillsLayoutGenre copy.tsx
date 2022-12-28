import cn from "classnames";
import { memo, useEffect, useLayoutEffect, useRef, useState } from "react";
import { GenreSliceType } from "../../../../../modules/user/types/userSliceType";
import s from "./skillsLayoutGenre.module.scss";

interface SkillsLayoutType {
  skillsDataItem: GenreSliceType[];
  skillsCategoryTitle: string;
}

export const SkillsLayoutGenre = memo(({ skillsDataItem, skillsCategoryTitle }: SkillsLayoutType) => {
  const [showMore, setShowMore] = useState(true);
  const [sum, setSum] = useState(0);
  const [maxShowChips, setMaxShowChips] = useState(5);
  const widthRef = useRef<HTMLDivElement | null>(null);

  const toggle = (num: number) => {
    setShowMore((prev) => !prev);
    setMaxShowChips(num);
  };
  console.log("widthRef = ", widthRef?.current?.clientWidth);
  console.log("sum = ", sum);

  const fu = (i: number) => setSum((prev) => prev + i + 4);
  return (
    <div className={s.skills}>
      <div className={s.profileDataFields}>
        <h2>{skillsCategoryTitle}</h2>

        <div ref={widthRef} className={s.skills_item}>
          {skillsDataItem.map((item) => (
            <SkillsChips item={item} fu={fu} />
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

interface SkillsChipsType {
  item: GenreSliceType;
  fu: (i: number) => void;
}
export const SkillsChips = ({ item, fu }: SkillsChipsType) => {
  const chipsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chipsRef.current) {
      fu(chipsRef.current.clientWidth);
    }
  }, []);

  return (
    <div ref={chipsRef} style={{ backgroundColor: item?.hexColor }} className={s.item} key={item.label}>
      {item.label}
    </div>
  );
};
