import { NavLink } from "react-router-dom";

import { BsSearch } from "react-icons/bs";

import "./Navbar.css";
const Navbar = () => {
    return (
        <nav className="nav_container">
            <NavLink
                className="nav_link"
                to="/">
                <h1>Marvel Heroes</h1>
            </NavLink>

            <form className="nav_form">
                <input type="text" placeholder="pesquise um herói" />
                <button type="submit"><BsSearch /></button>
            </form>
        </nav>
    )
}

export default Navbar;