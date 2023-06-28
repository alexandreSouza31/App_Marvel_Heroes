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
const base_url = "http://gateway.marvel.com/v1/public/characters";


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
                            <HeroeCard character={character} showLink={false} />
                            
                            <p>
                                Descrição do herói:
                                <span>{character.description}</span>
                            </p>
                            
                        </div>

                    </>)}
            </div>
        </>
    )
}

export default Heroe