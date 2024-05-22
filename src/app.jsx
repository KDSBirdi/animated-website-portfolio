import "./app.scss"
import Contact from "./components/contact/Contact";
import Hero from "./components/navbar/hero/Hero";
import Navbar from "./components/navbar/navbar";
import Parallax from "./components/navbar/parallax/Parallax";
import Services from "./components/navbar/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Test from "./test";

const App = () => {
  return (
  <div>
    <section id="Homepage">
      <Navbar />  
      <Hero />
    </section>
    <section id="Services"><Parallax type="services" /></section>
    <section><Services /></section>
    <section id="Portfolio"><Parallax type="portfolio" /></section>
    
    <Portfolio />
    
    <section id="Contact">
      <Contact />
    </section>
    {/* <Test /> */}
  </div>);
};

export default App;
