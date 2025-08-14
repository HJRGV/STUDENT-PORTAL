import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL + '/api',
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export const registerUser = (data) => API.post('/register', data);
export const loginUser = (data) => API.post('/login', data);
