import { useState } from "react";
import { GenreType, ToolsType } from "../../../../modules/authorization/types/authType";
import { ChipsLayout } from "../../../layout/chipsLayout/ChipsLayout";
import { ChipsGenreItem } from "../../../ui-elements/chips/ChipsGenreItem";
import { ChipsToolItem } from "../../../ui-elements/chips/ChipsToolItem";
import { dateDeclension } from "../../../../helpers/dateDeclension";
import cn from "classnames";
import s from "./bodyAds.module.scss";

interface BodyAdsType {
  city: string;
  typeOfInstitution: any;
  tools: ToolsType[];
  genre: GenreType[];
  commitAbout: string;
  publicationDate: number;
}

export const BodyAds = ({ city, commitAbout, genre, publicationDate, tools, typeOfInstitution }: BodyAdsType) => {
  const [showMore, setShowMore] = useState(true);
  const [maxShowChips, setMaxShowChips] = useState(5);
  const objectSkills = [...tools, ...genre];

  const toggle = (num: number) => {
    setShowMore((prev) => !prev);
    setMaxShowChips(num);
  };

  return (
    <div className={s.bodyAds}>
      <div className={s.city}>
        <h3>{city}</h3>
        <p>Группа “Пьяные пьянки”</p>
      </div>

      <div className={s.skills}>
        <ChipsLayout>
          {objectSkills.slice(0, maxShowChips).map((x: any) => {
            if (x.imgIcons) {
              return <ChipsToolItem itemLabel={x} />;
            } else {
              return <ChipsGenreItem itemLabel={x} />;
            }
          })}

          {objectSkills.length > maxShowChips && (
            <div
              onClick={(e) => {
                e.preventDefault();
                toggle(objectSkills.length);
              }}
              className={cn(s.item, s.itemHidden)}
            >
              Ещё {objectSkills.length - maxShowChips}
            </div>
          )}

          {!showMore && (
            <div
              onClick={(e) => {
                e.preventDefault();
                toggle(5);
              }}
              className={cn(s.item, s.itemHidden)}
            >
              Скрыть
            </div>
          )}
        </ChipsLayout>
      </div>

      <div className={s.about}>{commitAbout}</div>
      <div className={s.publicationDate}>{`Опубликовано ${dateDeclension(publicationDate)}`}</div>
    </div>
  );
};
