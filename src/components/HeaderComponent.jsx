import React from 'react'
import logo from '../assets/logoElecton.png'
import { FaRegUser, FaHeart, FaShoppingCart } from "react-icons/fa";

import { Link } from 'react-router-dom'
import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import { useSelector } from 'react-redux';
function HeaderComponent() {
    const { totalProducts } = useSelector(state => state.cartStore);

    return (
        <div className='  bg-bluePrimary '>
            <div className=' container mx-auto lg:h-[100px] flex flex-col items-center justify-between p-3 gap-4 lg:gap-[30px]  lg:p-0 lg:flex-row'>

                {/* Left side */}
                <div className='flex flex-col md:flex-row items-center gap-[14px] md:gap-[200px] lg:gap-[200px] '>

                    <img src={logo} alt="logo.img" />

                    <div className=' flex bg-whitePrimary rounded-xl lg:rounded-[20px]'>
                        <input type="text"
                            placeholder='Search any things'
                            className=' rounded-xl lg:rounded-[20px] lg:px-[25px] lg:py-[18px] outline-none' />

                        <button className=' lg:px-[40px] lg:py-[18px] px-[20px] py-[9px] bg-orangePrimary rounded-xl lg:rounded-[20px] text-whitePrimary font-semibold text-[12px] lg:text-[14px]'>Search</button>
                    </div>
                </div>

                {/* Right side */}
                <div className='flex items-center gap-4 md:gap-[30px] text-whitePrimary lg:ml-5'>
                    <div className='flex items-center justify-center gap-3 '>
                        <FaRegUser size={20} />
                        <SignedOut>
                            <SignInButton />
                        </SignedOut>
                        <SignedIn>
                            <UserButton afterSignOutUrl='/'
                                appearance={{
                                    elements: {
                                        avatarBox: 'w-[40px] h-[40px]'
                                    }
                                }} />
                        </SignedIn>
                    </div>
                    <div className='flex items-center gap-3 '>
                        <div className='flex items-center gap-[5px] '>
                            <FaHeart size={20} />
                            <span className=' bg-orangePrimary h-[17px] w-[17px] flex items-center justify-center rounded-full text-[10px] font-normal'>0</span>
                        </div>
                        Favorite

                    </div>
                    <Link to={'/cartProductPage'}>
                        <div className='flex gap-3 '>
                            <div className='flex items-center gap-[5px] '>
                                <FaShoppingCart size={20} />
                                <span className=' bg-orangePrimary h-[17px] w-[17px] flex items-center justify-center rounded-full text-[10px] font-normal'>{totalProducts}</span>
                            </div>
                            Cart
                        </div>
                    </Link>



                </div>
            </div>

        </div>
    )
}

export default HeaderComponent