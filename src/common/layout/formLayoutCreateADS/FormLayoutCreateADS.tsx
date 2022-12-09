import { NavigateHeader } from "../formLayout/NavigateHeader";
import s from "./formLayoutCreateADS.module.scss";

interface FormLayoutCreateADSType {
 children: React.ReactNode;
 textLabel: string;
 closed?: boolean;
}

export const FormLayoutCreateADS = ({
 children,
 textLabel,
 closed = false,
}: FormLayoutCreateADSType) => {
 return (
  <div className={s.formLayoutCreateADS}>
   <NavigateHeader textLabel={textLabel} closed={closed} />

   <div className={s.formFieldsWrapper}>{children}</div>
  </div>
 );
};
