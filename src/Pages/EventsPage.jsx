import EventItem from "../Components/EventItem";
import PageTitle from "../Components/PageTitle";
import SearchBar from "../Components/SearchBar";
import HeaderNav from "../Components/HeaderNav";
import FooterNav from "../Components/FooterNav";
import { useContext, useState } from "react";
import { dataContext } from "../App";

function EventsPage() {
    const [events] = useContext(dataContext);
    const [filteredEvents, setFilteredEvents] = useState(events);
    return (
        <>
            <HeaderNav />
            <PageTitle title="Events" />
            <main>
                <SearchBar setFilteredEvents={setFilteredEvents} />
                {filteredEvents &&
                    filteredEvents.map((event, i) => (
                        <EventItem key={i} event={event} />
                    ))}
            </main>
            <FooterNav />
        </>
    );
}

export default EventsPage;
