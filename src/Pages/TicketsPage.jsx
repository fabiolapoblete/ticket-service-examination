import TicketItem from "../Components/TicketItem";
import "../Styles/TicketsPage.css";
import { useContext } from "react";
import { dataContext } from "../App";
import PageTitle from "../Components/PageTitle";

function TicketsPage() {
    const [event, setCart, cart] = useContext(dataContext);
    // Loop each cart item

    console.log(cart);

    return (
        <>
            <PageTitle title={"Tickets"} />
            {cart &&
                cart.map((item) => {
                    return Array.from({ length: item.noOfTickets }, (_, i) => (
                        <TicketItem event={item} key={`${item.name}-${i}`} />
                    ));
                })}
        </>
    );
}

export default TicketsPage;
