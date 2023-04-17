import TicketItem from "../Components/TicketItem";
import "../Styles/TicketsPage.css";
import { useContext } from "react";
import { dataContext } from "../App";
import PageTitle from "../Components/PageTitle";
import { motion } from "framer-motion";
import TicketSlider from "../Components/TicketSlider";
import HeaderNav from "../Components/HeaderNav";

function TicketsPage() {
    const [event, setCart, cart] = useContext(dataContext);
    // Loop each cart item

    console.log(cart);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
        >
            <HeaderNav />
            <PageTitle title={"Tickets"} />
            {cart &&
                cart.map((item, i) => {
                    return (
                        <>
                            <h3 key={i + 55} className="ticketSlider__header">
                                {item.name} tickets - {item.noOfTickets} st
                            </h3>
                            <section key={i + 33} className="ticketsWrapper">
                                <TicketSlider key={i} event={item} />;
                            </section>
                        </>
                    );
                })}
        </motion.div>
    );
}

export default TicketsPage;
