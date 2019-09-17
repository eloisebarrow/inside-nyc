import React from 'react';
// import Login from './login';
// import Home from './home';
import Destinations from './destinations';

function Main(props) {
  return (
    <div className="main">
      <h1>Main</h1>
      <Destinations
        sites={props.sites}
      />
      <Destinations
        bites={props.bites}
      />
      <Destinations
        favorites={props.favorites}
      />
    </div>
  );
}

export default Main;
