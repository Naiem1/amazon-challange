import CheckoutProduct from "../components/CheckoutProduct";
import Subtotal from "../components/Subtotal"
import { useStateValue } from "../contextAPI/StateProvider";


const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue()

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="#ad"
          className="checkout__ad"
        />
        
        <div>
          <h3>Hello, { user?.email }</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {
            basket.map(item => <CheckoutProduct product={item} key={item.id }/>)
          }
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal/>
      </div>
     
    </div>
  )
}

export default Checkout;