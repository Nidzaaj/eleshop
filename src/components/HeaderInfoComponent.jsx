import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { CiDeliveryTruck } from "react-icons/ci";


function HeaderInfoComponent() {
    return (
        <div className=' container mx-auto w-[80%] h-[50px] p-1 sm:p-0 sm:h-[70px] flex flex-col items-center justify-between sm:flex-row  text-xs sm:text-sm'>

            <p>Need help? Call us: (+98) 0234 456 789</p>

            <div className='flex gap-5 items-center'>
                <div className='flex items-center justify-center gap-1'><IoLocationOutline size={18} />
                    Our store</div>
                <div className='flex items-center justify-center gap-1'><CiDeliveryTruck size={18} />
                    Track your order</div>
            </div>
        </div>
    )
}

export default HeaderInfoComponent