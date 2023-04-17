import TicketItem from "./TicketItem";

function TicketSlider({ event }) {
    return Array.from({ length: event.noOfTickets }, (_, i) => (
        <TicketItem event={event} key={`${event.name}-${i}`} />
    ));
}

export default TicketSlider;
