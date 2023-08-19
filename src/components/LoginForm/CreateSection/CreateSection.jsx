import classes from "./CreateSection.module.css";
import FormInput from "../../../ui/FormInput/FormInput";
import FormButton from "../../../ui/FormButton/FormButton";
import AvatarUpload from "../../AvatarUpload/AvatarUpload";
import { useRef, useState } from "react";
import CreateAccountAction from "../../../http/CreateAccount";
import LoadingButton from "../../../ui/LoadingButton/LoadingButton";
import ErrorLabel from "../../../ui/ErrorLabel/ErrorLabel";

const CreateSection = () => {
  const passwordRef = useRef(null);
  const emailRef = useRef(null);
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const imageUploadHandler = (uploadedImage) => {
    setImage(uploadedImage);
  };

  const createAccountHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    // console.log(passwordRef.current.value);
    // console.log(emailRef.current.value);
    // console.log(image);
    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      profileImage: image,
      role: "USER",
    };

    try {
      await CreateAccountAction(user);
      setIsLoading(false);
    } catch (exception) {
      setIsLoading(false);
      setError(exception.message);
    }
  };

  return (
    <form className={classes.loginSection} onSubmit={createAccountHandler}>
      <h1>GAMERCHATS</h1>
      {error && <ErrorLabel error={error} />}

      <FormInput for="email" ref={emailRef} />
      <FormInput for="password" ref={passwordRef} />
      <AvatarUpload onUpload={imageUploadHandler} />
      {/* <FormButton button="SIGN UP" type="submit" /> */}
      {isLoading ? (
        <LoadingButton />
      ) : (
        <FormButton button="SIGN UP" type="submit" />
      )}
    </form>
  );
};
export default CreateSection;
