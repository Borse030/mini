// src/components/LoginForm.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SingupPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const fileds = [
    {
      lebel: "Name",
      type: "text",
      data: name,
      onChange: onChangeName,
    },
    {
      lebel: "Address",
      type: "text",
      data: address,
      onChange: onChangeAddress,
    },
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
    console.log("Sign in with:", name, address, email, password);
  };

  return (
    <div>
      <h2>Sign-Up Page</h2>
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
        <Link to={"/"}>Have a Account!</Link>
        <br />
        <button type="button" onClick={handleLogin}>
          Register User
        </button>
      </form>
    </div>
  );
};

export default SingupPage;
