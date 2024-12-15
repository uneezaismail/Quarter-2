import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import Link from 'next/link'
import React from 'react'

const Header = async () => {
  const { userId } = await auth();
  return (
    <header className='w-full flex items-center justify-between px-4 lg:px-16 p-4'>
        <div><h2 className='text-emerald-950 text-2xl font-bold'>ClerkGuide</h2></div>

        <nav className="flex justify-center items-center space-x-4 md:space-x-8">
                {!userId && (
          <>
            <Link href="/sign-in" className="text-white font-bold text-lg md:text-2xl hover:text-gray-700">
              Sign In
            </Link>
            <Link href="/sign-up" className="px-3 py-1 md:px-4 md:py-2 text-lg md:text-2xl font-medium bg-emerald-950 text-white  rounded-xl hover:text-white hover:bg-green-950">
              Sign Up
            </Link>
          </>
        )}
         {userId && (
          <>
            <div className="ml-4">
              <UserButton afterSignOutUrl="/"/>
            </div>
          </>
        )}
        </nav>
    </header>
  )
}

export default Header