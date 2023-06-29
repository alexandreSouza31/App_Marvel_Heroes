import axios from "axios";

const base_url = import.meta.env.VITE_API_BASE_URL;

const instanceAxios = axios.create({
    baseURL: `${base_url}`
})

export default instanceAxios;