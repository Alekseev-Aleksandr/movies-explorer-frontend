import { useNavigate, } from "react-router-dom";

export default function PageNotFound() {
    const navigate = useNavigate();
    return (
        <section className="page-not-found">
            <h2 className="page-not-found__title"> 404</h2>
            <span className="page-not-found__description">
                Страница не найдена
            </span>
            <button className="page-not-found__link" onClick={() => { navigate(-1) }}>Назад</button>
        </section>
    )
}