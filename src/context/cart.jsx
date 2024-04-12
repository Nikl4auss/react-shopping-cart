/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    function findProductIndex(product) {
        return cart.findIndex(item => item.id === product.id)
    }

    function addToCart(product) {
        const productInCartIndex = findProductIndex(product)

        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            setCart(newCart)
            return
        }

        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: + 1
            }
        ]))
    }

    function removeFromCart(product) {
        const productInCartIndex = findProductIndex(product)

        if (cart[productInCartIndex].quantity > 1) {
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity -= 1
            setCart(newCart)
            return
        }
        setCart(prevState => prevState.filter(item => item.id !== product.id))
    }

    function clearCart() {
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart,
            removeFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}