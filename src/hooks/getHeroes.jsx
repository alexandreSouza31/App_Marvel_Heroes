import axios from "axios";

//import keys from "./keys";
import md5 from "md5";

const public_key = import.meta.env.VITE_API_PUBLIC_KEY;
const private_key = import.meta.env.VITE_API_PRIVATE_KEY;
const base_url = import.meta.env.VITE_API_BASE_URL;

const time_stamp = new Date().getTime();
const hash = md5(time_stamp + private_key + public_key);
const url = `${base_url}?ts=${time_stamp}&apikey=${public_key}&hash=${hash}`;

const getHeroes = axios.create({
    baseURL: `${url}`
})

export default getHeroes;