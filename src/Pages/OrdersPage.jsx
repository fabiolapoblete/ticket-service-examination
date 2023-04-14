import "../Styles/OrdersPage.css";
import OrderItem from "../Components/OrderItem";
import PageTitle from "../Components/PageTitle";
import OrderPageTotalPrice from "../Components/OrderPageTotalPrice";
import PrimaryButton from "../Components/PrimaryButton";
import { useContext, useState } from "react";
import { dataContext } from "../App";
import HeaderNav from "../Components/HeaderNav";

function OrdersPage() {
    const [event, setCart, cart] = useContext(dataContext);
    const [totalCartPrice, setTotalCartPrice] = useState(0);

    return (
        <>
        <HeaderNav />
        <section className="Orders__Page">
            <PageTitle title="Order" />

            {cart &&
                cart.map((item, i) => (
                    <OrderItem
                        setTotalCartPrice={setTotalCartPrice}
                        currentEvent={item}
                        key={item.name + i}
                        index={i}
                    />
                ))}
            <OrderPageTotalPrice totalCartPrice={totalCartPrice} />
            <PrimaryButton title="Skicka order" />
        </section>
        </>

    );
}

export default OrdersPage;
