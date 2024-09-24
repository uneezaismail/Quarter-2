import React from "react";
import Navbar from "./navbar/page";
import Footer from "./footer/page";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-10">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to My Next.js Project
        </h1>
        <p className="text-2xl text-gray-700">
          This website is built using Next.js to demonstrate key web development
          concepts like routing and component communication.
          <br />
          <br />
          On this site, you’ll learn more about how we use the Next.js framework
          to create efficient, fast, and SEO-friendly web applications. Each
          page introduces different components and explains how they are
          structured and linked together.
          <br />
          <br />
          Dive deeper into our journey through the "About" and "Contact"
          pages to learn more about how this project was built.
        </p>
      </main>
      <Footer />
    </div>
  );
}
