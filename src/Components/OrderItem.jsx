import { useEffect, useState, useContext } from "react";
import { dataContext } from "../App";
import "../Styles/OrderItem.css";

function OrderItem({ currentEvent, index, setTotalCartPrice }) {
    const [event, setCart, cart] = useContext(dataContext);
    const [totalTickets, setTotalTickets] = useState(currentEvent.noOfTickets);
    const { name, when } = currentEvent;
    const { date, from, to } = when;
    let cartCopy = cart; // Copy of cart array to manipulate event directly at event index

    const calcTotalCartPrice = () => {
        let cartTotal = 0;
        cart.forEach((item) => (cartTotal += item.totalPrice));
        setTotalCartPrice(cartTotal); // Updates the parent component state
    };

    const deleteItemFromCart = () => {
        setCart(cartCopy.filter((item) => item.noOfTickets > 0));
    };

    const decrement = () => {
        totalTickets > 0 && setTotalTickets(totalTickets - 1);
    };

    const increment = () => {
        setTotalTickets(totalTickets + 1);
    };

    // Updates the cart items data when the amout of tickets change
    useEffect(() => {
        cartCopy[index].noOfTickets = totalTickets;
        cartCopy[index].totalPrice = currentEvent.price * totalTickets;
        totalTickets == 0 ? deleteItemFromCart() : setCart(cartCopy);
        calcTotalCartPrice();
    }, [totalTickets]);

    return (
        <article className="orderItem">
            <section className="orderItem_header">
                <h3>{name}</h3>
                <p>
                    {date} kl {from} - {to}
                </p>
            </section>
            <ul className="orderItem_quantity">
                <button onClick={decrement} className="orderItem_quantity-btn">
                    -
                </button>
                <button className="orderItem_quantity-quantity">
                    {currentEvent.noOfTickets}
                </button>
                <button onClick={increment} className="orderItem_quantity-btn">
                    +
                </button>
            </ul>
        </article>
    );
}

export default OrderItem;
