import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <main className='flex flex-col md:flex-row items-center justify-evenly md:justify-between bg-[linear-gradient(-135deg,_#1A1A1A,_#0DCAF0)] h-[600px] px-4 lg:px-20'>
         <div className='md:hidden px-4 flex items-center mr-7 '><Image src={"/download.png"} width={400} height={400} className="object-cover" alt='Hero-image'/></div>
         <div className='sm:w-[90%] lg:w-[50%] mx-auto'>
        <div className='text-5xl lg:text-7xl text-white font-cookie'><span className='text-3xl font-cookie'>Hi,</span><br />I am <span className='bg-gradient-to-tr from-[#1A1A1A] to-[#0f373e] text-transparent  bg-clip-text font-bold font-serif text-4xl lg:text-6xl'>Frontend Developer</span> and <span className='bg-gradient-to-tr from-[#1A1A1A] to-[#0f373e] text-transparent  bg-clip-text font-bold font-serif text-4xl lg:text-6xl'>Ui/Ux Designer</span>.</div>
        <div className='xl:w-[60%] flex justify-between p-6 px-12'>   <Button className=' font-semibold bg-white text-blue-950  px-3 lg:px-4 lg:py-6 lg:text-xl md:text-xl  shadow-md shadow-sky-200 hover:bg-black  hover:text-white rounded-full'>View Projects</Button>   <Button className=' font-semibold bg-transparent border-2 border-white  px-4 lg:px-4 lg:py-6 lg:text-xl md:text-md rounded-full hover:shadow-md shadow-sky-300 hover:bg-hoverSkyBlue '>Connect</Button></div>
        </div>
        <div className='hidden md:block'><Image src={"/download.png"} width={500} height={500} alt='Hero-image'/></div>
    </main>
  )
}

export default Hero