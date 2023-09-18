import { NavLink } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

export default function BurgerMenuPopup({ onLogin, onClick, color, isOpen }) {

    function handleClickClose() {
        onClick();
    }
    return (
        <section className={`burger-menu-wrapper ${isOpen ? 'burger-menu-wrapper_opened' : ''}`}>
            <div className="burger-menu">
                <button className="burger-menu__close-btn" onClick={handleClickClose} />
                <Navigation onLogin={onLogin} color={!color} burgerMenu={isOpen}/>
            </div>

        </section>
    )
}