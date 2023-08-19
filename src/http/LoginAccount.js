import { json, redirect } from "react-router-dom";

const LoginAccountAction = async (user) => {
  let url = "http://localhost:8080/api/v1/auth/authenticate";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "CONTENT-TYPE": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw json({ message: "could not login" }, { status: 500 });
  }

  const responseData = await response.json();
  localStorage.setItem("JWT-TOKEN", responseData.token);

  return redirect("/main");
};
export default LoginAccountAction;
