import Image from 'next/image'
import React from 'react'

const Project = () => {
  return (
    <section id='projectSection' className='flex flex-col items-center bg-gradient-to-b from-[#269DB5] to-[#1A1A1A] py-6 md:py-10 xl:py-24 h-fit'>
        <div className='flex fex-col items-center justify-center'><h3 className='w-fit text-3xl  lg:text-3xl xl:text-4xl items-center  border-b-2 border-b-primaryColor font-bold text-primaryColor'>
        MY PROJECTS
      </h3>
      </div>
      <p className='text-gray-200 text-xl md:text-2xl lg:w-[70%] px-4 sm:w-[80%] my-12'>Explore my latest projects, where I focus on creating clean, functional, and user-friendly designs. I&apos;m currently working on some exciting new projects that will be added soon—stay tuned for updates!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-2 xl:gap-4 w-[95%] lg:w-[98%] xl:w-[95%]">
  {/* Coffee Blog */}
  <div className="relative group w-[370px] h-[250px] xl:w-[450px] xl:h-[300px] mx-auto">
    <Image  src="/coffee.PNG"
      alt="Coffee Blog"
      width={200}
      height={200}
      unoptimized
      className="w-full h-full object-cover transition-opacity duration-300 rounded-md"/>
    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="text-white font-bold text-lg">Coffee Blog</span>
    </div>
  </div>

  {/* Interior Design */}
  <div className="relative group w-[370px] h-[250px] xl:w-[450px] xl:h-[300px] mx-auto">
    <Image
      src="/interior.PNG"
      alt="Interior Design"
      width={200}
      height={200}
      unoptimized
      className="w-full h-full object-cover transition-opacity duration-300 rounded-md"
    />
    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="text-white font-bold text-lg">Interior Design</span>
    </div>
  </div>

  {/* Resume Builder */}
  <div className="relative group w-[370px] h-[250px] xl:w-[450px] xl:h-[300px] mx-auto">
    <Image
      src="/resume.PNG"
      alt="Resume Builder"
      width={200}
      height={200}
      unoptimized
      className="w-full h-full object-cover transition-opacity duration-300 rounded-md"
    />
    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <span className="text-white font-bold text-lg">Resume Builder</span>
    </div>
  </div>
</div>



    </section>
  )
}

export default Project