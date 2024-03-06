import React, { useEffect, useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";

import { Link, NavLink } from 'react-router-dom'
import ProductService from '../services/productService';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { getAllCategories } from '../store/categorySlice';


function HeaderNavbarMenu() {
    const [allCategories, setAllCategories] = useState([])
    const [categoriesToggler, setAllCategoriesToggler] = useState(false)
    const dispatch = useDispatch();





    const showAllCategory = () => {
        setAllCategoriesToggler(!categoriesToggler)
    }

    function showCategoryHandler(element) {
        dispatch(getAllCategories(element))
        setAllCategoriesToggler(!categoriesToggler)
        // console.log(element);
    }

    useEffect(() => {
        ProductService.getAllCategories()
            .then((res) => { setAllCategories(res.data) })
            .catch((err) => {
                toast.error('Nisu stigle categorije')
                console.log(err);
            })
    }, [])

    return (
        <div className=' bg-[#F4F4F4]'>
            <div className=' container mx-auto w-[80%] lg:h-[70px] flex flex-col lg:flex-row lg:justify-between'>
                <div className='flex flex-col-reverse items-center p-1 lg:p-0 lg:flex-row lg:justify-between gap-[10px] lg:gap-[100px]'>
                    <div className=' bg-orangePrimary px-[6px] py-[12px] lg:w-[250px]  lg:h-[100%] flex items-center justify-center lg:px-[26px] lg:py-[13px] text-whitePrimary font-medium text-[16px] gap-3 cursor-pointer' onClick={showAllCategory}>Browse categories <FaAngleDown size={20} />
                    </div>
                    <div className=' flex items-center justify-center'>
                        <ul className=' flex items-center justify-center gap-[10px] md:gap-[30px]'>
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/catalog'>Catalog</NavLink>
                            <NavLink to='/blog'>Blog</NavLink>
                            <NavLink to='/allproducts'>All products</NavLink>
                            <NavLink to='/aboutus'>About us</NavLink>
                        </ul>
                    </div>
                </div>
                <span className=' hidden text-center lg:flex items-center justify-center font-bold text-bluePrimary'>
                    30 Days Free Return
                </span>
            </div>
            {categoriesToggler ?
                <div className=' container mx-auto my-8 py-4 w-[60%] grid grid-rows-5 grid-flow-col gap-2 transition-all'>
                    {allCategories.map((cat, index) => {
                        return <Link to='/categoryPage' key={index} onClick={() => showCategoryHandler(cat)} className=' flex items-center justify-center px-2 py-4 font-semibold text-[18px] rounded-[20px] bg-bluePrimary text-whitePrimary hover:bg-orangePrimary hover:text-bluePrimary'>{cat}
                        </Link>
                    })}
                </div>
                :
                <></>}


        </div>
    )
}

export default HeaderNavbarMenu