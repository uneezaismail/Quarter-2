export default function Home() {
  return (
    <div className="relative min-h-screen  flex flex-col items-center justify-center">
      <h1 className="bg-[#304ce7] text-center font-semibold text-[6vw] sm:text-[50px] p-2 border-6 border-black shadow-[10px_10px_15px_rgba(0,0,0,0.5)]">
        Hello World!
      </h1>
      <p className="text-center text-white font-light text-[4vw] sm:text-[20px] mt-[20px] px-4 max-w-[80%]">
        Hello everyone, It's{" "}
        <span className="text-yellow-400 font-georgia border-b-2 border-yellow-400">
          Uneeza Ismail
        </span>
        , <br /> 
        This is my first project using Next.js, featuring a simple "Hello World"
        <br />
        page with custom styling. It helped me explore Next.js fundamentals
        <br />
        like component structure and server-side rendering.
      </p>
    </div>
  );
}
