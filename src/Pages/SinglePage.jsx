import PageTitle from "../Components/PageTitle";
import EventInfo from "../Components/EventInfo";
import TicketSelector from "../Components/TicketSelector";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dataContext } from "../App";

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
        <>
            <article className="event-info--container">
                <PageTitle title="Event" />
                <p className="event-info--quote">
                    You are about to score some tickets to
                </p>
                <EventInfo currentEvent={currentEvent} />
                <TicketSelector currentEvent={currentEvent} />
            </article>
        </>
    );
}

export default SinglePage;
