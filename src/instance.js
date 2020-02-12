import Axios from 'axios';

let instance = Axios.create({
    baseURL: 'http://localhost/'
});

export default instance;