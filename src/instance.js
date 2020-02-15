import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'http://www.kanata.moe/',
});

export default instance;
