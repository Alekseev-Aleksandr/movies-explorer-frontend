export default function Techs() {
    return (
        <section className="technology">
            <h2 className="technology__title">
                Технологии
            </h2>
            <div className="technology__wrapper">
                <div>
                    <h3 className="technology__subtitle">7 технологий</h3>
                    <p className="technology__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                </div>

                <ul className="technology__list">
                    <li className="technology__name">HTML</li>
                    <li className="technology__name">CSS</li>
                    <li className="technology__name">JS</li>
                    <li className="technology__name">React</li>
                    <li className="technology__name">Git</li>
                    <li className="technology__name">Express.js</li>
                    <li className="technology__name">mongoDB</li>
                </ul>
            </div>
        </section>
    )
}