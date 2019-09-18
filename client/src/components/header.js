import React from "react";
import { Link } from "react-router-dom"

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <h1>seeNYC Header</h1>
      </Link>
      <div>
        <button>Login In</button>
        <button>Sign Up</button>
      </div>
    </div>
  )
}

export default Header;
