import PageTitle from "../Components/PageTitle";
import EventInfo from "../Components/EventInfo";
import TicketSelector from "../Components/TicketSelector";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dataContext } from "../App";
import HeaderNav from "../Components/HeaderNav";
import { motion } from "framer-motion";

function SinglePage() {
    const defaultObj = {
        name: "",
        price: "",
        where: "",
        when: {
            date: "",
            from: "",
            to: "",
        },
    };

    let { name } = useParams();
    const [events] = useContext(dataContext);
    const [currentEvent, setCurrentEvent] = useState(defaultObj);

    // Renders the correct event based off the URL param
    useEffect(() => {
        events.forEach((event) => {
            if (event.name === name) {
                setCurrentEvent(event);
            }
        });
    }, []);

    return (
        <motion.article
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className="SinglePage__container"
        >
            <section className="event-info--container">
                <PageTitle title="Event" />
                <p className="event-info--quote">
                    You are about to score some tickets to
                </p>
                <EventInfo currentEvent={currentEvent} />
                <TicketSelector currentEvent={currentEvent} />
            </section>
        </motion.article>
    );
}

export default SinglePage;
