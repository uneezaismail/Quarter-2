import React from "react";
import { FaLaptopCode, FaReact } from "react-icons/fa6";
import { IoLogoFigma } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiTypescript } from "react-icons/si";

const Skill = () => {
  return (
    <section id="skillSection" className="flex flex-col items-center py-10 md:py-10 xl:py-16 bg-Darktale">
      <h3 className="w-fit text-3xl  lg:text-3xl xl:text-4xl items-center  border-b-2 border-b-black font-bold text-black">
        MY SKILLS
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-2 xl:gap-4  xl:w-[90%] mx-auto pt-14">
        <div className=" hover:text-black transition-colors duration-300 group flex flex-col items-center justify-evenly w-72 sm:w-80 xl:w-96 bg-black py-8 sm:py-10">
          <span className="text-primaryColor p-4 border-2 group-hover:text-white group-hover:border-white border-primaryColor rounded-full text-7xl ">
            <SiTypescript />
          </span>
          <span className="text-white text-3xl mt-6 mb-2 group-hover:text-primaryColor">Typescript</span>{" "}
          <span className="w-16 border-b-4 border-primaryColor group-hover:border-white"></span>
        </div>
        <div className=" hover:text-black transition-colors duration-300 group flex flex-col items-center justify-evenly  w-72 sm:w-80 xl:w-96 bg-black py-10">
          <span className="text-primaryColor p-4 border-2 border-primaryColor group-hover:text-white group-hover:border-white rounded-full text-7xl">
            <FaReact />
          </span>
          <span className="text-white text-3xl mt-6 mb-2 group-hover:text-primaryColor">React</span>{" "}
          <span className="w-16 border-b-4 border-primaryColor group-hover:border-white"></span>
        </div>
        <div className=" hover:text-black transition-colors duration-300 group flex flex-col items-center justify-evenly w-72 sm:w-80 xl:w-96 bg-black py-10">
          <span className="text-primaryColor p-4 border-2 border-primaryColor group-hover:text-white group-hover:border-white rounded-full text-7xl">
            <FaLaptopCode />
          </span>
          <span className="text-white text-3xl mt-6 mb-2 group-hover:text-primaryColor">Web Development</span>{" "}
          <span className="w-16 border-b-4 border-primaryColor group-hover:border-white"></span>
        </div>
        <div className=" hover:text-black transition-colors duration-300 group flex flex-col items-center justify-evenly w-72 sm:w-80 xl:w-96 bg-black py-10">
          <span className="text-primaryColor p-4 border-2 border-primaryColor group-hover:text-white group-hover:border-white rounded-full text-7xl">
            <RiTailwindCssFill />
          </span>
          <span className="text-white text-3xl mt-6 mb-2 group-hover:text-primaryColor">Tailwind css</span>{" "}
          <span className="w-16 border-b-4 border-primaryColor group-hover:border-white"></span>
        </div>
        <div className=" hover:text-black transition-colors duration-300 group flex flex-col items-center justify-evenly w-72 sm:w-80 xl:w-96 bg-black py-10">
          <span className="text-primaryColor p-4 border-2 border-primaryColor group-hover:text-white group-hover:border-white rounded-full text-7xl">
            <IoLogoFigma />
          </span>
          <span className="text-white text-3xl mt-6 mb-2 group-hover:text-primaryColor">Figma</span>{" "}
          <span className="w-16 border-b-4 border-primaryColor group-hover:border-white"></span>
        </div>
        <div className=" hover:text-black transition-colors duration-300 group flex flex-col items-center justify-evenly w-72 sm:w-80 xl:w-96 bg-black py-10">
          <span className="text-primaryColor p-4 border-2 border-primaryColor group-hover:text-white group-hover:border-white rounded-full text-7xl">
            <SiNextdotjs />
          </span>
          <span className="text-white text-3xl mt-6 mb-2 group-hover:text-primaryColor">Next.js</span>{" "}
          <span className="w-16 border-b-4 border-primaryColor group-hover:border-white"></span>
        </div>
      </div>
    </section>
  );
};

export default Skill;
