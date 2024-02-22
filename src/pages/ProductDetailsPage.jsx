import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductService from '../services/productService'

function ProductDetailsPage() {
    const [singleProduct, setSingleProduct] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [currentImage, setCurrentImage] = useState(0)
    const { id } = useParams()

    useEffect(() => {
        ProductService.getSingleProduct(id)
            .then(res => {
                setSingleProduct(res.data)
                setIsLoading(true)
            })
            .catch(err => console.log(err))
    }, [])

    //  FIXME: design, images, border active on small images
    return (
        isLoading &&
        <div className=' container mx-auto mt-[50px] mb-[50px] flex gap-[40px]'>

            {/* left side */}
            <div className=' flex flex-col gap-[40px] w-[50%]'>
                <img src={singleProduct.images[currentImage]} alt="fix"
                    className='w-[450px] h-[300px] border border-greyPrimary rounded-[20px]' />
                {/* male slicice */}
                <div className=' flex items-center gap-3 w-[50%]'>
                    {singleProduct.images.map((el, i) => {
                        return (
                            <img src={el}
                                alt='fix'
                                key={i}
                                className=' w-[80px] h-[50px] object-cover border border-greyPrimary rounded-[20px]'
                                onClick={() => setCurrentImage(i)}
                            />)
                    })}
                </div>
            </div>
            {/* right side */}
            <div className=' w-[50%]'>
                <h1>{singleProduct.title}</h1>

            </div>
        </div>
    )
}

export default ProductDetailsPage