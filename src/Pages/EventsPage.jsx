import EventItem from "../Components/EventItem";
import PageTitle from "../Components/PageTitle";
import SearchBar from "../Components/SearchBar";
import HeaderNav from "../Components/HeaderNav";
import FooterNav from "../Components/FooterNav";
import { useContext } from "react";
import { dataContext } from "../App";

function EventsPage() {
  const events = useContext(dataContext);
  console.log(events);
  return (
    <>
      <HeaderNav />
      <header>
        <PageTitle title="Events" />
      </header>
      <main>
        <SearchBar />
        {events &&
          events.map((event, i) => <EventItem key={i} event={event} />)}
      </main>
      <FooterNav />
    </>
  );
}

export default EventsPage;
