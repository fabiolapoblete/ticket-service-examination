import PrimaryButton from "./PrimaryButton";
import { useEffect, useState, useContext } from "react";
import { dataContext } from "../App";
import "../Styles/TicketSelector.css";
import { animate, motion } from "framer-motion";

function TicketSelector({ currentEvent }) {
    const [event, setCart, cart] = useContext(dataContext);
    const [noOfTickets, setNoOfTickets] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);
    const [popEffect, setPopEffect] = useState(false);

    const decrement = () => {
        noOfTickets > 1 && setNoOfTickets(noOfTickets - 1);
        setPopEffect(true);
    };

    const increment = () => {
        setNoOfTickets(noOfTickets + 1);
        setPopEffect(true);
    };

    const scaleUpDown = () => {
        visible: {
            scale: [1.2, 1];
        }
    };

    // Calculates the total price each change of tickets
    useEffect(() => {
        setTotalPrice(noOfTickets * currentEvent.price);
    }, [currentEvent, noOfTickets]);

    // Adds a new order object with additional fields to the Cart
    const addToCart = () => {
        // Checks for a match by name and gets index
        let matchedEventIndex = cart.findIndex(
            (item) => item.name === currentEvent.name
        );

        if (matchedEventIndex !== -1) {
            // Updates the number of tickets
            let totalTickets =
                cart[matchedEventIndex].noOfTickets + noOfTickets;

            // Creates new object to replace in cart
            const updatedObj = {
                ...currentEvent,
                noOfTickets: totalTickets,
                totalPrice: totalPrice,
            };

            // Replace old object with updated object
            let cartCopy = cart;
            cartCopy[matchedEventIndex] = updatedObj;
            setCart(cartCopy);
        } else {
            // Adds a new object to the cart
            const orderObj = {
                ...currentEvent,
                noOfTickets: noOfTickets,
                totalPrice: totalPrice,
            };

            setCart([...cart, orderObj]);
        }
    };

    return (
        <article>
            <section className="event-info--ticket-selector">
                <h3 className="event-info-price">{totalPrice}</h3>
                <section className="event-info--choser">
                    <button
                        onClick={decrement}
                        className="event-info--choser-btn"
                    >
                        -
                    </button>
                    <motion.h4
                        variants={scaleUpDown}
                        animate={popEffect ? "visible" : ""}
                    >
                        {noOfTickets}
                    </motion.h4>
                    <motion.button
                        onClick={increment}
                        className="event-info--choser-btn"
                    >
                        +
                    </motion.button>
                </section>
            </section>
            <PrimaryButton action={addToCart} title="Lägg i varukorgen" />
        </article>
    );
}

export default TicketSelector;
