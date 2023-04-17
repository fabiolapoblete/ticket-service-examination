import OrderItem from "../Components/OrderItem";
import PageTitle from "../Components/PageTitle";
import OrderPageTotalPrice from "../Components/OrderPageTotalPrice";
import PrimaryButton from "../Components/PrimaryButton";
import { useContext, useState } from "react";
import { dataContext } from "../App";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../Styles/OrdersPage.css";

function OrdersPage() {
    const [event, setCart, cart] = useContext(dataContext);
    const [totalCartPrice, setTotalCartPrice] = useState(0);
    const navigate = useNavigate();

    const sendOrder = () => {
        navigate("/tickets");
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
        >
            <section className="orders__Page">
                <PageTitle title="Order" />
                {cart.length > 0 ? ( // Renders items in cart based on cart length
                    <>
                        {cart.map((item, i) => (
                            <OrderItem
                                setTotalCartPrice={setTotalCartPrice}
                                currentEvent={item}
                                key={item.name + i * 5}
                                index={i}
                            />
                        ))}
                        <OrderPageTotalPrice totalCartPrice={totalCartPrice} />
                        <PrimaryButton
                            action={sendOrder}
                            title="Skicka order"
                        />
                    </>
                ) : (
                    // Renders empty cart UI
                    <>
                        <p className="noOrder">Din varukorg är tom</p>
                        <PrimaryButton
                            action={() => navigate("/events")}
                            title="Till Events"
                        />
                    </>
                )}
            </section>
        </motion.div>
    );
}

export default OrdersPage;
