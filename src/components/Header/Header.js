import logo from '../../images/logo.svg'
import Navigation from '../Navigation/Navigation'

import { NavLink } from 'react-router-dom'

export default function Header({ onLogin, color, burgerMenu, clickMenu }) {
    return (
        <header className={
            `header ${onLogin ? 'header_type_log' : ''} 
            ${!color ? 'header_type_white' : ''}`
        }>
            <NavLink to='/'>
                <img className='logo'
                    src={logo}
                    alt='Логотип' />
            </NavLink>
            {burgerMenu ?
                onLogin ?
                    <button className={`burger-menu__btn 
                    ${color ?
                            'burger-menu__btn_type_white' :
                            "burger-menu__btn_type_black"}`}
                        onClick={clickMenu}
                        type='button'>
                    </button>
                    : <Navigation onLogin={onLogin} color={color} />
                : <Navigation onLogin={onLogin} color={color} />

            }

        </header >
    )
}
