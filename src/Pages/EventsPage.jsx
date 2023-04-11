import EventItem from "../Components/EventItem";
import PageTitle from "../Components/PageTitle";
import SearchBar from "../Components/SearchBar";
import HeaderNav from "../Components/HeaderNav";
import FooterNav from "../Components/FooterNav";

function EventsPage() {
  return (
    <>
      <HeaderNav />
      <header>
        <PageTitle />
      </header>
      <main>
        <SearchBar />
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
      </main>
      <FooterNav />
    </>
  );
}

export default EventsPage;
