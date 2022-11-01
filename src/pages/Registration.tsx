import { FormProvider, useForm } from "react-hook-form";
import { Outlet, useNavigate } from "react-router-dom";
import { ISignUpFormValues } from "../modules/authorization/types/type";
import s from "./styles/registrationStepLaiout.module.scss";

export const Registration = () => {
  const navigate = useNavigate();
  const method = useForm<ISignUpFormValues>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      typeAccount: "",
    },
  });

  const onSubmit = (data: ISignUpFormValues) => {
    console.log(data);
    // navigate("/login", { replace: true });
  };

  return (
    <section className={s.signInLayout}>
      <FormProvider {...method}>
        <form onSubmit={method.handleSubmit(onSubmit)}>
          <Outlet />
        </form>
      </FormProvider>
    </section>
  );
};
