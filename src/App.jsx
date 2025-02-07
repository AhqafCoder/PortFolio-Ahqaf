import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GlowEffect from "./components/GlowEffect"; // ✅ Import the glow effect
import "./index.css";

export default function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen relative">
      {/* ✅ Global Glow Effect */}
      <GlowEffect />

      <Navbar />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
