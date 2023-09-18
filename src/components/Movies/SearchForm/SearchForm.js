import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

export default function SearchForm() {
    return (
        <form className="movies__searcn-wrapper">
            <div className="movies__searcn">
                <input className="movies__search-input"
                    placeholder="Фильм" />
                <button className="movies__search-btn">Найти</button>
            </div>
            <FilterCheckbox />
        </form>

    )
}