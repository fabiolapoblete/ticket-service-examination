import "./Styles/App.css";

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";

import { createContext, useEffect, useState } from "react";
import AnimatedRoutes from "./Components/AnimatedRoutes";

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
                    <AnimatedRoutes />
                </div>
            </Router>
        </dataContext.Provider>
    );
}

export default App;
