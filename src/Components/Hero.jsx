import { React, useState } from 'react'
import HeroImg from '../assets/Hero.jpg'


function Hero() {
    return (
            <div className='relative h-[25rem] md:h-[32rem]'>
            <img src={HeroImg} className='absolute h-[25rem] md:h-[32rem] object-cover w-full' />
            <div className='absolute flex flex-col justify-center items-center  h-full w-full '>
            <h3 className=' text-3xl lg:text-5xl font-normal'>Victoria is more than</h3>
                <p className=' text-lg lg:text-lg font-normal '> just a place to get an education</p>

                <button className='bg-[#3C62EB] hover:bg-[#000000] hover:text-white px-4 py-2 rounded-md mt-2'>Explore now</button>
            </div>
           </div>
    )

}

export default Hero
