import EventsPage from "./Pages/EventsPage";
import LandingPage from "./Pages/LandinPage";
import TicketsPage from "./Pages/TicketsPage";
import "./Styles/App.css";

function App() {
    return (
        <div className="App">
            <h1>Hej</h1>
            <PageTitle />
            <FooterNav />
            <LandingPage />
            <TicketsPage />
        </div>
    );
}

export default App;
