import classes from "./LoadingButton.module.css";

const LoadingButton = () => {
  return (
    <div className={classes.loading}>
      <i className="fa-solid fa-spinner fa-spin" />
    </div>
  );
};
export default LoadingButton;
