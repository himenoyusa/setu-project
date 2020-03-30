import axios from 'axios';
import cookie from 'react-cookies';

const token = cookie.load('userToken'); // ? cookie.load('userToken') : '';
const instance = axios.create({
  baseURL: 'http://localhost:3001/',
  timeout: 1000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    Authorization: `Bearer ${token}`,
  },
});

export default instance;
