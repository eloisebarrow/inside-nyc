import React from 'react';
import './singleDestination.css';
import Like from './like';
import Rating from "./rating"

function SingleDestination(props) {
  const backgroundStyles = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: 'cover',
    width: '100%',
    height: '100%'
  }
  let ratingObj = null;
  if (props.currentUser && props.currentUser.ratings) {
    ratingObj = props.currentUser.ratings.find((rating) => rating.destinationId === props.data.id);
  }

  return (
    <div  style={backgroundStyles} className="single-destination">
      <div className="div-details">
        <Like
          favorites={props.favorites}
          data={props.data}
          handleLike={props.handleLike}
          currentUser={props.currentUser}
        />
        <h4>{props.data.name}</h4>
        <Rating
          destinationId={props.data.id}
          onStarClick={props.onStarClick}
          rating={ratingObj ? ratingObj.rating : 0}
        />
      </div>
    </div>
  );
}

export default SingleDestination;
