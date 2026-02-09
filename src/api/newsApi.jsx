
import axios from 'axios';

const API_KEY = 'bcdef5c8cd1044e9ec05193abf4c74c1';
const BASE_URL = 'https://gnews.io/api/v4';

// Create an axios instance
const api = axios.create({
  baseURL: BASE_URL,
});


export const getTopHeadlines = (options = {}) => {
  const { category } = options;
  return api.get('/top-headlines', {
    params: {
      country: 'us',
      max: 6,
      ...(category ? { topic: category } : {}),
      token: API_KEY,
    },
  });
};


export const searchNews = (query) => api.get('/search', {
  params: {
    q: query,
    max: 6,
    token: API_KEY,
  },
});

export default api;