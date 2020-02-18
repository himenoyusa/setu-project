import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'http://localhost/',
});

export default instance;
