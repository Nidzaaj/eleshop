import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RxCross2 } from "react-icons/rx";
import { removeProductHandler, setPriceHandler } from '../store/cartSlice';

function CartProductPage() {

    const { cart, totalPrice } = useSelector(state => state.cartStore)
    const dispatch = useDispatch();

    console.log(cart);

    return (
        <div className=' container mx-auto mt-[60px] flex flex-row justify-center gap-5'>
            <div className=' flex flex-col w-[70%] gap-3'>
                {/* left side/ products */}
                <div className=' grid grid-cols-6 gap-2  h-[40px] bg-blueSecondary text-textBlue font-semibold'>
                    <div className=' flex items-center justify-center'>Product</div>
                    <div className=' flex items-center justify-center'></div>
                    <div className=' flex items-center justify-center'>Price</div>
                    <div className=' flex items-center justify-center'>Quantity</div>
                    <div className=' flex items-center justify-center'>Subtotal</div>
                    <div className=' flex items-center justify-center'></div>
                </div>

                {cart.map((item, index) => {
                    return (
                        <div key={index} className=' grid grid-cols-6 gap-2 py-[10px] bg-gray-100 text-textBlue font-semibold'>

                            <div className=' flex items-center justify-center'><img src={item.thumbnail} alt={item.title} className='rounded-[8px] h-[80px] w-[100px]' /></div>
                            <div className=' flex items-center justify-center'>{item.title}</div>
                            <div className=' flex items-center justify-center'>${item.price}</div>
                            <div className=' flex items-center justify-center'>
                                <div className=' flex items-center justify-center'>
                                    <button className='w-[30px] h-[30px] bg-slate-300 border border-greyPrimary hover:bg-slate-400' onClick={() => dispatch(setPriceHandler({ increment: -1, index }))}
                                    >-</button>
                                    <span className=' w-[40px] h-[30px] bg-slate-300 text-center'>{item.count}</span>
                                    <button className='w-[30px] h-[30px] bg-slate-300 border border-greyPrimary transition ease-in-out delay-150  hover:bg-slate-400' onClick={() => dispatch(setPriceHandler({ increment: 1, index }))}
                                    >+</button>
                                </div>
                            </div>
                            <div className=' flex items-center justify-center'>${item.price * item.count}</div>
                            <div className=' flex items-center justify-center'><button className=' rounded-full border border-red-600 p-[1px] text-red-600 ' onClick={() => dispatch(removeProductHandler(index))} ><RxCross2 size={18} /></button></div>
                        </div>)
                })}
            </div>
            {/* right side /cart total */}
            <div className=' w-[30%] h-[500px] border border-green-800'>
                <div className=' bg-blueSecondary h-[55px] flex items-center justify-center'>Cart total</div>
                <div className=' p-[20px] flex flex-col justify-center gap-8'>
                    <div>
                        <div className=' flex items-center justify-between'> <p>Subtotal</p> <span>{totalPrice}</span></div>
                        <div className=' h-[1px] bg-slate-300'></div>
                    </div>
                    <div className=' flex items-center'>
                        <input type="text" placeholder='Enter coupon code' />
                        <button>Apply</button>
                    </div>
                    <div className=' h-[1px] bg-slate-300'></div>
                    <div>Total amount</div>
                    <button className=' bg-orangePrimary px-[12px] py-[24px] rounded-[20px] text-white font-semibold text-[18px]'>Proceseed to checkout</button>
                </div>
            </div>

        </div>
    )
}

export default CartProductPage