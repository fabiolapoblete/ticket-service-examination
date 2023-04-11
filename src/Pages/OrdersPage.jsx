import '../Styles/OrdersPage.css'
import  OrderItem  from "../Components/OrderItem";
import PageTitle from "../Components/PageTitle";
function OredersPage() {
    return ( 
        
        <section className='Orders__Page'>
            <PageTitle />
            <OrderItem />
            <OrderItem />
            <OrderItem />
        </section>
    
        
        
     )
}

export default OredersPage;