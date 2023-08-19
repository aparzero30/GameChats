import classes from "./LoginSection.module.css";
import FormInput from "../../../ui/FormInput/FormInput";
import FormButton from "../../../ui/FormButton/FormButton";
import LoadingButton from "../../../ui/LoadingButton/LoadingButton";
import ErrorLabel from "../../../ui/ErrorLabel/ErrorLabel";
import { useRef, useState } from "react";
import LoginAccountAction from "../../../http/LoginAccount";
import redirectAction from "../../../http/Redirect";

const LoginSection = () => {
  const passwordRef = useRef(null);
  const emailRef = useRef(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const loginAccountHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      await LoginAccountAction(user);

      setIsLoading(false);
    } catch (exception) {
      setIsLoading(false);
      setError(exception.message);
    }
  };

  return (
    <form className={classes.loginSection} onSubmit={loginAccountHandler}>
      <h1>GAMERCHATS</h1>
      {error && <ErrorLabel error={error} />}
      <FormInput for="email" ref={emailRef} />
      <FormInput for="password" ref={passwordRef} />

      {isLoading ? (
        <LoadingButton />
      ) : (
        <FormButton button="LOGIN" type="submit" />
      )}
    </form>
  );
};
export default LoginSection;
