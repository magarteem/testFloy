import { ReactNode } from "react";
import s from "./btnUserContact.module.scss";

interface BtnUserType {
  children: ReactNode;
}

export const BtnUserContact = ({ children }: BtnUserType) => {
  return <div className={s.btnWrapperPosition}>{children}</div>;
};
