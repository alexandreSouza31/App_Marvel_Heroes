import { Link } from "react-router-dom";

const HeroeCard = ({ character, showLink = true }) => {
    return (
        <div className="container">
            <div key={character.id} className="img-container">
                <h3>{character.name}</h3>
                <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
            </div>
            <div className="link-heroe">
                {showLink &&
                    <Link to={`/heroe/${character.id}`}>{/*mesmo estilo da url do main.jsx*/}
                        Ver mais
                    </Link>}
            </div>
        </div>
    )
}

export default HeroeCard;