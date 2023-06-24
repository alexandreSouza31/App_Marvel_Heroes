import axios from "axios";

//import keys from "./keys";
import md5 from "md5";

const time_stamp = new Date().getTime();

const public_key = "0c36393870e115e681152a5959de86b8";
const private_key = "aa2e0be558a6e4569cf62be92b4197e1930481e4";
const hash = md5(time_stamp + private_key + public_key);
const base_url = "http://gateway.marvel.com/v1/public/";
const url = `${base_url}?ts=${time_stamp}&apikey=${public_key}&hash=${hash}`;


const getHeroes = axios.create({
    baseURL: `${url}`
})

export default getHeroes;