import { Link, NavLink } from 'react-router-dom'
import logo from '../../../images/logo.svg'
import { useState } from 'react';

export default function Register({ onRegistration }) {
    const [isValidName, setISValidName] = useState(false)
    const [isValidEmail, setISValidEmail] = useState(false)
    const [isValidPassword, setISValidPassword] = useState(false)

    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        password: ''
    })

    function onChange(e) {
        const { name, value } = e.target;
        console.log(e.target.name);
        if (e.target.name === 'name') setISValidName(e.target.validity.valid)
        else if (e.target.name === 'email') setISValidEmail(e.target.validity.valid);
        else if (e.target.name === 'password') setISValidPassword(e.target.validity.valid);
        console.log(getDisabledBtn());
        setFormValue({
            ...formValue,
            [name]: value
        })
    }

    function onSubmit(e) {
        e.preventDefault()
        onRegistration(formValue)
    }
    function getDisabledBtn() {
        if (isValidEmail === false || isValidPassword === false) return false
        else return true
    }
    return (
        <main className='auth'>
            <div className='auth__wrapper'>
                <NavLink to='/'>
                    <img className='logo'
                        src={logo}
                        alt='Логотип' />
                </NavLink>
                <h1 className='auth__title'>Добро пожаловать!</h1>

                <form className='auth__form' onSubmit={onSubmit}>
                    <div className='auth__input-wrapper'>
                        <span className='auth__input-title'>Имя</span>
                        <input className={`auth__input ${isValidName ? '' : 'auth__input-err'}`}
                            placeholder='nane'
                            name='name'
                            type='text'
                            minLength={2}
                            maxLength={20}
                            onChange={onChange} />

                        <div className='auth__error-message'>
                            <span className={`auth__error-text ${isValidName ? '' : 'auth__error-text_active'}`}>Введите имя</span>
                        </div>
                    </div>

                    <div className='auth__input-wrapper'>
                        <span className='auth__input-title'>E-mail</span>
                        <input className={`auth__input ${isValidEmail ? '' : 'auth__input-err'}`}
                            placeholder='email'
                            name='email'
                            type='email'
                            required
                            minLength={2}
                            maxLength={40}
                            onChange={onChange} />

                        <div className='auth__error-message'>
                            <span className={`auth__error-text ${isValidEmail ? '' : 'auth__error-text_active'}`}>Введите E-mail</span>
                        </div>
                    </div>

                    <div className='auth__input-wrapper'>
                        <span className='auth__input-title'>Пароль</span>
                        <input className={`auth__input ${isValidPassword ? '' : 'auth__input-err'}`}
                            placeholder='password'
                            id="form-input-password"
                            name="password"
                            type="password"
                            required
                            minLength="2"
                            maxLength="200"
                            onChange={onChange}
                        />

                        <div className='auth__error-message'>
                            <span className={`auth__error-text ${isValidPassword ? '' : 'auth__error-text_active'}`}>Введите пароль</span>
                        </div>
                    </div>
                    <button className='auth__btn auth__btn_type_save' disabled={getDisabledBtn() ? false : true} type='submit'>Зарегистрироваться</button>

                    <span className='auth__link-description'>
                        Уже арегистрировались?
                        <Link to="/sign-in"
                            className="auth__link">
                            Войти
                        </Link>
                    </span>
                </form>
            </div>
        </main>
    )
}