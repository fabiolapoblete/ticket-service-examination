import EventsPage from "../Pages/EventsPage";
import LandingPage from "../Pages/LandinPage";
import OrdersPage from "../Pages/OrdersPage";
import TicketsPage from "../Pages/TicketsPage";
import SinglePage from "../Pages/SinglePage";
import ErrorPage from "../Pages/ErrorPage";
import HeaderNav from "./HeaderNav";
import { AnimatePresence } from "framer-motion";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
    useLocation,
} from "react-router-dom";
import FooterNav from "./FooterNav";
function AnimatedRoutes() {
    const location = useLocation();

    return (
        <>
            <HeaderNav />
            <AnimatePresence
                onExitComplete={() => window.scrollTo(0, 0)}
                mode="wait"
            >
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/events" element={<EventsPage />} />
                    <Route path="/events/:name" element={<SinglePage />} />
                    <Route path="/orders" element={<OrdersPage />} />
                    <Route path="/tickets" element={<TicketsPage />} />
                    <Route path="/error" element={<ErrorPage />} />
                    <Route path="*" element={<Navigate to="/error" />} />
                </Routes>
            </AnimatePresence>
            <FooterNav />
        </>
    );
}

export default AnimatedRoutes;
