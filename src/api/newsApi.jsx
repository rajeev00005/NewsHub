import axios from 'axios';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2'; // ✅ No extra spaces

// Create an axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-Api-Key': API_KEY,
  },
});

export const getTopHeadlines = (options = {}) => {
  const { category } = options;
  return api.get('/top-headlines', {
    params: {
      country: 'us',
      pageSize: 6,
      ...(category ? { category } : {}),
    },
  });
};

export const searchNews = (query) => api.get('/everything', {
  params: {
    q: query,
    pageSize: 6,
  },
});

export default api;