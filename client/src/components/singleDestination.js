import React from 'react';
import Like from './like';
import './singleDestination.css';

function SingleDestination(props) {
  const backgroundStyles = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: 'cover',
    width: '100%',
    height: '100%'
  }

  return (
    <div  style={backgroundStyles}className="single-destination">
      <div className="div-details">
        <h4>{props.data.name}</h4>
        {
          <Like
          favorites={props.favorites}
          data={props.data}
          handleLike={props.handleLike}
          currentUser={props.currentUser}
          />

        }
      </div>
    </div>
  );
}

export default SingleDestination;
