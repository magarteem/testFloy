import { LoginSocialNetwork } from "../common/components/signIn/LoginSocialNetwork";
import { RegistrationQuestionLink } from "../common/components/signIn/registrationQuestion/RegistrationQuestionLink";
import { RouteNames } from "../common/variables/RouteNames";
import { FormLogin } from "../modules/authorization/FormLogin";
import s from "./styles/loginPage.module.scss";

export const Login = () => {
  return (
    <section className={s.loginInLayout}>
      <div className={s.fieldLogin}>
        <FormLogin />

        <LoginSocialNetwork />
      </div>

      <RegistrationQuestionLink
        questionText="Нет аккаунта?"
        linkTo={RouteNames.REGISTER}
        lintText="ЗАРЕГИСТРИРОВАТЬСЯ"
      />
    </section>
  );
};
