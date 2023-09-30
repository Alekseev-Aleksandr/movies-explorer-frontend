import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({ movies, onCardLike }) {
    return (
        <ul className="movies-card-list">
            {movies.map((el) =>
            (<li>
                < MoviesCard card={el}
                    onCardLike={(onCardLike)}
                    key={el._id} />
            </li>
            ))
            }
        </ul>
    )
}