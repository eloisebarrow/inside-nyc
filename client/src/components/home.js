import React from "react";
import { Link } from 'react-router-dom'

function Home(props) {
  return (
    <div>
      <Link to="/bites">
        <h3>BITES</h3>
      </Link>
      <Link to="/sites">
        <h3>SITES</h3>
      </Link>
      {props.currentUser ? (
      <Link to='/favorites/user/:user_id'>
        <h3>FAVORITES</h3>
      </Link> ):( <Link to='/login'>
        <h3>FAVORITES</h3>
      </Link> )
      }
    </div>
  )
}

export default Home;
