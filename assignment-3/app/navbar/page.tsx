"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="bg-gray-800 p-2.5 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-bold">MyWebsite</h1>
        <div className="flex space-x-4 text-lg">
          <button
            className="px-6 py-3 my-3 rounded-md bg-gray-700 hover:bg-gray-600 "
            onClick={() => router.push("/")}
          >
            Home
          </button>
          <button
            className="px-6 py-3 my-3 rounded-md bg-gray-700 hover:bg-gray-600"
            onClick={() => router.push("/about")}
          >
            About
          </button>
          <button
            className="px-6 py-3 my-3 rounded-md bg-gray-700 hover:bg-gray-600"
            onClick={() => router.push("/contact")}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
