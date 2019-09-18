import React from "react";
import Form from "./form.js"

function Login(props) {
  return (
    <div style={{padding: '100px'}}>
      <Form
        title={props.title}
        {...props}
      />
    </div>
  )
}

export default Login;
