import EventsPage from "./Pages/EventsPage";
import LandingPage from "./Pages/LandinPage";
import OredersPage from "./Pages/OrdersPage";
import TicketsPage from "./Pages/TicketsPage";
import "./Styles/App.css";
import EventInfo from "./Components/EventInfo";
import SinglePage from "./Pages/SinglePage";
// import "./Styles/App.css";

function App() {
    return (
        <div className="App">
           <OredersPage /> 
            <h1>Hej</h1>
            <SinglePage />
        </div>
    );
}

export default App;
