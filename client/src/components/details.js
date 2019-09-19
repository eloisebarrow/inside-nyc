import React from "react";
import Rating from "./rating"

function Details(props) {
  console.log('props from Details:', props)
  return (
    <div>
      <h1>{props.data.name}</h1>
      <p>{props.data.borough}</p>
      <p>{props.data.description}</p>
      <p>{props.data.address}</p>
      <a href={props.data.website} target="_blank">Website</a>
      <Rating
        onStarClick={props.onStarClick}
        rating={props.rating}
      />
    </div>
  )
}

export default Details;
