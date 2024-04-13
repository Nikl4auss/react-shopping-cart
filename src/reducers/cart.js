export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART'
}

export const cartInitialState = JSON.parse(localStorage.getItem("cart")) || []

function updateLocalStorage(state) {
  localStorage.setItem("cart", JSON.stringify(state))
}


export function cartReducer(state, action) {

  const { type, payload } = action
  let newState = structuredClone(state)
  switch (type) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      const { id } = payload
      const productInCartIndex = findProductIndex(state, id)
      if (productInCartIndex >= 0) {
        newState[productInCartIndex].quantity += 1
      }
      else {
        newState = [
          ...state,
          {
            ...payload,
            quantity: 1
          }
        ]
      }
    }
      break

    case CART_ACTION_TYPES.REMOVE_FROM_CART: {
      const { id } = payload
      const productInCartIndex = findProductIndex(state, id)

      if (newState[productInCartIndex].quantity > 1) {
        newState[productInCartIndex].quantity -= 1
      }
      else {
        newState = newState.filter(item => item.id !== id)
      }
    }
      break

    case CART_ACTION_TYPES.CLEAR_CART: {
      newState = []
    }
  }
  updateLocalStorage(newState)
  return newState
}

function findProductIndex(state, productId) {
  return state.findIndex(item => item.id === productId)
}