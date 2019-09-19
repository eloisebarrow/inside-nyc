import React from "react";
import Form from "./form.js";
import "./login.css";

function Login(props) {
  return (
    <div className="login-form">
      <Form
        title={props.title}
        {...props}
      />
    </div>
  )
}

export default Login;
