import "../Styles/OrdersPage.css";
import OrderItem from "../Components/OrderItem";
import PageTitle from "../Components/PageTitle";
import OrderPageTotalPrice from "../Components/OrderPageTotalPrice";
import PrimaryButton from "../Components/PrimaryButton";
import { useContext, useState } from "react";
import { dataContext } from "../App";
import { Link } from "react-router-dom";

function OrdersPage() {
    const [event, setCart, cart] = useContext(dataContext);
    const [totalCartPrice, setTotalCartPrice] = useState(0);

    return (
        <section className="Orders__Page">
            <PageTitle title="Order" />

            {cart &&
                cart.map((item, i) => (
                    <OrderItem
                        setTotalCartPrice={setTotalCartPrice}
                        currentEvent={item}
                        key={item.name + i * 5}
                        index={i}
                    />
                ))}
            <OrderPageTotalPrice totalCartPrice={totalCartPrice} />
            <Link to="/tickets">
                <PrimaryButton title="Skicka order" />
            </Link>
        </section>
    );
}

export default OrdersPage;
