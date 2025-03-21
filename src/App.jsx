import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About"
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <div >
      
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <Analytics />

    </div>
  );
}
