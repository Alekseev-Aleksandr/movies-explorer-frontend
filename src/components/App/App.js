import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Login from "../auth/Login/Login";
import Register from "../auth/Register/Register";
import Profile from "../Profile/Profile";

import { useState, useEffect } from "react";
import { Route, Routes, useNavigate, Switch, useLocation } from 'react-router-dom'
import PageNotFound from "../PageNotFound/PageNotFound";
import { Paths } from "../../utils/utils";
import SavedMovies from "../Movies/SavedMovies/SavedMovies";
import Movies from "../Movies/Movies";

import { movies } from "../../utils/utils.js"
import { user } from "../../utils/utils"
import { UserInfoContext } from "../../context/CurrentUserContext";
import BurgerMenuPopup from "../popups/BurgerMenuPopup";

function App() {
  const [colorHeader, setColorHeader] = useState(true)
  const [currentUser, setCurrentUser] = useState({})
  const [cards, setCards] = useState([])
  const [loggedIn, setLoggedIn] = useState(true)
  const [burgerMenu, setBurgerMenu] = useState(false)
  const [burgerPopupOpened, setBurgerPopupOpened] = useState(false)

  let location = useLocation()
  const navigate = useNavigate();
  function handleResize() {
    if (window.outerWidth < 768) 
    setBurgerMenu(true)
    else setBurgerMenu(false)
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize);
  }, [])
  useEffect(() => {
    if (location.pathname === '/') setColorHeader(true);
    else setColorHeader(false)
  }, [location])

  function disActiveFooter() {
    if (window.location.pathname === '/profile' ||
      window.location.pathname === '/sign-in' ||
      window.location.pathname === '/sign-up' ||
      Paths.includes(window.location.pathname) === false) return true
    return false
  }

  function disActiveHeader() {
    if (window.location.pathname === '/sign-in' ||
      window.location.pathname === '/sign-up' ||
      Paths.includes(window.location.pathname) === false) return true;
    return false
  }

  function handleUpdateUser({ dataUs }) {
    setCurrentUser(dataUs);
  }
  function handleCardLike(card) {

    const arr = cards.map(c => {
      if (c._id === card._id) {
        card.liked = !card.liked
        return card
      } return c
    })
    setCards(arr)
  }

  function logOut() {
    console.log('join');
    setLoggedIn(false)
  }

  function onLogin(userData) {
    setCurrentUser(userData)
    setLoggedIn(true)
    navigate('/')
  }

  function editUser(userData) {
    debugger
    setCurrentUser(userData)
  }

  function onRegistration(userData) {
    console.log(userData);
    setCurrentUser(userData)
    setLoggedIn(true)
    navigate('/')
  }

  useEffect(() => {
    if (loggedIn) {
      setCurrentUser(user)
      setCards(movies)
    }
  }, [loggedIn])

  function handleClosePopup() {
    console.log('OTRABOTANO');
    setBurgerPopupOpened(false)
  }

  function handleBurger() {
    setBurgerPopupOpened(true)
  }

  return (

    <div className="App">
      {disActiveHeader() ?
        <div className="header"></div> :
        <Header onLogin={loggedIn}
          color={colorHeader}
          burgerMenu={burgerMenu}
          clickMenu={handleBurger} />}

      <UserInfoContext.Provider value={currentUser}>
        <Routes>
          <Route path='/' exact element={<Main />} />
          <Route path='/*' element={<PageNotFound />} />
          <Route path='/sign-in' element={<Login onLogin={onLogin} />} />
          <Route path='/sign-up' element={<Register onRegistration={onRegistration} />} />

          <Route path='/profile' element={<Profile
            onUpdateUser={handleUpdateUser}
            logOut={logOut}
            editUser={editUser} />} />

          <Route path='/movies'
            element={<Movies
              loggedIn={loggedIn}
              movies={cards}
              onCardLike={handleCardLike}
            />} />

          <Route path='/saved-movies'
            element={<Movies
              loggedIn={loggedIn}
              movies={cards}
              onCardLike={handleCardLike} />} />
        </Routes>
      </UserInfoContext.Provider>

      {disActiveFooter() ? <div className="footer"></div> : <Footer />}

      <BurgerMenuPopup onLogin={onLogin}
        onClose={handleClosePopup}
        isOpen={burgerPopupOpened}
        onClick={handleClosePopup}
        color={colorHeader} />
    </div >
  );
}

export default App;
