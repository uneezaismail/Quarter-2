import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <main id='aboutSection' className='bg-aboutColor py-6 md:py-10 xl:py-16 xl:px-10'>
    <div className='h-fit md:h-[600px] xl:h-[600px] flex flex-col md:flex-row w-[95%] lg:w-[90%] justify-between items-center text-gray-100 mx-auto'>
      <h3 className='md:hidden text-3xl items-center mb-10  border-b-2 border-b-primaryColor font-bold text-primaryColor'>
        ABOUT ME
      </h3>
      <div className='w-[300px] sm:w-[350px] md:w-[360px] md:h-[400px] lg:w-[450px] lg:h-[500px] bg-white rounded-xl'>
        <Image src={"/about-img.webp"} alt='about-image' width={500} height={400}/>
      </div>
      <div className='w-[95%] md:w-[55%] lg:w-[50%] mx-auto'>
        <h3 className='hidden md:text-3xl lg:text-3xl xl:text-4xl md:inline-block items-center mb-4  border-b-2 border-b-primaryColor font-bold text-primaryColor'>
          ABOUT ME
        </h3>
        <h2 className='font-bold text-4xl lg:text-5xl xl:text-6xl mt-10 mb-6 md:mt-1 md:mb-4 font-serif text-lavender '>A Glimpse Into My Journey</h2>
    <p className='xl:text-2xl sm:text-xl'>I&apos;m a passionate and driven developer with a keen eye for design and a love for crafting innovative digital solutions. With a strong foundation in web development and an ever-growing skillset, I specialize in building responsive, user-friendly websites and applications. Whether it&apos;s creating seamless user experiences or solving complex problems, I thrive on turning ideas into reality.
</p><br />
<p className='xl:text-2xl sm:text-xl'>
When I&apos;m not coding, you&apos;ll find me exploring new technologies, learning creative design techniques, or diving into challenges that inspire growth. Let&apos;s connect and bring your vision to life!</p>
      </div>
    </div>
  </main>

  )
}

export default About