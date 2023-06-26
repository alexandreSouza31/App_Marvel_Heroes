import { Link } from "react-router-dom";

const HeroeCard = ({ character, showLink = true }) => {
    return (
        <div className="container_heroe_card">
            <div key={character.id} className="img_container">
                <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
            </div>
            <div className="link_heroe">
                <h3>{character.name}</h3>
                {showLink &&
                    <Link to={`/heroe/${character.id}`}>{/*mesmo estilo da url do main.jsx*/}
                        Ver mais
                    </Link>}
            </div>
        </div>
    )
}

export default HeroeCard;