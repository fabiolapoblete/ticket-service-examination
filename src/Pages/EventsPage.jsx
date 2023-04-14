import HeaderNav from "../Components/HeaderNav";
import PageTitle from "../Components/PageTitle";
import SearchBar from "../Components/SearchBar";
import EventItem from "../Components/EventItem";
import FooterNav from "../Components/FooterNav";
import { useContext, useState } from "react";
import { dataContext } from "../App";

function EventsPage() {
  const [events] = useContext(dataContext);
  const [filteredEvents, setFilteredEvents] = useState(events);
  return (
    <>
      <HeaderNav to="/" />
      <PageTitle title="Events" />
      <main>
        <SearchBar setFilteredEvents={setFilteredEvents} />
        {filteredEvents &&
          filteredEvents.map((event, i) => <EventItem key={i} event={event} />)}
      </main>
      <FooterNav />
    </>
  );
}

export default EventsPage;
