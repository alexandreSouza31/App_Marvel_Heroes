import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HeroeCard from "../components/HeroeCard";
import instanceAxios from "../services/instanceAxios";
import md5 from "md5";

import "./Pages.css";

const public_key = import.meta.env.VITE_API_PUBLIC_KEY;
const private_key = import.meta.env.VITE_API_PRIVATE_KEY;

const time_stamp = new Date().getTime();
const hash = md5(time_stamp + private_key + public_key);
const base_url = import.meta.env.VITE_API_BASE_URL;

const Heroe = () => {

    const { id } = useParams();//pegar o id da url
    const [character, setCharacter] = useState(null);
    const [dataComics, setDataComics] = useState(null);


    async function GetHero() {
        const url = `${base_url}/${id}?ts=${time_stamp}&apikey=${public_key}&hash=${hash}`;
        const response = await instanceAxios.get(`${url}`);
        //console.log(response.data.data.results)
        setCharacter(response.data.data.results[0])

    }
    //start comics

    async function GetComics() {
        const url = `${base_url}/${id}/comics?ts=${time_stamp}&apikey=${public_key}&hash=${hash}`;
        const response = await instanceAxios.get(`${url}`);
        setDataComics(response.data.data.results)
    }

    //setDataComics(data.data.data)
    //end comics

    useEffect(() => {
        GetHero();
        GetComics()
    }, [])



    return (
        <>
            <div className="heroe_container">
                {character &&
                    (<>
                        <h1>{character.name}</h1>
                        <div className="heroe_card">
                            {/*falso pra não aparecer o nome nem o botão detalhes*/}
                            <HeroeCard character_name={false} character={character} showLink={false} />

                            {character && character.description === " " || character.description === "" ?
                                (
                                    <p className="description not_found">
                                        Descrição do herói:
                                        <span> não encontrado!</span>
                                    </p>

                                ) : (
                                    <p className="description">
                                        <i>Descrição do herói:</i>
                                        <span> {character.description}</span>
                                    </p>
                                )}
                        </div>

                    </>)}
            </div>
            <div>
                <h3>Showed up on the comics series:</h3>
                {dataComics !== null && dataComics.map(comics =>

                    <div key={comics.id}>
                        <h1>{comics?.creators.collectionURL}</h1>
                        <h4>{ comics.title}</h4>
                        <img src={`${comics?.thumbnail.path}.${comics.thumbnail.extension}`} alt={`Thumbnail of ${comics.title} comic`} />
                    </div>
                )}


            </div>
        </>
    )
}

export default Heroe