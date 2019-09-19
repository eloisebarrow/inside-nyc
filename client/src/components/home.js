import React from "react";
import './home.css';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solid } from '@fortawesome/free-solid-svg-icons'

function Home(props) {

  return (
    <div className="categories">
      <Link to="/bites" className="bites-div">
        <h3>BITES</h3>
      </Link>
      <Link to="/sites" className="sites-div">
        <h3>SITES</h3>
      </Link>
      {props.currentUser ? (
        <div className ='fave'>
          <Link to='/favorites/user/:user_id'>
            <FontAwesomeIcon icon={solid} size="6x" color="red"/>
          </Link>
        </div>
       ):(
        <div className ='fave'>
         <Link to='/login'>
           <FontAwesomeIcon icon={solid} size="6x" color="red"/>
         </Link>
        </div>)
      }
    </div>
  )
}

export default Home;
