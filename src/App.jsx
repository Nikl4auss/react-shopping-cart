import { useState } from "react"
import { Products } from "./components/Products"
import { Footer } from "./components/Footer"
import { products as initialProducts } from "./mocks/products.json"
import { Header } from "./components/Header"
import { useFilters } from "./hooks/useFilters"

export default function App () {
  const [products] = useState(initialProducts)
  const {filterProducts} = useFilters()

  const filteredProducts = filterProducts(products)
  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      <Footer />
    </>
  )
}