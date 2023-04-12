import "../Styles/searchBar.css";

function SearchBar() {
  return (
    <form>
      <input
        className="searchBar"
        type="search"
        placeholder="&#x1F50E;&#xFE0E;"
        onChange={console.log("changed input")}
      />
    </form>
  );
}

export default SearchBar;
