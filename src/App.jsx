import FooterNav from "./Components/FooterNav";
import HeaderNav from "./Components/HeaderNav";
import NavButton from "./Components/NavButton";
import PageTitle from "./Components/PageTitle";
import SearchBar from "./Components/SearchBar";
import LandingPage from "./Pages/LandinPage";
import OredersPage from "./Pages/OrdersPage";
import "./Styles/App.css";

function App() {
    return (
        <div className="App">
           <OredersPage /> 
        </div>
    );
}

export default App;
