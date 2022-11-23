import { ChangeEvent, ReactNode } from "react";
import cn from "classnames";
import s from "./input.module.scss";

interface InputType {
 inputLabel?: string;
 type?: string;
 errors?: any;
 errorBackgroundOrange?: any;
 inputValue?: string;
 children?: ReactNode;
 placeholder: string;
 onChange: (e: ChangeEvent<HTMLInputElement>) => void;
 ItemRef?: any;
 onClick?: () => void;
}
export const Input = ({
 children,
 inputLabel,
 type = "text",
 errors,
 errorBackgroundOrange,
 inputValue,
 placeholder,
 onChange,
 ItemRef,
 onClick,
 ...props
}: InputType) => {
 return (
  <div className={s.wrapperInput}>
   <label>{inputLabel}</label>

   <div className={s.inpFieldsRelative}>
    <input
     className={cn({
      [s.error]: errors,
      [s.errorBackgroundOrange]: errorBackgroundOrange,
     })}
     type={type}
     value={inputValue}
     placeholder={placeholder}
     onChange={onChange}
     onClick={onClick}
     ref={ItemRef}
     {...props}
    />
    {children}
    {errors && (
     <span
      className={cn({
       [s.errorBackgroundOrange]: errorBackgroundOrange,
      })}
     >
      {errors}
     </span>
    )}
   </div>
  </div>
 );
};
