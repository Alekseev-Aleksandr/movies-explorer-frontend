export default function Footer(props) {
    return (
        <footer className="footer">
            <span className="footer__description">Учебный проект Яндекс.Практикум х BeatFilm.</span>

            <div className="footer__wrapper">
                <p className="footer__copyright"> &copy; {new Date().getFullYear()}</p>

                <nav className="footer__nav">
                    <ul className="footer__links">
                        <li>
                            <a className="footer__link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href='https://practicum.yandex.ru/'
                            >Яндекс.Практикум</a>
                        </li>

                        <li>
                            <a className="footer__link"
                                target="_blank"
                                rel="noopener noreferrer"
                                href='https://github.com/Alekseev-Aleksandr'
                            >GitHub</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}
