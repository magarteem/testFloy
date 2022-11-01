import s from "./textAreaElement.module.scss";

interface TextAreaElementType {
  placeholderValue: string;
  onChange: any;
}
export const TextAreaElement = ({
  placeholderValue,
  onChange,
}: TextAreaElementType) => {
  return (
    <div className={s.textAreaElement}>
      <textarea
        className={s.textField}
        placeholder={placeholderValue}
        onChange={onChange}
      ></textarea>
    </div>
  );
};
