import axios from "axios";
const apiURL = "https://label-baraq.herokuapp.com";

const Api = axios.create({ baseURL: apiURL });

export { apiURL, Api };
