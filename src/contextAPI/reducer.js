export const initialState = {
  basket: [],
  user: null
}


// Selector

export const getBasketTotal = basket =>
  basket?.reduce((amount,  item) => item.price + amount, 0)

const reducer = (state, action) => {
 console.log(action)
  switch (action.type) {
    case 'ADD_TO_BASKET': {
      return {
        ...state,
        basket: [...state.basket, action.item]
      }
    }
      
    case 'REMOVE_FROM_BASKET': {
      console.log(action)
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );

      console.log('Index>>', index);

      let newBasket = [...state.basket];
      console.log('newBasket>>', newBasket);
      if (index >= 0) {
        console.log('inner index>>', index);
        newBasket.splice(index, 1);
        console.log(newBasket);

      } else {
        console.warn(`Can't remove product (id: ${action.item.id}) as its not in basket!`);
      }

      return {
        ...state,
        basket: newBasket
      }

      // return {
      //   ...state,
      //   basket: state.basket.filter(item => item.id !== action.item.id)
      // }
    }
      
    case 'SET_USER': {
      return {
        ...state,
        user: action.user
      }
  }
  
      
    default:
      return state
  }
}

export default reducer;