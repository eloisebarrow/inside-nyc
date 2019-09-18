import React from "react";
import { Link } from "react-router-dom";

const Form = props => {

  return (
    <>
      <h2>{props.title}</h2>
      <form onSubmit={(e) => {
        e.preventDefault()
        if (props.title === "register"){
          props.handleRegister();
        } else {
          props.handleLogin();
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
            <Link to="/register"><button onClick={props.handleRemoveError}>Register</button></Link>
          )
        }
      </form>
      <p>{props.error}</p>
    </>
  )
}

export default Form;
