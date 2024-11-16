import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <main className="bg-[url('/mobile.webp')]  md:bg-[url('/slider-2.jpg')]  lg:bg-[url('/slider.jpg')]  md:bg-opacity-100 h-[500px] sm:h-[550px] lg:h-[580px] bg-cover flex flex-col justify-center">
        <div className='relative py-16 pt-24 sm:pt-36 md:p-0 lg:p-5 md:ml-6 sm:py-28 px-5 opacity-100 flex flex-col items-center lg:items-start md:bg-red bg-white h-[100%] md:h-fit bg-opacity-80 lg:bg-opacity-0 gap-4 sm:gap-6 md:w-[60%] lg:w-[50%]'><h3 className='text-3xl sm:text-4xl lg:text-5xl px-3 align-middle text-red-600 font-semibold font-serif text-center md:text-start md:leading-snug lg:leading-normal'>Books That Inspire, Challenge, and Entertain</h3>
        <p className='text-md sm:text-xl font-serif text-center md:text-start xl:pr-5'>Books have the power to transform, to educate, and to entertain. Our collection is your gateway to endless opportunities for growth, learning, and adventure.  Begin your next adventure right here, right now.</p>
        <Button className='bg-red-600 text-white text-xl rounded-none font-serif p-5'>Explore Books </Button></div>
    </main>
  )
}

export default Hero