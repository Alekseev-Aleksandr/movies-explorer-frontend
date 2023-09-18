import { NavLink } from "react-router-dom";

export default function NavMovies({ color,burgerMenu }) {
    return (
        <nav className={"nav-links"}>
            {burgerMenu ?
                <NavLink to='/'
                    className={({ isActive }) => `nav-links__link 
            ${isActive ? 'nav-links__link_active' : ''} 
            ${color ? 'nav-links__link_type_white' : ''}`}
                >Главная
                </NavLink> :
                <></>}
            <li>
                <NavLink to='/movies'
                    className={({ isActive }) => `nav-links__link 
                    ${isActive ? 'nav-links__link_active' : ''}
                    ${color ? 'nav-links__link_type_white' : ''}`}
                >Фильмы
                </NavLink>
            </li>
            <li>
                <NavLink to='/saved-movies'
                    className={({ isActive }) => `nav-links__link 
                    ${isActive ? 'nav-links__link_active' : ''} 
                    ${color ? 'nav-links__link_type_white' : ''}`}
                >Cохраненные фильмы
                </NavLink>
            </li >
        </nav >

    )
}