import { useEffect, useState, useContext } from "react";
import PrimaryButton from "./PrimaryButton";
import { dataContext } from "../App";

function TicketSelector({ currentEvent }) {
    const [noOfTickets, setNoOfTickets] = useState(1);
    const [totalPrice, setTotalPrice] = useState();
    const [event, setCart, cart] = useContext(dataContext);

    useEffect(() => {
        setTotalPrice(noOfTickets * currentEvent.price);
    }, [currentEvent, noOfTickets]);

    const decrement = () => {
        if (noOfTickets > 1) {
            setNoOfTickets(noOfTickets - 1);
        }
    };

    const increment = () => {
        setNoOfTickets(noOfTickets + 1);
    };

    const addToCart = () => {
        const orderObj = {
            ...currentEvent,
            noOfTickets: noOfTickets,
            totalPrice: totalPrice,
        };
        setCart([...cart, orderObj]);
    };

    return (
        <section className="event-info--ticket-selector">
            <h3 className="event-info-price">{totalPrice}</h3>
            <section className="event-info--choser">
                <button onClick={decrement} className="event-info--choser-btn">
                    -
                </button>
                <h4>{noOfTickets}</h4>
                <button onClick={increment} className="event-info--choser-btn">
                    +
                </button>
            </section>
            <PrimaryButton action={addToCart} title="Lägg i varukorgen" />
        </section>
    );
}

export default TicketSelector;
