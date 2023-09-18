import { useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function SavedMovies({ movies, onCardLike, log }) {
    useEffect(() => {

    }, [movies])

    return (
        < div className="movies-card-list" >
            {
                movies.map((el) => {
                    if (el.liked) return (
                        <MoviesCard
                            onCardLike={onCardLike}
                            card={el}
                            key={el._id}
                        />
                    )
                    else return null
                }
                )
            }
        </div >
    )
}