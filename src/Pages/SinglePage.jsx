import PrimamaryButton from "../Components/PrimaryButton";
import TicketSelector from "../Components/TicketSelector";
import EventInfo from "../Components/EventInfo";
import PageTitle from "../Components/PageTitle";
import { useParams } from "react-router-dom";
import { dataContext } from "../App";
import { useContext, useEffect, useState } from "react";

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

    // Finds the correct event based off the URL
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
                <EventInfo event={currentEvent} />
                <TicketSelector
                    currentEvent={currentEvent}
                    price={currentEvent.price}
                />
            </article>
        </>
    );
}

export default SinglePage;
