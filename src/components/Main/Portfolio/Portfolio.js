import arrow from '../../../images/text__COLOR_font-main.svg'

export default function Portfolio() {
    return (
        <section className='portfolio' aria-label='портфолио'>
            <span className='portfolio__title'>Портфолио</span>
            <ul className='portfolio__links'>
                <li>
                    <a className='portfolio__link'
                        href='https://alekseev-aleksandr.github.io/how-to-learn/'
                        target='_blank'
                        rel="noopener noreferrer"
                    >Статичный сайт
                        <img className='portfolio__link-img'
                            src={arrow}
                            alt='Стрелка перехода по ссылке' />
                    </a>
                </li>
                <li>
                    <a className='portfolio__link'
                        href='https://alekseev-aleksandr.github.io/my-pet-Rus-travel/'
                        target='_blank'
                        rel="noopener noreferrer"
                    >Адаптивный сайт
                        <img className='portfolio__link-img'
                            src={arrow}
                            alt='Стрелка перехода по ссылке' />
                    </a>
                </li>
                <li>
                    <a className='portfolio__link'
                        href='https://github.com/Alekseev-Aleksandr/react-mesto-api-full-gha'
                        target='_blank'
                        rel="noopener noreferrer"
                    >Одностраничное приложение
                        <img className='portfolio__link-img'
                            src={arrow}
                            alt='Стрелка перехода по ссылке' />
                    </a>
                </li>
            </ul>
        </section>
    )
}