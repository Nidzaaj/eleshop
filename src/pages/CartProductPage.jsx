import React from 'react'
import { useSelector } from 'react-redux'

function CartProductPage() {

    const { cart } = useSelector(state => state.cartStore)

    console.log(cart);

    return (
        <div className=' container mx-auto mt-[60px] flex flex-row justify-center gap-5'>
            <div className=' flex flex-col w-[70%] gap-3'>
                {/* left side/ products */}
                <div className=' grid grid-cols-6 gap-2  h-[40px] bg-blueSecondary text-textBlue font-semibold'>
                    <div className=' border border-red-500 flex items-center justify-center'>Product</div>
                    <div className=' border border-red-500 flex items-center justify-center'></div>
                    <div className=' border border-red-500 flex items-center justify-center'>Price</div>
                    <div className=' border border-red-500 flex items-center justify-center'>Quantity</div>
                    <div className=' border border-red-500 flex items-center justify-center'>Subtotal</div>
                    <div className=' border border-red-500 flex items-center justify-center'></div>
                </div>

                {cart.map((item, index) => {
                    return (
                        <div key={index} className=' grid grid-cols-6 gap-2  bg-gray-200 text-textBlue font-semibold'>
                            <div className=' border border-red-500 flex items-center justify-center'><img src={item.thumbnail} alt="" /></div>
                            <div className=' border border-red-500 flex items-center justify-center'>{item.title}</div>
                            <div className=' border border-red-500 flex items-center justify-center'>${item.price}</div>
                            <div className=' border border-red-500 flex items-center justify-center'>{item.count}</div>
                            <div className=' border border-red-500 flex items-center justify-center'>${item.price * item.count}</div>
                            <div className=' border border-red-500 flex items-center justify-center'></div>
                        </div>)
                })}
            </div>
            {/* right side /cart total */}
            <div className=' w-[30%] h-[500px] border border-green-800'>

            </div>

        </div>
    )
}

export default CartProductPage