import { Link, NavLink } from 'react-router-dom'
import logo from '../../../images/logo.svg'
import { useState } from 'react';

export default function Login({ onLogin }) {
    const [isValidEmail, setISValidEmail] = useState(false)
    const [isValidPassword, setISValidPassword] = useState(false)

    const [formValue, setFormValue] = useState({
        email: '',
        password: ''
    })

    function onChange(e) {
        const { name, value } = e.target;
        console.log(e.target.name);
        if (e.target.name === 'email') setISValidEmail(e.target.validity.valid);
        else if (e.target.name === 'password') setISValidPassword(e.target.validity.valid);
        console.log(getDisabledBtn());
        setFormValue({
            ...formValue,
            [name]: value
        })
    }
    function getDisabledBtn() {
        if (isValidEmail === false || isValidPassword === false) return false
        else return true
    }
    function onSubmit(e) {
        e.preventDefault()
        onLogin(formValue)
    }

    return (
        <main className='auth' novalidate>
            <div className='auth__wrapper'>
                <NavLink to='/'>
                    <img className='logo'
                        src={logo}
                        alt='Логотип' />
                </NavLink>
                <h1 className='auth__title'>Рады видеть!</h1>

                <form className='auth__form' onSubmit={onSubmit}>

                    <div className='auth__input-wrapper'>
                        <span className='auth__input-title'>E-mail</span>
                        <input className={`auth__input ${isValidEmail ? '' : 'auth__input-err'}`}
                            placeholder='email'
                            type='email'
                            name='email'
                            required
                            id='auth-input-email'
                            minLength="2"
                            maxLength="40"
                            onChange={onChange}
                        />

                        <div className={`auth__error-message }`}>
                            <span className={`auth__error-text ${isValidEmail ? '' : 'auth__error-text_active'}`}>Введите email</span>
                        </div>

                    </div>

                    <div className='auth__input-wrapper'>

                        <span className='auth__input-title'>Пароль</span>
                        <input className={`auth__input ${isValidPassword ? '' : 'auth__input-err'}`}
                            placeholder='password'
                            required
                            id="form__input-password"
                            name="password"
                            type="password"
                            minLength="2"
                            maxLength="200"
                            onChange={onChange}
                        />

                        <div className='auth__error-message'>
                            <span className={`auth__error-text ${isValidPassword ? '' : 'auth__error-text_active'}`}>Введите пароль</span>
                        </div>
                    </div>
                    <button className='auth__btn auth__btn_type_save' disabled={getDisabledBtn() ? false : true} type='submit'>Войти</button>

                    <span className='auth__link-description' >
                        Ещё не зарегистрированы?
                        <Link to="/sign-up"
                            className="auth__link">
                            Регистрация
                        </Link>
                    </span>

                </form>
            </div>
        </main>

    )
}