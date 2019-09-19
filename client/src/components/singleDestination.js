import React from 'react';
import Like from './like';
import './singleDestination.css';

function SingleDestination(props) {
  const backgroundStyles = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: 'cover'
  }

  return (
    <div  style={backgroundStyles}className="single-destination">
      {/*<img src={props.image} />*/}
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
