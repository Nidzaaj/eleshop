import React, { useEffect, useState } from 'react'
// import canon from '../assets/canon89.png'
import speaker from '../assets/2 1.png'
import laptop from '../assets/5 1.png'
import camera from '../assets/8 1.png'
// react slick
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// react icons
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { saveInCartHandler } from '../store/cartSlice';
import { toast } from 'react-toastify';


function HeroSection() {

    const [selectedCircle, setSelectedCircle] = useState(1);
    const [nextSlide, setNextSlide] = useState(1)
    const [currentSlide, setCurrentSlide] = useState(0);
    const dispatch = useDispatch()
    //producti iz reduxa
    const { products } = useSelector((state) => state.productsStore)

    // func za hero slider
    const handleCircleIndex = (circleIndex) => { setSelectedCircle(circleIndex) };
    const handleSlideChange = () => { setNextSlide(nextSlide += 1) }

    // new arr with low price
    let discountProducts = products.filter(products => products.discountPercentage > 17)
    // new arr with high rate
    let topRateProducts = products.filter(products => products.rating > 4.5)
    // console.log(topRateProducts);

    function handleProduct() {
        dispatch(saveInCartHandler((selectedCircle === 1 ?
            discountProducts[0] :
            selectedCircle === 2 ?
                discountProducts[1] :
                discountProducts[2])));
        toast.success('Added to cart!')
    }

    function IoIosArrowBack(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "gray" }}
                onClick={onClick}
            />
        );
    }

    function IoIosArrowForward(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "gray" }}
                onClick={onClick}
            />
        );
    }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <IoIosArrowForward />,
        prevArrow: <IoIosArrowBack />
        // beforeChange: (current, next) => setCurrentSlide(next)
    };

    useEffect(() => {
        const interval = setInterval(() => {
            // Menjamo selectedDiv na sljedeći div
            setSelectedCircle((prevCircle) => (prevCircle % 3) + 1);
        }, 5000);

        return () => {
            clearInterval(interval); // Čišćenje intervala kada se komponenta demontira
        };
    }, []);

    // console.log(products);

    return (products.length > 0 &&
        <div className=' container mx-auto w-[70%]'>

            <div className=' flex items-center justify-between '>
                {/* left side */}
                <div className=' flex flex-col gap-3'>
                    <h1 className=' text-textBlue text-[43px] font-bold w-[280px] h-[230px] flex items-center'>
                        {selectedCircle === 1 ?
                            discountProducts[0].title :
                            selectedCircle === 2 ?
                                discountProducts[1].title :
                                discountProducts[2].title}
                    </h1>
                    <div className='flex flex-col items-center'>
                        <div className='flex items-center gap-[21px] w-[310px] h-[60px] '>
                            <Link to={'/cartProductPage'}><button className=' w-[144px] h-[61px] px-[18px] py-[28px] bg-orangePrimary flex items-center justify-center rounded-[20px] text-whitePrimary text-[16px] font-semibold' onClick={() => { handleProduct() }}> Buy now</button></Link>
                            <Link to={`/productDetails/${selectedCircle === 1 ?
                                discountProducts[0].id :
                                selectedCircle === 2 ?
                                    discountProducts[1].id :
                                    discountProducts[2].id}`}><button className=' w-[144px] h-[61px] px-[18px] py-[28px] flex items-center justify-center rounded-[20px] text-textBlue text-[16px] font-semibold border-bluePrimary border-[1px]'> View more</button></Link>
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
                            <img className=' object-cover' src={discountProducts[0].thumbnail} alt={discountProducts[0].title} /> :
                            selectedCircle === 2 ?
                                <img className=' object-cover' src={discountProducts[1].thumbnail} alt={discountProducts[1].title} /> :
                                <img className=' object-cover' src={discountProducts[2].thumbnail} alt={discountProducts[2].title} />}

                    </div>
                    <div className=' absolute right-[-10%] top-[50%] rounded-full h-[120px] w-[120px] bg-orangePrimary flex items-center justify-center'>
                        <h3 className=' text-[22px] font-semibold text-whitePrimary text-wrap'>

                            only <br /> ${selectedCircle === 1 ?
                                discountProducts[0].price :
                                selectedCircle === 2 ?
                                    discountProducts[1].price :
                                    discountProducts[2].price}</h3>
                    </div>
                </div>
            </div>

            {/* hero footer slider */}
            {/* <div className=' flex items-center justify-between gap-[40px] mt-[52px] relative'>
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

                <div className=' absolute rounded-full bg-gray-200 w-[37px] h-[37px] flex items-center justify-center top-[40%] left-[-3%] cursor-pointer hover:bg-slate-300' ><IoIosArrowBack />
                </div>
                <div className=' absolute rounded-full bg-gray-200 w-[37px] h-[37px] flex items-center justify-center top-[40%] right-[-3%] cursor-pointer hover:bg-slate-300'><IoIosArrowForward />
                </div>
            </div> */}
            <div>
                <Slider {...settings} className='flex items-center justify-center p-4 mt-[52px]'>
                    {topRateProducts.map((product, index) => (
                        <div key={index} >
                            {/* Renderovanje proizvoda */}
                            <Link to={`/productDetails/${product.id}`}>
                                <div className=' flex items-center justify-around gap-[43px] rounded-[20px] border border-greyPrimary w-[400px] h-[140px]'>
                                    <img src={product.thumbnail} className=' w-[160px] h-[100px]' alt="" />
                                    <div>
                                        <h4>{product.category}</h4>
                                        <p>{product.title}</p>
                                    </div>

                                </div>
                            </Link>
                        </div>
                    ))}
                </Slider>

            </div>
        </div>
    )
}

export default HeroSection