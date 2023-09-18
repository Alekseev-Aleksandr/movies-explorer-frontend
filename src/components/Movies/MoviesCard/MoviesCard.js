
export default function MoviesCard({ card, onCardLike }) {
    const isLiked = card.liked

    function handleLikeBtn() {
        console.log('карта по которой кликнули ', card);
        onCardLike(card)
    }

    return (
        <div className="card">
            <img className='card__img'
                src={card.src}
                alt={card.name} />

            <div className="card__wrapper">
                <h3 className="card__name">{card.name}</h3>

                <button className={
                    isLiked ? "card__like card__like_active" : "card__like"}
                    onClick={handleLikeBtn} />
            </div>
            <span className="card__time">{`${Math.floor(card.time / 60 / 60)}ч ${Math.floor(card.time % 60)}м `}</span>
        </div>
    )
}