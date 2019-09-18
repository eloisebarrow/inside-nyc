import React from "react";
import { Link, withRouter } from "react-router-dom";

const Form = props => {
  return (
    <>
      <h2>{props.title}</h2>
      <form onSubmit={(e) => {
        e.preventDefault()
        if (props.title === "register"){
          props.handleRegister();
          props.history.push('/home')
        } else {
          props.handleLogin();
          props.history.push('/home')
        }
      }}>
        <label htmlFor="email">Email: </label>
        <input onChange={(e) => props.handleChange(e)}
          id="email"
          type="text"
          name="email"
          value={props.formData.email}
        />
        {
          props.title === "register" && (
            <>
              <label htmlFor="password">Nickname: </label>
              <input onChange={(e) => props.handleChange(e)}
                id="nickname"
                type="text"
                name="nickname"
                value={props.formData.nickname}
              />
            </>
          )
        }
        <label htmlFor="password">Password: </label>
        <input onChange={(e) => props.handleChange(e)}
          id="password"
          type="password"
          name="password"
          value={props.formData.password}
        />
        <button type="submit">Submit</button>
        {
          props.title === "login" && (
            <Link to="/register"><button>Register</button></Link>
          )
        }
      </form>
    </>
  )
}

export default withRouter(Form);
