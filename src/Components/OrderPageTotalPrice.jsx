function OrderPageTotalPrice({ totalCartPrice }) {
    return (
        <>
            <section className="orderPage__total_price">
                <p>Totalt värde på order</p>
                <h1>{totalCartPrice}</h1>
            </section>
        </>
    );
}

export default OrderPageTotalPrice;
