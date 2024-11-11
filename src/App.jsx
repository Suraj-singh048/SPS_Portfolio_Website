// import AboutMe from "./components/AboutMe";
import Designing from "./components/Designing";
// import DigitalMaster from "./components/DigitalMaster";
import Footer from "./components/Footer";
// import GetToKnow from "./components/GetToKnow";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
// import Transform from "./components/Transform";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Designing />
      <Skills />
      <Projects />
      {/* <Transform /> */}
      {/* <DigitalMaster /> */}
      <Footer />
    </>
  )
}