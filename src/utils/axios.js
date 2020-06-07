import axios from 'axios';
import cookie from 'react-cookies';

const token = cookie.load('userToken'); // ? cookie.load('userToken') : '';
const instance = axios.create({
  baseURL: 'https://img.kanata.moe/',
  timeout: 1000000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    Authorization: `Bearer ${token}`,
  },
});

export default instance;
