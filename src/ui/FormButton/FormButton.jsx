import classes from "./FormButton.module.css";

const FormButton = (props) => {
  return (
    <button className={classes.btn} type={props.type}>
      {props.button}
    </button>
  );
};
export default FormButton;
