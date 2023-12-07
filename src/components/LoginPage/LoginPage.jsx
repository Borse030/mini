// src/components/LoginForm.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const fileds = [
    {
      lebel: "User Name",
      type: "email",
      data: email,
      onChange: onChangeEmail,
    },
    {
      lebel: "Password",
      type: "text",
      data: password,
      onChange: onChangePassword,
    },
  ];

  const handleLogin = () => {
    // Handle login logic here
    console.log("Logging in with:", email, password);
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        {fileds.map((value) => {
          return (
            <>
              <label>{value.lebel}</label>
              <input
                type={value.type}
                value={value.data}
                onChange={value.onChange}
              />
              <br />
            </>
          );
        })}
        <Link to={"/signup"}>New User</Link>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
