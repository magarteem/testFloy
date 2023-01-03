import { Controller } from "react-hook-form";
import { UploadPhoto } from "../../../common/components/signIn/uploadPhoto/UploadPhoto";
import s from "./formFieldsRegister.module.scss";

export interface InputFormImgUploadType {
 control: any;
 register: any;
 name: string;
}

export const InputFormImgUpload = ({
 control,
 register,
 name,
}: InputFormImgUploadType) => {
 return (
  <div className={s.selectField}>
   <Controller
    name={name}
    control={control}
    render={({ field: { onChange, ...field } }) => (
     <UploadPhoto register={register} />
    )}
   />
  </div>
 );
};
