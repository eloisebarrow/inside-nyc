const axios = require('axios');

const BASE_URL = 'http://localhost:3001';

export const showBites = async () => {
  // Make a get request using axios
  // to get all destinations and return .data
  const bites = await axios.get(`${BASE_URL}/bites`);
  return bites.data;
}

export const showSites = async () => {
  // Make a get request using axios
  // to get all destinations and return .data
  const sites = await axios.get(`${BASE_URL}/sites`);
  return sites.data;
}

export const showFavorites = async (userId) => {
  // Make a get request using axios
  // to get all destinations and return .data
  const faves = await axios.get(`${BASE_URL}/user/${userId}`);
  return faves.data;
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
