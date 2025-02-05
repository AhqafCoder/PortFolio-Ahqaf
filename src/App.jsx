import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
