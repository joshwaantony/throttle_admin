// // src/api/axios.js
// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'https://wcfmvw9r-5000.inc1.devtunnels.ms/api/v1',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// export default api;
// src/api/axios.js


import axios from 'axios';

const api = axios.create({
  baseURL: 'https://wcfmvw9r-5000.inc1.devtunnels.ms/api/v1',
});

// Optional: add token automatically if using auth
api.interceptors.request.use((config) => {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
