"use client"

import Image from 'next/image'
import React from 'react'
import SignInComponent from './login/signincomponent'

const Signin = () => {  
  return (
    <div className="sm:grid sm:grid-cols-2 h-screen w-full ">
      
      <div className="relative h-full hidden sm:block">
        <Image
          src="/image 2.png"
          alt="login"
          fill
          objectFit="cover"
          className="w-full h-full"
        />

        <div className='absolute w-full top-16 items-center text-center text-white text-4xl font-bold'>TheHikingLife</div>
      </div>

     
      <div className="relative inset-0 bg-image h-screen  flex flex-col justify-center items-center p-8 space-y-10 bg-white">
        <div className="content flex flex-col items-center text-center gap-y-2 ">
          <h1 className="text-6xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#772c4a] md:text-[#A94B70]">Welcome</h1>
          <span className="text-lg md:text-xl text-gray-700">Login with your email</span>
        </div>

     
        <form className="lg:space-y-11 space-y-8 w-full max-w-lg">
          <input
            type="email"
            placeholder="Email"
            className="font-serif w-full px-5 py-3 sm:p-3 lg:py-3 md:p-3 sm:py-2 border-b-2 hover:border-2 focus:ring-[#A94B70] focus:border-b-0 border-b-[#883657] md:border-b-[#A94B70] rounded-full focus:outline-none focus:ring-2 border-t-0"
          />
          <input
            type="password"
            name="pass"
            placeholder="Password"
            id="pass"
            className="font-serif w-full px-5 py-3 sm:p-3 lg:py-3 md:p-3 sm:py-2  border-b-2 border-b-[#883657] md:border-b-[#A94B70] rounded-full focus:outline-none focus:ring-[#A94B70] focus:border-b-0 focus:ring-2 border-t-0"
          />
          <button
            type="submit"
            className="text-xl w-full px-5 py-2 sm:p-3 lg:py-3 md:p-3 sm:py-2 bg-[#702b47] md:bg-[#A94B70] text-white rounded-full hover:bg-[#883657] transition"
          >
            Sign In
          </button>
        </form>

        <div className=" flex items-center max-w-lg w-full gap-2">
  <div className="flex-grow h-0.5 bg-[#702b47] md:bg-[#A94B70]"></div>
  <div className="text-[#702b47] md:text-[#A94B70] font-medium px-2">OR</div>
  <div className="flex-grow h-0.5 bg-[#702b47] md:bg-[#A94B70]"></div>
</div>


        <SignInComponent/>


        {/* Sign-up Link */}
        <div className="text-center sm:text-gray-600">
          Don&apos;t have an account?{" "}
          <span className="text-[#702b47] md:text-[#A94B70] font-serif font-bold cursor-pointer">Sign Up</span>
        </div>
      </div>
    </div>
  )
}

export default Signin;
