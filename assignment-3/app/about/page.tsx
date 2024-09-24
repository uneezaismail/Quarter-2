"use client";
import React from "react";
import Navbar from "../navbar/page";
import Footer from "../footer/page";
import { useRouter } from "next/navigation";

export default function About() {
  const route = useRouter();
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-10">
        <h1 className="text-5xl font-bold mb-4">About This Project</h1>
        <p className="text-2xl text-gray-700">
          This website was crafted to showcase the powerful features of Next.js,
          a React-based framework for building fast and scalable web
          applications.
          <br />
          <br />
          The core of this site revolves around the <b>
            "Link component"
          </b> and <b>"useRouter hook".</b> These tools help manage client-side
          routing, allowing smooth navigation between pages without full page
          reloads, providing a more dynamic user experience.
          <br />
          <br />
          We've also made extensive use of <b>"props"</b> to pass data between
          components. This not only makes the components more reusable but also
          allows for greater flexibility.
        </p>
        <br />
        <button
          onClick={() => route.push("/")}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200 text-xl"
        >
          Back to Homepage
        </button>
      </main>
      <Footer />
    </div>
  );
}
