import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HeroeCard from "../components/HeroeCard";
import instanceAxios from "../services/instanceAxios";
import md5 from "md5";

//import "./Pages.css";
import Loading from "../components/Loading";
import { Card, Description, HeroeCardContainer, HeroeContainer, NotDescription } from "../components/Styled-components/pageStyles/HeroeStyles";
import { ComicCard, ComicContainer, Hr } from "../components/Styled-components/pageStyles/ComicStyles";


const public_key = import.meta.env.VITE_API_PUBLIC_KEY;
const private_key = import.meta.env.VITE_API_PRIVATE_KEY;

const time_stamp = new Date().getTime();
const hash = md5(time_stamp + private_key + public_key);
const base_url = import.meta.env.VITE_API_BASE_URL;

const Heroe = () => {

    const { id } = useParams();//pegar o id da url
    const [character, setCharacter] = useState(null);
    const [dataComics, setDataComics] = useState(null);
    const [removeLoading, setRemoveLoading] = useState(false);

    async function GetHero() {
        const url = `${base_url}/${id}?ts=${time_stamp}&apikey=${public_key}&hash=${hash}`;
        const response = await instanceAxios.get(`${url}`);
        setCharacter(response.data.data.results[0]);
    }
    //start comics

    async function GetComics() {
        const url = `${base_url}/${id}/comics?ts=${time_stamp}&apikey=${public_key}&hash=${hash}`;
        const response = await instanceAxios.get(`${url}`);
        setDataComics(response.data.data.results);
    }

    //end comics

    setTimeout(() => {
        setRemoveLoading(true)
    }, 3000);

    useEffect(() => {
        GetHero();
        GetComics();
        setRemoveLoading(false)
    }, [])

    return (
        <>
            <HeroeContainer>
            {!removeLoading && <Loading />}
                {character &&
                    (<>
                        <h1>{character.name}</h1>
                        <Card>
                            {/*falso pra não aparecer o nome nem o botão detalhes*/}

                            <HeroeCardContainer>
                                <HeroeCard character_name={false} character={character} showLink={false} />
                            </HeroeCardContainer>

                            {character && character.description === " " || character.description === "" ?
                                (
                                    <NotDescription>
                                        <h3>character description:</h3>
                                        <span> Not found!</span>
                                    </NotDescription>

                                ) : (
                                    <Description>
                                        <h3><i>character description:</i></h3>
                                        <span> {character.description}</span>
                                    </Description>
                                )}
                        </Card>

                    </>)}
            </HeroeContainer>
            <Hr/>
            <ComicContainer>
                <h3>Showed up on the comics series:</h3>
                {dataComics && dataComics.length === 0?(<p>Not found</p>):("")}
                {dataComics !== null && dataComics.map(comics =>

                    <ComicCard key={comics.id}>
                        <div>
                            <h4>{comics.title}</h4>
                            <img src={`${comics?.thumbnail.path}.${comics.thumbnail.extension}`} alt={`Thumbnail of ${comics.title} comic`} />
                        </div>
                    </ComicCard>
                )}

            </ComicContainer>
        </>
    )
}

export default Heroe