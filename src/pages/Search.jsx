import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import md5 from "md5";
import HeroeCard from "../components/HeroeCard"
import getHeroes from "../hooks/getHeroes";

const Search = () => {
    const [searchParams] = useSearchParams();
    const [heroes, setHeroes] = useState([]);
    const results = searchParams.get("nameStartsWith");

    const public_key = import.meta.env.VITE_API_PUBLIC_KEY;
    const private_key = import.meta.env.VITE_API_PRIVATE_KEY;
    const base_url = "http://gateway.marvel.com/v1/public/characters";

    const time_stamp = new Date().getTime();
    const hash = md5(time_stamp + private_key + public_key);
    const url = `${base_url}?nameStartsWith=${results}&ts=${time_stamp}&apikey=${public_key}&hash=${hash}`;

    async function findHeroes() {
        const response = await getHeroes.get(`${url}`);
        setHeroes(response.data.data.results);
    }
    useEffect(() => {
        findHeroes();

    }, [results])

    return (
        <div className="home_container">
            <h2>
                Resultados para
                <span className="result"> {results}</span>
            </h2>
            <div className="home_card">
                {heroes.length === 0 && <p>carregando...</p>}
                {heroes.map(character => <HeroeCard key={character.id} character={character} />

                )}
            </div>
        </div>
    )
}

export default Search