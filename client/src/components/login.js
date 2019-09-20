import React from "react";
import "./login.css";
import Form from "./form.js";

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
