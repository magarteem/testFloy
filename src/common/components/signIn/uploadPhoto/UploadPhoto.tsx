import { useRef } from "react";
import { useFormContext } from "react-hook-form";
import s from "./uploadPhoto.module.scss";

export const UploadPhoto = () => {
  const {
    register,
    control,
    watch,
    formState: { errors, isValid },
  } = useFormContext();

  const { ref, ...rest } = register("imageUrl");

  const filePicker = useRef<HTMLInputElement | null>(null);

  const handlePickerRef = () => {
    if (filePicker.current) {
      console.log(filePicker.current);
      filePicker.current.click();
    }
  };

  return (
    <div className={s.uploadPhoto}>
      <p onClick={handlePickerRef}>Выбрать файл</p>
      <input
        {...rest}
        type="file"
        ref={(e) => {
          ref(e);
          filePicker.current = e;
        }}
      />
      <span>Размер файла не более 1 мб</span>
    </div>
  );
};
