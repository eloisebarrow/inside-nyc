import React from 'react';
import Like from './like'

function SingleDestination(props) {
  return (
    <div className="single-destination">
      <h4>{props.data.name}</h4>
      {
        <Like
        favorites={props.favorites}
        data={props.data}
        handleLike={props.handleLike}/>
      }
    </div>
  );
}

export default SingleDestination;
