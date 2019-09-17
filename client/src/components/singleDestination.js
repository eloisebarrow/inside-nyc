import React from 'react';

function SingleDestination(props) {
  return (
    <div className="single-destination">
      <h4>{props.data.name}</h4>
      {
        props.favorites.map(fave => fave.id).includes(props.data.id) ? <button>Full</button> : <button>Empty</button>
      }
    </div>
  );
}

export default SingleDestination;
