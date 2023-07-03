import { Link } from "react-router-dom";
import { FaLinkedinIn, FaGithub, FaDiscord } from "react-icons/fa"
import { SiGmail } from "react-icons/si"

import { Hr } from "./Styled-components/pageStyles/ComicStyles";
import { Brand, Copy, FooterContainer, SectionBrand, SectionSocial } from "./Styled-components/layoutStyles/FooterStyles";


const Footer = () => {
    return (
        <FooterContainer>
            <SectionSocial>
                <ul className="social_list">
                    <li>
                        <Link
                            to="https://www.linkedin.com/in/alexandremariano31/"
                            target="_blank" //abrir em nova guia
                            rel="noopener noreferrer" /*evitar possíveis ataques
                        das páginas que eu fizer vínculo*/
                        >
                            <FaLinkedinIn />
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="mailto:alexandre31_m@hotmail.com"
                            target="_blank" rel="noopener noreferrer">
                            <SiGmail />
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="https://github.com/alexandreSouza31"
                            target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="https://discord.com/channels/@me/831222330206322699"
                            target="_blank" rel="noopener noreferrer">
                            <FaDiscord />
                        </Link>
                    </li>
                </ul>

            </SectionSocial>

            <Hr />

            <SectionBrand>
                <Brand
                    to="https://developer.marvel.com/"
                    target="_blank" rel="noopener noreferrer">
                    MARVEL
                </Brand>
                    <span>
                        Alexandre Mariano <Copy>&copy;</Copy>2023
                    </span>
            </SectionBrand>
        </FooterContainer>
    )
}

export default Footer;