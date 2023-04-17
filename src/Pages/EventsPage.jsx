import HeaderNav from "../Components/HeaderNav";
import PageTitle from "../Components/PageTitle";
import SearchBar from "../Components/SearchBar";
import EventItem from "../Components/EventItem";
import FooterNav from "../Components/FooterNav";
import { useContext, useState } from "react";
import { dataContext } from "../App";
import { motion } from "framer-motion";

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            ease: "easeInOut",
            opacity: { duration: 0.6 },
            // duration: 0.3,
            // stiffness: 120,
        },
    }),
};

function EventsPage() {
    const [events] = useContext(dataContext);
    const [filteredEvents, setFilteredEvents] = useState(events);
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
        >
            <HeaderNav to="/" />
            <PageTitle title="Events" />
            <main>
                <SearchBar setFilteredEvents={setFilteredEvents} />
                {filteredEvents &&
                    filteredEvents.map((event, i) => (
                        <EventItem
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            custom={i}
                            key={i}
                            event={event}
                        />
                    ))}
            </main>
            <FooterNav />
        </motion.div>
    );
}

export default EventsPage;
