import React from 'react';
import './App.css';
import Main from './components/main'
import { showBites, showSites, showFavorites } from './services/api-helper.js';


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

  getFavorites = async () => {
    const favorites = await showFavorites();
    this.setState({ favorites })
  }

  componentDidMount() {
    this.getBites();
    this.getSites();
    this.getFavorites();
  }

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

export default App;
