import { useEffect, useState } from "react";
import getHeroes from "../hooks/getHeroes";
import md5 from "md5";
//import keys from "../hooks/keys";
import HeroeCard from "../components/HeroeCard";

import "./Pages.css";

const public_key = import.meta.env.VITE_API_PUBLIC_KEY;
const private_key = import.meta.env.VITE_API_PRIVATE_KEY;
const base_url = "http://gateway.marvel.com/v1/public/characters";

const time_stamp = new Date().getTime();
const hash = md5(time_stamp + private_key + public_key);
const url = `${base_url}?ts=${time_stamp}&apikey=${public_key}&hash=${hash}`;
const Home = () => {
    const [heroes, setHeroes] = useState([]);

    async function LoadHeroes() {
        const response = await getHeroes.get(`${url}`);
        setHeroes(response.data.data.results)
    }
    useEffect(() => {
        LoadHeroes();
    }, [])

    return (
        <div className="home_container">
            <h2>Saiba mais sobre seus heróis favoritos!</h2>
            <div className="home_card">
                {heroes.length === 0 && <p>carregando...</p>}
                {heroes.map(character => <HeroeCard key={character.id} character={character} />

                )}
            </div>
        </div>
    )
}

export default Home