import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Portfolio from "./Portfolio/Portfolio";
import AboutMe from "./AboutMe/AboutMe";
import Techs from "./Techs/Techs";
import NavTab from "./NavTab/NavTab";

export default function Main(props) {
    return (
        <main className="main" aria-label="Главная секция">
            <Promo />
            <AboutProject />
            <NavTab />
            <Techs />
            <AboutMe />
            <Portfolio />
        </main>
    )
}
