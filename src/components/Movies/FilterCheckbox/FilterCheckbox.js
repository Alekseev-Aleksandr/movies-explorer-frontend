export default function FilterCheckbox() {
    return (
        <label className="filter-check-box" for="checkbox">
            <input className="filter-check-box__inpput"
                type="checkbox"
                id="checkbox" />
            <span className="filter-check-box__description">Короткометражки</span>
        </label>
    )
}