import classes from "./Login.module.css";
import LoginForm from "../../components/LoginForm/LoginForm";
import Wrapper from "../../ui/Wrapper/Wrapper";
const LoginPage = () => {
  return (
    <Wrapper>
      <div className={classes.login}>
        <LoginForm />
      </div>
    </Wrapper>
  );
};
export default LoginPage;
