import React from "react";
import './header.css';
import { Link } from "react-router-dom";
import './header.css';

function Header(props) {
  return (
    <div className="header">
      <Link to="/">
        <h1>seeNYC</h1>
      </Link>
      <div>
      {props.currentUser ? (
        <div className="loggedIn">
          <h3>Hey {props.currentUser.nickname}</h3>
          <div className="links">
          <Link to="/favorites"><button>Favorites</button></Link>
          <Link to="/login" className="sign-in"><button onClick={props.handleSignOut}>Sign Out</button></Link>
          </div>
        </div>
      ) : (
        <Link to="/login" className="sign-in"><button onClick={props.handleRemoveError}>Sign In</button></Link>
      )}
      </div>
    </div>
  )
}

export default Header;
