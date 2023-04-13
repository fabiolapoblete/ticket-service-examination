import { useEffect, useState } from "react";
import "../Styles/OrderItem.css";
import { useContext } from "react";
import { dataContext } from "../App";

function OrderItem({ currentEvent, index, setTotalCartPrice }) {
    let currentTickets = currentEvent.noOfTickets;
    const [noOfTickets, setNoOfTickets] = useState(currentTickets);
    const [event, setCart, cart] = useContext(dataContext);
    const { name, when } = currentEvent;

    let cartList = cart;

    const calcTotalPrice = () => {
        let calcPrice = 0;

        cart.forEach((item) => {
            calcPrice += item.totalPrice;
        });

        setTotalCartPrice(calcPrice);
    };

    const deleteItem = () => {
        setCart(cartList.filter((item) => item.noOfTickets > 0));
    };

    useEffect(() => {
        cartList[index].noOfTickets = noOfTickets;
        cartList[index].totalPrice = cartList[index].price * noOfTickets;
        setCart(cartList);
        deleteItem();
        calcTotalPrice();
    }, [noOfTickets]);

    const decrement = () => {
        if (noOfTickets > 0) {
            setNoOfTickets(noOfTickets - 1);
        }
    };

    const increment = () => {
        setNoOfTickets(noOfTickets + 1);
    };

    return (
        <article className="OrderItem">
            <section className="OrderItem_header">
                <h2>{name}</h2>
                <p>
                    {when.date} kl {when.from} - {when.to}
                </p>
            </section>
            <ul className="OrderItem_quantity">
                <li onClick={decrement} className="OrderItem_quantity-btn">
                    -
                </li>
                <li className="OrderItem_quantity-quantity">{noOfTickets}</li>
                <li onClick={increment} className="OrderItem_quantity-btn">
                    +
                </li>
            </ul>
        </article>
    );
}

export default OrderItem;
