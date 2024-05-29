import "./app.scss"
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/navbar/hero/Hero";
import Navbar from "./components/navbar/navbar";
import Parallax from "./components/navbar/parallax/Parallax";
import Services from "./components/navbar/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Test from "./test";

const App = () => {
  return (
  <div>
    <Cursor />
    <section id="Homepage">
      <Navbar />  
      <Hero />
    </section>
    <section id="Projects"><Parallax type="projects" /></section>
    <Portfolio />
    
    <section id="About"><Parallax type="about" /></section>
    {/* <section><Services /></section> */}
    <section><About /></section>

    

    <section id="Contact">
      <Contact />
    </section>
    {/* <Test /> */}

    
  </div>);
};

export default App;
