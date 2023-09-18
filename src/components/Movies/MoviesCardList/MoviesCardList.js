import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({ movies, onCardLike }) {
    return (
        <div className="movies-card-list">
            {movies.map((el) =>
            (
                < MoviesCard card={el}
                    onCardLike={(onCardLike)}
                    key={el._id} />
            ))
            }
        </div>
    )
}