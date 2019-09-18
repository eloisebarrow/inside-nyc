const axios = require('axios');

const BASE_URL = 'http://localhost:3001';

const api = axios.create({
  baseURL: BASE_URL
})

export const showBites = async () => {
  const bites = await api.get(`/bites`);
  return bites.data;
}

export const showSites = async () => {
  const sites = await api.get(`/sites`);
  return sites.data;
}

export const showFavorites = async (userId) => {
  const favorites = await api.get(`/favorites`);
  return favorites.data;
}

export const loginUser = async (loginData) => {
  const resp = await api.post(`/auth/login`, loginData);
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user
}

export const registerUser = async (registerData) => {
  const resp = await api.post(`/auth/register`, registerData);
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user
}

// export const showRatings = (ratingId, ratingData) => {
//   const rating = await axios.post(`${BASE_URL}/destinations/${ratingId}`, ratingData);
//   return rating.data;
// }
//
// export const removeFavorite = (userId) => {
//   const favorite = await axios.get(`${BASE_URL}/favorites/user/${userId}`);
//   return favorite;
// }
