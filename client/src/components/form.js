import React from "react";

const Form = props => {
  return (
    <>
      <h2>{props.title}</h2>
      <form onSubmit={(e) => {
        if (props.title === "Register"){
          props.registerUser(e)
        } else {
          props.loginUser(e)
        }
      }}>
        <label htmlFor="email">Email: </label>
        <input onChange={(e) => props.handleChange(e)}
          id="email"
          type="text"
          name="email"
          value={props.form.email}
        />
        {
          props.title === "Register" && (
            <>
            <label htmlFor="password">Nickname: </label>
            <input onChange={(e) => props.handleChange(e)}
              id="nickname"
              type="text"
              name="nickname"
              value={props.form.password}
            />
          </>
          )
        }
        <label htmlFor="password">Password: </label>
        <input onChange={e => props.handleChange(e)}
          id="password"
          type="text"
          name="password"
          value={props.form.password}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Form;
