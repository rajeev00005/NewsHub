

import axios from 'axios';

// Use local API route as proxy to avoid CORS issues
const apiKey = import.meta.env.VITE_NEWS_API_URL || 'bcdef5c8cd1044e9ec05193abf4c74c1';
const api = axios.create({
  baseURL: 'https://gnews.io/api/v4/',
});



export const getTopHeadlines = (options = {}) => {
  const { category } = options;
  return api.get(`search?q=Google&lang=en&max=9&apikey=${apiKey}`, {
    params: {
      q: category ? `Google ${category}` : 'Google',

    },
  });
};



export const searchNews = (query) => api.get(`search?q=${query}&lang=en&max=5&apikey=${apiKey}`, {
  params: {
    q: query,
  },
});

export default api;