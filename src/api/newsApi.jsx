

import axios from 'axios';

// Use local API route as proxy to avoid CORS issues
const api = axios.create({
  baseURL: '/api',
});



export const getTopHeadlines = (options = {}) => {
  const { category } = options;
  return api.get('/news', {
    params: {
      ...(category ? { category } : {}),
    },
  });
};



export const searchNews = (query) => api.get('/news', {
  params: {
    q: query,
  },
});

export default api;