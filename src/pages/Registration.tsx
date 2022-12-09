import { FormProvider, useForm } from "react-hook-form";
import { Outlet, useNavigate } from "react-router-dom";
import { ISignUpFormValues } from "../modules/authorization/types/authType";
import { WrapperFullScreen } from "../common/layout/wrapperFullScreen/WrapperFullScreen";
import { RouteNames } from "../core/router/RouteNames";
import { useAppDispatch } from "../core/redux/app/hooks";
import { authThunkRegister } from "../modules/authorization/authThunkRegister";
import s from "./styles/registrationPage.module.scss";

export const Registration = () => {
 const dispatch = useAppDispatch();
 const navigate = useNavigate();

 const method = useForm<ISignUpFormValues>({
  mode: "onBlur",
  defaultValues: {
   email: "",
   password: "",
   type_account: null,
   name_field: "",
   img_upload: "",
   city: null,
   gender: null,
   age: null,
   tool: [],
   genre: [],
   work_experience: "",
   master: null,
   education: "",
   private_settings: null,
  },
 });

 const onSubmit = (data: ISignUpFormValues) => {
  dispatch(authThunkRegister(data));
  console.log("data = ", data);
  navigate(RouteNames.LOGIN, { replace: true });
 };

 return (
  <WrapperFullScreen>
   <FormProvider {...method}>
    <form
     noValidate
     className={s.formRegister}
     onSubmit={method.handleSubmit(onSubmit)}
    >
     <Outlet />
    </form>
   </FormProvider>
  </WrapperFullScreen>
 );
};
