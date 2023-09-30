import { useContext, useState } from "react"
import { UserInfoContext } from "../../context/CurrentUserContext";

export default function Profile({ onUpdateUser, logOut, editUser }) {
    const user = useContext(UserInfoContext)
    const [isValidName, setISValidName] = useState(false)
    const [isValidEmail, setISValidEmail] = useState(false)

    const [active, setActive] = useState(false)
    const [formValue, setFormValue] = useState({
        name: '',
        email: ''
    })

    function onChange(e) {
        const { name, value } = e.target;
        if (e.target.name === 'name') setISValidName(e.target.validity.valid);
        else if (e.target.name === 'email') setISValidEmail(e.target.validity.valid);
        console.log(getDisabledBtn());

        setFormValue({
            ...formValue,
            [name]: value
        })

    } function getDisabledBtn() {
        if (isValidEmail === false || isValidName === false) return false
        else return true
    }
    function handleEditBtn() {
        setActive(!active);
    }
    function onSubmit(e) {
        e.preventDefault()
        editUser(formValue)
    }
    return (
        <div className="profile">
            <h1 className="profile__title">Привет, {user.name}!</h1>

            <form className="profile__form" onSubmit={onSubmit}>

                <div className="profile__input-wrapper">
                    <span>Имя</span>

                    <input className="profile__input"
                        placeholder={user.name}
                        disabled={!active}
                        name='name'
                        type='text'
                        minLength={2}
                        maxLength={20}
                        onChange={onChange}
                    >
                    </input>
                </div>

                <div className="profile__input-wrapper">
                    <span>E-mail</span>
                    <input className="profile__input"
                        placeholder={user.email}
                        disabled={!active}
                        name='email'
                        type='email'
                        required
                        minLength={2}
                        maxLength={40}
                        onChange={onChange}
                    />
                </div>

                {
                    active ?
                        <button className="profile__btn profile__btn_type_save"
                            disabled={getDisabledBtn() ? false : true}
                            type="submit">Cохранить</button> :
                        <>
                            <button className="profile__btn"
                                onClick={handleEditBtn}
                                type="button">
                                Реадктировать</button>

                            {/* <NavLink style={{ textAlign: 'center' }} to='/'> */}
                                <button className="profile__btn profile__btn_type_exit"
                                    type='submit'
                                    onClick={logOut}
                                >
                                    Выйти из аккаунта
                                </button>
                            {/* </NavLink> */}
                        </>
                }
            </form >
        </div >
    )
}