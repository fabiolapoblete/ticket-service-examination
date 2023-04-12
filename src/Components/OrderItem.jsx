import "../Styles/OrderItem.css";


function OrderItem({event}) {
    const { name, price, where, when } = event;
    const { date, from, to } = when;
    return ( 
       <article className="OrderItem">
            <section className="OrderItem_header">
                <h2>{name}</h2>
                <p>{date} kl {from} - {to}</p>
            </section>
            <ul className="OrderItem_quantity">
                <li className="OrderItem_quantity-btn">-</li>
                <li className="OrderItem_quantity-quantity">3</li>
                <li className="OrderItem_quantity-btn" >+</li>
            </ul>

       </article>  


     );
}

export default OrderItem;