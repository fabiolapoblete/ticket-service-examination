import HeaderNav from "../Components/HeaderNav";
import PrimamaryButton from "../Components/PrimaryButton";
import TicketSelector from "../Components/TicketSelector";
import EventInfo from "../Components/EventInfo";
import PageTitle from "../Components/PageTitle";

function SinglePage() {
  return (
    <>
      <article className="event-info--container">
        <PageTitle />
        <p className="event-info--quote">You are about to score some tickets to</p>
        <EventInfo />
        <TicketSelector />
        <PrimamaryButton />
      </article>
    </>
  );
}

export default SinglePage;
