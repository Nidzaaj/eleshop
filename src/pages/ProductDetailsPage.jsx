import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductService from '../services/productService'
import { Rating } from '@mui/material'
// react-icons
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { saveInCartHandler } from '../store/cartSlice';
import { toast } from 'react-toastify';





function ProductDetailsPage() {
    const [addToCartProduct, setAddToCartProduct] = useState({})
    const [quantitys, setQuantitys] = useState(1)
    const [singleProduct, setSingleProduct] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [currentImage, setCurrentImage] = useState(0)
    const { id } = useParams()
    const dispatch = useDispatch();
    useEffect(() => {
        ProductService.getSingleProduct(id)
            .then(res => {
                setSingleProduct(res.data)
                setIsLoading(true)
            })
            .catch(err => console.log(err))
    }, [])
    function quantityHandlerIncrement() {
        setQuantitys(prevQuantity => prevQuantity + 1);
        setAddToCartProduct({ ...singleProduct, count: quantitys + 1 }); // Ažuriramo addToCartProduct i quantitys
        setSingleProduct({ ...singleProduct, count: quantitys + 1 }); // Ažuriramo i singleProduct
    }

    function quantityHandlerDecrement() {
        if (quantitys > 1) {
            setQuantitys(prevQuantity => prevQuantity - 1);
            setAddToCartProduct({ ...singleProduct, count: quantitys - 1 }); // Ažuriramo addToCartProduct i quantitys
            setSingleProduct({ ...singleProduct, count: quantitys - 1 }); // Ažuriramo i singleProduct
        }
    }

    function handleProduct() {
        dispatch(saveInCartHandler(singleProduct));
        toast.success('Added to cart!')
    }


    // console.log(addToCartProduct);


    return (
        isLoading &&

        <div className=' container mx-auto mt-[70px] mb-[50px] flex gap-[40px]'>
            {console.log(singleProduct)}
            {/* left side */}
            <div className=' flex flex-col items-center gap-[40px] w-[50%]'>

                <div className='w-[600px] h-[450px] border border-greyPrimary rounded-[20px] flex items-center justify-center overflow-hidden'>
                    <img src={singleProduct.images[currentImage]} alt="fix"
                        className=' object-cover rounded-[20px]' />
                </div>
                {/* arr small img */}
                <div className=' flex items-center gap-[25px]'>
                    {singleProduct.images.map((el, i) => {
                        return (
                            <img src={el}
                                alt='fix'
                                key={i}
                                className={`${currentImage === i ? 'border-orangePrimary border-2' : 'border border-greyPrimary'} w-[140px] h-[80px] object-cover border border-greyPrimary rounded-[20px] cursor-pointer p-[5px]`}
                                onClick={() => setCurrentImage(i)}
                            />)
                    })}
                </div>
            </div>
            {/* right side */}
            <div className=' w-[50%]'>
                {/* product info (name, price, rating, avail, stock) */}
                <div className=' flex flex-col items-start gap-[12px]'>
                    <h2 className=' text-bluePrimary font-medium text-[30px]'>{singleProduct.title}</h2>
                    <span className=' text-greyTerciary font-semibold text-[30px]'>${singleProduct.price}</span>
                    <span>
                        <Rating name="half-rating-read" defaultValue={singleProduct.rating} precision={0.5} readOnly />
                    </span>
                    <div className=' flex items-center gap-[20px]'>
                        <p className=' text-textGrey font-semibold text-[18px]'>Availability:</p>
                        {singleProduct.stock >= 1 ? <span className=' flex items-center gap-2 text-[18px] font-medium text-[#30BD57]'><FaCheck size={22} />in stock </span> : <span className=' flex items-center gap-2 text-[18px] font-medium text-red-600'><RxCross2 size={22} />
                            out of stock </span>}
                    </div>
                    <p>Hurry up! only <span className=' font-bold'>{singleProduct.stock}</span> product left in stock!</p>
                </div>
                {/* hr line */}
                <div className='h-[1px] bg-slate-300 mt-[30px] mb-[40px]'></div>
                {/* tot price, quantity, btns */}
                <div className=' flex flex-col gap-[30px]'>
                    <span>Total Price: </span>
                    <div className=' flex items-center gap-2'>Quantity:
                        <div className=' flex items-center'>
                            <button className='w-[30px] h-[30px] bg-slate-300 border border-greyPrimary hover:bg-slate-400' onClick={quantityHandlerDecrement}
                            >-</button>
                            <span className=' w-[40px] h-[30px] bg-slate-300 text-center'> {quantitys}</span>
                            <button className='w-[30px] h-[30px] bg-slate-300 border border-greyPrimary transition ease-in-out delay-150  hover:bg-slate-400' onClick={quantityHandlerIncrement}
                            >+</button>
                        </div>
                    </div>
                    <div className=' flex items-center gap-[20px]'>
                        <button className=' bg-orangePrimary text-whitePrimary rounded-[33px] py-[15px] px-[35px] font-semibold text-[18px] transition ease-in-out delay-150 hover:bg-bluePrimary' onClick={() => { handleProduct() }} >Add to cart</button>


                        {/* fixme: kdask */}
                        <button className=' bg-orangePrimary text-whitePrimary rounded-[33px] py-[15px] px-[35px] font-semibold text-[18px] transition ease-in-out delay-150 hover:bg-bluePrimary' onClick={() => { handleProduct() }}> <Link to={'/cartProductPage'}>Buy now</Link>
                        </button>


                        <button className=' rounded-full w-[50px] h-[50px] bg-slate-300 flex items-center justify-center transition ease-in-out delay-150 hover:bg-slate-400 hover:text-orangePrimary'><FaRegHeart size={20} /></button>
                    </div>
                </div>
                {/* hr line */}
                <div className='h-[1px] bg-slate-300 mt-[30px] mb-[50px]'></div>
            </div>
        </div>
    )
}

export default ProductDetailsPage