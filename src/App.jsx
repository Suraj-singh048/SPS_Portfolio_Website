import Designing from "./components/Designing";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Experience from "./components/Experience";
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Designing />
      <Experience />
      <Skills />
      <Projects />
      <Certificates />
      <Footer />
    </>
  )
}