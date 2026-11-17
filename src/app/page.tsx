import Nav from "@/components/nav";
import SideRail from "@/components/side-rail";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import About from "@/components/about";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Stack from "@/components/stack";
import Advancements from "@/components/advancements";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <>
      <Nav />
      <SideRail />
      <main>
        <Hero />
        <Stats />
        <About />
        <Projects />
        <Experience />
        <Stack />
        <Advancements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
