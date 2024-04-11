/* eslint-disable react/prop-types */
import { useId, useState } from "react"
import "./Filters.css"

export function Filters({ changeFilters }) {
    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const categoryFilterId = useId()


    function handleChangeMinPrice (event) {
        setMinPrice(event.target.value)
        changeFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value

        }))
    }

    function handleChangeCategry (event) {
        changeFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>A partir de:</label>
                <input 
                    type="range" 
                    name="price" 
                    id={minPriceFilterId}
                    min="0"
                    max="1000"
                    onChange={handleChangeMinPrice}
                />
                <span>${minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>
                    <select name="category" id={categoryFilterId} onChange={handleChangeCategry}>
                        <option value="all">Todos</option>
                        <option value="laptops">Portatiles</option>
                        <option value="smartphones">Celulares</option>
                    </select>
                </label>
            </div>
        </section>
    )
}