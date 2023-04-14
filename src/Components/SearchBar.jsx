import "../Styles/searchBar.css";
import { useContext } from "react";
import { dataContext } from "../App";

function SearchBar({ setFilteredEvents }) {
    const [events] = useContext(dataContext);

    const filterItems = (e) => {
        if (e.target.value === "") {
            setFilteredEvents(events);
        } else {
            const list = events.filter((item) =>
                item.name.toUpperCase().includes(e.target.value.toUpperCase())
            );
            setFilteredEvents(list);
        }
    };

    return (
        <form className="searchBar__wrapper">
            <input
                className="searchBar"
                type="search"
                placeholder="&#x1F50E;&#xFE0E;"
                onChange={filterItems}
            />
        </form>
    );
}

export default SearchBar;
