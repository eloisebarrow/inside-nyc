import React from 'react';
import SingleDestination from './singleDestination';
import { Link } from "react-router-dom"

function Destinations(props) {
  const destinations = props.data.map((destination, id) => {
    return <Link
      to={`/${destination.id}`}
      onClick={() => props.handleDetails(destination.id)}>
      <SingleDestination
        key={id}
        data={destination}
        favorites={props.favorites}
        handleLike={props.handleLike}
      />
    </Link>
  });

  return (
    <div className="destinations">
      <h1>{props.title}</h1>
      <div className="listContainer">
        {destinations}
      </div>
    </div>
  );
}

export default Destinations;
