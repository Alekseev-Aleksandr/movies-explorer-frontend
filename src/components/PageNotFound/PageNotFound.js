import { useNavigate, } from "react-router-dom";

export default function PageNotFound() {
    const navigate = useNavigate();
    return (
        <main className="page-not-found">
            <h1 className="page-not-found__title"> 404</h1>
            <span className="page-not-found__description">
                Страница не найдена
            </span>
            <button className="page-not-found__link" type="button" onClick={() => { navigate(-1) }}>Назад</button>
        </main>
    )
}