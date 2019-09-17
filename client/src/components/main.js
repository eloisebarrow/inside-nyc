import React from 'react';
// import Login from './login';
// import Home from './home';
import Sites from './sites';
import Bites from './bites';

function Main(props) {
  return (
    <div className="main">
      <h1>seeNYC Main</h1>
      <Sites />
      <Bites />
    </div>
  );
}

export default Main;
