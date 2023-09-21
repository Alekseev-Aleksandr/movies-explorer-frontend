import { NavLink } from "react-router-dom";
import accountImg from '../../images/icon__COLOR_icon-main.svg'
import NavMovies from "./NavMovies/NavMovies";

export default function Navigation({ onLogin, color, burgerMenu }) {
    return ((!onLogin ?
        <div>
            <NavLink to='/sign-up' className='header__btn header__btn_type_signup'>
                Регистрация
            </NavLink >
            <NavLink to='/sign-in' className='header__btn header__btn_type_login'>
                Войти
            </NavLink>
        </div>
        : <>
            <NavMovies color={color} burgerMenu={burgerMenu} />
            <div className={`toggle ${!color ? 'toggle_type_white' : ''}`}>
                <NavLink to='/profile'
                    className='toggle__profile-link'>
                    <span className='toggle__name'>Аккаунт</span>
                    <div className={`toggle__circle ${!color ? 'toggle__circle_type_white' : ''}`}>
                        <img className='toggle__img'
                            alt='Войти в профиль'
                            src={accountImg} />
                    </div>
                </NavLink>
            </div>
        </>
    ))



}