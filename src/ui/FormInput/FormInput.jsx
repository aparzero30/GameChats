import classes from "./FormInput.module.css";
import { forwardRef } from "react";

const FormInput = forwardRef((props, ref) => {
  return (
    <div className={classes.formInput}>
      <label>{props.for.toUpperCase()}</label>
      <input required={true} name={props.for} type={props.for} ref={ref} />
    </div>
  );
});
export default FormInput;
