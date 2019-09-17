import React from 'react';
// import Login from './login';
// import Home from './home';
import Destinations from './destinations';
import Home from './home';
import { Route, Switch } from 'react-router-dom';

function Main(props) {
  console.log('main',props.bites);
  return (
    <div className="main">
      <Switch>
        <Route path='/favorites/user/:user_id' render={() => (
          <Destinations
            title={'FAVORITES'}
            data={props.favorites}
            favorites={props.favorites}
          />
        )}/>
        <Route path='/bites' render={() => (
          <Destinations
            title={'BITES'}
            data={props.bites}
            favorites={props.favorites}
            />
          )}/>
        <Route exact path='/sites' render={() => (
          <Destinations
            title={'SITES'}
            data={props.sites}
            favorites={props.favorites}
          />
        )}/>
        <Route path='/' render={(props) => (
          <Home
          />
        )}/>
      </Switch>
    </div>
  );
}

export default Main;
