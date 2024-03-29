import { Rating } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveInCartHandler } from '../store/cartSlice';
import { toast } from 'react-toastify';

function ProductCardComponent({ item }) {
    const dispatch = useDispatch()
    function handleProduct(item) {
        dispatch(saveInCartHandler(item))
        toast.success('Added to cart!')
    }
    // console.log(item);
    return (
        <div className='w-[300px] h-[340px] shadow hover:shadow-lg rounded-[20px] flex flex-col '>
            <div className=' overflow-hidden rounded-t-[20px]'>
                <img className=' w-full h-[150px] object-cover' src={item.thumbnail} alt={item.title} />
            </div>
            <div className='px-[10px] py-[20px] flex flex-col gap-[50px]'>
                <div className=' flex flex-col items-start gap-3'>
                    <h4>{item.title}</h4>
                    <span className=' text-red-700 font-bold text-xl'>${item.price}</span>
                    <Rating name="half-rating-read" defaultValue={item.rating} precision={0.5} readOnly />
                </div>

                <div className=' flex items-center justify-between'>
                    <Link to={`/productDetails/${item.id}`} className='border-2 border-greyPrimary px-3 rounded-xl '>Details</Link>
                    <Link to={'/cartProductPage'}>
                        <button className=' border-2 border-orangePrimary bg-orangePrimary px-3 rounded-xl text-whitePrimary font-bold' onClick={() => { handleProduct(item) }}>Buy now</button>
                    </Link>

                    <button className='border-2 border-bluePrimary px-3 rounded-xl' onClick={() => { handleProduct(item) }}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCardComponent