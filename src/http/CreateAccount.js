import { json, redirect } from "react-router-dom";

const CreateAccountAction = async (user) => {
  const url = "http://localhost:8080/api/v1/auth/register";

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    // Handle error response
    //   throw new Error("Failed to load user data");
    throw json({ message: "failed to load resources" }, { status: 500 });
  }
  // Handle successful response
  const data = await response.json();

  localStorage.setItem("JWT-TOKEN", data.token);
  return redirect("/main");
};
export default CreateAccountAction;
