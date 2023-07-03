import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Message from "./Message";
import { HeaderStyles } from "./Styled-components/layoutStyles/HeaderStyles";


const Header = () => {
    
    const [search, setSearch] = useState("");
    const param_search = `nameStartsWith=${search}`;

    const navigate = useNavigate();
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        setMessage("");
        e.preventDefault();
        
        if (!search) {
            setMessage("Type something to search!");
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
            {message && <Message msg={<p>{message}</p>}></Message>}

        </HeaderStyles>
    )
}

export default Header;