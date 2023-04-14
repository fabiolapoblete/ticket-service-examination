import EventsPage from "./Pages/EventsPage";
import LandingPage from "./Pages/LandinPage";
import OrdersPage from "./Pages/OrdersPage";
import TicketsPage from "./Pages/TicketsPage";
import SinglePage from "./Pages/SinglePage";
import ErrorPage from "./Pages/ErrorPage";
import "./Styles/App.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { createContext, useEffect, useState } from "react";

export const dataContext = createContext();

function App() {
  const [event, setEvent] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch(
          "https://majazocom.github.io/Data/events.json"
        );
        const data = await response.json();
        setEvent(data.events);
      } catch (error) {
        console.error(error, "Something went wrong");
      }
    }
    fetchEvents();
  }, []);

  return (
      <dataContext.Provider value={[event, setCart, cart]}>
        <Router>
        <div className="wrapper-container">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/:name" element={<SinglePage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/tickets" element={<TicketsPage />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="*" element={<Navigate to="/error" />} />
          </Routes>
          </div>

        </Router>
      </dataContext.Provider>

  );
}

export default App;
