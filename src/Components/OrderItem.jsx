import "../Styles/OrderItem.css";


function OrderItem() {
    
    return ( 
       <article className="OrderItem">
            <section className="OrderItem_header">
                <h2>Lasse-Stefanz</h2>
                <p>21 mars kl 19:00 - 21:00</p>
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