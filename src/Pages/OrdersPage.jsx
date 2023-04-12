import "../Styles/OrdersPage.css";
import OrderItem from "../Components/OrderItem";
import PageTitle from "../Components/PageTitle";
import OrderPageTotalPrice from "../Components/OrderPageTotalPrice";
function OrdersPage() {
    return (
        <section className="Orders__Page">
            <PageTitle />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderPageTotalPrice />
        </section>
    );
}

export default OrdersPage;
