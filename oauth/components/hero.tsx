import React from "react";
import Navbar from "./navbar";
import { useSession } from "next-auth/react";
import Signin from "./signin";

const Hero = () => {
  const { data: session } = useSession();
  const isAuthenticated = !!session?.user;
  return (
    <div  className="relative h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero-3.avif')" }}>
      {isAuthenticated ? (
        <>
          <Navbar />
          <div className="relative z-10 flex flex-col items-center md:items-start justify-center text-white text-center md:text-start h-full px-4 md:p-16 ">
            <div className="max-w-lg md:py-6 mt-28">
              <h2 className="text-3xl font-bold">Start</h2>
              <h1 className="text-5xl font-bold md:font-extrabold my-4">
                Hiking
              </h1>
              <p className="text-lg md:text-2xl mb-6">
                Hiking is an activity of moderate difficulty, which involves
                walking across long distances, generally on trails or paths. The
                duration of the activity varies between short half-day programs
                and longer itineraries of over 20 days. It is usually an
                activity that allows groups of different sizes.
              </p>
            </div>
            <button className="max-w-lg border border-white px-10 py-2 md:py-3 md:px-20 text-xl bg-white bg-opacity-20 text-white font-bold rounded-3xl hover:bg-white hover:text-gray-700 transition">
              Start
            </button>
          </div>
        </>
      ) : (
        <Signin />
      )}
    </div>
  );
};

export default Hero;
