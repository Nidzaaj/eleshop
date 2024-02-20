import React, { useEffect, useState } from 'react'
import canon from '../assets/canon89.png'
import speaker from '../assets/2 1.png'
import laptop from '../assets/5 1.png'
import camera from '../assets/8 1.png'

// react icons
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useSelector } from 'react-redux'


function HeroSection() {

    const [selectedCircle, setSelectedCircle] = useState(1);

    //producti iz reduxa
    const { products } = useSelector((state) => state.productsStore)

    // func za hero slider
    const handleCircleIndex = (circleIndex) => { setSelectedCircle(circleIndex) };

    useEffect(() => {
        const interval = setInterval(() => {
            // Mijenjamo selectedDiv na sljedeći div
            setSelectedCircle((prevCircle) => (prevCircle % 3) + 1);
        }, 5000); // Svakih 3 sekunde

        return () => {
            clearInterval(interval); // Čišćenje intervala kada se komponenta demontira
        };
    }, []);

    console.log(products);

    return (
        <div className=' container mx-auto w-[70%]'>
            <div className=' flex items-center justify-between '>
                {/* left side */}
                <div className=' flex flex-col gap-3'>
                    <h1 className=' text-textBlue text-[43px] font-bold w-[180px] h-[130px] '>
                        {selectedCircle === 1 ?
                            products[4].title :
                            selectedCircle === 2 ?
                                products[6].title :
                                products[1].title}
                    </h1>
                    <div className='flex flex-col items-center'>
                        <div className='flex items-center gap-[21px] w-[310px] h-[60px] '>
                            <button className=' w-[144px] h-[61px] px-[18px] py-[28px] bg-orangePrimary flex items-center justify-center rounded-[20px] text-whitePrimary text-[16px] font-semibold'>Shop now</button>
                            <button className=' w-[144px] h-[61px] px-[18px] py-[28px] flex items-center justify-center rounded-[20px] text-textBlue text-[16px] font-semibold border-bluePrimary border-[1px]'>View more</button>
                        </div>
                        <div className='w-[64px] h-[16px] flex items-center gap-[8px] mt-[50px]'>
                            <div className={selectedCircle === 1 ? (' bg-orangePrimary w-[16px] h-[16px] rounded-full border border-orangePrimary cursor-pointer') : (' w-[16px] h-[16px] rounded-full border border-orangePrimary cursor-pointer')}
                                onClick={() => handleCircleIndex(1)}> </div>
                            <div className={selectedCircle === 2 ? (' bg-orangePrimary w-[16px] h-[16px] rounded-full border border-orangePrimary cursor-pointer') : (' w-[16px] h-[16px] rounded-full border border-orangePrimary cursor-pointer')} onClick={() => handleCircleIndex(2)}> </div>
                            <div className={selectedCircle === 3 ? (' bg-orangePrimary w-[16px] h-[16px] rounded-full border border-orangePrimary cursor-pointer') : (' w-[16px] h-[16px] rounded-full border border-orangePrimary cursor-pointer')} onClick={() => handleCircleIndex(3)}> </div>
                        </div>
                    </div>


                </div>

                {/* right side */}
                <div className=' mt-[37px] relative'>
                    <div className='w-[360px] h-[360px]'>
                        {selectedCircle === 1 ?
                            <img className=' object-cover' src={products[4].thumbnail} alt={products[4].title} /> :
                            selectedCircle === 2 ?
                                <img className=' object-cover' src={products[6].thumbnail} alt={products[6].title} /> :
                                <img className=' object-cover' src={products[1].thumbnail} alt={products[1].title} />}

                    </div>
                    <div className=' absolute right-[-10%] top-[50%] rounded-full h-[120px] w-[120px] bg-orangePrimary flex items-center justify-center'>
                        <h3 className=' text-[22px] font-semibold text-whitePrimary text-wrap'>

                            only <br /> ${selectedCircle === 1 ?
                                products[4].price :
                                selectedCircle === 2 ?
                                    products[6].price :
                                    products[1].price}</h3>
                    </div>
                </div>
            </div>

            {/* hero footer slider */}
            <div className=' flex items-center justify-between gap-[40px] mt-[52px] relative'>
                <div className=' flex items-center justify-around gap-[43px] rounded-[20px] border border-greyPrimary w-[400px] h-[140px]'>
                    <img src={speaker} alt="" />
                    <div>
                        <h4>Speaker</h4>
                        <p>(6 items)</p>
                    </div>
                </div>
                <div className=' flex items-center justify-around gap-[43px] rounded-[20px] border border-greyPrimary w-[400px] h-[140px]'>
                    <img src={laptop} alt="" />
                    <div>
                        <h4>Lorem, ipsum.</h4>
                        <p>Lorem, ipsum.</p>
                    </div>
                </div>
                <div className=' flex items-center justify-around gap-[43px] rounded-[20px] border border-greyPrimary w-[400px] h-[140px]'>
                    <img src={camera} alt="" />
                    <div>
                        <h4>Lorem, ipsum.</h4>
                        <p>Lorem, ipsum.</p>
                    </div>
                </div>

                <div className=' absolute rounded-full bg-gray-200 w-[37px] h-[37px] flex items-center justify-center top-[40%] left-[-3%] cursor-pointer hover:bg-slate-300'><IoIosArrowBack />
                </div>
                <div className=' absolute rounded-full bg-gray-200 w-[37px] h-[37px] flex items-center justify-center top-[40%] right-[-3%] cursor-pointer hover:bg-slate-300'><IoIosArrowForward />
                </div>
            </div>
        </div>
    )
}

export default HeroSection