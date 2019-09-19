import React from "react";

function Like(props) {
  const isLiked = props.favorites.map(fave => fave.id).includes(props.data.id)
  return (
    <button className = {isLiked ? 'liked' : 'notLiked'}
    onClick={(e) => {
      e.stopPropagation();
      props.handleLike(props.data.id)
    }}
    >{isLiked ? "Liked": "Not Liked"}</button>
  )
}

export default Like;
