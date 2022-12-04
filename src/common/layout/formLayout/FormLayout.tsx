import s from "./formLayout.module.scss";
import { NavigateHeader } from "./NavigateHeader";

interface FormLayoutType {
 children: React.ReactNode;
 textLabel: string;
 closed?: boolean;
}

export const FormLayout = ({
 children,
 textLabel,
 closed,
}: FormLayoutType) => {
 return (
  <div className={s.formLayout}>
   <NavigateHeader textLabel={textLabel} closed={closed} />

   <div className={s.formFieldsWrapper}>{children}</div>
  </div>
 );
};
