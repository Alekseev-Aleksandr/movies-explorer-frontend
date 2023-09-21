import Navigation from "../Navigation/Navigation";

export default function BurgerMenuPopup({ onLogin, onClick, color, isOpen }) {

    function handleClickClose() {
        onClick();
    }
    return (
        <section className={`burger-menu-wrapper ${isOpen ? 'burger-menu-wrapper_opened' : ''}`} aria-label="Бургер-меню">
            <div className="burger-menu">
                <button className="burger-menu__close-btn" type="button" onClick={handleClickClose} />
                <Navigation onLogin={onLogin} color={!color} burgerMenu={isOpen} />
            </div>

        </section>
    )
}