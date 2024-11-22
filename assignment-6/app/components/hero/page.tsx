import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <main className="flex flex-col md:flex-row items-center justify-evenly md:justify-between bg-[linear-gradient(-135deg,_#1A1A1A,_#0DCAF0)] h-[650px] md:h-[600px] xl:h-[650px] px-4 md:px-10 lg:px-20">
      <div className="md:hidden px-6 flex items-center mr-7 " >
        <Image
          src={"/download.png"}
          width={300}
          height={400}
          className="object-cover"
          alt="Hero-image"
        />
      </div>
      <div className="px-6 sm:w-[80%] md:w-[50%] lg:w-[50%] mx-auto">
        <div className="text-5xl md:text-6xl lg:text-7xl text-white font-cookie">
          <span className="text-3xl font-cookie">Hi,</span>
          <br />I am{" "}
          <span className="bg-gradient-to-tr from-[#1A1A1A] to-[#0f373e] text-transparent  bg-clip-text font-bold font-serif text-4xl md:text-5xl lg:text-6xl">
            Frontend Developer
          </span>{" "}
          and{" "}
          <span className="bg-gradient-to-tr from-[#1A1A1A] to-[#0f373e] text-transparent  bg-clip-text font-bold font-serif text-4xl md:text-5xl lg:text-6xl">
            Ui/Ux Designer
          </span>
          .
        </div>
        <div className="xl:w-[60%] flex justify-evenly py-6 px-2 sm:py-8 ">
          {" "}
          <Link href="#projectSection">
          <Button className=" font-semibold bg-white text-blue-950  px-3 py-5 md:px-4 md:py-6 lg:px-4 lg:py-6 text-md lg:text-xl sm:text-xl  shadow-md shadow-sky-200 hover:bg-black  hover:text-white rounded-xl">
            View Projects
          </Button>
          </Link>{" "}
          <Link href={"https://www.linkedin.com/in/uneeza-ismail-03a7852b4"}>
          <Button className=" font-semibold bg-transparent border-2 border-white  px-4  py-5 md:px-4 md:py-6 lg:px-4 lg:py-6 text-md lg:text-xl sm:text-xl rounded-xl hover:shadow-md shadow-sky-300 hover:bg-hoverSkyBlue ">
            Connect
          </Button>
          </Link>
        </div>
      </div>
      <div className='hidden md:block md:w-[45%] className="object-cover"'>
        <Image
          src={"/download.png"}
          width={500}
          height={500}
          alt="Hero-image"
        />
      </div>
    </main>
  );
};

export default Hero;
