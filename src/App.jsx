import FooterNav from "./Components/FooterNav";
import HeaderNav from "./Components/HeaderNav";
import NavButton from "./Components/NavButton";
import PageTitle from "./Components/PageTitle";
import SearchBar from "./Components/SearchBar";
import LandingPage from "./Pages/LandinPage";
import "./Styles/App.css";

function App() {
    return (
        <div className="App">
            <h1>Hej</h1>
            <PageTitle />
            <FooterNav />
            <LandingPage />
        </div>
    );
}

export default App;
