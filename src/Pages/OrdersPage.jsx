import "../Styles/OrdersPage.css";
import OrderItem from "../Components/OrderItem";
import PageTitle from "../Components/PageTitle";
import OrderPageTotalPrice from "../Components/OrderPageTotalPrice";
import PrimaryButton from "../Components/PrimaryButton";
import { useContext, useState } from "react";
import { dataContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
import HeaderNav from "../Components/HeaderNav";
import FooterNav from "../Components/FooterNav";

function OrdersPage() {
  const [event, setCart, cart] = useContext(dataContext);
  const [totalCartPrice, setTotalCartPrice] = useState(0);
  const navigate = useNavigate();

  function handleClick() {
    navigate("/tickets");
  }

  return (
    <>
      <HeaderNav to="/events" />
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
        <PrimaryButton action={handleClick} title="Skicka order" />
      </section>
      <FooterNav />
    </>
  );
}

export default OrdersPage;
