import axios from 'axios';

export default async function handler(req, res) {
  const { category, q } = req.query;
  const API_KEY = 'bcdef5c8cd1044e9ec05193abf4c74c1';
  const BASE_URL = 'https://gnews.io/api/v4';

  let url = '';
  let params = { token: API_KEY, max: 6 };

  if (q) {
    url = `${BASE_URL}/search`;
    params.q = q;
  } else {
    url = `${BASE_URL}/top-headlines`;
    params.country = 'us';
    if (category) params.topic = category;
  }

  try {
    const response = await axios.get(url, { params });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching news', details: error.message });
  }
}
