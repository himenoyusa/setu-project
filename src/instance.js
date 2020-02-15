import Axios from "axios";

let instance = Axios.create({
  baseURL: "http://www.kanata.moe/"
});

export default instance;
