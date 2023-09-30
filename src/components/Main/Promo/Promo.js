import titleImg from '../../../images/text__COLOR_landing-logo.svg'
export default function Promo() {
    return (
        <section className="promo">
            <img className='promo__img'
                src={titleImg}
                alt='Глобус, силуэт которого строится из слов web' />
            <h2 className='promo__title'>Учебный проект студента факультета Веб&#8209;разработки.</h2>
            <span className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</span>
            <a href='#about-project'
                className='promo__more'>
                Узнать больше
            </a>
        </section >
    )
}