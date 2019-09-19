import React from "react";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solid } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regular } from '@fortawesome/free-regular-svg-icons'

function Like(props) {
  const isLiked = props.favorites.map(fave => fave.id).includes(props.data.id)
  return (
    props.currentUser ?(
      <FontAwesomeIcon
        onClick={(e) => {
          e.stopPropagation();
          props.handleLike(props.data.id)
        }}
        className = {isLiked ? 'liked' : 'notLiked'} icon={isLiked ? solid : regular} color="red"/>)
      : (
      <Link to='/login'><FontAwesomeIcon icon={regular} color="red" onClick={(e)=> {e.stopPropagation()}}/></Link> )
  )
}

export default Like;
