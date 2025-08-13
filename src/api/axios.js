// src/api/axios.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://wcfmvw9r-5000.inc1.devtunnels.ms/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
