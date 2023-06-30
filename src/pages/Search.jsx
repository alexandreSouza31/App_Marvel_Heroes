import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import md5 from "md5";
import HeroeCard from "../components/HeroeCard";
import getHeroes from "../services/instanceAxios";
import { Card, Container, Result } from "../components/Styled-components/HomeAndSearchStyles";

const public_key = import.meta.env.VITE_API_PUBLIC_KEY;
const private_key = import.meta.env.VITE_API_PRIVATE_KEY;
const base_url = import.meta.env.VITE_API_BASE_URL;

const time_stamp = new Date().getTime();
const hash = md5(time_stamp + private_key + public_key);

const Search = () => {
    const [searchParams] = useSearchParams();
    const [heroes, setHeroes] = useState([]);
    const [load, setLoad] = useState(true);
    const results = searchParams.get("nameStartsWith");

    const url = `${base_url}?nameStartsWith=${results}&ts=${time_stamp}&apikey=${public_key}&hash=${hash}`;

    async function findHeroes() {
        const response = await getHeroes.get(`${url}`)

        setHeroes(response.data.data.results);
    }
    useEffect(() => {
        setLoad(false);
        //findHeroes();

    }, [results])

    return (
        <Container>
            <h2>
                Resultados para
                <Result> {results}</Result>
            </h2>
            {load === true ?
                (<>

                    <p>carregando...</p>
                </>
                ) : (
                    <Card>
                        {heroes.map(character => <HeroeCard key={character.id} character={character} />

                        )}
                    </Card>
                )}

        </Container>
    )
}

export default Search