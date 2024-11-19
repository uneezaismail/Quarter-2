import React from 'react'
import { IoMdSearch } from "react-icons/io";
import { FaBook } from "react-icons/fa6";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <header className='bg-white w-full border-b-2 border-b-gray-200'>
        <div className='bg-black text-white p-2 flex items-center justify-center'>Explore limitless stories, learn with every page <span className='hidden sm:flex'> - your online library awaits!</span></div>
        <div className='flex flex-col md:flex-row justify-between p-3 px-5  lg:p-4 lg:px-10 xl:px-20'>
            <div className='flex items-center text-black' ><span className='lg:text-5xl text-3xl mr-2 text-red-600'><FaBook/></span>
            <h1 className=' text-2xl sm:text-3xl lg:text-4xl'>Readify</h1></div>
            <div className='flex items-center w-full md:w-[70%] xl:w-[50%] my-4 text-2xl h-10'><Input className='h-full rounded-sm border py-2 px-3 rounded-tr-none rounded-br-none border-gray-400 placeholder-gray-100 bg-white text-sm md:text-md lg:text-lg'  type="text" placeholder='Search by title or author '/><Button className='bg-red-600  text-[20px] h-full w-10 lg:w-14 text-white rounded-sm rounded-tl-none rounded-bl-none'>< IoMdSearch size={20}/></Button></div>
            </div>
    </header>
  )
}

export default Header
