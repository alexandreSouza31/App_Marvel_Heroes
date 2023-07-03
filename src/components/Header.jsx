import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { HeaderStyles } from "./Styled-components/HeaderStyles";


const Header = () => {
    
    const [search, setSearch] = useState("");
    const param_search = `nameStartsWith=${search}`;

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!search) {
            alert("Digite algo para pesquisar!");
            return;
        }
        navigate(`/search?${param_search}`);
        setSearch("");

    }

    return (
        <HeaderStyles>
            <NavLink
                className="nav_link"
                to="/">
                <h1>Marvel Heroes</h1>
            </NavLink>

            <form onSubmit={handleSubmit} className="nav_form">
                <input
                    type="text"
                    placeholder="pesquise um herói"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
                <button type="submit"><BsSearch /></button>
            </form>
        </HeaderStyles>
    )
}

export default Header;