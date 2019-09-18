import React from "react";
import { Link } from "react-router-dom"

function Header(props) {
  return (
    <div className="header">
      <Link to="/">
        <h1>seeNYC Header</h1>
      </Link>
      <div>
      {props.currentUser ? (
        <Link to="/login"><button onClick={props.handleSignOut}>Sign Out</button></Link>
      ) : (
        <Link to="/login"><button>Sign In</button></Link>
      )}
      </div>
    </div>
  )
}

export default Header;
