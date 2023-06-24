import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">pag inicial</NavLink>
                    <br />
                    <NavLink to="/heroe/:id">heroi tal</NavLink>
                    <br />
                    <NavLink to="/search">pesqusar</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;