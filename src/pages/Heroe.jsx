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
    //characters/1017100?apikey=0c36393870e115e681152a5959de86b8


    async function GetHero() {
        const response = await getHeroes.get(`${url}`);
        //console.log(response.data.data.results)
        setCharacter(response)
    }
    useEffect(() => {
        GetHero();
    }, [])

    return (
        <div className="Heroe_page">
            {character && (<>
                {/* <HeroeCard character={character} /> */}
                <div className="home_container">
                    <h2>{character && <>{character.name}</>}</h2>
                    
                    <div className="home_card">
                        
                    </div>
                </div>
            </>
            )}
        </div>
    )
}

export default Heroe