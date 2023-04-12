import PrimaryButton from "./PrimaryButton";

function OrderPageTotalPrice() {
    return ( 
        <>
            <section className="OrderPage__total_price">
                <p>Totalt värde på order</p>
                   <h1>1310 sek</h1> 
                   <PrimaryButton />
            </section>
        </>
     );
}

export default OrderPageTotalPrice;