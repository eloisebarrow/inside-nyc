import React from "react";
import { Link } from "react-router-dom"

function Like(props) {
  const isLiked = props.favorites.map(fave => fave.id).includes(props.data.id)
  return (
    props.currentUser ? (<button className = {isLiked ? 'liked' : 'notLiked'}
    onClick={(e) => {
      e.stopPropagation();
      props.handleLike(props.data.id)
    }}
    >{isLiked ? "Liked": "Not Liked"}</button> ) : (
      <Link to='/login'><button onClick={(e)=> {e.stopPropagation()}}>Like</button></Link> )
  )
}

export default Like;
