import React from 'react';
import './App.css';
import Main from './components/main';
import Header from './components/header';
import Footer from './components/footer';

import { showBites, showSites, showFavorites, registerUser, loginUser } from './services/api-helper';


class App extends React.Component {
  state = {
    bites: [],
    sites: [],
    favorites: [],
    currentUser: null,
    formData: {
      email: '',
      nickname: '',
      password: ''
    }
  }

  handleSignOut = () => {
    this.setState(prevState => ({
      currentUser: null
    }))
    localStorage.clear();
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }));
  }

  handleRegister = async () => {
    const currentUser = await registerUser(this.state.formData);
    this.setState({
      currentUser,
      formData: {
        email: '',
        nickname: '',
        password: ''
      }
     });
  }

  handleLogin = async () => {
    const currentUser = await loginUser(this.state.formData);
    this.setState({
      currentUser,
      formData: {
        email: '',
        nickname: '',
        password: ''
      }
     });
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
    // console.log(this.state.sites);
    // console.log(this.state.bites);
    // console.log(this.state.favorites);
    return (
      <div className="App">
        <Header />
        <Main
        sites={this.state.sites}
        bites={this.state.bites}
        favorites={this.state.favorites}
        handleLogin={this.handleLogin}
        handleRegister={this.handleRegister}
        handleChange={this.handleChange}
        formData={this.state.formData}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
