import '../Styles/OrdersPage.css'
import  OrderItem  from "../Components/OrderItem";
import PageTitle from "../Components/PageTitle";
import OrderPageTotalPrice from '../Components/OrderPageTotalPrice';
function OredersPage() {
    return ( 
        
        <section className='Orders__Page'>
            <PageTitle />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderPageTotalPrice /> 
        </section>
    
        
        
     )
}

export default OredersPage;