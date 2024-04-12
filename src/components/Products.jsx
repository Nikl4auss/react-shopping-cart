/* eslint-disable react/prop-types */
import { useCart } from "../hooks/useCart"
import { AddToCartIcon, RemoveFromCartIcon } from "./icons"
import "./products.css"

export function Products({ products }) {
  const { addToCart, removeFromCart, checkProductIsInCart } = useCart()

  return (
    <main className="products">
      <ul>
        {products.map(product => {
          const productIsIncart = checkProductIsInCart(product)
          return (
            <li key={product.id}>
              <img
                src={product.thumbnail}
                alt={product.title}
              />
              <div>
                <p><strong>{product.title}</strong> - <span>${product.price}</span></p>
              </div>
              <div>
                <button
                  style={{
                    backgroundColor:
                      productIsIncart
                        ? 'red'
                        : '#09f'
                  }}
                  onClick={() => {
                    productIsIncart
                      ? removeFromCart(product)
                      : addToCart(product)
                  }}
                >
                  {
                    productIsIncart
                      ? <RemoveFromCartIcon />
                      : <AddToCartIcon />
                  }
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}