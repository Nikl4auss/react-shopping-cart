import { useId } from "react";
import { useCart } from "../hooks/useCart";
import { CartItem } from "./CartItem";
import { CartIcon, ClearCartIcon } from "./icons";
import "./Cart.css"

export function Cart() {
  const { cart, addToCart, removeFromCart, clearCart } = useCart()
  const cartCheckboxId = useId()
  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckboxId} hidden />
      <aside className="cart">
        <ul>
          {cart.map(product => (
            <CartItem
              key={product.id}
              product={product}
              addToCart={() => addToCart(product)}
              removeFromCart={() => removeFromCart(product)}
            />
          ))
          }
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside >

    </>
  )
}