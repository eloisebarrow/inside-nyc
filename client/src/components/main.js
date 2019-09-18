import React from 'react';
import Login from './login';
import Home from './home';
import Destinations from './destinations';
import { Route, Switch } from 'react-router-dom';

function Main(props) {
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
        <Route exact path='/login' render={() => (
          <Login
            title={'login'}
            {...props}
          />
        )}/>
        <Route exact path='/register' render={() => (
          <Login
            title={'register'}
            {...props}
          />
        )}/>
        <Route path='/' render={() => (
          <Home
            title={'HOME'}
            {...props}
          />
        )}/>
      </Switch>
    </div>
  );
}

export default Main;
