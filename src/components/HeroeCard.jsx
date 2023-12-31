import { HeroeCardContainer, LinkContainer, Linkbtn } from "./Styled-components/pageStyles/HeroeCardStyles";

const HeroeCard = ({ character, character_name = true, showLink = true }) => {
    return (
        <HeroeCardContainer key={character.id}>
                <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
            <LinkContainer>
                {character_name &&
                    <h3>{character.name}</h3>
                }
                {showLink &&
                    <Linkbtn to={`/heroe/${character.id}`}>{/*mesmo estilo da url do main.jsx*/}

                        Details
                    </Linkbtn>}
            </LinkContainer>
        </HeroeCardContainer>
    )
}

export default HeroeCard;