import s from "./textAreaElement.module.scss";

interface TextAreaElementType {
 value: string | any;
 placeholderValue: string;
 onChange: () => void;
}
export const TextAreaElement = ({
 value,
 placeholderValue,
 onChange,
 ...props
}: TextAreaElementType) => {
 return (
  <div className={s.textAreaElement}>
   <textarea
    className={s.textField}
    placeholder={placeholderValue}
    onChange={onChange}
    value={
     typeof value !== "object"
      ? value
      : "Нужен список организаций для выбора"
    }
    {...props}
   ></textarea>
  </div>
 );
};
