import Link from "next/link";
import Footer from "../footer/page";
import Navbar from "../navbar/page";
import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-10">
        <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg text-gray-700 text-2xl">
          This page features a simple contact form that demonstrates how to
          capture user input and handle form submissions. The form includes
          fields for your name, email, and message.
          <br />
          <br />
          Each input field is designed with Tailwind CSS, making it responsive
          and easy to interact with. Once the form is submitted, it would
          typically send the data to a backend server (though this feature is
          not included in this demo).
          <br />
          <br />
          <span className="text-blue-900">
            Feel free to experiment by filling out the fields below!
          </span>
        </p>
        <form className="space-y-4 text-lg">
          <div>
            <label className="block  font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block  font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">
              Message
            </label>
            <textarea
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              placeholder="Your Message"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 text-xl"
          >
            Submit
          </button>
        </form>
        <br />
        <Link
          href="/"
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200 text-xl"
        >
          Back to Homepage{" "}
        </Link>
      </main>
      <Footer />
    </div>
  );
}
