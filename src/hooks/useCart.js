import { useContext } from "react";
import { CartContext } from "../context/cart";

export function useCart() {
    const context = useContext(CartContext)

    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider")
    }

    function checkProductIsInCart(product) {
        return context.cart.some(cartProduct => cartProduct.id === product.id)
    }
    return { ...context, checkProductIsInCart }
}