import MoviesCardList from "./MoviesCardList/MoviesCardList";

import SearchForm from "./SearchForm/SearchForm";
import SavedMovies from "./SavedMovies/SavedMovies";

export default function Movies({ movies, onCardLike, loggedIn }) {

    function getLocation() {
        if (window.location.pathname === '/saved-movies') return true
        else if (window.location.pathname === 'movies') return false
    }
    return (<section className="movies" >
        {loggedIn ? <>
            < SearchForm />
            {
                getLocation() ? <SavedMovies movies={movies} onCardLike={onCardLike} />
                    : <MoviesCardList movies={movies} onCardLike={onCardLike} />
            }

            <button className="movies__btn movies__btn_type_more">Еще</button>
        </> 
        :<span>Пожалуйста зарегистрируйтесь</span>}

    </section >
    )
}