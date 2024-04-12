/* eslint-disable react/prop-types */
export function CartItem({ product, addToCart, removeFromCart }) {
  return (
    <li>
      <img
        src={product.thumbnail}
        alt={product.title}
      />
      <div>
        <strong>{product.title}</strong> - ${product.price}
      </div>

      <footer>
        <button onClick={removeFromCart}>-</button>
        <small>
          Qty: {product.quantity}
        </small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}