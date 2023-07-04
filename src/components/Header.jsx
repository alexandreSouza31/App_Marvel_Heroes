import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Message from "./Message";
import logo from "../../public/logo.png"

import { HeaderStyles } from "./Styled-components/layoutStyles/HeaderStyles";


const Header = () => {
    
    const [search, setSearch] = useState("");
    const param_search = `nameStartsWith=${search}`;

    const navigate = useNavigate();
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // setMessage("");

        if (search==="") {
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
                <h1>Marvel</h1>
            </NavLink>
            <img src={logo} />
            <form onSubmit={handleSubmit} className="nav_form">
                <input
                    type="text"
                    placeholder="search a character"
                    onChange={(e) => setSearch(e.target.value)}
                    onFocus={() => setMessage("")}
                    value={search}
                />
                <button type="submit"><BsSearch /></button>
            </form>
            <Message setMessage={setMessage} msg={message ? <p>{message}</p> : ""}></Message>

        </HeaderStyles>
    )
}

export default Header;