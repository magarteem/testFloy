import s from "./textAreaElement.module.scss";

interface TextAreaElementType {
  placeholderValue: string;
  onChange: () => void;
}
export const TextAreaElement = ({
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
        {...props}
      ></textarea>
    </div>
  );
};
