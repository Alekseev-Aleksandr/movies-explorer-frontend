import photo from '../../../images/pic__COLOR_pic.png'

export default function AboutMe() {
    return (
        <section className="student">
            <h2 className="student__title">
                Студент
            </h2>
            <div className="student__wrapper">
                <div className='student__info'>
                    <h3 className="student__name">Александр</h3>
                    <p className="student__about">Фронтенд разработчик, 24 года</p>
                    <p className="student__description">
                        Я родился и живу в Саратове, закончил факультет экономики СГУ.
                        У меня есть жена и дочь. Я люблю слушать музыку,
                        а ещё увлекаюсь бегом. Недавно начал кодить.
                        С 2015 года работал в компании «СКБ Контур».
                        После того, как прошёл курс по веб&#8209;разработке,
                        начал заниматься фриланс&#8209;заказами и ушёл с постоянной работы
                    </p>
                </div>
                <a className="student__link"
                    href='https://github.com/Alekseev-Aleksandr'
                    target='_blank'
                    rel="noopener noreferrer"
                >GitHub</a>

                <img className='student__photo' src={photo} alt="Фотография студента" />
            </div>
        </section>
    )
}