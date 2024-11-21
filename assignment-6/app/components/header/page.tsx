'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'

const Header = () => {
const [isDropDownOpen, setIsDropdownOpen] = useState(false)


const ToggleDropdown = (()=>{
  setIsDropdownOpen(!isDropDownOpen)
});

const closeDropdown = () => {
  setIsDropdownOpen(false);
};

const navLinks = ["Home","About", "Projects", "Skills", "contact"]

  return (
    <header className='relative bg-black w-full flex py-2 px-3 lg:p-3 lg:px-16 md:p-5 md:px-6 text-white justify-between items-center'>
        <div className='flex items-center text-2xl md:text-3xl lg:text-4xl font-serif'><span className='md:hidden mr-2 '>
          <FaBars onClick={ToggleDropdown}/></span> 
          <span className='font-bold font-cookie mr-2 text-4xl md:text-5xl lg:text-7xl text-skyBlue'>Uneeza</span> Ismail</div>
    <ul className='text-xl xl:text-2xl md:text-md hidden md:w-[50%] xl:w-[40%]  md:flex justify-between font-semibold'>
        <li className='hover:text-skyBlue hover:border-b-2 hover:border-skyBlue'>Home</li>
    <li className='hover:text-skyBlue hover:border-b-2 hover:border-skyBlue'>About</li>
    <li className='hover:text-skyBlue hover:border-b-2 hover:border-skyBlue'>Portfolio</li>
    <li className='hover:text-skyBlue hover:border-b-2 hover:border-skyBlue'>Skills</li>
    <li className='hover:text-skyBlue hover:border-b-2 hover:border-skyBlue'>Contact</li>
    </ul>
    <Button className=' font-semibold bg-skyBlue  px-2 lg:px-4 lg:py-6 lg:text-xl md:text-md rounded-md shadow-md border-2 shadow-sky-300 hover:bg-hoverSkyBlue hover:text-white'>View Resume</Button>

    {isDropDownOpen && (
      <div className="absolute top-full left-0 w-full bg-black shadow-md z-10 md:hidden">
      <ul className="flex flex-col items-center space-y-4 py-4">
      <li className=" hover:text-skyBlue hover:border-b-2 hover:border-skyBlue text-lg text-white"><Link href="/" onClick={closeDropdown}>Home</Link></li>
            <li className=" hover:text-skyBlue hover:border-b-2 hover:border-skyBlue text-lg text-white"><Link href="/components/about" onClick={closeDropdown}>About me</Link></li>
            <li className=" hover:text-skyBlue hover:border-b-2 hover:border-skyBlue text-lg text-white"><Link href="/components/skills" onClick={closeDropdown}>Skills</Link></li>
            <li className=" hover:text-skyBlue hover:border-b-2 hover:border-skyBlue text-lg text-white"><Link href="/components/portfolio" onClick={closeDropdown}>Portfolio</Link></li>
      </ul>
      </div>
      )
    }
    </header>
  )
}

export default Header