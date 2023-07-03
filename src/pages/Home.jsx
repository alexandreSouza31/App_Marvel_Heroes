import { useEffect, useState } from "react";
import instanceAxios from "../services/instanceAxios";
import md5 from "md5";
import HeroeCard from "../components/HeroeCard";

import { Card, Container } from "../components/Styled-components/HomeAndSearchStyles";
import Loading from "../components/Loading";

const public_key = import.meta.env.VITE_API_PUBLIC_KEY;
const private_key = import.meta.env.VITE_API_PRIVATE_KEY;
const base_url = import.meta.env.VITE_API_BASE_URL;

const time_stamp = new Date().getTime();
const hash = md5(time_stamp + private_key + public_key);
const url = `${base_url}?ts=${time_stamp}&apikey=${public_key}&hash=${hash}`;

const Home = () => {
    const [heroes, setHeroes] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);

    async function LoadHeroes() {
        const response = await instanceAxios.get(`${url}`);
        setHeroes(response.data.data.results)
    }

    setTimeout(() => {
        setRemoveLoading(true)
    }, 3000);

    useEffect(() => {
        LoadHeroes();
        setRemoveLoading(false);

    }, [])

    return (
        <Container>
            {!removeLoading && <Loading />}

            <h2>Meet your favorite characters!</h2>
            <Card>
                {heroes.map(character => <HeroeCard key={character.id} character={character} />

                )}
            </Card>
        </Container>
    )
}

export default Home