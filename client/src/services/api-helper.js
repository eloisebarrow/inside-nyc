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
  const favorites = await axios.get(`${BASE_URL}/favorites/user/${userId}`);
  return favorites.data;
}

// export const showSites = (favoriteData) => {
//   // Make a post request using axios
//   // to create a favorite and return .data
//   const resp = await axios.post(`${BASE_URL}/destinations/:rating_id`, favoriteData);
//   return resp.data;
// }
//
// export const showFavorites = (ratingData) => {
//   // Make a post request using axios
//   // to create a rating and return .data
//   const resp = await axios.post(`${BASE_URL}/destinations/:rating_id`, ratingData);
//   return resp.data;
// }
//
// export const removeFavorite = (tweetId) => {
//   // Make a delete request using axios
//   // and return the response
//   const resp = await axios.get(`${BASE_URL}/tweets/${tweetId}`);
//   return resp;
// }
