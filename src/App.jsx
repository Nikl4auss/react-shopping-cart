import { Products } from "./components/products"
import { products } from "./mocks/products.json"
export default function App () {
  return (
    <Products products={products} />
  )
}