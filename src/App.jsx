import { useState } from "react"
import { Products } from "./components/Products"
import { products as initialProducts } from "./mocks/products.json"
import { Header } from "./components/Header"
export default function App () {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0
  })

  function filterProducts(products) {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice && 
        (
          filters.category === "all" || 
          product.category === filters.category
        )
      )
    })
  }
  return (
    <>
      <Header changeFilters={setFilters}/>
      <Products products={filterProducts(products)} />
    </>
  )
}