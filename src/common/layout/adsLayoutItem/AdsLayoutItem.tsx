import { ReactNode } from "react";
import s from "./adsLayoutItem.module.scss";

interface AdsLayoutItemType {
 children: ReactNode;
}

export const AdsLayoutItem = ({
 children,
}: AdsLayoutItemType) => {
 return <div className={s.adsLayoutItem}>{children}</div>;
};
