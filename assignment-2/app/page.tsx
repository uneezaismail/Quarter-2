import About from "./component/about";
import Footer from "./component/footer";
import Header from "./component/header";

function Home() {
  return (
    <>
      <div>
        <p className="text-center text-white">
          🎉 20% OFF on all beauty products! Use code BEAUTY20 at checkout. Limited time offer!
        </p>
        <Header />
      </div>

      <div className="relative">
        <About />

        <h1
  id="img-heading"
  className="absolute inset-0 flex items-center justify-center text-[5vh] sm:text-[15vh] italic text-white mb-[10%] sm:mb-[7%] sm:mr-[10%] mr-[5%]"
  style={{
    textShadow: "2px 0px black, -2px 2px 0px black, 2px -2px 0px black, -2px -2px 0px black"
  }}
>
  Welcome
</h1>
      </div>

      <Footer />
    </>
  );
}

export default Home;

