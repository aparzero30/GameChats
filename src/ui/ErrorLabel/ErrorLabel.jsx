import classes from "./Error.module.css";

const ErrorLabel = (props) => {
  return <label className={classes.error}>{props.error}</label>;
};
export default ErrorLabel;
