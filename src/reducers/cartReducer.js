export default function cart(state = {
    cart: []
  }, action) {
    switch (action.type) {
  
      case 'ADD_GAME':

        return {
          ...state,
          cart: action.payload
        }

      case 'INCREASE_QUANTITY':
        
        const increaseIndex = state.cart.findIndex( game => {
          return game.id === action.payload
        })
        
        return {
          ...state,
          cart:[
          ...state.cart.slice(0, increaseIndex),
          Object.assign({}, state.cart[increaseIndex], {quantity: state.cart[increaseIndex].quantity += 1}),
          ...state.cart.slice(increaseIndex + 1)
        ]}
      
        case 'DECREASE_QUANTITY':
        
            const decreaseIndex = state.cart.findIndex( game => {
              return game.id === action.payload
            })
            if (state.cart[decreaseIndex].quantity === 1) return state
            return {
              ...state,
              cart:[
              ...state.cart.slice(0, decreaseIndex),
              Object.assign({}, state.cart[decreaseIndex], {quantity: state.cart[decreaseIndex].quantity -= 1}),
              ...state.cart.slice(decreaseIndex + 1)
            ]}
          case 'REMOVE_GAME':
      
              const removeGameIndex = state.cart.findIndex( game => {
                return game.id === action.payload
              })
  
              return {
                ...state,
                cart:[
                  ...state.cart.slice(0, removeGameIndex),
                  ...state.cart.slice(removeGameIndex + 1)
                ]}
      
      default:
        return state;
  
    }
  };
  