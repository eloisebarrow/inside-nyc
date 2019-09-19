import React from "react";
import './home.css';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solid } from '@fortawesome/free-solid-svg-icons'

function Home(props) {

  return (
    <div className="categories">
      <Link to="/bites" className="category-divs">
        <h3>BITES</h3>
      </Link>
      <Link to="/sites" className="category-divs">
        <h3>SITES</h3>
      </Link>
      {props.currentUser ? (
      <Link to='/favorites/user/:user_id' className="category-divs">
        <h3><FontAwesomeIcon icon={solid} size="6x" color="red"/></h3>
      </Link> ):( <Link to='/login' className="category-divs">
        <h3><FontAwesomeIcon icon={solid} size="6x" color="red"/></h3>
      </Link> )
      }
    </div>
  )
}

export default Home;
