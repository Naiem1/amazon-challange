import { useStateValue } from "../contextAPI/StateProvider";


const CheckoutProduct = ({ product }) => {
  
  const [state, dispatch] = useStateValue();
  const { id, title, price, image, rating } = product;

  const removeFromBasket = () => {
    // Remove the item from the basket
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      payload: {
        id: id
      }
    })
  }

  return (
    <div className="checkoutProduct"> 
      <img
        className="checkoutProduct__image"
        src={image}
        alt=""
      />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {
            Array(rating)
              .fill()
              .map((_, i) => <p key={i}>⭐</p>)
          }
        </div>
        <button onClick={removeFromBasket}>Remove From basket</button>
      </div>
    </div>
  )
}


export default CheckoutProduct;