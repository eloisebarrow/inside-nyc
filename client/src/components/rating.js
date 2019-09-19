import React from "react";
import StarRatingComponent from 'react-star-rating-component';

function Ratings(props) {
  return (
    <div>
      <StarRatingComponent
        name="rating"
        starCount={5}
        value={props.rating}
        onStarClick={props.onStarClick.bind(this)}
      />
    </div>
  )
}

export default Ratings;
