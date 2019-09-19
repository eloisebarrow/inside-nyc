const axios = require('axios');

const BASE_URL = 'http://localhost:3001';

const api = axios.create({
  baseURL: BASE_URL
})

export const showBites = async () => {
  try {
    const bites = await api.get(`/bites`);
    return bites.data;
  } catch (e) {
    console.log(e.message);
  }
}

export const showSites = async () => {
  try {
    const sites = await api.get(`/sites`);
    return sites.data;
  } catch (e) {
    console.log(e.message);
  }
}

export const showFavorites = async (userId) => {
  try {
    const favorites = await api.get(`/favorites`);
    return favorites.data;
  } catch (e) {
    console.log(e.message);
  }
}

export const addFavorite = async (destinationId) => {
  try {
    await api.post(`/favorites/${destinationId}`);
  } catch (e) {
    console.log(e.message);
  }
}

export const deleteFavorite = async (destinationId) => {
  try {
    await api.delete(`/favorites/${destinationId}`);
  } catch (e) {
    console.log(e.message);
  }
}

export const loginUser = async (loginData) => {
  try {
    const resp = await api.post(`/auth/login`, loginData);
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.user
  } catch (e) {
    return { error: e.message };
  }
}

export const registerUser = async (registerData) => {
  try {
    const resp = await api.post(`/auth/register`, registerData);
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.user
  } catch (e) {
    return { error: e.message };
  }
}

export const verifyUser = async () => {
  try {
    const token = localStorage.getItem('authToken');
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const resp = await api.get('/auth/verify');
      return resp.data
    } else {
      return false;
    }
  } catch (e) {
    console.log(e.message);
  }
}

export const postRating = async (destinationId, rating) => {
  try {
    const resp = await api.post(`/ratings`, { destinationId, rating });
    return resp.data
  } catch (e) {
    console.log(e.message);
  }
}

export const putRating = async (ratingId, destinationId, rating) => {
  try {
    const resp = await api.put(`/ratings/${ratingId}`, { destinationId, rating });
    return resp.data
  } catch (e) {
    console.log(e.message);
  }
}
