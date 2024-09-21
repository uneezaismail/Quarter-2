function Header() {
  return (
    <>
      <div className="bg-[#28112b] flex w-full h-[70px] justify-between items-center px-[5%]">
        <h1 className="text-[1.5rem] sm:text-[2rem] font-light text-white mt-[1.5%]">
          Beauty by
          <span className="font-serif text-[#813E25] font-medium">
            <b> EZ@</b>
          </span>
        </h1>
        <ul className="flex flex-row space-x-4 sm:space-x-10 items-center text-[1rem] sm:text-[1.2rem]">
          <li className="border-2 border-transparent hover:border-red-500">
            <a href="#" className="no-underline text-white hover:text-red-500">
              Home
            </a>
          </li>
          <li className="border-2 border-transparent hover:border-red-500">
            <a href="#" className="no-underline text-white hover:text-red-500">
              About
            </a>
          </li>
          <li className="border-2 border-transparent hover:border-red-500">
            <a href="#" className="no-underline text-white hover:text-red-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
