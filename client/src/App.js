import React from 'react';
import './App.css';
import Main from './components/main';
import Header from './components/header';
import Footer from './components/footer';
import { withRouter } from 'react-router';

import {
  showBites, showSites,
  showFavorites, registerUser,
  loginUser, verifyUser,
  addFavorite, deleteFavorite
  } from './services/api-helper';


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
    },
    error: '',
    details: null
  }

  handleDetails = (destinationId) => {
    console.log(destinationId);
    const destination = [...this.state.bites, ...this.state.sites].find(destination =>
      destination.id === destinationId);
    this.setState({
      details: destination
    });
  }

  handleLike = (destinationId) => {
    if (this.state.favorites.find((favorite) => favorite.id === destinationId)) {
      deleteFavorite(destinationId);
      this.setState(prevState => ({
        favorites: prevState.favorites.filter((favorite) => favorite.id !== destinationId)
      }));
    } else {
      const bite = this.state.bites.find((bite) => bite.id === destinationId);
      const site = this.state.sites.find((site) => site.id === destinationId);
      const newFavorite = bite ? bite : site;
      addFavorite(destinationId);
      this.setState(prevState => ({
        favorites: [...prevState.favorites, newFavorite]
      }));
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
    if (currentUser.error) {
      this.setState({
        error: "Invalid Credentials",
        formData: {
          email: '',
          nickname: '',
          password: ''
        }
      })
    } else {
      this.setState({
        currentUser,
        formData: {
          email: '',
          nickname: '',
          password: ''
        },
        error: ''
       });
       this.props.history.push('/home')
    }

  }

  handleLogin = async () => {
    const currentUser = await loginUser(this.state.formData);
    if (currentUser.error) {
      this.setState({
        error: "Invalid Credentials",
        formData: {
          email: '',
          nickname: '',
          password: ''
        }
      })
    } else {
      this.setState({
        currentUser,
        formData: {
          email: '',
          nickname: '',
          password: ''
        },
        error: ''
       });
       this.getFavorites(currentUser.id)
       this.props.history.push('/home')
    }
  }

  handleRemoveError = () => {
    this.setState({
      error: ''
    })
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

  componentDidMount = async () => {
    this.getBites();
    this.getSites();
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser });
      this.getFavorites(currentUser.id);
    }
  }

  render() {
    return (
      <div className="App">
        <Header
          currentUser={this.state.currentUser}
          handleSignOut={this.handleSignOut}
          handleRemoveError={this.handleRemoveError}
        />
        <Main
          details={this.state.details}
          sites={this.state.sites}
          bites={this.state.bites}
          favorites={this.state.favorites}
          currentUser={this.state.currentUser}
          formData={this.state.formData}
          error={this.state.error}
          handleLogin={this.handleLogin}
          handleRegister={this.handleRegister}
          handleChange={this.handleChange}
          handleLike={this.handleLike}
          handleDetails={this.handleDetails}
          handleRemoveError={this.handleRemoveError}
        />
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
