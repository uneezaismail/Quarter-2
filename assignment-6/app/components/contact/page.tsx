// import { Input } from '@/components/ui/input'
// import { Textarea } from '@/components/ui/textarea'
// import Link from 'next/link'
// import React from 'react'
// import { FaGithub, FaLinkedin } from 'react-icons/fa6'
// import { IoIosMail } from 'react-icons/io'

// const Contact = () => {
//   return (
//     <section>
//         <ul>
//             <li className='bg-primaryColor flex flex-row items-center text-2xl'><IoIosMail /> <p>Uneeza Ismail</p></li>
//             <li><FaGithub/> <Link href={"https://www.linkedin.com/in/uneeza-ismail-03a7852b4"}>Uneeza Ismail</Link></li>
//             <li><FaLinkedin/> <Link href={"https://www.linkedin.com/in/uneeza-ismail-03a7852b4"}>https://www.linkedin.com/in/uneeza-ismail-03a7852b4</Link></li>
//             </ul>
        
        
//         <div>
//             <Input/>
//             <Input/>
//               <Textarea/>
//         </div>
//     </section>
//   )
// }

// export default Contact


import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';

const ContactMe  = () => {
  return (
    <section id="contact" className="py-6 md:py-10 xl:py-16 xl:px-10 bg-[#212529]">
      <div className=" max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="justify-center flex items-center w-fit text-3xl lg:text-3xl xl:text-4xl  border-b-2 border-b-primaryColor font-bold text-primaryColor mb-10 mx-auto">Contact Me</h2>
        <div className="bg-black rounded-lg p-6 sm:p-8 lg:p-10">
          <form className="space-y-6" >
            <div className="flex flex-col md:flex-row md:space-x-6">
              <div className="w-full md:w-1/2">
                <label htmlFor="name" className="block text-white font-semibold mb-2 text-xl md:text-2xl">Name</label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-4 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primaryColor text-xl"
                />
              </div>
              <div className="w-full md:w-1/2 mt-4 md:mt-0">
                <label htmlFor="email" className="block text-white font-semibold mb-2 text-xl md:text-2xl">Email</label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-4 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primaryColor text-xl"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-white font-semibold mb-2 text-xl md:text-2xl">Message</label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows={5}
                className="w-full p-4 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primaryColor text-xl"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-primaryColor  text-white font-semibold rounded-lg shadow-md  hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryColor transition ease-in-out duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
