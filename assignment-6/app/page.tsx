import About from "./components/about/page";
import Header from "./components/header/page";
import Hero from "./components/hero/page";

export default function Home() {
  return (
   <div>
    <Header/>
    <Hero/>
    <About/>
   </div>
  );
}
