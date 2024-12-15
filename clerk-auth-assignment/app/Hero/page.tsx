"use client"
import React from 'react';


const Hero = () => {
   
  return (
    <section className="min-h-screen w-full bg-emerald-950 text-white py-10 px-6 flex flex-col items-center">
    {/* Title */}
    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
      Welcome to Clerk Setup Guide
    </h1>
    {/* Subtitle */}
    <p className="text-lg md:text-xl text-gray-200 mb-12 text-center">
      Follow these step-by-step instructions to integrate Clerk authentication into your application.
    </p>

    {/* Instruction Section */}
    <div className="w-full max-w-4xl space-y-8">
      {/* Step 1 */}
      <div className="p-6 bg-white text-black rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2">1. Install Clerk</h2>
        <p className="text-gray-600">
          Run the following command in your terminal to install the Clerk package:
        </p>
        <code className="block bg-gray-900 text-gray-200 rounded-md p-4 mt-4">
          npm install @clerk/nextjs
        </code>
      </div>

      {/* Step 2 */}
      <div className="p-6 bg-white text-black rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2">2. Configure Environment Variables</h2>
        <p className="text-gray-600">
          Add your Clerk API keys to a `.env.local` file:
        </p>
        <code className="block bg-gray-900  text-white rounded-md p-4 mt-4 break-words">
          NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your-publishable-key<br />
          CLERK_SECRET_KEY=your-secret-key
        </code>
      </div>

      {/* Step 3 */}
      <div className="p-6 bg-white text-black rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2">3. Add Clerk to your App</h2>
        <p className="text-gray-600">
          Wrap your app in the Clerk provider by editing your `app/layout.tsx`:
        </p>
        <code className="block bg-gray-900 text-gray-200 rounded-md p-4 mt-4">
          {`import { ClerkProvider } from "@clerk/nextjs";\n\nexport default function RootLayout({ children }) {\n  return (\n    <ClerkProvider>\n      {children}\n    </ClerkProvider>\n  );\n}`}
        </code>
      </div>

      {/* Step 4 */}
      <div className="p-6 bg-white text-black rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2">4. Add Sign-In/Sign-Up Pages</h2>
        <p className="text-gray-600">
          Create custom sign-in and sign-up pages, or use Clerk&apos;s pre-built components:
        </p>
        <code className="block bg-gray-900 text-gray-200 rounded-md p-4 mt-4">
          {`import { SignIn } from "@clerk/nextjs";\n\nexport default function SignInPage() {\n  return <SignIn />;\n}`}
        </code>
      </div>
    </div>

    {/* Footer */}
    <footer className="mt-16 text-center">
      <p className="text-gray-400">Need help? Visit the <a href="https://clerk.dev" className="underline text-gray-200">Clerk Documentation</a>.</p>
    </footer>
  </section>
  )
}

export default Hero
