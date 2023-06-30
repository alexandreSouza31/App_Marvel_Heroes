import { useEffect, useState } from "react";
import instanceAxios from "../services/instanceAxios";
import md5 from "md5";
import HeroeCard from "../components/HeroeCard";

import "./Pages.css";
import { HomeCard, HomeContainer } from "../components/Styled-components/HomeContainer";

const public_key = import.meta.env.VITE_API_PUBLIC_KEY;
const private_key = import.meta.env.VITE_API_PRIVATE_KEY;
const base_url = import.meta.env.VITE_API_BASE_URL;

const time_stamp = new Date().getTime();
const hash = md5(time_stamp + private_key + public_key);
const url = `${base_url}?ts=${time_stamp}&apikey=${public_key}&hash=${hash}`;
const Home = () => {
    const [heroes, setHeroes] = useState([]);

    async function LoadHeroes() {
        const response = await instanceAxios.get(`${url}`);
        setHeroes(response.data.data.results)
    }
    useEffect(() => {
        LoadHeroes();
    }, [])

    return (
        <HomeContainer>
            <h2>Saiba mais sobre seus heróis favoritos!</h2>
            <HomeCard>
                {heroes.length === 0 && <p>carregando...</p>}
                {heroes.map(character => <HeroeCard key={character.id} character={character} />

                )}
            </HomeCard>
            </HomeContainer>
    )
}

export default Home