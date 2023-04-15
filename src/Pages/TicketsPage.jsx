import TicketItem from "../Components/TicketItem";
import "../Styles/TicketsPage.css";
import { useContext } from "react";
import { dataContext } from "../App";
import PageTitle from "../Components/PageTitle";
import { motion } from "framer-motion";

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
            <PageTitle title={"Tickets"} />
            {cart &&
                cart.map((item) => {
                    return Array.from({ length: item.noOfTickets }, (_, i) => (
                        <TicketItem event={item} key={`${item.name}-${i}`} />
                    ));
                })}
        </motion.div>
    );
}

export default TicketsPage;
