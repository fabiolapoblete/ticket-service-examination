import FooterNav from "./Components/FooterNav";
import HeaderNav from "./Components/HeaderNav";
import NavButton from "./Components/NavButton";
import PageTitle from "./Components/PageTitle";
import SearchBar from "./Components/SearchBar";
import "./Styles/App.css";

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <PageTitle />
      <NavButton />
      <SearchBar />
      <FooterNav />
    </div>
  );
}

export default App;
