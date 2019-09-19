import React from "react";
import Rating from "./rating"

function Details(props) {

  const ratingObj = props.ratings.find((rating) => rating.destinationId === props.data.id);

  return (
    <div>
      <h1>{props.data.name}</h1>
      <p>{props.data.borough}</p>
      <p>{props.data.description}</p>
      <p>{props.data.address}</p>
      <a href={props.data.website} target="_blank">Website</a>
      <Rating
        destinationId={props.data.id}
        onStarClick={props.onStarClick}
        rating={ratingObj ? ratingObj.rating : 0}
      />
    </div>
  )
}

export default Details;
