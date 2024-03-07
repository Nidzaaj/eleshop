import React from 'react'
import { useSelector } from 'react-redux'
import ProductCardComponent from '../components/ProductCardComponent'

function CategoryPage() {
    const { products } = useSelector((state) => state.productsStore)
    const { category } = useSelector((state) => state.categoryStore)
    // console.log(products);
    // console.log(category);
    const findCatecory = products.filter(product => product.category === category)
    // console.log(findCatecory);

    return (
        <div className='container mx-auto my-[65px] flex-wrap items-center justify-center grid grid-rows-2 grid-flow-col gap-4'>
            {findCatecory.map((el, index) => {
                return <ProductCardComponent item={el} key={index} />
            })}
        </div>
    )
}
export default CategoryPage