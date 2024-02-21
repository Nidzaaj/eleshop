import React from 'react'
import ProductCardComponent from '../components/ProductCardComponent'
import { useSelector } from 'react-redux';

function AllProductsPage() {

    const { products } = useSelector((state) => state.productsStore)

    // console.log(products);
    return (
        <div className='container mx-auto mt-[65px] mb-[65px] flex items-start gap-[50px]'>
            {/* left side / filter */}
            <div className='w-[20%] h-[580px] bg-blueSecondary border border-blueTerciary'>FILTER</div>

            {/* right side / product cards */}
            <div className='w-[80%] flex flex-wrap gap-[30px] items-center justify-center'>

                {products.map((el, index) => {
                    return <ProductCardComponent item={el} key={index} />
                })}

            </div>
        </div>
    )
}

export default AllProductsPage