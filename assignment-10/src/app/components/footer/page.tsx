import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='bg-black bg-opacity-80 text-white flex flex-col p-4 gap-4 lg:p-8'>
        <div className='flex flex-col sm:flex-row  sm:justify-between sm:w-[95%] md:w-[90%] xl:w-[80%] sm:mx-auto '><h2 className='text-3xl text-red-600 font-semibold border-b-2 w-fit border-red-600 mb-6 h-fit'>Readify</h2>
        <ul className=' md:text-xl'>
        <span className='font-semibold text-xl md:text-2xl'>Help</span>
            <li>Search</li>
            <li>Information</li>
            <li>Privacy policy</li>
        </ul>
        <br />
        <ul className=' md:text-xl'>
        <span className='font-semibold text-xl md:text-2xl'>Library</span>
            <li>Geners</li>
            <li>Languages</li>
            <li>Authors</li>
        </ul></div>
        <hr />
        <div className='flex items-center justify-between sm:w-[95%] md:w-[90%] sm:mx-auto md:text-xl xl:w-[80%]'><p>© 2024 Readify. All Rights Reserved.</p><span className='flex gap-2 text-xl md:text-2xl'><FaInstagram/><FaGithub/><FaLinkedin/></span>
        </div>
    </footer>
  )
}

export default Footer