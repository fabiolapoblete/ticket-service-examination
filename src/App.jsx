import EventsPage from "./Pages/EventsPage";
import LandingPage from "./Pages/LandinPage";
import OrdersPage from "./Pages/OrdersPage";
import TicketsPage from "./Pages/TicketsPage";
import SinglePage from "./Pages/SinglePage";
import "./Styles/App.css";

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/events/single" element={<SinglePage />} />
                <Route path="/orders" element={<OrdersPage />} />
                <Route path="/tickets" element={<TicketsPage />} />
                <Route path="/error" element={<ErrorPage />} />
                <Route path="*" element={<Navigate to="/error" />} />
            </Routes>
        </Router>
    );
}

export default App;
