import classes from "./LoginForm.module.css";
import LoginSection from "./LoginSection/LoginSection";
import CreateSection from "./CreateSection/CreateSection";
import { useState } from "react";
import Banner from "./Banner/Banner";

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const isLoginChangeHandler = () => {
    setIsLogin((prev) => !prev); // Toggle the state
  };

  return (
    <div className={classes.loginForm}>
      <section className={classes.part}>
        {isLogin ? <LoginSection /> : <CreateSection />}
        <p onClick={isLoginChangeHandler}>
          {isLogin ? "Dont have account?" : "Already Have Account?"}{" "}
          {/* Use the ternary operator here */}
        </p>
      </section>
      <Banner />
    </div>
  );
};

export default LoginForm;
