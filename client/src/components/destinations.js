import React from 'react';
import SingleDestination from './singleDestination';

function Destinations(props) {
  debugger;
  const destinations = props.data.map((destination, id) => {
    return <SingleDestination
      key={id}
      data={destination}
    />
  });

  return (
    <div className="destinations">
      <h1>{props.title}</h1>
      {destinations}
    </div>
  );
}

export default Destinations;
