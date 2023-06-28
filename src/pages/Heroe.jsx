import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HeroeCard from "../components/HeroeCard";
import getHeroes from "../hooks/getHeroes";
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
    const url = `${base_url}/${id}?ts=${time_stamp}&apikey=${public_key}&hash=${hash}`;


    async function GetHero() {
        const response = await getHeroes.get(`${url}`);
        //console.log(response.data.data.results)
        setCharacter(response.data.data.results[0])
    }
    useEffect(() => {
        GetHero();
    }, [])

    return (
        <>
            <div className="heroe_container">
                {character &&
                    (<>
                    <div className="heroe_card">
                    <h1>{character.name}</h1>
{/*falso pra não aparecer o nome nem o botão detalhes*/}
                            <HeroeCard character_name={false} character={character} showLink={false} />  

                            {character && character.description === " " ||  character.description === "" ?
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
        </>
    )
}

export default Heroe