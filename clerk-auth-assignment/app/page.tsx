import Image from "next/image";
import Hero from "./Hero/page";
import Link from "next/link";

export default function Home() {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-emerald-950">
    <div className="text-center flex flex-col items-center justify-center px-6">
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
        Learn How to Set Up Clerk
      </h1>
      {/* Subtitle */}
      <p className="text-lg md:text-xl text-gray-200 mb-8">
        Sign in to access step-by-step guides and tutorials on setting up Clerk for your applications.
      </p>
      {/* Sign In Button */}
     
        <button className="bg-white text-emerald-950 py-3 px-8 rounded-full text-lg font-medium hover:bg-gray-200 transition duration-300">
          <Link href={"/sign-in"}>Sign In</Link>
        </button>
      
    </div>
  </section>
  );
}

  