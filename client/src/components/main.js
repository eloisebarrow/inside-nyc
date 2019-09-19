import React from 'react';
import './main.css';
import Login from './login';
import Home from './home';
import Destinations from './destinations';
import Details from './details';
import { Route, Switch } from 'react-router-dom';

function Main(props) {
  return (
    <div className="main">
      <Switch>

        <Route path='/favorites' render={() => (
          <Destinations
            title={'FAVORITES'}
            data={props.favorites}
            favorites={props.favorites}
            handleLike={props.handleLike}
            handleDetails={props.handleDetails}
            currentUser={props.currentUser}
          />
        )}/>
        <Route exact path='/bites' render={() => (
          <Destinations
            title={'BITES'}
            data={props.bites}
            favorites={props.favorites}
            handleLike={props.handleLike}
            handleDetails={props.handleDetails}
            currentUser={props.currentUser}
            />
          )}/>
        <Route exact path='/sites' render={() => (
          <Destinations
            title={'SITES'}
            data={props.sites}
            favorites={props.favorites}
            handleLike={props.handleLike}
            handleDetails={props.handleDetails}
            currentUser={props.currentUser}
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
        {props.details &&
          <Route exact path={`/:${props.details.id}`} render={() => (
            <Details
            data={props.details}
            />
          )}/>
        }
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
