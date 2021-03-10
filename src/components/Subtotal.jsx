  
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../contextAPI/reducer";
import { useStateValue } from "../contextAPI/StateProvider";


function Subtotal() {
  const [{ basket }, dispatch] = useStateValue()
 console.log(basket.price)
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket?.length} items): <strong>{ value }</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;