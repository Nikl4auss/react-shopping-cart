import { useId } from "react";
import { CartIcon ,ClearCartIcon } from "./icons";
import "./Cart.css"
export function Cart () {
    const cartCheckboxId = useId()
    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input type="checkbox" id={cartCheckboxId} hidden/>
            <aside className="cart">
                <ul>
                    <li>
                        <img 
                            src="https://cdn.dummyjson.com/product-images/1/thumbnail.jpg" 
                            alt="iphone" 
                        />
                        <div>
                            <strong>Iphone</strong> - $1499
                        </div>

                        <footer>
                            <small>
                                Qty: 1
                            </small>
                            <button>+</button>
                        </footer>
                    </li>
                </ul>
                <button>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}