/* eslint-disable react/prop-types */
import { useId } from "react"
import "./Filters.css"
import { useFilters } from "../hooks/useFilters"

export function Filters() {
    const {filters ,setFilters} = useFilters()
    const minPriceFilterId = useId()
    const categoryFilterId = useId()


    function handleChangeMinPrice (event) {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value

        }))
    }

    function handleChangeCategry (event) {
        setFilters(prevState => ({
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
                    value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>
                    <select name="category" id={categoryFilterId} onChange={handleChangeCategry} defaultValue={filters.category}>
                        <option value="all">Todos</option>
                        <option value="laptops">Portatiles</option>
                        <option value="smartphones">Celulares</option>
                    </select>
                </label>
            </div>
        </section>
    )
}