import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <div className='w-full text-black flex flex-col md:flex-row justify-center pt-32  gap-10 md:gap-5   items-center px-4 bg-[#F2F0F1]'>

            <div className='flex flex-col md:items-start items-center justify-center space-y-5'>
                <h1 className='md:text-8xl text-[43px] leading-10 text-center md:text-start md:leading-19 md:font-bold font-extrabold font-poppins '>FIND CLOTHES <br /> THAT MATHCES <br /> YOUR STYLE</h1>
                <div className='md:ml-7 space-y-2.5 flex flex-col md:items-start items-center'>
                    <p className='md:text-xs text-gray-500  md:w-96 text-xs md:text-start text-center'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individually and cater to your sense of style.</p>

                    <button className='bg-black md:w-[150px] text-white font-bold rounded-lg p-2'><Link to={'/products'}>Shop now</Link></button>
                </div>
            </div>
            <div>
                <img src={'/banner.png'} alt="banner" className='md:h-full h-[307px] ' />
            </div>
        </div>
    )
}

export default Banner