import React from 'react';
import './App.css';
import Main from './components/main';
import { Route } from 'react-router-dom';
import { showBites, showSites, showFavorites } from './services/api-helper';


class App extends React.Component {
  state = {
    bites: [],
    sites: [],
    favorites: []
  }

  getBites = async () => {
    const bites = await showBites();
    this.setState({ bites })
  }

  getSites = async () => {
    const sites = await showSites();

    this.setState({ sites })
  }

  getFavorites = async (userId) => {
    const favorites = await showFavorites(userId);
    this.setState({ favorites })
  }

  componentDidMount() {
    this.getBites();
    this.getSites();
    this.getFavorites(1);
  }

  render() {
    console.log(this.state.sites);
    console.log(this.state.bites);
    console.log(this.state.favorites);
    return (
      <div className="App">
        { /* <Route exact path='/' render={(props) => ( */ }
          <Main
          sites={this.state.sites}
          bites={this.state.bites}
          favorites={this.state.favorites}
          />
        { /* )}/> */ }
      </div>
    );
  }
}

export default App;
