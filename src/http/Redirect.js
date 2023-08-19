import { redirect } from "react-router-dom";
const redirectAction = () => {
  alert("Redirect");
  return redirect("/main");
};

export default redirectAction;
