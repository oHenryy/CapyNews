import axios from 'axios';

const API_KEY = '5b72aa450dad4177890eb3502b8cc520';
const BASE_URL = 'https://newsapi.org/v2';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`
  }
});

export default api;
