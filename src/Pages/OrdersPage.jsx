import "../Styles/OrdersPage.css";
import OrderItem from "../Components/OrderItem";
import PageTitle from "../Components/PageTitle";
import OrderPageTotalPrice from "../Components/OrderPageTotalPrice";
import PrimaryButton from "../Components/PrimaryButton";
function OrdersPage() {
  return (
    <section className="Orders__Page">
      <PageTitle title="Order" />
      <OrderItem />
      <OrderItem />
      <OrderItem />
      <OrderPageTotalPrice />
      <PrimaryButton title="Skicka order" />
    </section>
  );
}

export default OrdersPage;
