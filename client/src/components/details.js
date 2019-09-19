import React from "react";

function Details(props) {
  console.log('props from Details:', props)
  return (
    <div>
      <h1>{props.data.name}</h1>
      <p>{props.data.borough}</p>
      <p>{props.data.description}</p>
      <p>{props.data.address}</p>
      <a href={props.data.website} target="_blank">Website</a>
    </div>
  )
}

export default Details;
