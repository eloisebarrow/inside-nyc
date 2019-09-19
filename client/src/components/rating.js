import React from "react";
import StarRatingComponent from 'react-star-rating-component';

function Ratings(props) {
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <StarRatingComponent
        name={`${props.destinationId}`}
        starCount={5}
        value={props.rating}
        onStarClick={props.onStarClick}
      />
    </div>
  )
}

export default Ratings;
