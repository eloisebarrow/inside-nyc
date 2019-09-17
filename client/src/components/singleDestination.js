import React from 'react';

function SingleDestination(props) {
  return (
    <div className="single-destination">
      <h4>{props.data.name}</h4>
    </div>
  );
}

export default SingleDestination;
