import { useEffect, useState } from "react";
import getHeroes from "../hooks/getHeroes";
import md5 from "md5";
//import keys from "../hooks/keys";

const time_stamp = new Date().getTime();

const public_key = "0c36393870e115e681152a5959de86b8";
const private_key = "aa2e0be558a6e4569cf62be92b4197e1930481e4";
const hash = md5(time_stamp + private_key + public_key);
const base_url = "http://gateway.marvel.com/v1/public/characters";
const url = `${base_url}?ts=${time_stamp}&apikey=${public_key}&hash=${hash}`;


import "./Home.css"
const Home = () => {
    const [heroes, setHeroes] = useState([]);

async function LoadHeroes(){
            const response = await getHeroes.get(`${url}`);
            //console.log(response.data)
            setHeroes(response.data.data.results)
        }
    useEffect(() => {
        //LoadHeroes();
    }, [])

    return (
        <div className="home-container">
                {heroes.length === 0 && <p>carregando...</p>}
                {heroes.map(character =>( 
                   <div key={character.id}>
                       <p >{character.name}</p>
                        <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="" />
                   </div>
                    
                ))}
        </div>
    )
}

export default Home