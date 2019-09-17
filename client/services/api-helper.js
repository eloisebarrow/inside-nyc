const axios = require('axios');

const BASE_URL = 'http://localhost:3001';

export const showBites = async () => {
  const bites = await axios.get(`${BASE_URL}/bites`);
  return bites.data;
}

export const showSites = async () => {
  const sites = await axios.get(`${BASE_URL}/sites`);
  return sites.data;
}

export const showFavorites = async (userId) => {
  const faves = await axios.get(`${BASE_URL}/user/${userId}`);
  return faves.data;
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
