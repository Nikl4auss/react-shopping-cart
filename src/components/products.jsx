/* eslint-disable react/prop-types */
import { AddToCartIcon } from "./icons"
import "./products.css"

export function Products({ products }) {
    return (
        <main className="products">
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <img 
                            src={product.thumbnail}
                            alt={product.title} 
                         />
                         <div>
                           <p><strong>{product.title}</strong> - <span>${product.price}</span></p> 
                         </div>
                         <div>
                            <button>
                                <AddToCartIcon />
                            </button>
                         </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}