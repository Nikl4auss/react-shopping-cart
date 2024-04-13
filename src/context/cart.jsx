/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { cartReducer as reducer, cartInitialState as initialState, CART_ACTION_TYPES } from "../reducers/cart";
export const CartContext = createContext()

function useCartReducer() {
    const [state, dispatch] = useReducer(reducer, initialState)

    function addToCart(product) {
        return dispatch({
            type: CART_ACTION_TYPES.ADD_TO_CART,
            payload: product
        })
    }

    function removeFromCart(product) {
        return dispatch({
            type: CART_ACTION_TYPES.REMOVE_FROM_CART,
            payload: product
        })
    }

    function clearCart() {
        return dispatch({
            type: CART_ACTION_TYPES.CLEAR_CART
        })
    }

    return { state, addToCart, removeFromCart, clearCart }
}

export function CartProvider({ children }) {
    const { state, addToCart, removeFromCart, clearCart } = useCartReducer()
    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            clearCart,
            removeFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}