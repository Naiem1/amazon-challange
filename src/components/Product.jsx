import { useStateValue } from "../contextAPI/StateProvider";


const Product = ({ id, title, image, price, rating }) => {

  const [state, dispatch] = useStateValue()

  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    })
  }

  console.log(state)
  return (
    <div className="product">
      <div className="product__info">
        <p>{ title }</p>
        <p className="product__price">
          <small>$</small>
          <strong>{ price }</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
            <p key={i}>⭐</p>
          ))
          }
          
        </div>
      </div>

      <img
        src={image}
        alt="product"
      />

      <button onClick={addToBasket}>Add To Basket</button>
    </div>
  )
}

export default Product;